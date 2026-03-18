"use client";

import { motion } from "framer-motion";
import { Bot, Cuboid, GraduationCap, PenSquare } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "업무 자동화",
    description: "반복되는 정리, 문서, 보고, 콘텐츠 제작 같은 일을 AI와 자동화로 더 간단하게 만듭니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    icon: Cuboid,
    title: "3D 설계와 시각화",
    description: "생각 속 아이디어를 실제로 검토할 수 있는 형태로 바꾸고, 제품 설계와 구조 검토, FTTx 기반 하드웨어 개발 경험까지 함께 연결합니다.",
    accent: "text-paperfolio-accent-coral",
    bg: "bg-paperfolio-accent-coral/10",
  },
  {
    icon: GraduationCap,
    title: "AI 실무 교육",
    description: "처음 배우는 사람도 바로 써볼 수 있게 쉽고 실용적인 방식으로 AI를 설명하고 교육합니다.",
    accent: "text-paperfolio-accent-yellow",
    bg: "bg-paperfolio-accent-yellow/15",
  },
  {
    icon: PenSquare,
    title: "기술 기반 콘텐츠 기획",
    description: "사진, 글, 영상, AI를 연결해 브랜드와 사람의 이야기를 전달하는 콘텐츠를 만듭니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
];

export default function WhatIDo() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">하는 일</p>
          <h2 className="paperfolio-h1">기술을 결과로 연결하는 네 가지 방식</h2>
          <p className="paperfolio-body max-w-2xl">
            전문용어보다 사용자가 얻게 되는 변화를 먼저 설명합니다. 결국 중요한 건 보기 좋은 기술이 아니라 실제로 편해지는 일입니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[28px] border border-paperfolio-line bg-white p-7 shadow-[0_16px_60px_rgba(31,41,55,0.05)]"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg}`}>
                  <Icon className={`h-7 w-7 ${service.accent}`} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
