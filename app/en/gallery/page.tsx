import Link from "next/link";
import EssayPiece from "@/components/ideas/EssayPiece";
import { watchingEssayEn } from "@/lib/ideas-essay-watching";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "Ideas — Reedo",
  description: "Essays on work, attention and the tools we think with. English editions of Reedo's Ideas.",
  path: "/en/gallery",
  locale: "en_US",
});

export default function EnglishIdeasPage() {
  return (
    <div className="min-h-screen bg-paperfolio-bg pt-[58px]">
      <header className="px-6 sm:px-10 py-20 lg:py-28 border-b border-paperfolio-line bg-paperfolio-surface">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-coral mb-4">Ideas</p>
            <h1 className="font-playfair text-paperfolio-text" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>Ideas</h1>
            <p className="pixel-display text-paperfolio-text-muted mt-4" style={{ fontSize: "clamp(0.95rem, 1.7vw, 1.2rem)" }}>A space where images and words meet</p>
          </div>
          <p className="text-sm text-paperfolio-text-muted max-w-sm leading-[1.9]">
            Notes and essays written alongside the work. Earlier pieces are still available in Korean, and new ones are being added in English.
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-paperfolio-line flex items-center justify-between">
          <span className="text-xs tracking-[0.18em] uppercase text-paperfolio-text-muted">1 English edition</span>
          <Link href="/gallery" className="text-xs tracking-[0.18em] uppercase text-paperfolio-accent-blue hover:underline underline-offset-4">Earlier pieces in Korean ↗</Link>
        </div>
      </header>
      <main><EssayPiece essay={watchingEssayEn} locale="en" /></main>
      <section className="px-6 sm:px-10 py-20 bg-paperfolio-text text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow mb-6">More to come</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/en/blog" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm hover:bg-white hover:text-paperfolio-text transition-all duration-200">Read the writing →</Link>
          <Link href="/en/contact" className="inline-flex items-center gap-2 bg-paperfolio-accent-yellow text-paperfolio-text px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity">Work together</Link>
        </div>
      </section>
    </div>
  );
}
