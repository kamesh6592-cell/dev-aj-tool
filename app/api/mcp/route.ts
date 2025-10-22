import { NextRequest, NextResponse } from "next/server";
import { RepoDesignation, createRepo, uploadFiles, spaceInfo, listCommits } from "@huggingface/hub";
import { COLORS } from "@/lib/utils";
import { injectDeepSiteBadge, isIndexPage } from "@/lib/inject-badge";
import { Commit, Page } from "@/types";

interface MCPRequest {
  jsonrpc: "2.0";
  id: number | string;
  method: string;
  params?: any;
}

interface MCPResponse {
  jsonrpc: "2.0";
  id: number | string;
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
}

interface CreateProjectParams {
  title?: string;
  pages: Page[];
  prompt?: string;
  hf_token?: string; // Optional - can come from header instead
}

// MCP Server over HTTP
export async function POST(req: NextRequest) {
  try {
    const body: MCPRequest = await req.json();
    const { jsonrpc, id, method, params } = body;

    // Validate JSON-RPC 2.0 format
    if (jsonrpc !== "2.0") {
      return NextResponse.json({
        jsonrpc: "2.0",
        id: id || null,
        error: {
          code: -32600,
          message: "Invalid Request: jsonrpc must be '2.0'",
        },
      });
    }

    let response: MCPResponse;

    switch (method) {
      case "initialize":
        response = {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: {
              tools: {},
            },
            serverInfo: {
              name: "deepsite-mcp-server",
              version: "1.0.0",
            },
          },
        };
        break;

      case "tools/list":
        response = {
          jsonrpc: "2.0",
          id,
          result: {
            tools: [
              {
                name: "create_project",
                description: `Create a new DeepSite project. This will create a new Hugging Face Space with your HTML/CSS/JS files.

Example usage:
- Create a simple website with HTML, CSS, and JavaScript files
- Each page needs a 'path' (filename like "index.html", "styles.css", "script.js") and 'html' (the actual content)
- The title will be formatted to a valid repository name
- Returns the project URL and metadata`,
                inputSchema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      description: "Project title (optional, defaults to 'DeepSite Project'). Will be formatted to a valid repo name.",
                    },
                    pages: {
                      type: "array",
                      description: "Array of files to include in the project",
                      items: {
                        type: "object",
                        properties: {
                          path: {
                            type: "string",
                            description: "File path (e.g., 'index.html', 'styles.css', 'script.js')",
                          },
                          html: {
                            type: "string",
                            description: "File content",
                          },
                        },
                        required: ["path", "html"],
                      },
                    },
                    prompt: {
                      type: "string",
                      description: "Optional prompt/description for the commit message",
                    },
                    hf_token: {
                      type: "string",
                      description: "Hugging Face API token (optional if provided via Authorization header)",
                    },
                  },
                  required: ["pages"],
                },
              },
            ],
          },
        };
        break;

      case "tools/call":
        const { name, arguments: toolArgs } = params;

        if (name === "create_project") {
          try {
            // Extract token from Authorization header if present
            const authHeader = req.headers.get("authorization");
            let hf_token = toolArgs.hf_token;
            
            if (authHeader && authHeader.startsWith("Bearer ")) {
              hf_token = authHeader.substring(7); // Remove "Bearer " prefix
            }
            
            const result = await handleCreateProject({
              ...toolArgs,
              hf_token,
            } as CreateProjectParams);
            response = {
              jsonrpc: "2.0",
              id,
              result,
            };
          } catch (error: any) {
            response = {
              jsonrpc: "2.0",
              id,
              error: {
                code: -32000,
                message: error.message || "Failed to create project",
                data: error.data,
              },
            };
          }
        } else {
          response = {
            jsonrpc: "2.0",
            id,
            error: {
              code: -32601,
              message: `Unknown tool: ${name}`,
            },
          };
        }
        break;

      default:
        response = {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Method not found: ${method}`,
          },
        };
    }

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({
      jsonrpc: "2.0",
      id: null,
      error: {
        code: -32700,
        message: "Parse error",
        data: error.message,
      },
    });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

async function handleCreateProject(params: CreateProjectParams) {
  const { title: titleFromRequest, pages, prompt, hf_token } = params;

  // Validate required parameters
  if (!hf_token || typeof hf_token !== "string") {
    throw new Error("hf_token is required and must be a string");
  }

  if (!pages || !Array.isArray(pages) || pages.length === 0) {
    throw new Error("At least one page is required");
  }

  // Validate that each page has required fields
  for (const page of pages) {
    if (!page.path || !page.html) {
      throw new Error("Each page must have 'path' and 'html' properties");
    }
  }

  // Get user info from HF token
  let username: string;
  try {
    const userResponse = await fetch("https://huggingface.co/api/whoami-v2", {
      headers: {
        Authorization: `Bearer ${hf_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error("Invalid Hugging Face token");
    }

    const userData = await userResponse.json();
    username = userData.name;
  } catch (error: any) {
    throw new Error(`Authentication failed: ${error.message}`);
  }

  const title = titleFromRequest ?? "DeepSite Project";

  const formattedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .split("-")
    .filter(Boolean)
    .join("-")
    .slice(0, 96);

  const repo: RepoDesignation = {
    type: "space",
    name: `${username}/${formattedTitle}`,
  };

  const colorFrom = COLORS[Math.floor(Math.random() * COLORS.length)];
  const colorTo = COLORS[Math.floor(Math.random() * COLORS.length)];
  const README = `---
title: ${title}
colorFrom: ${colorFrom}
colorTo: ${colorTo}
emoji: 🐳
sdk: static
pinned: false
tags:
  - deepsite-v3
---

# Welcome to your new DeepSite project!
This project was created with [DeepSite](https://huggingface.co/deepsite).
`;

  const files: File[] = [];
  const readmeFile = new File([README], "README.md", { type: "text/markdown" });
  files.push(readmeFile);

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

    // Inject the DeepSite badge script into index pages only
    const content = mimeType === "text/html" && isIndexPage(page.path) 
      ? injectDeepSiteBadge(page.html) 
      : page.html;
    const file = new File([content], page.path, { type: mimeType });
    files.push(file);
  });

  try {
    const { repoUrl } = await createRepo({
      repo,
      accessToken: hf_token,
    });

    const commitTitle = !prompt || prompt.trim() === "" ? "Initial project creation via MCP" : prompt;
    
    await uploadFiles({
      repo,
      files,
      accessToken: hf_token,
      commitTitle,
    });

    const path = repoUrl.split("/").slice(-2).join("/");

    const commits: Commit[] = [];
    for await (const commit of listCommits({ repo, accessToken: hf_token })) {
      if (commit.title.includes("initial commit") || commit.title.includes("image(s)") || commit.title.includes("Promote version")) {
        continue;
      }
      commits.push({
        title: commit.title,
        oid: commit.oid,
        date: commit.date,
      });
    }

    const space = await spaceInfo({
      name: repo.name,
      accessToken: hf_token,
    });

    const projectUrl = `https://huggingface.co/deepsite/${path}`;
    const spaceUrl = `https://huggingface.co/spaces/${path}`;
    const liveUrl = `https://${username}-${formattedTitle}.hf.space`;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              success: true,
              message: "Project created successfully!",
              projectUrl,
              spaceUrl,
              liveUrl,
              spaceId: space.name,
              projectId: space.id,
              files: pages.map((p) => p.path),
              updatedAt: space.updatedAt,
            },
            null,
            2
          ),
        },
      ],
    };
  } catch (err: any) {
    throw new Error(err.message || "Failed to create project");
  }
}

