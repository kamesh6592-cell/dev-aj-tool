import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAuthenticated } from "@/lib/auth";
import { Page } from "@/types";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ namespace: string; repoId: string }> }
) {
  const user = await isAuthenticated();
  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const param = await params;
  const { namespace, repoId } = param;
  const { pages, commitTitle = "Manual changes saved" } = await req.json();

  if (!pages || !Array.isArray(pages) || pages.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Pages are required" },
      { status: 400 }
    );
  }

  try {
    const supabase = await createClient();
    
    // Serialize pages and files data
    const pagesData = pages.map((page: Page) => ({
      path: page.path,
      html: page.html,
    }));

    const filesData = pages.map((page: Page) => ({
      path: page.path,
      content: page.html,
      size: page.html.length,
    }));

    // Update project in Supabase
    const { data, error } = await supabase
      .from('projects')
      .update({
        pages: pagesData,
        files: filesData,
        last_commit: {
          title: commitTitle,
          timestamp: new Date().toISOString(),
        },
        updated_at: new Date().toISOString(),
      })
      .eq('id', repoId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      console.error("Error saving manual changes:", error);
      return NextResponse.json(
        {
          ok: false,
          error: error.message || "Failed to save changes",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      pages: pagesData,
      commit: {
        title: commitTitle,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error: any) {
    console.error("Error saving manual changes:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Failed to save changes",
      },
      { status: 500 }
    );
  }
}
