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

function collectBase64(relBase) {
  const preferred = [];
  const legacyParts = [];
  const legacyP = [];
  let single = null;
  for (const file of walk(staging)) {
    const rel = path.relative(staging, file).replace(/\\/g, '/');
    if (rel === `${relBase}.b64`) single = file;
    else if (rel.startsWith(`${relBase}.b64.part`)) preferred.push(file);
    else if (rel.startsWith(`${relBase}.b64.p`)) {
      // distinguish .pN vs .partN already handled
      if (!path.basename(file).includes('.part')) legacyP.push(file);
      else preferred.push(file);
    }
  }
  const sortNumeric = (files, marker) =>
    files.sort((a, b) => {
      const na = Number(path.basename(a).split(marker).pop());
      const nb = Number(path.basename(b).split(marker).pop());
      return na - nb;
    });
  sortNumeric(preferred, '.part');
  sortNumeric(legacyP, '.p');
  sortNumeric(legacyParts, '.p');

  const tryJoin = (files) => {
    if (!files.length) return null;
    return files.map((f) => fs.readFileSync(f, 'utf8').trim()).join('');
  };

  const candidates = [];
  if (preferred.length) candidates.push(tryJoin(preferred));
  if (legacyP.length) candidates.push(tryJoin(legacyP));
  if (single) candidates.push(fs.readFileSync(single, 'utf8').trim());

  for (const b64 of candidates) {
    if (!b64) continue;
    try {
      const buf = Buffer.from(b64, 'base64');
      return buf;
    } catch {
      /* try next */
    }
  }
  return null;
}

for (const [rel, expected] of Object.entries(EXPECTED)) {
  const dest = path.join(root, rel);
  const exists = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
  if (exists === expected) continue;
  const buf = collectBase64(rel);
  if (!buf) {
    console.warn(`skip ${rel}: no usable base64 staging`);
    continue;
  }
  if (expected && buf.length !== expected) {
    console.warn(`skip ${rel}: decoded ${buf.length} bytes, expected ${expected}`);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  console.log(`materialized ${rel} (${buf.length} bytes)`);
}
