import { SHOWCASE_WORKS, type ShowcaseWorkItem } from "@/lib/works-showcase";

type WorkTranslation = Pick<ShowcaseWorkItem, "title" | "summary" | "tags"> & {
  linkLabel: string;
};

// Match translations by the original destination so order, assets and links stay shared.
const translations: Record<string, WorkTranslation> = {
  "/works/jev-seo-practical-guide": {
    title: "How to use Jev: setup and costs",
    summary: "A 12-page trial covering structured judgments, Windows setup, budget settings, limitations and evidence-based review.",
    tags: ["Work", "AI skills", "Workflow automation"],
    linkLabel: "Read the English guide",
  },
  "/works/claude-code-you-should-know": {
    title: "What to keep in view while Claude Code works",
    summary: "A document-based guide to You should Know: benefits, limits, activation requirements and a bounded trial.",
    tags: ["Work", "AI education", "Claude Code"],
    linkLabel: "Read the English guide",
  },
  "/works/delegating-work-to-ai-agents": {
    title: "How to hand work to an AI agent",
    summary: "A practical Work guide drawn from OpenAI's dots demo: five habits for delegating to AI and where to draw the line on permissions.",
    tags: ["Work", "AI education", "AI agents"],
    linkLabel: "Read the English guide",
  },
  "/works/ai-performance-measurement": {
    title: "Measuring AI adoption",
    summary: "A practical AI transformation guide to revenue, costs and review time, informed by a KISDI study and its limitations.",
    tags: ["Work", "AI transformation", "Performance measurement"],
    linkLabel: "Read the English guide",
  },
  "/works/automation-permission-ladder": {
    title: "Giving AI automation permission in three steps",
    summary: "A practical Work guide to widening an AI automation's permissions in order: read, draft, then act.",
    tags: ["Work", "Practical guide", "Workplace automation"],
    linkLabel: "Read the English guide",
  },
  "/works/bilingual-page-release-check": {
    title: "Publishing a page in two languages",
    summary: "A practical Work guide to checking Korean and English article bodies, reciprocal language links, photographs and mobile layout on the production domain.",
    tags: ["Work", "Practical guide", "Multilingual sites"],
    linkLabel: "Read the English guide",
  },
  "/fttx-training": {
    title: "Optical Network Training",
    summary: "Hands-on training in fiber-to-the-x (FTTx) network architecture, optical power budgets and fault finding with an optical time-domain reflectometer (OTDR). Written in English for engineers making decisions in the field.",
    tags: ["FTTx", "Optical Networks", "Field Training"],
    linkLabel: "Explore training in English",
  },
  "/works/ax": {
    title: "AI Transformation Design",
    summary: "A practical approach to redesigning work around AI: map the workflow, define human and AI responsibilities, plan handoffs, and measure progress over 90 days.",
    tags: ["AI Transformation", "Workflow Design", "Handoffs"],
    linkLabel: "Read the project in Korean",
  },
  "/works/automation": {
    title: "Workplace Automation Lab",
    summary: "Documented experiments and practical workflows for repetitive work, including email, reports, document preparation, field data and trade documents.",
    tags: ["Automation", "Practical Workflows", "Productivity"],
    linkLabel: "Read the projects in Korean",
  },
  "/works/ai-skill": {
    title: "AI Skills & Implementation",
    summary: "Implementation notes on connecting AI to real work, from ComfyUI API integrations and image generation pipelines to tools for organizing knowledge and running AI workflows.",
    tags: ["ComfyUI", "AI", "Pipelines"],
    linkLabel: "Read the projects in Korean",
  },
  "/works/ai-education": {
    title: "Practical AI Education",
    summary: "Hands-on curricula and examples that help learners use AI in their own work. Programs connect problem definition, workflow design and guided practice, including individual technical consulting.",
    tags: ["Education", "AI", "Workshops"],
    linkLabel: "Read the projects in Korean",
  },
  "https://storylens.dmssolution.co.kr/": {
    title: "Dreaming Camera / StoryLens",
    summary: "An AI education project that connects photography, AI, writing and music, helping people explore technology through creative work.",
    tags: ["Photography", "AI", "Creative Learning"],
    linkLabel: "Visit StoryLens · Korean · new tab",
  },
};

export const ENGLISH_SHOWCASE_WORKS = SHOWCASE_WORKS.map((work) => {
  const translation = translations[work.link ?? ""];
  return {
    ...work,
    ...translation,
    link: work.link === "/works/jev-seo-practical-guide" || work.link === "/works/claude-code-you-should-know" || work.link === "/works/delegating-work-to-ai-agents" || work.link === "/works/ai-performance-measurement" || work.link === "/works/bilingual-page-release-check" || work.link === "/works/automation-permission-ladder" ? `/en${work.link}` : work.link,
    // New untranslated work remains visible with an honest language label.
    linkLabel: translation?.linkLabel ?? "View the original in Korean",
    contentLanguage: translation ? "en" : "ko",
  };
});
