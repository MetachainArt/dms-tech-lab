import Link from "next/link";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "앱",
  description: "리도가 실험하고 있는 웹앱과 도구들을 모아 소개합니다.",
  path: "/apps",
});

const apps = [
  { name: "Vibe Coder", description: "AI와 함께 빠르게 프로토타입을 만들고 검증하는 코딩 실험", status: "운영 중", link: "/vibe-coding" },
  { name: "Prompt Lab", description: "실무에 바로 붙일 수 있는 프롬프트를 정리하고 다듬는 작업 공간", status: "정리 중", link: "/prompts" },
  { name: "Auto Studio", description: "콘텐츠와 업무 흐름을 연결하는 자동화 허브", status: "개발 중", link: "/automation" },
  { name: "Idea Flow", description: "생각을 시각화하고 빠르게 구조로 바꾸는 실험형 캔버스", status: "실험 중", link: "/vibe-coding" },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">앱</p>
            <h1 className="paperfolio-display max-w-4xl">생각을 바로 써볼 수 있게 만드는 작은 도구들</h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
              이 페이지는 리도가 만들고 있거나 실험 중인 웹앱을 모아 보여줍니다. 완성된 제품보다 먼저 써보고, 고치고, 다음 방향을 판단할 수 있는 형태를 중요하게 생각합니다.
            </p>
          </div>
          <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">Note</p>
            <p className="mt-5 font-playfair text-3xl leading-tight text-paperfolio-text">작은 앱은 단지 결과물이 아니라, 다음 아이디어를 검증하는 실험 장치이기도 합니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-paperfolio-surface px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {apps.map((app) => (
            <article key={app.name} className="rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_60px_rgba(31,41,55,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">{app.status}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-paperfolio-text">{app.name}</h2>
              <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{app.description}</p>
              <Link href={app.link} className="mt-8 inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-paperfolio-surface px-5 py-3 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-blue/35 hover:text-paperfolio-accent-blue">
                관련 작업 보기
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
