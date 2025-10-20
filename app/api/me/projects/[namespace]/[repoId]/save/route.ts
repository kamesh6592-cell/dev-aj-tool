import { NextRequest, NextResponse } from "next/server";
import { uploadFiles } from "@huggingface/hub";

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
    // Prepare files for upload
    const files: File[] = [];
    pages.forEach((page: Page) => {
      // Determine MIME type based on file extension
      let mimeType = "text/html";
      if (page.path.endsWith(".css")) {
        mimeType = "text/css";
      } else if (page.path.endsWith(".js")) {
        mimeType = "text/javascript";
      } else if (page.path.endsWith(".json")) {
        mimeType = "application/json";
      }
      const file = new File([page.html], page.path, { type: mimeType });
      files.push(file);
    });

    const response = await uploadFiles({
      repo: {
        type: "space",
        name: `${namespace}/${repoId}`,
      },
      files,
      commitTitle,
      accessToken: user.token as string,
    });

    return NextResponse.json({
      ok: true,
      pages,
      commit: {
        ...response.commit,
        title: commitTitle,
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
