import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Layers, Wrench } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { EDUCATION_TRACKS } from "@/lib/education-data";

export const metadata: Metadata = generateSeoMetadata({
  title: "FTTx Field Training",
  description:
    "Practical FTTx and optical network training from an engineer with nearly 20 years in fiber infrastructure and hardware development, delivered on site in 9 countries.",
  path: "/fttx-training",
  locale: "en_US",
  keywords: [
    "FTTx training",
    "optical network training",
    "fiber optic field training",
    "PON",
    "optical splitter",
    "optical power budget",
    "OTDR",
    "fiber splicing",
    "GPON engineer training",
    "telecom field engineer",
  ],
});

const credentials = [
  { value: "20 yrs", label: "Fiber infrastructure and hardware development" },
  { value: "9", label: "Countries where training was delivered on site" },
  { value: "20+", label: "Hardware products developed and commercialised" },
  { value: "17", label: "Core patents" },
];

const countries = [
  "Vietnam",
  "Thailand",
  "New Zealand",
  "France",
  "Qatar",
  "Lebanon",
  "China",
  "Indonesia",
  "Oman",
];

const audience = [
  {
    icon: Wrench,
    title: "Engineers new to fiber",
    body: "You can follow the procedure, but nobody explained why the numbers are what they are. This starts at the vocabulary and the signal path.",
  },
  {
    icon: Layers,
    title: "Teams inheriting a network",
    body: "You maintain plant somebody else designed. The lessons focus on reading drawings, budgeting loss, and locating faults.",
  },
  {
    icon: Globe2,
    title: "Operators training in-house",
    body: "Written to be handed to a new hire directly. Each lesson ends with the decisions that matter on site, not a vendor feature list.",
  },
];

export default function FttxTrainingPage() {
  const track = EDUCATION_TRACKS["optical-training"];
  const lessons = track.chapters.flatMap((chapter) => chapter.lessons);

  return (
    <main
      lang="en"
      className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text"
    >
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">
              Optical Network Training
            </p>
            <h1 className="paperfolio-display max-w-4xl">
              FTTx training written by someone who built the hardware.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
              Nearly twenty years in optical infrastructure and equipment development, and field training
              delivered in nine countries. These lessons cover what actually decides whether a link comes up:
              network structure, split loss, power budget, and fault localisation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/education/${track.id}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-paperfolio-text px-7 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue"
              >
                Start the course
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:reedo.dev@dmssolution.co.kr?subject=FTTx%20training%20enquiry"
                className="inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-coral/40 hover:text-paperfolio-accent-coral"
              >
                Enquire about training
              </a>
            </div>
          </div>

          <div className="rounded-[36px] border border-paperfolio-line bg-paperfolio-surface p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)]">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3e5ab_0%,#fff7dd_35%,#ead9c4_100%)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Reedo</p>
              <p className="mt-6 font-playfair text-3xl leading-tight text-paperfolio-text">
                Equipment is easy to demonstrate. Judgement is what has to be taught.
              </p>
            </div>
            <div className="mt-6 rounded-[24px] border border-paperfolio-line bg-white px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">
                Field experience
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-paperfolio-line bg-paperfolio-bg px-3 py-1 text-xs font-semibold text-paperfolio-text-muted"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-paperfolio-text px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,41,55,0.18)] md:px-10">
          <div className="grid gap-6 md:grid-cols-4">
            {credentials.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6">
                <p className="font-playfair text-3xl leading-none text-paperfolio-accent-yellow md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Who it is for</p>
            <h2 className="paperfolio-h1">Written for the person who has to decide on site</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {audience.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-paperfolio-line bg-white p-7 shadow-[0_16px_55px_rgba(31,41,55,0.05)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-paperfolio-accent-blue/10">
                    <Icon className="h-7 w-7 text-paperfolio-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paperfolio-surface px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Curriculum</p>
            <h2 className="paperfolio-h1">{track.title}</h2>
            <p className="paperfolio-body max-w-2xl">{track.description}</p>
          </div>

          <ol className="space-y-4">
            {lessons.map((lesson, index) => (
              <li key={lesson.id}>
                <Link
                  href={`/education/${track.id}/${lesson.id}`}
                  className="flex flex-col gap-3 rounded-[28px] border border-paperfolio-line bg-white p-7 shadow-[0_16px_55px_rgba(31,41,55,0.05)] transition-shadow hover:shadow-[0_20px_70px_rgba(31,41,55,0.08)] md:flex-row md:items-center md:justify-between"
                >
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">
                      Lesson {index + 1}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-paperfolio-text">{lesson.title}</h3>
                    <p className="text-sm leading-7 text-paperfolio-text-muted">{lesson.description}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-paperfolio-text-muted">
                    {lesson.duration}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">
                On-site training
              </p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">
                Need this delivered to your field team instead?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Sessions can be built around the plant you actually operate: your split ratios, your enclosures,
                your measurement records. Tell me what your team keeps getting stuck on.
              </p>
            </div>
            <a
              href="mailto:reedo.dev@dmssolution.co.kr?subject=FTTx%20training%20enquiry"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
