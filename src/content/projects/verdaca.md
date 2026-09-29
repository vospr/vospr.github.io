---
title: "Verdaca / Praxis"
category: "ai-solutions"
hook: "A multi-agent reasoning engine built to argue with itself before it gives you an answer — explicit tradeoffs, red-team dissent, and scoped recommendations instead of confident-sounding guesses."
summary: "Multi-agent engine that argues with itself before recommending, with dissent and an audit trail."
status: "published"
order: 1
featured: true
keyTags: ["Python", "FastAPI", "FastMCP", "LiteLLM"]
problem: "Most LLM \"advisor\" tools give a single confident answer with no visible reasoning trail or dissent — fine for demos, unreliable for real strategic decisions."
whatItDoes: "A working multi-agent advisory system: submit a strategic question, get back multiple adversarial perspectives, a synthesized recommendation with explicit tradeoffs, and a full audit trail of how the answer was reached — reachable via web, Teams, Slack, or MCP, with budget/rate controls and Stripe billing wired in."
howItsBuilt:
  - lead: "Ports-and-adapters architecture"
    detail: "pluggable memory, LLM, cost-metering, compaction, MCP, Teams, Slack, and webhook adapters — swap any piece without touching the core."
  - lead: "Production-oriented auth/gateway"
    detail: "OIDC/JWKS/JWT, HMAC-SHA256 for Teams, Slack signature verification, budget and rate-limit controls."
  - lead: "Model-agnostic orchestration"
    detail: "FastMCP + LiteLLM; SQLite FTS5 for retrieval."
  - lead: "Engineering rigor"
    detail: "~49,700 Python LoC, 415+ tests, 90%+ coverage across core modules, module-level architecture/test-strategy docs."
facts:
  - k: "Type"
    v: "Multi-agent system"
  - k: "Channels"
    v: "Web · Teams · Slack · MCP"
  - k: "Evidence"
    v: "415+ tests · 90%+ cov."
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Backend"
    items: ["Python 3.12", "FastAPI", "Pydantic", "SQLAlchemy"]
  - label: "AI & retrieval"
    items: ["FastMCP", "LiteLLM", "SQLite FTS5"]
  - label: "Frontend"
    items: ["Next.js", "TypeScript"]
  - label: "Ops & billing"
    items: ["OpenTelemetry", "GitHub Actions", "Stripe"]
links:
  - label: "GitHub"
    url: "https://github.com/verdaca/VERDACA"
---
