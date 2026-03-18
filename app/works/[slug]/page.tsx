import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="px-6 pb-14 pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:items-end">
          <div className="space-y-7">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm text-paperfolio-text-muted">
              <span className="rounded-full border border-paperfolio-accent-blue/20 bg-paperfolio-accent-blue/10 px-3 py-1 font-semibold text-paperfolio-accent-blue">
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
              <h1 className="paperfolio-display max-w-4xl text-paperfolio-text">{String(work.frontMatter.title)}</h1>
              <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">{String(work.frontMatter.excerpt)}</p>
            </div>
          </div>

          {typeof work.frontMatter.coverImage === "string" && (
            <div className="relative overflow-hidden rounded-[36px] border border-paperfolio-line bg-paperfolio-surface shadow-[0_24px_80px_rgba(31,41,55,0.10)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={work.frontMatter.coverImage}
                  alt={String(work.frontMatter.title)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paperfolio-text/10 via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <article className="editorial-prose">
            <MDXRemote source={work.content} components={MDXComponents} />
          </article>
          <AuthorCard />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">다음 대화</p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">읽고 끝내지 말고, 실제 문제로 이어가도 좋습니다.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                자동화, 설계, 교육, 콘텐츠 중 무엇이든 지금 필요한 문제부터 같이 정리해볼 수 있습니다.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              편하게 문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
