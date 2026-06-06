import { PublishConfig } from './types';

export function loadPublishConfig(): PublishConfig {
  const baseUrl = process.env.PUBLISH_AI_BASE_URL;
  const apiKey = process.env.PUBLISH_AI_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new Error(
      'Missing required environment variables: PUBLISH_AI_BASE_URL and PUBLISH_AI_API_KEY must be set.'
    );
  }

  return {
    baseUrl: baseUrl.replace(/\/$/, ''),
    apiKey,
    webhookSecret: process.env.PUBLISH_AI_WEBHOOK_SECRET,
    defaultDestination: process.env.PUBLISH_AI_DEFAULT_DESTINATION,
    contentTypes: (process.env.PUBLISH_AI_CONTENT_TYPES || 'article')
      .split(',')
      .map(t => t.trim()) as PublishConfig['contentTypes'],
    publishMode: (process.env.PUBLISH_AI_PUBLISH_MODE || 'both') as PublishConfig['publishMode'],
  };
}
