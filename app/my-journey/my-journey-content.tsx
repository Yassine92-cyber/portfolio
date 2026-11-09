"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, Star, Award, Briefcase, GraduationCap, BookOpen, Users,
    Lightbulb, Globe, MessageCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { orinavis } from "@/lib/portfolio-data";

// --- Data: Source of Truth ---

const milestones = [
    {
        id: "builder-opportunities",
        title: "Builder of Opportunities : Systems for International Talents",
        roleType: "Career Break",
        location: "Helsinki, Finland",
        period: "01.2025 - Present",
        icon: Lightbulb,
        color: "from-rose-500 to-pink-500",
        coreIdentity: "Builder of Opportunity Systems",
        details: [
            "Completed peer-support trainings with MIELI, ADHD-liitto & Finnish Refugee Council, plus advanced trainings on the Finnish Legal system and social skills.",
            "Invited speaker at Course Connect (Haaga-Helia) and Familia ry; regular guest at Career Club (City of Espoo).",
            "Built 3 GitHub chemistry projects and custom GPTs including VentureLens and PromptCraft.",
            "Designed and deployed a portfolio website using vibe-coded Cursor workflows.",
            "Actively supporting jobseekers and idea-builders on LinkedIn.",
            "Completed 10+ projects using Cursor for job search clarity while upskilling in AI and automation.",
            "Creating LinkedIn content on resilience, AI workflows, SDR prospecting, and strategic networking to help international talents find opportunity."
        ]
    },
    {
        id: "business-development",
        title: "Business Development Manager",
        roleType: "Yellow Method Oy",
        location: "Helsinki, Finland",
        period: "03.2024 – 12.2024",
        icon: Briefcase,
        color: "from-pink-500 to-purple-500",
        summary: "Yellow Method is a research-based platform assessing organizational innovation readiness.",
        coreIdentity: "Strategist & Business Builder",
        details: [
            "Researched 250+ companies and 600+ contacts; secured 11 B2B meetings.",
            "Built an investor list of 27 VCs; validated 10 as interesting and 14 as high-potential.",
            "Delivered company briefs, meeting memos, and cold-call scripts to improve booking rates.",
            "Optimized HubSpot funnel visibility and produced concise leadership updates.",
            "Managed Webflow/Typeform edits and generated Google Analytics reports.",
            "Explored GPT workflows and created handover documentation for repeatability.",
            "Expanded LinkedIn presence and audience reach."
        ]
    },
    {
        id: "bridge-builder",
        title: "Bridge Builder : Upskilling & Integration",
        roleType: "Career Break",
        location: "Helsinki, Finland",
        period: "02.2022 – 03.2024",
        icon: Users,
        color: "from-purple-500 to-indigo-500",
        coreIdentity: "Community Builder & Lifelong Learner",
        details: [
            "Worked night shifts at Posti (00:00–05:30) while networking daily at events.",
            "Grew LinkedIn network to 14K+ connections through active participation (Maria01, Espoo Talent Hub, The Shortcut).",
            "Launched Career Boost Network (191 members) and hosted 2 webinars on job strategy.",
            "Volunteered at Slush, Junction, Arctic15, EntryPoint, Think Africa, and Espoo Career Club.",
            "Earned certifications in Azure Fundamentals, Design Thinking, Leadership, Public Speaking, and Train-the-Trainer.",
            "Completed Finnish Integration Program at Taitotalo and all Duolingo Finnish units.",
            "Selected as a mentee in the EntryPoint Program (City of Espoo) and Integrify.",
            "Upskilled in Tech, Entrepreneurship, Bioinformatics, and Carbon Removal (Azure, Cloud, Data Science)."
        ]
    },
    {
        id: "postdoc",
        title: "Postdoctoral Researcher",
        roleType: "University of Helsinki",
        location: "Helsinki, Finland",
        period: "06.2021 – 02.2022",
        icon: GraduationCap,
        color: "from-indigo-500 to-blue-500",
        coreIdentity: "Scientific Researcher (Marie Curie Fellow)",
        details: [
            "Contributed to adaptive drug-vector nanostructures; secured €22k grant under VAHVISTUS.",
            "Synthesized and purified modified polyamines.",
            "Collaborated within a cross-disciplinary team and documented research protocols."
        ]
    },
    {
        id: "phd",
        title: "Doctoral Researcher (Ph.D.)",
        roleType: "Mohammed I University",
        location: "Oujda, Morocco",
        period: "12.2016 – 11.2020",
        icon: Award,
        color: "from-blue-500 to-cyan-500",
        coreIdentity: "Research Coordinator & Scientist",
        details: [
            "Published 10 peer-reviewed articles during PhD (+3 during MSc); graduated with H-index 9.",
            "Coordinated 8 labs across 7 institutions and 4 countries.",
            "Standardized requests and rerouted shipments, reducing turnaround time from ~90 days to 14–21 days.",
            "Onboarded 6 newcomers via orientation and buddy system, enabling independence in ≤5 days.",
            "Delivered 12 talks/posters and moderated 17 sessions at ICMES 2020, fostering 2 new collaborations."
        ]
    },
    {
        id: "aiesec",
        title: "Project Manager & Team Leader",
        roleType: "AIESEC",
        location: "Oujda, Morocco",
        period: "09.2017 – 11.2018",
        icon: Globe,
        color: "from-cyan-500 to-teal-500",
        coreIdentity: "Global Connector & Leader",
        details: [
            "Managed international relations to secure placements for outgoing participants.",
            "Coordinated 11 participants (Romania, China, Tunisia, UK, Egypt) for the Discover the Eastern Region project.",
            "Achieved record approvals in a two-hour hackathon.",
            "Persuaded 2 participants from China to choose our local Marketing project over competing offers in Malaysia."
        ]
    },
    {
        id: "everest",
        title: "Co-founder & COO",
        roleType: "Everest Center",
        location: "Oujda, Morocco",
        period: "05.2013 – 06.2014",
        icon: Star,
        color: "from-teal-500 to-emerald-500",
        coreIdentity: "Entrepreneur & Operator",
        details: [
            "Launched operations end-to-end, achieving +60% revenue in 6 months.",
            "Delivered Hope Makers program to 92 students.",
            "Managed marketing, partner communications, and event logistics."
        ]
    },
    {
        id: "author",
        title: "Author – Breeze and Dust",
        roleType: "Independent",
        location: "Morocco",
        period: "09.2012 – 06.2013",
        icon: BookOpen,
        color: "from-emerald-500 to-green-500",
        coreIdentity: "Author & Creator",
        details: [
            "Self-funded publication using a €130 scholarship.",
            "Printed 250 copies and sold out in 9 months via events, direct sales, and library partners."
        ]
    },
    {
        id: "trainer",
        title: "Professional Trainer",
        roleType: "Freelance",
        location: "Morocco",
        period: "04.2012 – 10.2020",
        icon: MessageCircle,
        color: "from-green-500 to-lime-500",
        coreIdentity: "Educator & Facilitator",
        details: [
            "Trained 600+ students/professionals across four cities.",
            "Delivered workshops for 120+ participants."
        ]
    }
];

