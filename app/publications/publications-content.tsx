"use client";

import { Navigation } from "@/components/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import toast from "react-hot-toast";
import { PublicationsFilters } from "@/components/sections/publications-filters";
import { publications } from "@/lib/publications-data";

export function PublicationsPageContent() {
    const [authorFilter, setAuthorFilter] = useState<"all" | "first" | "co">("all");
    const [fieldFilter, setFieldFilter] = useState<string>("all");
    const [yearFilter, setYearFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    // Get unique fields and years
    const fields = useMemo(() => {
        const uniqueFields = Array.from(new Set(publications.map(p => p.field))).sort();
        return uniqueFields;
    }, []);

    const years = useMemo(() => {
        const uniqueYears = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => parseInt(b) - parseInt(a));
        return uniqueYears;
    }, []);

    // Filter publications
    const filteredPublications = useMemo(() => {
        return publications.filter(pub => {
            // Author filter
            if (authorFilter === "first" && !pub.firstAuthor) return false;
            if (authorFilter === "co" && pub.firstAuthor) return false;

            // Field filter
            if (fieldFilter !== "all" && pub.field !== fieldFilter) return false;

            // Year filter
            if (yearFilter !== "all" && pub.year !== yearFilter) return false;

            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchTitle = pub.title.toLowerCase().includes(query);
                const matchJournal = pub.journal.toLowerCase().includes(query);
                return matchTitle || matchJournal;
            }

            return true;
        });
    }, [authorFilter, fieldFilter, yearFilter, searchQuery]);

    // Sort filtered publications by year (newest first), then by citations
    const sortedPublications = useMemo(() => {
        return [...filteredPublications].sort((a, b) => {
            if (b.year !== a.year) {
                return parseInt(b.year) - parseInt(a.year);
            }
            return b.citations - a.citations;
        });
    }, [filteredPublications]);

    const totalCitations = useMemo(() => {
        return sortedPublications.reduce((sum, pub) => sum + pub.citations, 0);
    }, [sortedPublications]);

    const hasActiveFilters = authorFilter !== "all" || fieldFilter !== "all" || yearFilter !== "all" || searchQuery !== "";

    const clearFilters = () => {
        setAuthorFilter("all");
        setFieldFilter("all");
        setYearFilter("all");
        setSearchQuery("");
        toast.success("Filters cleared", {
            icon: "✨",
            style: {
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
            }
        });
    };

    return (
        <section className="relative py-12 md:py-16 pt-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumbs items={[{ label: "Publications" }]} />
                    
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 md:mb-16"
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                        Publications
                                    </span>
                                </h1>
                                <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                                    Research papers, articles, and academic contributions
                                </p>
                            </div>
                            <div className="hidden md:block text-right">
                                <div className="text-3xl font-bold text-white">
                                    {totalCitations}
                                </div>
                                <div className="text-sm text-white/40 uppercase tracking-wider font-medium">
                                    Total Citations
                                </div>
                            </div>
                        </div>

                        {/* Mobile Stats */}
                        <div className="md:hidden flex items-center justify-between text-white/40 text-sm mb-6 pb-6 border-b border-white/10">
                            <div>
                                <span className="text-white font-semibold">{filteredPublications.length}</span> publications
                            </div>
                            <div>
                                <span className="text-white font-semibold">{totalCitations}</span> citations
                            </div>
                        </div>

                        {/* Filters Bar */}
                        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-2 backdrop-blur-sm">
                            <PublicationsFilters
                                fields={fields}
                                years={years}
                                selectedRole={authorFilter}
                                selectedField={fieldFilter}
                                selectedYear={yearFilter}
                                searchQuery={searchQuery}
                                onRoleChange={setAuthorFilter}
                                onFieldChange={setFieldFilter}
                                onYearChange={setYearFilter}
                                onSearchChange={setSearchQuery}
                                onClearFilters={clearFilters}
                                hasActiveFilters={hasActiveFilters}
                            />
                        </div>
                    </motion.div>

                    {/* Results */}
                    {sortedPublications.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-white/20" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">No publications found</h3>
                            <p className="text-white/50 max-w-md mx-auto mb-6">
                                We couldn't find any publications matching your filters. Try adjusting your search or criteria.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="px-6 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {sortedPublications.map((pub, index) => (
                                    <motion.div
                                        key={`${pub.title}-${index}`}
                                        custom={index}
                                        variants={fadeUpVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        layout
                                        className="group p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4 md:gap-6">
                                            {/* Icon */}
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-indigo-500/10 to-rose-500/10 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-white/10 transition-colors">
                                                <FileText className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8 mb-2">
                                                    <h3 className="text-lg md:text-xl font-semibold text-white leading-snug group-hover:text-indigo-200 transition-colors">
                                                        {pub.title}
                                                    </h3>
                                                    <div className="flex-shrink-0 flex items-center gap-3 text-sm">
                                                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium">
                                                            {pub.year}
                                                        </span>
                                                        <span className="text-indigo-400 font-medium whitespace-nowrap">
                                                            {pub.citations} citation{pub.citations !== 1 ? 's' : ''}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-white/60 text-sm mb-3 line-clamp-2">
                                                    {pub.authors}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/40">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium text-white/60">{pub.journal}</span>
                                                        {pub.volume && <span>• {pub.volume}</span>}
                                                    </div>
                                                    <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                                                    <div className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300/80 text-xs border border-indigo-500/20">
                                                        {pub.field}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
