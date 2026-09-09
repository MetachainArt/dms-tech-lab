import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MDXPost } from "@/lib/mdx";
import styles from "./Home.module.css";
import type { HomeLocaleProps } from "@/lib/home-copy";

export default function Writing({ posts, locale = "ko" }: { posts: MDXPost[] } & HomeLocaleProps) {
  const english = locale === "en";
  if (posts.length === 0) return null;
  return (
    <div className={`${styles.section} ${styles.writingSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}><span>05 /</span> REEDO INSIGHTS</p>
            <h2 className={styles.sectionTitle}>Notes from <em>the work.</em></h2>
            <p className={styles.sectionDescription}>{english ? "Notes on automation, tools, creativity and the way we work." : "자동화, 도구, 감각, 운영 방식에 대해 실무에서 부딪히며 정리한 생각들입니다."}</p>
          </div>
          <Link href={english ? "/en/blog" : "/blog"} className={styles.textLink}>Read more <ArrowUpRight size={17} /></Link>
        </div>
        <div className={styles.writingList}>
          {posts.map((post, index) => (
            <Link key={post.slug} href={`${english ? "/en" : ""}/blog/${post.slug}`} className={styles.writingRow}>
              <div className={styles.writingMeta}><span>0{index + 1}</span><span>{String(post.frontMatter.date)}</span></div>
              <div lang={locale}><h3>{String(post.frontMatter.title)}</h3><p>{String(post.frontMatter.excerpt)}</p></div>
              <span className={styles.readLink}>Read <ArrowUpRight size={20} /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
