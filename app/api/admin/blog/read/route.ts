import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get("path");
  
  if (!filePath) {
    return NextResponse.json({ error: "Path is required" }, { status: 400 });
  }
  
  // Security: prevent directory traversal
  if (filePath.includes("..") || filePath.includes("/") || filePath.includes("\\")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }
  
  const postsDir = path.join(process.cwd(), "content", "posts");
  const fullPath = path.join(postsDir, filePath);
  
  // Ensure path is within posts directory
  if (!fullPath.startsWith(postsDir)) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }
  
  try {
    const content = fs.readFileSync(fullPath, "utf-8");
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
