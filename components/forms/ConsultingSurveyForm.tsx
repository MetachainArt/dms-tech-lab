"use client";

import { useState, useRef, ReactNode, forwardRef } from "react";
import { Copy, Check, Download, Send } from "lucide-react";

type SurveyData = {
  q1: string[];
  q2: string;
  q3: { newsletter: string; blog: string; image: string; portfolio: string };
  q4: string;
  q5: string;
  q6: string[];
  q7: string[];
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  q12: string[];
  q13: string;
  q14: string[];
  q15: string;
  q16: string;
  q17: string[];
  q18: string;
  q19: string;
  q20: string[];
  q21: string;
  q22: string;
  q23: string;
  q24: string;
  q25: string;
  q1_other: string;
  q2_other: string;
  q6_other: string;
  q7_other: string;
  q12_other: string;
};

const initialData: SurveyData = {
  q1: [], q2: "", q3: { newsletter: "", blog: "", image: "", portfolio: "" },
  q4: "", q5: "", q6: [], q7: [], q8: "", q9: "", q10: "", q11: "",
  q12: [], q13: "", q14: [], q15: "", q16: "", q17: [], q18: "",
  q19: "", q20: [], q21: "", q22: "", q23: "", q24: "", q25: "",
  q1_other: "", q2_other: "", q6_other: "", q7_other: "", q12_other: ""
};

const QuestionBlock = ({ title, children }: { title: string, children: ReactNode }) => (
  <div className="mb-8 rounded-2xl border border-paperfolio-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <h3 className="mb-4 text-lg font-semibold text-paperfolio-text">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="mb-6 mt-12 text-2xl font-bold text-paperfolio-text">{title}</h2>
);


