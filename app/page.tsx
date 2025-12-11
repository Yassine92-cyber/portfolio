import { Navigation } from "@/components/Navigation";
import { HeroFintech } from "@/components/sections/hero-fintech";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { SummaryCard } from "@/components/sections/summary-card";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { MyJourneySummarySection } from "@/components/sections/my-journey-summary-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Bridge Builder & Peer Supporter. Postdoc researcher turned B2B SaaS business developer and community builder.",
  alternates: {
    canonical: "https://yassinekaddouri.com",
  },
  openGraph: {
    title: "Yassine Kaddouri | Bridge Builder & Peer Supporter",
    description: "Postdoc researcher turned B2B SaaS business developer and community builder.",
    url: "https://yassinekaddouri.com",
  },
};

const organizations = [
    { name: "Slush", logo: "/logos/slush.png" },
    { name: "Junction", logo: "/logos/junction.png" },
    { name: "Arctic15", logo: "/logos/arctic15.png" },
    { name: "Maria 01", logo: "/logos/maria01.png" },
    { name: "University of Helsinki", logo: "/logos/helsinki.png" },
    { name: "Haaga Helia", logo: "/logos/haaga-helia.png" },
    { name: "Familia", logo: "/logos/familia.png", className: "brightness-100 invert-0 grayscale-0" },
    { name: "Think Africa", logo: "/logos/think-africa.png", className: "w-48 scale-125" },
    { name: "City of Espoo", logo: "/logos/espoo.png", className: "w-48 scale-125" },
    { name: "AIESEC", logo: "/logos/aiesec.png", className: "brightness-100 invert-0 grayscale-0" },
    { name: "Everest Center", logo: "/logos/everest.png", className: "brightness-100 invert-0 grayscale-0" },
    { name: "Frontiers in Pharmacology", logo: "/logos/frontiers-in-pharmacology.png", className: "brightness-100 invert-0 grayscale-0" },
    { name: "ICMUB", logo: "/logos/icmub.png" },
    { name: "ONSSA", logo: "/logos/onssa.png" },
    { name: "Posti", logo: "/logos/posti.png" },
    { name: "UMP Oujda", logo: "/logos/ump-oujda.png" },
    { name: "Yellow Method", logo: "/logos/yellow-method.png" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Skip to main content
      </a>
      <main id="main-content" className="relative bg-[#030303]" role="main">
        <Navigation />
        
        <HeroFintech />
        
        <div className="border-t border-white/5 bg-white/[0.02]">
          <InfiniteMarquee items={organizations} speed="slow" />
        </div>

        <SummaryCard />
        
        <MyJourneySummarySection />
        
        <PortfolioSection />
        
        <TestimonialsSection />
        
        <ContactSection />
      </main>
    </>
  );
}
