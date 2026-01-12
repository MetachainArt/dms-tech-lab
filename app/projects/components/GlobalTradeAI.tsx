'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function GlobalTradeAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3f]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Project Image */}
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-[#7c3aed] to-[#1a1a3f] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/projects/global-trade-ai.jpg"
              alt="Global Trade AI"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent" />
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Project Name */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Global Trade AI
              </h3>
              <div className="flex gap-2">
                <span className="text-emerald-400 text-sm">2025.05 – 2025.09</span>
              </div>
            </div>

            {/* Client Type */}
            <div className="glass-panel p-6 rounded-xl">
              <span className="text-gray-400 text-sm mb-2 block">고객</span>
              <p className="text-xl text-white font-semibold">글로벌 무역 회사</p>
            </div>

            {/* Goal */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">프로젝트 목표</h4>
              <p className="text-gray-300 leading-relaxed">
                적정, 계약, 일정, 공급처 관리를 AI로 자동화
              </p>
            </div>

            {/* DMS Role */}
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">DMS Solution 역할</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>문서 AI 분석 시스템 구축</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>공급처 비교 및 추천 엔진</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>커뮤니케이션 자동화 시스템</span>
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">성과 및 영향</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>적정 처리 속도 5배 향상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>발주 오류 70% 감소</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">NLP</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">Workflow Automation</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
}
