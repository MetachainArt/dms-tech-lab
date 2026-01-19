"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI 기반 업무 자동화",
    subtitle: "REVOLUTIONIZE OPERATIONS",
    description: "복잡한 비즈니스 워크플로우를 자율적으로 처리하는 최첨단 AI 에이전트로 업무 효율을 극대화하세요. 고객 응대부터 백엔드 로직까지, 불가능을 자동화합니다.",
    points: ["자율 AI 에이전트", "워크플로우 최적화", "실시간 데이터 분석"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "3D 엔지니어링 & 디자인",
    subtitle: "IMMERSIVE EXPERIENCES",
    description: "디지털과 물리적 세계의 경계를 허무세요. 포토리얼리스틱 시각화와 인터랙티브 3D 제품 컨피규레이터로 고객 경험을 혁신합니다.",
    points: ["제품 시각화 (Visualization)", "인터랙티브 WebGL", "디지털 트윈"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "기술 교육 & 컨설팅",
    subtitle: "FUTURE READY TEAMS",
    description: "생성형 AI를 활용할 수 있는 기술력을 팀에 장착하세요. 실무 중심의 맞춤형 교육과 컨설팅으로 귀사의 인력을 AI 네이티브 전문가로 육성합니다.",
    points: ["GenAI 워크샵", "기술 컨설팅", "맞춤형 커리큘럼"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Company() {
  return (
    <section id="company" className="relative w-full py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto space-y-40">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
             >
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-12 bg-neon-sky" />
                    <h3 className="text-neon-sky font-poppins font-semibold tracking-widest text-sm uppercase">About DMS</h3>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-[#050B1B]">
                    데이터와 디자인의 교차점에서<br />
                    <span className="text-neon-sky">혁신을 설계하다.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    우리는 단순한 소프트웨어가 아닌, 미래를 건축합니다. 
                    고도화된 3D 시각화 기술과 지능형 AI 시스템을 결합하여
                    대체 불가능한 디지털 경험을 창조합니다.
                </p>
                <button className="text-[#050B1B] font-medium border-b border-neon-sky pb-1 hover:text-neon-sky transition-colors flex items-center gap-2">
                    DMS 소개 더보기 <ArrowRight className="w-4 h-4" />
                </button>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
             >
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                    alt="Innovation" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                 />
             </motion.div>
        </div>

        {/* Feature Blocks (Image Left / Text Right pattern) */}
        <div className="space-y-32">
            {features.map((feature, index) => (
                <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-xl"
                    >
                        <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start"
                    >
                        <span className="text-neon-sky font-mono text-xs tracking-widest mb-4 uppercase">{feature.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#050B1B] mb-6">{feature.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {feature.description}
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            {feature.points.map((point) => (
                                <li key={point} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-neon-sky" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <button className="px-8 py-3 rounded-full border border-gray-300 text-[#050B1B] hover:bg-[#050B1B] hover:text-white hover:border-[#050B1B] transition-all duration-300 font-medium">
                            솔루션 살펴보기
                        </button>
                    </motion.div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
