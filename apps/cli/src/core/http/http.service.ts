import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ConfigService } from '../config/config.service';

@Injectable()
export class HttpService {
  private client: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    const config = this.configService.load();

    this.client = axios.create({
      baseURL: config.straion?.endpoint || 'http://localhost:3000',
      timeout: 30000,
      headers: config.straion?.apiKey
        ? {
            Authorization: `Bearer ${config.straion.apiKey}`,
          }
        : {},
    });
  }

  /**
   * Perform GET request
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  /**
   * Perform POST request
   */
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  /**
   * Get the axios instance for custom requests
   */
  getClient(): AxiosInstance {
    return this.client;
  }
}
