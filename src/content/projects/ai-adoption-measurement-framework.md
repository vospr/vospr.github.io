---
title: "AI Adoption Measurement Framework"
category: "ai-solutions"
hook: "Teams adopting AI coding agents can say they feel faster, but not what a delivered change costs or where the time goes. I built a method and a small toolkit that starts to answer both, per delivered change, and it runs monthly on an ongoing client engagement."
summary: "A measurement method and Python collectors for AI-assisted delivery. They allocate AI spend to each delivered change and measure the wait between steps, and the method specifies how to record whether an agent, a human or automation ran each step. Running monthly since August 2026."
status: "published"
order: 3
featured: true
keyTags: ["AI delivery metrics", "Python", "Claude Code"]
problem: "An internal AI-first programme set out to measure its adoption across a client account. The dashboard only showed whether AI touched a ticket (through labels that were mostly empty), measured throughput in story points, and had no cost data and nothing finer than monthly. Self-reported speed is not evidence: in a 2025 controlled study (METR), developers felt ~20% faster and were measured ~19% slower."
whatItDoes: "Each month it reports what AI tooling (my own usage so far) cost per delivered change, as a distribution with change size as context. Alongside it runs a read-only baseline of pull-request lifetime and review timing, and a proposed record of which lifecycle steps an agent, a human or automation performed, so the wait after an agent finishes becomes measurable."
howItsBuilt:
  - lead: "Cost per delivered change"
    detail: "a change counts only when its pull request merges to main. On the first sample the board's \"Done\" overstated delivery by ~20%. Fixed subscriptions are allocated by each ticket's share of token use, per tool, and reported as a median / quartiles / p90 distribution with pull-request size as context, never as cost per line."
  - lead: "Fix the counting first"
    detail: "before publishing anything, I found that one tool's logs double-counted usage ~2× and the other's under-counted after session resumes (up to ~30× on one session). I retracted the earlier figures and rebuilt both collectors with reconciliation checks."
  - lead: "Where the time goes"
    detail: "a read-only, sanitized collector over pull-request history on two code platforms (lifetime, first recorded review), and a specification for recording who executed each step and when, so the wait between an agent finishing and a human picking up can be measured. Proxies are labelled as proxies."
  - lead: "Why one ticket cost so much"
    detail: "a breakdown of one feature ticket showed ~90% of its tokens came from a single conversation that was never reset, while all 13 review and QA agents together cost ~10%. Cost scales with turns × carried context, which turned into an operating checklist: reset at phase boundaries, batch independent calls, keep agent output on disk."
  - lead: "Guardrails"
    detail: "every speed metric is paired with a quality counter-metric. Acceptance rate, lines of code and per-developer comparisons are excluded. Frozen, checksummed snapshots are reconciled week by week against full-month runs, and 100+ unit tests cover the collectors."
facts:
  - k: "Type"
    v: "Measurement method + tooling"
  - k: "My role"
    v: "Designed and built the delivery-cost measurement for an internal AI-first programme (one of its tracks; other teams built the shared agent baseline)"
  - k: "Status"
    v: "Running monthly since Aug 2026 · step attribution specified, not yet built"
  - k: "Evidence"
    v: "Monthly reconciled reports · 100+ unit tests · cost data covers one developer so far"
  - k: "Code"
    v: "Private (client engagement)"
stackGroups:
  - label: "Collection"
    items: ["Python (stdlib only)", "Claude Code & Codex session logs"]
  - label: "Sources"
    items: ["Pull-request APIs (two code platforms)"]
  - label: "Method"
    items: ["DORA", "Counter-metric pairing", "Distribution reporting"]
links: []
---
