"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "홈", href: "/" },
  { name: "회사 소개", href: "/about" },
  { name: "프로젝트", href: "#projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                    className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                >
                    {link.name}
                </Link>
                ))}
            </div>

            {/* Right Group: Contact Button & Mobile Menu */}
            <div className="flex items-center gap-4">
                <Link 
                    href="/#contact"
                    className="hidden md:flex px-8 py-2.5 rounded text-sm font-medium text-white border border-white/30 hover:border-neon-sky hover:text-neon-sky transition-all duration-300"
                >
                    문의하기
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white ml-auto"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-white tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-neon-sky hover:to-neon-purple transition-all"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
