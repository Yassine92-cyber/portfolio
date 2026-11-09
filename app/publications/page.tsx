import { Navigation } from "@/components/Navigation";
import { PublicationsPageContent } from "./publications-content";
import type { Metadata } from "next";
import { ogImage, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Publications",
  description: "Research papers, articles, and academic contributions by Yassine Kaddouri. Including publications on organic chemistry, computational chemistry, corrosion inhibition, and medicinal chemistry.",
  alternates: {
    canonical: absoluteUrl("/publications"),
  },
  openGraph: {
    title: "Publications | Yassine Kaddouri",
    description: "Research papers, articles, and academic contributions by Yassine Kaddouri. Including publications on organic chemistry, computational chemistry, corrosion inhibition, and medicinal chemistry.",
    url: absoluteUrl("/publications"),
    type: "website",
    images: [ogImage],
  },
};

export default function PublicationsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="relative min-h-screen bg-ink">
        <PublicationsPageContent />
      </main>
    </>
  );
}
