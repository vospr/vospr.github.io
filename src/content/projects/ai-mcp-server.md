---
title: "MCP Server Spike & Decision Memo"
category: "ai-solutions"
hook: "One day to answer a real product question: should an AI coaching engine reach employees inside Copilot, ChatGPT Enterprise and Claude through a single MCP server, and what can safely be exposed before identity and GDPR work is done?"
summary: "A one-day MCP spike and decision memo: what to expose, what to defer, and why. The hiring challenge that put me on the rebuild team."
status: "published"
order: 2
featured: false
keyTags: ["MCP", "TypeScript", "Architecture decision"]
problem: "A coaching product wanted to meet users inside the enterprise AI tools they already use. One integration per platform doesn't scale, and coaching conversations are sensitive data that third-party AI clients should not see."
whatItDoes: "A decision memo backed by a working MCP server. The memo recommends a phased rollout: expose single-turn advice, session booking and coaching reference data now; defer multi-turn coaching until identity and a GDPR impact assessment are in place. The spike proves the MCP surface against a stub backend."
howItsBuilt:
  - lead: "The scope line"
    detail: "stateless single-turn calls instead of a server-held coaching loop, so no conversation state reaches third-party AI clients and it runs on serverless. The July 2026 MCP spec later made stateless the protocol default."
  - lead: "Coaching concepts mapped to MCP primitives"
    detail: "reference data as resources, actions as tools, the guided flow as a prompt; user-specific data deliberately deferred."
  - lead: "Verified at protocol level"
    detail: "handshake, tool calls, resource reads and prompts exercised by hand over Streamable HTTP and stdio. Copilot and ChatGPT support assessed from vendor docs, not tested."
  - lead: "Built with a multi-agent AI workflow"
    detail: "structured AI review rounds shaped the approach and the memo; the code was generated from that plan and reviewed."
facts:
  - k: "Type"
    v: "Decision memo + MCP spike"
  - k: "Timebox"
    v: "1 day (hiring challenge)"
  - k: "Clients"
    v: "Protocol-tested by hand (HTTP + stdio) · Assessed: Claude Desktop, Copilot, ChatGPT Enterprise, Teams"
  - k: "Evidence"
    v: "Memo led to the engagement · protocol checked by hand · no automated tests"
  - k: "Code"
    v: "Available on request"
stackGroups:
  - label: "Core"
    items: ["TypeScript", "MCP TypeScript SDK", "Zod"]
  - label: "Transports"
    items: ["Streamable HTTP (stateless)", "stdio"]
links: []
---
