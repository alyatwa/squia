import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // Augment the request handler with your custom logic
  function middleware(request) {
    const { pathname } = request.nextUrl;
    // If user is signed in and trying to access login/register, redirect to dashboard
    if (
      (pathname.startsWith("/login") || pathname.startsWith("/register")) &&
      request.nextauth?.token
    ) {
      return NextResponse.redirect(new URL(`/admin`, request.url));
    }

    // // Continue with the request if no redirection is needed
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log("Token:", token);
        return !!token;
      },
    },
    pages: {
      signIn: "/login", // Redirect to this page if not authorized
    },
  }
);

// Protect all routes under /dashboard and /auth
export const config = {
  matcher: ["/admin/:path*"],
};
