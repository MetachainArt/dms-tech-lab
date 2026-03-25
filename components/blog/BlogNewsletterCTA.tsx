"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function BlogNewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const hasStarted = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "오류");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "구독 중 오류가 발생했습니다.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="mt-16 rounded-[28px] border border-paperfolio-line bg-paperfolio-text px-8 py-12 text-white shadow-[0_24px_80px_rgba(26,26,46,0.18)] md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left copy */}
        <div className="space-y-3 md:max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paperfolio-accent-yellow">
            Newsletter
          </p>
          <h2 className="font-playfair text-2xl leading-tight md:text-3xl">
            새 글이 나오면<br />이메일로 받아보세요
          </h2>
          <p className="text-sm leading-7 text-white/60">
            AI, 자동화, 수익화에 대한 현장의 기록을 꾸준히 보내드립니다. 스팸 없이, 새 글이 발행될 때만 발송됩니다.
          </p>
        </div>

        {/* Right form */}
        <div className="md:w-[340px]">
          {status === "success" ? (
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
              <p className="text-sm font-medium text-white">
                구독 완료! 환영 이메일을 확인해 주세요 🎉
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!hasStarted.current && e.target.value.trim()) {
                      hasStarted.current = true;
                    }
                  }}
                  placeholder="이메일 주소를 입력하세요"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-paperfolio-accent-yellow/60 focus:outline-none focus:ring-1 focus:ring-paperfolio-accent-yellow/30"
                  suppressHydrationWarning
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-paperfolio-accent-yellow py-3.5 text-sm font-bold text-paperfolio-text transition-all hover:bg-paperfolio-accent-yellow/90 disabled:opacity-60"
                suppressHydrationWarning
              >
                {status === "loading" ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-paperfolio-text/20 border-t-paperfolio-text" />
                ) : (
                  <>
                    구독하기
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-red-400">{errorMsg}</p>
              )}
              <p className="text-center text-xs text-white/30">
                새 글 발행 시에만 발송됩니다 · 언제든 구독 해지 가능
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
