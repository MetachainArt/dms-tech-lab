export default function ContactHero() {
  return (
    <section className="px-6 pb-14 pt-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">문의</p>
          <h1 className="paperfolio-display max-w-4xl">복잡한 일을 조금 더 쉽게 만들고 싶다면, 편하게 이야기해 주세요.</h1>
          <p className="max-w-2xl text-lg leading-8 text-paperfolio-text-muted">
            자동화, 설계, 교육, 콘텐츠 중 어느 쪽이든 괜찮습니다. 필요한 문제부터 같이 정리해보면 생각보다 빨리 방향이 잡히기도 합니다.
          </p>
        </div>

        <div className="rounded-[36px] border border-paperfolio-line bg-paperfolio-surface p-8 shadow-[0_24px_80px_rgba(31,41,55,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-coral">응답</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">영업일 기준 1~2일</p>
            </div>
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">방식</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">이메일 · 카카오톡 · 원격 미팅</p>
            </div>
          </div>
          <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#f3e5ab_0%,#fff7dd_35%,#ead9c4_100%)] p-7">
            <p className="font-playfair text-3xl leading-tight text-paperfolio-text">정답을 바로 주기보다, 지금 필요한 질문부터 같이 찾는 쪽을 선호합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
