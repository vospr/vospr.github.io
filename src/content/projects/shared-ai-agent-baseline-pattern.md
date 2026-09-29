---
title: "Shared AI-Agent Baseline Pattern"
category: "ai-solutions"
hook: "Placeholder — not yet written. Client-agnostic SDLC pattern, from memory only; no client references."
status: "placeholder"
order: 5
stack: []
links: []
---

## Status

Not drafted. Needs a real writing pass — see `andrey-portfolio/drafts/01-project-inventory.md` Section G. Source inspiration is a client-owned repository; nothing from it gets copied or referenced.

## Problem (draft angle)

Multi-repo orgs adopting AI-assisted development end up with every repo defining its own agents/skills/instructions from scratch — duplicated, drifting, inconsistent.

## Approach (draft angle)

A versioned, shared baseline of agents/skills/instructions/MCP config, distributed to service repos via a package manager, so teams consume a curated baseline instead of duplicating it.

## Outcome (draft angle)

A general engineering-governance pattern applicable to any org running AI-assisted development across multiple repositories.
