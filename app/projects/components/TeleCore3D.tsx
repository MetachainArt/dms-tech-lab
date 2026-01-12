'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TeleCore3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imagePrompt = "A photorealistic high-tech engineering lab with large holographic 3D CAD models of telecom hardware and fiber optic equipment. Engineers analyze structures using futuristic UI overlays, clean industrial lighting.";

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3f]" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Large Image Placeholder */}
          <motion.div
            className="relative aspect-video bg-gradient-to-br from-[#0f172a] to-[#1a1a3f] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image Placeholder - Replace with NanoBanana generated image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">📡</div>
                <p className="text-gray-400 text-sm">이미지 생성용 프롬프트:</p>
                <p className="text-gray-500 text-xs mt-2 line-clamp-2">{imagePrompt}</p>
              </div>
            </div>

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent" />
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
                TeleCore 3D
              </h3>
              <div className="flex gap-2">
                <span className="text-emerald-400 text-sm">2025.02 – 2025.06</span>
              </div>
            </div>

            {/* Client Type */}
            <div className="glass-panel p-6 rounded-xl">
              <span className="text-gray-400 text-sm mb-2 block">고객</span>
              <p className="text-xl text-white font-semibold">통신 장비 제조사</p>
            </div>

            {/* Goal */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">프로젝트 목표</h4>
              <p className="text-gray-300 leading-relaxed">
                통신용 하드웨어의 구조와 조립을 3D로 설계하고, 양산 전 문제를 사전에 검증
              </p>
            </div>

            {/* DMS Role */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">DMS Solution 역할</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>광통신 하드웨어 3D CAD 모델링</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>조립 및 구조 시뮬레이션</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>설계 변경 관리 시스템 구축</span>
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">성과 및 영향</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>금형 수정 비용 40% 절감</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>초기 불량률 60% 감소</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">3D CAD</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">Simulation</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">Engineering</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Web System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
}
