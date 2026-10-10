---
title: "AI Adoption Measurement Framework"
category: "ai-solutions"
hook: "AI coding agents can speed up implementation while cost per shipped change and review wait remain invisible. I built two linked measurement tracks: one joins AI usage to delivered work; the other measures PR flow and prepares step attribution. An allocated-cost result and monthly timing baseline are validated; the full join is in pilot."
summary: "Python collectors reconcile Claude Code and Codex usage with billing and merged PRs. Read-only PR collection and phase events add delivery timing. A live pilot links a task, PR, pipeline run and artifact on the same code version; reviewer pickup, deployment and cost per step remain unproven."
status: "published"
order: 3
featured: true
keyTags: ["AI delivery metrics", "Python", "Claude Code"]
problem: "An internal AI-first programme needed evidence that faster coding improved delivery. Its dashboard relied on sparsely filled AI ticket labels and story points. It had no spend tied to shipped work or timestamp for the handoff from agent to person. Tool exports described usage by time; PR systems recorded review decisions, not when someone started reading. Without joining these records, a quick implementation can still wait days for review, and subscription totals can be mistaken for cost per change."
whatItDoes: "The August sample produced an allocated actual-spend distribution for delivered tickets in my own usage, leaving unattributed spend visible. September usage reconciles to a fresh full-month collection, but verified charges and a complete delivery join are missing, so there is no September dollar result. A separate full-month, read-only PR baseline measures lifetime and time to the first recorded review decision. Forward phase captures and a live task-to-PR-to-pipeline pilot prepare the joins needed for agent-to-human wait and later delivery steps."
howItsBuilt:
  - lead: "Count delivered work before allocating cost"
    detail: "a ticket enters the cost distribution only with a PR merged to main; in the first sample, the board's \"Done\" column overstated delivery by about 20%. Verified subscription charges are allocated by each ticket's share of tool-specific usage. The result reports median, quartiles and p90 with PR size as context, never cost per line."
  - lead: "Reconcile the tool logs"
    detail: "the collectors correct repeated usage records and session-resume counter resets that distorted early figures. Adjacent captures match a fresh full-month run exactly. On one feature ticket, a single long conversation consumed about 90% of cache-read tokens; all 13 delegated agents together used about 10%. That changed how I reset context between phases."
  - lead: "Measure PR flow honestly"
    detail: "sanitized, read-only collectors cover PR histories on two code platforms. The full-month baseline records creation-to-close and creation-to-first qualifying review decision. That decision is only a proxy: it cannot reveal when the reviewer started. An explicit human-start event and a response tied to the same PR version are specified for the missing interval."
  - lead: "Exercise the delivery join"
    detail: "a controlled live pilot linked a disposable task to an active PR, then to a successful manual pipeline run and its downloaded artifact on the same code version. Local step-event and readback tooling prepare the next joins. Automated writes, independent review, merge, deployment and acceptance are not yet proven."
  - lead: "Keep missing evidence visible"
    detail: "usage, billing, delivery and timing retain separate evidence. Unattributed spend stays unattributed; a review decision never becomes reviewer-start time, and a fixture never becomes live delivery evidence. Checksummed snapshots, full-month reconciliation and 100+ collector tests protect the results. Speed measures are paired with quality checks, not individual rankings."
facts:
  - k: "Type"
    v: "Measurement method + tooling"
  - k: "My role"
    v: "Designed and built the usage, delivery-cost and PR-timing measurement for an internal AI-first programme; other teams built the shared agent baseline"
  - k: "Status"
    v: "August cost result and September usage/PR baselines validated · live step join in pilot"
  - k: "Evidence"
    v: "Reconciled monthly snapshots · bounded live PR/pipeline test · 100+ collector tests · one-developer cost scope"
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
