---
title: "LangGraph AI Concierge"
category: "ai-solutions"
hook: "A travel-concierge prototype built around one idea: answer with cheap keyword rules when you can, and pay for an LLM call only when the rules aren't sure."
summary: "LangGraph prototype of rules-then-LLM routing for a travel concierge, built spec-first with AI coding agents, with a small measured routing eval."
status: "published"
order: 3
featured: false
keyTags: ["LangGraph", "Anthropic Claude", "LLM routing"]
problem: "A travel/hospitality assistant has to tell property questions, destination research and booking requests apart, without sending every message through one large prompt."
whatItDoes: "A command-line prototype. Keyword rules route clear requests at no LLM cost; unclear ones get a single Claude classification call with a confidence floor. Routes lead to keyword lookup over a small mock destination file, a live web search, or a booking stub. A guardrail step turns off-topic or unclear requests into a clarifying question or a human hand-off. On 40 hand-labelled utterances the rules alone pick the right route 52% of the time; with an LLM on the unclear ones, Haiku 4.5 matched Opus 4.6 on this set (65% vs 62%) at a fraction of the cost, so the router now defaults to Haiku."
howItsBuilt:
  - lead: "Two-stage routing"
    detail: "keyword rules in YAML decide clear cases; one Claude call classifies the rest; low confidence falls back to a clarifying question."
  - lead: "Failure paths first"
    detail: "no API key, search outage, missing profile and node errors each degrade to a labelled answer or a human hand-off; trace output refuses sensitive fields by construction."
  - lead: "Spec-first, AI-built"
    detail: "spec and story files before code; ~2,700 lines of Python."
  - lead: "Tested and measured"
    detail: "497 offline tests, ruff and strict mypy on the source, CI on Python 3.11 and 3.12, and a 40-row routing eval you can re-run."
  - lead: "My role"
    detail: "my idea, spec and architecture; code written by AI coding agents (BMAD workflow, Claude) under my review, Feb–Mar 2026."
facts:
  - k: "Type"
    v: "Routing prototype (command-line)"
  - k: "Scope"
    v: "Travel / hospitality (mock data)"
  - k: "Evidence"
    v: "Routing eval: 65% (Haiku 4.5) / 62% (Opus 4.6) vs 52% rules-only, 40 labelled queries"
  - k: "Router cost"
    v: "≈$0.012 (Haiku 4.5) vs ≈$0.038 (Opus 4.6) for the eval's 28 LLM calls"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "Anthropic Claude", "LangGraph", "DuckDuckGo Search"]
  - label: "Tooling"
    items: ["pytest", "uv", "YAML"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/LangGraph-AI-Concierge"
---
