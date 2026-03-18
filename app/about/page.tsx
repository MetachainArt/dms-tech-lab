import Link from "next/link";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "소개",
  description: "리도의 하드웨어 설계, 자동화, 교육 경험과 일하는 방식, 그리고 지금 집중하는 작업을 소개합니다.",
  path: "/about",
});

const strengths = [
  {
    title: "설계와 개발을 함께 봅니다",
    description: "아이디어를 형태로 만들고, 실제로 작동하게 만들고, 다시 현장 기준으로 다듬는 흐름에 익숙합니다.",
  },
  {
    title: "설명 가능한 기술을 만듭니다",
    description: "도구가 좋아도 팀이 이해하지 못하면 오래 가지 않습니다. 그래서 결과물과 함께 설명 구조를 남깁니다.",
  },
  {
    title: "적은 인원으로도 굴러가게 합니다",
    description: "반복 업무는 자동화하고, 사람은 판단과 품질에 집중하도록 설계를 돕습니다.",
  },
];

const timeline = [
  {
    year: "2004-2014",
    title: "기구 설계와 하드웨어 개발의 기반을 쌓은 시간",
    description: "3D 설계, 하드웨어 디자인, 광통신 인프라 장비 개발을 오가며 제품이 실제로 제작되고 검토되는 조건을 익혔습니다.",
  },
  {
    year: "2015-2024",
    title: "9개국 글로벌 현장 지원과 교육 경험 확장",
    description: "베트남, 태국, 뉴질랜드, 프랑스, 카타르, 레바논, 중국, 인도네시아, 오만 현장에서 기술 지원과 교육을 진행하며 설명과 전달의 감각을 다졌습니다.",
  },
  {
    year: "2024-현재",
    title: "AI 자동화와 실무형 콘텐츠·교육의 확장",
    description: "요즘은 AI 자동화, 꿈꾸는 카메라 프로젝트, 실무형 교육, 유튜브 채널 운영을 연결해 기술을 더 쉽게 써보게 만드는 구조를 만들고 있습니다.",
  },
];

const stats = [
  { value: "20년 가까이", label: "설계·개발 경험" },
  { value: "9개국", label: "글로벌 현장 지원" },
  { value: "17건", label: "핵심 특허" },
  { value: "FTTx", label: "광통신 인프라 경험" },
];

const focusAreas = ["광통신 인프라·FTTx", "AI 자동화 워크플로우", "실무형 AI 교육", "꿈꾸는 카메라", "기술 기반 콘텐츠 제작"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <section className="px-6 pb-18 pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">소개</p>
            <h1 className="paperfolio-display max-w-4xl">리도는 기술을 현장에서 다시 쓸 수 있게 만드는 사람입니다.</h1>
            <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
              3D 설계와 하드웨어 디자인, 광통신 인프라 장비 개발, 기술 교육을 20년 가까이 해왔습니다. 지금은 AI 자동화와 실무형 도구, 콘텐츠 제작까지 연결하며 복잡한 일을 더 단순하게 만드는 작업을 하고 있습니다.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/#selected-works" className="inline-flex items-center justify-center rounded-full bg-paperfolio-text px-7 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue">
                작업 보기
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-coral/40 hover:text-paperfolio-accent-coral">
                편하게 문의하기
              </Link>
            </div>
          </div>

          <div className="rounded-[36px] border border-paperfolio-line bg-paperfolio-surface p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)]">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3e5ab_0%,#fff7dd_35%,#ead9c4_100%)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Reedo</p>
              <p className="mt-6 font-playfair text-4xl leading-tight text-paperfolio-text">작고 예쁜 브랜딩보다, 믿고 같이 일할 수 있는 작업실을 지향합니다.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">태도</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">기술보다 사람을 먼저 이해하기</p>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">기준</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">설명 가능하고 다시 쓸 수 있는 결과</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-paperfolio-text px-6 py-8 text-white shadow-[0_28px_90px_rgba(31,41,55,0.18)] md:px-10">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6">
                <p className="font-playfair text-3xl text-paperfolio-accent-yellow md:text-4xl">{stat.value}</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">배경</p>
              <h2 className="paperfolio-h1">20년 가까운 현장과 교육이 지금의 방식을 만들었습니다</h2>
            </div>
            <div className="space-y-5">
              <p className="paperfolio-body">
                설계는 도면에서 끝나지 않고 현장에서 완성된다고 믿습니다. 그래서 저는 형태를 만드는 일과 그것이 실제로 쓰이게 하는 일을 항상 같이 봐왔습니다. 광통신 인프라와 FTTx 장비를 포함해 20개 이상의 하드웨어 제품을 개발하고 상용화한 경험도 이 기준 위에 쌓였습니다.
              </p>
              <p className="paperfolio-body">
                9개국 현장에서 기술을 시연하고 교육하며 배운 것은, 어려운 기술도 사람 말로 설명할 수 있어야 팀 안에 남는다는 점이었습니다. 17건의 특허와 11건의 디자인 등록, 그리고 꿈꾸는 카메라와 AI 실무 채널 운영 역시 그 연장선 위에 있습니다.
              </p>
              <div className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface px-6 py-6">
                <p className="font-playfair text-3xl leading-tight text-paperfolio-text">
                  “기술은 멋있어 보이기보다,
                  <br />
                  실제로 도움이 되어야 합니다.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">이력의 흐름</p>
            <h2 className="paperfolio-h1">지금 하는 일은 이전의 경험 위에 쌓여 있습니다</h2>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">일하는 방식</p>
            <h2 className="paperfolio-h1">적은 인원으로도 밀도 있게 일하는 구조를 만듭니다</h2>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">지금 집중하는 것</p>
              <h2 className="paperfolio-h1">작고 강한 실행 시스템을 만드는 일</h2>
              <p className="paperfolio-body">
                지금은 AI 자동화와 교육, 설계, 콘텐츠를 연결해 혼자 혹은 작은 팀도 더 멀리 갈 수 있는 구조를 만드는 데 집중하고 있습니다. 꿈꾸는 카메라 프로젝트와 AI 실무 유튜브 채널 운영도 같은 문제의식에서 이어지고 있습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 self-center">
              {focusAreas.map((item) => (
                <span key={item} className="rounded-full border border-paperfolio-line bg-paperfolio-surface px-5 py-3 text-sm font-semibold text-paperfolio-text">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">다음 이야기</p>
              <h2 className="font-playfair text-3xl leading-tight md:text-4xl">설계, 자동화, 교육, 콘텐츠. 어느 쪽이든 지금 필요한 문제부터 같이 보죠.</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                부담 없이 이야기해 주세요. 정답을 바로 드리진 못해도, 방향은 함께 더 선명하게 만들 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow">
                문의하기
              </Link>
              <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow">
                글 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
