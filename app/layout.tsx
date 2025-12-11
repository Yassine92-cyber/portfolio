import type { Metadata } from "next";
import "./globals.css";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { Analytics } from "@vercel/analytics/react";
import { ToasterProvider } from "@/components/ui/toaster-provider";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yassinekaddouri.com"),
  title: {
    default: "Yassine Kaddouri | Bridge Builder & Peer Supporter",
    template: "%s | Yassine Kaddouri",
  },
  description: "Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.",
  keywords: [
    "Yassine Kaddouri",
    "Bridge Builder",
    "Peer Supporter",
    "Community Builder",
    "B2B SaaS",
    "Business Development",
    "Startup Ecosystem",
    "Finland",
    "International Talent",
    "Career Development",
    "Peer Support",
    "Integration Coaching",
  ],
  authors: [{ name: "Yassine Kaddouri" }],
  creator: "Yassine Kaddouri",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yassinekaddouri.com",
    siteName: "Yassine Kaddouri Portfolio",
    title: "Yassine Kaddouri | Bridge Builder & Peer Supporter",
    description: "Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yassine Kaddouri - Bridge Builder & Peer Supporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Kaddouri | Bridge Builder & Peer Supporter",
    description: "Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PersonSchema />
        <WebsiteSchema />
        <ReadingProgress />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
        <ToasterProvider />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
