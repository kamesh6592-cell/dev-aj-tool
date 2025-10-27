import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  const isCorrectDomain = host === "huggingface.co" || host.startsWith("huggingface.co:");

  console.log("++ DOMAIN CHECK ++", host)
  if (!isCorrectDomain && !isLocalhost) {
    return NextResponse.redirect("https://huggingface.co/deepsite", 301);
  }

  const headers = new Headers(request.headers);
  headers.set("x-current-host", request.nextUrl.host);
  
  const response = NextResponse.next({ headers });

  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  response.headers.set('X-Canonical-URL', `https://huggingface.co/deepsite${request.nextUrl.pathname}`);
  
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
