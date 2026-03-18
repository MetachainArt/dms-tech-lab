export default function LocationSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] lg:grid-cols-[0.75fr_1.25fr] lg:p-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">기반</p>
          <h2 className="paperfolio-h1">한국을 기반으로, 원격으로 유연하게 협업합니다</h2>
          <p className="paperfolio-body">
            지역은 한국이지만 작업 방식은 훨씬 유연합니다. 이메일, 화상 미팅, 문서 중심 협업으로도 충분히 밀도 있는 진행이 가능합니다.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-paperfolio-line bg-paperfolio-surface px-4 py-2 text-sm font-semibold text-paperfolio-text">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3f8f62]" />
            원격 협업 가능
          </div>
        </div>

        <div className="rounded-[30px] border border-paperfolio-line bg-paperfolio-surface p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">Location</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">Korea</p>
            </div>
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">Meeting</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">Zoom · Meet</p>
            </div>
            <div className="rounded-[24px] border border-paperfolio-line bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">Language</p>
              <p className="mt-3 text-lg font-semibold text-paperfolio-text">한국어 · English</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Icheon-si,+Gyeonggi-do,+South+Korea"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-white px-5 py-3 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-blue/35 hover:text-paperfolio-accent-blue"
          >
            Google Maps에서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
