"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const WavyLine = () => (
  <svg width="80" height="12" viewBox="0 0 80 12" fill="none" aria-hidden="true">
    <path d="M2 6 Q12 2 22 6 Q32 10 42 6 Q52 2 62 6 Q72 10 78 6"
      stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="w-full border-t border-paperfolio-line bg-paperfolio-bg">

      {/* ── Main body ── */}
      <div className="mx-auto max-w-7xl px-8 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* ── Left: currently focused ── */}
          <div className="space-y-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">
              Currently focused on
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-paperfolio-accent-blue/10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-paperfolio-accent-blue">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-paperfolio-text leading-snug"
                    style={{fontFamily: "var(--font-korean), serif"}}>
                    AI 자동화 & 실무 설계
                  </p>
                  <p className="text-xs text-paperfolio-text-muted mt-0.5">
                    DMS · 꿈꾸는카메라 · 교육
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-1">
              <a href="https://www.youtube.com/@Reedodev" target="_blank" rel="noopener noreferrer"
                className="text-xs text-paperfolio-text-muted hover:text-paperfolio-text transition-colors flex items-center gap-1">
                YouTube <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer"
                className="text-xs text-paperfolio-text-muted hover:text-paperfolio-text transition-colors flex items-center gap-1">
                KakaoTalk <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ── Center: message + CTA ── */}
          <div className="flex flex-col items-center text-center gap-7">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">
                Thanks for stopping by
              </p>
              <h2 className="font-playfair italic text-paperfolio-text"
                style={{fontSize: "clamp(1.6rem, 3vw, 2.25rem)", lineHeight: 1.2, letterSpacing: "-0.01em"}}>
                방문해주셔서<br />감사합니다.
              </h2>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-paperfolio-text/30 px-7 py-2.5 text-sm text-paperfolio-text hover:bg-paperfolio-text hover:text-white transition-all duration-200"
              style={{fontFamily: "var(--font-korean), serif"}}
            >
              함께 일해요
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* ── Right: deco + contact ── */}
          <div className="flex flex-col items-end gap-5">
            <div className="text-paperfolio-text-muted/40 flex gap-2">
              <WavyLine />
              <WavyLine />
            </div>

            {/* Minimal monogram */}
            <div className="w-[72px] h-[88px] bg-white border border-paperfolio-line shadow-sm flex flex-col items-center justify-center gap-1 rotate-1">
              <span className="font-playfair text-[2rem] italic text-paperfolio-text leading-none">R</span>
              <span className="text-[8px] tracking-[0.25em] text-paperfolio-text-muted uppercase">Reedo</span>
            </div>

            <div className="text-right space-y-1.5">
              <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-paperfolio-text-muted hover:text-paperfolio-text transition-colors">
                KakaoTalk 문의
              </a>
              <a href="https://www.youtube.com/@Reedodev" target="_blank" rel="noopener noreferrer"
                className="block text-xs text-paperfolio-text-muted hover:text-paperfolio-text transition-colors">
                YouTube @Reedodev
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-paperfolio-line">
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-paperfolio-text-muted"
            style={{fontFamily: "var(--font-korean), serif"}}>
            <span>AI 자동화</span>
            <span className="opacity-30">·</span>
            <span>3D 설계</span>
            <span className="opacity-30">·</span>
            <span>실무형 교육</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-paperfolio-text-muted">
            <Link href="/privacy" className="hover:text-paperfolio-text transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-paperfolio-text transition-colors">이용약관</Link>
            <span className="opacity-50">© {new Date().getFullYear()} Reedo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
