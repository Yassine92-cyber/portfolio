"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics 4 Component
export function GoogleAnalytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId || typeof window === "undefined") return;

    // Initialize GA4
    if (!window.gtag) {
      // Load gtag script
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script1);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      const dataLayer = window.dataLayer;
      window.gtag = function (...args: any[]) {
        if (dataLayer) {
          dataLayer.push(args);
        }
      };
      window.gtag("js", new Date());
      window.gtag("config", gaId, {
        page_path: window.location.pathname + window.location.search,
      });
    }
  }, []);

  return null;
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  trackEvent("form_submit", "engagement", formName);
}

// Track section views
export function trackSectionView(sectionName: string) {
  trackEvent("section_view", "engagement", sectionName);
}

// Track link clicks
export function trackLinkClick(linkName: string, linkUrl: string) {
  trackEvent("link_click", "engagement", linkName, undefined);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "outbound",
      event_label: linkUrl,
      transport_type: "beacon",
    });
  }
}

