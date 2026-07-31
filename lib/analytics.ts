/**
 * Vendor-agnostic analytics helper.
 * Consent-gated queue — ready to wire to any provider (gtag, Plausible, PostHog, etc.).
 */

export type AnalyticsEvent =
  | "demo_request_started"
  | "demo_request_submitted"
  | "partner_application_started"
  | "partner_application_submitted"
  | "pricing_viewed"
  | "product_page_viewed"
  | "case_study_viewed"
  | "contact_form_submitted";

type EventPayload = Record<string, string | number | boolean | undefined>;

const CONSENT_KEY = "estinad_analytics_consent";
const QUEUE_KEY = "estinad_analytics_queue";

declare global {
  interface Window {
    __estinadTrack?: (event: AnalyticsEvent, payload?: EventPayload) => void;
  }
}

function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "1";
  } catch {
    return false;
  }
}

function enqueue(event: AnalyticsEvent, payload?: EventPayload) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.sessionStorage.getItem(QUEUE_KEY);
    const queue: { event: AnalyticsEvent; payload?: EventPayload; t: number }[] = raw
      ? JSON.parse(raw)
      : [];
    queue.push({ event, payload, t: Date.now() });
    window.sessionStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-50)));
  } catch {
    /* ignore storage errors */
  }
}

function flushToProvider(event: AnalyticsEvent, payload?: EventPayload) {
  if (typeof window === "undefined") return;
  // Extension point for vendor SDKs:
  if (typeof window.__estinadTrack === "function") {
    window.__estinadTrack(event, payload);
  }
  // Always log in development for QA
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload ?? {});
  }
}

/** Record a conversion / engagement event. Respects consent; queues when denied. */
export function trackEvent(event: AnalyticsEvent, payload?: EventPayload) {
  if (typeof window === "undefined") return;
  if (!hasConsent()) {
    enqueue(event, payload);
    return;
  }
  flushToProvider(event, payload);
}

/** Call when the user grants analytics consent (checkbox / banner). */
export function grantAnalyticsConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, "1");
    const raw = window.sessionStorage.getItem(QUEUE_KEY);
    if (raw) {
      const queue: { event: AnalyticsEvent; payload?: EventPayload }[] = JSON.parse(raw);
      window.sessionStorage.removeItem(QUEUE_KEY);
      for (const item of queue) flushToProvider(item.event, item.payload);
    }
  } catch {
    /* ignore */
  }
}

export function revokeAnalyticsConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    /* ignore */
  }
}
