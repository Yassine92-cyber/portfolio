"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
    return (
        <section id="portfolio" className="relative py-16 md:py-24 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Compact Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold text-white mb-2"
                        >
                            Selected Work
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 text-sm md:text-base max-w-md"
                        >
                            Recent projects and community contributions.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link 
                            href="/portfolio"
                            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors group"
                        >
                            View all work
                            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Compact List */}
                <div className="flex flex-col">
                    {projects.slice(0, 3).map((project, index) => (
                        <ProjectRow key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border-b border-white/5 last:border-0"
        >
            <div 
                className={cn(
                    "py-6 transition-colors duration-300 cursor-pointer",
                    isExpanded ? "bg-white/[0.02] -mx-4 px-4 rounded-xl border border-white/5 my-2" : "hover:bg-white/[0.01]"
                )}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-grow">
                        <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                                {project.title}
                            </h3>
                            <span className="text-xs text-indigo-400 font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                {project.role}
                            </span>
                        </div>
                        <p className="text-xs text-white/40 mb-2 font-mono">
                            {project.context}
                        </p>
                        
                        {/* Clamped Description / Expanded Content */}
                        <div className="relative">
                            <AnimatePresence initial={false} mode="wait">
                                {isExpanded ? (
                                    <motion.div
                                        key="expanded"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm text-white/70 leading-relaxed overflow-hidden"
                                    >
                                        <p className="mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <a 
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-white font-medium bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Open Project <ArrowUpRight className="w-3 h-3" />
                                            </a>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        key="collapsed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-sm text-white/60 line-clamp-2 leading-relaxed max-w-2xl"
                                    >
                                        {project.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0 pt-1">
                        <button 
                            className="text-white/20 group-hover:text-white/60 transition-colors p-1"
                            aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Tags (Collapsed only) */}
                {!isExpanded && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="flex flex-wrap gap-2 mt-3 md:hidden"
                    >
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-white/40 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

