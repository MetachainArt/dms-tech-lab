import Link from "next/link";
import FiberPageHeader from "@/components/brand/FiberPageHeader";
import styles from "@/components/brand/FiberPages.module.css";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "About Reedo",
  description: "Meet Reedo, an optical network trainer and AI transformation practitioner connecting hardware design, automation, hands-on education and creative technology.",
  path: "/en/about",
  locale: "en_US",
  keywords: ["Reedo", "DMS.Labs", "optical network training", "AI transformation", "hardware design", "AI education"],
});

const strengths = [
  {
    title: "Design and development, together",
    description: "I take ideas into physical form, make them work, and refine them against the conditions people face in the field.",
  },
  {
    title: "Technology people can explain",
    description: "A good tool only lasts when the team understands it. I build clear explanations and reusable guidance alongside the work itself.",
  },
  {
    title: "Practical systems for small teams",
    description: "I help automate repetitive work so people can focus on decisions and quality, even when time and team capacity are limited.",
  },
];

const timeline = [
  {
    year: "2004–2014",
    title: "A foundation in mechanical design and hardware",
    description: "Working across 3D design, hardware design and optical infrastructure equipment taught me how products are built, evaluated and used.",
  },
  {
    year: "2015–2024",
    title: "Field support and optical network training in 9 countries",
    description: "I provided FTTx equipment support and engineer training in Vietnam, Thailand, New Zealand, France, Qatar, Lebanon, China, Indonesia and Oman, developing ways to make technical knowledge clear and usable.",
  },
  {
    year: "2024–present",
    title: "AI transformation, automation and practical education",
    description: "Today I redesign work around AI and connect automation with hands-on education, the Dreaming Camera project and YouTube content, making technology easier to put into practice.",
  },
];

const stats = [
  { value: "Nearly 20 years", label: "Design and development experience" },
  { value: "9 countries", label: "International field support" },
  { value: "17 patents", label: "Core patents" },
  { value: "FTTx", label: "Optical network training and infrastructure" },
];

const focusAreas = [
  "AI transformation consulting", "Optical network training / FTTx", "Optical equipment import and export agency",
  "Trade: Middle East, Southeast Asia and Europe", "3D design and modeling", "AI automation workflows",
  "Practical AI education", "Technology-based content creation",
];

export default function EnglishAboutPage() {
  return (
    <main className={`${styles.page} ${styles.editorial}`}>
      <FiberPageHeader
        eyebrow="About / Reedo" lead="Built on" accent="experience." variant="about"
        title="I help people put technology to work."
        description="I'm Reedo, an optical network trainer with nearly 20 years of experience in 3D design, hardware development, fiber infrastructure and technical education. Today, I also work in AI transformation (AX): redesigning how work gets done with AI, practical tools and clear guidance."
        note={<><span>Approach / Understand people before technology</span><span>Standard / Clear, useful and reusable work</span></>}
      >
        <p>I want DMS.Labs to be a workshop you can trust and work with.</p>
        <Link href="/en/works">Explore the work ↗</Link><Link href="/en/contact">Start a conversation ↗</Link>
      </FiberPageHeader>

      <section className="px-6 py-6" aria-label="Experience at a glance">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-paperfolio-text px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,41,55,0.18)] md:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6">
                <p className="font-playfair text-3xl text-paperfolio-accent-yellow">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paperfolio-surface px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-paperfolio-line bg-white px-8 py-10 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Background</p>
              <h2 className="paperfolio-h1">Shaped by nearly two decades of building and teaching</h2>
            </div>
            <div className="space-y-5">
              <p className="paperfolio-body">I believe a design is completed in the field. Making something and making it useful have always been part of the same job for me. That approach guided the development and commercialization of more than 20 hardware products, including optical infrastructure and fiber-to-the-x (FTTx) equipment.</p>
              <p className="paperfolio-body">Demonstrating technology and training engineers in 9 countries taught me that knowledge stays with a team when people can explain it in their own words. My work includes 17 patents and 11 registered designs. The Dreaming Camera project and my practical AI YouTube channel continue that same effort to make technology approachable.</p>
              <blockquote className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface px-6 py-6">
                <p className="font-playfair text-3xl leading-tight text-paperfolio-text">“Technology should make a real difference in the work people do.”</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Experience</p>
            <h2 className="paperfolio-h1">Each chapter informs the next</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_60px_rgba(31,41,55,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">{item.year}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-paperfolio-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paperfolio-surface px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">How I work</p>
            <h2 className="paperfolio-h1">Helping small teams do thoughtful, effective work</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-paperfolio-line bg-white p-7 shadow-[0_16px_55px_rgba(31,41,55,0.05)]">
                <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-paperfolio-line bg-white px-8 py-10 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Current focus</p>
              <h2 className="paperfolio-h1">Simple systems that support meaningful work</h2>
              <p className="paperfolio-body">AI transformation consulting and optical network training are at the center of my work. I connect automation, education, design and content so individuals and small teams can achieve more. The Dreaming Camera project and my practical AI YouTube channel grow from the same purpose.</p>
            </div>
            <div className="flex flex-wrap gap-3 self-center">
              {focusAreas.map((item) => <span key={item} className="rounded-full border border-paperfolio-line bg-paperfolio-surface px-5 py-3 text-sm font-semibold text-paperfolio-text">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">What’s next</p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">Design, automation, training or content. Let’s start with the problem you need to solve.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">Tell me what you’re working on. We can explore the situation together and find a clearer direction.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/en/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow">Get in touch</Link>
              <Link href="/en/blog" className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow">Read the journal</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
