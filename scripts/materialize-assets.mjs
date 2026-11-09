#!/usr/bin/env node
/**
 * Materializes binary assets checked in as base64 under .sync-assets/
 * when the real files are missing or clearly truncated. Safe no-op when
 * real assets already exist at the expected sizes.
 * Supports split payloads: <path>.b64.part1 + .part2 + ... are concatenated.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const staging = path.join(root, '.sync-assets');
if (!fs.existsSync(staging)) {
  process.exit(0);
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const EXPECTED = {
  'app/apple-icon.png': 3597,
  'public/icon-192.png': 3819,
  'public/icon-512.png': 13840,
  'public/images/yassine-og.jpg': 26752,
  'public/images/yassine-portrait.webp': 71548,
};

// Join split part files into contiguous .b64 sidecars when present
const allFiles = walk(staging);
const partRe = /\.b64\.part(\d+)$/;
const partsByBase = new Map();
for (const file of allFiles) {
  const m = file.match(partRe);
  if (!m) continue;
  const base = file.replace(partRe, '.b64');
  const idx = Number(m[1]);
  if (!partsByBase.has(base)) partsByBase.set(base, []);
  partsByBase.get(base).push({ idx, file });
}
for (const [base, parts] of partsByBase) {
  parts.sort((a, b) => a.idx - b.idx);
  const joined = parts.map(({ file }) => fs.readFileSync(file, 'utf8')).join('');
  fs.mkdirSync(path.dirname(base), { recursive: true });
  fs.writeFileSync(base, joined);
  console.log(`joined ${path.relative(staging, base)} from ${parts.length} parts`);
}

for (const file of walk(staging)) {
  if (!file.endsWith('.b64')) continue;
  const rel = path.relative(staging, file).replace(/\.b64$/, '');
  const dest = path.join(root, rel);
  const expected = EXPECTED[rel.replace(/\\/g, '/')];
  const exists = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
  if (expected && exists === expected) {
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const buf = Buffer.from(fs.readFileSync(file, 'utf8'), 'base64');
  fs.writeFileSync(dest, buf);
  console.log(`materialized ${rel} (${buf.length} bytes)`);
}
