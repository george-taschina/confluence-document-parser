/**
 * Document source platforms
 */
export enum DocumentSource {
  CONFLUENCE = 'confluence',
  GDOCS = 'gdocs',
  NOTION = 'notion',
}

/**
 * ADR (Architecture Decision Record) structure
 */
export interface ADR {
  title: string;
  context: string;
  decision: string;
  consequences: string;
  metadata?: {
    author?: string;
    date?: string;
    status?: 'proposed' | 'accepted' | 'deprecated' | 'superseded';
    tags?: string[];
  };
}

/**
 * Document metadata
 */
export interface DocumentMetadata {
  id: string;
  source: DocumentSource;
  sourceUrl?: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: string;
}

/**
 * Import result
 */
export interface ImportResult {
  success: boolean;
  documentId: string;
  storageUrl?: string;
  parsedContent?: ADR;
  error?: string;
}

/**
 * Confluence credentials
 */
export interface ConfluenceCredentials {
  baseUrl: string;
  email: string;
  apiToken: string;
}

/**
 * Google Docs credentials
 */
export interface GoogleDocsCredentials {
  credentialsPath: string;
}