// ---------------------------------------------------------
// DEDICATED PDF REPORT COMPONENT (Elegant & Minimalist)
// ---------------------------------------------------------
const PDFReport = forwardRef<HTMLDivElement, { data: SurveyData }>(({ data }, ref) => {
  const ReportItem = ({ label, value }: { label: string, value: string | string[] }) => {
    const displayValue = Array.isArray(value) ? (value.length > 0 ? value.join(", ") : "-") : (value || "-");
    return (
      <div className="mb-5 break-inside-avoid">
        <p className="text-[13px] font-semibold mb-1" style={{ color: '#9ca3af' }}>{label}</p>
        <p className="text-[15px] leading-snug font-medium break-keep" style={{ color: '#111827' }}>{displayValue}</p>
      </div>
    );
  };

  const badgeStyle = { backgroundColor: '#f9fafb', borderColor: '#f3f4f6', color: '#111827' };
  const borderBottomStyle = { borderColor: '#e5e7eb' };
  const h2Style = { color: '#1f2937' };

  return (
    <div 
      ref={ref} 
      className="w-[900px] min-h-[1272px] p-14"
      style={{ 
        fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
        backgroundColor: '#ffffff',
        color: '#1f2937'
      }}
    >
      <div className="border-b-[3px] py-6 flex justify-between items-end mb-10" style={{ borderColor: '#111827' }}>
        <div>
          <p className="text-sm font-bold tracking-widest mb-2 uppercase" style={{ color: '#2f5d7c' }}>SJ Atelier Consulting</p>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: '#111827' }}>사전 질의응답 리포트</h1>
          <p className="font-medium" style={{ color: '#6b7280' }}>자동화 및 기술교육 과정</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium" style={{ color: '#9ca3af' }}>Date: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-4">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6">
          <section>
            <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>1. 현재 해결 과제</h2>
            <ReportItem label="Q1. 시간을 가장 많이 쓰는 작업" value={data.q1.map(v => v === '기타' && data.q1_other ? `기타(${data.q1_other})` : v)} />
            <ReportItem label="Q2. 1순위 해결 과제" value={data.q2 === '기타' && data.q2_other ? `기타(${data.q2_other})` : data.q2} />
            <div className="mb-5 break-inside-avoid">
              <p className="text-[13px] font-semibold mb-2" style={{ color: '#9ca3af' }}>Q3. 우선순위</p>
              <div className="grid grid-cols-2 gap-2 text-[14px] font-medium">
                <span className="px-3 py-2 rounded-lg border shadow-sm" style={badgeStyle}>📰 뉴스레터: {data.q3.newsletter || "-"}</span>
                <span className="px-3 py-2 rounded-lg border shadow-sm" style={badgeStyle}>📱 블로그/SNS: {data.q3.blog || "-"}</span>
                <span className="px-3 py-2 rounded-lg border shadow-sm" style={badgeStyle}>🎨 이미지 제작: {data.q3.image || "-"}</span>
                <span className="px-3 py-2 rounded-lg border shadow-sm" style={badgeStyle}>🌐 홈페이지: {data.q3.portfolio || "-"}</span>
              </div>
            </div>
          </section>

          <section>
             <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>2. 자문 방향성</h2>
             <ReportItem label="Q4. 자문 진행 방식" value={data.q4} />
             <ReportItem label="Q5. 기대하는 결과물 1개" value={data.q5} />
             <ReportItem label="Q6. 가장 기대하는 변화" value={data.q6.map(v => v === '기타' && data.q6_other ? `기타(${data.q6_other})` : v)} />
          </section>

          <section>
            <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>3. 도구와 환경</h2>
            <ReportItem label="Q7. 사용 중인 도구" value={data.q7.map(v => v === '기타' && data.q7_other ? `기타(${data.q7_other})` : v)} />
            <ReportItem label="Q8. 유료 사용 도구" value={data.q8} />
            <ReportItem label="Q9. 실습 환경" value={data.q9} />
            <ReportItem label="Q10. 컴퓨터 환경" value={data.q10} />
            <ReportItem label="Q11. 학습 난이도" value={data.q11} />
          </section>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6">
          <section>
            <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>4. 콘텐츠 방향</h2>
            <ReportItem label="Q12. 선호 콘텐츠 유형" value={data.q12.map(v => v === '기타' && data.q12_other ? `기타(${data.q12_other})` : v)} />
            <ReportItem label="Q13. 주요 다룰 주제 3가지" value={data.q13} />
            <ReportItem label="Q14. 원하는 톤" value={data.q14} />
            <ReportItem label="Q15. 참고 브랜드/사이트" value={data.q15} />
          </section>

          <section>
            <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>5. 이미지 제작</h2>
            <ReportItem label="Q16. 이미지 제작 포함 여부" value={data.q16} />
            <ReportItem label="Q17. 주요 용도" value={data.q17} />
            <ReportItem label="Q18. 선호 스타일" value={data.q18} />
            <ReportItem label="Q19. 프롬프트 작성 실습" value={data.q19} />
          </section>

          <section>
            <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>6. 자동화 방향</h2>
            <ReportItem label="Q20. 가장 궁금한 도구/방식" value={data.q20} />
            <ReportItem label="Q21. 기대하는 자동화 수준" value={data.q21} />
            <ReportItem label="Q22. 자동화 학습 의향" value={data.q22} />
          </section>

          <section>
             <h2 className="text-[18px] font-bold border-b pb-2 mb-5" style={{ ...borderBottomStyle, ...h2Style }}>7. 성공 기준</h2>
             <ReportItem label="Q23. 만족스러운 자문 결과" value={data.q23} />
             <ReportItem label="Q24. 교육 후 기대 활용 빈도" value={data.q24} />
             <ReportItem label="Q25. 가장 우려되는 점" value={data.q25} />
          </section>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t text-center flex flex-col items-center" style={{ borderColor: '#e5e7eb' }}>
        <div className="w-12 h-1 mb-4 rounded-full" style={{ backgroundColor: '#111827' }}></div>
        <p className="text-[12px] font-bold tracking-widest uppercase" style={{ color: '#9ca3af' }}>Consulting Preparation Document</p>
      </div>
    </div>
  );
});
PDFReport.displayName = "PDFReport";


// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
export default function ConsultingSurveyForm() {
  const [data, setData] = useState<SurveyData>(initialData);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleCheckbox = (question: keyof SurveyData, value: string) => {
    setData((prev) => {
      const current = prev[question] as string[];
      if (current.includes(value)) {
        return { ...prev, [question]: current.filter((item) => item !== value) };
      } else {
        return { ...prev, [question]: [...current, value] };
      }
    });
  };

  const handleRadio = (question: keyof SurveyData, value: string) => {
    setData((prev) => ({ ...prev, [question]: value }));
  };

  const handleText = (question: keyof SurveyData, value: string) => {
    setData((prev) => ({ ...prev, [question]: value }));
  };

  const generateResultText = () => {
    const q1Res = data.q1.map(v => v === '기타' && data.q1_other ? `기타(${data.q1_other})` : v).join(", ");
    const q2Res = data.q2 === '기타' && data.q2_other ? `기타(${data.q2_other})` : data.q2;
    const q6Res = data.q6.map(v => v === '기타' && data.q6_other ? `기타(${data.q6_other})` : v).join(", ");
    const q7Res = data.q7.map(v => v === '기타' && data.q7_other ? `기타(${data.q7_other})` : v).join(", ");
    const q12Res = data.q12.map(v => v === '기타' && data.q12_other ? `기타(${data.q12_other})` : v).join(", ");

    return `[자동화 및 기술교육 사전 질의응답]\n\n` + 
    `1. 현재 가장 해결하고 싶은 문제\n` +
    `Q1: ${q1Res}\nQ2: ${q2Res}\n` +
    `Q3 (뉴스레터/블로그/이미지/홈페이지): ${data.q3.newsletter}/${data.q3.blog}/${data.q3.image}/${data.q3.portfolio}\n\n` +
    `2. 원하는 방향\nQ4: ${data.q4}\nQ5: ${data.q5}\nQ6: ${q6Res}\n\n` +
    `3. 환경\nQ7: ${q7Res}\nQ8: ${data.q8}\nQ9: ${data.q9}\nQ10: ${data.q10}\nQ11: ${data.q11}\n\n` +
    `4. 콘텐츠\nQ12: ${q12Res}\nQ13: ${data.q13}\nQ14: ${data.q14.join(", ")}\nQ15: ${data.q15}\n\n` +
    `5. 이미지\nQ16: ${data.q16}\nQ17: ${data.q17.join(", ")}\nQ18: ${data.q18}\nQ19: ${data.q19}\n\n` +
    `6. 자동화\nQ20: ${data.q20.join(", ")}\nQ21: ${data.q21}\nQ22: ${data.q22}\n\n` +
    `7. 기대 성과\nQ23: ${data.q23}\nQ24: ${data.q24}\nQ25: ${data.q25}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateResultText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  const submitSurvey = async () => {
    setIsSending(true);
    try {
      const text = generateResultText();
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const json = await res.json();

      if (!res.ok) {
        console.error("Server Error:", json);
        throw new Error(json.error?.message || json.error || "서버 응답 오류");
      }

      alert("성공적으로 제출되었습니다! 담당자에게 이메일이 발송되었습니다.");
    } catch (err: any) {
      console.error(err);
      alert("전송 실패: " + err.message + "\\n\\n(참고: Resend 인증되지 않은 이메일 문제일 수 있으니 .env 설정을 확인해주세요.)");
    } finally {
      setIsSending(false);
    }
  };

  const downloadPDF = async () => {
    setIsGenerating(true);
    try {
      const element = reportRef.current;
      if (!element) {
        alert("PDF 생성 요소를 찾을 수 없습니다.");
        setIsGenerating(false);
        return;
      }
      
      const html2canvasLib = (await import("html2canvas")).default;
      const jsPDFLib = (await import("jspdf")).default;

      const canvas = await html2canvasLib(element, { 
        scale: 2, 
        useCORS: true, 
        logging: true,
        backgroundColor: "#ffffff",
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      const imgData = canvas.toDataURL("image/png");
      
      const pdf = new jsPDFLib("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfHeight;
      let position = 0;
      
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
      
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }
      
      pdf.save("사전질의응답_자동화및기술교육.pdf");
    } catch (err: any) {
      console.error(err);
      alert("PDF 생성 중 오류가 발생했습니다: " + (err?.message || "알 수 없는 오류"));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 relative overflow-hidden">
      
      {/* 
        This is the beautifully formatted hidden report component 
        that html2canvas will target for the PDF. Hidden safely.
      */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <PDFReport data={data} ref={reportRef} />
      </div>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-paperfolio-text md:text-4xl">
          자동화 및 기술교육<br />사전 질의응답지
        </h1>
        <p className="text-paperfolio-text-muted">
          이번 과정을 최대한 실질적으로 구성하기 위해 간단한 사전 질의응답을 부탁드립니다.<br />
          답변 주신 내용을 바탕으로 대표님 상황에 맞는 커리큘럼을 정리해보겠습니다.
        </p>
      </div>

      <SectionTitle title="1. 현재 가장 해결하고 싶은 문제" />
      
      <QuestionBlock title="Q1. 지금 가장 시간을 많이 쓰고 있는 작업은 무엇인가요? (1~2개 선택)">
        {["업무자동화", "뉴스레터 만들기", "블로그 글 작성", "쓰레드 / SNS 글 작성", "이미지 만들기", "홈페이지 / 포트폴리오 정리", "자료 수집 및 정리", "콘텐츠를 꾸준히 올리는 운영 루틴 만들기", "기타"].map((opt) => (
          <label key={opt} className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue focus:ring-paperfolio-accent-blue"
                checked={data.q1.includes(opt)} onChange={() => handleCheckbox("q1", opt)} />
              <span className="text-paperfolio-text font-medium">{opt}</span>
            </div>
            {opt === "기타" && data.q1.includes("기타") && (
              <input type="text" className="ml-7 mt-1 w-full max-w-sm rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white text-sm"
                placeholder="어떤 작업인지 적어주세요" value={data.q1_other} onChange={(e) => handleText("q1_other", e.target.value)} />
            )}
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q2. 이번 자문에서 가장 먼저 해결하고 싶은 1순위는 무엇인가요? (1개 선택)">
        {["GPT로 글을 더 빨리 쓰는 방법", "글 + 이미지까지 함께 만드는 방법", "반복 가능한 반자동화 흐름 익히기", "홈페이지 / 포트폴리오 정리 방식 배우기", "AI를 활용한 문제해결 방식 자체를 배우기", "기타"].map((opt) => (
          <label key={opt} className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <input type="radio" name="q2" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue focus:ring-paperfolio-accent-blue"
                checked={data.q2 === opt} onChange={() => handleRadio("q2", opt)} />
              <span className="text-paperfolio-text font-medium">{opt}</span>
            </div>
            {opt === "기타" && data.q2 === "기타" && (
              <input type="text" className="ml-7 mt-1 w-full max-w-sm rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white text-sm"
                placeholder="해결하고 싶은 과제를 적어주세요" value={data.q2_other} onChange={(e) => handleText("q2_other", e.target.value)} />
            )}
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q3. 아래 항목의 우선순위를 적어주세요. (1순위~4순위)">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Object.entries({ newsletter: "뉴스레터", blog: "블로그/SNS", image: "이미지 제작", portfolio: "홈페이지 등" }).map(([key, label]) => (
            <div key={key}>
              <label className="mb-2 block text-sm font-semibold text-paperfolio-text-muted">{label}</label>
              <input type="number" min="1" max="4"
                className="w-full rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
                value={data.q3[key as keyof typeof data.q3]}
                onChange={(e) => setData({ ...data, q3: { ...data.q3, [key]: e.target.value } })}
              />
            </div>
          ))}
        </div>
      </QuestionBlock>

      <SectionTitle title="2. 이번 자문에서 원하는 방향" />

      <QuestionBlock title="Q4. 이번 자문은 어느 쪽에 더 가깝게 진행되면 좋으실까요? (1개 선택)">
        {["하나라도 실제 결과물을 만들어보고 싶다", "제가 직접 이해하고 나중에 혼자 할 수 있게 배우고 싶다", "결과물도 만들고, 방법도 배우고 싶다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q4" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q4 === opt} onChange={() => handleRadio("q4", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q5. 이번 자문이 끝났을 때 꼭 남기고 싶은 결과물 1개는 무엇인가요? (예: 뉴스레터 초안 1개 등)">
        <input type="text" className="w-full rounded-lg border border-paperfolio-line bg-gray-50 px-4 py-3 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
          placeholder="답변을 자유롭게 입력해주세요" value={data.q5} onChange={(e) => handleText("q5", e.target.value)} />
      </QuestionBlock>

      <QuestionBlock title="Q6. 이번 자문을 통해 가장 기대하는 변화는 무엇인가요? (1~2개 선택)">
        {["콘텐츠 작성 시간이 줄었으면 좋겠다", "혼자서도 꾸준히 운영할 수 있었으면 좋겠다", "GPT를 실무에 제대로 써보고 싶다", "코딩 / 자동화에 대한 두려움을 줄이고 싶다", "내 서비스 고도화에 연결하고 싶다", "향후 교육 프로그램으로도 확장해보고 싶다", "기타"].map((opt) => (
          <label key={opt} className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
                checked={data.q6.includes(opt)} onChange={() => handleCheckbox("q6", opt)} />
              <span className="text-paperfolio-text font-medium">{opt}</span>
            </div>
            {opt === "기타" && data.q6.includes("기타") && (
              <input type="text" className="ml-7 mt-1 w-full max-w-sm rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white text-sm"
                placeholder="기대하시는 변화를 적어주세요" value={data.q6_other} onChange={(e) => handleText("q6_other", e.target.value)} />
            )}
          </label>
        ))}
      </QuestionBlock>

      <SectionTitle title="3. 현재 사용 가능한 도구와 환경" />

      <QuestionBlock title="Q7. 현재 사용 중인 도구가 있으신가요?">
        {["ChatGPT", "Claude", "Notion", "Canva", "Buffer", "Stibee", "홈페이지 관리자 페이지", "기타"].map((opt) => (
          <label key={opt} className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
                checked={data.q7.includes(opt)} onChange={() => handleCheckbox("q7", opt)} />
              <span className="text-paperfolio-text font-medium">{opt}</span>
            </div>
            {opt === "기타" && data.q7.includes("기타") && (
              <input type="text" className="ml-7 mt-1 w-full max-w-sm rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white text-sm"
                placeholder="사용 중이신 다른 도구를 적어주세요" value={data.q7_other} onChange={(e) => handleText("q7_other", e.target.value)} />
            )}
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q8. 유료로 사용 중인 도구가 있으신가요? 있다면 적어주세요.">
        <input type="text" className="w-full rounded-lg border border-paperfolio-line bg-gray-50 px-4 py-3 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
          placeholder="유료 도구를 적어주세요" value={data.q8} onChange={(e) => handleText("q8", e.target.value)} />
      </QuestionBlock>

      <QuestionBlock title="Q9. 실습 환경은 어떤 것이 편하신가요? (1개 선택)">
        {["설치 없이 브라우저에서 하는 방식이 편하다", "간단한 설치형 도구는 괜찮다", "둘 다 가능하다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q9" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q9 === opt} onChange={() => handleRadio("q9", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q10. 사용 중인 컴퓨터 환경은 무엇인가요?">
        {["윈도우", "맥", "둘 다 있음"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q10" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q10 === opt} onChange={() => handleRadio("q10", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q11. 새로운 도구를 배우는 데 대한 현재 체감 난이도는 어느 정도인가요? (1개 선택)">
        {["거의 처음이라 아주 쉽게 설명해주시면 좋겠다", "기본 사용은 가능하지만 실무 연결이 어렵다", "어느 정도 익숙해서 응용 위주로 배우고 싶다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q11" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q11 === opt} onChange={() => handleRadio("q11", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <SectionTitle title="4. 콘텐츠와 브랜드 방향" />

      <QuestionBlock title="Q12. 대표님이 가장 자주 만들고 싶은 콘텐츠 유형은 무엇인가요? (1~2개 선택)">
        {["정보성 글", "교육 후기", "트렌드 큐레이션", "브랜드 홍보형 콘텐츠", "수강생 사례 / 포트폴리오 소개", "짧은 SNS용 글", "기타"].map((opt) => (
          <label key={opt} className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
                checked={data.q12.includes(opt)} onChange={() => handleCheckbox("q12", opt)} />
              <span className="text-paperfolio-text font-medium">{opt}</span>
            </div>
            {opt === "기타" && data.q12.includes("기타") && (
              <input type="text" className="ml-7 mt-1 w-full max-w-sm rounded-lg border border-paperfolio-line bg-gray-50 px-3 py-2 outline-none focus:border-paperfolio-accent-blue focus:bg-white text-sm"
                placeholder="콘텐츠 유형을 적어주세요" value={data.q12_other} onChange={(e) => handleText("q12_other", e.target.value)} />
            )}
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q13. 가장 자주 다루고 싶은 주제 3가지를 적어주세요.">
        <textarea className="h-28 w-full rounded-lg border border-paperfolio-line bg-gray-50 p-4 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
          placeholder="주제 3가지를 편하게 적어주세요" value={data.q13} onChange={(e) => handleText("q13", e.target.value)} />
      </QuestionBlock>

      <QuestionBlock title="Q14. 콘텐츠 톤은 어떤 느낌이 좋으신가요? (1~2개 선택)">
        {["전문적이고 신뢰감 있는 톤", "친근하고 쉽게 읽히는 톤", "감각적이고 브랜드적인 톤", "교육용 차분한 톤", "상황에 따라 다르게 쓰고 싶다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
              checked={data.q14.includes(opt)} onChange={() => handleCheckbox("q14", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q15. 참고하고 있는 브랜드 / 계정 / 사이트가 있다면 적어주세요.">
        <input type="text" className="w-full rounded-lg border border-paperfolio-line bg-gray-50 px-4 py-3 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
          placeholder="계정이나 사이트 URL 등" value={data.q15} onChange={(e) => handleText("q15", e.target.value)} />
      </QuestionBlock>

      <SectionTitle title="5. 이미지 제작 관련" />

      <QuestionBlock title="Q16. 이번 자문에서 이미지 제작도 함께 다루고 싶으신가요?">
        {["예", "아니오", "가능하면 포함하고 싶다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q16" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q16 === opt} onChange={() => handleRadio("q16", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q17. 이미지가 필요하다면 어떤 용도가 가장 우선일까요? (1~2개 선택)">
        {["뉴스레터 대표 이미지", "블로그 삽입 이미지", "쓰레드 / 인스타용 홍보 이미지", "카드뉴스형 이미지", "브랜드 무드 이미지", "교육 홍보용 이미지"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
              checked={data.q17.includes(opt)} onChange={() => handleCheckbox("q17", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q18. 이미지 스타일은 어느 쪽이 더 좋으신가요?">
        {["실사 느낌", "감성적 / 무드형", "브랜드 홍보형", "패션 비주얼 중심", "아직 잘 모르겠다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q18" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q18 === opt} onChange={() => handleRadio("q18", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q19. 이미지도 직접 프롬프트를 써보며 배우고 싶으신가요?">
        {["예, 직접 해보고 싶다", "예시를 먼저 보고 수정하는 방식이 좋다", "일단 결과물이 먼저 보이면 좋겠다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q19" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q19 === opt} onChange={() => handleRadio("q19", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <SectionTitle title="6. 자동화 / 바이브코딩 관련" />

      <QuestionBlock title="Q20. 아래 도구/방식 중 이번 자문에서 가장 궁금한 것은 무엇인가요? (1~2개 선택)">
        {["GPT를 활용한 글쓰기", "이미지 생성 도구 활용", "n8n 같은 자동화 도구", "OpenClaw 같은 AI 작업 흐름", "바이브코딩 방식 자체", "아직 도구보다 전체 흐름이 궁금하다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-paperfolio-accent-blue"
              checked={data.q20.includes(opt)} onChange={() => handleCheckbox("q20", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q21. 자동화는 어느 수준을 기대하고 계신가요? (1개 선택)">
        {["완전 자동화보다 반자동화면 충분하다", "초안까지만 자동으로 나오면 좋겠다", "글 + 이미지까지 어느 정도 자동화되면 좋겠다", "아직 자동화보다 GPT 활용부터 배우고 싶다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q21" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q21 === opt} onChange={() => handleRadio("q21", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q22. 코딩/자동화 학습 의향은 어느 정도 있으신가요?">
        {["어렵더라도 조금씩 배워보고 싶다", "너무 어렵지 않은 범위까지만 배우고 싶다", "코딩보다는 실무 활용 위주가 좋다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q22" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q22 === opt} onChange={() => handleRadio("q22", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <SectionTitle title="7. 과정 종료 시 성공 기준" />

      <QuestionBlock title="Q23. 이번 과정이 끝났을 때 가장 만족스러울 결과는 무엇인가요? (1개 선택)">
        {["콘텐츠 1건 완성", "글 + 이미지 1세트 완성", "반복 가능한 작업 루틴 정리", "GPT로 혼자 초안을 만들 수 있는 상태", "자동화 구조를 이해하고 조금 수정할 수 있는 상태"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q23" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q23 === opt} onChange={() => handleRadio("q23", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q24. 교육 후 한 달 안에 실제로 어느 정도 활용해보고 싶으신가요?">
        {["주 1회 정도", "월 2회 정도", "월 1회 정도", "아직 테스트 수준이면 좋겠다"].map((opt) => (
          <label key={opt} className="flex items-center gap-3">
            <input type="radio" name="q24" className="h-4 w-4 border-gray-300 text-paperfolio-accent-blue"
              checked={data.q24 === opt} onChange={() => handleRadio("q24", opt)} />
            <span className="text-paperfolio-text font-medium">{opt}</span>
          </label>
        ))}
      </QuestionBlock>

      <QuestionBlock title="Q25. 이번 자문에서 가장 걱정되는 점이 있다면 적어주세요.">
        <textarea className="h-28 w-full rounded-lg border border-paperfolio-line bg-gray-50 p-4 outline-none focus:border-paperfolio-accent-blue focus:bg-white transition-colors"
          placeholder="예: 따라가지 못할까 걱정, 도구가 너무 많을까 걱정 등" value={data.q25} onChange={(e) => handleText("q25", e.target.value)} />
      </QuestionBlock>

      <div className="mt-14 flex flex-col items-center gap-4 border-t border-paperfolio-line pt-10 sm:flex-row sm:justify-center">
        <button
          onClick={copyToClipboard}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-paperfolio-line bg-white px-6 py-4 font-semibold text-paperfolio-text shadow-sm hover:bg-gray-50 transition-colors sm:w-auto text-sm"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "복사 완료!" : "텍스트 복사만"}
        </button>
        
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-paperfolio-line bg-white px-6 py-4 font-semibold text-paperfolio-text shadow-sm hover:bg-gray-50 disabled:opacity-50 transition-all sm:w-auto text-sm"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? "생성 중..." : "PDF로만 저장"}
        </button>

        <button
          onClick={submitSurvey}
          disabled={isSending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-paperfolio-text px-8 py-4 font-semibold text-white shadow-md hover:bg-paperfolio-accent-blue disabled:opacity-50 transition-all sm:w-auto"
        >
          <Send className="h-5 w-5" />
          {isSending ? "제출 중..." : "응답 제출 (자동 전달)"}
        </button>
      </div>
    </div>
  );
}
