---
title: "Verdaca / Praxis"
category: "ai-solutions"
hook: "A governed AI decision workflow where every vendor — model, memory, compaction, channel — sits behind a contract-tested seam, so you can swap tools without losing the audit record."
summary: "Ports-and-adapters AI workflow with an auth-first gateway, cost metering and contract-tested vendor swaps."
status: "published"
order: 1
featured: false
keyTags: ["Python", "FastAPI", "FastMCP", "LiteLLM"]
problem: "Most LLM \"advisor\" tools give a single confident answer with no visible reasoning trail or dissent — fine for demos, unreliable for real strategic decisions."
whatItDoes: "An auth-first gateway (OIDC/JWT, replay protection, per-key budget checks — not yet seeing direct model spend) that ran an AI request end to end against real services in an earlier version (real OIDC, model call, cost ledger, memory); the current version is verified against a local identity stand-in. Memory and compaction adapters are swappable and proven by shared contract suites. A multi-agent deliberation loop (producer, isolated reviewer, quality gates) is designed and implemented as a tested state machine; wiring it to live model calls is the next step."
howItsBuilt:
  - lead: "Product owner and architect"
    detail: "I defined the system and its building blocks; BMAD agent personas in Claude Code designed and implemented most of the code under my stage gates."
  - lead: "Ports-and-adapters architecture"
    detail: "pluggable memory, LLM, cost-metering, compaction, MCP, Teams, Slack, and webhook adapters — swaps proven by contract tests for memory (Mem0 ↔ Letta) and compaction (LLMLingua ↔ in-tree stub)."
  - lead: "Production-oriented auth/gateway"
    detail: "OIDC/JWKS/JWT, HMAC-SHA256 for Teams, Slack signature verification, budget-check and rate-limit controls (not yet seeing direct model spend); identity verified against a local stand-in in the current version."
  - lead: "Model-agnostic LLM access"
    detail: "LiteLLM for model access; MCP server via FastMCP; SQLite FTS5 for retrieval."
  - lead: "Engineering rigor"
    detail: "~35k lines of Python, 420+ tests, contract suites per port, import-linter and AST gates enforcing layer boundaries."
facts:
  - k: "Type"
    v: "Governed AI workflow · ports & adapters"
  - k: "Channels"
    v: "Teams · Slack · MCP (contract-tested)"
  - k: "Evidence"
    v: "420+ tests · contract suites"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Backend"
    items: ["Python 3.12", "FastAPI", "Pydantic"]
  - label: "AI & retrieval"
    items: ["FastMCP", "LiteLLM", "Mem0", "Letta", "LLMLingua", "SQLite FTS5"]
  - label: "Ops"
    items: ["GitHub Actions", "uv"]
links:
  - label: "GitHub"
    url: "https://github.com/verdaca/VERDACA"
---
