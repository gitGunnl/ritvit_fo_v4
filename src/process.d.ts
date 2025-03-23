
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    OPENAI_API_KEY?: string;
    [key: string]: string | undefined;
  }
}
