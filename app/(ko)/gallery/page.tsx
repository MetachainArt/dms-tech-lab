import Image from "next/image";
import { galleryPieces, type GalleryPiece } from "@/lib/gallery-data";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import brand from "@/components/brand/FiberPages.module.css";
import styles from "@/components/ideas/IdeasPage.module.css";
import EssayPiece from "@/components/ideas/EssayPiece";
import { watchingEssayKo } from "@/lib/ideas-essay-watching";
import { savedMemoryEssayKo } from "@/lib/ideas-essay-saved";

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

export const metadata = generateSeoMetadata({
  title: "아이디어 — Reedo",
  description: "사진과 글이 만나는 공간. 작업, 생각, 감각을 기록합니다.",
  path: "/gallery",
});

function GalleryPieceBlock({ piece }: { piece: GalleryPiece }) {
  const imageRight = piece.layout === "image-right" || piece.layout === "text-dominant";
  return (
    <article id={piece.id} className={styles.piece}>
      <div className={styles.pieceInner}>
        <figure className={imageRight ? styles.imageRight : styles.imageLeft}>
          <Image src={piece.image} alt={piece.imageAlt}
            width={piece.imageWidth ?? 1200} height={piece.imageHeight ?? 1600}
            className={styles.image} sizes="(max-width: 1024px) 88vw, 43vw" loading="lazy" />
          <figcaption className={styles.caption}>
            <span>{piece.title}</span>
            <a href={piece.image} target="_blank" rel="noopener noreferrer"
              aria-label={`${piece.title} 이미지 전체 보기 (새 탭)`}>
              이미지 전체 보기 ↗
            </a>
          </figcaption>
        </figure>
        <div className={styles.copy}>
          <p className={styles.label}>{piece.category} / {piece.date}</p>
          <h2 className={styles.title}>{piece.title}</h2>
          {piece.subtitle && <p className={styles.subtitle}>{piece.subtitle}</p>}
          <BodyContent piece={piece} maxWidth="max-w-2xl" />
        </div>
      </div>
    </article>
  );
}

export default function GalleryPage() {
  return (
    <main className={`${brand.page} ${styles.gallery}`}>
      <FiberPageHeader
        eyebrow="Ideas / Reedo" lead="Images &" accent="words." variant="insights"
        title="아이디어"
        description="작업하면서 남긴 사진과 글. 기록이기도 하고 생각이기도 하고, 때로는 그냥 좋아서 담아둔 것들."
        note={<><span>{galleryPieces.length + 2} pieces · 2025 — 2026</span><span>A space where images and words meet</span></>}
      />
      <div className={styles.essay}><EssayPiece essay={savedMemoryEssayKo} locale="ko" /></div>
      <div className={styles.essay}><EssayPiece essay={watchingEssayKo} locale="ko" /></div>
      {galleryPieces.map((piece) => <GalleryPieceBlock key={piece.id} piece={piece} />)}
    </main>
  );
}