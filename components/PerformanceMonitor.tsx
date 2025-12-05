"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Track Core Web Vitals
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Track Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          
          if (lastEntry) {
            const lcp = lastEntry.renderTime || lastEntry.loadTime;
            if (lcp && typeof window.gtag !== "undefined") {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "LCP",
                value: Math.round(lcp),
                non_interaction: true,
              });
            }
          }
        });
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // Performance Observer not supported
      }

      // First Input Delay (FID)
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            if (fid && typeof window.gtag !== "undefined") {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "FID",
                value: Math.round(fid),
                non_interaction: true,
              });
            }
          });
        });
        observer.observe({ entryTypes: ["first-input"] });
      } catch (e) {
        // Performance Observer not supported
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          // Report CLS when page is hidden (user navigating away)
          if (document.visibilityState === "hidden") {
            if (clsValue && typeof window.gtag !== "undefined") {
              window.gtag("event", "web_vitals", {
                event_category: "Web Vitals",
                event_label: "CLS",
                value: Math.round(clsValue * 1000) / 1000,
                non_interaction: true,
              });
            }
          }
        });
        observer.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        // Performance Observer not supported
      }
    }
  }, []);

  return null;
}

