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

function DiskSpaceChart() {
  const items = [
    { label: "Ubuntu 24.04 설치", value: "약 2GB",  gb: 2,   color: "bg-teal-400",   badge: "bg-teal-50   text-teal-700   border-teal-200"   },
    { label: "Node.js 24",        value: "약 500MB", gb: 0.5, color: "bg-blue-400",   badge: "bg-blue-50   text-blue-700   border-blue-200"   },
    { label: "오픈클로 + 패키지",  value: "약 500MB", gb: 0.5, color: "bg-violet-400", badge: "bg-violet-50 text-violet-700 border-violet-200" },
    { label: "작업 여유 공간",     value: "2GB 이상", gb: 2,   color: "bg-amber-400",  badge: "bg-amber-50  text-amber-700  border-amber-200"  },
  ];
  const total = 5;
  return (
    <div className="my-10 overflow-hidden rounded-[24px] border border-paperfolio-line bg-white shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      <div className="bg-paperfolio-text px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">디스크 여유 공간 체크</p>
        <p className="mt-1 text-xl font-bold text-white">최소 <span className="text-paperfolio-accent-yellow">5GB 이상</span> 필요합니다</p>
      </div>
      <div className="px-6 py-5">
        <div className="flex h-8 w-full overflow-hidden rounded-xl">
          {items.map((item) => (
            <div
              key={item.label}
              className={`${item.color} transition-all`}
              style={{ width: `${(item.gb / total) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`h-3 w-3 shrink-0 rounded-sm ${item.color}`} />
              <span className="flex-1 text-sm text-paperfolio-text-muted">{item.label}</span>
              <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${item.badge}`}>{item.value}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 border-t border-paperfolio-line pt-3">
            <div className="h-3 w-3 shrink-0 rounded-sm bg-paperfolio-text" />
            <span className="flex-1 text-sm font-semibold text-paperfolio-text">합계</span>
            <span className="rounded-full border border-paperfolio-text bg-paperfolio-text px-2.5 py-0.5 text-xs font-semibold text-white">5GB 이상</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BiosSettingsCard() {
  const cpus = [
    {
      brand: "Intel",
      color: "bg-blue-50 border-blue-200",
      headColor: "bg-blue-600",
      settings: ["VT-x", "Intel Virtualization Technology"],
      icon: "🔵",
    },
    {
      brand: "AMD",
      color: "bg-red-50 border-red-200",
      headColor: "bg-red-600",
      settings: ["AMD-V", "SVM Mode"],
      icon: "🔴",
    },
  ];
  return (
    <div className="my-8">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-paperfolio-text-muted">BIOS 가상화 설정 위치</p>
      <div className="grid grid-cols-2 gap-4">
        {cpus.map((cpu) => (
          <div key={cpu.brand} className={`overflow-hidden rounded-[20px] border ${cpu.color}`}>
            <div className={`${cpu.headColor} px-5 py-3`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">CPU 제조사</p>
              <p className="mt-0.5 text-xl font-bold text-white">{cpu.brand}</p>
            </div>
            <div className="px-5 py-4 space-y-2">
              {cpu.settings.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${cpu.headColor}`} />
                  <span className="font-mono text-sm font-medium text-paperfolio-text">{s}</span>
                </div>
              ))}
              <p className="pt-1 text-xs text-paperfolio-text-muted">BIOS 진입: 재시작 후 Del 또는 F2</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepGuideTable() {
  const steps = [
    { num: "01", title: "오픈클로 소개 + 준비 확인",         time: "10분",  current: true  },
    { num: "02", title: "WSL 설치 및 Ubuntu 설정",          time: "20분",  current: false },
    { num: "03", title: "Node.js 24 + 오픈클로 설치",        time: "15분",  current: false },
    { num: "04", title: "AI 인증 + Slack 연결 + 첫 실행",    time: "25분",  current: false },
    { num: "05", title: "보안 설정 완벽 가이드",              time: "20분",  current: false },
  ];
  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-paperfolio-line bg-white shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      <div className="bg-paperfolio-text px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">전체 설치 가이드 구성</p>
        <p className="mt-1 text-sm text-white/70">총 소요 시간 약 <span className="font-bold text-paperfolio-accent-yellow">90분</span></p>
      </div>
      <div className="divide-y divide-paperfolio-line">
        {steps.map((step) => (
          <div key={step.num} className={`flex items-center gap-4 px-6 py-4 ${step.current ? "bg-teal-50" : "bg-white"}`}>
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${step.current ? "bg-teal-500 text-white" : "bg-paperfolio-surface text-paperfolio-text-muted"}`}>
              {step.num}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${step.current ? "text-teal-700" : "text-paperfolio-text"}`}>{step.title}</p>
              {step.current && <p className="text-xs text-teal-500 font-medium">← 현재 단계</p>}
            </div>
            <div className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold ${step.current ? "border-teal-300 bg-teal-100 text-teal-700" : "border-paperfolio-line bg-paperfolio-surface text-paperfolio-text-muted"}`}>
              {step.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VpsComparisonTable() {
  const rows = [
    { label: "안정성",   wsl: "절전/종료 시 중단됨",    vps: "24시간 지속 운영",     wslBad: true  },
    { label: "보안",     wsl: "기존 환경과 공유",        vps: "격리된 독립 환경",     wslBad: true  },
    { label: "성능",     wsl: "다른 앱과 리소스 공유",   vps: "전용 리소스",          wslBad: true  },
    { label: "유지보수", wsl: "컴퓨터 사용 중 어려움",   vps: "원격으로 관리 가능",   wslBad: true  },
    { label: "비용",     wsl: "추가 비용 없음",           vps: "월 $5~10 (저사양)",   wslBad: false },
    { label: "권장 용도",wsl: "개인 테스트, 학습",        vps: "팀 운영, 업무 자동화", wslBad: false },
  ];
  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-paperfolio-line bg-white shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      {/* Header */}
      <div className="grid grid-cols-3 bg-paperfolio-text">
        <div className="px-5 py-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">구분</div>
        <div className="border-l border-white/10 px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">개인 컴퓨터</p>
          <p className="mt-0.5 text-sm font-bold text-white">WSL</p>
        </div>
        <div className="border-l border-white/10 bg-teal-600/20 px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-300/70">추천</p>
          <p className="mt-0.5 text-sm font-bold text-teal-200">전용 서버 (VPS)</p>
        </div>
      </div>
      {/* Rows */}
      <div className="divide-y divide-paperfolio-line">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-3">
            <div className="flex items-center px-5 py-4">
              <span className="text-sm font-semibold text-paperfolio-text">{row.label}</span>
            </div>
            <div className={`flex items-center gap-2 border-l border-paperfolio-line px-5 py-4 ${row.wslBad ? "bg-red-50/40" : "bg-white"}`}>
              {row.wslBad && <span className="text-red-400 text-xs">✕</span>}
              <span className="text-sm text-paperfolio-text-muted">{row.wsl}</span>
            </div>
            <div className="flex items-center gap-2 border-l border-paperfolio-line bg-teal-50/60 px-5 py-4">
              <span className="text-teal-500 text-xs font-bold">✓</span>
              <span className="text-sm font-medium text-teal-700">{row.vps}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlackScopesTable() {
  const scopes = [
    { name: "chat:write",        desc: "메시지 전송 권한",             color: "bg-teal-400",   badge: "bg-teal-50   text-teal-700   border-teal-200"   },
    { name: "im:history",        desc: "DM 대화 기록 읽기",            color: "bg-blue-400",   badge: "bg-blue-50   text-blue-700   border-blue-200"   },
    { name: "im:read",           desc: "DM 채널 정보 읽기",            color: "bg-blue-400",   badge: "bg-blue-50   text-blue-700   border-blue-200"   },
    { name: "im:write",          desc: "DM 채널 열기",                 color: "bg-blue-400",   badge: "bg-blue-50   text-blue-700   border-blue-200"   },
    { name: "app_mentions:read", desc: "채널에서 앱 멘션(@앱이름) 읽기", color: "bg-violet-400", badge: "bg-violet-50 text-violet-700 border-violet-200" },
  ];
  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-paperfolio-line bg-white shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      <div className="bg-paperfolio-text px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Bot Token Scopes</p>
        <p className="mt-1 text-sm text-white/70">추가해야 할 권한 <span className="font-bold text-paperfolio-accent-yellow">5개</span></p>
      </div>
      <div className="divide-y divide-paperfolio-line">
        {scopes.map((s) => (
          <div key={s.name} className="flex items-center gap-4 px-6 py-3.5">
            <div className={`h-2 w-2 shrink-0 rounded-full ${s.color}`} />
            <code className="w-44 shrink-0 rounded bg-paperfolio-accent-blue/10 px-2 py-0.5 font-mono text-sm font-semibold text-paperfolio-accent-blue">{s.name}</code>
            <span className="flex-1 text-sm text-paperfolio-text-muted">{s.desc}</span>
            <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${s.badge}`}>필수</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityThreatTable() {
  const threats = [
    { type: "토큰 유출",    desc: "AI/Slack 무단 사용, 요금 청구",    fix: "환경 변수 + .gitignore",   level: "high"   },
    { type: "무단 접근",    desc: "허가되지 않은 사용자 봇 조종",      fix: "allowedUsers 목록 설정",    level: "high"   },
    { type: "외부 포트 노출", desc: "인터넷에서 봇 서버 직접 접근",    fix: "127.0.0.1 바인딩",          level: "medium" },
    { type: "프롬프트 인젝션", desc: "악성 메시지로 AI 역할 변경",     fix: "시스템 프롬프트 강화",      level: "medium" },
    { type: "과도한 권한",  desc: "불필요한 채널/기능 접근",           fix: "Slack Scope 최소화",        level: "low"    },
  ];
  const levelStyle: Record<string, string> = {
    high:   "bg-red-50   text-red-700   border-red-200",
    medium: "bg-amber-50 text-amber-700 border-amber-200",
    low:    "bg-blue-50  text-blue-700  border-blue-200",
  };
  const levelLabel: Record<string, string> = { high: "높음", medium: "중간", low: "낮음" };
  return (
    <div className="my-8 overflow-hidden rounded-[24px] border border-paperfolio-line bg-white shadow-[0_14px_40px_rgba(31,41,55,0.04)]">
      <div className="flex items-center gap-4 bg-paperfolio-text px-6 py-3">
        <div className="w-24 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-white/40">위협 유형</div>
        <div className="flex-1 text-[10px] font-semibold uppercase tracking-widest text-white/40">피해 내용</div>
        <div className="w-40 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-white/40">대응 방법</div>
        <div className="w-14 shrink-0 text-center text-[10px] font-semibold uppercase tracking-widest text-white/40">위험도</div>
      </div>
      <div className="divide-y divide-paperfolio-line">
        {threats.map((t) => (
          <div key={t.type} className="flex items-center gap-4 px-6 py-4">
            <div className="w-24 shrink-0 text-sm font-semibold text-paperfolio-text">{t.type}</div>
            <div className="flex-1 text-sm text-paperfolio-text-muted">{t.desc}</div>
            <div className="w-40 shrink-0 text-sm text-paperfolio-text-muted">{t.fix}</div>
            <div className="w-14 shrink-0 text-center">
              <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${levelStyle[t.level]}`}>{levelLabel[t.level]}</span>
            </div>
          </div>
        ))}
      </div>
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
  DiskSpaceChart,
  BiosSettingsCard,
  StepGuideTable,
  SlackScopesTable,
  VpsComparisonTable,
  SecurityThreatTable,
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
