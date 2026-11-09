// Roles and dates mirror the timeline and volunteering lists in
// app/my-journey/my-journey-content.tsx. Logos identify organisations only.

export type Credential = {
    org: string;
    role: string;
    period: string;
};

export const credentialGroups: { label: string; note: string; items: Credential[] }[] = [
    {
        label: "Research",
        note: "Employment & editorial",
        items: [
            {
                org: "University of Helsinki",
                role: "Postdoctoral Researcher, Marie Curie Fellow",
                period: "2021 – 2022",
            },
            {
                org: "Mohammed I University",
                role: "Doctoral Researcher (Ph.D.)",
                period: "2016 – 2020",
            },
            {
                org: "Frontiers in Pharmacology",
                role: "Review Editor",
                period: "2023 – present",
            },
        ],
    },
    {
        label: "Industry & ventures",
        note: "Employment & founding roles",
        items: [
            { org: "Orinavis", role: "Founder & CEO", period: "Now" },
            {
                org: "Yellow Method Oy",
                role: "Business Development Manager",
                period: "2024",
            },
            { org: "Everest Center", role: "Co-founder & COO", period: "2013 – 2014" },
        ],
    },
    {
        label: "Startup ecosystem",
        note: "Volunteer leadership",
        items: [
            { org: "Slush", role: "Sustainability Lead", period: "2023" },
            { org: "Junction", role: "Head of Global Acquisition", period: "2023" },
            { org: "Arctic15", role: "Matchmaker", period: "2023" },
        ],
    },
    {
        label: "Mentoring & speaking",
        note: "Community participation",
        items: [
            { org: "Think Africa ry", role: "Mentor", period: "2024 – 2025" },
            { org: "EntryPoint, City of Espoo", role: "Mentor", period: "2024 – 2025" },
            { org: "Haaga-Helia", role: "Speaker, Course Connect", period: "2025" },
        ],
    },
];

// Only organisations named in credentialGroups, using logos that read well in monochrome.
export const credentialLogos = [
    { name: "University of Helsinki", src: "/logos/helsinki.png" },
    { name: "Mohammed I University", src: "/logos/ump-oujda.png" },
    { name: "Yellow Method", src: "/logos/yellow-method.png" },
    { name: "Slush", src: "/logos/slush.png" },
    { name: "Junction", src: "/logos/junction.png" },
    { name: "Arctic15", src: "/logos/arctic15.png" },
    { name: "Think Africa", src: "/logos/think-africa.png" },
    { name: "City of Espoo", src: "/logos/espoo.png" },
    { name: "Haaga-Helia", src: "/logos/haaga-helia.png" },
];

export const journeyChapters = [
    {
        index: "01",
        title: "Scientific research",
        period: "2010 – 2022",
        summary:
            "B.Sc. to Ph.D. in chemistry in Morocco, then a Marie Curie postdoctoral fellowship at the University of Helsinki.",
        evidence: "10 peer-reviewed articles during the Ph.D.; coordinated 8 labs across 7 institutions and 4 countries.",
    },
    {
        index: "02",
        title: "B2B SaaS & business development",
        period: "2024",
        summary:
            "Business Development Manager at Yellow Method Oy, a research-based platform assessing organisational innovation readiness.",
        evidence: "250+ companies researched, 11 B2B meetings secured, a 27-VC investor list built.",
    },
    {
        index: "03",
        title: "Community building",
        period: "2022 – 2025",
        summary:
            "Volunteer leadership across Helsinki's startup ecosystem and mentoring for international talents.",
        evidence: "Career Boost Network (191 members); Slush, Junction and Arctic15 in 2023; mentor at Think Africa and EntryPoint.",
    },
    {
        index: "04",
        title: "Founder & CEO",
        period: "Now",
        summary:
            "Building Orinavis, a career intelligence workspace for coaches and the people they support.",
        evidence: "Bringing research, business development and community experience into one product.",
    },
];
