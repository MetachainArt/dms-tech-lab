'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CreativeAIStudio() {
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
            className="relative aspect-video bg-gradient-to-br from-[#db2777] to-[#1a1a3f] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/projects/Creative-Ai_studio.jpg"
              alt="Creative AI Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent" />
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
                Creative AI Studio
              </h3>
              <div className="flex gap-2">
                <span className="text-emerald-400 text-sm">2025.07 – 2025.12</span>
              </div>
            </div>

            {/* Client Type */}
            <div className="glass-panel p-6 rounded-xl">
              <span className="text-gray-400 text-sm mb-2 block">고객</span>
              <p className="text-xl text-white font-semibold">크리에이터 및 미디어 스타트업</p>
            </div>

            {/* Goal */}
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">프로젝트 목표</h4>
              <p className="text-gray-300 leading-relaxed">
                영상, 이미지, 음악 AI를 하나의 플랫폼에서 사용할 수 있는 창작 시스템 구축
              </p>
            </div>

            {/* DMS Role */}
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-3">DMS Solution 역할</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>이미지, 영상, 음악 AI 통합</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>프로젝트 기반 워크스페이스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>결과물 관리 시스템 개발</span>
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">성과 및 영향</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>콘텐츠 제작 시간 60% 단축</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>베타 사용자 1,000명 확보</span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-lg font-semibold text-pink-400 mb-3">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-pink-500/20 text-pink-400 border border-pink-500/30">Video AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">Image AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">Audio AI</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Web Platform</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
}
