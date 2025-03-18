
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    OPENAI_API_KEY: string;
    OPENAI_ASSISTANT_ID: string;
  }
}
