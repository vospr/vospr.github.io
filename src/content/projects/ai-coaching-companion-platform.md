---
title: "AI Coaching-Companion Platform Rebuild"
category: "software-engineering"
hook: "A legacy low-code coaching chatbot needed replacing with something that could operate across every channel a user actually works in — web, Slack, Teams — without becoming four separate codebases."
status: "published"
order: 1
stack: ["React", "Azure Container Apps", "PostgreSQL", "Anthropic Claude", "Markdown/Mermaid"]
links: []
---

## Problem

A legacy low-code coaching chatbot needed replacing with something that could operate across every channel a user actually works in — web, Slack, Teams — without becoming four separate codebases.

## Approach

- Multi-channel architecture (web, Slack, Microsoft Teams, MCP) on React + Azure Container Apps + PostgreSQL + Anthropic Claude.
- Owned the shared AI-development environment: kept a central "source of truth" doc and iteration-tracking doc current, drove PR quality through automated AI review agents.
- Designed and implemented backend/frontend features, APIs, and pipelines while preserving architectural consistency across the rebuild.

## Outcome

A live, multi-channel AI coaching companion replacing the legacy system — same coaching capability, now reachable from wherever the user already is, with an AI-assisted development workflow layered on top to keep delivery fast without losing review discipline.

<!--
Current role, private client engagement. Client name and internal program naming intentionally
omitted — see andrey-portfolio/drafts/01-project-inventory.md row 8. No public repo.
-->
