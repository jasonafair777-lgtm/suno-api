import { PublishConfig, PublishPayload, PublishResponse, PublishStatus } from './types';

const MAX_RETRIES = 3;
const BACKOFF_BASE_MS = 1000;

export class PublishAiAdapter {
  private config: PublishConfig;

  constructor(config: PublishConfig) {
    this.config = config;
  }

  async testConnection(): Promise<PublishResponse> {
    return this.request('GET', '/status');
  }

  async createDraft(payload: PublishPayload): Promise<PublishResponse> {
    return this.request('POST', '/drafts', payload);
  }

  async updateDraft(id: string, payload: Partial<PublishPayload>): Promise<PublishResponse> {
    return this.request('PUT', `/drafts/${id}`, payload);
  }

  async publishNow(idOrPayload: string | PublishPayload): Promise<PublishResponse> {
    const body = typeof idOrPayload === 'string' ? { id: idOrPayload } : idOrPayload;
    return this.request('POST', '/publish', body);
  }

  async schedulePublish(idOrPayload: string | PublishPayload, datetime: string): Promise<PublishResponse> {
    const body = typeof idOrPayload === 'string'
      ? { id: idOrPayload, scheduledAt: datetime }
      : { ...idOrPayload, scheduledAt: datetime };
    return this.request('POST', '/schedule', body);
  }

  async getPublishStatus(id: string): Promise<PublishResponse> {
    return this.request('GET', `/status/${id}`);
  }

  async listPublications(filters?: Record<string, string>): Promise<PublishResponse> {
    const params = filters ? '?' + new URLSearchParams(filters).toString() : '';
    return this.request('GET', `/publications${params}`);
  }

  private async request(method: string, path: string, body?: unknown, attempt = 1): Promise<PublishResponse> {
    try {
      const res = await fetch(`${this.config.baseUrl}${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const raw = await res.json();

      if (!res.ok) {
        if (res.status >= 500 && attempt < MAX_RETRIES) {
          await this.sleep(BACKOFF_BASE_MS * Math.pow(2, attempt - 1));
          return this.request(method, path, body, attempt + 1);
        }
        return this.normalize(false, method, null, 'failed', raw.message || `HTTP ${res.status}`, raw);
      }

      return this.normalize(true, method, raw.id || raw.externalId, raw.status || 'success', raw.message || 'OK', raw);
    } catch (err: any) {
      if (attempt < MAX_RETRIES) {
        await this.sleep(BACKOFF_BASE_MS * Math.pow(2, attempt - 1));
        return this.request(method, path, body, attempt + 1);
      }
      return this.normalize(false, method, null, 'error', err.message || 'Network error', {});
    }
  }

  private normalize(success: boolean, action: string, externalId: string | null, status: string, message: string, raw: unknown): PublishResponse {
    return { success, action, externalId, status, message, raw };
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
