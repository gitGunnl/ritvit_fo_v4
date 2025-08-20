
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        error_message?: string;
      }
    ) => void;
  }
}

export {};
