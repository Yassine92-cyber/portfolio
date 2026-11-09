import { Navigation } from "@/components/Navigation";
import { PortfolioPageContent } from "./portfolio-content";
import type { Metadata } from "next";
import { ogImage, absoluteUrl } from "@/lib/site";

const description =
  "Orinavis, the career intelligence company I founded, plus selected ventures, B2B pipelines, communities, research coordination and custom GPT experiments.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: {
    canonical: absoluteUrl("/portfolio"),
  },
  openGraph: {
    title: "Work | Yassine Kaddouri",
    description,
    url: absoluteUrl("/portfolio"),
    type: "website",
    images: [ogImage],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative min-h-screen bg-ink">
        <PortfolioPageContent />
      </main>
    </>
  );
}
