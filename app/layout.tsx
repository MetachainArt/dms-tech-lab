import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Using Google Font for Mono
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Background from "@/components/ui/Background";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DMS TECH LAB",
  description: "기술을 만드는 회사가 아니라, 결과를 만드는 회사. DMS Solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body className={clsx(jetbrainsMono.variable, "antialiased bg-deep-space text-white select-none")}>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
