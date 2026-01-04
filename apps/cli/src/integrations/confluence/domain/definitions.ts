export interface ConfluencePage {
    id: string;
    title: string;
    content: string;
    spaceId: string;
}

export interface ConfluenceSpace {
    id: string;
    key: string;
    name: string;
    type?: string;
}

export interface ConfluenceClientConfig {
    baseUrl: string;
    email: string;
    apiToken: string;
}