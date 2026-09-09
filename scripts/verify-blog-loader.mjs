import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const requireReal = createRequire(import.meta.url);
const source = fs.readFileSync(new URL('../lib/mdx.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
const index = JSON.parse(fs.readFileSync(new URL('../lib/blog-translation-index.json', import.meta.url), 'utf8'));
function load(mode) {
  const exports = {};
  const require = id => {
    if (id === './editorial-art') return { editorialContent: x => x, editorialCover: () => undefined };
    if (id === 'fs') return { promises: { ...fs.promises, readFile: async (file, encoding) => {
      const result = await fs.promises.readFile(file, encoding);
      if (typeof result !== 'string' || !String(file).replaceAll('\\', '/').includes('/content/posts/') || String(file).replaceAll('\\', '/').includes('/content/posts/en/')) return result;
      const normalized = result.replace(/\r\n/g, '\n');
      return mode === 'lf' ? normalized : mode === 'crlf' ? normalized.replace(/\n/g, '\r\n') : `${normalized}\nChanged source content`;
    } } };
    return requireReal(id);
  };
  vm.runInNewContext(js, { exports, require, process, console });
  return exports;
}
for (const mode of ['lf', 'crlf']) {
  const loader = load(mode);
  const posts = await loader.getAllPosts('en');
  assert.equal(posts.length, index.slugs.length, `${mode}: all translations remain available`);
  assert.ok(await loader.getPostBySlug(index.slugs[0], 'en'));
  assert.equal(await loader.getPostBySlug('../_template', 'en'), null);
  assert.equal(await loader.getPostBySlug('_template', 'en'), null);
}
const stale = load('changed');
assert.equal(await stale.getPostBySlug(index.slugs[0], 'en'), null, 'Changed source must not silently reuse an old translation');
assert.ok(await stale.getPostBySlug(index.slugs[0]), 'Korean source remains available');
console.log(`PASS: ${index.slugs.length} English articles load with both LF and CRLF sources; stale translation and invalid slug guards pass.`);
