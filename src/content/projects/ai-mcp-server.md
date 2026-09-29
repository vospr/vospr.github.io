---
title: "AI MCP Server"
category: "software-engineering"
hook: "A proof-of-concept answering a concrete question: can one MCP server expose the same AI coaching capability to Copilot, ChatGPT Enterprise, and Claude Desktop at once, without three separate integrations?"
status: "published"
order: 2
stack: ["TypeScript", "MCP SDK", "Azure Functions", "Streamable HTTP", "stdio", "Claude", "PostgreSQL", "OAuth 2.1"]
links:
  - label: "GitHub"
    url: "https://github.com/vospr/mcp-server"
---

## Problem

Enterprise AI clients (Copilot, ChatGPT Enterprise, Claude Desktop, Teams) each want their own integration — an MCP server was the bet that one spec could serve all of them.

## Approach

- Tools for single-turn coaching advice and session booking; resources and prompts for coaching-methodology data.
- Verified the full MCP surface — initialize, tools/list, tools/call, resources/read, prompts/list — over both stdio and Streamable HTTP transports.
- Documented privacy, GDPR, auth, and prompt-injection tradeoffs across the four target clients.

## Outcome

A working MCP server with a clean TypeScript build, validated against the real protocol surface, plus a phased-rollout writeup covering the privacy/security tradeoffs for each client platform.
