"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
  { name: "홈", href: "/" },
  { name: "회사 소개", href: "/about" },
  { name: "서비스", href: "/services" },
  { name: "교육", href: "/education" },
  { name: "블로그", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const isLightPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic colors based on page and scroll state
  // User requested "Like the first image" -> Always White text, Dark Background on About.
  // We remove the "Light Page" text color logic and instead force the Background to be dark on About.
  
  const currentTextColor = "text-white";
  const currentLinkTextColor = "text-white/80";
  const currentLinkHoverColor = "hover:text-white";
  const currentBorderColor = "border-white/30";
  // const logoDotColor = "bg-white/20"; // 미사용

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className={`w-full pointer-events-auto transition-all duration-300 ${
            isScrolled || isLightPage // On scroll OR on About page (Light Page), make bg Dark
            ? "bg-[#050B1B] border-b border-white/5 py-4 shadow-lg" 
            : "bg-transparent py-6"
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
            {/* Logo - Left */}
            <Link href="/" className="text-2xl font-bold tracking-tight text-white group flex items-center gap-2">
                {/* Logo mark similar to reference dots */}
                <div className="flex flex-col gap-[2px]">
                    <div className="flex gap-[2px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-sky" />
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex gap-[2px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-sky" />
                    </div>
                </div>
                <span className="font-poppins">DMS<span className="text-neon-sky">.LAB</span></span>
            </Link>

            {/* Desktop Menu - Center */}
            <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors ${currentLinkTextColor} ${currentLinkHoverColor}`}
                >
                    {link.name}
                </Link>
                ))}
            </div>

            {/* Right Group: Auth & Contact */}
            <div className="flex items-center gap-4">
            
            {/* Auth Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
                {session ? (
                    <div className="flex items-center gap-3">
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full border border-white/20"
                            />
                        )}
                        <button
                            onClick={() => signOut()}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        href="/auth/signin"
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                        Login
                    </Link>
                )}

                {/* Contact CTA */}
                <a
                    href="https://open.kakao.com/o/sSPHn33g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2 rounded-full border ${currentBorderColor} ${currentTextColor} font-medium text-sm hover:bg-neon-sky hover:text-[#050B1B] hover:border-neon-sky transition-all`}
                >
                    무료 상담 신청
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className={`md:hidden p-2 ${currentTextColor}`}
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <Menu className="w-6 h-6" />
            </button>
            </div>

            </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#050B1B] p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-center mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white/80 hover:text-neon-sky transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                  href="https://open.kakao.com/o/sSPHn33g"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-8 py-4 bg-neon-sky text-[#050B1B] font-bold rounded-full text-lg"
              >
                무료 상담 신청
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
