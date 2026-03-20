import Image from "next/image";
import Link from "next/link";
import { galleryPieces, type GalleryPiece } from "@/lib/gallery-data";
import type { Metadata } from "next";

/* ── Multi-paragraph body renderer ── */
function BodyContent({ piece, textColor = "text-paperfolio-text-muted", maxWidth = "max-w-md" }: {
  piece: GalleryPiece;
  textColor?: string;
  maxWidth?: string;
}) {
  if (piece.paragraphs && piece.paragraphs.length > 0) {
    return (
      <div className={`space-y-6 ${maxWidth}`}>
        {piece.paragraphs.map((para, i) => {
          if (para.type === "motto") {
            return (
              <p key={i}
                className="font-playfair italic text-center tracking-[0.06em]"
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
                  color: "var(--color-paperfolio-text)",
                  opacity: 0.75,
                  paddingBlock: "0.5rem",
                  borderTop: "1px solid var(--color-paperfolio-line)",
                  borderBottom: "1px solid var(--color-paperfolio-line)",
                }}>
                {para.text}
              </p>
            );
          }
          if (para.type === "quote") {
            return (
              <p key={i}
                className={`font-playfair italic leading-[1.75] ${textColor}`}
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", opacity: 0.8 }}>
                {para.text}
              </p>
            );
          }
          // type === "text"
          return (
            <p key={i}
              className={`leading-[2.0] whitespace-pre-line ${textColor}`}
              style={{
                fontFamily: "var(--font-korean), serif",
                wordBreak: "keep-all",
                fontSize: "clamp(0.92rem, 1.3vw, 1.05rem)",
              }}>
              {para.text}
            </p>
          );
        })}
      </div>
    );
  }
  return (
    <p className={`leading-[1.9] ${maxWidth} ${textColor}`}
      style={{ fontFamily: "var(--font-korean), serif", wordBreak: "keep-all" }}>
      {piece.body}
    </p>
  );
}

export const metadata: Metadata = {
  title: "미술관 — Reedo",
  description: "사진과 글이 만나는 공간. 작업, 생각, 감각을 기록합니다.",
};

/* ── Accent colour map ── */
const accentMap = {
  blue:   { label: "text-paperfolio-accent-blue",   border: "border-paperfolio-accent-blue/30",  bg: "bg-paperfolio-accent-blue/8"  },
  coral:  { label: "text-paperfolio-accent-coral",  border: "border-paperfolio-accent-coral/30", bg: "bg-paperfolio-accent-coral/8" },
  yellow: { label: "text-paperfolio-accent-yellow", border: "border-paperfolio-accent-yellow/30",bg: "bg-paperfolio-accent-yellow/8"},
};

/* ── Layout: Image Left, Text Right ── */
function LayoutImageLeft({ piece }: { piece: GalleryPiece }) {
  const ac = accentMap[piece.accent];
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      {/* Image */}
      <div className="relative overflow-hidden bg-paperfolio-surface min-h-[55vw] lg:min-h-0">
        <Image
          src={piece.image}
          alt={piece.imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
        {/* Date badge */}
        <div className="absolute top-6 left-6 bg-paperfolio-bg/90 backdrop-blur-sm px-3 py-1.5">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-paperfolio-text-muted">
            {piece.date}
          </span>
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center px-10 py-16 lg:px-16 bg-paperfolio-bg">
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] mb-5 ${ac.label}`}>
          {piece.category}
        </p>
        <h2 className="font-playfair text-paperfolio-text mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
          {piece.title}
        </h2>
        {piece.subtitle && (
          <p className="font-playfair italic text-paperfolio-text-muted mb-8"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}>
            {piece.subtitle}
          </p>
        )}
        <BodyContent piece={piece} />
      </div>
    </article>
  );
}

/* ── Layout: Image Right, Text Left ── */
function LayoutImageRight({ piece }: { piece: GalleryPiece }) {
  const ac = accentMap[piece.accent];
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
      {/* Text */}
      <div className="flex flex-col justify-center px-10 py-16 lg:px-16 bg-paperfolio-surface order-2 lg:order-1">
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] mb-5 ${ac.label}`}>
          {piece.category}
        </p>
        <h2 className="font-playfair text-paperfolio-text mb-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.12, letterSpacing: "-0.01em" }}>
          {piece.title}
        </h2>
        {piece.subtitle && (
          <p className="font-playfair italic text-paperfolio-text-muted mb-8"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}>
            {piece.subtitle}
          </p>
        )}
        <BodyContent piece={piece} />
        <div className="mt-10 text-xs font-medium tracking-[0.2em] uppercase text-paperfolio-text-muted border-t border-paperfolio-line pt-6">
          {piece.date}
        </div>
      </div>
      {/* Image */}
      <div className="relative overflow-hidden bg-paperfolio-surface min-h-[50vw] lg:min-h-0 order-1 lg:order-2">
        <Image
          src={piece.image}
          alt={piece.imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width:1024px) 100vw, 50vw"
        />
      </div>
    </article>
  );
}

