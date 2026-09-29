---
title: "LangGraph AI Concierge"
category: "ai-solutions"
hook: "A concierge that knows when to just answer, when to look something up, and when to hand off — routing is the actual hard part, not the chat."
summary: "Multi-node concierge agent with deterministic and LLM-driven routing, backed by 54 tests and ADRs."
status: "published"
order: 3
featured: false
keyTags: ["LangGraph", "Anthropic Claude", "Pydantic"]
problem: "A travel/hospitality concierge bot needs to handle everything from simple FAQ to multi-step research and booking, without one giant prompt trying to do all of it at once."
whatItDoes: "A working multi-node concierge agent that routes between deterministic and LLM-driven paths depending on the request, with test coverage and architecture documentation to back the design choices."
howItsBuilt:
  - lead: "StateGraph routing"
    detail: "deterministic and LLM-based routing across RAG, research, booking-stub, guardrail, synthesis, and follow-up nodes."
  - lead: "Bounded, auditable runs"
    detail: "file-based memory, structured trace allowlists/denylists, and token-budget management."
  - lead: "Engineering rigor"
    detail: "46 unit tests, 8 e2e tests, strict lint/type tooling (Ruff, mypy), ADR-backed architecture decisions."
facts:
  - k: "Type"
    v: "Multi-agent concierge"
  - k: "Scope"
    v: "Travel / hospitality"
  - k: "Evidence"
    v: "46 unit + 8 e2e tests"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "Anthropic Claude", "LangGraph", "StateGraph", "Pydantic"]
  - label: "Tooling"
    items: ["Ruff", "mypy", "pytest", "YAML"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/LangGraph-AI-Concierge"
---
