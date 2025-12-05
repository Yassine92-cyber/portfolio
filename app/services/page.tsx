"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import HowICanHelp from "@/components/HowICanHelp";

export default function ServicesPage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <HowICanHelp />
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

