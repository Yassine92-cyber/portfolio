"use client";

import { GoogleAnalytics } from "./Analytics";
import { PerformanceMonitor } from "./PerformanceMonitor";

export default function AnalyticsWrapper() {
  return (
    <>
      <GoogleAnalytics />
      <PerformanceMonitor />
    </>
  );
}

