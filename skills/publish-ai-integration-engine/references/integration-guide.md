# Publish.ai Integration Guide

## Environment Variables

| Variable | Required | Description |
| :--- | :--- | :--- |
| `PUBLISH_AI_BASE_URL` | Yes | The base URL of the Publish.ai API (e.g., `https://api.publish.ai/v1`) |
| `PUBLISH_AI_API_KEY` | Yes | API key or Bearer token for authentication |
| `PUBLISH_AI_WEBHOOK_SECRET` | No | Secret for validating incoming webhook payloads |
| `PUBLISH_AI_DEFAULT_DESTINATION` | No | Default publication channel/destination |
| `PUBLISH_AI_CONTENT_TYPES` | No | Comma-separated list of supported content types (default: `article`) |
| `PUBLISH_AI_PUBLISH_MODE` | No | One of: `manual`, `scheduled`, `both` (default: `both`) |

## Fallback Architecture

If Publish.ai does not expose a public REST API, use one of these fallback strategies:

### Option A: Webhook Relay
1. Set up an intermediary endpoint that receives publish requests from the app.
2. Translate them into the format Publish.ai expects via its webhook intake.
3. Listen for status callbacks on the configured webhook URL.

### Option B: Automation Relay (Zapier/Make)
1. Create a Zap or Make scenario that triggers on a webhook from the app.
2. Route the payload to Publish.ai via its native integration in the automation platform.
3. Return status via a callback webhook to the app.

### Option C: Browser-Based Workflow
Only use if Publish.ai terms of service explicitly allow automated browser interaction.
1. Use a headless browser to log in and submit content.
2. Capture confirmation and status from the UI.
3. Return normalized response to the app.

## Provider Abstraction Pattern

The adapter is designed to be swappable. To add a new provider:

1. Create a new file: `/integrations/{provider-name}/adapter.*`
2. Implement the same interface: `testConnection`, `createDraft`, `updateDraft`, `publishNow`, `schedulePublish`, `getPublishStatus`, `listPublications`
3. Return the same normalized `PublishResponse` shape
4. Register the provider in the config with a `provider` field
5. The app routes to the correct adapter based on config
