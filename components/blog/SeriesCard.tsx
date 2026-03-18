"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SeriesCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  color: string;
  postCount: number;
  tags: string[];
}

const colorVariants: Record<string, { badge: string; line: string; glow: string }> = {
  purple: { badge: "bg-[#ede7fb] text-[#6d4bc3]", line: "bg-[#6d4bc3]", glow: "shadow-[0_18px_55px_rgba(109,75,195,0.12)]" },
  rose: { badge: "bg-[#fde8ee] text-[#b25072]", line: "bg-[#b25072]", glow: "shadow-[0_18px_55px_rgba(178,80,114,0.12)]" },
  teal: { badge: "bg-[#e0f4f2] text-[#266b63]", line: "bg-[#266b63]", glow: "shadow-[0_18px_55px_rgba(38,107,99,0.12)]" },
  blue: { badge: "bg-[#e2ecf3] text-[#2f5d7c]", line: "bg-[#2f5d7c]", glow: "shadow-[0_18px_55px_rgba(47,93,124,0.12)]" },
  emerald: { badge: "bg-[#e4f3ea] text-[#2f7d59]", line: "bg-[#2f7d59]", glow: "shadow-[0_18px_55px_rgba(47,125,89,0.12)]" },
  pink: { badge: "bg-[#f9e6ef] text-[#b45f84]", line: "bg-[#b45f84]", glow: "shadow-[0_18px_55px_rgba(180,95,132,0.12)]" },
  orange: { badge: "bg-[#f7eadc] text-[#b16b2c]", line: "bg-[#b16b2c]", glow: "shadow-[0_18px_55px_rgba(177,107,44,0.12)]" },
  yellow: { badge: "bg-[#f8f0dc] text-[#9a7a26]", line: "bg-[#9a7a26]", glow: "shadow-[0_18px_55px_rgba(154,122,38,0.12)]" },
};

export default function SeriesCard({
  id,
  title,
  subtitle,
  description,
  coverImage,
  color,
  postCount,
  tags,
}: SeriesCardProps) {
  const variant = colorVariants[color] || colorVariants.blue;

  return (
    <Link href={`/blog/series/${id}`} className={`group block rounded-[30px] border border-paperfolio-line bg-white p-5 ${variant.glow} hover:-translate-y-1`}>
      <div className="relative overflow-hidden rounded-[24px] border border-paperfolio-line bg-paperfolio-surface">
        <div className="relative aspect-[4/5]">
          <Image src={coverImage} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-paperfolio-text/75 via-paperfolio-text/12 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{subtitle}</p>
            <h3 className="mt-3 font-playfair text-3xl leading-tight">{title}</h3>
          </div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${variant.badge}`}>
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm leading-7 text-paperfolio-text-muted">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-paperfolio-text-muted">
            <span className={`h-2.5 w-2.5 rounded-full ${variant.line}`} />
            {postCount}개의 글
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text group-hover:text-paperfolio-accent-blue">
            시리즈 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
