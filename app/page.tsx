import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Services from "@/components/sections/Services";
import Apps from "@/components/sections/Apps";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden select-none">
      <Hero />
      <Company />
      <Services />
      <Apps />
      <Contact />
      <Footer />
    </main>
  );
}
