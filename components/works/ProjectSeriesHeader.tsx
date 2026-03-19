"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkProject } from "@/lib/works-projects-data";

interface ProjectSeriesHeaderProps {
  project: WorkProject;
  stepCount: number;
}

const colorVariants: Record<string, string> = {
  purple: "text-[#6d4bc3] bg-[#ede7fb]",
  rose: "text-[#b25072] bg-[#fde8ee]",
  teal: "text-[#266b63] bg-[#e0f4f2]",
  blue: "text-[#2f5d7c] bg-[#e2ecf3]",
  emerald: "text-[#2f7d59] bg-[#e4f3ea]",
  pink: "text-[#b45f84] bg-[#f9e6ef]",
  orange: "text-[#b16b2c] bg-[#f7eadc]",
  yellow: "text-[#9a7a26] bg-[#f8f0dc]",
};

export default function ProjectSeriesHeader({ project, stepCount }: ProjectSeriesHeaderProps) {
  const variant = colorVariants[project.color] || colorVariants.blue;

  return (
    <section className="px-6 pb-16 pt-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] border border-paperfolio-line bg-paperfolio-surface p-7 shadow-[0_22px_80px_rgba(31,41,55,0.06)] lg:grid-cols-[320px_minmax(0,1fr)] lg:p-10">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="relative overflow-hidden rounded-[28px] border border-paperfolio-line bg-white">
            <div className="relative aspect-[4/5]">
              <Image src={project.coverImage} alt={project.title} fill priority sizes="(max-width: 1024px) 100vw, 320px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-paperfolio-text/70 via-paperfolio-text/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{project.subtitle}</p>
                <h1 className="mt-3 font-playfair text-3xl leading-tight">{project.title}</h1>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-6 lg:self-center">
          <span className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${variant}`}>진행 프로젝트</span>
          <div className="space-y-4">
            <h1 className="paperfolio-display text-paperfolio-text">{project.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">{project.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">분류</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">교육 설계</p>
            </div>
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">단계</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">{stepCount}단계</p>
            </div>
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">상태</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-accent-blue">{project.status}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
