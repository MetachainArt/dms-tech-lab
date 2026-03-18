import AutomationContainer from "@/components/automation/AutomationMain";
import { AUTOMATION_CATEGORIES, type AutomationCategory, type AutomationTemplate } from "@/lib/automation-data";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = generateSeoMetadata({
  title: "자동화",
  description: "반복 업무를 줄이는 실무형 자동화 템플릿과 워크플로우를 살펴보세요.",
  path: "/automation",
});

type AutomationRecord = Awaited<ReturnType<typeof prisma.automation.findMany>>[number];
type AutomationDetail = AutomationTemplate["detail"];
type AutomationStats = AutomationTemplate["stats"];

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value !== null ? (value as Record<string, unknown>) : null;
}

function isCategory(value: string): value is Exclude<AutomationCategory, "All"> {
  return AUTOMATION_CATEGORIES.some((category) => category !== "All" && category === value);
}

function normalizeStats(detail: unknown): AutomationStats {
  const detailRecord = asRecord(detail);
  const statsRecord = detailRecord ? asRecord(detailRecord.stats) : null;

  if (!statsRecord) {
    return { complexity: "Beginner" };
  }

  const likes = typeof statsRecord.likes === "number" ? statsRecord.likes : undefined;
  const downloads = typeof statsRecord.downloads === "number" ? statsRecord.downloads : undefined;
  const complexity =
    statsRecord.complexity === "Beginner" || statsRecord.complexity === "Intermediate" || statsRecord.complexity === "Advanced"
      ? statsRecord.complexity
      : "Beginner";

  return { likes, downloads, complexity };
}

function normalizeIcons(detail: unknown): string[] {
  const detailRecord = asRecord(detail);
  const icons = detailRecord?.icons;

  if (!Array.isArray(icons)) {
    return [];
  }

  return icons.filter((icon): icon is string => typeof icon === "string");
}

function normalizeDetail(detail: unknown): AutomationDetail {
  const detailRecord = asRecord(detail);

  if (!detailRecord) {
    return {
      lastUpdate: "최근 업데이트",
      features: [],
      steps: [],
      descriptionLong: "상세 정보가 아직 정리되지 않았습니다.",
    };
  }

  const lastUpdate = typeof detailRecord.lastUpdate === "string" ? detailRecord.lastUpdate : "최근 업데이트";
  const descriptionLong = typeof detailRecord.descriptionLong === "string" ? detailRecord.descriptionLong : "상세 정보가 아직 정리되지 않았습니다.";
  const diagramImage = typeof detailRecord.diagramImage === "string" ? detailRecord.diagramImage : undefined;
  const workflowCode = typeof detailRecord.workflowCode === "string" ? detailRecord.workflowCode : undefined;

  const features = Array.isArray(detailRecord.features)
    ? detailRecord.features
        .map((feature) => asRecord(feature))
        .filter((feature): feature is Record<string, unknown> => feature !== null && typeof feature.title === "string")
        .map((feature) => ({ title: feature.title as string, description: typeof feature.description === "string" ? feature.description : undefined }))
    : [];

  const steps = Array.isArray(detailRecord.steps)
    ? detailRecord.steps
        .map((step) => asRecord(step))
        .filter((step): step is Record<string, unknown> => step !== null && typeof step.title === "string" && typeof step.desc === "string")
        .map((step) => ({ title: step.title as string, desc: step.desc as string }))
    : [];

  const prerequisites = Array.isArray(detailRecord.prerequisites)
    ? detailRecord.prerequisites
        .map((item) => asRecord(item))
        .filter((item): item is Record<string, unknown> => item !== null && typeof item.title === "string")
        .map((item) => ({ title: item.title as string, description: typeof item.description === "string" ? item.description : undefined }))
    : undefined;

  return { lastUpdate, descriptionLong, diagramImage, workflowCode, features, steps, prerequisites };
}

function mapAutomation(record: AutomationRecord): AutomationTemplate {
  return {
    id: record.id,
    title: record.title,
    description: record.description,
    category: isCategory(record.category) ? record.category : "Business",
    author: {
      name: record.author || "Reedo",
      avatar: "",
      verified: true,
    },
    stats: normalizeStats(record.detail),
    icons: normalizeIcons(record.detail),
    detail: normalizeDetail(record.detail),
  };
}

export default async function AutomationPage() {
  const automations = await prisma.automation.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formattedAutomations = automations.map(mapAutomation);

  return (
    <main className="w-full min-h-screen bg-[#FDFCF8] text-stone-900 font-poppins relative selection:bg-stone-200 selection:text-stone-900">
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/80 to-[#FDFCF8] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_70%)] z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="mb-4 text-sm font-semibold tracking-[0.24em] uppercase text-stone-500">자동화</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            반복 업무를 줄이는
            <br />
            <span className="text-stone-500">실무형 자동화 템플릿.</span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl leading-relaxed">
            반복되는 작업은 덜어내고, 판단이 필요한 일에 더 집중할 수 있도록 검증된 워크플로우를 모았습니다.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCF8]/50 to-[#FDFCF8] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <AutomationContainer initialTemplates={formattedAutomations} />
        </div>
      </section>
    </main>
  );
}
