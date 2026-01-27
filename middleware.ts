import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { checkRateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    // Get token directly from JWT to ensure we read the cookie properly
    const token = await getToken({ 
      req, 
      secret: process.env.NEXTAUTH_SECRET,
      cookieName: process.env.NODE_ENV === 'production' 
        ? '__Secure-next-auth.session-token' 
        : 'next-auth.session-token'
    });

    // Rate limiting for admin routes
    if (pathname.startsWith("/admin")) {
      const result = await checkRateLimit(ip, "auth");
      if (!result.success) {
        return NextResponse.json(
          { error: "Rate limit exceeded" },
          { status: 429 }
        );
      }

      // Check if user is admin
      if (token) {
        const isAdmin = token.role === "admin" || token.email === process.env.ADMIN_EMAIL;
        if (!isAdmin) {
          return NextResponse.redirect(
            new URL("/unauthorized", req.url)
          );
        }
      }
    }

    // API routes - require rate limiting
    if (pathname.startsWith("/api")) {
      const result = await checkRateLimit(ip, "api");
      if (!result.success) {
        return NextResponse.json(
          { error: "Rate limit exceeded" },
          { status: 429 }
        );
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Only check if token exists - admin check is done in middleware function above
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/signin",
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/upload/:path*",
  ],
};
