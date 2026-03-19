"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden px-6 pb-18 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,167,95,0.24),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(47,93,124,0.18),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paperfolio-accent-blue/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex rounded-full border border-paperfolio-line bg-white/80 px-4 py-2 text-xl font-nanum-pen text-paperfolio-text-muted shadow-sm backdrop-blur">
            실무형 메이커이자 교육자, 그리고 문제 해결자
          </div>

          <div className="space-y-6">
            <h1 className="paperfolio-display max-w-4xl text-paperfolio-text">
              복잡한 일은 줄이고,
              <br />
              필요한 건 직접 만듭니다.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted md:text-xl">
              AI 자동화, 3D 설계, 실무형 교육까지. 리도가 직접 만들고, 설명하고, 함께 해결합니다.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row flex-wrap">
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
                <p className="font-playfair text-4xl leading-tight text-paperfolio-text">
                  기술은 어렵게 말하지 않겠습니다.
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
