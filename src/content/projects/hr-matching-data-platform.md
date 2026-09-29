---
title: "HR Matching Data Platform"
category: "ml-data-science"
hook: "Candidate-position matching isn't one algorithm — it's filtering, similarity, skill-ratio, and timing logic all agreeing with each other, at data-warehouse scale."
status: "published"
order: 2
stack: ["Python", "SQL", "dbt", "BigQuery", "PostgreSQL", "Kafka", "GCP"]
links: []
---

## Problem

Matching candidates to open positions well means combining several imperfect signals (skills, availability, similarity) into a single reliable ranking — worked through ticket by ticket rather than "build it once and done."

## Approach

- Filtering, similarity, skill-ratio, and start-date logic across SQL/dbt/Python data pipelines.
- Delivery via a ticket-based engineering workflow — same rigor as any production data system.
- Validated dbt forecast/train workflows remotely on a GCP VM; documented changes for review and handoff.

## Outcome

Working matching pipelines feeding a live candidate-to-position ranking system, built and validated against real data infrastructure (BigQuery/PostgreSQL/Kafka).

<!--
No public repo: the underlying codebase is EPAM-owned production source (internal ticket
references confirm this, e.g. EPMMTCH-*), not personal property — same ownership issue as
the client engagement work. This page describes the pattern only; nothing here is copied
from the source repo. See andrey-portfolio/drafts/01-project-inventory.md row 7 for the trail.
-->
