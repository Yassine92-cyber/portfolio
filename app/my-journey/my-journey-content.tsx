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
            "Standardized requests and rerouted shipments, reducing turnaround time from ~90 days to 14–21 days",
            "Onboarded 6 newcomers via orientation and buddy system, enabling independence in ≤5 days.",
            "Delivered 12 talks/posters and moderated 17 sessions at ICMES 2020, fostering 2 new collaborations."
        ]
    }
];
