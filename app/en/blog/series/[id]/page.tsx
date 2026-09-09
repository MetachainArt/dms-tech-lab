import { notFound } from "next/navigation";
import Link from "next/link";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import EnglishArticleList from "@/components/blog/EnglishArticleList";
import { ENGLISH_BLOG_SERIES } from "@/lib/english-blog-series";
import { getAllPosts, getPostsBySeries } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return [...new Set((await getAllPosts("en")).map(post => post.frontMatter.series).filter(Boolean))].map(id => ({ id: String(id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const series = ENGLISH_BLOG_SERIES[id];
  if (!series || !(await getPostsBySeries(id, "en")).length) return;
  return generateSeoMetadata({ title: series.title, description: series.description, path: `/en/blog/series/${id}` });
}

export default async function EnglishSeriesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const series = ENGLISH_BLOG_SERIES[id];
  const posts = await getPostsBySeries(id, "en");
  if (!series || !posts.length) notFound();
  return <main className={styles.page}>
    <FiberPageHeader eyebrow={series.subtitle} lead={series.title} accent="" variant="insights" title={series.title} description={series.description} note={<span>{posts.length} articles</span>} />
    <section className={styles.section}><div className="mx-auto max-w-7xl">
      <Link className="mb-8 inline-block underline underline-offset-4" href="/en/blog">← All series and articles</Link>
      <EnglishArticleList posts={posts.map(post => ({ slug: post.slug, title: String(post.frontMatter.title), excerpt: String(post.frontMatter.excerpt), date: String(post.frontMatter.date) }))} />
    </div></section>
  </main>;
}
