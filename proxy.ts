import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    authorized: async ({ req, token }) => {
      const { pathname } = req.nextUrl;
      const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

      // Rate limiting for admin routes
      if (pathname.startsWith("/admin")) {
        const result = await checkRateLimit(ip, "auth");
        if (!result.success) {
          return false;
        }
      }

      // API routes - require rate limiting
      if (pathname.startsWith("/api")) {
        const result = await checkRateLimit(ip, "api");
        if (!result.success) {
          return false;
        }
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/api/upload/:path*",
  ],
};
