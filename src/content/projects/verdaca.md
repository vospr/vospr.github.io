---
title: "Verdaca / Praxis"
category: "ai-implementations"
hook: "A multi-agent reasoning engine built to argue with itself before it gives you an answer — explicit tradeoffs, red-team dissent, and scoped recommendations instead of confident-sounding guesses."
status: "published"
order: 1
stack: ["Python 3.12", "FastAPI", "Pydantic", "SQLAlchemy", "Next.js", "TypeScript", "FastMCP", "LiteLLM", "SQLite FTS5", "OpenTelemetry", "Stripe", "GitHub Actions"]
links:
  - label: "GitHub"
    url: "https://github.com/verdaca/VERDACA"
---

## Problem

Most LLM "advisor" tools give a single confident answer with no visible reasoning trail or dissent — fine for demos, unreliable for real strategic decisions.

## Approach

- Ports-and-adapters architecture: pluggable memory, LLM, cost-metering, compaction, MCP, Teams, Slack, and webhook adapters — swap any piece without touching the core.
- Production-oriented auth/gateway: OIDC/JWKS/JWT, HMAC-SHA256 for Teams, Slack signature verification, budget and rate-limit controls.
- FastMCP + LiteLLM for model-agnostic orchestration; SQLite FTS5 for retrieval.
- Engineering rigor: ~49,700 Python LoC, 415+ tests, 90%+ coverage across core modules, module-level architecture/test-strategy docs.

## Outcome

A working multi-agent advisory system: submit a strategic question, get back multiple adversarial perspectives, a synthesized recommendation with explicit tradeoffs, and a full audit trail of how the answer was reached — reachable via web, Teams, Slack, or MCP, with budget/rate controls and Stripe billing wired in.

<!-- TODO: top-level architecture diagram (adapters / core / channels) -->
