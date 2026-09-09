import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EDUCATION_TRACKS } from "@/lib/education-data";
import styles from "@/components/brand/FiberContent.module.css";
import { editorialCover } from "@/lib/editorial-art";

const courseArtwork: Record<string, string> = {
  "gen-ai": "content/education/gen-ai/01-foundation/01-overview.mdx",
  "vibe-coding": "content/education/vibe-coding/02-master-class/01-concepts.mdx",
  "optical-training": "content/education/optical-training/01-fttx-foundation/01-fttx-network-structure.mdx",
  "automation": "content/education/automation/01-automation-tools/01-openclaw.mdx",
};

export default function EducationPage() {
  const tracks = Object.values(EDUCATION_TRACKS).filter((track) => !track.hidden);
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>DMS.LABS / Education</p>
          <p className={styles.display} aria-hidden="true">Knowledge.<br /><em>In practice.</em></p>
          <h1 className={styles.title}>다양한 AI & 엔지니어링<br />교육자료를 제공합니다.</h1>
          <p className={styles.description}>시중에 널리 알려지지 않은 각종 고급 스킬들을<br />체계적으로 정리하여 지속적으로 업로드합니다.</p>
          <a href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer" className={styles.button}>
            교육문의 <ArrowRight size={16} aria-hidden="true" />
          </a>
        </header>
        <section aria-label="교육 과정" className={styles.grid}>
          {tracks.map((track) => {
            const content = <>
              <figure className={styles.image}>
                <Image src={editorialCover(courseArtwork[track.id] || "") || track.backgroundImage || track.image} alt={track.title} fill sizes="(max-width: 700px) 88vw, 44vw" />
              </figure>
              <div className={styles.meta}><span>{track.id.toUpperCase().replaceAll("-", " ")}</span><span>VOL. {track.vol}</span></div>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
              <div className={styles.tags}>{track.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className={styles.button}>{track.externalLink ? "자료 보러 가기" : "커리큘럼 보기"}<ArrowRight size={16} aria-hidden="true" /></span>
            </>;
            return track.externalLink ? (
              <a key={track.id} href={track.externalLink} target="_blank" rel="noopener noreferrer" className={styles.entry}>{content}</a>
            ) : (
              <Link key={track.id} href={`/education/${track.id}`} className={styles.entry}>{content}</Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
