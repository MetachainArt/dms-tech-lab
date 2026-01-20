"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "홈", href: "/" },
  { name: "회사 소개", href: "/about" },
  { name: "프로젝트", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic colors based on page and scroll state
  const currentTextColor = isLightPage && !isScrolled ? "text-[#050B1B]" : "text-white";
  const currentLinkTextColor = isLightPage && !isScrolled ? "text-[#050B1B]/80" : "text-white/80";
  const currentLinkHoverColor = isLightPage && !isScrolled ? "hover:text-[#050B1B]" : "hover:text-white";
  const currentBorderColor = isLightPage && !isScrolled ? "border-[#050B1B]/30" : "border-white/30";
  const logoDotColor = isLightPage && !isScrolled ? "bg-[#050B1B]/20" : "bg-white/20";


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className={`w-full pointer-events-auto transition-all duration-300 ${
            isScrolled 
            ? "bg-[#050B1B]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg" 
            : `bg-transparent py-6`
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            
            {/* Logo - Left */}
            <Link href="/" className={`text-2xl font-bold tracking-tight group flex items-center gap-2 ${currentTextColor}`}>
                {/* Logo mark similar to reference dots */}
                <div className="flex flex-col gap-[2px]">
                    <div className="flex gap-[2px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-sky" />
                        <span className={`w-1.5 h-1.5 rounded-full ${logoDotColor}`} />
                    </div>
                    <div className="flex gap-[2px]">
                        <span className={`w-1.5 h-1.5 rounded-full ${logoDotColor}`} />
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

            {/* Right Group: Contact Button & Mobile Menu */}
            <div className="flex items-center gap-4">
            {/* Contact CTA - Right */}
            <Link 
                href="/about#contact"
                className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full border ${currentBorderColor} ${currentTextColor} font-medium text-sm hover:bg-neon-sky hover:text-[#050B1B] hover:border-neon-sky transition-all`}
            >
                Contact
            </Link>

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
              <Link
                  href="/about#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-8 py-4 bg-neon-sky text-[#050B1B] font-bold rounded-full text-lg"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
