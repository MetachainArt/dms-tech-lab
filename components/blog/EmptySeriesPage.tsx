import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { BlogSeries } from "@/lib/blog-data";
import type { Locale } from "@/lib/i18n";
import styles from "@/components/brand/FiberContent.module.css";
import emptyStyles from "./EmptySeriesPage.module.css";

export default function EmptySeriesPage({ series, locale = "ko" }: { series: BlogSeries; locale?: Locale }) {
  const english = locale === "en";

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href={english ? "/en/blog" : "/blog"} className={styles.back}>
          <ArrowLeft size={15} aria-hidden="true" />
          {english ? "All series and articles" : "글 목록으로 돌아가기"}
        </Link>
        <header className={`${styles.journalHero} ${emptyStyles.hero}`}>
          <div>
            <p className={styles.eyebrow}>DMS.LABS / {english ? "Reedo Insights" : "리도 인사이트"}</p>
            <h1 className={english ? emptyStyles.englishTitle : undefined}>{series.title}</h1>
            <p className={styles.eyebrow}>{series.subtitle}</p>
            <p className={styles.description}>{series.description}</p>
            <div className={styles.tags}>{series.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <dl className={styles.facts}>
              <div><dt>{english ? "By" : "작성"}</dt><dd>Reedo</dd></div>
              <div><dt>{english ? "Articles" : "편수"}</dt><dd>{english ? "0 articles" : "0편"}</dd></div>
              <div><dt>{english ? "Status" : "상태"}</dt><dd>{english ? "In preparation" : "자료 준비 중"}</dd></div>
            </dl>
          </div>
          <figure className={styles.journalCover}>
            <Image src={series.coverImage} alt={series.title} fill priority sizes="(max-width: 700px) 88vw, 44vw" />
          </figure>
        </header>
        <section className={`${styles.journalList} py-10`} aria-labelledby="series-empty-heading">
          <h2 id="series-empty-heading" className={styles.title}>
            {english ? "The first resources are in preparation." : "첫 자료를 준비하고 있습니다."}
          </h2>
          <p className={styles.description}>
            {english
              ? "Technical documents and field notes will appear here as they are published."
              : "기술 문서와 현장 자료를 차근차근 정리하고 있습니다. 등록된 자료는 이곳에서 확인하실 수 있습니다."}
          </p>
        </section>
      </div>
    </main>
  );
}
