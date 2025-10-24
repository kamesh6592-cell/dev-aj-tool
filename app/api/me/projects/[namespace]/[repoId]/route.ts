import { NextRequest, NextResponse } from "next/server";
import { RepoDesignation, spaceInfo, listFiles, deleteRepo, listCommits, downloadFile } from "@huggingface/hub";

import { isAuthenticated } from "@/lib/auth";
import { Commit, Page } from "@/types";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ namespace: string; repoId: string }> }
) {
  const user = await isAuthenticated();

  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const param = await params;
  const { namespace, repoId } = param;

  try {
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
    
    const repo: RepoDesignation = {
      type: "space",
      name: `${namespace}/${repoId}`,
    };
    
    await deleteRepo({
      repo,
      accessToken: user.token as string,
    });

    
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ namespace: string; repoId: string }> }
) {
  const user = await isAuthenticated();

  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const param = await params;
  const { namespace, repoId } = param;

  try {
    const space = await spaceInfo({
      name: namespace + "/" + repoId,
      accessToken: user.token as string,
      additionalFields: ["author"],
    });

    if (!space || space.sdk !== "static") {
      return NextResponse.json(
        {
          ok: false,
          error: "Space is not a static space",
        },
        { status: 404 }
      );
    }
    if (space.author !== user.name) {
      return NextResponse.json(
        {
          ok: false,
          error: "Space does not belong to the authenticated user",
        },
        { status: 403 }
      );
    }

    const repo: RepoDesignation = {
      type: "space",
      name: `${namespace}/${repoId}`,
    };

    const htmlFiles: Page[] = [];
    const files: string[] = [];

    const allowedFilesExtensions = ["jpg", "jpeg", "png", "gif", "svg", "webp", "avif", "heic", "heif", "ico", "bmp", "tiff", "tif", "mp4", "webm", "ogg", "avi", "mov", "mp3", "wav", "ogg", "aac", "m4a"];
    
    for await (const fileInfo of listFiles({repo, accessToken: user.token as string})) {
      if (fileInfo.path.endsWith(".html") || fileInfo.path.endsWith(".css") || fileInfo.path.endsWith(".js") || fileInfo.path.endsWith(".json")) {
        const blob = await downloadFile({ repo, accessToken: user.token as string, path: fileInfo.path, raw: true });
        const html = await blob?.text();
        if (!html) {
          continue;
        }
        if (fileInfo.path === "index.html") {
          htmlFiles.unshift({
            path: fileInfo.path,
            html,
          });
        } else {
          htmlFiles.push({
            path: fileInfo.path,
            html,
          });
        }
      }
      if (fileInfo.type === "directory" && (["videos", "images", "audio"].includes(fileInfo.path) || fileInfo.path === "components")) {
        for await (const subFileInfo of listFiles({repo, accessToken: user.token as string, path: fileInfo.path})) {
          if (subFileInfo.path.includes("components")) {
            const blob = await downloadFile({ repo, accessToken: user.token as string, path: subFileInfo.path, raw: true });
            const html = await blob?.text();
            if (!html) {
              continue;
            }
            htmlFiles.push({
              path: subFileInfo.path,
              html,
            });
          } else if (allowedFilesExtensions.includes(subFileInfo.path.split(".").pop() || "")) {
            files.push(`https://huggingface.co/spaces/${namespace}/${repoId}/resolve/main/${subFileInfo.path}`);
          }
        }
      }
    }
    const commits: Commit[] = [];
    for await (const commit of listCommits({ repo, accessToken: user.token as string })) {
      if (commit.title.includes("initial commit") || commit.title.includes("image(s)") || commit.title.includes("Removed files from promoting")) {
        continue;
      }
      commits.push({
        title: commit.title,
        oid: commit.oid,
        date: commit.date,
      });
    }
    
    if (htmlFiles.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "No HTML files found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        project: {
          id: space.id,
          space_id: space.name,
          private: space.private,
          _updatedAt: space.updatedAt,
        },
        pages: htmlFiles,
        files,
        commits,
        ok: true,
      },
      { status: 200 }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.statusCode === 404) {
      return NextResponse.json(
        { error: "Space not found", ok: false },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { error: error.message, ok: false },
      { status: 500 }
    );
  }
}
