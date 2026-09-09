const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const matter = require('gray-matter');
const root = path.join(__dirname, '../content/posts');
const slugs = [], series = new Set(), missing = [];
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).sort()) {
  const translated = path.join(root, 'en', file);
  // Git may check out CRLF on Windows and LF on Linux. Text-equivalent sources share a hash.
  const source = fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
  const hash = createHash('sha256').update(source).digest('hex');
  if (!fs.existsSync(translated)) { missing.push(file); continue; }
  const { data } = matter(fs.readFileSync(translated, 'utf8'));
  if (data.translationSourceHash !== hash) { missing.push(file); continue; }
  slugs.push(file.slice(0, -4));
  if (data.series) series.add(data.series);
}
fs.writeFileSync(path.join(__dirname, '../lib/blog-translation-index.json'), JSON.stringify({ slugs, series: [...series].sort() }, null, 2) + '\n');
console.log(`English blog: ${slugs.length} current translations; ${missing.length} missing or stale.`);
if (process.argv.includes('--require-all') && missing.length) { console.error(missing.join('\n')); process.exitCode = 1; }
