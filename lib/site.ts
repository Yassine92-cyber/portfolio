export const siteUrl = "https://portfolio-sooty-five-31.vercel.app";

export const siteTitle = "Yassine Kaddouri, Ph.D. | Founder & CEO of Orinavis";

export const siteDescription =
  "Scientist turned founder. Yassine Kaddouri, Ph.D., is the founder and CEO of Orinavis, bringing scientific thinking, technology, and human-centered design to the path from skills to opportunity.";

export const links = {
  orinavis: "https://orinavis.com",
  linkedin: "https://www.linkedin.com/in/dr-yassine92",
  contact: "/#contact",
};

// Public contact address, supplied at build time. Left unset until the owner confirms one;
// the Email Me action is only rendered when it is a plausible address.
const configuredEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim();
export const contactEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail) ? configuredEmail : null;

export const primaryNav = [
  { label: "About", href: "/my-journey" },
  { label: "Work", href: "/portfolio" },
  { label: "Research", href: "/publications" },
  { label: "Writing", href: "/blog" },
] as const;

// Pages that declare their own openGraph block replace the inherited image, so they reference it explicitly.
export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: siteTitle,
};
