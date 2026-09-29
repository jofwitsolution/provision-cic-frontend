declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Queues an event for Google Tag Manager (works before GTM has loaded).
export function pushDataLayer(data: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}
