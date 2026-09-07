import Link from "next/link";
import ProjectCover from "@/components/brand/ProjectCover";
import { ArrowUpRight } from "lucide-react";
import { SHOWCASE_WORKS } from "@/lib/works-showcase";
import styles from "./Home.module.css";

export default function SelectedWorks() {
  return (
    <div className={`${styles.section} ${styles.worksSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}><span>03 /</span> SELECTED WORKS</p>
            <h2 className={styles.sectionTitle}>The work speaks<br /><em>before the words do.</em></h2>
            <p className={styles.sectionDescription}>Start with whatever feels closest to what you&apos;re working on right now.</p>
          </div>
          <Link href="/works" className={styles.textLink}>See all work <ArrowUpRight size={17} /></Link>
        </div>
        <div className={styles.worksGrid}>
          {SHOWCASE_WORKS.map((work, index) => {
            const content = <>
              <div className={styles.workImage}>
                <ProjectCover work={work} index={index} />
              </div>
              <div className={styles.workTags}>{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <h3>{work.title}</h3>
              <p className={styles.workSummary}>{work.summary}</p>
            </>;
            return work.link ? (
              <a key={work.title} href={work.link} className={styles.workCard} {...(work.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{content}</a>
            ) : <article key={work.title} className={styles.workCard}>{content}</article>;
          })}
        </div>
      </div>
    </div>
  );
}
