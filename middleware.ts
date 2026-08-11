import { NextResponse, type NextRequest } from "next/server";

/**
 * Cheap edge guard: anything under /admin without a session cookie goes to the
 * login screen. The real check runs again in the admin layout with `auth()`,
 * which is what actually protects the data — this only saves a round trip.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  const session =
    request.cookies.get("authjs.session-token") ??
    request.cookies.get("__Secure-authjs.session-token");

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
