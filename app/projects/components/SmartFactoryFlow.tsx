'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SmartFactoryFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imagePrompt = "A realistic smart factory control room with large digital dashboards showing production flow, AI analytics, and robotic systems in background. Blue and purple ambient lighting, modern industrial AI environment.";

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a3f] to-[#0a0a1f]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Image Placeholder */}
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-[#1e40af] to-[#1a1a3f] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image Placeholder - Replace with NanoBanana generated image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-gray-400 text-sm">이미지 생성용 프롬프트:</p>
                <p className="text-gray-500 text-xs mt-2 line-clamp-2">{imagePrompt}</p>
              </div>
            </div>

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent" />
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
                Smart Factory Flow
              </h3>
              <div className="flex gap-2">
                <span className="text-emerald-400 text-sm">2025.03 – 2025.08</span>
              </div>
            </div>

            {/* Client Type */}
            <div className="glass-panel p-6 rounded-xl">
              <span className="text-gray-400 text-sm mb-2 block">고객</span>
              <p className="text-xl text-white font-semibold">국내 부품 제조 공장</p>
            </div>

            {/* Goal */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">프로젝트 목표</h4>
              <p className="text-gray-300 leading-relaxed">
                생산, 재고, 품질 데이터를 AI 기반 대시보드로 통합 관리
              </p>
            </div>

            {/* DMS Role */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">DMS Solution 역할</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>공정 데이터 수집 및 통합</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>AI 생산 예측 모델 구축</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>관리자용 웹 대시보드 개발</span>
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">성과 및 영향</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>생산 지연률 35% 감소</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>재고 과잉 25% 절감</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">Data</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Dashboard</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Automation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
    </section>
  );
}
