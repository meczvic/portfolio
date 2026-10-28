import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve(process.cwd());
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const mustExist = (p) => assert.ok(fs.existsSync(path.join(root, p)), `${p} must exist`);

for (const p of ['index.html','en/index.html','en/projectops.html','en/inventario-ti.html','en/hughes-web.html']) mustExist(p);

const pt = read('index.html');
for (const needle of ['AI-Assisted Engineering','Claude','GPT / Codex','Gemini','Antigravity','ProjectOps Control Center','href="en/index.html"']) {
  assert.ok(pt.includes(needle), `Portuguese home missing: ${needle}`);
}

const en = read('en/index.html');
assert.ok(en.includes('<html lang="en">'), 'English home must declare lang=en');
for (const needle of ['AI-Assisted Engineering','ProjectOps Control Center','href="projectops.html"','href="inventario-ti.html"','href="hughes-web.html"','href="../index.html"']) {
  assert.ok(en.includes(needle), `English home missing: ${needle}`);
}

const equivalents = {
  'en/projectops.html':'../projectops.html',
  'en/inventario-ti.html':'../inventario-ti.html',
  'en/hughes-web.html':'../hughes-web.html',
};
for (const [p,equivalent] of Object.entries(equivalents)) {
  const html = read(p);
  assert.ok(html.includes('<html lang="en">'), `${p} must declare lang=en`);
  assert.ok(html.includes('href="../styles.css'), `${p} must use shared root stylesheet`);
  assert.ok(html.includes(`href="${equivalent}"`), `${p} must link to Portuguese equivalent`);
  assert.ok(html.includes('href="index.html"'), `${p} must link back to English portfolio`);
}

console.log('portfolio structure: PASS');
