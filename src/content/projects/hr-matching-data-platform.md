---
title: "HR Matching Data Platform"
category: "ml-data-science"
hook: "Changing a production matching pipeline is easy. Proving you didn't change who gets matched is the hard part."
summary: "Matching rules and a behaviour-preserving refactor for a production candidate-to-position ranking pipeline, validated on real warehouse data."
status: "published"
order: 1
featured: true
keyTags: ["dbt", "BigQuery", "Python"]
problem: "A production ranking system scored tens of millions of candidate–position pairs per run through about 400 dbt models, with no data tests at the SQL layer. New business rules had to go in and the SQL needed restructuring, without silently changing who got recommended."
whatItDoes: "Added three exclusion rules (skill, seniority, and location / cost tier / relocation) to the batch filter chain, and refactored the forecast and training pipelines behind a parity safety net: compile-diff, row-level comparison of the final tables, and an outcome check showing 99.8% ranking-bucket stability. Also ran a feature-ablation study showing a hand-built location feature could be retired with negligible measured impact (single retrain)."
howItsBuilt:
  - lead: "Matching rules"
    detail: "three exclusion rules as guarded SQL predicates in the existing filter chain: NULL-safe, fail-open on unknown seniority, sized by simulation."
  - lead: "Parity safety net"
    detail: "compile-diff plus row-level comparison of the final tables; 7 of 8 refactors compiled to identical SQL."
  - lead: "Pipeline quality"
    detail: "~900 duplicated SQL lines merged into shared macros, 148 dbt tests, source-freshness checks, model tags and a slim CI selector."
  - lead: "Feature ablation"
    detail: "permutation with a null control, retraining, segment analysis and Integrated Gradients to decide whether a feature could be retired."
  - lead: "My role"
    detail: "one engineer on a team-owned system. Code written with AI assistants under my direction; every change validated on a GCP VM against real warehouse data."
facts:
  - k: "Type"
    v: "Production ranking pipeline (team-owned)"
  - k: "My scope"
    v: "Matching rules · pipeline refactor · ablation"
  - k: "Status"
    v: "Validated on real data; in review when I left"
  - k: "Evidence"
    v: "Parity-tested · 99.8% ranking stability"
  - k: "Code"
    v: "Private (EPAM-owned)"
stackGroups:
  - label: "Data"
    items: ["Python", "SQL", "dbt"]
  - label: "Warehouse"
    items: ["BigQuery"]
  - label: "ML"
    items: ["PyTorch", "MLflow"]
  - label: "Infra"
    items: ["GCP", "Argo Workflows"]
links: []
---
