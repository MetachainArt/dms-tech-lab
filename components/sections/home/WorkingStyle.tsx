"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "어렵게 설명하지 않습니다",
    description: "기술을 기술답게 말하기보다, 지금 어떤 문제가 줄어드는지부터 분명하게 이야기합니다.",
  },
  {
    title: "바로 써볼 수 있는 결과를 만듭니다",
    description: "보기 좋은 데모보다 실제 업무에서 다시 쓸 수 있는 구조와 문서를 함께 남깁니다.",
  },
  {
    title: "현장 기준으로 생각합니다",
    description: "설계든 자동화든 교육이든 결국 사람 손에 익고 현장에서 써야 의미가 있다고 믿습니다.",
  },
  {
    title: "기술보다 사람이 먼저입니다",
    description: "좋은 결과는 똑똑한 도구보다 맥락을 이해하는 대화에서 시작된다고 생각합니다.",
  },
];

export default function WorkingStyle() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <p className="font-nanum-pen text-2xl text-paperfolio-accent-blue">일하는 방식</p>
          <h2 className="paperfolio-h1">이런 방식으로 일합니다</h2>
          <p className="paperfolio-body max-w-xl">
            멋있어 보이는 기술보다 실제로 도움이 되는 결과를 더 중요하게 생각합니다. 그래서 제 작업은 늘 설명 가능하고, 바로 시도 가능하고, 다음 단계가 보이도록 정리합니다.
          </p>
          <div className="rounded-[32px] border border-paperfolio-line bg-white px-7 py-8 shadow-[0_20px_60px_rgba(31,41,55,0.05)]">
            <p className="font-nanum-pen text-4xl leading-tight text-paperfolio-text">
              “기술은 멋있어 보이기보다,
              <br />
              실제로 도움이 되어야 합니다.”
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
