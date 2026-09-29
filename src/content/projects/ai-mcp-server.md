---
title: "AI MCP Server"
category: "software-engineering"
hook: "A proof-of-concept answering a concrete question: can one MCP server expose the same AI coaching capability to Copilot, ChatGPT Enterprise, and Claude Desktop at once, without three separate integrations?"
summary: "One MCP server serving Copilot, ChatGPT Enterprise and Claude Desktop, validated on the real protocol."
status: "published"
order: 2
featured: true
problem: "Enterprise AI clients (Copilot, ChatGPT Enterprise, Claude Desktop, Teams) each want their own integration — an MCP server was the bet that one spec could serve all of them."
whatItDoes: "A working MCP server with a clean TypeScript build, validated against the real protocol surface, plus a phased-rollout writeup covering the privacy/security tradeoffs for each client platform."
howItsBuilt:
  - lead: "Tools and resources"
    detail: "single-turn coaching advice and session booking as tools; resources and prompts for coaching-methodology data."
  - lead: "Full protocol verification"
    detail: "initialize, tools/list, tools/call, resources/read, prompts/list — over both stdio and Streamable HTTP transports."
  - lead: "Rollout tradeoffs documented"
    detail: "privacy, GDPR, auth, and prompt-injection tradeoffs across the four target clients."
facts:
  - k: "Type"
    v: "MCP server"
  - k: "Channels"
    v: "Copilot · ChatGPT Enterprise · Claude · Teams"
  - k: "Evidence"
    v: "Full protocol surface verified"
  - k: "Code"
    v: "GitHub ↗"
stackGroups:
  - label: "Core"
    items: ["TypeScript", "MCP SDK"]
  - label: "Infra"
    items: ["Azure Functions", "PostgreSQL", "OAuth 2.1"]
  - label: "Transports"
    items: ["Streamable HTTP", "stdio"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/mcp-server"
---
