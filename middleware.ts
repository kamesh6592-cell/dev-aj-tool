import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {  
  const headers = new Headers(request.headers);
  headers.set("x-current-host", request.nextUrl.host);
  headers.set("x-invoke-path", request.nextUrl.pathname + request.nextUrl.search);
  
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
