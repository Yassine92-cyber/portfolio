"use client";

import { motion } from "framer-motion";
import { FlaskConical, Code, Rocket, Users, Heart } from "lucide-react";

const skillCategories = [
    {
        icon: FlaskConical,
        title: "Scientific Research & Technical Expertise",
        subsections: [
            {
                subtitle: "Organic & Synthetic Chemistry",
                skills: [
                    "Organic synthesis (multi-step)",
                    "Structural analysis: NMR, UV–Visible, IR",
                    "Crystallization, purification, chromatography",
                    "Corrosion science: weight loss & polarization measurements",
                    "Fish & food product analysis",
                ],
            },
            {
                subtitle: "Computational & Medicinal Chemistry",
                skills: [
                    "Ligand–protein docking & blind docking",
                    "Virtual screening pipelines",
                    "ADME/ADMET predictions",
                    "Homology modeling (SWISS-MODEL)",
                    "Density Functional Theory (DFT) modeling",
                    "Molecular visualization & structural analysis",
                ],
            },
            {
                subtitle: "Bioinformatics & Data Science",
                skills: [
                    "Immunoinformatics & epigenomics",
                    "Multi-omics data analysis",
                    "Genome informatics",
                    "Data Science & Machine Learning (Python + R)",
                    "GWAS analysis",
                    "HPC workflows and scientific computing",
                ],
            },
            {
                subtitle: "Scientific Tools & Software",
                skills: [
                    "Mestrenova • GAUSSIAN • GAMESS • MOE • Schrodinger Suite • AutoDock & Vina • Swiss Model • DataWarrior • PyMOL • Discovery Studio • Voltamaster • Jupyter • Quantum Espresso",
                ],
            },
        ],
    },
    {
        icon: Code,
        title: "IT & Digital Tools",
        skills: [
            "Office 365",
            "ChatGPT & AI-assisted workflows",
            "Cursor (AI-coding)",
            "WordPress • Webflow • Typeform",
            "HubSpot CRM",
            "Jira • Slack",
            "Canva • Notion",
            "Python scripting",
            "Microsoft Azure (Cloud + Security Fundamentals)",
        ],
    },
    {
        icon: Rocket,
        title: "Business, Strategy & Innovation",
        skills: [
            "Project management & prioritization",
            "Business development (research → outreach → pipeline building)",
            "Product development & early-stage MVP design",
            "Market needs assessment & competitive analysis",
            "Scalability & resource planning",
            "Stakeholder management & cross-functional collaboration",
            "Brainstorming, co-creation & problem framing",
        ],
    },
    {
        icon: Users,
        title: "Training, Facilitation & Education",
        skills: [
            "Personal strategic planning & goal-setting systems",
            "Relaxation, breathing & focus techniques",
            "Mind maps & accelerated learning",
            "Subconscious mind & performance psychology",
            "Positive thinking & mindset frameworks",
            "Academic excellence coaching",
            "Networking mastery",
            "Organic chemistry MOOC facilitation",
            "Pitching, communication & confidence-building workshops",
        ],
    },
    {
        icon: Heart,
        title: "Soft Skills & Human-Centered Competencies",
        skills: [
            "Creativity & innovation",
            "Research & analytical thinking",
            "Scientific writing & documentation",
            "Independent and team-based work",
            "Communication & cross-functional collaboration",
            "Time & organizational management",
            "Presentation & storytelling",
            "Proactivity & leadership mindset",
        ],
    },
];

export function SkillsSection() {
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
        <section id="skills" className="relative py-24 md:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
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
                                Skills
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={index}
                                    custom={index + 1}
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-indigo-300" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Check if category has subsections */}
                                    {category.subsections ? (
                                        <div className="space-y-6">
                                            {category.subsections.map((subsection, subIndex) => (
                                                <div key={subIndex}>
                                                    <h4 className="text-sm font-semibold text-indigo-300 mb-3">
                                                        {subsection.subtitle}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {subsection.skills.map((skill, skillIndex) => (
                                                            <span
                                                                key={skillIndex}
                                                                className="px-3 py-1.5 text-xs rounded-full bg-white/[0.05] text-white/80 border border-white/[0.08] hover:border-white/[0.15] transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1.5 text-xs rounded-full bg-white/[0.05] text-white/80 border border-white/[0.08] hover:border-white/[0.15] transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
