import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {  
  const headers = new Headers(request.headers);
  headers.set("x-current-host", request.nextUrl.host);
  headers.set("x-invoke-path", request.nextUrl.pathname + request.nextUrl.search);
  
  // Update Supabase session
  const supabaseResponse = await updateSession(request);
  
  const response = NextResponse.next({ 
    headers,
    request: {
      headers: supabaseResponse.headers,
    }
  });

  // Copy Supabase cookies
  supabaseResponse.cookies.getAll().forEach(cookie => {
    response.cookies.set(cookie.name, cookie.value, cookie);
  });

  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  response.headers.set('X-Canonical-URL', `https://github.com/kamesh6592-cell/dev-aj-tool${request.nextUrl.pathname}`);
  
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
