import fs from 'fs';
import os from 'os';
import path from 'path';

export interface Config {
  confluence?: {
    baseUrl: string;
    email: string;
    apiToken: string;
  };
  straion?: {
    apiKey: string;
    endpoint: string;
  };
}

export class ConfigManager {
  private readonly configPath: string;
  private readonly configDir: string;

  constructor() {
    this.configDir = path.join(os.homedir(), '.straion');
    this.configPath = path.join(this.configDir, 'config.json');
  }

  /**
   * Load configuration from disk
   */
  load(): Config {
    if (!fs.existsSync(this.configPath)) {
      return {};
    }

    try {
      const content = fs.readFileSync(this.configPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Failed to load config:', error);
      return {};
    }
  }

  /**
   * Save configuration to disk
   */
  save(config: Config): void {
    try {
      // Ensure config directory exists
      if (!fs.existsSync(this.configDir)) {
        fs.mkdirSync(this.configDir, { recursive: true, mode: 0o700 });
      }

      // Write config file
      fs.writeFileSync(
        this.configPath,
        JSON.stringify(config, null, 2),
        { mode: 0o600 }
      );
    } catch (error) {
      throw new Error(`Failed to save config: ${error}`);
    }
  }

  /**
   * Get the config file path
   */
  getConfigPath(): string {
    return this.configPath;
  }

  /**
   * Delete configuration file
   */
  delete(): void {
    if (fs.existsSync(this.configPath)) {
      fs.unlinkSync(this.configPath);
    }
  }
}
