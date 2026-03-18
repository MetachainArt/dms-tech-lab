import Image from "next/image";
import Link from "next/link";

export default function AuthorCard() {
  return (
    <div className="mt-20 rounded-[32px] border border-paperfolio-line bg-white p-8 shadow-[0_18px_60px_rgba(31,41,55,0.05)] md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-paperfolio-line bg-paperfolio-surface">
          <Image src="/reedo-profile-high.png" alt="리도 프로필" fill sizes="96px" className="object-cover" />
        </div>

        <div className="flex-1 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">리도 인사이트</p>
          <h3 className="text-2xl font-semibold tracking-tight text-paperfolio-text">기술을 현장 언어로 다시 풀어 쓰는 사람</h3>
          <p className="text-sm leading-7 text-paperfolio-text-muted">
            3D 설계, 광통신 인프라 장비 개발, 글로벌 현장 교육을 19년 넘게 다뤄왔고, 요즘은 AI 자동화, 꿈꾸는 카메라, 실무 채널 운영을 연결해 복잡한 일을 더 쉽게 만드는 방법을 기록하고 있습니다.
          </p>
        </div>

        <div className="flex gap-3 md:flex-col">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-paperfolio-line px-5 py-3 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-blue/35 hover:text-paperfolio-accent-blue"
          >
            소개 보기
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-paperfolio-text px-5 py-3 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
}
