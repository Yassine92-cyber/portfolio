"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { PageHeader, StatList } from "@/components/ui/page-header";
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
        toast.success("Filters cleared");
    };

    return (
        <div className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
            <PageHeader
                crumb="Research"
                eyebrow="Research"
                title={
                    <>
                        Publications, <em className="font-display italic text-warm-300">peer-reviewed.</em>
                    </>
                }
                intro="Research papers and academic contributions across organic, computational and medicinal chemistry, and corrosion inhibition."
                aside={
                    <div className="space-y-2">
                        <StatList
                            items={[
                                { value: filteredPublications.length, label: hasActiveFilters ? "Matching" : "Papers" },
                                { value: totalCitations, label: "Citations" },
                            ]}
                        />
                        <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-paper/45">
                            Totals from publications listed on this site
                        </p>
                    </div>
                }
            />

            <div className="relative z-30 mt-10 md:sticky md:top-20 md:-mx-8 md:bg-ink/90 md:px-8 md:py-3 md:backdrop-blur-xl lg:-mx-12 lg:px-12">
                <div className="rounded-2xl border border-line bg-ink-2 p-2">
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
            </div>

            <p className="sr-only" role="status" aria-live="polite">
                {sortedPublications.length} publications shown
            </p>

            {sortedPublications.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-paper/15 px-6 py-20 text-center"
                >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-line">
                        <Search className="h-6 w-6 text-paper/50" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-display-sm text-paper">No publications match</h2>
                    <p className="mx-auto mb-7 mt-3 max-w-md text-paper/70">
                        Nothing matches these filters. Try a broader search or clear the criteria.
                    </p>
                    <button
                        onClick={clearFilters}
                        className="rounded-full bg-paper px-6 py-2.5 font-medium text-ink transition-colors hover:bg-violet-100"
                    >
                        Clear all filters
                    </button>
                </motion.div>
            ) : (
                <ol className="mt-6 border-t border-line">
                    <AnimatePresence mode="popLayout">
                        {sortedPublications.map((pub, index) => (
                            <motion.li
                                data-reveal=""
                                key={`${pub.title}-${index}`}
                                custom={index}
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                layout
                                className="group grid gap-4 border-b border-line py-7 md:grid-cols-12 md:gap-8"
                            >
                                <div className="flex items-center gap-4 md:col-span-2 md:flex-col md:items-start md:gap-2">
                                    <span className="font-display text-3xl text-paper">{pub.year}</span>
                                    {pub.firstAuthor && (
                                        <span className="rounded-full border border-warm-400/40 px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-warm-300">
                                            First author
                                        </span>
                                    )}
                                </div>
                                <div className="min-w-0 md:col-span-8">
                                    <h2 className="text-lg font-medium leading-snug text-paper md:text-xl">
                                        {pub.title}
                                    </h2>
                                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper/65">
                                        {pub.authors}
                                    </p>
                                    <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                                        <span className="italic text-paper/80">{pub.journal}</span>
                                        {pub.volume && <span className="text-paper/60">{pub.volume}</span>}
                                        <span className="rounded-full bg-violet-400/10 px-2.5 py-0.5 text-xs text-violet-200">
                                            {pub.field}
                                        </span>
                                    </p>
                                </div>
                                <p className="font-mono text-sm text-paper/70 md:col-span-2 md:text-right">
                                    <span className="text-paper">{pub.citations}</span> citation{pub.citations !== 1 ? "s" : ""}
                                </p>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ol>
            )}
        </div>
    );
}
