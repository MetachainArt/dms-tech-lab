// Runs the real route with in-memory mail/rate-limit stubs. Never sends mail or accesses a database.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
import ts from 'typescript';

function loadModule(file, requireMock, env = {}) {
  const source = fs.readFileSync(path.join(scriptDirectory, '..', file), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const moduleRecord = { exports: {} };
  vm.runInNewContext(js, { exports: moduleRecord.exports, module: moduleRecord, require: requireMock, process: { env }, console: { log() {}, error() {}, warn() {} } });
  return moduleRecord.exports;
}

const copy = loadModule('lib/contact-copy.ts', () => { throw new Error('Unexpected dependency'); });
function createRoute({ configured = true, allowed = true, results = [] } = {}) {
  const sent = [];
  const route = loadModule('app/api/contact/route.ts', (id) => {
    if (id === 'next/server') return { NextResponse: { json: (body, options) => ({ status: options?.status || 200, body }) } };
    if (id === '@/lib/contact-copy') return copy;
    if (id === '@/lib/rate-limit') return { checkRateLimit: async () => ({ success: allowed }) };
    if (id === 'resend') return { Resend: class { emails = { send: async (mail) => {
      sent.push(mail);
      const result = results[sent.length - 1];
      if (result instanceof Error) throw result;
      return result || { data: { id: 'mock-email' }, error: null };
    } }; } };
    throw new Error(`Unexpected dependency: ${id}`);
  }, configured ? { RESEND_API_KEY: 'local-mock-only' } : {});
  const post = (body) => route.POST({ headers: { get: () => null }, json: async () => body });
  return { post, sent };
}

const valid = { name: 'Local verification', email: 'test@example.invalid', inquiryType: '자동화·개발 의뢰', message: 'Local verification only', locale: 'en' };
(async () => {
  let route = createRoute({ configured: false });
  let result = await route.post(valid);
  assert.equal(result.status, 503, 'missing mail configuration must not report success');
  assert.equal(route.sent.length, 0);
  assert.match(result.body.error, /unavailable/);

  route = createRoute({ results: [{ error: { message: 'mock rejection' }, data: null }] });
  result = await route.post(valid);
  assert.equal(result.status, 502, 'provider rejection must not report success');
  assert.equal(route.sent.length, 1);

  for (const failure of [{ error: { message: 'mock reply failure' }, data: null }, new Error('mock exception')]) {
    route = createRoute({ results: [{ data: { id: 'accepted' }, error: null }, failure] });
    result = await route.post(valid);
    assert.equal(result.status, 200, 'accepted inquiry remains successful if confirmation fails');
    assert.equal(result.body.success, true);
    assert.equal(result.body.confirmationEmailSent, false);
  }

  route = createRoute();
  result = await route.post({ ...valid, name: '<img src=x>', message: '<script>alert(1)</script>' });
  assert.equal(result.body.success, true);
  assert.equal(result.body.confirmationEmailSent, true);
  assert.equal(route.sent.length, 2);
  assert.match(route.sent[1].subject, /inquiry/);
  assert.match(route.sent[0].html, /&lt;script&gt;/);
  assert.ok(!route.sent[1].html.includes('<img src=x>'));
  assert.match(route.sent[1].html, /1–2 business days/);

  route = createRoute();
  result = await route.post({ ...valid, locale: undefined });
  assert.match(result.body.message, /접수/);
  assert.match(route.sent[1].subject, /접수/);

  for (const body of [null, [], 'bad', { ...valid, locale: 'fr' }, { ...valid, locale: null }, { ...valid, email: {} }, { ...valid, message: [] }, { ...valid, email: 'bad' }, { ...valid, message: '  ' }]) {
    route = createRoute();
    result = await route.post(body);
    assert.equal(result.status, 400, `invalid payload: ${JSON.stringify(body)}`);
    assert.equal(route.sent.length, 0);
  }
  route = createRoute({ allowed: false });
  result = await route.post(valid);
  assert.equal(result.status, 429);
  assert.match(result.body.error, /Too many/);
  assert.equal(route.sent.length, 0);
  console.log('PASS: contact locale, legacy Korean, validation, escaping, rate limit, provider failures, and partial success (mocked; zero external requests).');
})().catch((error) => { console.error(error); process.exitCode = 1; });
