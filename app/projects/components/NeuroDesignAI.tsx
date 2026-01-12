'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function NeuroDesignAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a3f] to-[#0a0a1f]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Project Image */}
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-[#0f0f23] to-[#1a1a3f] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/projects/neuro-design-ai.jpg"
              alt="Neuro Design AI"
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
                Neuro Design AI
              </h3>
              <div className="flex gap-2">
                <span className="text-emerald-400 text-sm">2025.01 – 2025.04</span>
              </div>
            </div>

            {/* Client Type */}
            <div className="glass-panel p-6 rounded-xl">
              <span className="text-gray-400 text-sm mb-2 block">고객</span>
              <p className="text-xl text-white font-semibold">국내 중견 소비재 브랜드</p>
            </div>

            {/* Goal */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">프로젝트 목표</h4>
              <p className="text-gray-300 leading-relaxed">
                AI를 활용하여 브랜드와 제품 디자인을 빠르게 생성하고 검증할 수 있는 디자인 시스템 구축
              </p>
            </div>

            {/* DMS Role */}
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">DMS Solution 역할</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>AI 기반 이미지 생성 파이프라인 구축</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>3D 제품 모델 연동</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>웹 기반 디자인 검토 인터페이스 개발</span>
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">성과 및 영향</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>디자인 제작 시간 70% 단축</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>신제품 출시 기간 3개월 → 3주</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Generative AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">Image AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">3D</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Web Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
