---
title: "Context Engineering Template"
category: "ai-solutions"
hook: "Garbage context in, garbage code out. A Claude Code scaffold that gives agents durable memory, separated roles and hard stop conditions — built in early 2026, revised Oct 2026."
summary: "Claude Code multi-agent scaffold (Feb–Apr 2026, revised Oct 2026): stateless dispatcher, 7 role agents, blind review, file-based memory, path and sequencing hooks. Presented at an internal engineering workshop (~40 engineers)."
status: "published"
order: 2
featured: false
keyTags: ["Claude Code", "Multi-agent", "Spec-driven"]
problem: "Agentic coding tools are only as good as the context and structure around them — hand an agent a blank slate and results drift across sessions."
whatItDoes: "A reusable Claude Code setup. A stateless dispatcher routes work to planner, architect, implementer, reviewer, blind-reviewer and tester agents; decisions and failure patterns persist in files so work survives session resets; circuit breakers stop review loops and plan explosions. Compared once on a small task: the full pipeline bought scope and traceability but logged ~614k tokens and needed a fix pass, while a single-prompt run was cleaner first time on an estimated <100k — which is why pipeline depth is sized per task."
howItsBuilt:
  - lead: "Dispatcher + sized pipeline"
    detail: "CLAUDE.md routes tasks to least-privilege subagents; Micro→Large sizing picks model tier and pipeline depth."
  - lead: "Adversarial review"
    detail: "A blind reviewer is given only the diff; a conflict table resolves disagreements; max 3 review cycles before escalation."
  - lead: "File-based memory"
    detail: "Decisions, pipeline state and failure patterns live in files and are injected into later dispatches."
  - lead: "Hooks that actually block"
    detail: "Write-path and plan-before-implement hooks on Claude Code's hook contract; the path hook is verified blocking a live session. Acceptance checks and logs in the repo."
  - lead: "Compared, with stated limits"
    detail: "Four-scenario comparison (Feb 2026): one run each, self-assessed; only the full pipeline's tokens were logged. Report and limits in the repo."
  - lead: "Lineage"
    detail: "Synthesised from published context- and harness-engineering writing; April hardening adapted from Atelier Pipeline; community coding rules vendored from awesome-cursorrules."
facts:
  - k: "Type"
    v: "Claude Code workflow template"
  - k: "Built"
    v: "Feb–Apr 2026 · revised Oct 2026"
  - k: "Evidence"
    v: "Internal workshop (~40) · article · one-task comparison · acceptance checks"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Tooling"
    items: ["Claude Code (subagents, skills, hooks)", "Bash", "jq"]
  - label: "Practice"
    items: ["Context engineering", "Spec-driven development", "Adversarial review"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/context-engineering-template"
  - label: "Article"
    url: "https://medium.com/@vospr2/the-foundation-for-agentic-ai-what-to-build-before-you-trust-it-with-a-project-66ec5976e808"
---
