import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'development',
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@dmslab.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const isValidPassword = await compare(
            credentials.password,
            process.env.ADMIN_PASSWORD_HASH || ""
        );

        if (
          credentials.email === process.env.ADMIN_EMAIL &&
          isValidPassword
        ) {
          return { id: "admin", name: "Administrator", email: process.env.ADMIN_EMAIL, role: "admin" };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      profile(profile) {
        // Kakao doesn't always provide email (requires business app verification)
        // Generate a fallback email using kakao ID if email is not available
        const kakaoEmail = profile.kakao_account?.email || `kakao_${profile.id}@kakao.user`;

        return {
          id: profile.id.toString(),
          name: profile.kakao_account?.profile?.nickname || profile.properties?.nickname || "카카오 사용자",
          email: kakaoEmail,
          image: profile.kakao_account?.profile?.profile_image_url || profile.properties?.profile_image,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes
  },
  jwt: {
    maxAge: 30 * 60, // 30 minutes
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Admin redirect
      if (url.includes("/admin")) {
        return url;
      }
      // Default redirect
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  events: {
    async signIn({ user, account }) {
      // Skip login history for admin (credentials) - admin user doesn't exist in DB
      if (account?.provider === "credentials") {
        return;
      }

      // Record login history for OAuth users only
      if (user.id) {
        try {
          await prisma.loginHistory.create({
            data: {
              userId: user.id,
              email: user.email || `${account?.provider}_${user.id}@oauth.user`,
              name: user.name || null,
              provider: account?.provider || "unknown",
            },
          });
        } catch (error) {
          console.error("Failed to record login history:", error);
        }
      }
    },
  },
};
