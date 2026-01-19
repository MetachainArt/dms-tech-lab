"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Services", href: "/services" },
  { name: "Apps", href: "/apps" },
  { name: "Contact", href: "/contact" },
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
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto transition-all duration-300 ${
            isScrolled 
            ? "bg-[#0a0a1f]/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]" 
            : "bg-transparent px-6 py-4"
        }`}>
            <div className="flex items-center gap-12">
            
            {/* Logo */}
            <Link href="/" className="text-lg font-bold tracking-tight text-white group">
                DMS<span className="text-neon-indigo group-hover:text-neon-cyan transition-colors">.</span>LAB
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-xs font-mono text-white/70 hover:text-white transition-colors uppercase tracking-widest group"
                >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
                </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white ml-auto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
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
