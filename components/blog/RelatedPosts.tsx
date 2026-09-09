import { ENGLISH_BLOG_SERIES } from "@/lib/english-blog-series";
import Image from "next/image";
import Link from "next/link";
import { getSeriesTitle } from "@/lib/blog-data";
import styles from "@/components/brand/FiberContent.module.css";

interface RelatedPostsProps {
  locale?: "ko" | "en";
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    series?: string;
    date?: string;
  }[];
}

export default function RelatedPosts({ posts, locale = "ko" }: RelatedPostsProps) {
  if (posts.length === 0) return null;
  return (
    <aside className={styles.related} aria-label={locale === "en" ? "Further reading" : "함께 읽기"}>
      <header>
        <p className={styles.eyebrow}>{locale === "en" ? "Further reading" : "함께 읽기 / Further reading"}</p>
        <h3 className={styles.title}>{locale === "en" ? "Continue exploring" : "이 글도 같이 읽어보세요"}</h3>
      </header>
      <div className={styles.relatedGrid}>
        {posts.map((post) => (
          <Link key={post.slug} href={`${locale === "en" ? "/en" : ""}/blog/${post.slug}`} className={styles.entry}>
            {post.coverImage && (
              <figure className={styles.image}>
                <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 700px) 88vw, 28vw" />
              </figure>
            )}
            <div className={styles.meta}>
              {post.series && <span>{locale === "en" ? ENGLISH_BLOG_SERIES[post.series]?.title ?? post.series : getSeriesTitle(post.series)}</span>}
              {post.date && <span>{post.date}</span>}
            </div>
            <h4>{post.title}</h4>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
