import HomeContact from "@/components/sections/home/Contact";
import Hero from "@/components/sections/home/Hero";
import Intro from "@/components/sections/home/Intro";
import SelectedWorks from "@/components/sections/home/SelectedWorks";
import Stats from "@/components/sections/home/Stats";
import WhatIDo from "@/components/sections/home/WhatIDo";
import WorkingStyle from "@/components/sections/home/WorkingStyle";
import Writing from "@/components/sections/home/Writing";
import { getAllPosts } from "@/lib/mdx";
import { Nanum_Pen_Script } from "next/font/google";

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nanum-pen",
  display: "swap",
});

export default async function Home() {
  const latestPosts = (await getAllPosts()).slice(0, 3);

  return (
    <main className={`min-h-screen overflow-x-hidden bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text ${nanumPen.variable}`}>
      <section id="hero" className="scroll-mt-32" aria-label="첫 화면">
        <Hero />
      </section>
      <section id="intro" className="scroll-mt-32" aria-label="리도 소개">
        <Intro />
      </section>
      <section id="stats" className="scroll-mt-32" aria-label="숫자로 보는 이력">
        <Stats />
      </section>
      <section id="what-i-do" className="scroll-mt-32" aria-label="하는 일">
        <WhatIDo />
      </section>
      <section id="selected-works" className="scroll-mt-32" aria-label="대표 작업">
        <SelectedWorks />
      </section>
      <section id="working-style" className="scroll-mt-32" aria-label="일하는 방식">
        <WorkingStyle />
      </section>
      <section id="writing" className="scroll-mt-32" aria-label="글과 기록">
        <Writing posts={latestPosts} />
      </section>
      <section id="contact" className="scroll-mt-32" aria-label="문의">
        <HomeContact />
      </section>
    </main>
  );
}
