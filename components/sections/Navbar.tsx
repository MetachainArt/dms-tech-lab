"use client";

import { useState, useCallback } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";

// 데스크탑: 핵심 4개만 (소개·하는일은 홈 앵커라 생략)
const desktopLinks = [
  { name: "작업",   href: "/works" },
  { name: "글",     href: "/blog"  },
  { name: "미술관", href: "/gallery" },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setIsMobileMenuOpen(false), []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* MAI-style full-width top navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-paperfolio-surface/95 backdrop-blur-md border-b border-paperfolio-line animate-[fadeIn_0.4s_ease-out_both]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="relative flex h-[58px] items-center justify-between">

            {/* Left: Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-2 text-sm text-paperfolio-text-muted hover:text-paperfolio-text transition-colors"
              aria-label="검색"
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Center: Brand — absolutely centered */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 font-playfair text-[1.5rem] leading-none text-paperfolio-text tracking-tight hover:opacity-70 transition-opacity"
              aria-label="Reedo 홈"
            >
              Reedo
            </Link>

            {/* Right: Desktop nav links + CTA */}
            <div className="flex items-center gap-2">
              <nav className="hidden lg:flex items-center gap-8 mr-6" aria-label="주요 메뉴">
                {desktopLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm transition-colors ${
                      pathname === link.href
                        ? "text-paperfolio-text font-medium"
                        : "text-paperfolio-text-muted hover:text-paperfolio-text"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* 문의 CTA — 항상 표시 */}
              <Link
                href="/#contact"
                className="hidden sm:flex items-center gap-1 text-sm font-medium text-paperfolio-text hover:text-paperfolio-accent-coral transition-colors"
              >
                문의
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>

              {/* Mobile: hamburger */}
              <button
                className="lg:hidden ml-3 p-1 text-paperfolio-text-muted hover:text-paperfolio-text transition-colors"
                onClick={handleMenuOpen}
                aria-label="메뉴 열기"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Search bar (expandable) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-paperfolio-line"
            >
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-3">
                <input
                  autoFocus
                  type="search"
                  placeholder="검색어를 입력하세요..."
                  className="w-full bg-transparent text-sm text-paperfolio-text placeholder:text-paperfolio-text-muted outline-none"
                  onKeyDown={(e) => e.key === "Escape" && setIsSearchOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-paperfolio-surface flex flex-col px-8 py-6 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-playfair text-2xl text-paperfolio-text">Reedo</span>
              <button onClick={handleMenuClose} aria-label="메뉴 닫기">
                <X className="w-6 h-6 text-paperfolio-text-muted" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label="모바일 메뉴">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleMenuClose}
                    className="block font-playfair text-4xl text-paperfolio-text hover:text-paperfolio-accent-coral transition-colors py-2 border-b border-paperfolio-line"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8 text-sm text-paperfolio-text-muted">
              AI 자동화 · 3D 설계 · 실무형 교육
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
