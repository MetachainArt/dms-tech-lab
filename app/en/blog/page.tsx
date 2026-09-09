import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import SeriesList from "@/components/blog/SeriesList";
import EnglishArticleList from "@/components/blog/EnglishArticleList";
import { ENGLISH_BLOG_SERIES } from "@/lib/english-blog-series";
import { getAllPosts } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({ title: "Reedo Insights", description: "Essays and practical notes on AI, automation, design, creativity, and everyday life. Read the English editions of Reedo's journal.", path: "/en/blog" });

export default async function EnglishBlogPage() {
  const posts = await getAllPosts("en");
  const series = Object.values(ENGLISH_BLOG_SERIES).filter(item => !item.hidden).map(item => ({
    ...item,
    coverImage: posts.find(post => post.frontMatter.series === item.id)?.frontMatter.coverImage || item.coverImage,
    postCount: posts.filter(post => post.frontMatter.series === item.id).length,
  })).filter(item => item.postCount > 0);
  return <main className={styles.page}>
    <FiberPageHeader eyebrow="Insights / Reedo Insights" lead="Ideas in" accent="transmission." variant="insights" title="Writing" description="Notes from working with automation, design, education, creativity, and everyday systems. Ideas worth returning to and putting into practice." note={<><span>{posts.length} articles · {series.length} series</span><span>Notes from the work</span></>} />
    <section className={`${styles.section} ${styles.editorial}`} aria-labelledby="series-heading">
      <div className="mx-auto max-w-7xl"><h2 id="series-heading" className="paperfolio-h1 mb-10">Explore by series</h2><SeriesList series={series} locale="en" /></div>
    </section>
    <section className={styles.section} aria-labelledby="articles-heading">
      <div className="mx-auto max-w-7xl"><h2 id="articles-heading" className="paperfolio-h1 mb-10">All articles</h2><EnglishArticleList posts={posts.map(post => ({ slug: post.slug, title: String(post.frontMatter.title), excerpt: String(post.frontMatter.excerpt), date: String(post.frontMatter.date) }))} /></div>
    </section>
  </main>;
}
