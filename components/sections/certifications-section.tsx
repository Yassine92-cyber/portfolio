"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Cloud, FlaskConical, Leaf, Rocket, Users, Globe, Shield } from "lucide-react";

const certificationCategories = [
    {
        icon: Users,
        category: "Professional Trainer & Personal Development",
        period: "2012–2018",
        items: [
            "Professional Trainer in Personal Development — Trained 600+ learners across 4 cities in Morocco (2013–2018)",
            "Certified Professional Trainer in Personal Development — EFSTC (since 31/07/2016)",
            "Member, Club International SMS (Success Made Simple) Network (2015–2016)",
            "Certified Hypnotherapy Practitioner — The Mind Care Organization Ltd, UK (from 30/12/2013)",
            "Certified Trainer in Academic Excellence — International Academies (from 10/03/2013)",
            "Certified Personal Strategic Planning Trainer — IAPTLD, Montreal, Canada (from 10/04/2012)",
            "Volunteer: 'Multiple Chances Schools' Project (from 14/02/2012)",
            "Everest Center for Training, Counseling & Monitoring (2013–2014) — Responsible for technical services, Certified trainer and consultant, Delivered programs to 92 students → grew to 152 enrollments",
            "Round Table Secretary — Media & Communication Event (17/11/2012) — Topic: Value systems and the role of opinion leaders in the community",
        ],
    },
    {
        icon: FlaskConical,
        category: "Bioinformatics, Drug Discovery & Computational Science",
        period: "2021–2023",
        items: [
            "One-Month International Bioinformatics Workshop on Drug Discovery & Development — Decode Life, India (11/2023 – Present)",
            "Topics: Linux environment, Drug discovery pipelines, Structure- and ligand-based drug design, Chemical space searching, MODELLER, AlphaFold2, SWISS-MODEL, Docking (AutoDock4, Vina), Protein–protein docking (HEX, HDOCK), Molecular dynamics (GROMACS, Desmond, AMBER), Visualization (PyMOL, DS Visualizer, Chimera, Maestro), QSAR, SAR, ADMET, Python for scientific graphing",
            "Online Trainings (Decode Life India: 11/2021 – 04/2023): Epigenomics & Immunoinformatics, Data Science & Machine Learning with Python and GWAS, Plant Genomics & Bioinformatics, Bioinformatics with R (Machine learning), Multi-omics Box (2nd edition), Genome Informatics",
            "Molecular Simulation & Docking Training — Centre for Advanced Computational Research, New Delhi (09/2021 – 06/2022): Protein–ligand docking (AutoDock), Molecular dynamics with GROMACS, Surface mapping, GAUSSIAN & GAMESS quantum chemistry workflows, IR, UV, Raman, NMR spectral predictions, Thermochemical property calculations",
        ],
    },
    {
        icon: Cloud,
        category: "Cloud, Security & Microsoft Technologies",
        period: "2021–2022",
        items: [
            "Azure Security Training — The Shortcut + Sovelto + Microsoft, Finland (06/2022 – 09/2022)",
            "Weekly training in: AZ-900 Azure Fundamentals, AZ-104 Azure Administrator, SC-900 Security, Compliance & Identity, AZ-500 Azure Security Technologies",
            "Achievements: Passed Microsoft Azure Fundamentals (AZ-900), Passed Must Learn KQL, Passed Kusto Detective Agency Case #1 + Onboarding Badges",
            "Additional Microsoft Learning: 'Must Learn KQL' — Microsoft (09/2022)",
        ],
    },
    {
        icon: GraduationCap,
        category: "Deep Learning, Cloud Computing & Scientific Software",
        period: "2021–2022",
        items: [
            "CSC-IT for Science, Finland",
            "Practical Deep Learning (10–11 Feb 2022)",
            "CSC Cloud Computing Fundamentals (13–14 Jan 2022)",
            "Train-the-Trainer for Bioinformatics Educators (14–17 Dec 2021)",
            "Workshop for scRNA-seq Data Trainers (30 Nov 2021)",
            "Schrodinger Maestro Hands-On Workshop (26–27 Oct 2021)",
        ],
    },
    {
        icon: Leaf,
        category: "Climate & Carbon Removal",
        period: "11/2023 – Present",
        items: [
            "AirMiners Boot Up Program (In partnership with Climate Change Academy, Work on Climate, Anthropocene Institute)",
            "Content: Carbon Removal: Systems & Scale, Soil Organic Carbon & Regenerative Agriculture, Forest Carbon Removal, Biomass Carbon Removal & Storage (BiCRS), Direct Air Capture, Carbon Mineralization, Ocean CDR (Biotic & Abiotic), MRV (Measurement, Reporting, Verification), Climate entrepreneurship & market shaping, Reflection and action commitments",
        ],
    },
    {
        icon: Rocket,
        category: "Entrepreneurship, Innovation & Business Fundamentals",
        period: "11/2023 – 01/2024",
        items: [
            "Find The Entrepreneur In You – The Shortcut",
            "Topics: Self & business awareness, Idea validation, Market sizing, timing, pricing, Business model development, Sales process design, Storytelling and pitching",
        ],
    },
    {
        icon: Users,
        category: "Teaching, Facilitation & Pedagogy",
        period: "2012–2022",
        items: [
            "Formal Pedagogical Training: Yes Green Maroc: Training in Educational Pedagogy (11/2021 – 12/2022), Digital Pedagogy & E-learning — Mohammed I University (11/2017 – 02/2018)",
            "International Academic Workshops: Train-the-Trainer for Bioinformatics Instructors (GOBLET–ELIXIR, CSC Finland), scRNA-seq Data Analysis Instructor Workshop",
            "Roundtable facilitation on social value systems (2012)",
        ],
    },
    {
        icon: Globe,
        category: "Languages & Cultural Learning",
        period: "2013–Present",
        items: [
            "Finnish Language Course — Taitotalo (10/2023 – Present)",
            "Finnish for Beginners — University of Helsinki (10/2021 – 05/2022)",
            "Spanish Language Course (B1) — Mohammed I University + University of Granada (11/2018 – 06/2019)",
            "Chinese (Mandarin) Level 1 — Confucius Center Tangier + Mohammed I University (11/2018 – 06/2019)",
            "English (B1/B2) — American Language Center (12/2013 – 06/2014)",
        ],
    },
    {
        icon: Shield,
        category: "Rescue, Community & Safety Certifications",
        period: "2014–2017",
        items: [
            "Rescuer Certification — Moroccan Red Cross (from 24/05/2014)",
            "Hygiene & Safety Certification — ICMUB France (05/2017 – 06/2017)",
            "Information Systems Security Awareness — ICMUB France (2017)",
            "Hands-on NMR Analysis (500 MHz) — ICMUB France (2017)",
        ],
    },
];

export function CertificationsSection() {
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
        <section id="certifications" className="relative py-24 md:py-32 bg-[#030303]">
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
                                Certifications
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificationCategories.map((category, index) => {
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
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-indigo-300" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-1">
                                                {category.category}
                                            </h3>
                                            <p className="text-white/60 text-xs mb-3">
                                                {category.period}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="text-white/80 text-sm leading-relaxed flex items-start gap-2"
                                            >
                                                <span className="text-indigo-300 mt-1.5 flex-shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