const certifications = [
                                { y: "2026", t: "Adv. Peer Support: Legal System", o: "Finnish Refugee Council" },
                                { y: "2025", t: "Peer Support Facilitation", o: "ADHD-Liitto" },
                                { y: "2025", t: "Promoting Antiracism", o: "MIELI ry" },
                                { y: "2025", t: "Peer Support Training", o: "Finnish Refugee Council" },
                                { y: "2025", t: "Customer Success Foundations", o: "ChurnZero" },
                                { y: "2025", t: "Public Speaking Skills", o: "Toastmasters" },
                                { y: "2024", t: "McKinsey Forward Program", o: "McKinsey & Company" },
                                { y: "2024", t: "Design Thinking Practitioner", o: "IBM" },
                                { y: "2022", t: "Azure Fundamentals (AZ-900)", o: "Microsoft" },
];

const volunteering = [
                                { role: "Speaker at Course Connect", org: "Haaga Helia", date: "09.2025" },
                                { role: "Audio/visual Team", org: "Maria 01 Now Pitching", date: "06.2025" },
                                { role: "Mentor", org: "Think Africa ry", date: "2024 – 2025" },
                                { role: "Mentor", org: "Entry Point (Espoo)", date: "2024 - 2025" },
                                { role: "Regular Guest", org: "Career Club (Espoo)", date: "2024 - 2025" },
                                { role: "Review Editor", org: "Frontiers in Pharmacology", date: "2023 - Present" },
                                { role: "Sustainability Lead", org: "Slush", date: "2023" },
                                { role: "Head of Global Acquisition", org: "Junction", date: "2023" },
                                { role: "Matchmaker", org: "Arctic15", date: "2023" },
                                { role: "Committee Member", org: "ICMES2020", date: "2020" },
                                { role: "Project Manager", org: "AIESEC", date: "2017 – 2018" },
];

