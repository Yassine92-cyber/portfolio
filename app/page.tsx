import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/home/hero";
import { Credibility } from "@/components/home/credibility";
import { OrinavisFeature } from "@/components/home/orinavis-feature";
import { SelectedWork } from "@/components/home/selected-work";
import { JourneyOverview } from "@/components/home/journey-overview";
import { ResearchWriting } from "@/components/home/research-writing";
import { TestimonialsHighlight } from "@/components/home/testimonials-highlight";
import { Contact } from "@/components/home/contact";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-5 focus:py-2.5 focus:text-ink"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="relative bg-ink">
        <Hero />
        <Credibility />
        <OrinavisFeature />
        <SelectedWork />
        <JourneyOverview />
        <ResearchWriting />
        <TestimonialsHighlight />
        <Contact />
      </main>
    </>
  );
}
