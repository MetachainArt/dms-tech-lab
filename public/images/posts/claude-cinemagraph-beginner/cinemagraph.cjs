// Cinemagraph demo: rain on window panes + cup steam. Usage: node cinemagraph.cjs [base.png]
// Setup: npm install sharp ; ffmpeg must be on PATH. No Python.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const sharp = require('sharp');
const OUT = __dirname, BASE = process.argv[2] || path.join(OUT, 'base.png');
const SRC_W = 1672, SRC_H = 941, W = 1280, H = 720, FPS = 24, DUR = 10, N = FPS * DUR;
const sx = x => Math.round(x * W / SRC_W), sy = y => Math.round(y * H / SRC_H);

// ---- Mask geometry (base-image coords, scaled to 1280x720) ----
const INSET = 14;
const panes = [
  [0 + INSET, 0 + INSET, 512 - INSET, 493 - INSET],     // left pane  x0-512 y0-493
  [571 + INSET, 0 + INSET, 1106 - INSET, 482 - INSET]]; // right pane x571-1106 y0-482 (mullion between is excluded)
const plantEx = [0, 416, 124, 941];                     // plant lower-left excluded
const steamBox = [Math.round(0.81 * W) - 38, 330, Math.round(0.81 * W) + 42, 478]; // output coords, above cup rim
const mask = new Uint8Array(W * H), paneMask = new Uint8Array(W * H), steamMask = new Uint8Array(W * H);
const prect = panes.map(r => [sx(r[0]), sy(r[1]), sx(r[2]), sy(r[3])]);
const pex = [sx(plantEx[0]), sy(plantEx[1]), sx(plantEx[2]), sy(plantEx[3])];
for (const r of prect) for (let y = r[1]; y < r[3]; y++) for (let x = r[0]; x < r[2]; x++) {
  if (x >= pex[0] && x < pex[2] && y >= pex[1] && y < pex[3]) continue;
  paneMask[y * W + x] = 1;
}
for (let y = steamBox[1]; y < steamBox[3]; y++) for (let x = steamBox[0]; x < steamBox[2]; x++) steamMask[y * W + x] = 1;
for (let i = 0; i < W * H; i++) mask[i] = paneMask[i] | steamMask[i];

function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const rnd = rng(20261002);

// ---- Rain: deterministic streaks; integer cycle counts k => exactly periodic in u=t/T ----
const drops = [];
for (const r of prect) {
  const cnt = Math.round((r[2] - r[0]) * (r[3] - r[1]) / 2600);
  for (let i = 0; i < cnt; i++) drops.push({ x: r[0] + rnd() * (r[2] - r[0]), y0: r[1], span: r[3] - r[1], ph: rnd(), k: [7, 9, 11][Math.floor(rnd() * 3)], len: 9 + rnd() * 10, a: 0.16 + rnd() * 0.14, sl: 0.06 });
}
const RAIN = [205, 225, 255];
function blend(buf, x, y, col, a) {
  if (x < 0 || y < 0 || x >= W || y >= H) return;
  const i = y * W + x; if (!paneMask[i]) return; const o = i * 3;
  for (let c = 0; c < 3; c++) buf[o + c] = Math.round(buf[o + c] + (col[c] - buf[o + c]) * a);
}
// ---- Steam: rising soft blobs, phase = (offset + u) mod 1, clipped by steamMask ----
const cx = Math.round(0.81 * W); const STEAM = [255, 238, 215];
const blobs = []; for (let i = 0; i < 6; i++) blobs.push({ off: i / 6, ph: rnd() * 6.283, amp: 5 + rnd() * 5 });

