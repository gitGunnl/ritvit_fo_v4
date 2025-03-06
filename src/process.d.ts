
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    VITE_SOME_KEY?: string;
    // Add other environment variables as needed
  }
}

declare var process: NodeJS.Process;

interface NodeJS.Process {
  env: NodeJS.ProcessEnv;
}
