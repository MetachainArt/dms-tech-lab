import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Switch to Poppins
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Background from "@/components/ui/Background";
import NextAuthProvider from "@/components/providers/NextAuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DMS | Innovation Through AI",
  description: "Automotive Retail AI & 3D Engineering Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={clsx(poppins.variable, "antialiased bg-deep-space text-white select-none")}>
        <Background />
        <NextAuthProvider>
            <Navbar />
            {children}
            <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
