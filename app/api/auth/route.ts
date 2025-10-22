import { NextRequest, NextResponse } from "next/server";
import MY_TOKEN_KEY from "@/lib/get-cookie-name";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { code } = body;

  if (!code) {
    return NextResponse.json(
      { error: "Code is required" },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const Authorization = `Basic ${Buffer.from(
    `${process.env.OAUTH_CLIENT_ID}:${process.env.OAUTH_CLIENT_SECRET}`
  ).toString("base64")}`;

  const host =
    req.headers.get("host") ?? req.headers.get("origin") ?? "localhost:3000";

  const url = host.includes("/spaces/enzostvs")
    ? "enzostvs-deepsite.hf.space"
    : host;
  const redirect_uri =
    `${host.includes("localhost") ? "http://" : "https://"}` +
    url +
    "/deepsite/auth/callback";
  const request_auth = await fetch("https://huggingface.co/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }),
  });

  const response = await request_auth.json();
  if (!response.access_token) {
    return NextResponse.json(
      { error: "Failed to retrieve access token" },
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const userResponse = await fetch("https://huggingface.co/api/whoami-v2", {
    headers: {
      Authorization: `Bearer ${response.access_token}`,
    },
  });

  if (!userResponse.ok) {
    return NextResponse.json(
      { user: null, errCode: userResponse.status },
      { status: userResponse.status }
    );
  }
  const user = await userResponse.json();

  const cookieName = MY_TOKEN_KEY();
  const isProduction = process.env.NODE_ENV === "production";
  
  const nextResponse = NextResponse.json(
    {
      access_token: response.access_token,
      expires_in: response.expires_in,
      user,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  
  // Set HTTP-only cookie
  const cookieOptions = [
    `${cookieName}=${response.access_token}`,
    `Max-Age=${response.expires_in || 3600}`, // Default 1 hour if not provided
    "Path=/deepsite",
    "HttpOnly",
    ...(isProduction ? ["Secure", "SameSite=None"] : ["SameSite=Lax"])
  ].join("; ");
  
  nextResponse.headers.set("Set-Cookie", cookieOptions);
  
  return nextResponse;
}
