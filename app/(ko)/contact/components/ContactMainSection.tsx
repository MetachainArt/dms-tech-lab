"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

import { contactCopy, type ContactLocale } from "@/lib/contact-copy";

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
  locale?: ContactLocale;
}

const inquiryTypes = contactCopy.ko.inquiryTypes;
const budgetRanges = contactCopy.ko.budgetRanges;

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  budget: string;
  timeline: string;
  message: string;
}

function buildPrefill(assessmentPrefill: AssessmentPrefill | undefined, locale: ContactLocale) {
  const copy = contactCopy[locale];
  if (assessmentPrefill?.source !== "assessment") {
    return { inquiryType: "", message: "" };
  }

  const { assessmentScore = "", assessmentTier = "", assessmentIndustry = "", assessmentSummary = "", assessmentRecommendation = "" } = assessmentPrefill;

  if (!assessmentScore && !assessmentTier && !assessmentIndustry && !assessmentSummary && !assessmentRecommendation) {
    return { inquiryType: "", message: "" };
  }

  const summaryLines = [
    copy.assessmentTitle,
    assessmentScore ? `- ${copy.score}: ${assessmentScore}` : "",
    assessmentTier ? `- ${copy.tier}: ${assessmentTier}` : "",
    assessmentIndustry ? `- ${copy.industry}: ${assessmentIndustry}` : "",
    assessmentSummary ? `- ${copy.summary}: ${assessmentSummary}` : "",
    assessmentRecommendation ? `- ${copy.recommendation}: ${assessmentRecommendation}` : "",
    "",
    copy.assessmentRequest,
  ].filter(Boolean);

  return {
    inquiryType: "자동화·개발 의뢰",
    message: summaryLines.join("\n"),
  };
}

export default function ContactMainSection({ assessmentPrefill, locale = "ko" }: ContactMainSectionProps) {
  const copy = contactCopy[locale];
  const prefill = useMemo(() => buildPrefill(assessmentPrefill, locale), [assessmentPrefill, locale]);
  const submitting = useRef(false);
  const [confirmationEmailSent, setConfirmationEmailSent] = useState(true);
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
    if (submitting.current) return;
    if (!formData.name.trim() || !formData.message.trim() || !formData.email.trim() || !formData.inquiryType) {
      setStatus("error");
      setErrorMessage(copy.requiredFields);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage(copy.invalidEmail);
      return;
    }
    submitting.current = true;
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      const result: { error?: string; success?: boolean; confirmationEmailSent?: boolean } = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || copy.failure);
      }

      setConfirmationEmailSent(result.confirmationEmailSent !== false);
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
      setErrorMessage(error instanceof Error && !(error instanceof TypeError) && !(error instanceof SyntaxError) ? error.message : copy.failure);
    } finally {
      submitting.current = false;
    }
  };

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] lg:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">Contact info</p>
              <h2 className="mt-4 paperfolio-h2">{copy.infoTitle}</h2>
            </div>
            <div className="space-y-5">
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">{copy.email}</p>
                <a href="mailto:dms@dmssolution.co.kr" className="mt-3 block text-lg font-semibold text-paperfolio-text hover:text-paperfolio-accent-blue">dms@dmssolution.co.kr</a>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">{copy.response}</p>
                <p className="mt-3 text-lg font-semibold text-paperfolio-text">{copy.responseTime}</p>
              </div>
              <div className="rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paperfolio-text-muted">{copy.topics}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {copy.inquiryTypes.map((type) => (
                    <span key={type} className="rounded-full border border-paperfolio-line bg-white px-3 py-1.5 text-sm text-paperfolio-text-muted">{type}</span>
                  ))}
                </div>
              </div>
            </div>
            <a href="mailto:dms@dmssolution.co.kr" className="inline-flex w-full items-center justify-center rounded-full bg-paperfolio-text px-6 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue">{copy.directEmail}</a>
          </div>
        </div>

        <div className="rounded-[36px] border border-paperfolio-line bg-white p-8 shadow-[0_20px_70px_rgba(31,41,55,0.06)] lg:p-10">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-coral">Form</p>
            <h2 className="paperfolio-h2">{copy.formTitle}</h2>
            <p className="text-sm leading-7 text-paperfolio-text-muted">{copy.formDescription}</p>
          </div>

          {status === "success" ? (
            <div role="status" aria-live="polite" className="rounded-[28px] border border-paperfolio-line bg-paperfolio-surface px-6 py-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-paperfolio-accent-blue">{copy.done}</p>
              <h3 className="mt-4 text-2xl font-semibold text-paperfolio-text">{copy.success}</h3>
              <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{copy.successDescription}</p>
              {!confirmationEmailSent && <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{copy.confirmationFailed}</p>}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-busy={status === "loading"} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.name} *</label>
                  <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder={copy.namePlaceholder} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.email} *</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="name@email.com" className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.company}</label>
                  <input id="company" name="company" type="text" autoComplete="organization" value={formData.company} onChange={handleChange} placeholder={copy.optional} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.timeline}</label>
                  <input id="timeline" name="timeline" type="text" value={formData.timeline} onChange={handleChange} placeholder={copy.timelinePlaceholder} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.inquiryType} *</label>
                  <select id="inquiryType" name="inquiryType" required value={formData.inquiryType} onChange={handleChange} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text focus:border-paperfolio-accent-blue focus:outline-none">
                    <option value="">{copy.select}</option>
                    {inquiryTypes.map((type, index) => <option key={type} value={type}>{copy.inquiryTypes[index]}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.budget}</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text focus:border-paperfolio-accent-blue focus:outline-none">
                    <option value="">{copy.optional}</option>
                    {budgetRanges.map((range, index) => <option key={range} value={range}>{copy.budgetRanges[index]}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-paperfolio-text">{copy.message} *</label>
                <textarea id="message" name="message" rows={7} required value={formData.message} onChange={handleChange} placeholder={copy.messagePlaceholder} className="w-full rounded-[18px] border border-paperfolio-line bg-paperfolio-surface px-4 py-3.5 text-paperfolio-text placeholder:text-paperfolio-text-muted focus:border-paperfolio-accent-blue focus:outline-none" />
              </div>
              <div className="rounded-[20px] border border-paperfolio-line bg-paperfolio-surface px-4 py-4 text-sm leading-7 text-paperfolio-text-muted">{copy.privacy}</div>
              {status === "error" && errorMessage ? <p className="text-sm font-medium text-[#b25072]" role="alert">{errorMessage}</p> : null}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button type="submit" disabled={status === "loading"} className="inline-flex flex-1 items-center justify-center rounded-full bg-paperfolio-text px-6 py-4 text-sm font-semibold text-white hover:bg-paperfolio-accent-blue disabled:cursor-not-allowed disabled:opacity-60">{status === "loading" ? copy.sending : copy.send}</button>
                <a href="mailto:dms@dmssolution.co.kr" className="inline-flex items-center justify-center rounded-full border border-paperfolio-line bg-white px-6 py-4 text-sm font-semibold text-paperfolio-text hover:border-paperfolio-accent-coral/40 hover:text-paperfolio-accent-coral">{copy.emailSend}</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
