import { OpenAPIClientAxios } from 'openapi-client-axios';
import type { Client } from '../../../types/confluence-api';
import { ConfluenceClientConfig } from '../domain/definitions';
import * as path from 'path';
import * as fs from 'fs';

const OPENAPI_DEFINITION_PATH = path.resolve(__dirname, '../../../../confluence-api.json');

export async function createOpenApiClient(
    config: ConfluenceClientConfig,
): Promise<Client> {
    // Load and modify the OpenAPI spec to use the correct server URL
    const specContent = fs.readFileSync(OPENAPI_DEFINITION_PATH, 'utf-8');
    const spec = JSON.parse(specContent);

    // Remove trailing slash from baseUrl if present
    const baseUrl = config.baseUrl.endsWith('/') ? config.baseUrl.slice(0, -1) : config.baseUrl;

    // Override the servers array with the correct URL
    spec.servers = [{ url: `${baseUrl}/wiki/api/v2` }];

    const api = new OpenAPIClientAxios({
        definition: spec,
        axiosConfigDefaults: {
            headers: {
                Authorization: `Basic ${Buffer.from(`${config.email}:${config.apiToken}`).toString('base64')}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 30_000,
        },
    });

    await api.init();
    return api.getClient<Client>();
}
