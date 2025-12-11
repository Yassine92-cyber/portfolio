"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
    {
        id: 1,
        title: "Education & Scientific Foundations",
        subtitle: "BSc–PhD in Chemistry | Morocco | 2010–2020",
        content: (
            <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Built a deep foundation in organic, medicinal & computational chemistry.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Completed BSc, MSc & PhD while publishing peer-reviewed research.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Learned to turn complex problems into clear, structured solutions.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 2,
        title: "Entrepreneurship & Teaching",
        subtitle: "Author, Trainer & Co-founder | Morocco | 2012–2018",
        content: (
            <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Co-founded Everest Center and launched programs for 90+ students.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Trained 600+ students & professionals and published my first book.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Discovered I love designing learning experiences and practical tools.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 3,
        title: "Volunteering & Integration in Finland",
        subtitle: "Bridge Builder | Helsinki, Finland | 2022–2024",
        content: (
            <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Combined night shifts with daily networking, events and community building.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Volunteered at Slush, Junction, Arctic15 & more while mentoring peers.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Built 14K+ LinkedIn connections and launched Career Boost Network.</span>
                </li>
            </ul>
        ),
    },
    {
        id: 4,
        title: "Certifications & Builder of Opportunities",
        subtitle: "Peer Support & Opportunity Design | Helsinki, Finland | 2024–Present",
        content: (
            <ul className="space-y-3 text-white/80 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Completed peer-support & leadership trainings (MIELI, ADHD-liitto, FRC, McKinsey, IBM, AZ-900).</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Built AI tools, GitHub projects & Cursor workflows to support international talents.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0" />
                    <span>Help people move from uncertainty to clarity through content, mentoring and systems.</span>
                </li>
            </ul>
        ),
    },
];

export function MyJourneySummarySection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const sectionRef = useRef<HTMLElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            handleNext();
        } else if (e.key === "ArrowLeft") {
            handlePrev();
        }
    };

    const handleNext = () => {
        if (activeIndex < milestones.length - 1) {
            setDirection(1);
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setDirection(-1);
            setActiveIndex((prev) => prev - 1);
        }
    };

    const handleSelect = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <section 
            id="my-journey" 
            className="relative py-16 md:py-24 bg-[#030303] overflow-hidden"
            aria-label="My Journey Timeline"
            ref={sectionRef}
            onKeyDown={handleKeyDown}
        >
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                My Journey
                            </span>
                        </h2>
                        <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            My path has never been linear. It has always been a collection of dots that eventually connected.
                        </p>
                    </motion.div>

                    {/* Timeline Component */}
                    <div className="flex flex-col md:gap-12">
                        {/* Desktop Timeline Rail */}
                        <div className="hidden md:flex flex-col items-center w-full px-4 mb-8">
                            <div className="relative w-full max-w-3xl flex items-center justify-between">
                                {/* Rail Background */}
                                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-white/10 -translate-y-1/2 rounded-full" />
                                
                                {/* Active Progress Rail */}
                                <motion.div 
                                    className="absolute left-0 top-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-rose-500 -translate-y-1/2 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />

                                {/* Nodes */}
                                {milestones.map((milestone, index) => {
                                    const isActive = index === activeIndex;
                                    const isCompleted = index < activeIndex;

                                    return (
                                        <motion.button
                                            key={milestone.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            onClick={() => handleSelect(index)}
                                            className="relative z-10 focus:outline-none group"
                                            aria-label={`Go to ${milestone.title}`}
                                            aria-current={isActive ? "step" : undefined}
                                        >
                                            <div className="relative flex items-center justify-center">
                                                {/* Outer Glow for Active */}
                                                {isActive && (
                                                    <motion.div 
                                                        layoutId="activeGlow"
                                                        className="absolute -inset-3 bg-indigo-500/20 rounded-full blur-md"
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                                
                                                {/* Node Circle */}
                                                <motion.div 
                                                    className={cn(
                                                        "w-4 h-4 rounded-full border-2 transition-all duration-300",
                                                        isActive 
                                                            ? "bg-[#030303] border-indigo-400 scale-125 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                                                            : isCompleted 
                                                                ? "bg-indigo-500 border-indigo-500"
                                                                : "bg-[#030303] border-white/20 group-hover:border-white/50"
                                                    )}
                                                />
                                            </div>
                                            
                                            {/* Label */}
                                            <div className={cn(
                                                "absolute top-8 left-1/2 -translate-x-1/2 w-32 text-center text-xs font-medium transition-all duration-300",
                                                isActive ? "text-indigo-300 opacity-100 translate-y-0" : "text-white/40 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                                            )}>
                                                {milestone.subtitle}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Vertical Timeline */}
                        <div className="md:hidden flex flex-col gap-2 mb-8 relative pl-4">
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/10" />
                            {milestones.map((milestone, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={milestone.id}
                                        onClick={() => handleSelect(index)}
                                        className={cn(
                                            "flex items-center gap-4 p-3 rounded-lg text-left transition-all relative z-10",
                                            isActive ? "bg-white/5" : "hover:bg-white/[0.02]"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-3 h-3 rounded-full border-2 flex-shrink-0 transition-colors",
                                            isActive ? "bg-indigo-500 border-indigo-500" : "bg-[#030303] border-white/30"
                                        )} />
                                        <span className={cn(
                                            "text-sm font-medium transition-colors",
                                            isActive ? "text-white" : "text-white/60"
                                        )}>
                                            {milestone.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Area */}
                        <div className="relative min-h-[300px] flex items-center">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    initial={{ opacity: 0, x: direction * 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction * -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-full"
                                >
                                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                                        
                                        <div className="relative z-10">
                                            <div className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-3">
                                                {milestones[activeIndex].subtitle}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                                {milestones[activeIndex].title}
                                            </h3>
                                            <div className="text-white/80">
                                                {milestones[activeIndex].content}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-between mt-8">
                            <button
                                onClick={handlePrev}
                                disabled={activeIndex === 0}
                                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors group"
                            >
                                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Previous
                            </button>

                            <Link
                                href="/my-journey"
                                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/10"
                            >
                                Read the full journey
                                <ChevronRight className="w-4 h-4" />
                            </Link>

                            <button
                                onClick={handleNext}
                                disabled={activeIndex === milestones.length - 1}
                                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors group"
                            >
                                Next
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Mobile CTA */}
                        <div className="md:hidden mt-8 text-center">
                            <Link
                                href="/my-journey"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/10 w-full justify-center"
                            >
                                Read the full journey
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
