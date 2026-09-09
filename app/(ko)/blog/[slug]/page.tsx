import styles from "@/components/brand/FiberArticle.module.css";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import AuthorCard from "@/components/blog/AuthorCard";
import BlogNewsletterCTA from "@/components/blog/BlogNewsletterCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { getSeriesTitle } from "@/lib/blog-data";
import { generateBlogMetadata } from "@/lib/metadata";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/mdx";
import { SITE_CONFIG } from "@/lib/seo";
import { getWorkBySlug } from "@/lib/work-mdx";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return;
  }

  const { title, excerpt, coverImage, date } = post.frontMatter;

  return generateBlogMetadata({
    title: String(title),
    description: String(excerpt),
    path: `/blog/${post.slug}`,
    image: typeof coverImage === "string" ? coverImage : undefined,
    publishedTime: typeof date === "string" ? date : undefined,
    authors: ["Reedo"],
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    const work = await getWorkBySlug(params.slug);
    if (work) {
      redirect(`/works/${work.slug}`);
    }

    notFound();
  }

  const relatedPosts = (await getRelatedPosts(params.slug, 3)).map((item) => ({
    slug: item.slug,
    title: String(item.frontMatter.title),
    excerpt: String(item.frontMatter.excerpt),
    coverImage: typeof item.frontMatter.coverImage === "string" ? item.frontMatter.coverImage : undefined,
    series: typeof item.frontMatter.series === "string" ? item.frontMatter.series : undefined,
    date: typeof item.frontMatter.date === "string" ? item.frontMatter.date : undefined,
  }));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: String(post.frontMatter.title),
    description: String(post.frontMatter.excerpt),
    datePublished: String(post.frontMatter.date),
    author: {
      "@type": "Person",
      name: "Reedo",
    },
    publisher: {
      "@type": "Person",
      name: "Reedo",
    },
    image: typeof post.frontMatter.coverImage === "string" ? [`${SITE_CONFIG.url}${post.frontMatter.coverImage}`] : undefined,
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${post.slug}`,
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <div className={styles.rail}>
            <Link
              href="/blog"
              className={styles.back}
            >
              <ArrowLeft className="h-4 w-4" />
              글 목록으로 돌아가기
            </Link>
              <span className={styles.railLabel}>DMS JOURNAL / INSIGHTS</span>
            </div>

            <div className={styles.meta}>
              {post.frontMatter.series && (
                <span className={styles.category}>
                  {getSeriesTitle(String(post.frontMatter.series))}
                </span>
              )}
              <time dateTime={String(post.frontMatter.date)} className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {String(post.frontMatter.date)}
              </time>
              {post.frontMatter.readTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {String(post.frontMatter.readTime)}
                </span>
              )}
            </div>

            <div className="space-y-5">
              <h1 className={styles.title}>{String(post.frontMatter.title)}</h1>
              {typeof post.frontMatter.subtitle === "string" && post.frontMatter.subtitle.trim() && (
                <p
                  className={styles.subtitle}
                >
                  {post.frontMatter.subtitle}
                </p>
              )}
              <p className={styles.summary}>{String(post.frontMatter.excerpt)}</p>
            </div>
          </div>

          {typeof post.frontMatter.coverImage === "string" && (
            <figure className={styles.cover}>
              <div className={styles.coverImage}>
                <Image
                  src={post.frontMatter.coverImage}
                  alt={String(post.frontMatter.title)}
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
            <MDXRemote source={post.content} components={{ ...MDXComponents, h1: MDXComponents.h2 }} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
          <AuthorCard />
          <BlogNewsletterCTA />
          <RelatedPosts posts={relatedPosts} />
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
