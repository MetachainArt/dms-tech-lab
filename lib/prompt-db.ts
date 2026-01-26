import { prisma } from "@/lib/prisma";
import { PromptItem } from "@/lib/prompt-data";

export async function getPromptsFromDB(): Promise<PromptItem[]> {
  try {
    const dbPrompts = await prisma.prompt.findMany({
      orderBy: { createdAt: "desc" }
    });

    return dbPrompts.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      category: p.category as any, // Cast to PromptCategory
      subcategory: p.subcategory || undefined,
      promptContent: p.promptContent,
      tags: p.tags,
      author: p.author,
      // Map flat DB fields to nested 'detail' object for Text Prompts
      detail: (p.useCase || p.exampleOutput || p.tips.length > 0) ? {
        useCase: p.useCase || "",
        exampleOutput: p.exampleOutput || "",
        tips: p.tips
      } : undefined,
      // Map other fields
      // isPremium is not in PromptItem yet, but good to have in DB
    }));
  } catch (error) {
    console.error("Failed to fetch prompts from DB:", error);
    return [];
  }
}
