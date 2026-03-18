import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "데이터 삭제 요청",
  description: "개인정보 및 계정 데이터 삭제 요청 방법을 안내합니다.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue">
          <ArrowLeft className="h-4 w-4" /> 홈으로 돌아가기
        </Link>

        <div className="mt-8 rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">정책</p>
          <h1 className="mt-4 paperfolio-h1">데이터 삭제 요청</h1>
          <p className="mt-4 text-paperfolio-text-muted">DMS Solution은 사용자의 개인정보 보호를 중요하게 생각합니다.</p>

          <div className="mt-10 space-y-8">
            <section className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface p-8">
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">삭제 요청 방법</h2>
              <p className="text-paperfolio-text-muted leading-8 mb-6">아래 이메일로 데이터 삭제를 요청하실 수 있습니다.</p>
              <div className="rounded-[24px] border border-paperfolio-line bg-white p-6 space-y-4">
                <p><span className="font-semibold text-paperfolio-text">이메일:</span> <a href="mailto:reedo.dev@gmail.com?subject=[데이터 삭제 요청]" className="text-paperfolio-accent-blue hover:underline">reedo.dev@gmail.com</a></p>
                <p><span className="font-semibold text-paperfolio-text">제목:</span> [데이터 삭제 요청]</p>
              </div>
            </section>
            <section className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface p-8">
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">처리 절차</h2>
              <p className="text-paperfolio-text-muted leading-8">요청 접수 후 확인 절차를 거쳐 처리 결과를 회신합니다.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
