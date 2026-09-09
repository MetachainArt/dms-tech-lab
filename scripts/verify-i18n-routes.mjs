import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const git = (...args) => execFileSync("git", args, { cwd: root });
// Freeze the migration baseline so the audit also works after committing the relocation.
// Pass another pre-migration commit as the first argument when reviewing another baseline.
const baseline = process.argv[2] || "96a7a3740bf2eb489bc08faeb4523277747ca2fc";
const trackedAppFiles = git("ls-tree", "-r", "--name-only", "-z", baseline, "--", "app").toString("utf8").split("\0").filter(Boolean);
const source = readFileSync(path.join(root, "lib/i18n.ts"), "utf8");
const { outputText, diagnostics } = ts.transpileModule(source.replace(/import blogTranslations from .*?;/, `const blogTranslations = ${readFileSync(path.join(root, "lib/blog-translation-index.json"), "utf8")};`), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  reportDiagnostics: true,
  fileName: "i18n.ts",
});
assert.equal(diagnostics?.length ?? 0, 0, "i18n.ts must transpile without diagnostics");
const { getLocale, withoutLocale, hasEnglishVersion, localizePath, languageAlternates, TRANSLATED_PATHS } =
  await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

let localeAssertions = 0;
function equal(actual, expected, message) {
  assert.deepEqual(actual, expected, message);
  localeAssertions++;
}

equal([...TRANSLATED_PATHS], ["/", "/about", "/works", "/contact", "/blog"], "Reviewed English editions must remain explicit");
for (const pathname of ["/en", "/en/", "/en/about", "/en/works", "/en/contact"]) {
  equal(getLocale(pathname), "en", `${pathname}: English segment boundary`);
}
for (const pathname of ["/", "/english", "/english/about", "/enough", "/en-us", "/blog/en", "/about"]) {
  equal(getLocale(pathname), "ko", `${pathname}: must not accidentally match /en`);
}

const baseUrl = "https://example.test";
const blogIndex = JSON.parse(readFileSync(path.join(root, "lib/blog-translation-index.json"), "utf8"));
for (const korean of [...TRANSLATED_PATHS, ...blogIndex.slugs.map(slug => `/blog/${slug}`), ...blogIndex.series.map(id => `/blog/series/${id}`)]) {
  const english = korean === "/" ? "/en" : `/en${korean}`;
  for (const pathname of [korean, english, `${english}/`]) {
    equal(withoutLocale(pathname), korean, `${pathname}: recover Korean route`);
    equal(hasEnglishVersion(pathname), true, `${pathname}: reviewed translation exists`);
    equal(localizePath(pathname, "ko"), korean, `${pathname}: Korean destination`);
    equal(localizePath(pathname, "en"), english, `${pathname}: English destination without a duplicate prefix`);
    equal(localizePath(localizePath(pathname, "en"), "en"), english, `${pathname}: repeated localization is idempotent`);
    equal(languageAlternates(pathname, baseUrl), {
      ko: `${baseUrl}${korean}`,
      en: `${baseUrl}${english}`,
      "x-default": `${baseUrl}${korean}`,
    }, `${pathname}: alternate URLs point to the paired pages`);
  }
}
for (const pathname of ["/blog/a-real-article", "/works/ax", "/education/optical-training", "/english"]) {
  for (const candidate of [pathname, `/en${pathname}`]) {
    equal(hasEnglishVersion(candidate), false, `${candidate}: no invented translation`);
    equal(localizePath(candidate, "en"), pathname, `${candidate}: untranslated destination stays at its original URL`);
    equal(localizePath(candidate, "ko"), pathname, `${candidate}: Korean destination remains available`);
    equal(languageAlternates(candidate, baseUrl), undefined, `${candidate}: no misleading language alternates`);
  }
}

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(filename) : [filename];
  });
}

// Route groups organize layouts without contributing a public URL segment.
function publicRoute(filename) {
  const parts = filename.replaceAll("\\", "/").split("/").slice(1, -1);
  assert.ok(!parts.some((part) => part.startsWith("@") || part.startsWith("(.)")), `Unsupported parallel/intercepted route: ${filename}`);
  if (parts.some((part) => part.startsWith("_"))) return null;
  return `/${parts.filter((part) => !(part.startsWith("(") && part.endsWith(")"))).join("/")}`;
}

const originalPages = trackedAppFiles.filter((filename) => filename.endsWith("/page.tsx"));
assert.ok(originalPages.length > 0, "Git must contain a baseline of page routes");
const currentPages = listFiles(path.join(root, "app"))
  .filter((filename) => path.basename(filename) === "page.tsx")
  .map((filename) => path.relative(root, filename).replaceAll("\\", "/"));
const currentRoutes = new Map();
for (const filename of currentPages) {
  const route = publicRoute(filename);
  if (route === null) continue;
  assert.ok(!currentRoutes.has(route), `Duplicate public route ${route}: ${currentRoutes.get(route)} and ${filename}`);
  currentRoutes.set(route, filename);
}
const originalRoutes = originalPages.map(publicRoute).filter((route) => route !== null);
for (const route of originalRoutes) {
  assert.ok(currentRoutes.has(route), `Original public route was removed: ${route}`);
}
for (const route of ["/en", "/en/about", "/en/works", "/en/contact"]) {
  assert.ok(currentRoutes.has(route), `English route is missing: ${route}`);
}

// Compare relocated files against the pre-migration baseline.
// Contact and layouts deliberately change as part of the bilingual implementation.
let preservedFiles = 0;
const intentionalChanges = [];
for (const original of trackedAppFiles) {
  const relocated = original.startsWith("app/(ko)/") ? original : original.replace(/^app\//, "app/(ko)/");
  if (relocated === original || !existsSync(path.join(root, relocated))) continue;
  if (original.startsWith("app/contact/") || path.posix.basename(original) === "layout.tsx") {
    intentionalChanges.push(original);
    continue;
  }
  assert.ok(!existsSync(path.join(root, original)), `Relocation left a duplicate source file: ${original}`);
  const before = git("show", `${baseline}:${original}`);
  const after = readFileSync(path.join(root, relocated));
  if (/\.(?:tsx?|jsx?|css|json|mdx?|txt)$/.test(original)) {
    assert.equal(after.toString("utf8").replaceAll("\r\n", "\n"), before.toString("utf8").replaceAll("\r\n", "\n"), `Relocation changed source content: ${original}`);
  } else {
    assert.ok(after.equals(before), `Relocation changed binary content: ${original}`);
  }
  preservedFiles++;
}
assert.ok(preservedFiles > 0, "Expected to verify relocated Korean source files against HEAD");
assert.equal(currentRoutes.get("/"), "app/(ko)/page.tsx", "The Korean home must remain at / through the route group");

console.log(`PASS: ${localeAssertions} locale and language-alternate assertions`);
console.log(`PASS: all ${originalRoutes.length} original public routes preserved; ${currentRoutes.size} current routes have no duplicates`);
console.log(`PASS: ${preservedFiles} relocated files preserve baseline content (text line endings normalized; binaries exact)`);
console.log(`EXCLUDED from content comparison: ${intentionalChanges.join(", ")}`);
