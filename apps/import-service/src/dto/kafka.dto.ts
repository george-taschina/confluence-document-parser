export interface DocumentParsedMessage {
  importId: string;
  parsedContent: {
    id: string;
    title: string;
    content: string;
    spaceKey: string;
  };
  storageUrl?: string;
}

export interface DocumentFailedMessage {
  importId: string;
  error: string;
}

export type KafkaMessage<T> = string | T;
