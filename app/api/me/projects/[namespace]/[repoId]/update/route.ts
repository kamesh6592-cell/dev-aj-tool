import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAuthenticated } from "@/lib/auth";
import { Page } from "@/types";

/**
 * UPDATE route - for updating existing projects or creating new ones after AI streaming
 * This route handles the Supabase database storage after client-side AI response processing
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ namespace: string; repoId: string }> }
) {
  const user = await isAuthenticated();
  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const param = await params;
  let { namespace, repoId } = param;
  const { pages, commitTitle = "AI-generated changes", isNew, projectName } = await req.json();

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

    if (isNew) {
      // Creating a new project
      const title = projectName || "TOMO Project";
      const formattedTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .split("-")
        .filter(Boolean)
        .join("-")
        .slice(0, 96);

      // Generate unique project ID
      const projectId = `${Date.now()}-${formattedTitle}`;
      
      // Insert new project into Supabase
      const { data, error } = await supabase
        .from('projects')
        .insert({
          id: projectId,
          user_id: user.id,
          name: title,
          slug: formattedTitle,
          description: `Project created with TOMO`,
          pages: pagesData,
          files: filesData,
          last_commit: {
            title: commitTitle,
            timestamp: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating project in Supabase:", error);
        return NextResponse.json(
          {
            ok: false,
            error: `Failed to create project: ${error.message}`,
          },
          { status: 500 }
        );
      }

      namespace = user.id;
      repoId = projectId;

      return NextResponse.json({
        ok: true,
        pages: pagesData,
        repoId: `${namespace}/${repoId}`,
        projectId: projectId,
        commit: {
          title: commitTitle,
          timestamp: new Date().toISOString(),
        }
      });
    } else {
      // Updating existing project
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
        console.error("Error updating project in Supabase:", error);
        return NextResponse.json(
          {
            ok: false,
            error: `Failed to update project: ${error.message}`,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        ok: true,
        pages: pagesData,
        repoId: `${namespace}/${repoId}`,
        commit: {
          title: commitTitle,
          timestamp: new Date().toISOString(),
        }
      });
    }
  } catch (error: any) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Failed to update project",
      },
      { status: 500 }
    );
  }
}

