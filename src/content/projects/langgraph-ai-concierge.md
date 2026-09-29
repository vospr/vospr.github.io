---
title: "LangGraph AI Concierge"
category: "ai-implementations"
hook: "A concierge that knows when to just answer, when to look something up, and when to hand off — routing is the actual hard part, not the chat."
status: "published"
order: 3
stack: ["Python", "Anthropic Claude", "LangGraph", "StateGraph", "Pydantic", "YAML", "Ruff", "mypy", "pytest"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/LangGraph-AI-Concierge"
---

## Problem

A travel/hospitality concierge bot needs to handle everything from simple FAQ to multi-step research and booking, without one giant prompt trying to do all of it at once.

## Approach

- LangGraph StateGraph with deterministic and LLM-based routing across RAG, research, booking-stub, guardrail, synthesis, and follow-up nodes.
- File-based memory, structured trace allowlists/denylists, and token-budget management to keep runs bounded and auditable.
- 46 unit tests, 8 e2e tests, strict lint/type tooling (Ruff, mypy), ADR-backed architecture decisions.

## Outcome

A working multi-node concierge agent that routes between deterministic and LLM-driven paths depending on the request, with test coverage and architecture documentation to back the design choices.
