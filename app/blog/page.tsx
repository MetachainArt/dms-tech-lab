import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import Link from "next/link";
import SeriesList from "@/components/blog/SeriesList";
import { BLOG_SERIES } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { getSeriesCountMap } from "@/lib/series-content";

export const metadata = generateSeoMetadata({
  title: "리도 인사이트",
  description: "자동화, 설계, 교육, 작업 감각에 대해 리도가 남기는 기록과 연재 시리즈를 모았습니다.",
  path: "/blog",
});

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const seriesCountMap = await getSeriesCountMap();

  const seriesWithCount = Object.values(BLOG_SERIES)
    .filter((series) => !series.hidden)
    .map((series) => ({
      ...series,
      coverImage: allPosts.find((post) => post.frontMatter.series === series.id && post.frontMatter.coverImage)?.frontMatter.coverImage || series.coverImage,
      postCount: seriesCountMap[series.id] || 0,
    }))
    .filter((series) => series.postCount > 0);

  const latestPosts = allPosts.slice(0, 3);

  return (
    <main className={styles.page}>
      <FiberPageHeader
        eyebrow="Insights / Reedo Insights" lead="Ideas in" accent="transmission." variant="insights"
        title="글"
        description="자동화, 설계, 교육, 감각, 운영 방식에 대해 현장에서 부딪히며 정리한 기록들입니다. 답을 과하게 포장하기보다, 다시 꺼내 쓸 수 있는 문장으로 남기려고 합니다."
        note={<><span>{allPosts.length} posts · {seriesWithCount.length} series · 2024 — 2026</span><span>Notes from the work</span></>}
      />

      <section className={styles.section}>
        <div className="mx-auto max-w-7xl">
          <div className={styles.articleList}>
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.article}
              >
                <p className="text-sm font-semibold text-paperfolio-accent-coral">{String(post.frontMatter.date)}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-paperfolio-text group-hover:text-paperfolio-accent-blue">
                  {String(post.frontMatter.title)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{String(post.frontMatter.excerpt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.editorial}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">연재</p>
              <h2 className="paperfolio-h1">주제별로 천천히 읽는 시리즈</h2>
              <p className="paperfolio-body max-w-2xl">
                한 번 읽고 지나가는 글보다, 주제 안에서 생각을 쌓아갈 수 있는 흐름을 만들고 싶었습니다.
              </p>
            </div>
          </div>

          <SeriesList series={seriesWithCount} />
        </div>
      </section>
    </main>
  );
}
