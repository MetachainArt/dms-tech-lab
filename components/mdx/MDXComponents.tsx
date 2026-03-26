import type { ComponentPropsWithoutRef, ReactNode } from "react";

// ComfyUI 워크플로우 다이어그램 내부 컴포넌트
function NodeBox({ id, type, desc, variant }: { id: string; type: string; desc: string; variant: "blue" | "purple" | "green" | "red" | "gray" | "yellow" | "teal" | "orange" }) {
  const v: Record<string, string> = {
    blue:   "border-blue-500/40   bg-blue-950/60   text-blue-200",
    purple: "border-purple-500/40 bg-purple-950/60 text-purple-200",
    green:  "border-green-500/40  bg-green-950/60  text-green-200",
    red:    "border-red-500/40    bg-red-950/60    text-red-200",
    gray:   "border-gray-500/40   bg-gray-800/60   text-gray-200",
    yellow: "border-yellow-400/60 bg-yellow-950/60 text-yellow-200",
    teal:   "border-teal-500/40   bg-teal-950/60   text-teal-200",
    orange: "border-orange-500/40 bg-orange-950/60 text-orange-200",
  };
  return (
    <div className={`rounded-xl border px-3 py-2.5 ${v[variant]}`}>
      <div className="font-mono text-[10px] text-white/35">#{id}</div>
      <div className="mt-0.5 text-xs font-bold leading-tight">{type}</div>
      <div className="mt-1 whitespace-pre-line text-[10px] leading-relaxed text-white/55">{desc}</div>
    </div>
  );
}

function FlowArrow() {
  return <div className="shrink-0 text-white/25 text-lg self-center">→</div>;
}

function ComfyWorkflowDiagram() {
  return (
    <div className="my-10 overflow-x-auto rounded-[24px] bg-[#0d1117] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
        ComfyUI 워크플로우 — 10 nodes
      </p>
      <div className="flex items-stretch gap-3 min-w-[800px]">

        {/* Stage 1: Loaders */}
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-[9px] uppercase tracking-widest text-white/25 mb-1">로더</p>
          <NodeBox id="16" type="UNETLoader"  desc={"z_image_turbo\n_nvfp4.safetensors"} variant="blue" />
          <NodeBox id="17" type="VAELoader"   desc="ae.safetensors"                       variant="blue" />
          <NodeBox id="18" type="CLIPLoader"  desc={"qwen_3_4b.safetensors\n(lumina2)"}   variant="blue" />
        </div>

        <FlowArrow />

        {/* Stage 2: Encoders / Modifiers */}
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-[9px] uppercase tracking-widest text-white/25 mb-1">인코더·설정</p>
          <NodeBox id="11" type="ModelSamplingAuraFlow" desc="shift=7"                       variant="purple" />
          <NodeBox id="6"  type="CLIPTextEncode"        desc={"Positive Prompt\n✏ worker가 교체"} variant="green"  />
          <NodeBox id="7"  type="CLIPTextEncode"        desc={"Negative Prompt\n✏ worker가 교체"} variant="red"    />
          <NodeBox id="13" type="EmptySD3LatentImage"   desc="1080 × 1080"                   variant="gray"   />
        </div>

        <FlowArrow />

        {/* KSampler */}
        <div className="flex flex-col justify-center">
          <p className="text-[9px] uppercase tracking-widest text-white/25 mb-1">샘플러</p>
          <div className="rounded-xl border-2 border-yellow-400/60 bg-yellow-950/60 px-4 py-4">
            <div className="font-mono text-[10px] text-white/35">#3</div>
            <div className="mt-0.5 text-sm font-bold text-yellow-200">KSampler</div>
            <div className="mt-2 space-y-0.5 text-[10px] text-white/55">
              <div>steps: 15</div>
              <div>cfg: 1</div>
              <div>sampler: dpmpp_sde</div>
              <div>scheduler: beta</div>
            </div>
          </div>
        </div>

        <FlowArrow />

        {/* VAEDecode */}
        <div className="flex flex-col justify-center">
          <p className="text-[9px] uppercase tracking-widest text-white/25 mb-1">디코더</p>
          <NodeBox id="8" type="VAEDecode" desc={"잠재 공간\n→ 이미지"} variant="teal" />
        </div>

        <FlowArrow />

        {/* SaveImage */}
        <div className="flex flex-col justify-center">
          <p className="text-[9px] uppercase tracking-widest text-white/25 mb-1">저장</p>
          <NodeBox id="9" type="SaveImage" desc={"Z_Image_Turbo\n/날짜/image"} variant="orange" />
        </div>

      </div>
    </div>
  );
}
import {
  AlertTriangle,
  Battery,
  Bot,
  Brain,
  Calendar,
  Clock,
  Cpu,
  DollarSign,
  Lightbulb,
  Network,
  Terminal,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "./AudioPlayer";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  Users,
  Zap,
  Terminal,
  Network,
  Battery,
  Clock,
  Calendar,
  Cpu,
  Lightbulb,
  Brain,
  TrendingUp,
  AlertTriangle,
  DollarSign,
};

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type ImageProps = ComponentPropsWithoutRef<"img">;

