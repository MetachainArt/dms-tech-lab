import dynamic from "next/dynamic";

// 동적 import로 코드 스플리팅
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  loading: () => <div className="h-screen w-full bg-[#050B1B]" aria-label="로딩 중" />,
});

const Company = dynamic(() => import("@/components/sections/Company"), {
  loading: () => <div className="h-[50vh] w-full bg-white animate-pulse" aria-label="로딩 중" />,
});

const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Apps = dynamic(() => import("@/components/sections/Apps"), {
  loading: () => <div className="h-[50vh] w-full bg-[#050B1B] animate-pulse" aria-label="로딩 중" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="h-[50vh] w-full bg-white animate-pulse" aria-label="로딩 중" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden select-none">
      <section id="hero" aria-label="메인 히어로 섹션">
        <Hero />
      </section>
      <section id="about" aria-label="회사 소개 섹션">
        <Company />
      </section>
      <section id="services" aria-label="서비스 섹션">
        <Services />
      </section>
      <section id="projects" aria-label="프로젝트 섹션">
        <Apps />
      </section>
      <section id="contact" aria-label="연락처 섹션">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
