import Link from "next/link";
import { notFound } from "next/navigation";
import SeriesHeader from "@/components/blog/SeriesHeader";
import SeriesPostList from "@/components/blog/SeriesPostList";
import { BLOG_SERIES } from "@/lib/blog-data";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { getPostsBySeries } from "@/lib/mdx";

export async function generateStaticParams() {
  return Object.keys(BLOG_SERIES).map((id) => ({ id }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const series = BLOG_SERIES[params.id];

  if (!series) {
    return;
  }

  return generateSeoMetadata({
    title: `${series.title} 시리즈`,
    description: series.description,
    path: `/blog/series/${series.id}`,
    image: series.coverImage,
  });
}

export default async function SeriesDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const series = BLOG_SERIES[id];

  if (!series) {
    notFound();
  }

  const posts = await getPostsBySeries(id);

  const formattedPosts = posts.map((post) => ({
    slug: post.slug,
    chapter: typeof post.frontMatter.chapter === "string" ? post.frontMatter.chapter : undefined,
    title: String(post.frontMatter.title),
    excerpt: String(post.frontMatter.excerpt),
    date: String(post.frontMatter.date),
    readTime: typeof post.frontMatter.readTime === "string" ? post.frontMatter.readTime : "5 min",
  }));

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pt-36">
        <div className="mx-auto max-w-7xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue">
            글 목록으로 돌아가기
          </Link>
        </div>
      </section>

      <SeriesHeader series={series} postCount={posts.length} />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-5xl">
          <SeriesPostList posts={formattedPosts} color={series.color} />
        </div>
      </section>
    </main>
  );
}
