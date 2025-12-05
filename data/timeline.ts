export type TimelineEraId =
  | "formation"
  | "advanced-learning"
  | "research-leadership"
  | "finland-postdoc"
  | "bridge-builder"
  | "bd-saas"
  | "builder-of-opportunities";

export type TimelineEra = {
  id: TimelineEraId;
  yearRange: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

export const TIMELINE: TimelineEra[] = [
  {
    id: "formation",
    yearRange: "2010 to 2014",
    title: "Formation Era: Curiosity, creativity and communication take shape",
    subtitle:
      "BSc Organic Chemistry, Author, Freelance Trainer. Core identity formed: Scientist, storyteller and educator.",
    bullets: [
      "BSc Organic Chemistry: Thesis on amino-acid-based drugs. Foundations in scientific thinking and laboratory analysis.",
      "Author: Self-published the book 'Breeze and Dust' using a 130 EUR scholarship. Printed 250 copies and sold out in 9 months.",
      "Freelance Trainer: Delivered early workshops across cities. Learned to simplify and communicate complex ideas.",
      "Core identity formed: Scientist, storyteller and educator.",
    ],
  },
  {
    id: "advanced-learning",
    yearRange: "2014 to 2016",
    title: "Advanced Learning Era: Science deepens. Teaching grows.",
    subtitle: "MSc Chemistry, Freelance Training (Expansion). Core identity formed: Scientist educator with strong analytical foundations.",
    bullets: [
      "MSc Chemistry: Thesis on pyrazole ligands and corrosion inhibition using GAUSSIAN modeling.",
      "Freelance Training (Expansion): Delivered trainings in multiple cities. Developed structured learning methods.",
      "Core identity formed: Scientist educator with strong analytical foundations.",
    ],
  },
  {
    id: "research-leadership",
    yearRange: "2016 to 2020",
    title: "Research and Leadership Era: PhD, global collaboration and research leadership",
    subtitle: "PhD Organic, Medicinal and Computational Chemistry, Coordinated 8 labs across 4 countries, AIESEC Project Manager. Core identity formed: Research leader and systems coordinator.",
    bullets: [
      "PhD Organic, Medicinal and Computational Chemistry: 10 peer-reviewed publications and 3 additional MSc publications. H-index 9 at graduation.",
      "Coordinated 8 labs across 4 countries: Reduced workflow from 90 days to 14 to 21 days. Onboarded 6 newcomers within 5 days.",
      "AIESEC Project Manager and Team Leader: Coordinated international projects. Managed placements across multiple countries. Strengthened cross-cultural leadership.",
      "Conference Leadership: Moderated 17 scientific sessions. Delivered 12 talks and posters.",
      "Core identity formed: Research leader and systems coordinator.",
    ],
  },
  {
    id: "finland-postdoc",
    yearRange: "2021 to 2022",
    title: "Finland and Postdoc Transition: A new country. A new ecosystem.",
    subtitle: "Marie Skłodowska Curie Postdoc Researcher, Integration Foundations. Core identity formed: Scientist becoming a bridge builder.",
    bullets: [
      "Marie Skłodowska Curie Postdoc Researcher: Worked on adaptive drug vector nanostructures. Managed tasks under a 22K EUR grant. Documented protocols and supported cross-disciplinary teams.",
      "Integration Foundations: Began learning Finnish. Explored Finland's startup ecosystem. Supported newcomers informally.",
      "Core identity formed: Scientist becoming a bridge builder.",
    ],
  },
  {
    id: "bridge-builder",
    yearRange: "2022 to 2024",
    title: "Bridge Builder Era: A reinvention driven by community and resilience",
    subtitle: "Integration in Action, Ecosystem Engagement, Upskilling. Core identity formed: Bridge Builder for international talent and opportunity ecosystems.",
    bullets: [
      "Integration in Action: Worked night shifts at Posti while networking daily. Built 14K LinkedIn connections. Launched Career Boost Network with 191 members. Hosted webinars on job strategies.",
      "Ecosystem Engagement: Slush: Sustainability Group Lead. Junction: Head of Global Participant Acquisition. Arctic15: Matchmaker. EntryPoint: Mentor and mentee. Think Africa: Mentor. Espoo Career Club: Regular guest.",
      "Upskilling: Azure Fundamentals, IBM Design Thinking, Public Speaking, Train the Trainer, Finnish Integration Program, Bioinformatics and carbon removal learning paths.",
      "Core identity formed: Bridge Builder for international talent and opportunity ecosystems.",
    ],
  },
  {
    id: "bd-saas",
    yearRange: "2024",
    title: "Business Development and SaaS Era: Bringing research clarity into commercial systems",
    subtitle: "Business Development Manager, Yellow Method Oy. Core identity formed: Scientist to strategist to business builder.",
    bullets: [
      "Business Development Manager, Yellow Method Oy: Conducted research on 250 companies and 600 contacts. Booked 11 B2B meetings. Built a vetted investor list of 27 VCs.",
      "Improved CRM visibility and reporting: Created BD scripts, briefs and meeting memos. Built AI workflows and handover systems. Managed Webflow, Typeform and analytics.",
      "Core identity formed: Scientist to strategist to business builder.",
    ],
  },
  {
    id: "builder-of-opportunities",
    yearRange: "2025 to Present",
    title: "Builder of Opportunities Era: Where science, community, strategy and support come together",
    subtitle: "Peer Support and Community Activation, Technology and Tools, Content and Knowledge Sharing. Core identity formed: Builder of Opportunity Systems for international talents.",
    bullets: [
      "Peer Support and Community Activation: Certified by MIELI, ADHD-liitto and Finnish Refugee Council. Speaker at Haaga-Helia, Familia Ry and Espoo Career Club. Supporting jobseekers and newcomers daily.",
      "Technology and Tools: Built GitHub chemistry projects. Created two custom GPTs: VentureLens and PromptCraft. Developed more than 10 Cursor-based clarity tools. Designed an interactive portfolio experience.",
      "Content and Knowledge Sharing: Posting consistently on resilience, AI workflows, strategic networking, integration clarity and job search frameworks.",
      "Core identity formed: Builder of Opportunity Systems for international talents.",
    ],
  },
];

// Color palette for era stars
export const ERA_COLORS: Record<TimelineEraId, string> = {
  formation: "#4B9CFF",
  "advanced-learning": "#B673FF",
  "research-leadership": "#FF8A44",
  "finland-postdoc": "#48C774",
  "bridge-builder": "#00D1B2",
  "bd-saas": "#F14668",
  "builder-of-opportunities": "#FF7E6B",
};

// 3D positions for era stars (arranged in a spiral/constellation pattern)
export const ERA_POSITIONS: Record<TimelineEraId, [number, number, number]> = {
  formation: [0, 2, -3],
  "advanced-learning": [-2, 1.5, -4],
  "research-leadership": [-2.5, 0, -4.5],
  "finland-postdoc": [-1.5, -1.5, -4],
  "bridge-builder": [1.5, -1.5, -4],
  "bd-saas": [2.5, 0, -4.5],
  "builder-of-opportunities": [2, 1.5, -4],
};

