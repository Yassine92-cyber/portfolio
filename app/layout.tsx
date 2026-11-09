import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PersonSchema, WebsiteSchema } from "@/components/structured-data";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { Analytics } from "@vercel/analytics/react";
import { ToasterProvider } from "@/components/ui/toaster-provider";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Yassine Kaddouri",
  },
  description: siteDescription,
  keywords: [
    "Yassine Kaddouri",
    "Orinavis",
    "Founder",
    "Career Intelligence",
    "Scientist",
    "B2B SaaS",
    "Business Development",
    "Community Builder",
    "Startup Ecosystem",
    "Finland",
    "International Talent",
    "Career Development",
  ],
  authors: [{ name: "Yassine Kaddouri" }],
  creator: "Yassine Kaddouri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Yassine Kaddouri Portfolio",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090B10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body suppressHydrationWarning>
        <PersonSchema />
        <WebsiteSchema />
        <MotionProvider>
          <ReadingProgress />
          {children}
          <Footer />
          <ScrollToTop />
        </MotionProvider>
        <Analytics />
        <ToasterProvider />
      </body>
    </html>
  );
}