const otherCourses = [
                                "Training in Education Pedagogy (2021–2022)",
                                "E-learning and Digital Pedagogy (2017–2018)",
                                "Hands-on NMR Analysis (500MHz) (2017)",
                                "Hygiene & Safety, ISS Awareness (2017)",
                                "English Courses B1/B2 (2013–2014)",
                                "Certified Professional Trainer (EFSTC) (2016)",
                                "Club International SMS Network (2015–2016)",
                                "Rescuer Certified by Moroccan Red Cross (2014)",
                                "Hypnotherapy Practitioner (2013)",
                                "Trainer in Academic Excellence (2013)",
                                "Personal Strategic Planning Trainer (2012)"
];

const firstYear = (period: string) => period.match(/\d{4}/)?.[0] ?? period;

// --- Main Component ---

export function MyJourneyPageContent() {
    const [activeId, setActiveId] = useState(milestones[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: "-30% 0px -55% 0px" }
        );
        milestones.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
            <PageHeader
                crumb="About"
                eyebrow="About · My journey"
                title={
                    <>
                        From the lab bench <em className="font-display italic text-warm-300">to the founder&apos;s desk.</em>
                    </>
                }
                intro="From scientific researcher to ecosystem bridge builder, and now founder. A path defined by curiosity, resilience, and connecting dots."
            />

            <section aria-labelledby="now-title" className="py-14 md:py-20">
                <div className="grid gap-8 rounded-[2rem] border border-line bg-surface p-7 sm:p-10 md:grid-cols-12 md:items-center md:p-12">
                    <div className="md:col-span-8">
                        <p className="eyebrow flex items-center gap-3 text-warm-300">
                            <span className="h-2 w-2 rounded-full bg-warm-400" aria-hidden="true" />
                            Now
                        </p>
                        <h2 id="now-title" className="mt-4 text-display-md text-paper">
                            {orinavis.role}, {orinavis.name}
                        </h2>
                        <p className="mt-4 max-w-2xl text-lede text-paper/75">
                            {orinavis.tagline}. Everything below, from coordinating labs to building pipelines and
                            communities, is what I bring to it.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                        <ButtonLink href={orinavis.url}>Explore Orinavis</ButtonLink>
                        <ButtonLink href="/#orinavis" variant="secondary">
                            Why I founded it
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section aria-labelledby="timeline-title" className="border-t border-line pt-14 md:pt-20">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <p className="eyebrow mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-violet-400" aria-hidden="true" />
                                Timeline
                            </p>
                            <h2 id="timeline-title" className="text-display-md text-paper">
                                Experience
                            </h2>
                            <nav aria-label="Jump to a role" className="mt-8 hidden lg:block">
                                <ol className="border-l border-line">
                                    {milestones.map((item) => {
                                        const active = activeId === item.id;
                                        return (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    aria-current={active ? "location" : undefined}
                                                    className={cn(
                                                        "-ml-px flex gap-4 border-l py-2 pl-5 text-sm transition-colors",
                                                        active
                                                            ? "border-violet-400 text-paper"
                                                            : "border-transparent text-paper/60 hover:text-paper"
                                                    )}
                                                >
                                                    <span className="w-10 shrink-0 font-mono text-xs leading-5">{firstYear(item.period)}</span>
                                                    <span className="leading-5">
                                                        {item.roleType === "Career Break" ? item.title.split(":")[0].trim() : item.roleType}
                                                    </span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <ol className="lg:col-span-8">
                        {milestones.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li
                                    key={item.id}
                                    id={item.id}
                                    className="scroll-mt-28 border-b border-line py-10 first:pt-0 last:border-0"
                                >
                                    <motion.article
                                        data-reveal=""
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-paper/65">
                                            <span className="text-paper/90">{item.period}</span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                                                {item.location}
                                            </span>
                                        </div>
                                        <div className="mt-5 flex items-start gap-4">
                                            <span className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-violet-300 sm:flex">
                                                <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                                            </span>
                                            <div className="min-w-0">
                                                <h3 className="font-display text-display-sm text-paper">{item.title}</h3>
                                                <p className="mt-1 text-[0.9375rem] text-violet-200">{item.roleType}</p>
                                                <p className="eyebrow mt-4 text-paper/60">{item.coreIdentity}</p>
                                            </div>
                                        </div>
                                        {item.summary && (
                                            <p className="mt-6 border-l-2 border-warm-400/60 pl-4 italic text-paper/80 sm:ml-14">
                                                {item.summary}
                                            </p>
                                        )}
                                        <ul className="mt-6 space-y-3 sm:ml-14">
                                            {item.details.map((detail) => (
                                                <li key={detail} className="flex gap-3 leading-relaxed text-paper/75">
                                                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-violet-400" aria-hidden="true" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.article>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            <div className="mt-20 grid gap-16 border-t border-line pt-16 md:mt-24 md:pt-24">
                <div className="grid gap-16 md:grid-cols-2 md:gap-12">
                    <SupportingSection title="Education">
                        <div className="divide-y divide-line">
                            <Card title="Ph.D. in Organic, Medicinal & Computational Chemistry" subtitle="Mohammed I University" date="2016 – 2020">
                                <p className="mt-2 text-sm leading-relaxed text-paper/70">Thesis: Synthesis, biological evaluation, and in silico modeling of N-Alkylated heterocyclic compounds as multi-target drug candidates.</p>
                            </Card>
                            <Card title="M.Sc. in Chemistry" subtitle="Chouaib Doukkali University" date="2014 – 2016" />
                            <Card title="B.Sc. in Organic Chemistry" subtitle="Mohammed I University" date="2010 – 2014" />
                        </div>
                    </SupportingSection>

                    <SupportingSection title="Teaching & Instruction">
                        <div className="divide-y divide-line">
                            <Card title="Teaching Assistant" subtitle="Mohammed I University" date="2018 – 2020">
                                <p className="mt-2 text-sm leading-relaxed text-paper/70">Led practical General Chemistry courses for bachelor&apos;s students.</p>
                            </Card>
                            <Card title="MSc/PhD Instructor" subtitle="Mohammed I University" date="2016 – 2020">
                                <p className="mt-2 text-sm leading-relaxed text-paper/70">Trained 4 Master’s students and onboarded numerous PhD candidates.</p>
                            </Card>
                            <Card title="MOOC Instructor" subtitle="Mohammed First University" date="2017 – 2018">
                                <p className="mt-2 text-sm leading-relaxed text-paper/70">Developed an online course: “Major classes of organic reactions”.</p>
                            </Card>
                        </div>
                    </SupportingSection>
                </div>

                <SupportingSection title="Skills & Competencies">
                    <div className="grid gap-10 md:grid-cols-2">
                        <SkillGroup category="Scientific & Technical" skills={[
                            "Organic/Synthetic Chemistry", "Computational Chemistry", "Corrosion Science",
                            "Bioinformatics", "Molecular Modeling", "DFT", "Data Analysis"
                        ]} />
                        <SkillGroup category="Business & Commercialization" skills={[
                            "Market Research", "Competitive Analysis", "Business Model Design",
                            "GTM Strategy", "User Validation", "Fundraising Pipeline", "IP Awareness"
                        ]} />
                        <SkillGroup category="Startup Methods" skills={[
                            "Lean Startup", "Value Proposition Canvas", "ICP Definition",
                            "Pitch Decks", "TAM/SAM/SOM", "Pricing Models"
                        ]} />
                        <SkillGroup category="Tools & Tech" skills={[
                            "HubSpot", "LinkedIn", "Notion", "Miro", "Webflow", "Google Analytics",
                            "Cursor", "ChatGPT", "Python (Basics)", "Azure"
                        ]} />
                    </div>
                </SupportingSection>

                <SupportingSection title="Certifications">
                    <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                        {certifications.map((c) => (
                            <li key={c.t} className="flex flex-col bg-ink p-5">
                                <span className="font-mono text-xs text-violet-300">{c.y}</span>
                                <span className="mt-2 font-medium leading-snug text-paper">{c.t}</span>
                                <span className="mt-1 text-sm text-paper/65">{c.o}</span>
                            </li>
                        ))}
                    </ul>
                </SupportingSection>

                <SupportingSection title="Volunteering Experience">
                    <ul className="border-t border-line">
                        {volunteering.map((vol) => (
                            <li key={`${vol.role}-${vol.org}`} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                                <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                                    <span className="font-medium text-paper">{vol.role}</span>
                                    <span className="text-[0.9375rem] text-paper/65">{vol.org}</span>
                                </span>
                                <span className="shrink-0 font-mono text-xs text-paper/60">{vol.date}</span>
                            </li>
                        ))}
                    </ul>
                </SupportingSection>

                <div className="grid gap-16 md:grid-cols-2 md:gap-12">
                    <SupportingSection title="Awards">
                        <Card title="1st Prize – Innovation" subtitle="Innovation City, Fez" date="2019">
                            <p className="mt-2 text-sm leading-relaxed text-paper/70">National Prize: Incubator acceptance + €1,000 (medical image watermarking).</p>
                        </Card>
                    </SupportingSection>

                    <SupportingSection title="Languages">
                        <dl className="divide-y divide-line">
                            <LanguageRow lang="English" level="Professional fluency" desc="Research, business, pitching" />
                            <LanguageRow lang="French" level="Professional fluency" desc="Business, academic contexts" />
                            <LanguageRow lang="Finnish" level="A2-B1" desc="Beginner speaking, good understanding" />
                            <LanguageRow lang="Arabic" level="Native" desc="Professional outreach, MENA markets" />
                        </dl>
                    </SupportingSection>
                </div>

                <ExpandableSection title="Other Courses" count={otherCourses.length}>
                    <ul className="grid gap-x-10 md:grid-cols-2">
                        {otherCourses.map((c) => (
                            <li key={c} className="border-b border-line py-3 text-[0.9375rem] text-paper/75">
                                {c}
                            </li>
                        ))}
                    </ul>
                </ExpandableSection>
            </div>
        </div>
    );
}

// --- Subcomponents ---

function SupportingSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section className="flex h-full flex-col">
            <h2 className="mb-6 font-display text-display-sm text-paper">{title}</h2>
            <div className="flex-1">{children}</div>
        </section>
    );
}

function Card({ title, subtitle, date, children }: { title: string, subtitle?: string, date: string, children?: React.ReactNode }) {
    return (
        <div className="py-5 first:pt-0">
            <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium text-paper">{title}</h3>
                <span className="whitespace-nowrap font-mono text-xs text-paper/60">{date}</span>
            </div>
            {subtitle && <p className="mt-1 text-sm text-violet-200">{subtitle}</p>}
            {children}
        </div>
    );
}

function SkillGroup({ category, skills }: { category: string, skills: string[] }) {
    return (
        <div>
            <h3 className="eyebrow mb-4 text-paper/65">{category}</h3>
            <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-paper/15 px-3.5 py-1.5 text-sm text-paper/85">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function LanguageRow({ lang, level, desc }: { lang: string, level: string, desc: string }) {
    return (
        <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
            <div>
                <dt className="font-medium text-paper">{lang}</dt>
                <dd className="text-sm text-paper/65">{desc}</dd>
            </div>
            <dd className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-200">{level}</dd>
        </div>
    );
}

function ExpandableSection({ title, children, count }: { title: string, children: React.ReactNode, count?: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="overflow-hidden rounded-3xl border border-line">
            <h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="other-courses-panel"
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-paper/[0.02] md:p-8"
                >
                    <span className="flex items-center gap-3">
                        <span className="font-display text-display-sm text-paper">{title}</span>
                        {count && <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-paper/70">{count}</span>}
                    </span>
                    <ChevronDown className={cn("h-5 w-5 text-paper/60 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                </button>
            </h2>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id="other-courses-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="border-t border-line px-6 pb-6 md:px-8 md:pb-8">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
