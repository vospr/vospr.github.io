---
title: "Verdaca / Praxis"
category: "ai-solutions"
hook: "A governed AI decision workflow where every vendor — model, memory, compaction, channel — sits behind a contract-tested seam, and every deliberation run leaves a hashed JSON receipt."
summary: "Ports-and-adapters AI workflow with an auth-first gateway, cost metering and contract-tested vendor swaps."
status: "published"
order: 2
featured: true
keyTags: ["Python", "FastAPI", "FastMCP", "LiteLLM"]
problem: "Most LLM \"advisor\" tools give a single confident answer with no visible reasoning trail or dissent — fine for demos, unreliable for real strategic decisions."
whatItDoes: "Two capabilities, not yet wired together. First, a model-backed deliberation loop: a producer (Claude Haiku 4.5) drafts, a reviewer (Claude Sonnet 5.5) writes a counterargument from the question and evidence alone and then critiques the draft, and a synthesizer returns a typed outcome (answer, clarify, abstain or escalate); errors fail closed to escalate. Every run writes a JSON receipt with evidence, draft, critique, diff, per-call cost and stop reasons, hashed with SHA-256 (not signed). Three runs of the same question are recorded in the repo, each costing about $0.03; one was called from Claude Desktop over MCP. Known limits, stated in the README: in the Claude Desktop run the synthesizer dropped some of the reviewer's hedges, and the reviewer critiques against its own counterargument. Second, an auth-first gateway (OIDC/JWT, replay protection, per-key budget checks, not yet seeing direct model spend); identity is verified against a local stand-in in the current version. Memory and compaction adapters are swappable and proven by shared contract suites."
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
    detail: "~35k lines of Python, 440+ root tests and 1,450+ kernel tests in CI, contract suites per port, import-linter and AST gates enforcing layer boundaries."
facts:
  - k: "Type"
    v: "Governed AI workflow · ports & adapters"
  - k: "Channels"
    v: "Claude Desktop (MCP, run live once) · Teams · Slack (contract-tested)"
  - k: "Evidence"
    v: "Recorded deliberation receipts · contract suites"
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
  - label: "Deliberation receipts"
    url: "https://github.com/verdaca/VERDACA/tree/main/docs/receipts"
  - label: "Getting started"
    url: "https://github.com/verdaca/VERDACA#run-a-deliberation"
---
