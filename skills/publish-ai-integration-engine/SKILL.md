---
name: publish-ai-integration-engine
description: "Build and configure a Publish.ai integration inside any project. Creates a reusable publishing layer supporting draft, schedule, publish, sync, and status actions with provider abstraction for future publishing systems. Use for: connecting Publish.ai to app workflows, creating publishing control panels, building multi-provider publishing adapters."
---

# Publish.ai Integration Engine

This skill builds a complete Publish.ai integration module inside the active project. It creates a reusable provider abstraction that supports draft creation, scheduling, publishing, status checking, and multi-provider extensibility.

## Required Inputs

Request these values from the user before building:

1. `PUBLISH_AI_BASE_URL` — The Publish.ai API endpoint
2. `PUBLISH_AI_API_KEY` or OAuth credentials
3. `PUBLISH_AI_WEBHOOK_SECRET` — if webhook callbacks are supported
4. Default publication destination
5. Content types to support: article, page, social post, email, other
6. Publishing mode: manual, scheduled, or both

Never hardcode credentials into source files. Store all secrets in environment variables only.

## Workflow

### 1. Detect Integration Method
First determine whether Publish.ai has an official API or only indirect integration options.
- If official API exists, use the official route.
- If official API is unclear, scaffold the adapter with placeholder endpoints and a config file the user can fill in later.
- If no public API exists, create a fallback architecture using webhook relays or automation-style workflows (only if terms allow it).

### 2. Build the Provider Adapter
Create `publishAiAdapter` with these methods:
- `testConnection()` — Verify credentials and connectivity
- `createDraft(payload)` — Create a new content draft
- `updateDraft(id, payload)` — Modify an existing draft
- `publishNow(id or payload)` — Publish content immediately
- `schedulePublish(id or payload, datetime)` — Schedule future publication
- `getPublishStatus(id)` — Check current publish state
- `listPublications(filters)` — List published content with optional filters

### 3. Normalize Responses
All adapter methods return a common JSON shape:
```json
{
  "success": true,
  "action": "publishNow",
  "externalId": "pub_abc123",
  "status": "published",
  "message": "Content published successfully",
  "raw": {}
}
```

### 4. Add Resilience
- Retry handling for transient API failures (3 attempts, exponential backoff)
- Surface readable error messages for all failure modes
- Webhook support for publish/update callbacks if available

### 5. Build Admin UI
Create an admin publishing control panel with:
- Connect Publish.ai (credential entry)
- Test connection
- Create draft
- Publish now
- Schedule publish
- Sync status

### 6. Add Audit Logging
Log all publish attempts, successes, failures, and timestamps to a structured audit trail.

### 7. Generate Documentation
Create setup documentation inside the project at `/docs/publish-ai-integration.md`.

## Output File Structure
```
/integrations/publish-ai/adapter.*
/integrations/publish-ai/types.*
/integrations/publish-ai/config.*
/ui/admin/publishing/*
/docs/publish-ai-integration.md
```

## Design Rules
- Keep all publishing logic isolated so it can later support multiple providers, not just Publish.ai.
- The adapter pattern must allow swapping providers by changing config, not rewriting code.
- Do not ask for sensitive credentials more than once per session.

## Success Criteria
The project ends with:
- A connected or connection-ready Publish.ai integration
- A visible publishing control panel
- Documented environment variables
- A reusable provider abstraction for future publishing systems
