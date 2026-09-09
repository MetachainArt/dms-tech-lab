import { SHOWCASE_WORKS, type ShowcaseWorkItem } from "@/lib/works-showcase";

type WorkTranslation = Pick<ShowcaseWorkItem, "title" | "summary" | "tags"> & {
  linkLabel: string;
};

// Match translations by the original destination so order, assets and links stay shared.
const translations: Record<string, WorkTranslation> = {
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
    // New untranslated work remains visible with an honest language label.
    linkLabel: translation?.linkLabel ?? "View the original in Korean",
    contentLanguage: translation ? "en" : "ko",
  };
});
