"use client";

import { useMemo, useRef, useState, forwardRef } from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Download, Send } from "lucide-react";

import {
  getVisibleSections,
  OTHER_INQUIRY_LABEL,
  resolveTracks,
  type SurveyQuestion,
  type SurveySection,
} from "@/constants/survey-questions";

type AnswerValue = string | string[] | Record<string, string>;
type Answers = Record<string, AnswerValue>;

const asArray = (value: AnswerValue | undefined): string[] => (Array.isArray(value) ? value : []);
const asText = (value: AnswerValue | undefined): string => (typeof value === "string" ? value : "");
const asRank = (value: AnswerValue | undefined): Record<string, string> =>
  value && !Array.isArray(value) && typeof value === "object" ? value : {};

/** 한 문항의 답을 사람이 읽는 한 줄로 만든다. "기타" 는 입력값을 괄호로 붙인다. */
function formatAnswer(question: SurveyQuestion, answers: Answers, others: Record<string, string>): string {
  const raw = answers[question.id];
  const otherText = others[question.id]?.trim();

  const withOther = (label: string) =>
    label === "기타" && otherText ? `기타(${otherText})` : label;

  if (question.type === "rank") {
    const rank = asRank(raw);
    const parts = (question.rankItems ?? [])
      .map((item) => `${item.label} ${rank[item.key] || "-"}순위`)
      .join(", ");
    return parts || "-";
  }

  if (question.type === "checkbox") {
    const list = asArray(raw).map(withOther);
    return list.length > 0 ? list.join(", ") : "-";
  }

  const text = asText(raw);
  return text ? withOther(text) : "-";
}

// ---------------------------------------------------------
// PDF 리포트 (화면 밖에서 렌더링되어 html2canvas 가 캡처한다)
// ---------------------------------------------------------
const PDFReport = forwardRef<
  HTMLDivElement,
  { sections: SurveySection[]; answers: Answers; others: Record<string, string> }
