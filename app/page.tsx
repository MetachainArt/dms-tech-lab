import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Apps from "@/components/sections/Apps";
import Proof from "@/components/sections/Proof";
import Contact from "@/components/sections/Contact";
import Scene from "@/components/3d/Scene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden select-none">
      <Scene />
      <Hero />
      <Services />
      <Apps />
      <Proof />
      <Contact />
    </main>
  );
}
