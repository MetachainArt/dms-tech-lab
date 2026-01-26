import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PromptItem } from './prompt-data';

const promptsDirectory = path.join(process.cwd(), 'content/prompts');

export function getAllPromptsFromFiles(): PromptItem[] {
  // Create directory if not exists
  if (!fs.existsSync(promptsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(promptsDirectory);
  const prompts = files
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(promptsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Parse custom sections if needed, or just use content as prompt
      // Here we assume content is the "Prompt Content"
      // Detailed fields like useCase, exampleOutput can be in frontmatter or parsed from content
      
      // Adaptation: Frontmatter maps to PromptItem fields
      return {
        id,
        title: data.title || "Untitled",
        description: data.description || "",
        category: data.category || "Text",
        subcategory: data.subcategory,
        promptContent: content.trim(), // The MDX body is the prompt content
        tags: data.tags || [],
        author: data.author || "Anonymous",
        image: data.image,
        
        // Map detailed fields from Frontmatter
        detail: {
            useCase: data.useCase || "",
            exampleOutput: data.exampleOutput || "",
            tips: data.tips || []
        }
      } as PromptItem;
    });

  return prompts;
}
