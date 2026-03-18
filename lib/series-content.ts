import { BLOG_SERIES } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/mdx";
import { getAllWorks } from "@/lib/work-mdx";

export interface SeriesContentItem {
  slug: string;
  href: string;
  chapter?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

function compareSeriesItems(left: SeriesContentItem, right: SeriesContentItem) {
  if (left.chapter && right.chapter) {
    return left.chapter.localeCompare(right.chapter, undefined, { numeric: true });
  }

  return left.date > right.date ? -1 : 1;
}

export async function getSeriesContentItems(seriesId: string): Promise<SeriesContentItem[]> {
  const [posts, works] = await Promise.all([getAllPosts(), getAllWorks()]);

  const blogItems: SeriesContentItem[] = posts
    .filter((post) => post.frontMatter.series === seriesId)
    .map((post) => ({
      slug: post.slug,
      href: `/blog/${post.slug}`,
      chapter: typeof post.frontMatter.chapter === "string" ? post.frontMatter.chapter : undefined,
      title: String(post.frontMatter.title),
      excerpt: String(post.frontMatter.excerpt),
      date: String(post.frontMatter.date),
      readTime: typeof post.frontMatter.readTime === "string" ? post.frontMatter.readTime : "5 min",
    }));

  const workItems: SeriesContentItem[] = works
    .filter((work) => work.frontMatter.series === seriesId)
    .map((work) => ({
      slug: work.slug,
      href: `/works/${work.slug}`,
      chapter: typeof work.frontMatter.chapter === "string" ? work.frontMatter.chapter : undefined,
      title: String(work.frontMatter.title),
      excerpt: String(work.frontMatter.excerpt),
      date: String(work.frontMatter.date),
      readTime: typeof work.frontMatter.readTime === "string" ? work.frontMatter.readTime : "5 min",
    }));

  return [...blogItems, ...workItems].sort(compareSeriesItems);
}

export async function getSeriesIdsWithContent(): Promise<string[]> {
  const [posts, works] = await Promise.all([getAllPosts(), getAllWorks()]);

  return Array.from(
    new Set(
      [...posts, ...works]
        .map((item) => item.frontMatter.series)
        .filter((seriesId): seriesId is string => typeof seriesId === "string" && seriesId in BLOG_SERIES)
    )
  ).sort((left, right) => left.localeCompare(right));
}

export async function getSeriesCountMap(): Promise<Record<string, number>> {
  const seriesIds = await getSeriesIdsWithContent();
  const items = await Promise.all(seriesIds.map(async (seriesId) => [seriesId, await getSeriesContentItems(seriesId)] as const));

  return items.reduce<Record<string, number>>((acc, [seriesId, seriesItems]) => {
    acc[seriesId] = seriesItems.length;
    return acc;
  }, {});
}
