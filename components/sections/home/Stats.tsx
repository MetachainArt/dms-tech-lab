"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "설계·개발 경험", value: "20년 가까이" },
  { label: "글로벌 현장 지원", value: "9개국" },
  { label: "핵심 특허", value: "17건" },
  { label: "문제 해결", value: "실무 중심" },
];

export default function Stats() {
  return (
    <div className="px-6 py-6">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-paperfolio-text px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,41,55,0.18)] md:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6"
            >
              <p className="font-playfair text-3xl leading-none text-paperfolio-accent-yellow md:text-4xl">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/72">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
