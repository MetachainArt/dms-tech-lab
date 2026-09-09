import assert from 'node:assert/strict';
import fs from 'node:fs';

const origin = process.argv[2] || 'http://127.0.0.1:3100';
assert.ok(new URL(origin).hostname === '127.0.0.1' || new URL(origin).hostname === 'localhost', 'Use the isolated local preview');
const index = JSON.parse(fs.readFileSync(new URL('../lib/blog-translation-index.json', import.meta.url), 'utf8'));
const routes = ['/en/blog', ...index.slugs.map(slug => `/en/blog/${slug}`), ...index.series.map(id => `/en/blog/series/${id}`)];
const canonicalOrigin = 'https://dmssolution.co.kr';
const checked = [];
let cursor = 0;
await Promise.all(Array.from({ length: 6 }, async () => {
  while (cursor < routes.length) {
    const route = routes[cursor++];
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /<html[^>]+lang="en"/, `${route}: document language`);
    assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin}${route}"`), `${route}: canonical`);
    assert.ok(html.includes(`hrefLang="ko" href="${canonicalOrigin}${route.slice(3)}"`), `${route}: Korean alternate`);
    assert.ok(html.includes(`hrefLang="en" href="${canonicalOrigin}${route}"`), `${route}: English alternate`);
    if (!route.includes('/series/') && route !== '/en/blog') {
      const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(article, `${route}: rendered article`);
      assert.ok(!/[가-힣]/.test(article), `${route}: Korean prose remains in rendered article`);
    }
    checked.push(route);
  }
}));
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
for (const route of routes) assert.ok(sitemap.includes(`<loc>${canonicalOrigin}${route}</loc>`), `${route}: sitemap entry`);
assert.equal((await fetch(origin + '/en/blog/no-such-translated-article')).status, 404);
assert.equal((await fetch(origin + '/en/blog/series/no-such-series')).status, 404);
const report = { englishArticles: index.slugs.length, englishSeries: index.series.length, checkedRoutes: checked.length, documentLanguage: 'en', canonicalAndAlternates: true, renderedKoreanProse: 0, sitemap: true, missingPages404: true };
fs.writeFileSync(new URL('../output/blog-english/http-verification.json', import.meta.url), JSON.stringify(report, null, 2));
console.log('PASS:', JSON.stringify(report));
