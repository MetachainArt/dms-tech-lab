import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-5xl rounded-[36px] bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_90px_rgba(31,41,55,0.18)] md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-yellow">마지막 한 마디</p>
            <h2 className="font-playfair text-3xl leading-tight md:text-4xl">부담 없이 남겨주세요. 바로 정답은 못 드려도, 다음 질문은 함께 찾을 수 있습니다.</h2>
            <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              프로젝트 의뢰가 아니어도 괜찮습니다. 지금 막힌 문제를 어디서부터 풀어야 할지 함께 정리하는 대화도 의미 있다고 생각합니다.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:reedo.dev@dmssolution.co.kr"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-paperfolio-text hover:bg-paperfolio-accent-yellow"
            >
              이메일 보내기
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold text-white hover:border-paperfolio-accent-yellow/50 hover:text-paperfolio-accent-yellow"
            >
              리도 소개 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
