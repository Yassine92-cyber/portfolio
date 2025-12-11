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
    jobTitle: "Bridge Builder & Peer Supporter",
    description:
      "Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.",
    url: "https://yassinekaddouri.com",
    sameAs: [
      // Add your social media profiles here
      // "https://linkedin.com/in/yassinekaddouri",
      // "https://twitter.com/yassinekaddouri",
    ],
  };

  return <StructuredData data={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yassine Kaddouri Portfolio",
    url: "https://yassinekaddouri.com",
    description:
      "Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from 0→1 and turning noise into signal.",
    publisher: {
      "@type": "Person",
      name: "Yassine Kaddouri",
    },
  };

  return <StructuredData data={schema} />;
}

