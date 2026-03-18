import Link from "next/link";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "리도와 DMS",
  description: "리도의 작업과 DMS Solution의 운영 기반이 어떻게 연결되는지 소개합니다.",
  path: "/company",
});

const pillars = [
  {
    title: "리도의 작업실",
    description: "사이트의 전면은 리도 개인의 작업과 문제 해결 방식에 초점을 맞춥니다. 만들고, 설명하고, 같이 정리하는 사람이 앞에 나옵니다.",
  },
  {
    title: "DMS Solution의 운영 기반",
    description: "법적 계약, 운영 실무, 일부 프로젝트 실행은 DMS Solution이라는 사업 운영 기반 위에서 이루어집니다.",
  },
  {
    title: "실무 중심 협업 구조",
    description: "브랜드는 개인에 가깝게, 실행은 구조적으로. 이 둘을 분리하지 않고 하나의 일하는 방식으로 연결합니다.",
  },
];

const timelines = [
  {
    title: "설계와 제조 경험의 축적",
    body: "3D 설계, 제품 디자인, 현장 중심 커뮤니케이션을 오래 다루며 실제 제작과 검토가 가능한 기준을 쌓았습니다.",
  },
  {
    title: "교육과 전달 방식의 확장",
    body: "기술을 시연하고 가르치며 복잡한 내용을 이해 가능한 언어로 옮기는 감각을 키웠습니다.",
  },
  {
    title: "AI 자동화와 실무형 도구 제작",
    body: "지금은 자동화, 교육, 설계, 콘텐츠를 연결해 작은 팀도 밀도 있게 일할 수 있는 구조를 만드는 데 집중하고 있습니다.",
  },
];

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-18 pt-36">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">리도와 DMS</p>
            <h1 className="paperfolio-display max-w-4xl">브랜드의 전면은 리도지만, 실행의 기반에는 DMS가 있습니다.</h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
              이 페이지는 리도 개인 브랜드와 DMS Solution이라는 운영 기반의 관계를 설명합니다. 사이트는 사람 중심으로 보이되, 실제 협업과 운영은 안정적인 구조 위에서 진행됩니다.
            </p>
          </div>
          <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">운영 원칙</p>
            <p className="mt-5 font-playfair text-3xl leading-tight text-paperfolio-text">개인 브랜드의 신뢰감과 실행 조직의 안정감을 함께 가져갑니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-paperfolio-surface px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[30px] border border-paperfolio-line bg-white p-7 shadow-[0_18px_60px_rgba(31,41,55,0.05)]">
              <h2 className="text-2xl font-semibold tracking-tight text-paperfolio-text">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-paperfolio-text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-paperfolio-line bg-white px-8 py-10 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">흐름</p>
              <h2 className="paperfolio-h1">지금의 브랜드는 이전 경험 위에서 만들어졌습니다</h2>
            </div>
            <div className="space-y-5">
              {timelines.map((item, index) => (
                <div key={item.title} className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-paperfolio-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">함께 보기</p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">브랜드는 리도, 실행은 구조적으로. 필요한 문제부터 편하게 이야기해 주세요.</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/about" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow">소개 보기</Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow">문의하기</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
