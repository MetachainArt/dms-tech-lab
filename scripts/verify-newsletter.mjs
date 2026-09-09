// Execute the real route with an in-memory provider. No network or messages.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../app/api/newsletter/route.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
function route({ configured = true, allowed = true, contact = { data: { id: 'test-contact' } }, mailThrows = false } = {}) {
  const calls = [];
  const exports = {};
  const require = id => {
    if (id === 'next/server') return { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } };
    if (id === '@/lib/rate-limit') return { checkRateLimit: async () => ({ success: allowed }) };
    if (id === '@/lib/email-templates') return { welcomeEmailHtml: () => '<p>Test</p>' };
    if (id === 'resend') return { Resend: class {
      contacts = { create: async () => { calls.push('contact'); if (contact instanceof Error) throw contact; return contact; } };
      emails = { send: async () => { calls.push('welcome'); if (mailThrows) throw new Error('mock'); return { data: { id: 'mail' } }; } };
    } };
    throw new Error(`Unexpected dependency ${id}`);
  };
  vm.runInNewContext(js, { exports, require, process: { env: configured ? { RESEND_API_KEY: 'mock', RESEND_AUDIENCE_ID: 'mock' } : {} }, console: { error() {} } });
  return { calls, post: email => exports.POST({ headers: { get: () => null }, json: async () => ({ email }) }) };
}
const valid = 'verification@example.invalid';
let test = route({ configured: false });
assert.equal((await test.post(valid)).status, 503);
assert.equal(test.calls.length, 0);
for (const email of [null, 123, {}, 'x', 'x@y', 'a\nb@c.test']) {
  test = route();
  assert.equal((await test.post(email)).status, 400);
  assert.equal(test.calls.length, 0);
}
test = route({ allowed: false });
assert.equal((await test.post(valid)).status, 429);
for (const contact of [{ error: { message: 'rejected' } }, { data: null }, {}]) {
  test = route({ contact });
  assert.equal((await test.post(valid)).status, 502);
  assert.deepEqual(test.calls, ['contact']);
}
test = route({ contact: new Error('mock') });
assert.equal((await test.post(valid)).status, 500);
for (const mailThrows of [false, true]) {
  test = route({ mailThrows });
  const result = await test.post(valid);
  assert.equal(result.status, 200);
  assert.equal(result.body.success, true);
  assert.deepEqual(test.calls, ['contact', 'welcome']);
}
console.log('PASS: newsletter validation, rate limit, configuration, provider rejection, and confirmed subscription; no external requests.');
