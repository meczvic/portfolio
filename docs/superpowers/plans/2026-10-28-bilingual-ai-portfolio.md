# Bilingual + AI Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a complete English portfolio experience plus an AI-Assisted Engineering section and a ProjectOps Control Center project entry.

**Architecture:** Keep Portuguese pages as the default and add static English counterparts under `en/`. Add compact language navigation rather than runtime machine translation. Keep AI/Control Center content on the home page so it strengthens the professional narrative without adding unnecessary product pages.

**Tech Stack:** Static HTML/CSS, vanilla JavaScript, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-10-28-bilingual-ai-portfolio.md`

## Global Constraints
- Preserve existing Portuguese project content except where required for language navigation and the new AI/Control Center sections.
- No runtime translation service.
- English project links must stay in the English experience.
- CV flow remains bilingual at `cv.html`.
- Do not invent unsupported capabilities for ProjectOps Control Center.

## Review Focus
- Relative paths from `en/` pages resolve to shared CSS/assets and CV correctly.
- English project navigation never unexpectedly returns to Portuguese.
- Language links point to equivalent pages.
- Remote AI icon failure does not hide tool names or descriptions.
- Mobile nav remains usable after adding language controls.

---

### Task 1: Add structural smoke tests
**Files:**
- Create: `tests/portfolio-structure.test.mjs`

- [ ] Write assertions for required English pages, AI tool names, Control Center copy and PT/EN links.
- [ ] Run against current branch and verify failure because English pages/content do not exist yet.
- [ ] Keep the test as a lightweight regression gate.

### Task 2: Upgrade Portuguese home
**Files:**
- Modify: `index.html`

- [ ] Add compact PT / EN language navigation.
- [ ] Add `AI-Assisted Engineering` section with Claude, GPT/Codex, Gemini and Antigravity.
- [ ] Add ProjectOps Control Center project card with mission, worktree/branch and logs narrative.
- [ ] Keep LinkedIn, GitHub and CV visible.

### Task 3: Build English home
**Files:**
- Create: `en/index.html`

- [ ] Translate home/about/project/contact content for an international recruiter.
- [ ] Include AI Toolchain and Control Center in English.
- [ ] Link ProjectOps, Inventário TI and Hughes Web to English detail pages.

### Task 4: Build English project pages
**Files:**
- Create: `en/projectops.html`
- Create: `en/inventario-ti.html`
- Create: `en/hughes-web.html`

- [ ] Translate the existing case studies faithfully.
- [ ] Preserve current implemented/planned distinctions.
- [ ] Add PT / EN navigation on each page.

### Task 5: Add language entry points to Portuguese detail pages
**Files:**
- Modify: `projectops.html`
- Modify: `inventario-ti.html`
- Modify: `hughes-web.html`
- Modify: `cv.html`

- [ ] Add a compact language control or equivalent English route without disturbing page structure.
- [ ] Keep CV's existing PT/EN PDF selector intact.

### Task 6: Verify and integrate
- [ ] Run structural test and HTML/link checks.
- [ ] Review branch diff for scope.
- [ ] Create PR and merge only after verification is green.
