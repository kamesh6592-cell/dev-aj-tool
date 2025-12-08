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

    // Get screenshot from request body
    const formData = await req.formData();
    const screenshot = formData.get("screenshot") as File;

    if (!screenshot || !(screenshot instanceof File)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Screenshot file is required",
        },
        { status: 400 }
      );
    }

    // Upload screenshot to Vercel Blob
    const pathname = `${repoId}/screenshots/${Date.now()}.png`;
    const blob = await put(pathname, screenshot, {
      access: 'public',
      addRandomSuffix: false,
    });

    // Update project with screenshot URL
    const { error: updateError } = await supabase
      .from('projects')
      .update({
        screenshot_url: blob.url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', repoId)
      .eq('user_id', user.id);

    if (updateError) {
      console.error("Error updating project with screenshot:", updateError);
      return NextResponse.json(
        { ok: false, error: "Failed to save screenshot reference" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      ok: true, 
      screenshotUrl: blob.url,
    }, { status: 200 });

  } catch (error) {
    console.error('Error saving screenshot:', error);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to save screenshot",
      },
      { status: 500 }
    );
  }
}
