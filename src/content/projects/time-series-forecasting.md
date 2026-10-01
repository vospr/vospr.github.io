---
title: "Swiss Electricity Price Forecasting — MSc Thesis"
category: "ml-data-science"
hook: "No single forecasting model survives a market regime change — but a simple average of several came closest."
summary: "MSc thesis: econometric and neural-network forecasts of Swiss day-ahead electricity prices, and whether combining them helps."
status: "published"
order: 3
featured: false
keyTags: ["Lasso", "Keras", "Forecast combination"]
problem: "Machine learning hasn't clearly beaten classical regression for electricity price forecasting. My MSc thesis tested whether combining the two gives a more accurate and robust day-ahead forecast in the Swiss market, which is less studied than the Nordic or British ones."
whatItDoes: "Forecasts next-day hourly Swiss spot prices (EUR/MWh) from price lags (24/48/168 h), the previous day's price level, generation and calendar effects, using OLS, Ridge, Lasso, an autoregressive ARX model and a Keras neural network tuned with Keras Tuner, then combines them (equal, R²-weighted and constrained-least-squares weights). On 2018–2020 data, Lasso and the tuned network led; on 2024 data every model degraded sharply, while a plain average of the models beat each of them on MSE."
howItsBuilt:
  - lead: "Public data"
    detail: "hourly Swiss prices and generation (SFOE via energy-charts, 2018–2020 and 2024): stationarity tests (ADF), outlier handling, lag and calendar features."
  - lead: "Classical and ML side by side"
    detail: "OLS with HAC errors, Ridge/Lasso, ARX (SARIMAX), and a Keras network tuned with Keras Tuner, all evaluated on the same held-out period."
  - lead: "Forecast combination and robustness"
    detail: "three weighting schemes, then the trained models re-scored on 2024 data to test how they hold up when the market changes."
  - lead: "What I'd do differently"
    detail: "rolling recalibration, a naive baseline, previous-day-only inputs and multiple seeds; the thesis used a single holdout."
facts:
  - k: "Type"
    v: "MSc thesis (UNINE, 2025)"
  - k: "Scope"
    v: "Applied economics"
  - k: "Evidence"
    v: "Graded 5/6 · tested on 2024 out-of-period data"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["Python", "pandas", "NumPy"]
  - label: "Modeling"
    items: ["statsmodels", "scikit-learn", "TensorFlow/Keras", "Keras Tuner", "SciPy"]
  - label: "Platform"
    items: ["Google Colab"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/time-series-forecasting"
---
