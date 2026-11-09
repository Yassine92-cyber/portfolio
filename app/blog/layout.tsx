import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";

const description =
  "Articles by Yassine Kaddouri on career development, community building, entrepreneurship and innovation.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Blog | Yassine Kaddouri",
    description,
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