interface CalloutProps {
  children: ReactNode;
  className?: string;
}

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3;
}

interface CardProps {
  children: ReactNode;
  icon?: keyof typeof iconMap | LucideIcon;
  color?: "blue" | "teal" | "coral";
  title?: string;
}

const gridCols: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

const cardColors: Record<NonNullable<CardProps["color"]>, string> = {
  blue: "bg-paperfolio-accent-blue/10 text-paperfolio-accent-blue",
  teal: "bg-[#e0f4f2] text-[#266b63]",
  coral: "bg-paperfolio-accent-coral/10 text-paperfolio-accent-coral",
};

interface StatusRowProps {
  file: string;
  status: string;
  action: string;
  variant?: "done" | "pending" | "archive";
}

function StatusRow({ file, status, action, variant = "done" }: StatusRowProps) {
  const s = {
    done:    { dot: "bg-teal-400",  badge: "bg-teal-50  text-teal-700  border-teal-200"  },
    pending: { dot: "bg-amber-400", badge: "bg-amber-50 text-amber-700 border-amber-200" },
    archive: { dot: "bg-blue-400",  badge: "bg-blue-50  text-blue-700  border-blue-200"  },
  }[variant];
  return (
    <div className="flex items-center gap-4 px-5 py-3.5">
      <div className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
      <div className="w-52 shrink-0">
        <span className="font-mono text-sm font-semibold text-paperfolio-text">{file}</span>
      </div>
      <div className="flex-1 text-sm text-paperfolio-text-muted">{status}</div>
      <div>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${s.badge}`}>{action}</span>
      </div>
    </div>
  );
}

function StatusGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-hidden rounded-[20px] border border-paperfolio-line">
      <div className="flex items-center gap-4 bg-paperfolio-text px-5 py-3">
        <div className="w-2 shrink-0" />
        <div className="w-52 shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">파일 / 폴더</div>
        <div className="flex-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">상태</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">판단</div>
      </div>
      <div className="divide-y divide-paperfolio-line bg-white">{children}</div>
    </div>
  );
}

interface ChangeRowProps { item: string; before: string; after: string; }

function ChangeRow({ item, before, after }: ChangeRowProps) {
  return (
    <div className="flex items-start gap-4 px-5 py-4">
      <div className="w-28 shrink-0">
        <span className="font-mono text-sm font-bold text-paperfolio-text">{item}</span>
      </div>
      <div className="flex-1 text-sm text-paperfolio-text-muted line-through opacity-50">{before}</div>
      <div className="flex flex-1 items-center gap-1.5">
        <span className="text-paperfolio-accent-blue text-xs">→</span>
        <span className="text-sm font-medium text-paperfolio-accent-blue">{after}</span>
      </div>
    </div>
  );
}

function ChangeGrid({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 overflow-hidden rounded-[20px] border border-paperfolio-line">
      <div className="flex items-center gap-4 bg-paperfolio-text px-5 py-3">
        <div className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">항목</div>
        <div className="flex-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">이전</div>
        <div className="flex-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">이후</div>
      </div>
      <div className="divide-y divide-paperfolio-line bg-white">{children}</div>
    </div>
  );
}

export const MDXComponents = {
  h1: (props: HeadingProps) => <h1 className="mt-14 font-playfair text-4xl font-bold leading-tight tracking-tight text-paperfolio-text md:text-5xl" {...props} />,
  h2: (props: HeadingProps) => <h2 className="mt-12 font-playfair text-3xl font-semibold leading-tight tracking-tight text-paperfolio-text md:text-4xl" {...props} />,
  h3: (props: HeadingProps) => <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-tight text-paperfolio-text" {...props} />,
  p: (props: ParagraphProps) => <p className="text-lg leading-8 text-paperfolio-text-muted" {...props} />,
  ul: (props: ListProps) => <ul className="my-6 list-disc space-y-3 pl-6 text-paperfolio-text-muted" {...props} />,
  ol: (props: ComponentPropsWithoutRef<"ol">) => <ol className="my-6 list-decimal space-y-3 pl-6 text-paperfolio-text-muted" {...props} />,
  li: (props: ListItemProps) => <li className="pl-1 leading-8" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold text-paperfolio-text" {...props} />,
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="my-8 rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-6 py-5 font-playfair text-2xl leading-10 text-paperfolio-text" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => <hr className="my-10 border-paperfolio-line" {...props} />,
  pre: (props: PreProps) => <pre className="my-8 overflow-x-auto rounded-[24px] bg-paperfolio-text p-5 text-sm leading-7 text-white [&_code]:!bg-transparent [&_code]:!text-white [&_code]:!p-0 [&_code]:!rounded-none [&_code]:!font-mono" {...props} />,
  code: (props: CodeProps) => <code className="rounded bg-paperfolio-accent-blue/10 px-1.5 py-0.5 text-[0.92em] text-paperfolio-accent-blue" {...props} />,
  img: (props: ImageProps) => <img className="my-10 w-full rounded-[28px] border border-paperfolio-line" alt={props.alt ?? ""} {...props} />,

  Bot,
  Workflow,
  Users,
  Zap,
  Terminal,
  Network,
  Battery,
  Clock,
  Calendar,
  Cpu,
  Lightbulb,
  Brain,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Link,
  Image,
  AudioPlayer,

  ComfyWorkflowDiagram,
  StatusRow,
  StatusGrid,
  ChangeRow,
  ChangeGrid,

  Callout: ({ children, className = "" }: CalloutProps) => (
    <div className={`my-8 rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-6 py-6 shadow-[0_14px_40px_rgba(31,41,55,0.04)] ${className}`}>
      {children}
    </div>
  ),
  ScenarioBox: ({ children }: CalloutProps) => (
    <div className="my-8 rounded-[24px] border-l-4 border-paperfolio-accent-blue bg-white px-6 py-6 shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      {children}
    </div>
  ),
  Grid: ({ children, cols = 1 }: GridProps) => (
    <div className={`my-10 grid grid-cols-1 gap-5 ${gridCols[cols]}`}>
      {children}
    </div>
  ),
  Card: ({ children, icon, color = "blue", title }: CardProps) => {
    const Icon = typeof icon === "string" ? iconMap[icon] : icon;
    return (
      <div className="rounded-[24px] border border-paperfolio-line bg-white p-6 shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
        {Icon ? (
          <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${cardColors[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        ) : null}
        {title ? <h4 className="mb-2 text-lg font-semibold text-paperfolio-text">{title}</h4> : null}
        <div className="space-y-3 text-paperfolio-text-muted">{children}</div>
      </div>
    );
  },
};
