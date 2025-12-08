import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createClient } from "@/lib/supabase/server";
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

    const supabase = await createClient();
    
    // Verify project belongs to user
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('id')
      .eq('id', repoId)
      .eq('user_id', user.id)
      .single();

    if (projectError || !project) {
      return NextResponse.json(
        { ok: false, error: "Project not found" },
        { status: 404 }
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

    const uploadedUrls: string[] = [];

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

      // Determine folder prefix
      let folderPrefix = 'images';
      if (isVideo) {
        folderPrefix = 'videos';
      } else if (isAudio) {
        folderPrefix = 'audio';
      }
      
      // Upload to Vercel Blob
      const pathname = `${repoId}/${folderPrefix}/${file.name}`;
      const blob = await put(pathname, file, {
        access: 'public',
        addRandomSuffix: false,
      });

      uploadedUrls.push(blob.url);
    }

    return NextResponse.json({ 
      ok: true, 
      message: `Successfully uploaded ${uploadedUrls.length} media file(s)`,
      uploadedFiles: uploadedUrls,
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
