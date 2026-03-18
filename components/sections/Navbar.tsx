"use client";

import { useState, useCallback } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  const handleMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setIsMobileMenuOpen(false), []);

  if (isAdminPage) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
        role="navigation"
        aria-label="메인 네비게이션"
      >
        <div className="flex items-center justify-between bg-black text-white px-6 py-3 rounded-full shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Reedo 홈으로 이동">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center overflow-hidden bg-white text-black font-bold text-xs">
              R
            </div>
            <span className="font-playfair font-bold text-lg tracking-tight hidden sm:block">Reedo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:opacity-70 transition-opacity"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden md:flex items-center justify-center bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="문의하기"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <button
              className="md:hidden p-2 text-white hover:opacity-70 transition-opacity"
              onClick={handleMenuOpen}
              aria-label="메뉴 열기"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white text-black p-6 md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={handleMenuClose}
                className="p-2 text-black hover:opacity-70 transition-opacity"
                aria-label="메뉴 닫기"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center mt-12" aria-label="모바일 메뉴 네비게이션">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleMenuClose}
                  className="text-3xl font-playfair font-bold hover:text-paperfolio-accent-coral transition-colors"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={handleMenuClose}
                className="mt-8 px-8 py-4 bg-black text-white font-bold rounded-full text-lg mx-auto"
                aria-label="문의하기"
              >
                문의하기
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
