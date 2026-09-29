---
title: "HR Matching Data Platform"
category: "ml-data-science"
hook: "Candidate-position matching isn't one algorithm — it's filtering, similarity, skill-ratio, and timing logic all agreeing with each other, at data-warehouse scale."
summary: "Filtering, similarity and skill-ratio logic feeding a live candidate-to-position ranking system."
status: "published"
order: 2
featured: false
keyTags: ["dbt", "BigQuery", "Kafka"]
problem: "Matching candidates to open positions well means combining several imperfect signals (skills, availability, similarity) into a single reliable ranking — worked through ticket by ticket rather than \"build it once and done.\""
whatItDoes: "Working matching pipelines feeding a live candidate-to-position ranking system, built and validated against real data infrastructure (BigQuery/PostgreSQL/Kafka)."
howItsBuilt:
  - lead: "Matching logic"
    detail: "filtering, similarity, skill-ratio, and start-date logic across SQL/dbt/Python data pipelines."
  - lead: "Ticket-based delivery"
    detail: "same rigor as any production data system, reviewed and handed off per change."
  - lead: "Remote validation"
    detail: "validated dbt forecast/train workflows on a GCP VM."
facts:
  - k: "Type"
    v: "Data platform"
  - k: "Scope"
    v: "Candidate–position matching"
  - k: "Evidence"
    v: "Ticket-delivered, GCP-validated"
  - k: "Code"
    v: "Private (EPAM-owned)"
stackGroups:
  - label: "Data"
    items: ["Python", "SQL", "dbt"]
  - label: "Warehouse"
    items: ["BigQuery", "PostgreSQL", "Kafka"]
  - label: "Infra"
    items: ["GCP", "GitLab"]
links: []
---
