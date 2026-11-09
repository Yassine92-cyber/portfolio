import { Navigation } from "@/components/Navigation";
import { MyJourneyPageContent } from "./my-journey-content";
import type { Metadata } from "next";
import { ogImage, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "My Journey",
  description: "From Ph.D. chemist and Marie Curie postdoc to B2B SaaS business development, community building and founding Orinavis: the journey of Yassine Kaddouri.",
  alternates: {
    canonical: absoluteUrl("/my-journey"),
  },
  openGraph: {
    title: "My Journey | Yassine Kaddouri",
    description: "From Ph.D. chemist to B2B SaaS business development, community building and founding Orinavis.",
    url: absoluteUrl("/my-journey"),
    type: "website",
    images: [ogImage],
  },
};

export default function MyJourneyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative min-h-screen bg-ink">
        <MyJourneyPageContent />
      </main>
    </>
  );
}
