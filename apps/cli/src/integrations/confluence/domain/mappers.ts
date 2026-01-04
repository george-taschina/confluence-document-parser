import type { Client } from '../../../types/confluence-api';
import { ConfluenceError } from '../errors/confluenceError';
import {
    ConfluencePage,
    ConfluenceSpace,
} from './definitions';


export function mapPage(
    apiPage: NonNullable<
    Awaited<ReturnType<Client['getPageById']>>['data']
>,
): ConfluencePage {
    if (!apiPage.id || !apiPage.title || !apiPage.spaceId) {
        throw new ConfluenceError(
            'Invalid page payload received from Confluence API',
        );
    }

    return {
        id: apiPage.id,
        title: apiPage.title,
        content: apiPage.body?.storage?.value ?? '',
        spaceId: apiPage.spaceId,
    };
}

export function mapSpace(
    apiSpace: NonNullable<
    Awaited<ReturnType<Client['getSpaceById']>>['data']
>,
): ConfluenceSpace {
    if (!apiSpace.id || !apiSpace.key || !apiSpace.name) {
        throw new ConfluenceError(
            'Invalid space payload received from Confluence API',
        );
    }

    return {
        id: apiSpace.id,
        key: apiSpace.key,
        name: apiSpace.name,
        type: apiSpace.type,
    };
}

