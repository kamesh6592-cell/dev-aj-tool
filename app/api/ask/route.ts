/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { InferenceClient } from "@huggingface/inference";

import { MODELS } from "@/lib/providers";
import {
  FOLLOW_UP_SYSTEM_PROMPT,
  FOLLOW_UP_SYSTEM_PROMPT_LIGHT,
  INITIAL_SYSTEM_PROMPT,
  INITIAL_SYSTEM_PROMPT_LIGHT,
  MAX_REQUESTS_PER_IP,
  PROMPT_FOR_PROJECT_NAME,
} from "@/lib/prompts";
import MY_TOKEN_KEY from "@/lib/get-cookie-name";
import { Page } from "@/types";
import { isAuthenticated } from "@/lib/auth";
import { getBestProvider } from "@/lib/best-provider";

const ipAddresses = new Map();

export async function POST(request: NextRequest) {
  const authHeaders = await headers();
  const userToken = request.cookies.get(MY_TOKEN_KEY())?.value;

  const body = await request.json();
  const { prompt, provider, model, redesignMarkdown, enhancedSettings, pages } = body;

  if (!model || (!prompt && !redesignMarkdown)) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const selectedModel = MODELS.find(
    (m) => m.value === model || m.label === model
  );

  if (!selectedModel) {
    return NextResponse.json(
      { ok: false, error: "Invalid model selected" },
      { status: 400 }
    );
  }

  let token: string | null = null;
  if (userToken) token = userToken;
  let billTo: string | null = null;

  /**
   * Handle local usage token, this bypass the need for a user token
   * and allows local testing without authentication.
   * This is useful for development and testing purposes.
   */
  if (process.env.HF_TOKEN && process.env.HF_TOKEN.length > 0) {
    token = process.env.HF_TOKEN;
  }

  const ip = authHeaders.get("x-forwarded-for")?.includes(",")
    ? authHeaders.get("x-forwarded-for")?.split(",")[1].trim()
    : authHeaders.get("x-forwarded-for");

  if (!token) {
    ipAddresses.set(ip, (ipAddresses.get(ip) || 0) + 1);
    if (ipAddresses.get(ip) > MAX_REQUESTS_PER_IP) {
      return NextResponse.json(
        {
          ok: false,
          openLogin: true,
          message: "Log In to continue using the service",
        },
        { status: 429 }
      );
    }

    token = process.env.DEFAULT_HF_TOKEN as string;
    billTo = "huggingface";
  }

  const selectedProvider = await getBestProvider(selectedModel.value, provider)

  let rewrittenPrompt = redesignMarkdown ? `Here is my current design as a markdown:\n\n${redesignMarkdown}\n\nNow, please create a new design based on this markdown. Use the images in the markdown.` : prompt;

  if (enhancedSettings.isActive) {
    // rewrittenPrompt = await rewritePrompt(rewrittenPrompt, enhancedSettings, { token, billTo }, selectedModel.value, selectedProvider.provider);
  }

  try {
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    const response = new NextResponse(stream.readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });

    (async () => {
      try {
        const client = new InferenceClient(token);
        
        // Use light prompt for MiniMax model
        const systemPrompt = selectedModel.value.includes('MiniMax') 
          ? INITIAL_SYSTEM_PROMPT_LIGHT 
          : INITIAL_SYSTEM_PROMPT;
        
        const userPrompt = rewrittenPrompt;
        
        const chatCompletion = client.chatCompletionStream(
          {
            model: selectedModel.value,
            provider: selectedProvider,
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: userPrompt + (enhancedSettings.isActive ? `1. I want to use the following primary color: ${enhancedSettings.primaryColor} (eg: bg-${enhancedSettings.primaryColor}-500).
2. I want to use the following secondary color: ${enhancedSettings.secondaryColor} (eg: bg-${enhancedSettings.secondaryColor}-500).
3. I want to use the following theme: ${enhancedSettings.theme} mode.` : "")
              },
            ],
          },
          billTo ? { billTo } : {}
        );

        while (true) {
          const { done, value } = await chatCompletion.next()
          if (done) {
            break;
          }

          const chunk = value.choices[0]?.delta?.content;
          console.log(chunk);
          if (chunk) {
            await writer.write(encoder.encode(chunk));
          }
        }
        
        await writer.close();
      } catch (error: any) {
        if (error.message?.includes("exceeded your monthly included credits")) {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                openProModal: true,
                message: error.message,
              })
            )
          );
        } else if (error?.message?.includes("inference provider information")) {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                openSelectProvider: true,
                message: error.message,
              })
            )
          );
        }
        else {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                message:
                  error.message ||
                  "An error occurred while processing your request.",
              })
            )
          );
        }
      } finally {
        try {
          await writer?.close();
        } catch {
        }
      }
    })();

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        openSelectProvider: true,
        message:
          error?.message || "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const user = await isAuthenticated();
  if (user instanceof NextResponse || !user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const authHeaders = await headers();

  const body = await request.json();
  const { prompt, provider, selectedElementHtml, model, pages, files, repoId, isNew } =
    body;

  if (!prompt || pages.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const selectedModel = MODELS.find(
    (m) => m.value === model || m.label === model
  );
  if (!selectedModel) {
    return NextResponse.json(
      { ok: false, error: "Invalid model selected" },
      { status: 400 }
    );
  }

  let token = user.token as string;
  let billTo: string | null = null;

  /**
   * Handle local usage token, this bypass the need for a user token
   * and allows local testing without authentication.
   * This is useful for development and testing purposes.
   */
  if (process.env.HF_TOKEN && process.env.HF_TOKEN.length > 0) {
    token = process.env.HF_TOKEN;
  }

  const ip = authHeaders.get("x-forwarded-for")?.includes(",")
    ? authHeaders.get("x-forwarded-for")?.split(",")[1].trim()
    : authHeaders.get("x-forwarded-for");

  if (!token) {
    ipAddresses.set(ip, (ipAddresses.get(ip) || 0) + 1);
    if (ipAddresses.get(ip) > MAX_REQUESTS_PER_IP) {
      return NextResponse.json(
        {
          ok: false,
          openLogin: true,
          message: "Log In to continue using the service",
        },
        { status: 429 }
      );
    }

    token = process.env.DEFAULT_HF_TOKEN as string;
    billTo = "huggingface";
  }

  const selectedProvider = await getBestProvider(selectedModel.value, provider);

  try {
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    const response = new NextResponse(stream.readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });

    (async () => {
      try {
        const client = new InferenceClient(token);

        const basePrompt = selectedModel.value.includes('MiniMax') 
          ? FOLLOW_UP_SYSTEM_PROMPT_LIGHT 
          : FOLLOW_UP_SYSTEM_PROMPT;
        const systemPrompt = basePrompt + (isNew ? PROMPT_FOR_PROJECT_NAME : "");
        const userContext = "You are modifying the HTML file based on the user's request.";

        const allPages = pages || [];
        const pagesContext = allPages
          .map((p: Page) => `- ${p.path}\n${p.html}`)
          .join("\n\n");

        const assistantContext = `${selectedElementHtml
            ? `\n\nYou have to update ONLY the following element, NOTHING ELSE: \n\n\`\`\`html\n${selectedElementHtml}\n\`\`\` Could be in multiple pages, if so, update all the pages.`
            : ""
          }. Current pages (${allPages.length} total): ${pagesContext}. ${files?.length > 0 ? `Available images: ${files?.map((f: string) => f).join(', ')}.` : ""}`;

        const chatCompletion = client.chatCompletionStream(
          {
            model: selectedModel.value,
            provider: selectedProvider,
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: userContext,
              },
              {
                role: "assistant",
                content: assistantContext,
              },
              {
                role: "user",
                content: prompt,
              },
            ],
          },
          billTo ? { billTo } : {}
        );

        // Stream the response chunks to the client
        while (true) {
          const { done, value } = await chatCompletion.next();
          if (done) {
            break;
          }

          const chunk = value.choices[0]?.delta?.content;
          if (chunk) {
            await writer.write(encoder.encode(chunk));
          }
        }

        await writer.write(encoder.encode(`\n___METADATA_START___\n${JSON.stringify({
          repoId,
          isNew,
          userName: user.name,
        })}\n___METADATA_END___\n`));

        await writer.close();
      } catch (error: any) {
        if (error.message?.includes("exceeded your monthly included credits")) {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                openProModal: true,
                message: error.message,
              })
            )
          );
        } else if (error?.message?.includes("inference provider information")) {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                openSelectProvider: true,
                message: error.message,
              })
            )
          );
        } else {
          await writer.write(
            encoder.encode(
              JSON.stringify({
                ok: false,
                message:
                  error.message ||
                  "An error occurred while processing your request.",
              })
            )
          );
        }
      } finally {
        try {
          await writer?.close();
        } catch {
          // ignore
        }
      }
    })();

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        openSelectProvider: true,
        message:
          error.message || "An error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

