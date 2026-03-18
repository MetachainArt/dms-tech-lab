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

  const seriesWithCount = Object.values(BLOG_SERIES).map((series) => ({
    ...series,
    postCount: seriesCountMap[series.id] || 0,
  })).filter((series) => series.postCount > 0);

  const latestPosts = allPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-16 pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">리도 인사이트</p>
              <h1 className="paperfolio-display max-w-4xl">작업하면서 남긴 글들</h1>
              <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
                자동화, 설계, 교육, 감각, 운영 방식에 대해 현장에서 부딪히며 정리한 기록들입니다. 답을 과하게 포장하기보다, 다시 꺼내 쓸 수 있는 문장으로 남기려고 합니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">인사이트 시리즈</p>
                <p className="mt-3 font-playfair text-3xl text-paperfolio-text">{seriesWithCount.length}</p>
              </div>
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">전체 글</p>
                <p className="mt-3 font-playfair text-3xl text-paperfolio-text">{allPosts.length}</p>
              </div>
              <div className="rounded-[28px] border border-paperfolio-line bg-white px-6 py-5 shadow-[0_16px_50px_rgba(31,41,55,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">톤</p>
                <p className="mt-3 text-base font-semibold text-paperfolio-text">기록 + 통찰 + 실무 메모</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[30px] border border-paperfolio-line bg-paperfolio-surface px-6 py-6 shadow-[0_18px_60px_rgba(31,41,55,0.05)] hover:-translate-y-0.5 hover:border-paperfolio-accent-blue/35"
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

      <section className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-20">
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
