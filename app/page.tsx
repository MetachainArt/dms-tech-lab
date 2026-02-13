import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Hero는 초기 로딩 필수이므로 정적 import
// 나머지 섹션은 동적 import로 코드 스플리팅
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const GrowthTrustBar = dynamic(() => import("@/components/sections/GrowthTrustBar"), {
  loading: () => <div className="h-[20vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const ROICalculator = dynamic(() => import("@/components/sections/ROICalculator"), {
  loading: () => <div className="h-[55vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"), {
  loading: () => <div className="h-[55vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const StickyConsultCTA = dynamic(() => import("@/components/sections/StickyConsultCTA"));

const Apps = dynamic(() => import("@/components/sections/Apps"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="h-[40vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const FounderProfile = dynamic(() => import("@/components/sections/FounderProfile"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-[40vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Newsletter = dynamic(() => import("@/components/sections/Newsletter"), {
  loading: () => <div className="h-[30vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-[50vh] w-full bg-white animate-pulse" aria-label="로딩 중" />,
});



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden select-none bg-[#050B1B]">
      <StickyConsultCTA />
      <section id="hero" className="w-full" aria-label="메인 히어로 섹션">
        <Hero />
      </section>
      <section id="trust-metrics" className="w-full" aria-label="핵심 성과 지표">
        <GrowthTrustBar />
      </section>
      <section id="roi" className="w-full" aria-label="ROI 계산기">
        <ROICalculator />
      </section>
      <section id="services" className="w-full" aria-label="서비스 섹션">
        <Services />
      </section>
      <section id="projects" className="w-full" aria-label="프로젝트 섹션">
        <Apps />
      </section>
      <section id="case-studies" className="w-full" aria-label="성공 사례">
        <CaseStudies />
      </section>
      <section id="testimonials" className="w-full" aria-label="고객 후기 섹션">
        <Testimonials />
      </section>
      <section id="about" className="w-full" aria-label="리도 소개 섹션">
        <FounderProfile />
      </section>
      <section id="faq" className="w-full" aria-label="자주 묻는 질문">
        <FAQ />
      </section>
      <section id="newsletter" className="w-full" aria-label="뉴스레터 구독">
        <Newsletter />
      </section>
      <section id="contact" className="w-full" aria-label="연락처 섹션">
        <Contact />
      </section>

    </main>
  );
}
