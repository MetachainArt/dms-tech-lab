import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 번들에서 대용량 클라이언트 전용 패키지 제외
  serverExternalPackages: [
    "html2canvas",
    "jspdf",
  ],

  // 파일 읽기 admin API에서만 대용량 파일 제외 (이미지 최적화 함수는 제외하지 않음)
  outputFileTracingExcludes: {
    "api/admin/blog/files": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/blog/read": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/blog/save": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/education/files": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/education/read": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/education/save": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/files": ["public/**/*", "My_source/**/*", "/images/**/*"],
    "api/admin/read": ["public/**/*", "My_source/**/*", "/images/**/*"],
  },

// 이미지 최적화 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 실험적 기능
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@prisma/client",
      "clsx",
      "date-fns",
      "@react-three/drei",
      "@react-three/fiber",
      "three",
    ],
  },

  // 컴파일러 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack 설정 (Next.js 16 기본값)
  turbopack: {
    // Turbopack 관련 추가 설정 필요 시 여기에 작성
  },

  // 보안 헤더 설정
  async headers() {
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://*.google.com https://*.googleusercontent.com https://*.public.blob.vercel-storage.com https://k.kakaocdn.net https://avatars.githubusercontent.com https://lh3.googleusercontent.com https://placehold.co https://loremflickr.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
      "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.supabase.co https://*.public.blob.vercel-storage.com https://pagead2.googlesyndication.com https://ep1.adtrafficquality.google https://googleads.g.doubleclick.net",
      "frame-src 'self' https://accounts.google.com https://kauth.kakao.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "frame-ancestors 'self'",
      "worker-src 'self' blob:",
    ];

    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
