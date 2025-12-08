import { NextRequest, NextResponse } from "next/server";
import JSZip from "jszip";
import { createClient } from "@/lib/supabase/server";
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
    const supabase = await createClient();
    
    // Get project from Supabase
    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', repoId)
      .eq('user_id', user.id)
      .single();

    if (error || !project) {
      return NextResponse.json(
        {
          ok: false,
          error: "Project not found",
        },
        { status: 404 }
      );
    }

    const zip = new JSZip();

    // Add all files from the project
    const files = project.files || [];
    for (const file of files) {
      if (file.path && file.content) {
        zip.file(file.path, file.content);
      }
    }

    const zipBlob = await zip.generateAsync({ 
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });

    const projectName = project.slug || project.name || repoId;
    const filename = `${projectName.replace(/[^a-zA-Z0-9-_]/g, '_')}.zip`;

    return new NextResponse(zipBlob, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": zipBlob.size.toString(),
      },
    });
  } catch (error: any) {
    console.error("Error creating ZIP file:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Failed to create ZIP file" },
      { status: 500 }
    );
  }
}

