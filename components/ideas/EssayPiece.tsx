import Image from "next/image";
import type { EssayBlock, IdeasEssay } from "@/lib/ideas-essay-watching";
import styles from "./IdeasPage.module.css";

type FigureBlock = Extract<EssayBlock, { type: "figure" }>;
type TextBlock = Exclude<EssayBlock, { type: "figure" }>;
type EssaySection = { blocks: TextBlock[]; figure?: FigureBlock };

/** Use the same alternating image-and-copy grid as the other Ideas pieces. */
export default function EssayPiece({ essay, locale }: { essay: IdeasEssay; locale: "ko" | "en" }) {
  const ko = locale === "ko";
  const bodyStyle = ko
    ? { fontFamily: "var(--font-korean), serif", wordBreak: "keep-all" as const, fontSize: "clamp(0.98rem, 1.3vw, 1.08rem)" }
    : { fontSize: "clamp(1rem, 1.3vw, 1.1rem)" };
  const sections: EssaySection[] = [];
  let section: EssaySection = { blocks: [] };
  for (const block of essay.blocks) {
    if (block.type === "figure") {
      if (section.figure) {
        sections.push(section);
        section = { blocks: [] };
      }
      section.figure = block;
    } else {
      section.blocks.push(block);
    }
  }
  if (section.blocks.length || section.figure) sections.push(section);

  return (
    <article id={essay.id} lang={locale} className={styles.essayArticle}>
      {sections.map((part, partIndex) => (
        <div key={partIndex} className={styles.pieceInner}>
          {part.figure && (
            <figure className={partIndex % 2 === 0 ? styles.imageRight : styles.imageLeft}>
              <Image src={part.figure.src} alt={part.figure.alt}
                width={part.figure.width} height={part.figure.height}
                className={styles.image} sizes="(max-width: 1024px) 88vw, 43vw" loading="lazy" />
              <figcaption className={styles.caption}>
                <span>{part.figure.caption}</span>
                <a href={part.figure.src} target="_blank" rel="noopener noreferrer"
                  aria-label={ko ? `${essay.title} 이미지 ${partIndex + 1} 전체 보기 (새 탭)` : `${essay.title} image ${partIndex + 1}, full size (new tab)`}>
                  {ko ? "이미지 전체 보기 ↗" : "View full image ↗"}
                </a>
              </figcaption>
            </figure>
          )}
          <div className={styles.copy}>
            {partIndex === 0 && (
              <>
                <p className={styles.label}>{essay.category} / {essay.date}</p>
                <h2 className={styles.title}>{essay.title}</h2>
                <p className={styles.subtitle}>{essay.subtitle}</p>
                <p className="border-l-2 border-paperfolio-accent-blue pl-5 mb-12 text-paperfolio-text-muted leading-[1.9]" style={bodyStyle}>
                  {essay.summary}
                </p>
              </>
            )}
            <div className="space-y-7">
              {part.blocks.map((block, i) => {
                if (block.type === "h") {
                  return <h3 key={i} className={styles.essayHeading}>{block.text}</h3>;
                }
                if (block.type === "motto") {
                  return <p key={i} className="font-playfair italic text-center tracking-[0.04em] text-paperfolio-text"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", opacity: 0.8, paddingBlock: "1rem", borderTop: "1px solid var(--color-paperfolio-line)", borderBottom: "1px solid var(--color-paperfolio-line)" }}>{block.text}</p>;
                }
                return <p key={i} className="leading-[2] text-paperfolio-text-muted" style={bodyStyle}>{block.text}</p>;
              })}
            </div>
            {partIndex === sections.length - 1 && (
              <section aria-label={ko ? "참고한 자료" : "Sources"} className="mt-14 pt-8 border-t border-paperfolio-line">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paperfolio-text-muted mb-4">{ko ? "참고한 자료" : "Sources"}</h3>
                <ul className="space-y-2 text-sm leading-7 text-paperfolio-text-muted">
                  {essay.sources.map((s) => (
                    <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-paperfolio-accent-blue hover:underline underline-offset-4">{s.label}</a></li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      ))}
    </article>
  );
}