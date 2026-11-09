// Orinavis copy is limited to what is stated publicly on orinavis.com.
export const orinavis = {
    name: "Orinavis",
    url: "https://orinavis.com",
    role: "Founder & CEO",
    tagline: "Career intelligence for coaching",
    status: "Founding-coach beta · Open in Finland",
    problem:
        "Evidence gets rewritten for every application, and much of a coaching hour goes on reconstructing what happened since the last session.",
    whyFounded:
        "I have seen this problem from both sides: rebuilding my own career in Finland after a Marie Curie postdoc, and supporting international talents through mentoring, peer support and the Career Boost Network. Capable people often have real evidence of their skills and no clear way to show it or act on it.",
    users:
        "Career coaches and the people they work with. The job seeker owns the career record and chooses who can see it; the coach works from the parts that have been shared.",
    company: "Orinavis Oy, Helsinki",
    pillars: [
        {
            title: "Skills evidence",
            body: "Experience, outcomes and materials become structured evidence with enough context to be credible, reusable across roles instead of rewritten each time.",
            status: "In beta",
        },
        {
            title: "Career intelligence",
            body: "Opportunity Fit compares that evidence with what a role asks for and marks each requirement strong, partial or needing proof, with the reasoning shown.",
            status: "In beta",
        },
        {
            title: "Human-centered guidance",
            body: "Coach and client review the gaps together and agree a few actions. Decision support only: no automated hiring decisions, no hidden scoring, sharing by consent.",
            status: "In beta",
        },
    ],
    vision:
        "Specialists and trusted supporters, joining with scoped and revocable access, are expanding during the beta. Organisation and programme access is inquiry-led and not self-serve in the founding beta.",
    loop: ["Capture evidence", "Understand opportunities", "Decide what matters", "Move forward"],
};

export type CaseStudy = {
    title: string;
    category: string;
    role: string;
    period: string;
    summary: string;
    evidence: string[];
    metric: { value: string; label: string };
    href?: string;
};

// Sourced from the timeline in app/my-journey/my-journey-content.tsx.
export const caseStudies: CaseStudy[] = [
    {
        title: "Everest Center",
        category: "Venture",
        role: "Co-founder & COO",
        period: "2013 – 2014 · Oujda, Morocco",
        summary:
            "Launched the centre's operations end-to-end and managed marketing, partner communications and event logistics.",
        evidence: [
            "Delivered the Hope Makers programme to 92 students.",
            "Grew revenue by 60% within six months.",
        ],
        metric: { value: "+60%", label: "revenue in six months" },
    },
    {
        title: "B2B pipeline for an innovation-readiness platform",
        category: "B2B SaaS",
        role: "Business Development Manager · Yellow Method Oy",
        period: "2024 · Helsinki",
        summary:
            "Built outbound and investor pipelines for a research-based platform that assesses organisational innovation readiness.",
        evidence: [
            "Researched 250+ companies and 600+ contacts; secured 11 B2B meetings.",
            "Built an investor list of 27 VCs and improved HubSpot funnel visibility.",
        ],
        metric: { value: "11", label: "B2B meetings secured" },
    },
    {
        title: "Career Boost Network",
        category: "Community",
        role: "Founder & host",
        period: "Helsinki",
        summary:
            "Launched a career network and hosted job-strategy webinars while volunteering at Slush, Junction and Arctic15.",
        evidence: [
            "Grew the network to 191 members and hosted two webinars on job strategy.",
            "Sustainability Lead at Slush and Head of Global Acquisition at Junction in 2023.",
        ],
        metric: { value: "191", label: "network members" },
    },
    {
        title: "Multi-lab research coordination",
        category: "Research",
        role: "Doctoral Researcher · Mohammed I University",
        period: "2016 – 2020 · Oujda, Morocco",
        summary:
            "Coordinated collaborative chemistry research across institutions while publishing on heterocyclic compounds, drug candidates and corrosion inhibition.",
        evidence: [
            "Coordinated 8 labs across 7 institutions and 4 countries.",
            "Cut turnaround time from ~90 days to 14–21 days by standardising requests and rerouting shipments.",
        ],
        metric: { value: "8 labs", label: "across 4 countries" },
        href: "/publications",
    },
];

export const projects = [
    {
        title: "PromptCraft",
        role: "Creator & Builder",
        context: "Nov 2025 • Available in GPT Store",
        description: "Most people have great ideas, but they struggle to turn them into clear prompts that actually get high-quality results from ChatGPT, Cursor, Gemini, or MidJourney. PromptCraft fixes that. You give it a vague idea, and it turns it into a structured, ready-to-use prompt, complete with role, objective, steps, constraints, and output format. It's built for creators, developers, researchers, founders, and anyone tired of rewriting prompts from scratch. Find it by searching 'PromptCraft' in the Explore GPTs store.",
        tags: ["AI", "GPT", "Productivity", "Tools"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        link: "https://chat.openai.com/g/g-pWZg0y4z6-promptcraft",
    },
    {
        title: "VentureLens",
        role: "Creator & Builder",
        context: "Nov 2025 • Available in GPT Store",
        description: "I built a custom GPT that combines years of research and analysis experience with business development and startup expertise. VentureLens delivers structured investor-grade analysis for any startup or company, including: what the company does, strengths and gaps, urgent needs, best-fit investors, and 12–18 month roadmap recommendations. This project stems from my passion for bridging research and business, enabling founders, investors, and innovators to see clearer paths forward. Find it by searching 'VentureLens' in the Explore GPTs store.",
        tags: ["AI", "GPT", "Startup Analysis", "Business Intelligence"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        link: "https://chat.openai.com/g/g-some-id-venturelens",
    },
    {
        title: "DealLens",
        role: "Creator & Builder",
        context: "Available in GPT Store",
        description: "Your AI Sales Development Assistant. Enter a company and target market to instantly get a full prospecting brief: company snapshot, ideal buyer personas, lead list with LinkedIn links, tailored outreach messages, and smart follow-up strategy.",
        tags: ["AI", "Sales", "Prospecting", "Lead Gen"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        link: "https://chatgpt.com/g/g-68e0e799021c8191929818fd3d731b79-deallens",
    },
    {
        title: "VibeCoder",
        role: "Creator & Builder",
        context: "Available in GPT Store",
        description: "Turn raw app ideas into shippable MVPs with Cursor. I translate your vision into step-by-step build plans, ready-to-paste Cursor prompts, scaffolds, and fixes for web or mobile. I ask only what’s essential, then generate code, tests, and deploy steps: fast, minimal, production-minded.",
        tags: ["AI", "Coding", "MVP", "Cursor"],
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
        link: "https://chatgpt.com/g/g-68e11d125d548191aef09f59e0474cf9-vibecoder",
    },
];

// VentureLens still points at a placeholder GPT id; its description tells visitors to search the GPT store.
export function hasLiveLink(project: (typeof projects)[number]) {
    return !project.link.includes("g-some-id");
}
