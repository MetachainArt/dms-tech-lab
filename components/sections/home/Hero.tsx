"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden px-6 pb-24 pt-36">
      {/* Background image 30% opacity */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/images/a14.webp')" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,167,95,0.24),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(47,93,124,0.18),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paperfolio-accent-blue/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-paperfolio-accent-blue/30 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-paperfolio-accent-blue shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paperfolio-accent-blue opacity-40"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-paperfolio-accent-blue"></span>
            </span>
            AI & Automation Consulting
          </div>

          <div className="space-y-6">
            <h1 className="font-playfair text-[3rem] leading-[1.1] tracking-[-0.02em] text-paperfolio-text md:text-[5rem] md:leading-[1.06]">
              Reduce<br />
              <span className="italic text-paperfolio-accent-blue">the noise.</span><br />
              Build what<br />
              <span className="italic">truly matters.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-500 font-medium md:text-xl">
              AI 자동화, 3D 설계, 실무형 교육까지. <br className="hidden sm:block" />
              현장에 맞춰 최적화된 시스템을 설계하고, 직접 사용할 수 있도록 가르칩니다.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row flex-wrap">
            <Link
              href="/survey"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#f3e5ab_0%,#fff7dd_34%,#ead9c4_100%)] px-7 py-4 text-sm font-bold text-paperfolio-text shadow-[0_8px_20px_rgba(210,167,95,0.2)] hover:-translate-y-0.5"
            >
              사전 질의응답 작성
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-paperfolio-text px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(31,41,55,0.16)] hover:-translate-y-0.5 hover:bg-paperfolio-accent-blue"
            >
              작업 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paperfolio-line bg-white/80 px-7 py-4 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-coral/40 hover:text-paperfolio-accent-coral"
            >
              편하게 문의하기
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-[36px] border border-paperfolio-line bg-paperfolio-surface p-8 shadow-[0_24px_80px_rgba(31,41,55,0.10)]">
            <div className="mb-8 rounded-[28px] bg-[linear-gradient(135deg,#f3e5ab_0%,#fff7dd_34%,#ead9c4_100%)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">Reedo</p>
              <div className="mt-8 space-y-4">
                <p className="font-playfair text-[2rem] leading-[1.25] tracking-[-0.01em] text-paperfolio-text">
                  Technology,<br />
                  <span className="italic">explained simply.</span>
                </p>
                <p className="text-base leading-7 text-paperfolio-text-muted">
                  현장에서 바로 써볼 수 있는 결과가 남도록 설계하고 자동화하고 가르칩니다.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-paperfolio-line bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">Focus</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">업무 자동화와 설계, 교육의 연결</p>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">Approach</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">현장 기준으로 단순하고 오래 가게</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
