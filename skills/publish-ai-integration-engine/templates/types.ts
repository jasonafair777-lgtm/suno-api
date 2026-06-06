export interface PublishConfig {
  baseUrl: string;
  apiKey: string;
  webhookSecret?: string;
  defaultDestination?: string;
  contentTypes?: ContentType[];
  publishMode?: 'manual' | 'scheduled' | 'both';
}

export type ContentType = 'article' | 'page' | 'social_post' | 'email' | 'other';

export interface PublishPayload {
  title: string;
  content: string;
  contentType: ContentType;
  destination?: string;
  metadata?: Record<string, unknown>;
}

export interface PublishResponse {
  success: boolean;
  action: string;
  externalId: string | null;
  status: string;
  message: string;
  raw: unknown;
}

export interface PublishStatus {
  id: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed' | 'unknown';
  publishedAt?: string;
  scheduledAt?: string;
  url?: string;
}

export interface AuditEntry {
  timestamp: string;
  action: string;
  externalId: string | null;
  success: boolean;
  message: string;
}
