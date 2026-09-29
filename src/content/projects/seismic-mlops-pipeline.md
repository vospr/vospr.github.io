---
title: "Seismic MLOps Pipeline"
category: "ml-data-science"
hook: "A full MLOps lifecycle built end to end — not a notebook that classifies seismic data once, but a pipeline that keeps working after deployment."
status: "published"
order: 1
stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Docker", "MLflow", "Optuna", "Feast", "FastAPI", "Prometheus", "FAISS"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/seismic-mlops-pipeline"
---

## Problem

Seismic data classification demos usually stop at a trained model in a notebook — no serving, no monitoring, no idea when it starts drifting.

## Approach

- Eight-stage flow: SGY/SEGY ingestion → 40-feature engineering → training → Optuna tuning → evaluation → MLflow registry → FastAPI serving → Prometheus metrics → CI/CD validation.
- Feast feature-store integration; FAISS/TF-IDF retrieval; Ollama-backed analysis.
- Docker Compose for multi-service orchestration; batch inference path alongside the serving path.

## Outcome

A deployable classification service with a versioned model registry, a live metrics/drift-detection surface, and a repeatable retrain path — not a one-off experiment.
