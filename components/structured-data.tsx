import { links, siteDescription, siteUrl } from "@/lib/site";

export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yassine Kaddouri",
    honorificSuffix: "Ph.D.",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Orinavis",
      url: links.orinavis,
    },
    description: siteDescription,
    url: siteUrl,
    sameAs: [links.linkedin],
  };

  return <StructuredData data={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yassine Kaddouri Portfolio",
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@type": "Person",
      name: "Yassine Kaddouri",
    },
  };

  return <StructuredData data={schema} />;
}
