import {
  Calendar, Clock,
  Bot, Workflow, Users, Zap, Terminal, Network, Battery,
  Cpu, Lightbulb, Brain, TrendingUp, AlertTriangle, DollarSign
} from "lucide-react";
import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArticleCodeBlock, ArticleFigure, ArticleNextImage, ArticleTable } from "@/components/mdx/ArticleFigure";

type Props<T extends keyof React.JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>;
type ContentProps = { children: ReactNode; className?: string };
const gridColumns = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3" };


export const EducationMDXComponents = {
  // Education (Light Mode/Paper) overrides
  h1: (props: Props<"h1">) => <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10 leading-tight" {...props} />,
  h2: (props: Props<"h2">) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b pb-3 border-gray-200" {...props} />,
  h3: (props: Props<"h3">) => <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6" {...props} />,
  h4: (props: Props<"h4">) => <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4" {...props} />,
  
  p: (props: Props<"p">) => <p className="text-gray-700 leading-relaxed mb-4 text-base" {...props} />,
  
  ul: (props: Props<"ul">) => <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4 leading-relaxed text-base" {...props} />,
  ol: (props: Props<"ol">) => <ol className="list-decimal pl-5 text-gray-700 space-y-1 mb-4 leading-relaxed text-base" {...props} />,
  li: (props: Props<"li">) => <li className="pl-1" {...props} />,
  
  strong: (props: Props<"strong">) => <strong className="font-bold text-gray-900" {...props} />,
  blockquote: (props: Props<"blockquote">) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-8 bg-blue-50 text-gray-800 italic rounded-none" {...props} />
  ),
  hr: (props: Props<"hr">) => <hr className="my-12 border-gray-200" {...props} />,
  

  // Tables (GFM)
  table: ArticleTable,
  thead: (props: Props<"thead">) => <thead className="bg-paperfolio-bg" {...props} />,
  th: (props: Props<"th">) => (
    <th className="border-b border-paperfolio-line px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-paperfolio-text" {...props} />
  ),
  td: (props: Props<"td">) => (
    <td className="border-b border-paperfolio-line/60 px-5 py-3 align-top leading-7 text-paperfolio-text-muted" {...props} />
  ),
  tr: (props: Props<"tr">) => <tr className="last:border-0" {...props} />,
  code: (props: Props<"code">) => (
    <code className="rounded bg-paperfolio-bg px-1.5 py-0.5 text-[0.9em] text-paperfolio-accent-blue" {...props} />
  ),
  pre: ArticleCodeBlock,
  img: ArticleFigure,
  a: (props: Props<"a">) => (
    <a className="text-paperfolio-accent-blue underline underline-offset-4 hover:text-paperfolio-accent-coral" {...props} />
  ),

  // Custom Components & Icons
  Bot, Workflow, Users, Zap, Terminal, Network, Battery,
  Clock, Calendar, Cpu, Lightbulb, Brain, TrendingUp, AlertTriangle, DollarSign,
  Link,
  Image: ArticleNextImage,
  
  // Layout Helpers (Adjusted for Light Theme)
  Callout: ({ children, className = "" }: ContentProps) => (
    <div className={`bg-gray-50 p-6 rounded-none border border-gray-200 mb-8 ${className}`}>
      {children}
    </div>
  ),
  ScenarioBox: ({ children }: ContentProps) => (
    <div className="bg-white p-8 rounded-none border-l-4 border-blue-500 my-8 shadow-sm">
      {children}
    </div>
  ),
  Grid: ({ children, cols = 1 }: { children: ReactNode; cols?: 1 | 2 | 3 }) => (
    <div className={`grid grid-cols-1 ${gridColumns[cols]} gap-6 my-12`}>
        {children}
    </div>
  )
};
