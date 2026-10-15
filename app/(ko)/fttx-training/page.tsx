import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/brand/FiberContent.module.css";
import { ArrowRight, Globe2, Layers, Wrench } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { EDUCATION_TRACKS } from "@/lib/education-data";
import { getCourseStructure } from "@/lib/education-fs";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// This page is in English. When an English version of a lesson exists (content/education-en), use its title,
// summary and route so lessons that were written in Korean first are not listed with Korean titles.
function englishLesson(trackId: string, slug: string) {
  const file = path.join(process.cwd(), "content", "education-en", trackId, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data } = matter(fs.readFileSync(file, "utf8"));
  return { title: data.title as string | undefined, description: data.desc as string | undefined, duration: data.readTime as string | undefined };
}

// On-site training FAQ (2026-10-11 owner decision: duration, cost, group size and completion are "provided on enquiry")
function trainingFaq(lessonCount: number) {
  return [
    {
      q: "What does the FTTx field training cover?",
      a: `It is built on the ${lessonCount}-lesson FTTx curriculum on this page: network structure, split loss, optical power budget, enclosure work and fault localisation — the decisions that decide whether a link comes up on site.`,
    },
    {
      q: "How are duration, cost, group size and completion arranged?",
      a: "They are set after a short consultation, based on who is being trained, how many people, the plant you operate and the site conditions. Include your team size and the tasks your team keeps getting stuck on when you enquire.",
    },
    {
      q: "Can the training follow our own equipment?",
      a: "Yes. Sessions can be built around the plant you actually operate: your split ratios, your enclosures and your measurement records.",
    },
    {
      q: "Who teaches it?",
      a: "Reedo (Jongsun Park). Nearly twenty years in optical infrastructure and FTTx equipment development, with field training delivered in nine countries: Vietnam, Thailand, New Zealand, France, Qatar, Lebanon, China, Indonesia and Oman.",
    },
    {
      q: "Which languages and formats?",
      a: "Korean or English. Based in Korea and available remotely, including Zoom or Google Meet; on-site delivery is discussed case by case.",
    },
    {
      q: "How do I enquire?",
      a: "Email dms@dmssolution.co.kr. Replies usually arrive within one to two business days.",
    },
  ];
}

export default function FttxTrainingPage() {
  const track = EDUCATION_TRACKS["optical-training"];
  // Same source as the course page (/education/optical-training): read the lesson files so supplementary
  // lessons added later are listed here too. Falls back to the static list if the files cannot be read.
  const course = getCourseStructure(track.id);
  const lessons: { id: string; title: string; description: string; duration?: string; href?: string }[] = course
    ? course.chapters.flatMap((chapter) =>
        chapter.lessons.map((lesson) => {
          const en = englishLesson(track.id, lesson.slug);
          return {
            id: lesson.slug,
            title: en?.title || lesson.title,
            description: en?.description || lesson.description,
            duration: en?.duration || lesson.duration,
            href: en ? `/en/education/${track.id}/${lesson.slug}` : undefined,
          };
        }),
      )
    : track.chapters.flatMap((chapter) =>
        chapter.lessons.map((lesson) => ({ id: lesson.id, title: lesson.title, description: lesson.description, duration: lesson.duration })),
      );

  return (
    <main
      lang="en"
      className={`${styles.page} ${styles.editorial}`}
    >
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">
              Optical Network Training
            </p>
            <h1 className={styles.fttxTitle}>
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
                className={styles.button}
              >
                Start the course
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:dms@dmssolution.co.kr?subject=FTTx%20training%20enquiry"
                className={styles.button}
              >
                Enquire about training
              </a>
            </div>
          </div>

          <aside className={styles.fieldStudy}>
            <div className={styles.fieldImage}>
              <Image src="/images/web-optimized/094-fiber-exploded-2039f111a67f.webp" alt="Optical connector assembly — DMS brand concept study" fill priority sizes="(max-width: 1024px) 90vw, 44vw" />
            </div>
            <p className={styles.eyebrow}>Reedo / Field experience</p>
            <blockquote>Equipment is easy to demonstrate. Judgement is what has to be taught.</blockquote>
            <div className={styles.countries}>
              {countries.map((country) => <span key={country}>{country}</span>)}
            </div>
          </aside>
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
            <h2 className="paperfolio-h1 pixel-display">Written for the person who has to decide on site</h2>
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
                  href={lesson.href ?? `/education/${track.id}/${lesson.id}`}
                  className="flex flex-col gap-3 border-b border-paperfolio-line py-7 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-700 md:flex-row md:items-center md:justify-between"
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

      <section className="px-6 pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: trainingFaq(lessons.length).map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">FAQ</p>
            <h2 className="paperfolio-h1">On-site training questions</h2>
          </div>
          <dl className="space-y-8">
            {trainingFaq(lessons.length).map((item) => (
              <div key={item.q} className="border-b border-paperfolio-line pb-6">
                <dt className="text-xl font-semibold tracking-tight text-paperfolio-text">{item.q}</dt>
                <dd className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-24 pt-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">
                On-site training
              </p>
              <h2 className="pixel-display text-2xl leading-tight md:text-3xl">
                Need this delivered to your field team instead?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Sessions can be built around the plant you actually operate: your split ratios, your enclosures,
                your measurement records. Tell me what your team keeps getting stuck on.
              </p>
            </div>
            <a
              href="mailto:dms@dmssolution.co.kr?subject=FTTx%20training%20enquiry"
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
