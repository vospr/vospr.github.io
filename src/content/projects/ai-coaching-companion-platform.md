---
title: "AI Coaching Platform Rebuild: Release Hardening & Human-Coaching Integration"
category: "software-engineering"
hook: "A coaching company is rebuilding its AI coaching assistant from scratch with a small AI-assisted team. I joined four months in to make it safe to put in front of users, then took on the hardest integration: connecting the AI to the company's human coaches."
summary: "Engineer on the rebuild team of a coaching assistant: release hardening, then the integration that lets participants match with, book and meet real human coaches. In internal pilot; external launch planned."
status: "published"
order: 1
featured: false
keyTags: ["Anthropic Claude", "Azure Container Apps", "AI-assisted delivery"]
problem: "The company's AI coaching assistant ran on a legacy low-code platform. The rebuild had to become a real product: safe for many client organisations at once, possible to switch off, and able to hand people over to human coaches managed in a separate system, while the rebuild team shipped several changes a day with AI coding agents."
whatItDoes: "An AI development partner for people in a coaching programme, used on the web and in Slack between sessions with their human coach. It runs in production as an internal pilot; the first external launch is planned. My part: the release-readiness plan and hardening for the first milestone, and the integration that matches, books and joins sessions with human coaches."
howItsBuilt:
  - lead: "Release readiness"
    detail: "wrote the deployment, QA and go/no-go plans for the first internal milestone, then built the controls behind them: an environment-level kill switch for AI generation and notifications, a cross-tenant isolation test suite, a CI check that every user-content column is encrypted, and deploy-time smoke tests."
  - lead: "Merge safety for a fast AI-assisted team"
    detail: "a CI guard that catches pull requests silently reverting already-merged work, plus 575 frontend unit tests wired into CI."
  - lead: "Human-coaching integration"
    detail: "service-to-service auth to a separate coaching-operations platform, coach matching, booking and cancellation that keep calendar slots consistent, error messages specific to each screen, a video-call screen reusing the existing call component, and admin tools to link organisations across the two systems."
  - lead: "How I work"
    detail: "every ticket routed before work starts, planning and implementation in separate AI contexts, and a code graph plus curated project wiki as the agents' shared memory. I also measure what AI-assisted delivery costs per delivered change (see AI Adoption Measurement Framework)."
facts:
  - k: "Type"
    v: "Client engagement, team build"
  - k: "My role"
    v: "Engineer (1 of ~6): release hardening, human-coaching integration"
  - k: "Channels"
    v: "Web · Slack (internal pilot) · Teams (in development)"
  - k: "Evidence"
    v: "Internal pilot in production · 61 tickets closed · external launch planned"
  - k: "Code"
    v: "Private (client engagement)"
stackGroups:
  - label: "AI"
    items: ["Anthropic Claude", "Claude Code agents"]
  - label: "Backend"
    items: ["TypeScript", "Azure Functions v4"]
  - label: "Infra"
    items: ["Azure Container Apps", "GitHub Actions", "Bicep"]
  - label: "Integrations"
    items: ["Slack", "Azure Communication Services"]
links: []
---
