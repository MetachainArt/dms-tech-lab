import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkGfm from 'remark-gfm';
import { compile } from '@mdx-js/mdx';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'content/posts');
const files = fs.readdirSync(dir).filter(file => !file.startsWith('_') && file.endsWith('.mdx')).sort();
const partial = process.argv.includes('--partial');
const parser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);
// Reviewed translations of natural-language prompts, labels and comments inside fences.
// Executable examples and every other fenced block must still match the source exactly.
const proseCode = JSON.parse(fs.readFileSync(new URL('./fixtures/blog-prose-code-translations.json', import.meta.url), 'utf8'));
const report = { total: files.length, verified: 0, missing: [], failures: [], residualKorean: [], structureNotes: [] };

function inspect(content) {
  const tree = parser.parse(content);
  const structure = [], media = [], links = [], code = [], korean = [];
  function visit(node) {
    if (['heading', 'list', 'listItem', 'table', 'tableRow', 'tableCell', 'blockquote', 'thematicBreak'].includes(node.type)) structure.push([node.type, node.depth ?? node.ordered ?? null]);
    if (node.type === 'image') media.push(node.url);
    if (node.type === 'link' || node.type === 'definition') links.push(node.url);
    if (node.type === 'code') code.push({ lang: node.lang ?? null, value: node.value.replace(/\r\n/g, '\n') });
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
      structure.push(['jsx', node.name]);
      for (const attr of node.attributes ?? []) {
        if (['src', 'href'].includes(attr.name)) (attr.name === 'src' ? media : links).push(attr.value);
        if (typeof attr.value === 'string' && /[가-힣]/.test(attr.value)) korean.push({ line: attr.position?.start.line, text: attr.value });
      }
    }
    if (['text', 'code', 'inlineCode'].includes(node.type) && /[가-힣]/.test(node.value)) korean.push({ line: node.position.start.line, text: node.value });
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  return { structure, media, links, code, korean };
}

for (const file of files) {
  const translated = path.join(dir, 'en', file);
  if (!fs.existsSync(translated)) { report.missing.push(file); continue; }
  try {
    const raw = fs.readFileSync(path.join(dir, file));
    const original = matter(raw.toString('utf8'));
    const english = matter(fs.readFileSync(translated, 'utf8'));
    const normalized = raw.toString('utf8').replace(/\r\n/g, '\n');
    assert.equal(english.data.translationSourceHash, createHash('sha256').update(normalized).digest('hex'), 'Source hash mismatch');
    for (const key of ['date', 'series', 'chapter', 'coverImage']) assert.deepEqual(english.data[key], original.data[key], `${key} changed`);
    for (const key of ['title', 'excerpt', 'subtitle', 'readTime']) {
      if (original.data[key]) assert.ok(english.data[key], `${key} missing`);
      if (/[가-힣]/.test(String(english.data[key] ?? ''))) report.residualKorean.push({ file, key, text: english.data[key] });
    }
    const ko = inspect(original.content), en = inspect(english.content);
    assert.deepEqual(en.media, ko.media, 'Media sources changed');
    assert.deepEqual(en.links, ko.links, 'Link destinations changed');
    const expectedCode = ko.code.map(block => {
      const translated = proseCode.find(item => item.file === file && item.original === block.value);
      return translated ? { ...block, value: translated.translated } : block;
    });
    assert.deepEqual(en.code, expectedCode, 'Code blocks changed beyond reviewed prose translations');
    assert.deepEqual(en.structure, ko.structure, 'Heading/list/table/JSX structure changed');
    for (const item of en.korean) report.residualKorean.push({ file, ...item });
    await compile(english.content, { remarkPlugins: [remarkGfm] });
    report.verified++;
  } catch (error) {
    report.failures.push({ file, error: error.message });
  }
}

const output = path.join(root, 'output/blog-english');
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, 'translation-verification.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, failures: report.failures.map(item => ({ file: item.file, error: item.error.split('\n')[0] })), residualKorean: report.residualKorean.length }, null, 2));
if (report.failures.length || (!partial && report.missing.length)) process.exitCode = 1;
