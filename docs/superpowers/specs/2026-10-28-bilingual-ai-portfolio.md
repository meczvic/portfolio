# Bilingual + AI Portfolio Design

## Intent
Transform the portfolio into a bilingual PT/EN experience while making AI-assisted engineering a visible part of Victor Hugo Ferreira Dantas' professional identity.

## Goals
- Keep the current Portuguese portfolio intact as the primary local experience.
- Provide a complete English experience for Home, ProjectOps, Inventário TI and Hughes Web.
- Add a discreet PT / EN language choice and preserve language while navigating inside each experience.
- Add an AI-Assisted Engineering section that presents Claude, OpenAI GPT/Codex, Gemini and Antigravity as tools used in real development workflows.
- Add ProjectOps Control Center as a compact portfolio project focused on multi-agent orchestration.
- Keep the visual language clean, dark, technical and consistent with the existing portfolio.

## Non-goals
- No automatic machine translation at runtime.
- No external localization framework.
- No claim that AI systems worked autonomously without human direction/review.
- No oversized dedicated Control Center case study until the project has more material.

## Approach
Use parallel static English pages under `en/` and direct PT/EN navigation links. This avoids runtime translation errors, makes the English copy reviewable, works on GitHub Pages, and lets English project pages link to each other without falling back to Portuguese.

AI identity will be shown through compact branded tool cards. Claude, OpenAI/Codex and Gemini use recognizable vendor marks via lightweight remote SVG icons; Antigravity uses a custom orbit-style visual token because no stable official web asset is assumed.

ProjectOps Control Center will appear as a portfolio project with a concise narrative: a desktop coordination layer for AI coding agents, tracking active mission, agent, worktree/branch and execution logs.

## UX
- Portuguese home: a small `PT | EN` control in the navbar and an English entry point.
- English home: equivalent `PT | EN` control, English navigation and English project copy.
- English ProjectOps / Inventário TI / Hughes Web pages stay fully in English and link back to the English home.
- CV page remains bilingual and is linked from both experiences.

## Content principles
- Translate meaning, not word-for-word strings.
- Keep product names, APIs and technical terms intact.
- Present AI usage as engineering workflow: planning, implementation, debugging, review, testing, documentation and parallel analysis.
- Control Center is framed as tooling created to manage the development process itself, not as a production enterprise platform.
