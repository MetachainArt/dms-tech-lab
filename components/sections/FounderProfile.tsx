"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ScrollText } from "lucide-react";

export default function FounderProfile() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-[#050B1B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/about/founder-new.png"
                alt="Founder working on hardware design"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <p className="text-neon-sky text-sm font-semibold tracking-wider uppercase mb-1">Founder & CEO</p>
                    <h3 className="text-2xl font-bold">Reedo</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Since</p>
                    <p className="text-xl font-bold font-mono">2004</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-sky/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-neon-sky font-semibold tracking-widest text-sm uppercase mb-4 block">Founder Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                20년의 현장, 30개국의 경험,<br />
                <span className="text-gray-400">그리고 다음 10년</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                20년 이상 3D 설계와 하드웨어 디자인을 기반으로 기술과 현장을 연결하는 엔지니어로 활동해왔습니다.
                컴퓨터공학 전공을 바탕으로 정보통신공학까지 아우르며, 제품 설계, 시스템 이해, 양산 및 현장 적용까지 전 과정을 고려한 설계를 강점으로 삼고 있습니다.
              </p>
              <p>
                전 세계 30여 개국에서의 데모 및 교육 경험을 통해 &apos;설계는 도면이 아니라 현장에서 완성된다&apos;는 철학을 체득했고, 이러한 경험을 바탕으로 현재까지 10건 이상의 특허를 보유하고 있습니다.
              </p>
              <p>
                <strong className="text-white">기술적 완성도와 더불어</strong><br />
                20년간 이어온 사진 작업, 10년간의 봉사 활동을 통해 사람 중심의 기술, 지속 가능한 가치를 추구하고 있습니다.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-sky/50 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <Award className="w-6 h-6 text-neon-sky group-hover:scale-110 transition-transform" />
                        <span className="text-gray-400 text-sm">특허 보유</span>
                    </div>
                    <div className="text-4xl font-bold text-white font-mono">17<span className="text-lg text-gray-500 ml-1">건</span></div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <ScrollText className="w-6 h-6 text-neon-purple group-hover:scale-110 transition-transform" />
                        <span className="text-gray-400 text-sm">디자인 등록</span>
                    </div>
                    <div className="text-4xl font-bold text-white font-mono">11<span className="text-lg text-gray-500 ml-1">건</span></div>
                </div>
            </div>

            <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-white font-medium border-b border-neon-sky pb-1 hover:text-neon-sky transition-colors">
                    리도 이야기 더보기 <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
