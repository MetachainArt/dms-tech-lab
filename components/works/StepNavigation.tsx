import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { WorkStep } from "@/lib/works-projects-data";

interface StepNavigationProps {
  steps: WorkStep[];
  currentStepId: string;
  basePath: string; // e.g. "/works/ai-skill/comfyui-pipeline"
}

export default function StepNavigation({ steps, currentStepId, basePath }: StepNavigationProps) {
  const currentIndex = steps.findIndex((s) => s.id === currentStepId);
  const prev = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const next = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`${basePath}/${prev.id}`}
          className="group flex items-start gap-3 rounded-2xl border border-paperfolio-line bg-paperfolio-bg px-5 py-4 transition-all hover:border-paperfolio-accent-blue/40 hover:shadow-md"
        >
          <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-paperfolio-text-muted transition-transform group-hover:-translate-x-0.5" />
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-paperfolio-text-muted">
              이전 단계
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-paperfolio-text group-hover:text-paperfolio-accent-blue">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`${basePath}/${next.id}`}
          className="group flex items-start justify-end gap-3 rounded-2xl border border-paperfolio-line bg-paperfolio-bg px-5 py-4 text-right transition-all hover:border-paperfolio-accent-blue/40 hover:shadow-md"
        >
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-paperfolio-text-muted">
              다음 단계
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-paperfolio-text group-hover:text-paperfolio-accent-blue">
              {next.title}
            </p>
          </div>
          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-paperfolio-text-muted transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
