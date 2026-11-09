#!/usr/bin/env node
/**
 * Materializes binary assets checked in as base64 under .sync-assets/
 * when the real files are missing or clearly truncated.
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

function collectCandidates(relBase) {
  const parts = [];
  const pChunks = [];
  let single = null;
  for (const file of walk(staging)) {
    const rel = path.relative(staging, file).replace(/\\/g, '/');
    const base = path.basename(file);
    if (rel === `${relBase}.b64`) {
      single = file;
      continue;
    }
    if (!rel.startsWith(`${relBase}.b64.`)) continue;
    if (base.includes('.part')) parts.push(file);
    else if (/\.b64\.p\d+$/.test(base)) pChunks.push(file);
  }
  const sortBySuffix = (files, re) =>
    files.sort((a, b) => {
      const na = Number((path.basename(a).match(re) || [])[1] || 0);
      const nb = Number((path.basename(b).match(re) || [])[1] || 0);
      return na - nb;
    });
  sortBySuffix(parts, /\.part(\d+)$/);
  sortBySuffix(pChunks, /\.p(\d+)$/);

  const joinFiles = (files) =>
    files.length ? files.map((f) => fs.readFileSync(f, 'utf8').trim()).join('') : null;

  const candidates = [];
  // Prefer complete single file first (most reliable)
  if (single) candidates.push({ source: 'single', b64: fs.readFileSync(single, 'utf8').trim() });
  if (parts.length) candidates.push({ source: 'part', b64: joinFiles(parts) });
  if (pChunks.length) candidates.push({ source: 'p', b64: joinFiles(pChunks) });
  return candidates;
}

for (const [rel, expected] of Object.entries(EXPECTED)) {
  const dest = path.join(root, rel);
  const exists = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
  if (exists === expected) continue;

  let chosen = null;
  for (const cand of collectCandidates(rel)) {
    if (!cand.b64) continue;
    const buf = Buffer.from(cand.b64, 'base64');
    if (buf.length === expected) {
      chosen = { buf, source: cand.source };
      break;
    }
    console.warn(`${rel}: candidate ${cand.source} decoded ${buf.length} bytes (want ${expected})`);
  }
  if (!chosen) {
    console.warn(`skip ${rel}: no usable base64 staging`);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, chosen.buf);
  console.log(`materialized ${rel} (${chosen.buf.length} bytes via ${chosen.source})`);
}
