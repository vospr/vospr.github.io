---
title: "Seismic Facies Classification Pipeline"
category: "ml-data-science"
hook: "Facies classification on the public F3 North Sea benchmark, with a promotion gate that rejects models that don't beat a baseline."
summary: "A small ML pipeline on real F3 facies labels: one sklearn Pipeline logged to MLflow, a gate that must beat a majority-class baseline and the current champion before promotion, and CI that fails when checks fail."
status: "published"
order: 4
featured: true
keyTags: ["scikit-learn", "MLflow", "FastAPI"]
problem: "My first version of this project ran every MLOps stage end to end, but on placeholder labels, so the model had nothing real to learn. This version starts from real labels and wires fewer stages properly."
whatItDoes: "Classifies 32x32 seismic patches into the six facies of the public F3 benchmark. A single scaler + PCA + gradient-boosting Pipeline is trained on one block of the training volume, gated on a spatially separate validation block, scored once on the benchmark's separate test volume, registered in MLflow, and served by FastAPI exactly as registered. On the held-out test volume it reaches 0.72 accuracy / 0.51 macro-F1, against 0.51 / 0.11 for always predicting the most common facies. It misses the rarer facies (two are almost never detected)."
howItsBuilt:
  - lead: "Acceptance tests first"
    detail: "no model selection on the test volume; served predictions equal the training Pipeline's; the gate rejects a worse or tied model; no CI step can fail silently."
  - lead: "Reproducible"
    detail: "uv + lockfile; `make demo` trains on a committed 1.7 MB fixture, promotes, serves and queries, and runs from a fresh clone in about 40 seconds."
  - lead: "Cut on purpose"
    detail: "Feast, RAG and multi-environment config from the first version were removed; monitoring and drift detection aren't built yet."
facts:
  - k: "Type"
    v: "ML pipeline with gated promotion"
  - k: "Scope"
    v: "Seismic facies classification on public labels"
  - k: "Evidence"
    v: "27 tests · CI green on GitHub · real-benchmark run logged in the repo"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "scikit-learn", "NumPy"]
  - label: "MLOps"
    items: ["MLflow (model aliases)", "pytest", "uv"]
  - label: "Serving"
    items: ["FastAPI"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/seismic-mlops-pipeline"
---
