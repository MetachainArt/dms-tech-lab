"use client";

import { motion } from "framer-motion";
import { Bot, Cuboid, GraduationCap, Headset, Network, PenSquare, Ship } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AX 전환 전문",
    description: "도구를 붙이는 자동화가 아니라, 조직의 업무 흐름 전체를 AI 기준으로 다시 설계합니다. 무엇을 넘기고 무엇을 사람이 쥘지부터 함께 정리합니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    icon: Network,
    title: "광통신 트레이닝",
    description: "FTTx 망 구조부터 광 파워 버짓, OTDR 장애 추적까지. 9개국 현장에서 엔지니어를 교육해온 경험으로 실무 기준을 가르칩니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    icon: Ship,
    title: "글로벌 무역 에이전시",
    description: "중동·동남아·유럽 시장에서 광통신 장비 수출입을 20년간 수행했습니다. 소싱과 사양 검토, 통관·물류를 포함한 수출입 실무, 담당자 실무 교육까지 일괄 수행합니다.",
    accent: "text-paperfolio-accent-coral",
    bg: "bg-paperfolio-accent-coral/10",
  },
  {
    icon: Headset,
    title: "기술지원",
    description: "장비 도입과 운영 과정에서 생기는 문제를 현장 조건에 맞춰 진단하고 해결합니다. 원격과 현장 지원 모두 가능합니다.",
    accent: "text-paperfolio-accent-coral",
    bg: "bg-paperfolio-accent-coral/10",
  },
  {
    icon: GraduationCap,
    title: "자동화 및 기술교육",
    description: "반복되는 정리, 문서, 보고를 자동화하고, 처음 배우는 사람도 바로 써볼 수 있게 쉽고 실용적인 방식으로 가르칩니다.",
    accent: "text-paperfolio-accent-yellow",
    bg: "bg-paperfolio-accent-yellow/15",
  },
  {
    icon: Cuboid,
    title: "3D 설계 · 모델링",
    description: "아이디어를 실제로 검토할 수 있는 형태로 바꿉니다. 제품 3D 모델링과 구조 검토, FTTx 기반 하드웨어 개발 경험까지 연결합니다.",
    accent: "text-paperfolio-accent-blue",
    bg: "bg-paperfolio-accent-blue/10",
  },
  {
    icon: PenSquare,
    title: "콘텐츠 제작",
    description: "사진, 글, 영상, AI를 연결해 브랜드와 사람의 이야기를 전달하는 콘텐츠를 만듭니다.",
    accent: "text-paperfolio-accent-yellow",
    bg: "bg-paperfolio-accent-yellow/15",
  },
];

export default function WhatIDo() {
  return (
    <div className="relative px-6 py-24 pb-28">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0" style={{ backgroundImage: "url('/images/a16.webp')" }} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Services</p>
          <h2 className="paperfolio-h1 pixel-display">The work that turns<br />technology into<br /><span className="text-paperfolio-accent-blue">real outcomes.</span></h2>
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
