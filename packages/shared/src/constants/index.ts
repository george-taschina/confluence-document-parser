/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  IMPORT: '/import',
  HEALTH: '/health',
} as const;

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG = {
  PORT: 3000,
  TIMEOUT: 60000,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
} as const;

/**
 * Supported document formats
 */
export const SUPPORTED_FORMATS = {
  CONFLUENCE: ['html', 'storage'],
  GDOCS: ['document'],
} as const;

/**
 * Error codes
 */
export const ERROR_CODES = {
  INVALID_SOURCE: 'INVALID_SOURCE',
  FETCH_FAILED: 'FETCH_FAILED',
  PARSE_FAILED: 'PARSE_FAILED',
  STORAGE_FAILED: 'STORAGE_FAILED',
  AUTH_FAILED: 'AUTH_FAILED',
} as const;
