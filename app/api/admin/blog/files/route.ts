import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface FileWithMeta {
  path: string;
  name: string;
  title: string;
  series: string;
}

// Get all MDX files from blog content directory with metadata
function getMDXFiles(dir: string): FileWithMeta[] {
  const files: FileWithMeta[] = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isFile() && item.endsWith(".mdx")) {
        // Read file to get frontmatter
        const content = fs.readFileSync(fullPath, "utf-8");
        // Handle both LF and CRLF line endings
        const frontmatterMatch = content.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/);
        
        let title = item.replace(".mdx", "");
        let series = "기타";
        
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          
          // Parse each line for title and series
          const lines = frontmatter.split(/\r?\n/);
          for (const line of lines) {
            const titleMatch = line.match(/^title:\s*["']?(.+?)["']?\s*$/);
            const seriesMatch = line.match(/^series:\s*["']?(.+?)["']?\s*$/);
            
            if (titleMatch) title = titleMatch[1].trim();
            if (seriesMatch) series = seriesMatch[1].trim();
          }
        }
        
        files.push({
          path: item,
          name: item,
          title,
          series,
        });
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }
  
  return files.sort((a, b) => a.series.localeCompare(b.series) || a.title.localeCompare(b.title));
}

export async function GET() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = getMDXFiles(postsDir);
  
  // Group by series
  const grouped: Record<string, FileWithMeta[]> = {};
  for (const file of files) {
    if (!grouped[file.series]) {
      grouped[file.series] = [];
    }
    grouped[file.series].push(file);
  }
  
  return NextResponse.json({ files, grouped });
}
