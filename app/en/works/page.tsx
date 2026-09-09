import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import ProjectCover from "@/components/brand/ProjectCover";
import styles from "@/components/brand/FiberPages.module.css";
import { ENGLISH_SHOWCASE_WORKS } from "@/lib/english-works";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "Selected Work",
  description: "Explore Reedo's work in optical network training, AI transformation, automation, practical education and creative technology.",
  path: "/en/works",
  locale: "en_US",
  keywords: ["DMS.Labs", "Reedo", "AI transformation", "automation projects", "FTTx training", "AI education"],
});

export default function EnglishWorksPage() {
  return (
    <main className={styles.page}>
      <FiberPageHeader
        eyebrow="Projects / Works" lead="Proof of" accent="possibility." variant="projects"
        title="Selected work"
        description="Explore how automation, engineering, education and creative technology become practical work. Start with the area that matters to you."
        note={<><span>{ENGLISH_SHOWCASE_WORKS.length} works · 2024 — 2026</span><span>The work speaks before the words do</span></>}
      >
        <p>Optical network training is available in English. Other project details currently open in Korean, as marked below.</p>
        <Link href="/en/contact">Discuss a project in English ↗</Link>
      </FiberPageHeader>

      <section className={styles.section}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Works</p>
            <h2 className="paperfolio-h1">Find the work that connects with yours</h2>
          </div>
          <div className={styles.workGrid}>
            {ENGLISH_SHOWCASE_WORKS.map((work, index) => {
              const content = <div className="space-y-4">
                <div className={styles.workImage}><ProjectCover work={work} index={index} locale="en" /></div>
                <h3 lang={work.contentLanguage} className="text-2xl font-semibold tracking-tight text-paperfolio-text">{work.title}</h3>
                <p lang={work.contentLanguage} className="text-sm leading-7 text-paperfolio-text-muted">{work.summary}</p>
                <div lang={work.contentLanguage} className="flex flex-wrap gap-2 pt-2">
                  {work.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                {work.link && <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-paperfolio-text">{work.linkLabel}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></span>}
              </div>;

              if (!work.link) return <article key={work.title} className={styles.workEntry}>{content}</article>;
              if (work.link.startsWith("http")) return <a key={work.title} href={work.link} target="_blank" rel="noopener noreferrer" className={styles.workEntry}>{content}</a>;
              return <Link key={work.title} href={work.link} className={styles.workEntry}>{content}</Link>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
