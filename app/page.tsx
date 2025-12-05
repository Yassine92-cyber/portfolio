"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import PageLayout from "@/components/PageLayout";
import Hero3D from "@/components/Hero3D";
import WhoIHelp from "@/components/WhoIHelp";
import WhatIDo from "@/components/WhatIDo";
import JourneyPreview from "@/components/JourneyPreview";
import HowICanHelpPreview from "@/components/HowICanHelpPreview";
import Proof from "@/components/Proof";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <div id="main-content" className="relative w-full bg-clarity-white dark:bg-gray-900" role="main" aria-label="Portfolio main content">
          <Hero3D />
          <WhoIHelp />
          <WhatIDo />
          <JourneyPreview />
          <HowICanHelpPreview />
          <Proof />
          <CTASection />
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
}
