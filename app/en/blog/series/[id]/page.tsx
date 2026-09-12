import { notFound } from "next/navigation";
import Link from "next/link";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import EnglishArticleList from "@/components/blog/EnglishArticleList";
import EmptySeriesPage from "@/components/blog/EmptySeriesPage";
import { getVisibleEmptySeriesIds } from "@/lib/blog-data";
import { ENGLISH_BLOG_SERIES } from "@/lib/english-blog-series";
import { getAllPosts, getPostsBySeries } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return [...new Set([...(await getAllPosts("en")).map(post => post.frontMatter.series).filter(Boolean), ...getVisibleEmptySeriesIds()])].map(id => ({ id: String(id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const series = ENGLISH_BLOG_SERIES[id];
  if (!series || (!series.showWhenEmpty && !(await getPostsBySeries(id, "en")).length)) return;
  return generateSeoMetadata({ title: series.title, description: series.description, path: `/en/blog/series/${id}`, ...(series.showWhenEmpty ? { image: series.coverImage } : {}) });
}

export default async function EnglishSeriesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const series = ENGLISH_BLOG_SERIES[id];
  const posts = await getPostsBySeries(id, "en");
  if (!series) notFound();
  if (!posts.length) {
    if (!series.showWhenEmpty) notFound();
    return <EmptySeriesPage series={series} locale="en" />;
  }
  return <main className={styles.page}>
    <FiberPageHeader eyebrow={series.subtitle} lead={id === "optical-communications" ? "Fiber" : series.title} accent={id === "optical-communications" ? "networks." : ""} variant="insights" title={series.title} description={series.description} note={<span>{posts.length} {posts.length === 1 ? "article" : "articles"}</span>} />
    <section className={styles.section}><div className="mx-auto max-w-7xl">
      <Link className="mb-8 inline-block underline underline-offset-4" href="/en/blog">← All series and articles</Link>
      <EnglishArticleList posts={posts.map(post => ({ slug: post.slug, title: String(post.frontMatter.title), excerpt: String(post.frontMatter.excerpt), date: String(post.frontMatter.date) }))} />
    </div></section>
  </main>;
}
