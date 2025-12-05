"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import Journey from "@/components/Journey";

export default function JourneyPage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <Journey />
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

