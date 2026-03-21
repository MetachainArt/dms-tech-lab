import type { ComponentPropsWithoutRef, ReactNode } from "react";
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
  pre: (props: PreProps) => <pre className="my-8 overflow-x-auto rounded-[24px] bg-paperfolio-text p-5 text-sm leading-7 text-white [&_code]:bg-transparent [&_code]:text-white [&_code]:p-0 [&_code]:rounded-none" {...props} />,
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
