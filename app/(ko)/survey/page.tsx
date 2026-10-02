import ConsultingSurveyForm from "@/components/forms/ConsultingSurveyForm";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

// 없으면 레이아웃의 홈 title·description·canonical 을 상속한다. (폼 화면 문구 사용)
export const metadata = generateSeoMetadata({
  title: "사전 질의응답",
  description: "답변 주신 내용을 바탕으로 상황에 맞는 제안을 정리해 드립니다. 선택하신 문의 유형에 해당하는 질문만 보여드립니다.",
  path: "/survey",
});

export default function SurveyPage() {
  return (
    <div className="min-h-screen bg-paperfolio-bg">
      <main className="pt-20">
        <ConsultingSurveyForm />
      </main>
    </div>
  );
}
