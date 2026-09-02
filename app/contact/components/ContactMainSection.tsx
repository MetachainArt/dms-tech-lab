"use client";

import { FormEvent, useMemo, useState } from "react";

interface AssessmentPrefill {
  source?: string;
  assessmentScore?: string;
  assessmentTier?: string;
  assessmentIndustry?: string;
  assessmentSummary?: string;
  assessmentRecommendation?: string;
}

interface ContactMainSectionProps {
  assessmentPrefill?: AssessmentPrefill;
}

const inquiryTypes = ["서비스 문의", "SaaS·앱 제휴", "3D·디자인 프로젝트", "자동화·개발 의뢰", "교육 및 워크숍", "기타"];
const budgetRanges = ["500만원 미만", "500만원 ~ 1,000만원", "1,000만원 ~ 3,000만원", "3,000만원 ~ 5,000만원", "5,000만원 이상", "미정 / 협의 필요"];

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  budget: string;
  timeline: string;
  message: string;
}

function buildPrefill(assessmentPrefill?: AssessmentPrefill) {
  if (assessmentPrefill?.source !== "assessment") {
    return { inquiryType: "", message: "" };
  }

  const { assessmentScore = "", assessmentTier = "", assessmentIndustry = "", assessmentSummary = "", assessmentRecommendation = "" } = assessmentPrefill;

  if (!assessmentScore && !assessmentTier && !assessmentIndustry && !assessmentSummary && !assessmentRecommendation) {
    return { inquiryType: "", message: "" };
  }

  const summaryLines = [
    "[자동화 우선순위 진단 결과]",
    assessmentScore ? `- 점수: ${assessmentScore}` : "",
    assessmentTier ? `- 단계: ${assessmentTier}` : "",
    assessmentIndustry ? `- 업종: ${assessmentIndustry}` : "",
    assessmentSummary ? `- 요약: ${assessmentSummary}` : "",
    assessmentRecommendation ? `- 권장 시나리오: ${assessmentRecommendation}` : "",
    "",
    "위 진단 결과를 바탕으로 초기 도입 범위와 예상 ROI를 상담받고 싶습니다.",
  ].filter(Boolean);

  return {
    inquiryType: "자동화·개발 의뢰",
    message: summaryLines.join("\n"),
  };
}

export default function ContactMainSection({ assessmentPrefill }: ContactMainSectionProps) {
  const prefill = useMemo(() => buildPrefill(assessmentPrefill), [assessmentPrefill]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormState>(() => ({
    name: "",
    email: "",
    company: "",
    inquiryType: prefill.inquiryType,
    budget: "",
    timeline: "",
    message: prefill.message,
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: { error?: string } = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "문의 처리 중 오류가 발생했습니다.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: prefill.inquiryType,
        budget: "",
        timeline: "",
        message: prefill.message,
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "문의 처리 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] lg:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Contact info</p>
              <h2 className="mt-4 paperfolio-h2">이렇게 이야기할 수 있습니다</h2>
            </div>
            <div className="space-y-5">
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">이메일</p>
                <a href="mailto:reedo.dev@dmssolution.co.kr" className="mt-3 block text-lg font-semibold text-paperfolio-text hover:text-paperfolio-accent-blue">reedo.dev@dmssolution.co.kr</a>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">응답</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">영업일 기준 1~2일 내 답장</p>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">주로 받는 문의</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <span key={type} className="rounded-full border border-paperfolio-line bg-white px-3 py-1.5 text-sm text-paperfolio-text-muted">{type}</span>
                  ))}
                </div>
              </div>
            </div>
            <a href="mailto:reedo.dev@dmssolution.co.kr" className="inline-flex w-full items-center justify-center rounded-full bg-paperfolio-text px-6 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue">이메일로 바로 문의하기</a>
          </div>
        </div>

        <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] lg:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">Form</p>
            <h2 className="paperfolio-h2">현재 필요한 문제를 적어 주세요</h2>
            <p className="text-sm leading-7 text-paperfolio-text-muted">목적, 현재 상황, 참고하고 싶은 사례가 있다면 함께 적어주시면 더 정확하게 답할 수 있습니다.</p>
          </div>

          {status === "success" ? (
            <div className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface px-6 py-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">완료</p>
              <h3 className="mt-4 text-2xl font-semibold text-paperfolio-text">문의가 정상적으로 접수되었습니다.</h3>
              <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">남겨주신 내용을 확인한 뒤 영업일 기준 1~2일 안에 답장드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-paperfolio-text">이름 *</label>
                  <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="홍길동" className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-paperfolio-text">이메일 *</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="name@email.com" className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-paperfolio-text">회사 / 팀</label>
                  <input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} placeholder="선택 입력" className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-paperfolio-text">희망 일정</label>
                  <input id="timeline" name="timeline" type="text" value={formData.timeline} onChange={handleChange} placeholder="예: 4월 안, 최대한 빨리" className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-paperfolio-text">문의 유형 *</label>
                  <select id="inquiryType" name="inquiryType" required value={formData.inquiryType} onChange={handleChange} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text focus:border-paperfolio-accent-blue focus:outline-none">
                    <option value="">선택해 주세요</option>
                    {inquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-paperfolio-text">예산 범위</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text focus:border-paperfolio-accent-blue focus:outline-none">
                    <option value="">선택 입력</option>
                    {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-paperfolio-text">문의 내용 *</label>
                <textarea id="message" name="message" rows={7} required value={formData.message} onChange={handleChange} placeholder="지금 겪고 있는 문제, 원하는 결과, 참고 사례 등을 적어 주세요." className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
              </div>
              <div className="rounded-[20px] border border-paperfolio-line bg-paperfolio-surface px-4 py-4 text-sm leading-7 text-paperfolio-text-muted">입력하신 정보는 문의 답변을 위해서만 사용하며, 답변 완료 후 안전하게 관리합니다.</div>
              {status === "error" && errorMessage ? <p className="text-sm font-medium text-[#b25072]" role="alert">{errorMessage}</p> : null}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button type="submit" disabled={status === "loading"} className="inline-flex flex-1 items-center justify-center rounded-full bg-paperfolio-text px-6 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue disabled:cursor-not-allowed disabled:opacity-60">{status === "loading" ? "보내는 중..." : "문의 보내기"}</button>
                <a href="mailto:reedo.dev@dmssolution.co.kr" className="inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-white px-6 py-4 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-coral/40 hover:text-paperfolio-accent-coral">이메일로 보내기</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
