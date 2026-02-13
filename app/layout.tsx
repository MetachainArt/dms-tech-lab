import { Poppins } from "next/font/google"; // Switch to Poppins
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Background from "@/components/ui/Background";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import BookingEventBridge from "@/components/providers/BookingEventBridge";
import { generateMetadata as generateSeoMetadata, generateStructuredData } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 필요한 weight만 로드 (300, 900 제거)
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata = generateSeoMetadata({
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="naver-site-verification" content="b8ab729a0b0dbcfe3400052a6f192884926e93e4" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics - 지연 로드 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 지연 로드
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BYBW33N77V';
                  document.head.appendChild(script);
                  
                   script.onload = function() {
                     window.dataLayer = window.dataLayer || [];
                     window.gtag = function(){ window.dataLayer.push(arguments); };
                     window.gtag('js', new Date());
                     window.gtag('config', 'G-BYBW33N77V');
                   };
                 }, 1000); // 페이지 로드 후 1초 지연
               });
            `,
          }}
        />

        {/* 구조화된 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData("Organization")),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData("WebSite")),
          }}
        />
      </head>
      <body className={clsx(poppins.variable, "antialiased bg-deep-space text-white select-none")} suppressHydrationWarning>
        <BookingEventBridge />
        <Background />
        <NextAuthProvider>
          <Navbar />
        </NextAuthProvider>
        <div className="relative z-10 w-full">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
