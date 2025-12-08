import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAuthenticated } from "@/lib/auth";
import { Page } from "@/types";

export async function POST(
  req: NextRequest,
) {
  const user = await isAuthenticated();
  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title: titleFromRequest, pages, prompt } = await req.json();

  const title = titleFromRequest ?? "TOMO Project";

  const formattedTitle = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .split("-")
  .filter(Boolean)
  .join("-")
  .slice(0, 96);

  try {
    const supabase = await createClient();

    // Generate unique project ID
    const projectId = `${Date.now()}-${formattedTitle}`;
    
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

    const commitTitle = !prompt || prompt.trim() === "" ? "Create new website" : prompt;
    
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
        { error: error.message, ok: false },
        { status: 500 }
      );
    }

    const commits = [{
      title: commitTitle,
      oid: projectId,
      date: new Date().toISOString(),
    }];

    let newProject = {
      files: filesData,
      pages: pagesData,
      commits,
      project: {
        id: data.id,
        space_id: `${user.id}/${projectId}`,
        _updatedAt: data.updated_at,
      }
    }
    
    const path = `${user.id}/${projectId}`;
    
    return NextResponse.json({ space: newProject, path, ok: true }, { status: 201 });
  } catch (err: any) {
    console.error("Error in POST /api/me/projects:", err);
    return NextResponse.json(
      { error: err.message, ok: false },
      { status: 500 }
    );
  }
}