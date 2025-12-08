import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
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
    const supabase = await createClient();
    
    // Delete project from Supabase
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', repoId)
      .eq('user_id', user.id);
    
    if (error) {
      console.error("Error deleting project:", error);
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }
    
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

    // Format pages from database
    const pages: Page[] = project.pages || [];
    
    // Format files from database
    const files: string[] = (project.files || []).map((file: any) => file.path);
    
    // Format commits
    const commits: Commit[] = project.last_commit ? [{
      title: project.last_commit.title,
      oid: project.id,
      date: project.last_commit.timestamp,
    }] : [];
    
    return NextResponse.json(
      {
        project: {
          id: project.id,
          space_id: `${user.id}/${project.id}`,
          private: false,
          _updatedAt: project.updated_at,
        },
        pages,
        files,
        commits,
        ok: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error getting project:", error);
    return NextResponse.json(
      { error: error.message, ok: false },
      { status: 500 }
    );
  }
}
