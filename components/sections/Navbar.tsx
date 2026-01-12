"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "Services", href: "#services" },
  { name: "Apps", href: "#apps" },
  { name: "Projects", href: "#proof" },
  { name: "Contact", href: "#contact" },
];

const companySubLinks = [
  { name: "About DMS", korean: "회사 소개", href: "/company?tab=about" },
  { name: "Vision & Mission", korean: "비전과 미션", href: "/company?tab=vision" },
  { name: "What We Do", korean: "주요 사업", href: "/company?tab=services" },
  { name: "Our Technology", korean: "기술", href: "/company?tab=technology" },
  { name: "History", korean: "연혁", href: "/company?tab=history" },
  { name: "Core Values", korean: "핵심 가치", href: "/company?tab=values" },
  { name: "Team", korean: "팀", href: "/company?tab=team" },
  { name: "Contact", korean: "연락처", href: "/company?tab=contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanySubmenuOpen, setIsMobileCompanySubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#030014]/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter text-white z-50">
            DMS<span className="text-neon-indigo">.</span>SOLUTION
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                    onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-mono text-white/60 hover:text-white transition-colors uppercase tracking-widest">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isCompanyDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#030014]/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl overflow-hidden"
                        >
                          {companySubLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              <div className="font-semibold">{subLink.korean}</div>
                              <div className="text-xs text-white/50">{subLink.name}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono text-white/60 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-[#030014] flex flex-col items-center justify-center space-y-6 md:hidden overflow-y-auto"
          >
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="w-full max-w-md px-6">
                    <button
                      onClick={() => setIsMobileCompanySubmenuOpen(!isMobileCompanySubmenuOpen)}
                      className="w-full flex items-center justify-between text-2xl font-bold text-white hover:text-neon-indigo transition-colors py-2"
                    >
                      {link.name}
                      <ChevronDown className={`w-6 h-6 transition-transform ${isMobileCompanySubmenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isMobileCompanySubmenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 overflow-hidden"
                        >
                          {companySubLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-3 text-lg text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
                            >
                              <div className="font-semibold">{subLink.korean}</div>
                              <div className="text-sm text-white/50">{subLink.name}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-neon-indigo transition-colors py-2"
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
