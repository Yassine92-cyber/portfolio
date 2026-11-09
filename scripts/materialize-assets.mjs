#!/usr/bin/env node
/**
 * Materializes binary assets checked in as base64 under .sync-assets/
 * when the real files are missing or clearly truncated. Safe no-op when
 * real assets already exist at the expected sizes.
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
    else if (ent.name.endsWith('.b64')) out.push(p);
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

for (const file of walk(staging)) {
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
