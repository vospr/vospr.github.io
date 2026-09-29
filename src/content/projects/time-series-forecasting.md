---
title: "Time Series Forecasting — Econometrics Research"
category: "ml-data-science"
hook: "Forecasting isn't just fitting ARIMA and calling it done — it's picking the right model for the right question, and knowing when deep learning earns its keep over a classical one."
summary: "Classical and deep-learning forecasting on public Swiss electricity-market data."
status: "published"
order: 3
featured: false
problem: "Economics research at Université de Neuchâtel needed both rigorous classical time-series methods and modern deep-learning forecasting, applied to real econometric questions, not toy datasets."
whatItDoes: "Forecasting models and statistical analysis used directly in academic research output, spanning both classical (ARIMA/STATA) and deep-learning (TensorFlow/Keras) approaches."
howItsBuilt:
  - lead: "Public dataset"
    detail: "worked with Swiss electricity production/spot-price data (energy-charts.info): stationarity testing (Augmented Dickey-Fuller), outlier detection, feature engineering."
  - lead: "Research pipeline"
    detail: "supported ETL processes for the underlying research data and integrated GenAI tooling into the workflow."
  - lead: "Dual approach"
    detail: "classical (ARIMA) and deep-learning (TensorFlow/Keras) forecasting models, compared on the same data."
facts:
  - k: "Type"
    v: "Research"
  - k: "Scope"
    v: "Econometrics (UNINE)"
  - k: "Evidence"
    v: "ARIMA + TensorFlow/Keras"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "Pandas", "NumPy"]
  - label: "Modeling"
    items: ["TensorFlow/Keras", "ARIMA", "scikit-learn"]
  - label: "Stats"
    items: ["R", "STATA"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/time-series-forecasting"
---
