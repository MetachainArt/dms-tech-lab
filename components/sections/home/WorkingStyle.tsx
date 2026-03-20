"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "No jargon, just clarity.",
    description: "기술을 기술답게 말하기보다, 지금 어떤 문제가 줄어드는지부터 분명하게 이야기합니다.",
  },
  {
    title: "Results you can use right away.",
    description: "보기 좋은 데모보다 실제 업무에서 다시 쓸 수 있는 구조와 문서를 함께 남깁니다.",
  },
  {
    title: "Field-first, always.",
    description: "설계든 자동화든 교육이든 결국 사람 손에 익고 현장에서 써야 의미가 있다고 믿습니다.",
  },
  {
    title: "People before technology.",
    description: "좋은 결과는 똑똑한 도구보다 맥락을 이해하는 대화에서 시작된다고 생각합니다.",
  },
];

export default function WorkingStyle() {
  return (
    <div className="relative px-6 py-24">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0" style={{ backgroundImage: "url('/images/a21.webp')" }} />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">How I Work</p>
          <h2 className="paperfolio-h1">This is how<br /><span className="italic">I work.</span></h2>
          <p className="paperfolio-body max-w-xl">
            멋있어 보이는 기술보다 실제로 도움이 되는 결과를 더 중요하게 생각합니다. 그래서 제 작업은 늘 설명 가능하고, 바로 시도 가능하고, 다음 단계가 보이도록 정리합니다.
          </p>
          <div className="rounded-[32px] border border-paperfolio-line bg-white px-7 py-8 shadow-[0_20px_60px_rgba(31,41,55,0.05)]">
            <p className="font-playfair italic text-2xl leading-snug text-paperfolio-text">
              Technology should help,<br />not merely impress.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface p-6"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">0{index + 1}</p>
              <h3 className="text-xl font-semibold tracking-tight text-paperfolio-text">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
