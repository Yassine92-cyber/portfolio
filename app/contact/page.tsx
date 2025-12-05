"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div className="relative w-full bg-clarity-white dark:bg-gray-900 min-h-screen">
          <Contact />
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}

