"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const eras = [
    {
        title: "Formation Era",
        period: "2010–2014",
        subtitle: "Curiosity, Creativity, Communication",
        achievements: [
            {
                type: "Education",
                title: "B.Sc. Organic Chemistry: Mohammed I University",
                details: ["Thesis: Amino acids–based drugs", "Foundations in scientific structure and systems thinking"],
            },
            {
                type: "Creative Work",
                title: "Author: Breeze & Dust",
                details: ["Self-published with a €130 scholarship", "Printed 250 copies and sold out in 9 months", "First demonstration of storytelling initiative and self-driven creation"],
            },
            {
                type: "Early Work",
                title: "Freelance Training (Beginnings)",
                details: ["Started facilitating workshops for students", "Learned to break down complexity and teach effectively"],
            },
        ],
        coreIdentity: "Scientist + storyteller + educator",
    },
    {
        title: "Advanced Learning Era",
        period: "2014–2016",
        subtitle: "Science Expands, Teaching Deepens",
        achievements: [
            {
                type: "Education",
                title: "M.Sc. Chemistry: Chouaib Doukkali University",
                details: ["Thesis: Pyrazole ligands, corrosion inhibition, GAUSSIAN modeling"],
            },
            {
                type: "Professional",
                title: "Freelance Trainer (Expansion)",
                details: ["Delivered trainings in multiple Moroccan cities", "Developed methods for structured learning and communication"],
            },
        ],
        coreIdentity: "Scientist–educator with strong analytical and teaching foundations",
    },
    {
        title: "Research and Leadership Era",
        period: "2016–2020",
        subtitle: "PhD and Global Coordination",
        achievements: [
            {
                type: "Education",
                title: "Ph.D. Organic / Medicinal / Computational Chemistry: Mohammed I University",
                details: [
                    "10 publications during PhD",
                    "Additional 3 publications during MSc",
                    "H-index: 9 at graduation",
                ],
            },
            {
                type: "Leadership",
                title: "Coordinated 8 labs across 4 countries",
                details: [
                    "Reduced workflow time from 90 to 14–21 days",
                    "Onboarded 6 newcomers effectively and quickly",
                ],
            },
            {
                type: "Organization",
                title: "AIESEC: Project Manager and Team Leader",
                details: [
                    "Coordinated mobility programs across 5+ countries",
                    "Managed placements and global collaboration",
                ],
            },
            {
                type: "Scientific Leadership",
                title: "Scientific Leadership",
                details: [
                    "Moderated 17 scientific sessions",
                    "Delivered 12 talks/posters",
                ],
            },
        ],
        coreIdentity: "Research leader, systems coordinator, cross-cultural communicator",
    },
    {
        title: "Finland and Postdoc Transition",
        period: "2021–2022",
        subtitle: "Science in a New Country",
        achievements: [
            {
                type: "Research",
                title: "Postdoctoral Researcher via Marie Skłodowska-Curie Fellowship",
                details: [
                    "Project: Adaptive drug-vector nanostructures",
                    "€22k VAHVISTUS grant",
                    "Protocol documentation and synthesis work",
                    "Cross-disciplinary teamwork",
                ],
            },
            {
                type: "Integration",
                title: "Beginning Integration into Finland",
                details: [
                    "Learning Finnish",
                    "Exploring the ecosystem (Maria01, The Shortcut, Junction)",
                    "Informally helping newcomers navigate the Finnish system",
                ],
            },
        ],
        coreIdentity: "Scientist evolving into a bridge between people and ecosystems",
    },
    {
        title: "Bridge Builder Era",
        period: "2022–2024",
        subtitle: "Reinvention and Community Activation",
        achievements: [
            {
                type: "Integration",
                title: "Integration Through Action",
                details: [
                    "Night shifts at Posti (00:00–05:30) while networking daily",
                    "Built 14K+ LinkedIn connections",
                    "Launched Career Boost Network (191 members)",
                    "Hosted webinars on job strategy and clarity",
                ],
            },
            {
                type: "Volunteering",
                title: "Volunteering Across Finland's Ecosystem",
                details: [
                    "Slush: Sustainability Lead",
                    "Junction: Head of Global Participant Acquisition",
                    "Arctic15: Matchmaker",
                    "EntryPoint: Mentor and mentee",
                    "Think Africa: Mentor",
                    "Espoo Career Club: Regular contributor",
                ],
            },
            {
                type: "Upskilling",
                title: "Professional Upskilling",
                details: [
                    "Azure Fundamentals",
                    "McKinsey Forward",
                    "IBM Design Thinking",
                    "Train-the-Trainer",
                ],
            },
            {
                type: "Public Speaking",
                title: "Public Speaking",
                details: [
                    "Finnish Integration Program (Taitotalo)",
                    "Self-learning in bioinformatics and climate-tech topics",
                ],
            },
        ],
        coreIdentity: "Bridge Builder for international talent, community, and opportunity ecosystems",
    },
    {
        title: "Business Development and SaaS Era",
        period: "2024",
        subtitle: "Strategy Meets Research",
        achievements: [
            {
                type: "Professional",
                title: "Business Development Manager: Yellow Method Oy",
                details: [
                    "Researched 250+ companies and 600 contacts",
                    "Secured 11 B2B meetings",
                    "Built 27-VC investor pipeline",
                    "Improved CRM visibility and reporting",
                    "Created BD scripts, briefs, memos",
                    "Built GPT workflows and handover systems",
                    "Managed Webflow, Typeform, Google Analytics",
                ],
            },
        ],
        coreIdentity: "Scientist → Strategist → Early-stage business builder",
    },
    {
        title: "Builder of Opportunities Era",
        period: "2025–Present",
        subtitle: "Systems for International Talents",
        achievements: [
            {
                type: "Peer Support",
                title: "Peer Support and Community Work",
                details: [
                    "Peer-support certifications: MIELI, ADHD-liitto, Finnish Refugee Council",
                    "Advanced peer-support training on Finnish legal systems",
                    "Speaking at Haaga-Helia, Familia ry, Espoo Career Club",
                    "Supporting newcomers through clarity frameworks",
                ],
            },
            {
                type: "AI & Tools",
                title: "AI, Projects, and Tools",
                details: [
                    "Built 3 GitHub chemistry projects",
                    "Created two custom GPTs: VentureLens, PromptCraft",
                    "Created 10+ Cursor-based clarity tools",
                    "Designed this interactive portfolio website",
                ],
            },
            {
                type: "Content",
                title: "Content and Support Work",
                details: [
                    "Posting daily about integration, resilience, AI workflows, job clarity",
                    "Helping jobseekers & founders move from uncertainty to clarity",
                ],
            },
        ],
        coreIdentity: "Builder of Opportunity Systems for International Talents",
    },
];

