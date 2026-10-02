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
          <p className="mt-4 text-sm text-paperfolio-text-muted">최종 수정일: 2026년 10월 3일</p>

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
                <p><strong className="text-paperfolio-text">이메일:</strong> dms@dmssolution.co.kr</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">8. 쿠키, 방문 통계 및 Google 광고</h2>
              <p className="mb-4">이 사이트는 방문 통계와 이용 흐름을 파악하기 위해 Google Analytics를 사용합니다. 이 과정에서 쿠키 등 온라인 식별자와 페이지 이용 정보가 처리될 수 있습니다. Google이 파트너 사이트의 정보를 처리하는 방법은 <a className="underline" href="https://policies.google.com/technologies/partner-sites">Google 안내</a>에서 확인할 수 있습니다.</p>
              <p className="mb-4">Google AdSense 광고가 게재되는 경우 Google을 포함한 제3자 광고 제공업체는 이용자의 이 사이트 또는 다른 웹사이트 방문 기록을 바탕으로 광고를 제공하기 위해 쿠키를 사용할 수 있습니다. Google과 그 파트너는 광고 쿠키를 사용하여 이용자의 관심사에 맞는 광고를 제공할 수 있습니다.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google 맞춤형 광고는 <a className="underline" href="https://myadcenter.google.com/">내 광고 센터</a>에서 설정하거나 해제할 수 있습니다.</li>
                <li>참여하는 다른 광고 제공업체의 맞춤형 광고 선택은 <a className="underline" href="https://www.aboutads.info/choices/">Digital Advertising Alliance의 선택 도구</a>에서 관리할 수 있습니다.</li>
                <li>Google의 쿠키 사용은 <a className="underline" href="https://policies.google.com/technologies/cookies">Google 쿠키 정책</a>, 개인정보 처리는 <a className="underline" href="https://policies.google.com/privacy">Google 개인정보처리방침</a>에서 확인할 수 있습니다.</li>
                <li>브라우저 설정에서 쿠키를 삭제하거나 저장을 제한할 수 있습니다. 쿠키를 차단하면 로그인 등 일부 기능의 이용이 제한될 수 있습니다.</li>
                <li>방문 통계 수집을 제한하려면 <a className="underline" href="https://tools.google.com/dlpage/gaoptout">Google Analytics 차단 브라우저 부가 기능</a>을 이용할 수 있습니다.</li>
              </ul>
              <p className="mt-4">맞춤형 광고를 해제해도 광고 자체가 모두 사라지는 것은 아닙니다. 광고 게재와 데이터 처리에 별도 동의가 필요한 지역에서는 해당 요건을 적용해야 하며, 이 방침의 안내만으로 이용자의 동의를 받은 것으로 보지 않습니다.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-paperfolio-text mb-4">9. 개인정보 처리방침 변경</h2>
              <p>이 개인정보처리방침은 2026년 10월 3일부터 적용됩니다. 이전의 개인정보 처리방침은 본 방침으로 대체됩니다.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
