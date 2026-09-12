import { BLOG_SERIES, type BlogSeries } from "./blog-data";

const descriptions: Record<string, string> = {
  "future-arts": "A world seen through machines, architecture shaped by algorithms, and synthetic cinema. Exploring art and aesthetics in the age of AI.",
  "homo-technicus": "Posthumanism, digital personas, and implanted memories. A philosophical exploration of humanity evolving alongside technology.",
  "agentic-era": "AI moves from tool to colleague. Autonomous agents, the future of work, and creativity within everyone's reach.",
  "ai-tech-trends": "Making sense of the daily flood of AI news, from retrieval-augmented generation to multimodal intelligence.",
  "today-me": "Today's routine shapes tomorrow: from a morning glass of water to an evening reflection, an engineering approach to everyday life.",
  "ai-fantasy-life": "Where reality and the virtual world blur: strange, dreamlike stories written together with AI.",
  "daily-record": "Fleeting moments, changing seasons, and the feelings and memories left behind in everyday life.",
  "passive-income": "Building value that grows while you sleep. Digital assets, automated income, and the path toward financial freedom.",
  "optical-communications": "From fiber optic fundamentals to FTTx and PON networks, splicing, testing, deployment, and maintenance. Technical documents and practical resources for optical communications, all in one place.",
  "openclaw-room": "A practical guide to the OpenClaw personal AI assistant: installation, messaging channels, skills, memory, automation, and operations.",
};

export const ENGLISH_BLOG_SERIES: Record<string, BlogSeries> = Object.fromEntries(
  Object.entries(BLOG_SERIES).map(([id, series]) => [id, {
    ...series,
    title: id === "optical-communications" ? "Optical Communications" : id === "daily-record" ? "Everyday Records" : series.title,
    description: descriptions[id] ?? series.description,
    tags: id === "optical-communications" ? ["Fiber Optics", "FTTx · PON", "Testing · Installation"] : id === "openclaw-room" ? ["Setup", "Channels", "Models", "Skills", "Automation", "Operations"] : series.tags,
  }])
);
