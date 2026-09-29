---
title: "Seismic MLOps Pipeline"
category: "ml-data-science"
hook: "A full MLOps lifecycle built end to end — not a notebook that classifies seismic data once, but a pipeline that keeps working after deployment."
summary: "End-to-end MLOps: ingestion to serving, with registry, drift metrics and retraining."
status: "published"
order: 1
featured: true
keyTags: ["MLflow", "Optuna", "Feast", "Prometheus"]
problem: "Seismic data classification demos usually stop at a trained model in a notebook — no serving, no monitoring, no idea when it starts drifting."
whatItDoes: "A deployable classification service with a versioned model registry, a live metrics/drift-detection surface, and a repeatable retrain path — not a one-off experiment."
howItsBuilt:
  - lead: "Eight-stage flow"
    detail: "SGY/SEGY ingestion → 40-feature engineering → training → Optuna tuning → evaluation → MLflow registry → FastAPI serving → Prometheus metrics → CI/CD validation."
  - lead: "Feature store + retrieval"
    detail: "Feast feature-store integration; FAISS/TF-IDF retrieval; Ollama-backed analysis."
  - lead: "Multi-service orchestration"
    detail: "Docker Compose running the serving and batch-inference paths side by side."
facts:
  - k: "Type"
    v: "MLOps pipeline"
  - k: "Scope"
    v: "Seismic classification"
  - k: "Evidence"
    v: "8-stage, CI/CD-validated"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "scikit-learn", "Pandas", "NumPy"]
  - label: "MLOps"
    items: ["MLflow", "Optuna", "Feast", "Prometheus"]
  - label: "Serving"
    items: ["FastAPI", "Docker", "FAISS"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/seismic-mlops-pipeline"
---
