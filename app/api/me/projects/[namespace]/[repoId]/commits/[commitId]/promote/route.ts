import { NextRequest, NextResponse } from "next/server";
import { RepoDesignation, listFiles, spaceInfo, uploadFiles, deleteFiles, downloadFile } from "@huggingface/hub";

import { isAuthenticated } from "@/lib/auth";
import { Page } from "@/types";

export async function POST(
  req: NextRequest,
  { params }: { 
    params: Promise<{ 
      namespace: string; 
      repoId: string; 
      commitId: string; 
    }> 
  }
) {
  const user = await isAuthenticated();

  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const param = await params;
  const { namespace, repoId, commitId } = param;

  try {
    const repo: RepoDesignation = {
      type: "space",
      name: `${namespace}/${repoId}`,
    };

    const space = await spaceInfo({
      name: `${namespace}/${repoId}`,
      accessToken: user.token as string,
      additionalFields: ["author"],
    });

    if (!space || space.sdk !== "static") {
      return NextResponse.json(
        { ok: false, error: "Space is not a static space." },
        { status: 404 }
      );
    }
    
    if (space.author !== user.name) {
      return NextResponse.json(
        { ok: false, error: "Space does not belong to the authenticated user." },
        { status: 403 }
      );
    }

    const files: File[] = [];
    const pages: Page[] = [];
    const mediaFiles: string[] = [];
    const allowedExtensions = ["html", "md", "css", "js", "json", "txt"];
    const allowedFilesExtensions = ["jpg", "jpeg", "png", "gif", "svg", "webp", "avif", "heic", "heif", "ico", "bmp", "tiff", "tif", "mp4", "webm", "ogg", "avi", "mov", "mp3", "wav", "ogg", "aac", "m4a"];
    const commitFilePaths: Set<string> = new Set();
    
    for await (const fileInfo of listFiles({
      repo,
      accessToken: user.token as string,
      revision: commitId,
    })) {
      const fileExtension = fileInfo.path.split('.').pop()?.toLowerCase();
      
      if (fileInfo.path.endsWith(".html") || fileInfo.path.endsWith(".css") || fileInfo.path.endsWith(".js") || fileInfo.path.endsWith(".json")) {
        commitFilePaths.add(fileInfo.path);
        
        const blob = await downloadFile({ 
          repo, 
          accessToken: user.token as string, 
          path: fileInfo.path, 
          revision: commitId,
          raw: true 
        });
        const content = await blob?.text();
        
        if (content) {
          let mimeType = "text/plain";
          
          switch (fileExtension) {
            case "html":
              mimeType = "text/html";
              break;
            case "css":
              mimeType = "text/css";
              break;
            case "js":
              mimeType = "application/javascript";
              break;
            case "json":
              mimeType = "application/json";
              break;
          }
          
          if (fileInfo.path === "index.html") {
            pages.unshift({
              path: fileInfo.path,
              html: content,
            });
          } else {
            pages.push({
              path: fileInfo.path,
              html: content,
            });
          }
          
          const file = new File([content], fileInfo.path, { type: mimeType });
          files.push(file);
        }
      }
      else if (fileInfo.type === "directory" && (["videos", "images", "audio"].includes(fileInfo.path) || fileInfo.path === "components")) {
        for await (const subFileInfo of listFiles({
          repo,
          accessToken: user.token as string,
          revision: commitId,
          path: fileInfo.path,
        })) {
          if (subFileInfo.path.includes("components")) {
            commitFilePaths.add(subFileInfo.path);
            const blob = await downloadFile({ 
              repo, 
              accessToken: user.token as string, 
              path: subFileInfo.path, 
              revision: commitId,
              raw: true 
            });
            const content = await blob?.text();
            
            if (content) {
              pages.push({
                path: subFileInfo.path,
                html: content,
              });
              
              const file = new File([content], subFileInfo.path, { type: "text/html" });
              files.push(file);
            }
          } else if (allowedFilesExtensions.includes(subFileInfo.path.split(".").pop() || "")) {
            commitFilePaths.add(subFileInfo.path);
            mediaFiles.push(`https://huggingface.co/spaces/${namespace}/${repoId}/resolve/main/${subFileInfo.path}`);
          }
        }
      }
      else if (allowedExtensions.includes(fileExtension || "")) {
        commitFilePaths.add(fileInfo.path);
      }
    }

    const mainBranchFilePaths: Set<string> = new Set();
    for await (const fileInfo of listFiles({
      repo,
      accessToken: user.token as string,
      revision: "main",
    })) {
      const fileExtension = fileInfo.path.split('.').pop()?.toLowerCase();
      
      if (allowedExtensions.includes(fileExtension || "")) {
        mainBranchFilePaths.add(fileInfo.path);
      }
    }

    const filesToDelete: string[] = [];
    for (const mainFilePath of mainBranchFilePaths) {
      if (!commitFilePaths.has(mainFilePath)) {
        filesToDelete.push(mainFilePath);
      }
    }

    if (files.length === 0 && filesToDelete.length === 0) {
      return NextResponse.json(
        { ok: false, error: "No files found in the specified commit and no files to delete" },
        { status: 404 }
      );
    }

    if (filesToDelete.length > 0) {
      await deleteFiles({
        repo,
        paths: filesToDelete,
        accessToken: user.token as string,
        commitTitle: `Removed files from promoting ${commitId.slice(0, 7)}`,
        commitDescription: `Removed files that don't exist in commit ${commitId}:\n${filesToDelete.map(path => `- ${path}`).join('\n')}`,
      });
    }

    if (files.length > 0) {
      await uploadFiles({
        repo,
        files,
        accessToken: user.token as string,
        commitTitle: `Promote version ${commitId.slice(0, 7)} to main`,
        commitDescription: `Promoted commit ${commitId} to main branch`,
      });
    }

    return NextResponse.json(
      { 
        ok: true, 
        message: "Version promoted successfully",
        promotedCommit: commitId,
        pages: pages,
        files: mediaFiles,
      },
      { status: 200 }
    );

  } catch (error: any) {
    
    // Handle specific HuggingFace API errors
    if (error.statusCode === 404) {
      return NextResponse.json(
        { ok: false, error: "Commit not found" },
        { status: 404 }
      );
    }
    
    if (error.statusCode === 403) {
      return NextResponse.json(
        { ok: false, error: "Access denied to repository" },
        { status: 403 }
      );
    }

    return NextResponse.json(
      { ok: false, error: error.message || "Failed to promote version" },
      { status: 500 }
    );
  }
}
