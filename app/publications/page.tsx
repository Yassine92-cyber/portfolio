import { Navigation } from "@/components/Navigation";
import { PublicationsPageContent } from "./publications-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Research papers, articles, and academic contributions by Yassine Kaddouri. Including publications on organic chemistry, computational chemistry, corrosion inhibition, and medicinal chemistry.",
  alternates: {
    canonical: "https://yassinekaddouri.com/publications",
  },
  openGraph: {
    title: "Publications | Yassine Kaddouri",
    description: "Research papers, articles, and academic contributions by Yassine Kaddouri. Including publications on organic chemistry, computational chemistry, corrosion inhibition, and medicinal chemistry.",
    url: "https://yassinekaddouri.com/publications",
    type: "website",
  },
};

export default function PublicationsPage() {
  return (
    <main className="relative min-h-screen bg-[#030303]">
      <Navigation />
      <PublicationsPageContent />
    </main>
  );
}
