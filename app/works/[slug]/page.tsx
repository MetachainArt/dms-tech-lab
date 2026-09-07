import styles from "@/components/brand/FiberArticle.module.css";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import AuthorCard from "@/components/blog/AuthorCard";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { BLOG_SERIES } from "@/lib/blog-data";
import { generateBlogMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/seo";
import { getAllWorks, getWorkBySlug } from "@/lib/work-mdx";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const work = await getWorkBySlug(params.slug);

  if (!work) {
    return;
  }

  const { title, excerpt, coverImage, date } = work.frontMatter;

  return generateBlogMetadata({
    title: String(title),
    description: String(excerpt),
    path: `/works/${work.slug}`,
    image: typeof coverImage === "string" ? coverImage : undefined,
    publishedTime: typeof date === "string" ? date : undefined,
    authors: ["Reedo"],
  });
}

export async function generateStaticParams() {
  const works = await getAllWorks();
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const work = await getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  const seriesId = typeof work.frontMatter.series === "string" ? work.frontMatter.series : undefined;
  const backHref = seriesId && BLOG_SERIES[seriesId] ? `/blog/series/${seriesId}` : "/works";
  const backLabel = seriesId && BLOG_SERIES[seriesId] ? "시리즈로 돌아가기" : "대표 작업으로 돌아가기";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: String(work.frontMatter.title),
    description: String(work.frontMatter.excerpt),
    datePublished: String(work.frontMatter.date),
    author: {
      "@type": "Person",
      name: "Reedo",
    },
    publisher: {
      "@type": "Person",
      name: "Reedo",
    },
    image:
      typeof work.frontMatter.coverImage === "string"
        ? [`${SITE_CONFIG.url}${work.frontMatter.coverImage}`]
        : undefined,
    mainEntityOfPage: `${SITE_CONFIG.url}/works/${work.slug}`,
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <div className={styles.rail}>
            <Link
              href={backHref}
              className={styles.back}
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>
              <span className={styles.railLabel}>DMS LABS / FIELD NOTES</span>
            </div>

            <div className={styles.meta}>
              <span className={styles.category}>
                대표 작업
              </span>
              <time dateTime={String(work.frontMatter.date)} className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {String(work.frontMatter.date)}
              </time>
              {work.frontMatter.readTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {String(work.frontMatter.readTime)}
                </span>
              )}
            </div>

            <div className="space-y-5">
              <h1 className={styles.title}>{String(work.frontMatter.title)}</h1>
              <p className={styles.summary}>{String(work.frontMatter.excerpt)}</p>
            </div>
          </div>

          {typeof work.frontMatter.coverImage === "string" && (
            <figure className={styles.cover}>
              <div className={styles.coverImage}>
                <Image
                  src={work.frontMatter.coverImage}
                  alt={String(work.frontMatter.title)}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 78vw"
                />
              </div>
              <figcaption><span>DMS / VISUAL ESSAY</span></figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.reading}>
          <article className={`editorial-prose ${styles.prose}`}>
            <MDXRemote source={work.content} components={{ ...MDXComponents, h1: MDXComponents.h2 }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
          <AuthorCard />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">다음 대화</p>
              <h2 className={styles.ctaTitle}>읽고 끝내지 말고, 실제 문제로 이어가도 좋습니다.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                자동화, 설계, 교육, 콘텐츠 중 무엇이든 지금 필요한 문제부터 같이 정리해볼 수 있습니다.
              </p>
            </div>
            <Link
              href="/#contact"
              className={styles.ctaLink}
            >
              편하게 문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
