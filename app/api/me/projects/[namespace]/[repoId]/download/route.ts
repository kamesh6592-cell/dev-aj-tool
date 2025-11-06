import { NextRequest, NextResponse } from "next/server";
import { RepoDesignation, listFiles, spaceInfo, downloadFile } from "@huggingface/hub";
import JSZip from "jszip";

import { isAuthenticated } from "@/lib/auth";

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
      name: `${namespace}/${repoId}`,
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

    // Create a new JSZip instance
    const zip = new JSZip();

    // Iterate through all files in the repo
    for await (const fileInfo of listFiles({ 
      repo, 
      accessToken: user.token as string 
    })) {
      // Skip directories and hidden files
      if (fileInfo.type === "directory" || fileInfo.path.startsWith(".")) {
        continue;
      }

      try {
        // Download the file
        const blob = await downloadFile({ 
          repo, 
          accessToken: user.token as string, 
          path: fileInfo.path, 
          raw: true 
        });

        if (blob) {
          // Add file to zip
          const arrayBuffer = await blob.arrayBuffer();
          zip.file(fileInfo.path, arrayBuffer);
        }
      } catch (error) {
        console.error(`Error downloading file ${fileInfo.path}:`, error);
        // Continue with other files even if one fails
      }
    }

    // Generate the ZIP file as a Blob
    const zipBlob = await zip.generateAsync({ 
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });

    // Create the filename from the project name
    const projectName = `${namespace}-${repoId}`.replace(/[^a-zA-Z0-9-_]/g, '_');
    const filename = `${projectName}.zip`;

    // Return the ZIP file
    return new NextResponse(zipBlob, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": zipBlob.size.toString(),
      },
    });
  } catch (error: any) {
    console.error("Error creating ZIP:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Failed to create ZIP file" },
      { status: 500 }
    );
  }
}

