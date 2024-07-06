import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn");
  if (
    isLoggedIn?.value === "false" &&
    request.nextUrl.pathname !== "/sign-up" &&
      request.nextUrl.pathname !== "/sign-in" &&
      request.nextUrl.pathname !== "/confirm-password"
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  } else if (
    isLoggedIn?.value === "true" &&
    (request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/sign-up" ||
      request.nextUrl.pathname === "/sign-in" ||
      request.nextUrl.pathname === "/confirm-password")
  ) {
    return NextResponse.redirect(new URL("/home-page", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/",
    "/home-page/:path*",
    "/sign-up",
    "/sign-in",
    "/confirm-password",
  ],
};
