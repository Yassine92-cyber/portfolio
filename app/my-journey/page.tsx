import { Navigation } from "@/components/Navigation";
import { MyJourneyPageContent } from "./my-journey-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Journey",
  description: "The evolution from scientist to bridge builder: A journey through formation, research, integration, and community building. From PhD in chemistry to B2B SaaS business development and peer support.",
  alternates: {
    canonical: "https://yassinekaddouri.com/my-journey",
  },
  openGraph: {
    title: "My Journey | Yassine Kaddouri",
    description: "The evolution from scientist to bridge builder: A journey through formation, research, integration, and community building.",
    url: "https://yassinekaddouri.com/my-journey",
    type: "website",
  },
};

export default function MyJourneyPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <MyJourneyPageContent />
    </main>
  );
}

