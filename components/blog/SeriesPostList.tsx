"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface PostItem {
  slug: string;
  chapter?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface SeriesPostListProps {
  posts: PostItem[];
  color: string;
}

const colorVariants: Record<string, { badge: string; line: string }> = {
  purple: { badge: "bg-[#ede7fb] text-[#6d4bc3]", line: "bg-[#6d4bc3]" },
  rose: { badge: "bg-[#fde8ee] text-[#b25072]", line: "bg-[#b25072]" },
  teal: { badge: "bg-[#e0f4f2] text-[#266b63]", line: "bg-[#266b63]" },
  blue: { badge: "bg-[#e2ecf3] text-[#2f5d7c]", line: "bg-[#2f5d7c]" },
  emerald: { badge: "bg-[#e4f3ea] text-[#2f7d59]", line: "bg-[#2f7d59]" },
  pink: { badge: "bg-[#f9e6ef] text-[#b45f84]", line: "bg-[#b45f84]" },
  orange: { badge: "bg-[#f7eadc] text-[#b16b2c]", line: "bg-[#b16b2c]" },
  yellow: { badge: "bg-[#f8f0dc] text-[#9a7a26]", line: "bg-[#9a7a26]" },
};

export default function SeriesPostList({ posts, color }: SeriesPostListProps) {
  const variant = colorVariants[color] || colorVariants.blue;

  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group block rounded-[30px] border border-paperfolio-line bg-white px-6 py-6 shadow-[0_16px_55px_rgba(31,41,55,0.05)] hover:-translate-y-0.5 hover:border-paperfolio-accent-blue/35"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              {post.chapter && (
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${variant.badge}`}>
                  글 {post.chapter}
                </span>
              )}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text group-hover:text-paperfolio-accent-blue">
                  {post.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-paperfolio-text-muted">{post.excerpt}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-wrap items-center gap-3 text-xs text-paperfolio-text-muted md:justify-end">
                <time dateTime={post.date}>{post.date}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text group-hover:text-paperfolio-accent-blue">
                읽어보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
