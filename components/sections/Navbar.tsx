"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/#company" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
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
            <Link href="/" className="text-xl font-bold tracking-tight text-white group flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-sky group-hover:shadow-[0_0_10px_#00D1FF] transition-shadow duration-300" />
                DMS<span className="text-white/40 font-light">.LAB</span>
            </Link>

            {/* Desktop Menu - Center */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                    {link.name}
                </Link>
                ))}
            </div>

            {/* Right Group: Contact Button & Mobile Menu */}
            <div className="flex items-center gap-4">
                <Link 
                    href="/#contact"
                    className="hidden md:flex px-6 py-2 rounded-full border border-white/20 text-sm font-medium text-white hover:bg-white hover:text-[#050B1B] transition-all duration-300"
                >
                    Get in Touch
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
