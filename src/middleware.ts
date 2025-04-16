import { NextResponse } from "next/server";
import { auth } from "./modules/Auth/lib";

export default auth(
  // @ts-ignore
  async (request) => {
    const { pathname } = request.nextUrl;
    // If user is signed in and trying to access login/register, redirect to dashboard
    if (
      (pathname.startsWith("/auth/login") ||
        pathname.startsWith("/auth/register")) &&
      request.nextauth?.token
    ) {
      return NextResponse.redirect(new URL(`/admin`, request.url));
    }

    // // Continue with the request if no redirection is needed
    return NextResponse.next();
  },
  {
    // callbacks: {
    //   authorized: (x) => {
    //     // console.log("Token:", token);
    //     return !!token;
    //   },
    // },
    pages: {
      signIn: "/auth/login", // Redirect to this page if not authorized
    },
  }
);

// Protect all routes under /dashboard and /auth
export const config = {
  matcher: ["/admin/:path*"],
};
