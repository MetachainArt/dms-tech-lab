"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  {
    title: "업무 자동화 실험실",
    summary: "메일, 보고서, 문서 작성처럼 반복되는 업무를 자동화한 사례들입니다.",
    tags: ["자동화", "실무", "생산성"],
    image: "/images/business.png",
  },
  {
    title: "PromptBlocks",
    summary: "프롬프트를 13개 구조 블록으로 분해하고 다시 조립해, 팀 단위로 재현 가능한 결과를 만드는 프롬프트 워크스페이스입니다.",
    tags: ["프롬프트", "블록", "워크스페이스"],
    image: "/images/prompt.png",
    link: "https://promptblocks.dmssolution.co.kr/",
  },
  {
    title: "3D 제품 설계 및 구조 검토",
    summary: "20개 이상의 하드웨어 제품 개발과 상용화 경험을 바탕으로 아이디어를 실제 검토 가능한 구조와 시각화 자료로 바꿉니다.",
    tags: ["3D", "설계", "제조"],
    image: "/images/3D.png",
  },
  {
    title: "실무형 AI 교육 프로그램 설계",
    summary: "처음 배우는 사람도 바로 써볼 수 있도록 실습 중심 커리큘럼과 예제를 설계했습니다.",
    tags: ["교육", "AI", "워크숍"],
    image: "/images/AIauto.png",
  },
  {
    title: "꿈꾸는 카메라 프로젝트",
    summary: "사진, AI, 글, 음악을 연결해 기술을 쉽게 풀어내는 AI 교육 프로그램 기획·개발 사례입니다.",
    tags: ["사진", "AI", "콘텐츠"],
    image: "/images/dream.png",
    link: "https://storylens.dmssolution.co.kr/",
  },
  {
    title: "AI 실무 채널 운영",
    summary: "기술을 어렵지 않게 전달하기 위해 글, 이미지, 영상, 유튜브 채널 운영을 함께 설계합니다.",
    tags: ["유튜브", "교육", "전달력"],
    image: "/images/youtube.png",
    link: "https://www.youtube.com/@Reedodev",
  },
];

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
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => {
            const MotionComponent = work.link ? motion.a : motion.article;
            const linkProps = work.link ? { href: work.link, target: "_blank", rel: "noopener noreferrer" } : {};

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
