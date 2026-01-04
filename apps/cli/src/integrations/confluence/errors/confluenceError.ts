import axios, { AxiosError } from 'axios';

export class ConfluenceError extends Error {
    constructor(
        message: string,
        public readonly statusCode?: number,
        public readonly originalError?: Error,
    ) {
        super(message);
        this.name = 'ConfluenceError';
    }
}

export function toConfluenceError(error: unknown): ConfluenceError {
    if (axios.isAxiosError(error)) {
        return new ConfluenceError(
            getAxiosErrorMessage(error),
            error.response?.status,
            error,
        );
    }

    if (error instanceof Error) {
        return new ConfluenceError(error.message, undefined, error);
    }

    return new ConfluenceError('An unknown error occurred');
}

function getAxiosErrorMessage(error: AxiosError): string {
    switch (error.response?.status) {
        case 401:
            return 'Authentication failed. Check your credentials.';
        case 403:
            return 'Access forbidden.';
        case 404:
            return 'Resource not found.';
        case 429:
            return 'Rate limit exceeded.';
    }

    const data = error.response?.data as any;
    return (
        data?.message ??
        data?.errorMessages?.join(', ') ??
        error.message
    );
}