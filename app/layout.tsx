import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";

// Dynamically import AnalyticsWrapper to avoid SSR issues
const AnalyticsWrapper = dynamic(() => import("@/components/AnalyticsWrapper"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Yassine Kaddouri - Bridge Builder & Peer Supporter",
  description: "I help international talents and early-stage teams move from uncertainty to clarity by building opportunity systems and turning noise into signal.",
  keywords: [
    "Yassine Kaddouri",
    "Bridge Builder",
    "Peer Supporter",
    "International Talents",
    "Career Support",
    "Community Building",
    "Scientist to Strategist",
    "Helsinki",
    "Finland",
    "Peer Support",
    "Career Development",
    "Business Development",
  ],
  authors: [{ name: "Yassine Kaddouri" }],
  creator: "Yassine Kaddouri",
  metadataBase: new URL("https://yassinekaddouri.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yassinekaddouri.com",
    title: "Yassine Kaddouri - Bridge Builder & Peer Supporter",
    description: "I help international talents and early-stage teams move from uncertainty to clarity by building opportunity systems and turning noise into signal.",
    siteName: "Yassine Kaddouri Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Yassine Kaddouri - Bridge Builder & Peer Supporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Kaddouri - Bridge Builder & Peer Supporter",
    description: "I help international talents and early-stage teams move from uncertainty to clarity by building opportunity systems and turning noise into signal.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yassine Kaddouri",
              jobTitle: "Bridge Builder & Peer Supporter",
              description: "I help international talents and early-stage teams move from uncertainty to clarity by building opportunity systems and turning noise into signal.",
              url: "https://yassinekaddouri.com",
              sameAs: [
                "https://linkedin.com/in/yassinekaddouri",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Helsinki",
                addressCountry: "FI",
              },
              knowsAbout: [
                "Peer Support",
                "Community Building",
                "Business Development",
                "Scientific Research",
                "International Talent Support",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <AnalyticsWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
