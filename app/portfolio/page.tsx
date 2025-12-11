import { Navigation } from "@/components/navigation";
import { PortfolioPageContent } from "./portfolio-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my recent projects and community contributions including community engagement frameworks, program facilitation, moderation, and analytics dashboards.",
  alternates: {
    canonical: "https://yassinekaddouri.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Yassine Kaddouri",
    description: "A showcase of my recent projects and community contributions including community engagement frameworks, program facilitation, moderation, and analytics dashboards.",
    url: "https://yassinekaddouri.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <Navigation />
      <PortfolioPageContent />
    </main>
  );
}
