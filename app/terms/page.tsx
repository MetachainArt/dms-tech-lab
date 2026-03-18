import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "이용약관",
  description: "서비스 이용 조건과 권리, 책임 사항을 안내합니다.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paperfolio-bg text-paperfolio-text selection:bg-paperfolio-accent-yellow/70 selection:text-paperfolio-text">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-paperfolio-text-muted hover:text-paperfolio-accent-blue">
          <ArrowLeft className="h-4 w-4" /> 홈으로 돌아가기
        </Link>

        <div className="mt-8 rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">정책</p>
          <h1 className="mt-4 paperfolio-h1">이용약관</h1>
          <p className="mt-4 text-sm text-paperfolio-text-muted">최종 수정일: 2024년 1월 1일</p>

          <div className="mt-10 space-y-10 text-paperfolio-text-muted leading-8">
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제1조 (목적)</h2><p>본 약관은 DMS Solution(이하 &quot;회사&quot;)이 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제2조 (정의)</h2><ul className="list-decimal pl-6 space-y-3"><li><strong className="text-paperfolio-text">서비스</strong>란 회사가 제공하는 AI 자동화, 바이브 코딩, 기술 교육 등 모든 관련 서비스를 의미합니다.</li><li><strong className="text-paperfolio-text">회원</strong>이란 회사의 서비스에 접속하여 본 약관에 따라 서비스를 이용하는 고객을 의미합니다.</li><li><strong className="text-paperfolio-text">이용계약</strong>이란 서비스 이용과 관련하여 회사와 회원 간에 체결하는 모든 계약을 의미합니다.</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제3조 (약관의 효력 및 변경)</h2><ul className="list-decimal pl-6 space-y-3"><li>본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</li><li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li><li>회사가 약관을 변경할 경우 적용일자 및 변경사유를 명시하여 사전에 공지합니다.</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제4조 (서비스의 제공)</h2><div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface p-6"><ul className="list-disc pl-6 space-y-2"><li>AI 및 자동화 솔루션 컨설팅</li><li>워크플로우 자동화 서비스</li><li>바이브 코딩 웹 애플리케이션 개발</li><li>기술 교육 및 트레이닝 프로그램</li><li>기타 회사가 정하는 서비스</li></ul></div></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제5조 (서비스 이용)</h2><ul className="list-decimal pl-6 space-y-3"><li>서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 운영을 원칙으로 합니다.</li><li>회사는 정기점검을 실시할 수 있으며, 필요한 경우 사전에 공지합니다.</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제6조 (회원의 의무)</h2><ul className="list-disc pl-6 space-y-2"><li>신청 또는 변경 시 허위 내용의 등록</li><li>타인의 정보 도용</li><li>회사가 게시한 정보의 변경</li><li>회사 및 제3자의 권리 침해</li><li>회사 및 제3자의 업무를 방해하는 행위</li><li>공서양속에 반하는 정보의 공개 또는 게시</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제7조 (저작권의 귀속)</h2><ul className="list-decimal pl-6 space-y-3"><li>서비스에 의해 작성된 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속됩니다.</li><li>회원은 회사의 사전 승낙 없이 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제8조 (면책조항)</h2><ul className="list-decimal pl-6 space-y-3"><li>회사는 불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li><li>회사는 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.</li><li>회사는 회원이 서비스를 이용하여 기대하는 수익 상실에 대하여 책임을 지지 않습니다.</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제9조 (분쟁해결)</h2><p>회사와 회원 간에 발생한 분쟁에 관한 소송은 대한민국 법률에 따르며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p></section>
            <section><h2 className="text-2xl font-semibold text-paperfolio-text mb-4">제10조 (기타)</h2><p>본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따릅니다.</p></section>
          </div>
        </div>
      </div>
    </main>
  );
}
