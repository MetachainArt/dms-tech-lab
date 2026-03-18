import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "개인정보처리방침",
  description: "사이트 이용과 문의 과정에서 처리되는 개인정보에 대한 정책을 안내합니다.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue">
          <ArrowLeft className="h-4 w-4" />
          홈으로 돌아가기
        </Link>

        <div className="mt-8 rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">정책</p>
          <h1 className="mt-4 paperfolio-h1">개인정보처리방침</h1>
          <p className="mt-4 text-sm text-paperfolio-text-muted">최종 수정일: 2024년 1월 1일</p>

          <div className="mt-10 space-y-10 text-paperfolio-text-muted leading-8">
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">1. 개인정보의 수집 및 이용 목적</h2>
              <p className="mb-4">DMS Solution(이하 &quot;회사&quot;)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>서비스 제공 및 계약의 이행</li>
                <li>회원 관리 및 본인 확인</li>
                <li>마케팅 및 광고에의 활용</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">2. 수집하는 개인정보 항목</h2>
              <p className="mb-4">회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface p-6">
                <h3 className="font-semibold text-paperfolio-text mb-3">필수 수집 항목</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>이메일 주소</li>
                  <li>이름</li>
                  <li>문의 내용</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">3. 개인정보의 보유 및 이용 기간</h2>
              <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>서비스 이용 기록: 3년</li>
                <li>문의 내역: 3년</li>
                <li>마케팅 수신 동의: 동의 철회 시까지</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">4. 개인정보의 제3자 제공</h2>
              <p>회사는 정보주체의 개인정보를 목적 범위 내에서만 처리하며, 정보주체의 동의 또는 관련 법령에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">5. 정보주체의 권리·의무 및 행사방법</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>개인정보 열람 요구</li>
                <li>정정 요구</li>
                <li>삭제 요구</li>
                <li>처리정지 요구</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">6. 개인정보의 안전성 확보조치</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>개인정보의 암호화</li>
                <li>해킹 등에 대비한 기술적 대책</li>
                <li>개인정보에 대한 접근 제한</li>
                <li>개인정보 취급 직원의 최소화 및 교육</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">7. 개인정보 보호책임자</h2>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface p-6">
                <p><strong className="text-paperfolio-text">담당자:</strong> 개인정보 보호 담당</p>
                <p><strong className="text-paperfolio-text">이메일:</strong> reedo.dev@dmssolution.co.kr</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">8. 개인정보 처리방침 변경</h2>
              <p>이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다. 이전의 개인정보 처리방침은 본 방침으로 대체됩니다.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
