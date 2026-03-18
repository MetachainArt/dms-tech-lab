"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ANALYTICS_EVENTS } from "@/lib/analytics-events";

const testimonials = [
  {
    name: "김도현",
    role: "스타트업 대표",
    company: "테크노바",
    industry: "스타트업",
    content: "N8N 기반 워크플로우 자동화를 도입한 뒤, 매일 3시간 이상 소요되던 반복 업무가 완전 자동으로 처리되고 있습니다. ROI가 정말 놀라울 정도입니다.",
    impact: "반복업무 3h/일 절감",
    rating: 5,
  },
  {
    name: "이수진",
    role: "마케팅 팀장",
    company: "글로벌커머스",
    industry: "이커머스",
    content: "AI 프롬프트 라이브러리 덕분에 콘텐츠 제작 시간이 70% 단축됐습니다. 팀원들도 빠르게 적응했고, 품질도 크게 향상됐어요.",
    impact: "콘텐츠 제작시간 70% 단축",
    rating: 5,
  },
  {
    name: "박정우",
    role: "제품 디자이너",
    company: "모션랩",
    industry: "제조/디자인",
    content: "3D 제품 시각화 프로젝트에서 리도의 기술력에 깊은 인상을 받았습니다. 현장 경험에서 나오는 디테일이 결과물의 차이를 만듭니다.",
    impact: "제품 시안 승인속도 2배",
    rating: 5,
  },
  {
    name: "최은영",
    role: "교육 담당",
    company: "에듀테크 코리아",
    industry: "교육",
    content: "GenAI 워크샵 진행이 매우 실용적이었습니다. 이론보다 실무 중심이라 교육 직후부터 바로 업무에 적용할 수 있었습니다.",
    impact: "교육 후 즉시 현업 적용",
    rating: 5,
  },
];

export default function Testimonials() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("전체");
  const industries = useMemo(() => ["전체", ...Array.from(new Set(testimonials.map((item) => item.industry)))], []);
  const visibleTestimonials = useMemo(() => {
    if (selectedIndustry === "전체") {
      return testimonials;
    }
    return testimonials.filter((item) => item.industry === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <section className="w-full py-24 px-6 bg-[#FDFCF8] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-stone-200/20 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-12 bg-stone-300" />
            <h3 className="text-stone-500 font-semibold tracking-widest text-sm uppercase">
              고객 이야기
            </h3>
            <span className="h-[1px] w-12 bg-stone-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            고객이 경험한 변화
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            실제 프로젝트에서 체감한 결과를 직접 들어보세요.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => {
                  setSelectedIndustry(industry);
                  trackEvent(ANALYTICS_EVENTS.TESTIMONIAL_FILTER_SELECT, {
                    section: "testimonials",
                    industry,
                  });
                }}
                className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                  selectedIndustry === industry
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 text-stone-500 hover:border-stone-300"
                }`}
                suppressHydrationWarning
              >
                {industry}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-stone-200 group-hover:text-stone-300 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-stone-700 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="inline-flex px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-semibold mb-5">
                {testimonial.impact}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 font-bold text-lg border border-stone-200">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="text-stone-900 font-semibold">{testimonial.name}</p>
                  <p className="text-stone-500 text-sm">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
