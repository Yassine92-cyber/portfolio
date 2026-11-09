#!/usr/bin/env node
/**
 * Materializes binary assets checked in as base64 under .sync-assets/
 * when the real files are missing or clearly truncated.
 * Supports:
 *   - single `.b64` sidecars
 *   - preferred split: `.b64.p0`, `.b64.p1`, ...
 *   - legacy split: `.b64.part0`, `.b64.part1`, ...
 * Whitespace inside base64 payloads is ignored.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const staging = path.join(root, '.sync-assets');
if (!fs.existsSync(staging)) process.exit(0);

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

function expectedB64Len(n) {
  return 4 * Math.ceil(n / 3);
}

function pickJoined(parts, expectedBin) {
  parts = parts.slice().sort((a, b) => a.idx - b.idx);
  const want = expectedBin ? expectedB64Len(expectedBin) : null;
  const bodies = parts.map((p) => fs.readFileSync(p.path, 'utf8'));
  if (want != null) {
    for (let i = 0; i < bodies.length; i++) {
      let acc = '';
      for (let j = i; j < bodies.length; j++) {
        acc += bodies[j];
        const stripped = acc.replace(/\s+/g, '');
        if (stripped.length === want) return stripped;
        if (stripped.length > want) break;
      }
    }
  }
  return bodies.join('').replace(/\s+/g, '');
}

function collect() {
  const preferred = new Map(); // rel -> parts[]
  const legacy = new Map();
  const singles = new Map();
  for (const file of walk(staging)) {
    const name = path.basename(file);
    const dir = path.dirname(file);
    let m = name.match(/^(.*)\.b64\.p(\d+)$/);
    if (m) {
      const rel = path.relative(staging, path.join(dir, m[1]));
      const arr = preferred.get(rel) || [];
      arr.push({ idx: Number(m[2]), path: file });
      preferred.set(rel, arr);
      continue;
    }
    m = name.match(/^(.*)\.b64\.part(\d+)$/);
    if (m) {
      const rel = path.relative(staging, path.join(dir, m[1]));
      const arr = legacy.get(rel) || [];
      arr.push({ idx: Number(m[2]), path: file });
      legacy.set(rel, arr);
      continue;
    }
    if (name.endsWith('.b64')) {
      const rel = path.relative(staging, file).replace(/\.b64$/, '');
      singles.set(rel, file);
    }
  }
  return { preferred, legacy, singles };
}

const { preferred, legacy, singles } = collect();
const rels = new Set([...preferred.keys(), ...legacy.keys(), ...singles.keys()]);

for (const rel of rels) {
  const dest = path.join(root, rel);
  const expected = EXPECTED[rel.replace(/\\/g, '/')];
  const exists = fs.existsSync(dest) ? fs.statSync(dest).size : 0;
  if (expected && exists === expected) continue;

  let b64 = '';
  if (preferred.has(rel)) {
    b64 = pickJoined(preferred.get(rel), expected);
  } else if (legacy.has(rel)) {
    b64 = pickJoined(legacy.get(rel), expected);
  } else if (singles.has(rel)) {
    b64 = fs.readFileSync(singles.get(rel), 'utf8').replace(/\s+/g, '');
  }
  if (!b64) continue;

  // Keep a joined sidecar for debugging/cache
  const sidecar = path.join(staging, rel + '.b64');
  fs.mkdirSync(path.dirname(sidecar), { recursive: true });
  fs.writeFileSync(sidecar, b64);

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const buf = Buffer.from(b64, 'base64');
  if (expected && buf.length !== expected) {
    console.warn(`skip ${rel}: decoded ${buf.length}, expected ${expected}`);
    continue;
  }
  fs.writeFileSync(dest, buf);
  console.log(`materialized ${rel} (${buf.length} bytes)`);
}
