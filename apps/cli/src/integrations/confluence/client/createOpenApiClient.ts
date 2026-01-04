import { OpenAPIClientAxios } from 'openapi-client-axios';
import type { Client } from '../../../types/confluence-api';
import { ConfluenceClientConfig } from '../domain/definitions';
import { OPENAPI_DEFINITION_URL } from '../constants/openapi';

export async function createOpenApiClient(
    config: ConfluenceClientConfig,
): Promise<Client> {
    const api = new OpenAPIClientAxios({
        definition: OPENAPI_DEFINITION_URL,
        axiosConfigDefaults: {
            baseURL: config.baseUrl + 'wiki/api/v2',
            headers: {
                Authorization: `Basic ${Buffer.from(`${config.email}:${config.apiToken}`).toString('base64')}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 30_000,
        },
    });

    await api.init<Client>();
    return api.getClient<Client>();
}