/* ── Layout: Full-bleed image with text overlay ── */
function LayoutFullbleed({ piece }: { piece: GalleryPiece }) {
  const ac = accentMap[piece.accent];
  return (
    <article className="relative min-h-[80vh] flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={piece.image}
          alt={piece.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      {/* Text overlay */}
      <div className="relative z-10 w-full px-10 pb-16 lg:px-20 lg:pb-20 max-w-5xl">
        <p className={`text-xs font-semibold uppercase tracking-[0.22em] mb-4 ${ac.label}`}>
          {piece.category} — {piece.date}
        </p>
        <h2 className="font-playfair text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
          {piece.title}
        </h2>
        {piece.subtitle && (
          <p className="font-playfair italic text-white/70 mb-6"
            style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}>
            {piece.subtitle}
          </p>
        )}
        <BodyContent piece={piece} textColor="text-white/70" maxWidth="max-w-2xl" />
      </div>
    </article>
  );
}

/* ── Layout: Text-dominant with floating image ── */
function LayoutTextDominant({ piece }: { piece: GalleryPiece }) {
  const ac = accentMap[piece.accent];
  return (
    <article className="bg-paperfolio-bg px-10 py-20 lg:px-24 lg:py-28">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
        {/* Text block */}
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] mb-6 ${ac.label}`}>
            {piece.category} — {piece.date}
          </p>
          <h2 className="font-playfair text-paperfolio-text mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {piece.title}
          </h2>
          {/* Pull quote style */}
          {piece.subtitle && (
            <blockquote className="border-l-2 border-paperfolio-accent-coral pl-6 my-10">
              <p className="font-playfair italic text-paperfolio-text-muted"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", lineHeight: 1.5 }}>
                &ldquo;{piece.subtitle}&rdquo;
              </p>
            </blockquote>
          )}
          <BodyContent piece={piece} maxWidth="max-w-2xl" />
        </div>
        {/* Floating image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(31,41,55,0.14)] sticky top-24">
          <Image
            src={piece.image}
            alt={piece.imageAlt}
            fill
            className="object-cover"
            sizes="380px"
          />
        </div>
      </div>
    </article>
  );
}

/* ── Piece router ── */
function GalleryPieceBlock({ piece }: { piece: GalleryPiece }) {
  switch (piece.layout) {
    case "image-left":    return <LayoutImageLeft piece={piece} />;
    case "image-right":   return <LayoutImageRight piece={piece} />;
    case "fullbleed":     return <LayoutFullbleed piece={piece} />;
    case "text-dominant": return <LayoutTextDominant piece={piece} />;
  }
}

/* ── Page ── */
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-paperfolio-bg pt-[58px]">

      {/* ── Hero Header ── */}
      <header className="px-10 py-20 lg:py-28 border-b border-paperfolio-line bg-paperfolio-surface">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-coral mb-4">
              Gallery
            </p>
            <h1 className="font-playfair text-paperfolio-text"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
              미술관
            </h1>
            <p className="font-playfair italic text-paperfolio-text-muted mt-4"
              style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}>
              A space where images and words meet
            </p>
          </div>
          <p className="text-sm text-paperfolio-text-muted max-w-sm leading-[1.9]"
            style={{ fontFamily: "var(--font-korean), serif", wordBreak: "keep-all" }}>
            작업하면서 남긴 사진과 글. 기록이기도 하고 생각이기도 하고, 때로는 그냥 좋아서 담아둔 것들.
          </p>
        </div>

        {/* Divider with count */}
        <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-paperfolio-line flex items-center justify-between">
          <span className="text-xs tracking-[0.18em] uppercase text-paperfolio-text-muted">
            {galleryPieces.length} pieces
          </span>
          <span className="text-xs tracking-[0.18em] uppercase text-paperfolio-text-muted">
            2025 — 2026
          </span>
        </div>
      </header>

      {/* ── Gallery pieces ── */}
      <main>
        {galleryPieces.map((piece) => (
          <div
            key={piece.id}
            className="border-b border-paperfolio-line"
          >
            <GalleryPieceBlock piece={piece} />
          </div>
        ))}
      </main>

      {/* ── Footer CTA ── */}
      <section className="px-10 py-24 bg-paperfolio-text text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow mb-6">
          More to come
        </p>
        <h2 className="font-playfair italic text-white mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}>
          계속 채워나가는 중입니다.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 text-sm hover:bg-white hover:text-paperfolio-text transition-all duration-200"
          >
            글 읽기 →
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-paperfolio-accent-yellow text-paperfolio-text px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            함께 만들어요
          </Link>
        </div>
      </section>
    </div>
  );
}
