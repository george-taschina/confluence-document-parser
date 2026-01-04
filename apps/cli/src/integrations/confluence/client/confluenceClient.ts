import type { Client } from '../../../types/confluence-api';
import {ConfluenceClientConfig, ConfluencePage, ConfluenceSpace} from "../domain/definitions";
import {ConfluenceError, toConfluenceError} from "../errors/confluenceError";
import {createOpenApiClient} from "./createOpenApiClient";
import {mapPage, mapSpace} from "../domain/mappers";

export class ConfluenceClient {
    private client!: Client;

    private constructor(
        private readonly config: Readonly<ConfluenceClientConfig>,
    ) {}

    static async create(
        config: ConfluenceClientConfig,
    ): Promise<ConfluenceClient> {
        if (!config.baseUrl || !config.email || !config.apiToken) {
            throw new ConfluenceError(
                'baseUrl, email, and apiToken are required',
            );
        }

        const instance = new ConfluenceClient(config);
        instance.client = await createOpenApiClient(config);
        return instance;
    }

    async getPage(pageId: number): Promise<ConfluencePage> {
        try {
            const response = await this.client.getPageById({
                id: pageId,
                'body-format': 'storage',
            });

            return mapPage(response.data);
        } catch (error) {
            throw toConfluenceError(error);
        }
    }

    async getSpace(spaceId: string): Promise<ConfluenceSpace> {
        try {
            const response = await this.client.get(`${this.config.baseUrl}/wiki/rest/api/space/${spaceId}`)

            return mapSpace(response.data);
        } catch (error) {
            throw toConfluenceError(error);
        }
    }

    async getSpaces(): Promise<ConfluenceSpace[]> {
        try {
            const response = await this.client.getSpaces();

            return response.data.results?.map((s) => mapSpace(s)) ?? [];
        } catch (error) {
            throw toConfluenceError(error);
        }
    }

    async getSpacePages(
        spaceId: number,
        pageSize = 100,
    ): Promise<ConfluencePage[]> {
        const pages: ConfluencePage[] = [];
        let cursor: string | undefined;

        try {
            do {
                const response = await this.client.getPagesInSpace({
                    id: spaceId,
                    limit: Math.min(pageSize, 250),
                    cursor,
                    'body-format': 'storage',
                });

                const resultPages =
                    response.data.results?.map((p) => mapPage(p)) ?? [];

                pages.push(...resultPages);
                cursor = response.data._links?.next;
            } while (cursor);

            return pages;
        } catch (error) {
            throw toConfluenceError(error);
        }
    }
}
