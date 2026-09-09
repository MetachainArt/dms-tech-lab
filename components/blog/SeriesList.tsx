import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogSeries } from "@/lib/blog-data";
import styles from "@/components/brand/FiberContent.module.css";

interface SeriesListProps {
  locale?: "ko" | "en";
  series: Array<BlogSeries & { postCount: number }>;
}

export default function SeriesList({ series, locale = "ko" }: SeriesListProps) {
  return (
    <div className={styles.grid}>
      {series.map((item) => (
        <Link key={item.id} href={`${locale === "en" ? "/en" : ""}/blog/series/${item.id}`} className={`${styles.entry} ${styles.seriesCard}`}>
          <figure className={styles.image}>
            <Image src={item.coverImage} alt={item.title} fill sizes="(max-width: 700px) 88vw, 44vw" />
          </figure>
          <div className={styles.meta}><span>{item.subtitle}</span><span>{item.postCount}{locale === "en" ? " articles" : "개의 글"}</span></div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className={styles.tags}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <span className={styles.button}>{locale === "en" ? "Explore series" : "시리즈 보기"} <ArrowRight size={16} aria-hidden="true" /></span>
        </Link>
      ))}
    </div>
  );
}
