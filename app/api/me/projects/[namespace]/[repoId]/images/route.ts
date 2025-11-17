import { NextRequest, NextResponse } from "next/server";
import { RepoDesignation, spaceInfo, uploadFiles } from "@huggingface/hub";

import { isAuthenticated } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ namespace: string; repoId: string }> }
) {
  try {
    const user = await isAuthenticated();

    if (user instanceof NextResponse || !user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const param = await params;
    const { namespace, repoId } = param;

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

    // Parse the FormData to get the media files
    const formData = await req.formData();
    const mediaFiles = formData.getAll("images") as File[];

    if (!mediaFiles || mediaFiles.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "At least one media file is required under the 'images' key",
        },
        { status: 400 }
      );
    }

    const files: File[] = [];
    for (const file of mediaFiles) {
      if (!(file instanceof File)) {
        return NextResponse.json(
          {
            ok: false,
            error: "Invalid file format - all items under 'images' key must be files",
          },
          { status: 400 }
        );
      }

      // Check if file is a supported media type
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');
      const isAudio = file.type.startsWith('audio/');
      
      if (!isImage && !isVideo && !isAudio) {
        return NextResponse.json(
          {
            ok: false,
            error: `File ${file.name} is not a supported media type (image, video, or audio)`,
          },
          { status: 400 }
        );
      }

      // Create File object with appropriate folder prefix
      let folderPrefix = 'images/';
      if (isVideo) {
        folderPrefix = 'videos/';
      } else if (isAudio) {
        folderPrefix = 'audio/';
      }
      
      const fileName = `${folderPrefix}${file.name}`;
      const processedFile = new File([file], fileName, { type: file.type });
      files.push(processedFile);
    }

    // Upload files to HuggingFace space
    const repo: RepoDesignation = {
      type: "space",
      name: `${namespace}/${repoId}`,
    };

    await uploadFiles({
      repo,
      files,
      accessToken: user.token as string,
      commitTitle: `Upload ${files.length} media file(s)`,
    });

    return NextResponse.json({ 
      ok: true, 
      message: `Successfully uploaded ${files.length} media file(s) to ${namespace}/${repoId}/`,
      uploadedFiles: files.map((file) => `https://huggingface.co/spaces/${namespace}/${repoId}/resolve/main/${file.name}`),
    }, { status: 200 });

  } catch (error) {
    console.error('Error uploading media files:', error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to upload media files",
      },
      { status: 500 }
    );
  }
}
