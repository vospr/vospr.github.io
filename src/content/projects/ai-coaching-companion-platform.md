---
title: "AI Coaching-Companion Platform Rebuild"
category: "software-engineering"
hook: "A legacy low-code coaching chatbot needed replacing with something that could operate across every channel a user actually works in — web, Slack, Teams — without becoming four separate codebases."
summary: "Multi-channel AI coaching companion rebuild — web, Slack, Teams, MCP — replacing a legacy low-code system."
status: "published"
order: 1
featured: false
keyTags: ["React", "Azure Container Apps", "Anthropic Claude"]
problem: "A legacy low-code coaching chatbot needed replacing with something that could operate across every channel a user actually works in — web, Slack, Teams — without becoming four separate codebases."
whatItDoes: "A live, multi-channel AI coaching companion replacing the legacy system — same coaching capability, now reachable from wherever the user already is, with an AI-assisted development workflow layered on top to keep delivery fast without losing review discipline."
howItsBuilt:
  - lead: "Multi-channel architecture"
    detail: "web, Slack, Microsoft Teams, MCP on React + Azure Container Apps + PostgreSQL + Anthropic Claude."
  - lead: "AI-development environment ownership"
    detail: "kept a central source-of-truth doc and iteration-tracking doc current, drove PR quality through automated AI review agents."
  - lead: "Full-stack delivery"
    detail: "backend/frontend features, APIs, and pipelines while preserving architectural consistency across the rebuild."
facts:
  - k: "Type"
    v: "Platform rebuild"
  - k: "Channels"
    v: "Web · Slack · Teams · MCP"
  - k: "Evidence"
    v: "Live in production"
  - k: "Code"
    v: "Private (client engagement)"
stackGroups:
  - label: "Frontend"
    items: ["React"]
  - label: "Infra"
    items: ["Azure Container Apps", "PostgreSQL"]
  - label: "AI"
    items: ["Anthropic Claude"]
links: []
---