function render(base, u) { // u = t/T; only fractional part matters
  const f = Buffer.from(base);
  for (const d of drops) {
    const p = (((d.ph + d.k * u) % 1) + 1) % 1; const yh = d.y0 - d.len + p * (d.span + d.len);
    for (let s = 0; s <= d.len; s++) {
      const y = yh + s, fy = Math.floor(y); if (y < d.y0 || y >= d.y0 + d.span) continue;
      const x = d.x + d.sl * (y - d.y0), fx = Math.floor(x), w1 = x - fx, a = d.a * (0.25 + 0.75 * s / d.len);
      blend(f, fx, fy, RAIN, a * (1 - w1)); blend(f, fx + 1, fy, RAIN, a * w1);
    }
  }
  const y0 = steamBox[1], y1 = steamBox[3], x0 = steamBox[0], x1 = steamBox[2];
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
    const i = y * W + x; if (!steamMask[i]) continue; let a = 0;
    for (const b of blobs) {
      const p = (((b.off + u) % 1) + 1) % 1;
      const by = y1 - 4 - p * (y1 - y0 - 8), bx = cx + b.amp * Math.sin(6.283 * p + b.ph), sg = 6 + p * 12;
      const dx = x - bx, dy = (y - by) * 0.8;
      a += Math.exp(-(dx * dx + dy * dy) / (2 * sg * sg)) * 0.20 * Math.pow(Math.sin(Math.PI * p), 1.5);
    }
    const ex = Math.min(x - x0, x1 - 1 - x) / 14, ey = Math.min(y - y0, y1 - 1 - y) / 14; a *= Math.max(0, Math.min(1, ex, ey)); a = Math.min(a, 0.22);
    const o = i * 3; for (let c = 0; c < 3; c++) f[o + c] = Math.round(f[o + c] + (STEAM[c] - f[o + c]) * a);
  }
  return f;
}
function countOutside(a, b) {
  let diffOut = 0, diffIn = 0, outTotal = 0;
  for (let i = 0; i < W * H; i++) {
    const o = i * 3, d = a[o] !== b[o] || a[o + 1] !== b[o + 1] || a[o + 2] !== b[o + 2];
    if (mask[i]) { if (d) diffIn++; } else { outTotal++; if (d) diffOut++; }
  }
  return { outsideMaskPixels: outTotal, changedOutside: diffOut, unchangedOutside: outTotal - diffOut, changedInside: diffIn };
}
const prep = p => sharp(p).removeAlpha().resize(W, H, { fit: 'fill', kernel: 'lanczos3' });

(async () => {
  const report = { W, H, FPS, DUR, frames: N };
  const base = await prep(BASE).raw().toBuffer();
  await prep(BASE).png().toFile(path.join(OUT, 'base_1280x720.png'));
  const mb = Buffer.alloc(W * H); let mp = 0; for (let i = 0; i < W * H; i++) { if (mask[i]) { mb[i] = 255; mp++; } }
  report.maskPixels = mp; report.maskRects = { panes: prect, plantExclude: pex, steam: steamBox };
  await sharp(mb, { raw: { width: W, height: H, channels: 1 } }).png().toFile(path.join(OUT, 'mask.png'));
  const ov = Buffer.from(base);
  for (let i = 0; i < W * H; i++) if (mask[i]) { const o = i * 3; ov[o] = Math.round(ov[o] * 0.45); ov[o + 1] = Math.round(ov[o + 1] * 0.45 + 0.55 * 110); ov[o + 2] = Math.round(ov[o + 2] * 0.45 + 0.55 * 255); }
  await sharp(ov, { raw: { width: W, height: H, channels: 3 } }).png().toFile(path.join(OUT, 'mask_overlay.png'));

  const fr = t => render(base, t / DUR), res = {}, f0 = fr(0);
  for (const t of [0, 2, 5]) res['t' + t] = countOutside(fr(t), base);
  res.t10_equals_t0_raw = Buffer.compare(fr(10), f0) === 0;
  res.t2_differs_t0 = Buffer.compare(fr(2), f0) !== 0; res.t5_differs_t0 = Buffer.compare(fr(5), f0) !== 0;
  report.preEncode = res;

  const mp4 = path.join(OUT, 'demo.mp4');
  const ff = cp.spawn('ffmpeg', ['-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', W + 'x' + H, '-r', String(FPS), '-i', '-', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '12', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4], { stdio: ['pipe', 'ignore', 'pipe'] });
  let err = ''; ff.stderr.on('data', d => err += d); const done = new Promise(r => ff.on('close', r));
  for (let n = 0; n < N; n++) { if (!ff.stdin.write(render(base, n / N))) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); if (await done !== 0) throw new Error(err);

  const dec = n => cp.execFileSync('ffmpeg', ['-v', 'error', '-i', mp4, '-vf', 'select=eq(n\\,' + n + ')', '-vsync', '0', '-frames:v', '1', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], { maxBuffer: 1 << 28 });
  report.encoded = {}; for (const t of [0, 2, 5]) report.encoded['t' + t] = countOutside(dec(t * FPS), base);
  const frames = [0, 2, 4, 6, 8, 9.9583].map(s => dec(Math.round(s * FPS)));
  const tw = 640, th = 360, comps = [];
  for (let i = 0; i < frames.length; i++) comps.push({ input: await sharp(frames[i], { raw: { width: W, height: H, channels: 3 } }).resize(tw, th).png().toBuffer(), left: (i % 2) * tw, top: Math.floor(i / 2) * th });
  await sharp({ create: { width: tw * 2, height: th * 3, channels: 3, background: '#000' } }).composite(comps).png().toFile(path.join(OUT, 'contact_sheet.png'));
  await sharp(dec(3 * FPS), { raw: { width: W, height: H, channels: 3 } }).jpeg({ quality: 92 }).toFile(path.join(OUT, 'keyframe.jpg'));
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
})().catch(e => { console.error(e); process.exit(1); });
