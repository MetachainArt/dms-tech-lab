import styles from "@/components/brand/FiberArticle.module.css";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { EnglishMDXComponents } from "@/components/mdx/EnglishMDXComponents";
import { generateBlogMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/seo";
import { getAllWorks, getWorkBySlug } from "@/lib/work-mdx";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const work = await getWorkBySlug(slug, "en");
  if (!work) return;
  const { title, excerpt, coverImage, date } = work.frontMatter;
  return generateBlogMetadata({
    title: String(title),
    description: String(excerpt),
    path: `/en/works/${work.slug}`,
    image: typeof coverImage === "string" ? coverImage : undefined,
    publishedTime: typeof date === "string" ? date : undefined,
    authors: ["Reedo"],
  });
}

export async function generateStaticParams() {
  return (await getAllWorks("en")).map((work) => ({ slug: work.slug }));
}

export default async function EnglishWorkDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const work = await getWorkBySlug(slug, "en");
  if (!work) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "en",
    headline: String(work.frontMatter.title),
    description: String(work.frontMatter.excerpt),
    datePublished: String(work.frontMatter.date),
    author: { "@type": "Person", name: "Reedo" },
    publisher: { "@type": "Person", name: "Reedo" },
    image: typeof work.frontMatter.coverImage === "string" ? [new URL(work.frontMatter.coverImage, SITE_CONFIG.url).href] : undefined,
    mainEntityOfPage: `${SITE_CONFIG.url}/en/works/${work.slug}`,
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <section className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <div className={styles.rail}>
              <Link href="/en/works" className={styles.back}><ArrowLeft className="h-4 w-4" />Back to selected work</Link>
              <span className={styles.railLabel}>DMS LABS / FIELD NOTES</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.category}>{work.frontMatter.kind === "guide" ? "WORK / PRACTICAL GUIDE" : "SELECTED WORK"}</span>
              <time dateTime={String(work.frontMatter.date)} className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{String(work.frontMatter.date)}</time>
              {work.frontMatter.readTime && <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{String(work.frontMatter.readTime)}</span>}
            </div>
            <div className="space-y-5">
              <h1 className={styles.title}>{String(work.frontMatter.title)}</h1>
              <p className={styles.summary}>{String(work.frontMatter.excerpt)}</p>
            </div>
          </div>
          {typeof work.frontMatter.coverImage === "string" && (
            <figure className={styles.cover}>
              <div className={styles.coverImage}><Image src={work.frontMatter.coverImage} alt={String(work.frontMatter.title)} fill priority sizes="(max-width: 767px) 100vw, 78vw" /></div>
              <figcaption><span>DMS / VISUAL ESSAY</span></figcaption>
            </figure>
          )}
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.reading}>
          <article className={`editorial-prose ${styles.prose}`}>
            <MDXRemote source={work.content} components={EnglishMDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">Continue the conversation</p>
              <h2 className={styles.ctaTitle}>Have a workflow you need to make reliable?</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">We can start by defining the problem, the evidence and what needs a human decision.</p>
            </div>
            <Link href="/en/contact" className={styles.ctaLink}>Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
