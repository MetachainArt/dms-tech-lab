import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MDXPost } from "@/lib/mdx";

interface WritingProps {
  posts: MDXPost[];
}

export default function Writing({ posts }: WritingProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-paperfolio-line bg-paperfolio-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">리도 인사이트</p>
            <h2 className="paperfolio-h1">작업하면서 남긴 기록들</h2>
            <p className="paperfolio-body max-w-2xl">
              자동화, 도구, 감각, 운영 방식에 대해 실무에서 부딪히며 정리한 생각들입니다.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text hover:text-paperfolio-accent-coral">
            글 더 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-[28px] border border-paperfolio-line bg-white px-6 py-6 hover:-translate-y-0.5 hover:border-paperfolio-accent-blue/40 hover:shadow-[0_20px_60px_rgba(31,41,55,0.08)] md:flex-row md:items-center md:justify-between"
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-paperfolio-accent-coral">{String(post.frontMatter.date)}</p>
                <h3 className="text-xl font-semibold tracking-tight text-paperfolio-text group-hover:text-paperfolio-accent-blue">
                  {String(post.frontMatter.title)}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-paperfolio-text-muted">
                  {String(post.frontMatter.excerpt)}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text md:shrink-0">
                읽어보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
