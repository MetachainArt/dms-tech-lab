"use client";

import { useState, useCallback } from "react";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navigation";
import homeStyles from "@/components/sections/home/Home.module.css";
import { isFiberRoute } from "@/components/brand/fiber-routes";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { getLocale, localizePath } from "@/lib/i18n";

// 데스크탑: 핵심 3개만 (소개·하는일은 홈 앵커라 생략)
const desktopLinks = [
  { name: "Work",    href: "/works" },
  { name: "Writing", href: "/blog"  },
  { name: "Ideas",   href: "/gallery" },
] as const;

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const fiberRoute = isFiberRoute(pathname);
  const locale = getLocale(pathname);
  const english = locale === "en";
  const links = english ? [
    { name: "About", href: "/en/about" },
    { name: "Work", href: "/en/works" },
    { name: "Writing", href: "/en/blog" },
    { name: "Ideas (KO)", href: "/gallery" },
  ] : desktopLinks;
  const mobileLinks = english ? [...links, { name: "Contact", href: "/en/contact" }] : navLinks;

  const handleMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setIsMobileMenuOpen(false), []);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* MAI-style full-width top navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 bg-paperfolio-surface/95 backdrop-blur-md border-b border-paperfolio-line animate-[fadeIn_0.4s_ease-out_both] ${fiberRoute ? homeStyles.homeNavbar : ""}`}>
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="relative flex h-[58px] items-center justify-between">

            {/* Left: Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center gap-2 text-sm text-paperfolio-text-muted hover:text-paperfolio-text transition-colors"
              aria-label={english ? "Search" : "검색"}
            >
              <Search className="w-4 h-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Center: Brand — absolutely centered */}
            <Link
              href={localizePath("/", locale)}
              data-site-brand
              className={`absolute ${fiberRoute ? "left-0" : "left-1/2 -translate-x-1/2"} font-playfair text-[1.5rem] leading-none text-paperfolio-text tracking-tight hover:opacity-70 transition-opacity`}
              aria-label={english ? "DMS.Labs home" : "DMS.Labs 홈"}
            >
              DMS.Labs
            </Link>

            {/* Right: Desktop nav links + CTA */}
            <div className="flex items-center gap-1 sm:gap-2">
              <nav className="hidden lg:flex items-center gap-5 mr-4" aria-label={english ? "Main navigation" : "주요 메뉴"}>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`font-pixel text-[15px] transition-colors ${
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "text-paperfolio-text"
                        : "text-paperfolio-text-muted hover:text-paperfolio-text"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* 문의 CTA — 항상 표시 */}
              <Link
                href={english ? "/en/contact" : "/#contact"}
                data-contact-link
                className="hidden sm:flex items-center gap-1 font-pixel text-[15px] text-paperfolio-text hover:text-paperfolio-accent-coral transition-colors"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>

              <div className="ml-0 sm:ml-2"><LanguageSwitch /></div>

              {/* Mobile: hamburger */}
              <button
                className="lg:hidden ml-1 sm:ml-3 p-1 text-paperfolio-text-muted hover:text-paperfolio-text transition-colors"
                onClick={handleMenuOpen}
                aria-label={english ? "Open menu" : "메뉴 열기"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
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
              transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden border-t border-paperfolio-line"
            >
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-3">
                <input
                  autoFocus
                  type="search"
                  placeholder={english ? "Enter a search term..." : "검색어를 입력하세요..."}
                  aria-label={english ? "Search term" : "검색어"}
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
            transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className={`fixed inset-0 z-[60] bg-paperfolio-surface flex flex-col px-8 py-6 lg:hidden ${fiberRoute ? homeStyles.fiberMenu : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={english ? "Navigation menu" : "내비게이션 메뉴"}
            id="mobile-navigation"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-playfair text-2xl text-paperfolio-text">DMS.Labs</span>
              <button onClick={handleMenuClose} aria-label={english ? "Close menu" : "메뉴 닫기"}>
                <X className="w-6 h-6 text-paperfolio-text-muted" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-2" aria-label={english ? "Mobile navigation" : "모바일 메뉴"}>
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.32, delay: reducedMotion ? 0 : i * 0.04, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={handleMenuClose}
                    className="block font-pixel text-3xl text-paperfolio-text hover:text-paperfolio-accent-coral transition-colors py-3 border-b border-paperfolio-line"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8 text-sm text-paperfolio-text-muted space-y-5">
              <div className="flex"><LanguageSwitch onNavigate={handleMenuClose} /></div>
              <p>{english ? "AI automation · 3D design · Hands-on education" : "AI 자동화 · 3D 설계 · 실무형 교육"}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