>(({ sections, answers, others }, ref) => {
  const basics = sections.find((section) => section.id === "basics");
  const rest = sections.filter((section) => section.id !== "basics");

  return (
    <div
      ref={ref}
      className="w-[900px] p-14"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, sans-serif", backgroundColor: "#ffffff", color: "#1f2937" }}
    >
      <div className="mb-10 flex items-end justify-between border-b-[3px] py-6" style={{ borderColor: "#111827" }}>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest" style={{ color: "#2f5d7c" }}>
            {asText(answers.company) || "CONSULTING PREPARATION"}
          </p>
          <h1 className="mb-2 text-4xl font-extrabold tracking-tight" style={{ color: "#111827" }}>
            사전 질의응답 리포트
          </h1>
          <p className="font-medium" style={{ color: "#6b7280" }}>
            {formatAnswer({ id: "q0", label: "", type: "checkbox" }, answers, others)}
          </p>
        </div>
        <p className="text-sm font-medium" style={{ color: "#9ca3af" }}>
          {new Date().toLocaleDateString("ko-KR")}
        </p>
      </div>

      {basics && (
        <div className="mb-10 rounded-xl p-6" style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}>
          <h2 className="mb-4 text-[16px] font-bold" style={{ color: "#1f2937" }}>
            신청자 정보
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {basics.questions.map((question) => (
              <div key={question.id} className="mb-2">
                <p className="mb-1 text-[13px] font-semibold" style={{ color: "#9ca3af" }}>
                  {question.label}
                </p>
                <p className="break-keep text-[15px] font-medium leading-snug" style={{ color: "#111827" }}>
                  {formatAnswer(question, answers, others)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-x-14 gap-y-2">
        {rest.map((section) => (
          <section key={section.id} className="mb-6 break-inside-avoid">
            <h2 className="mb-5 border-b pb-2 text-[18px] font-bold" style={{ borderColor: "#e5e7eb", color: "#1f2937" }}>
              {section.title}
            </h2>
            {section.questions.map((question) => (
              <div key={question.id} className="mb-5 break-inside-avoid">
                <p className="mb-1 text-[13px] font-semibold" style={{ color: "#9ca3af" }}>
                  {question.label}
                </p>
                <p className="break-keep text-[15px] font-medium leading-snug" style={{ color: "#111827" }}>
                  {formatAnswer(question, answers, others)}
                </p>
              </div>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center border-t pt-6 text-center" style={{ borderColor: "#e5e7eb" }}>
        <div className="mb-4 h-1 w-12 rounded-full" style={{ backgroundColor: "#111827" }} />
        <p className="text-[12px] font-bold uppercase tracking-widest" style={{ color: "#9ca3af" }}>
          DMS Solution · Consulting Preparation
        </p>
      </div>
    </div>
  );
});
PDFReport.displayName = "PDFReport";

// ---------------------------------------------------------
// 메인 컴포넌트
// ---------------------------------------------------------
export default function ConsultingSurveyForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [others, setOthers] = useState<Record<string, string>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const tracks = useMemo(() => resolveTracks(asArray(answers.q0)), [answers.q0]);
  const sections = useMemo(() => getVisibleSections(tracks), [tracks]);

  // 문의 유형을 바꾸면 보이는 섹션 수가 줄 수 있으므로 범위를 맞춰준다.
  const safeStep = Math.min(stepIndex, sections.length - 1);
  const section = sections[safeStep];
  const isLast = safeStep === sections.length - 1;

  const setAnswer = (id: string, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setError(null);
  };

  const toggleCheckbox = (id: string, option: string) => {
    const current = asArray(answers[id]);
    setAnswer(id, current.includes(option) ? current.filter((v) => v !== option) : [...current, option]);
  };

  /** 현재 단계에서 필수 항목이 채워졌는지 검사한다. */
  const validateStep = (): string | null => {
    for (const question of section.questions) {
      if (!question.required) continue;

      const value = answers[question.id];
      const empty = question.type === "checkbox" ? asArray(value).length === 0 : !asText(value).trim();
      if (empty) return `"${question.label}" 항목을 입력해 주세요.`;

      if (question.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(asText(value))) {
        return "이메일 형식을 확인해 주세요.";
      }
    }
    return null;
  };

  const goNext = () => {
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStepIndex(safeStep + 1);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goPrev = () => {
    setError(null);
    setStepIndex(Math.max(0, safeStep - 1));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buildResultText = () =>
    sections
      .map((sec) => {
        const lines = sec.questions
          .map((question) => `- ${question.label}: ${formatAnswer(question, answers, others)}`)
          .join("\n");
        return `[${sec.title}]\n${lines}`;
      })
      .join("\n\n");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(buildResultText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("복사에 실패했습니다. 브라우저 권한을 확인해 주세요.");
    }
  };

  const submitSurvey = async () => {
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }

    setIsSending(true);
    setError(null);
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: buildResultText() }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error?.message || json.error || "서버 응답 오류");
      setSubmitted(true);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      setError(`전송에 실패했습니다: ${err instanceof Error ? err.message : "알 수 없는 오류"}`);
    } finally {
      setIsSending(false);
    }
  };

  const downloadPDF = async () => {
    setIsGenerating(true);
    try {
      const element = reportRef.current;
      if (!element) throw new Error("리포트 요소를 찾을 수 없습니다.");

      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      const imgData = canvas.toDataURL("image/png");

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("사전질의응답.pdf");
    } catch (err) {
      setError(`PDF 생성 중 오류: ${err instanceof Error ? err.message : "알 수 없는 오류"}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // ── 개별 문항 렌더러 ────────────────────────────────────
  const renderQuestion = (question: SurveyQuestion) => {
    const inputClass =
      "w-full rounded-lg border border-paperfolio-line bg-paperfolio-bg/60 px-4 py-3 text-paperfolio-text outline-none transition-colors focus:border-paperfolio-accent-blue focus:bg-white";

    if (question.type === "text") {
      return (
        <input
          type={question.id === "email" ? "email" : "text"}
          className={inputClass}
          placeholder={question.placeholder}
          value={asText(answers[question.id])}
          onChange={(e) => setAnswer(question.id, e.target.value)}
        />
      );
    }

    if (question.type === "textarea") {
      return (
        <textarea
          className={`${inputClass} h-28 resize-none`}
          placeholder={question.placeholder}
          value={asText(answers[question.id])}
          onChange={(e) => setAnswer(question.id, e.target.value)}
        />
      );
    }

    if (question.type === "rank") {
      const rank = asRank(answers[question.id]);
      return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(question.rankItems ?? []).map((item) => (
            <div key={item.key}>
              <label className="mb-2 block text-sm font-semibold text-paperfolio-text-muted">{item.label}</label>
              <input
                type="number"
                min={1}
                max={question.rankItems?.length ?? 4}
                className={inputClass}
                value={rank[item.key] ?? ""}
                onChange={(e) => setAnswer(question.id, { ...rank, [item.key]: e.target.value })}
              />
            </div>
          ))}
        </div>
      );
    }

    const isCheckbox = question.type === "checkbox";
    const selected = isCheckbox ? asArray(answers[question.id]) : [asText(answers[question.id])];
    const overLimit = isCheckbox && question.maxSelect ? selected.length > question.maxSelect : false;

    return (
      <div className="space-y-1">
        {(question.options ?? []).map((option) => {
          const checked = selected.includes(option);
          return (
            <div key={option}>
              <label className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-paperfolio-bg">
                <input
                  type={isCheckbox ? "checkbox" : "radio"}
                  name={question.id}
                  className="h-4 w-4 shrink-0 border-gray-300 text-paperfolio-accent-blue focus:ring-paperfolio-accent-blue"
                  checked={checked}
                  onChange={() => (isCheckbox ? toggleCheckbox(question.id, option) : setAnswer(question.id, option))}
                />
                <span className="text-[15px] leading-6 text-paperfolio-text">{option}</span>
              </label>

              {question.allowOther && option === "기타" && checked && (
                <input
                  type="text"
                  className={`${inputClass} mt-1 ml-10 max-w-md py-2 text-sm`}
                  placeholder="직접 적어주세요"
                  value={others[question.id] ?? ""}
                  onChange={(e) => setOthers((prev) => ({ ...prev, [question.id]: e.target.value }))}
                />
              )}
            </div>
          );
        })}

        {overLimit && (
          <p className="pt-1 text-xs text-paperfolio-accent-coral">
            {question.maxSelect}개까지 고르시면 더 정확하게 준비할 수 있습니다.
          </p>
        )}
      </div>
    );
  };

  // ── 제출 완료 화면 ──────────────────────────────────────
  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-paperfolio-accent-blue/10">
          <Check className="h-7 w-7 text-paperfolio-accent-blue" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-paperfolio-text">보내주셔서 감사합니다</h1>
        <p className="mb-10 leading-8 text-paperfolio-text-muted">
          내용을 확인하고 <span className="font-semibold text-paperfolio-text">2영업일 안에</span> 회신드리겠습니다.
          <br />
          답변 내용을 파일로 남기고 싶으시면 아래에서 받으실 수 있습니다.
        </p>
        <div className="absolute -left-[9999px] -top-[9999px]">
          <PDFReport sections={sections} answers={answers} others={others} ref={reportRef} />
        </div>
        <button
          onClick={downloadPDF}
          disabled={isGenerating}
          className="inline-flex items-center gap-2 rounded-xl border border-paperfolio-line bg-white px-6 py-3.5 text-sm font-semibold text-paperfolio-text shadow-sm transition-colors hover:bg-paperfolio-bg disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isGenerating ? "생성 중..." : "PDF로 저장"}
        </button>
      </div>
    );
  }

  const progress = ((safeStep + 1) / sections.length) * 100;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div ref={topRef} className="scroll-mt-28" />

      <div className="absolute -left-[9999px] -top-[9999px]">
        <PDFReport sections={sections} answers={answers} others={others} ref={reportRef} />
      </div>

      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">
          DMS Solution
        </p>
        <h1 className="mb-4 text-3xl font-bold text-paperfolio-text md:text-4xl">사전 질의응답</h1>
        <p className="leading-7 text-paperfolio-text-muted">
          답변 주신 내용을 바탕으로 상황에 맞는 제안을 정리해 드립니다.
          <br />
          선택하신 문의 유형에 해당하는 질문만 보여드리니 부담 없이 진행해 주세요.
        </p>
      </div>

      {/* 진행 표시 */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-paperfolio-text-muted">
          <span>
            {safeStep + 1} / {sections.length} · {section.shortTitle}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-paperfolio-line">
          <div
            className="h-full rounded-full bg-paperfolio-accent-blue transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 현재 섹션 */}
      <div className="rounded-[28px] border border-paperfolio-line bg-white p-7 shadow-[0_16px_60px_rgba(31,41,55,0.05)] md:p-9">
        <h2 className="text-2xl font-bold tracking-tight text-paperfolio-text">{section.title}</h2>
        {section.intro && <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{section.intro}</p>}

        <div className="mt-8 space-y-9">
          {section.questions.map((question) => (
            <div key={question.id}>
              <label className="block text-[15px] font-semibold text-paperfolio-text">
                {question.label}
                {question.required && <span className="ml-1 text-paperfolio-accent-coral">*</span>}
              </label>
              {question.help && (
                <p className="mt-1 text-xs text-paperfolio-text-muted">{question.help}</p>
              )}
              <div className="mt-3">{renderQuestion(question)}</div>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-paperfolio-accent-coral/30 bg-paperfolio-accent-coral/5 px-4 py-3 text-sm text-paperfolio-accent-coral">
          {error}
        </p>
      )}

      {/* 이동 버튼 */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={safeStep === 0}
          className="inline-flex items-center gap-2 rounded-xl border border-paperfolio-line bg-white px-5 py-3.5 text-sm font-semibold text-paperfolio-text transition-colors hover:bg-paperfolio-bg disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          이전
        </button>

        {isLast ? (
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-paperfolio-line bg-white px-5 py-3.5 text-sm font-semibold text-paperfolio-text transition-colors hover:bg-paperfolio-bg"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "복사 완료" : "텍스트 복사"}
            </button>
            <button
              onClick={submitSurvey}
              disabled={isSending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-paperfolio-text px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-paperfolio-accent-blue disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isSending ? "보내는 중..." : "보내기"}
            </button>
          </div>
        ) : (
          <button
            onClick={goNext}
            className="inline-flex items-center gap-2 rounded-xl bg-paperfolio-text px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-paperfolio-accent-blue"
          >
            다음
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {safeStep === 1 && asArray(answers.q0).includes(OTHER_INQUIRY_LABEL) && asArray(answers.q0).length === 1 && (
        <p className="mt-4 text-center text-xs text-paperfolio-text-muted">
          기타만 선택하신 경우 공통 질문만 안내됩니다. 자세한 내용은 위 입력칸에 적어주세요.
        </p>
      )}
    </div>
  );
}
