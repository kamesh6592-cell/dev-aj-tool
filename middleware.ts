import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Check if we're not on hf.co or huggingface.co
  const isHfCo = host === "hf.co" || host.startsWith("hf.co:");
  const isHuggingFaceCo = host === "huggingface.co" || host.startsWith("huggingface.co:");

  if (!isHfCo && !isHuggingFaceCo) {
    // Server-side redirect to the correct URL
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
