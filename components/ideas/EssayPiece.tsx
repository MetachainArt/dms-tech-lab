import Image from "next/image";
import type { IdeasEssay } from "@/lib/ideas-essay-watching";

/** Ideas 글 상세형 블록. 한·영 공용, 기존 갤러리 색·타이포를 따른다. */
export default function EssayPiece({ essay, locale }: { essay: IdeasEssay; locale: "ko" | "en" }) {
  const ko = locale === "ko";
  const bodyStyle = ko
    ? { fontFamily: "var(--font-korean), serif", wordBreak: "keep-all" as const, fontSize: "clamp(0.98rem, 1.3vw, 1.08rem)" }
    : { fontSize: "clamp(1rem, 1.3vw, 1.1rem)" };
  return (
    <article id={essay.id} lang={locale} className="bg-paperfolio-bg px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-5 text-paperfolio-accent-blue">
          {essay.category} — {essay.date}
        </p>
        <h2 className="font-playfair text-paperfolio-text mb-3 break-keep"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}>
          {essay.title}
        </h2>
        <p className="font-playfair italic text-paperfolio-text-muted mb-6" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}>
          {essay.subtitle}
        </p>
        <p className="border-l-2 border-paperfolio-accent-coral pl-5 mb-12 text-paperfolio-text-muted leading-[1.9]" style={bodyStyle}>
          {essay.summary}
        </p>
        <div className="space-y-7">
          {essay.blocks.map((block, i) => {
            if (block.type === "h") {
              return <h3 key={i} className="font-playfair text-paperfolio-text pt-8 break-keep"
                style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", lineHeight: 1.25 }}>{block.text}</h3>;
            }
            if (block.type === "motto") {
              return <p key={i} className="font-playfair italic text-center tracking-[0.04em] text-paperfolio-text"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", opacity: 0.8, paddingBlock: "1rem", borderTop: "1px solid var(--color-paperfolio-line)", borderBottom: "1px solid var(--color-paperfolio-line)" }}>{block.text}</p>;
            }
            if (block.type === "figure") {
              return <figure key={i} className="-mx-2 sm:mx-0 my-10">
                <Image src={block.src} alt={block.alt} width={block.width} height={block.height}
                  className="block w-full h-auto" sizes="(max-width:768px) 100vw, 768px" loading="lazy" />
                <figcaption className="mt-3 text-xs text-paperfolio-text-muted">{block.caption}</figcaption>
              </figure>;
            }
            return <p key={i} className="leading-[2] text-paperfolio-text-muted" style={bodyStyle}>{block.text}</p>;
          })}
        </div>
        <aside className="mt-14 border-t border-paperfolio-line pt-6" aria-label={ko ? "참고한 자료" : "Sources"}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-paperfolio-text-muted mb-4">{ko ? "참고한 자료" : "Sources"}</h3>
          <ul className="space-y-2 text-sm leading-7 text-paperfolio-text-muted">
            {essay.sources.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-paperfolio-accent-blue hover:underline underline-offset-4">{s.label}</a></li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
