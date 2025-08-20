
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    VITE_APP_TITLE?: string;
    [key: string]: string | undefined;
  }
  
  interface Process {
    env: ProcessEnv;
  }
}

declare let process: NodeJS.Process;
