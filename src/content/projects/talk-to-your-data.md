---
title: "Talk to Your Data"
category: "ai-solutions"
hook: "From a question to an answer you can check: explaining a forecast without losing its evidence or its limits."
summary: "A tested forecast package and an evidence-backed explanation prototype, with checked facts, explicit gaps and safe fallback."
status: "published"
order: 0
featured: true
keyTags: ["Python", "MLflow", "Databricks", "Microsoft Agent Framework"]
problem: "A manager asks why a forecast raised an alert. A fluent answer is useful only if it refers to the right model, time period and recorded results. A correct citation cannot rescue a sentence that changes the number or invents a business cause."
whatItDoes: "The forecast package prepares synthetic demand, trains and compares models, registers a selected version, scores it and records monitoring results. A separate local explanation workflow answers a small set of supported questions about quality, model selection and monitoring from explicit evidence. It calculates conclusions using written rules, preserves source qualifications, and either releases a checked explanation, reports an evidence gap or uses a deterministic summary."
howItsBuilt:
  - lead: "My contribution"
    detail: "I defined the specifications, statistical rules and acceptance decisions, directed AI-assisted implementation and review, and inspected the resulting evidence."
  - lead: "Evaluation before storytelling"
    detail: "Demand features use earlier weeks. Model selection uses validation results and a 5% relative promotion margin fixed before results; the historical final test is protected from replay."
  - lead: "Fixed workflow, explicit authority"
    detail: "Microsoft Agent Framework coordinates deterministic routing and ordinary specialist functions. The model cannot choose tools, change facts or authorise deployment."
  - lead: "Check meaning, not just citations"
    detail: "The validator parses a bounded English grammar and checks subjects, values, periods, qualifications and rule calculations against approved assertions. It does not validate arbitrary English. One failed assertion replaces the whole proposed explanation with the deterministic summary."
  - lead: "Platform isolation"
    detail: "Environment-specific access is isolated in one I/O module. Historical Databricks execution is recorded separately from later local verification and the still-pending Fabric integration."
facts:
  - k: "Case"
    v: "Personal project / synthetic data"
  - k: "Forecast"
    v: "Historical Databricks execution"
  - k: "Explanation"
    v: "Local prototype / mock transport"
  - k: "Next milestone"
    v: "Actual Fabric integration"
stackGroups:
  - label: "Forecast package"
    items: ["Python", "pandas", "scikit-learn", "MLflow", "pytest"]
  - label: "Recorded execution"
    items: ["Databricks serverless", "Unity Catalog", "Delta"]
  - label: "Explanation prototype"
    items: ["Microsoft Agent Framework", "Deterministic validation", "Mock transport"]
  - label: "Locally tested adapters"
    items: ["Microsoft Fabric"]
links:
  - label: "Related: my AI governance article"
    url: "https://medium.com/@vospr2/what-20-years-of-closing-books-taught-me-about-governing-ai-7a4071c14b97"
caseStudy:
  asOf: "9 November 2026"
  evidence:
    - label: "Executed historically"
      detail: "One historical wheel completed all five forecast tasks on Databricks serverless. An audit of its saved artifacts matched 960 predictions to the same saved estimator within an absolute tolerance of 1e-9. This is implementation parity, not a measure of future forecast accuracy."
    - label: "Verified locally"
      detail: "The explanation workflow, validator and mock transport were tested locally on synthetic fixtures. Fabric adapters are applied and locally tested. Neither result transfers the historical wheel's runtime proof to current source."
    - label: "Still pending"
      detail: "Actual current-source Fabric installation and integration are unproven. Live LLM and Teams implementation remain deferred until reviewed Fabric integration."
  workflow:
    - label: "Supported question"
      detail: "Route a recognised question about quality, selection or monitoring."
    - label: "Eligible evidence"
      detail: "Check model identity, period, provenance and freshness requirements."
    - label: "Deterministic facts"
      detail: "Calculate the written rule from eligible recorded values."
    - label: "Checked explanation"
      detail: "Validate proposed wording before release, or use the fixed summary."
  workflowNote: "Prepare > train > register > score > monitor produces the saved forecast evidence. The explanation layer consumes explicit evidence packets; this diagram does not claim a live connection to Databricks or Fabric. Provider behavior in the local walkthrough was simulated."
  examples:
    - label: "A supported answer"
      detail: "In the retained local walkthrough, a constructed valid response passed the checks and was displayed with its evidence bindings. This exercised the validation path; the response was not authored by a live LLM."
    - label: "A plausible but wrong answer"
      detail: "A constructed response changed a WAPE value from 0.36 to 0.63 while keeping its citations. The validator rejected the meaning and displayed the deterministic summary."
    - label: "When evidence is missing"
      detail: "The missing-evidence case returned an explicit gap without invoking the explanation callback or sending a mock request. It did not fill the gap with a plausible story."
  exampleNote: "These are summaries of previously recorded, owner-run local demonstrations using synthetic fixtures, a pinned July 2026 clock and mocked provider transport. The November status date does not establish current platform freshness. They are not new platform runs, live LLM results or evidence of business impact."
  excerpt:
    question: "Summarize quality, selection and monitoring"
    answer: "For FIX-MODEL-A/v1, the validation gate is true because WAPE 0.36 is less than threshold 0.38 (0.95 times best baseline WAPE 0.4) for weeks 2025-05-05 through 2025-12-08."
    check: "The invented fixture supplies baseline WAPE 0.40, candidate WAPE 0.36 and a 5% relative margin. Check the rule: 0.40 x 0.95 = 0.38, and 0.36 <= 0.38. The retained local result accepted the constructed response. Changing the authored value to 0.63 instead produced semantic rejection and fallback."
    qualification: "Abridged excerpt from the owner-run local walkthrough recorded 7 November 2026. FIX-MODEL-A/v1 is an invented fixture identity. Values are synthetic fixture observations; the gate conclusion is derived. The full answer also carries citations and qualification blocks, omitted here for readability. Fixture clock: July 2026. This is mock verification, not the historical Databricks model or a live LLM response."
---