export function ExperienceSection() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <section id="experience" className="relative py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                My Journey
                            </span>
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {eras.map((era, eraIndex) => (
                            <motion.div
                                key={eraIndex}
                                custom={eraIndex + 1}
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative"
                            >
                                <div className="relative pl-8 md:pl-12 border-l-2 border-white/[0.1]">
                                    <div className="absolute -left-[5px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500" />
                                    
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Sparkles className="w-5 h-5 text-indigo-300" />
                                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                                {era.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-4 text-white/60 mb-2">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span className="font-medium">{era.period}</span>
                                            </div>
                                            <span className="text-white/40">•</span>
                                            <span className="italic">{era.subtitle}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-6">
                                        {era.achievements.map((achievement, achIndex) => (
                                            <div
                                                key={achIndex}
                                                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                                            >
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-2">
                                                        {achievement.type}
                                                    </span>
                                                    <h4 className="text-lg font-semibold text-white mb-2">
                                                        {achievement.title}
                                                    </h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {achievement.details.map((detail, detailIndex) => (
                                                        <li
                                                            key={detailIndex}
                                                            className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                                                        >
                                                            <span className="text-indigo-300 mt-1.5">•</span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20">
                                        <p className="text-sm text-white/80">
                                            <span className="font-semibold text-indigo-300">Core identity: </span>
                                            {era.coreIdentity}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
