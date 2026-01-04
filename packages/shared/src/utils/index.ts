import { DocumentSource } from '../types';

/**
 * Validate document source
 */
export function isValidDocumentSource(source: string): source is DocumentSource {
  return Object.values(DocumentSource).includes(source as DocumentSource);
}

/**
 * Format date to ISO string
 */
export function formatDate(date: Date): string {
  return date.toISOString();
}

/**
 * Generate unique document ID
 */
export function generateDocumentId(source: DocumentSource, originalId: string): string {
  return `${source}-${originalId}-${Date.now()}`;
}

/**
 * Sanitize file name
 */
export function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
