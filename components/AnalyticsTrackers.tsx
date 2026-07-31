"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ProductViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent("product_page_viewed", { slug });
  }, [slug]);
  return null;
}

export function PricingViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent("pricing_viewed", { slug });
  }, [slug]);
  return null;
}

export function CaseStudyViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackEvent("case_study_viewed", { slug });
  }, [slug]);
  return null;
}
