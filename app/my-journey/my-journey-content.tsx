"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
    Sparkles, Calendar, ChevronRight, ChevronDown, Star, Award, Briefcase, 
    GraduationCap, Zap, BookOpen, Users, ArrowRight, ArrowLeft, 
    Lightbulb, Heart, Globe, MessageCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

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
            "Built 3 GitHub chemistry projects and two custom GPTs: VentureLens and PromptCraft.",
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
            "Delivered Hope Makers program to 92 students, converting to 152 paid enrollments.",
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

// --- Main Component ---

export function MyJourneyPageContent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Progress Bar Animation
    const { scrollXProgress } = useScroll({
        container: scrollContainerRef,
    });
    
    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollToMilestone = (index: number) => {
        setActiveIndex(index);
        const container = scrollContainerRef.current;
        if (container) {
            const cardWidth = container.offsetWidth < 768 ? container.offsetWidth - 32 : 600; 
            const gap = 32; // md:gap-8 is 32px
            const targetScroll = index * (cardWidth + gap);
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Sync active index with scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const width = container.offsetWidth < 768 ? container.offsetWidth - 32 : 600;
            const gap = 32;
            const index = Math.round(scrollLeft / (width + gap));
            if (index >= 0 && index < milestones.length) {
                // setActiveIndex(index); 
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative py-12 md:py-16 pt-32 md:pt-40 min-h-screen bg-[#030303] overflow-hidden flex flex-col">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex-shrink-0 mb-8">
                <Breadcrumbs items={[{ label: "My Journey" }]} />
                <div className="text-center max-w-4xl mx-auto mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                            My Journey
                        </span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                        From scientific researcher to ecosystem bridge builder. 
                        <br className="hidden md:block"/>
                        A path defined by curiosity, resilience, and connecting dots.
                    </p>
                </div>
            </div>

            {/* 1. Horizontal Timeline Rail (Desktop) */}
            <div className="container mx-auto px-4 md:px-6 mb-8 hidden md:block">
                <div className="relative pt-8 pb-4">
                    {/* Rail Line */}
                    <div className="absolute top-[calc(2rem+8px)] left-0 right-0 h-0.5 bg-white/10" />
                    <motion.div 
                        className="absolute top-[calc(2rem+8px)] left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 origin-left"
                        style={{ scaleX }}
                    />
                    
                    {/* Interactive Nodes */}
                    <div className="relative flex justify-between px-2">
                        {milestones.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToMilestone(index)}
                                className={cn(
                                    "relative group focus:outline-none transition-all duration-300 flex flex-col items-center gap-3",
                                    activeIndex === index ? "z-10" : "z-0"
                                )}
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 bg-[#030303]",
                                    activeIndex === index 
                                        ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] scale-125" 
                                        : "border-white/30 group-hover:border-white/60"
                                )} />
                                <span className={cn(
                                    "text-xs font-medium whitespace-nowrap transition-colors duration-300 font-mono",
                                    activeIndex === index ? "text-indigo-300" : "text-white/30 group-hover:text-white/60"
                                )}>
                                    {item.period.split('–')[0].split('-')[0].trim()}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Horizontal Cards (The Journey) */}
            <div className="relative flex-1 flex flex-col justify-center w-full min-h-[550px]">
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 md:px-[calc(50vw-300px)] gap-6 md:gap-8 py-4 items-start h-full"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {milestones.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div 
                                key={index} 
                                className="snap-center flex-shrink-0 w-full md:w-[600px] perspective-1000"
                                onClick={() => setActiveIndex(index)}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={cn(
                                        "h-full min-h-[500px] rounded-3xl border transition-all duration-500 overflow-hidden relative group bg-[#0a0a0a]/80 backdrop-blur-xl flex flex-col",
                                        isActive
                                            ? "border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.15)] opacity-100" 
                                            : "border-white/10 opacity-50 scale-95 hover:opacity-70 hover:scale-[0.97]"
                                    )}
                                >
                                    {/* Card Gradient */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-[0.08]",
                                        item.color
                                    )} />

                                    {/* Content Container */}
                                    <div className="relative p-6 md:p-8 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg flex-shrink-0 text-white",
                                                item.color
                                            )}>
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className="text-xs font-bold tracking-wider uppercase text-white/60 bg-white/10 px-2 py-1 rounded">
                                                        {item.period}
                                                    </span>
                                                    <span className="text-xs text-white/40 flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {item.location}
                                                    </span>
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                                                    {item.title}
                                                </h2>
                                                <p className="text-indigo-300 font-medium text-sm">
                                                    {item.roleType}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Core Identity Badge */}
                                        <div className="mb-6">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10">
                                                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                                                <span className="text-sm text-indigo-200 font-medium">
                                                    Identity: {item.coreIdentity}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Summary (if exists) */}
                                        {item.summary && (
                                            <p className="text-white/80 text-sm mb-5 italic border-l-2 border-indigo-500/50 pl-4 py-1">
                                                {item.summary}
                                            </p>
                                        )}

                                        {/* Bullet Points */}
                                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
                                            {item.details.map((detail, i) => (
                                                <div key={i} className="flex items-start gap-3 group/item">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                                    <p className="text-sm text-white/70 leading-relaxed group-hover/item:text-white/90 transition-colors">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 3. Supporting Sections Grid */}
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-6xl">
                
                {/* 3a. Education & Teaching */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <SupportingSection title="Education" icon={GraduationCap}>
                        <div className="space-y-4">
                            <Card title="Ph.D. in Organic, Medicinal & Computational Chemistry" subtitle="Mohammed I University" date="2016 – 2020">
                                <p className="text-sm text-white/60 mt-2">Thesis: Synthesis, biological evaluation, and in silico modeling of N-Alkylated heterocyclic compounds as multi-target drug candidates.</p>
                            </Card>
                            <Card title="M.Sc. in Chemistry" subtitle="Chouaib Doukkali University" date="2014 – 2016" />
                            <Card title="B.Sc. in Organic Chemistry" subtitle="Mohammed I University" date="2010 – 2014" />
                        </div>
                    </SupportingSection>

                    <SupportingSection title="Teaching & Instruction" icon={BookOpen}>
                        <div className="space-y-4">
                            <Card title="Teaching Assistant" subtitle="Mohammed I University" date="2018 – 2020">
                                <p className="text-sm text-white/60 mt-2">Led practical General Chemistry courses for bachelor's students.</p>
                            </Card>
                            <Card title="MSc/PhD Instructor" subtitle="Mohammed I University" date="2016 – 2020">
                                <p className="text-sm text-white/60 mt-2">Trained 4 Master’s students and onboarded numerous PhD candidates.</p>
                            </Card>
                            <Card title="MOOC Instructor" subtitle="Mohammed First University" date="2017 – 2018">
                                <p className="text-sm text-white/60 mt-2">Developed an online course: “Major classes of organic reactions”.</p>
                            </Card>
                        </div>
                    </SupportingSection>
                </div>

                {/* 3b. Skills (Visual Chips) */}
                <div className="mb-24">
                    <SupportingSection title="Skills & Competencies" icon={Zap}>
                        <div className="grid gap-8 md:grid-cols-2">
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
                </div>

                {/* 3c. Dense Lists (Accordions) */}
                <div className="grid gap-12 mb-24">
                    <SupportingSection title="Certifications" icon={Award}>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { y: "2026", t: "Adv. Peer Support: Legal System", o: "Finnish Refugee Council" },
                                { y: "2025", t: "Peer Support Facilitation", o: "ADHD-Liitto" },
                                { y: "2025", t: "Promoting Antiracism", o: "MIELI ry" },
                                { y: "2025", t: "Peer Support Training", o: "Finnish Refugee Council" },
                                { y: "2025", t: "Customer Success Foundations", o: "ChurnZero" },
                                { y: "2025", t: "Public Speaking Skills", o: "Toastmasters" },
                                { y: "2024", t: "McKinsey Forward Program", o: "McKinsey & Company" },
                                { y: "2024", t: "Design Thinking Practitioner", o: "IBM" },
                                { y: "2022", t: "Azure Fundamentals (AZ-900)", o: "Microsoft" },
                            ].map((c, i) => (
                                <div key={i} className="flex flex-col p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors">
                                    <span className="text-xs font-mono text-indigo-400 mb-1">{c.y}</span>
                                    <span className="font-medium text-white text-sm leading-tight mb-1">{c.t}</span>
                                    <span className="text-xs text-white/40">{c.o}</span>
                                </div>
                            ))}
                        </div>
                    </SupportingSection>

                    <SupportingSection title="Volunteering Experience" icon={Heart}>
                        <div className="space-y-2">
                            {[
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
                            ].map((vol, i) => (
                                <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/[0.03] border-b border-white/[0.05] last:border-0 transition-colors group">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <span className="text-white font-medium text-sm">{vol.role}</span>
                                        <span className="hidden sm:block text-white/20">•</span>
                                        <span className="text-white/50 text-sm">{vol.org}</span>
                                    </div>
                                    <span className="text-xs font-mono text-white/30 group-hover:text-indigo-300 transition-colors">{vol.date}</span>
                                </div>
                            ))}
                        </div>
                    </SupportingSection>
                </div>

                {/* 3d. Other (Awards, Courses, Languages) */}
                <div className="grid gap-8 md:grid-cols-2">
                    <SupportingSection title="Awards" icon={Star}>
                        <Card title="1st Prize – Innovation" subtitle="Innovation City, Fez" date="2019">
                            <p className="text-sm text-white/70 mt-2">National Prize: Incubator acceptance + €1,000 (medical image watermarking).</p>
                        </Card>
                    </SupportingSection>

                    <SupportingSection title="Languages" icon={Globe}>
                        <div className="space-y-3">
                            <LanguageRow lang="English" level="Professional fluency" desc="Research, business, pitching" />
                            <LanguageRow lang="French" level="Professional fluency" desc="Business, academic contexts" />
                            <LanguageRow lang="Finnish" level="A2-B1" desc="Beginner speaking, good understanding" />
                            <LanguageRow lang="Arabic" level="Native" desc="Professional outreach, MENA markets" />
                        </div>
                    </SupportingSection>
                </div>

                {/* Other Courses Accordion */}
                <div className="mt-12">
                    <ExpandableSection title="Other Courses" icon={BookOpen} count={11}>
                        <ul className="grid gap-x-8 gap-y-2 md:grid-cols-2">
                            {[
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
                            ].map((c, i) => (
                                <li key={i} className="text-sm text-white/60 py-2 border-b border-white/[0.05] last:border-0">
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </ExpandableSection>
                </div>

            </div>
        </section>
    );
}

// --- Subcomponents ---

function SupportingSection({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/5 text-indigo-400">
                    <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    );
}

function Card({ title, subtitle, date, children }: { title: string, subtitle?: string, date: string, children?: React.ReactNode }) {
    return (
        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-indigo-500/30 transition-colors group">
            <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-white text-base group-hover:text-indigo-200 transition-colors">{title}</h4>
                <span className="text-xs font-mono text-white/30 whitespace-nowrap ml-4">{date}</span>
            </div>
            {subtitle && <p className="text-sm text-indigo-400/80 mb-1">{subtitle}</p>}
            {children}
        </div>
    );
}

function SkillGroup({ category, skills }: { category: string, skills: string[] }) {
    return (
        <div>
            <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">{category}</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.05] text-sm text-white/80 hover:bg-white/[0.1] hover:text-white transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function LanguageRow({ lang, level, desc }: { lang: string, level: string, desc: string }) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="flex flex-col">
                <span className="font-semibold text-white text-sm">{lang}</span>
                <span className="text-xs text-white/40">{desc}</span>
            </div>
            <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-300 text-xs font-medium">
                {level}
            </span>
        </div>
    );
}

function ExpandableSection({ title, icon: Icon, children, count }: { title: string, icon: any, children: React.ReactNode, count?: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    {count && <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-white/60">{count}</span>}
                </div>
                <ChevronDown className={cn("w-5 h-5 text-white/40 transition-transform", isOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 border-t border-white/5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
