import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Hero는 초기 로딩 필수이므로 정적 import
// 나머지 섹션은 동적 import로 코드 스플리팅
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Apps = dynamic(() => import("@/components/sections/Apps"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const FounderProfile = dynamic(() => import("@/components/sections/FounderProfile"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-[50vh] w-full bg-white animate-pulse" aria-label="로딩 중" />,
});



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden select-none bg-[#050B1B]">
      <section id="hero" className="w-full" aria-label="메인 히어로 섹션">
        <Hero />
      </section>
      <section id="services" className="w-full" aria-label="서비스 섹션">
        <Services />
      </section>
      <section id="projects" className="w-full" aria-label="프로젝트 섹션">
        <Apps />
      </section>
      <section id="about" className="w-full" aria-label="리도 소개 섹션">
        <FounderProfile />
      </section>
      <section id="contact" className="w-full" aria-label="연락처 섹션">
        <Contact />
      </section>

    </main>
  );
}
