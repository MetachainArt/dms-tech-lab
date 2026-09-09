import HomeContact from "@/components/sections/home/Contact";
import Hero from "@/components/sections/home/Hero";
import Intro from "@/components/sections/home/Intro";
import SelectedWorks from "@/components/sections/home/SelectedWorks";
import Stats from "@/components/sections/home/Stats";
import WhatIDo from "@/components/sections/home/WhatIDo";
import WorkingStyle from "@/components/sections/home/WorkingStyle";
import Writing from "@/components/sections/home/Writing";
import { getAllPosts } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import styles from "@/components/sections/home/Home.module.css";

export const metadata = generateSeoMetadata({
  title: "Engineering & AI Transformation",
  description: "DMS.Labs connects AI transformation, optical network training, hardware design and international trade to build practical systems your team can use.",
  path: "/en",
  locale: "en_US",
  keywords: ["DMS.Labs", "Reedo", "AI transformation", "optical network training", "FTTx", "workflow automation", "hardware design"],
});

export default async function EnglishHome() {
  const latestPosts = (await getAllPosts("en")).slice(0, 3);

  return (
    <main className={styles.home}>
      <section id="hero" className="scroll-mt-32" aria-label="Welcome"><Hero locale="en" /></section>
      <section id="intro" className="scroll-mt-32" aria-label="About Reedo"><Intro locale="en" /></section>
      <section id="stats" className="scroll-mt-32" aria-label="Experience in numbers"><Stats /></section>
      <section id="what-i-do" className="scroll-mt-32" aria-label="Services"><WhatIDo locale="en" /></section>
      <section id="selected-works" className="scroll-mt-32" aria-label="Selected work"><SelectedWorks locale="en" /></section>
      <section id="working-style" className="scroll-mt-32" aria-label="How I work"><WorkingStyle locale="en" /></section>
      <section id="writing" className="scroll-mt-32" aria-label="Latest writing"><Writing posts={latestPosts} locale="en" /></section>
      <section id="contact" className="scroll-mt-32" aria-label="Contact"><HomeContact locale="en" /></section>
    </main>
  );
}
