"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SHOWCASE_WORKS } from "@/lib/works-showcase";

export default function SelectedWorks() {
  return (
    <div className="bg-paperfolio-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="font-nanum-pen text-2xl text-paperfolio-accent-blue">대표 작업</p>
            <h2 className="paperfolio-h1">말보다 작업물이 먼저 설명하게 합니다</h2>
            <p className="paperfolio-body max-w-2xl">
              화려한 포장보다 문제를 어떻게 풀었는지가 남도록 정리했습니다. 지금 하고 있는 일과 닿는 사례부터 보셔도 좋습니다.
            </p>
          </div>
          <Link href="/works" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text hover:text-paperfolio-accent-coral">
            작업 더 보기
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SHOWCASE_WORKS.map((work, index) => {
            const isExternalLink = Boolean(work.link?.startsWith("http"));
            const MotionComponent = work.link ? motion.a : motion.article;
            const linkProps = work.link
              ? isExternalLink
                ? { href: work.link, target: "_blank", rel: "noopener noreferrer" }
                : { href: work.link }
              : {};

            return (
              <MotionComponent
                key={work.title}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_70px_rgba(31,41,55,0.05)] ${
                  work.link ? "block transition-shadow hover:shadow-[0_20px_80px_rgba(31,41,55,0.08)]" : ""
                }`}
              >
                <div className="mb-8 aspect-[4/3] rounded-[24px] bg-[linear-gradient(135deg,rgba(47,93,124,0.10),rgba(201,111,74,0.10),rgba(210,167,95,0.18))] relative overflow-hidden">
                  {work.image && (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{work.title}</h3>
                  <p className="text-sm leading-7 text-paperfolio-text-muted">{work.summary}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-paperfolio-line bg-paperfolio-bg px-3 py-1 text-xs font-semibold text-paperfolio-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
}
