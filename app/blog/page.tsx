"use client";

import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { blogPosts } from "@/lib/blog-data";
import { PageHeader, StatList } from "@/components/ui/page-header";
import toast from "react-hot-toast";
import { BlogCard } from "@/components/sections/blog-card";
import { BlogFilters } from "@/components/sections/blog-filters";
import { Search } from "lucide-react";

export default function BlogPage() {
    const [categoryFilter, setCategoryFilter] = useState<string>("all");
    const [yearFilter, setYearFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Memoized filters
    const categories = useMemo(() => {
        return Array.from(new Set(blogPosts.map(p => p.category))).sort();
    }, []);

    const years = useMemo(() => {
        return Array.from(new Set(blogPosts.map(p => new Date(p.date).getFullYear().toString())))
            .sort((a, b) => parseInt(b) - parseInt(a));
    }, []);

    // Filter logic
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            // Category
            if (categoryFilter !== "all" && post.category !== categoryFilter) return false;
            
            // Year
            if (yearFilter !== "all") {
                const postYear = new Date(post.date).getFullYear().toString();
                if (postYear !== yearFilter) return false;
            }

            // Search
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const matchTitle = post.title.toLowerCase().includes(query);
                const matchExcerpt = post.excerpt.toLowerCase().includes(query);
                const matchCategory = post.category.toLowerCase().includes(query);
                return matchTitle || matchExcerpt || matchCategory;
            }

            return true;
        });
    }, [categoryFilter, yearFilter, searchQuery]);

    // Sorting (Newest first)
    const sortedPosts = useMemo(() => {
        return [...filteredPosts].sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }, [filteredPosts]);

    const hasActiveFilters = categoryFilter !== "all" || yearFilter !== "all" || searchQuery !== "";

    const clearFilters = () => {
        setCategoryFilter("all");
        setYearFilter("all");
        setSearchQuery("");
        toast.success("Filters cleared");
    };

    return (
        <>
            <Navigation />
            <main id="main-content" className="relative min-h-screen bg-ink">
                <div className="page-shell pb-24 pt-28 md:pb-32 md:pt-36">
                    <PageHeader
                        crumb="Writing"
                        eyebrow="Writing"
                        title={
                            <>
                                Notes on careers, <em className="font-display italic text-warm-300">community and building.</em>
                            </>
                        }
                        intro="Thoughts, insights, and stories about community building, career development, and innovation."
                        aside={
                            <StatList
                                items={[
                                    { value: filteredPosts.length, label: hasActiveFilters ? "Matching" : "Articles" },
                                    { value: categories.length, label: "Topics" },
                                ]}
                            />
                        }
                    />

                    <section aria-label="Blog posts">
                        <div className="relative z-30 mt-10 md:sticky md:top-20 md:-mx-8 md:bg-ink/90 md:px-8 md:py-3 md:backdrop-blur-xl lg:-mx-12 lg:px-12">
                            <div className="rounded-2xl border border-line bg-ink-2 p-2">
                                <BlogFilters
                                    categories={categories}
                                    years={years}
                                    selectedCategory={categoryFilter}
                                    selectedYear={yearFilter}
                                    searchQuery={searchQuery}
                                    onCategoryChange={setCategoryFilter}
                                    onYearChange={setYearFilter}
                                    onSearchChange={setSearchQuery}
                                    onClearFilters={clearFilters}
                                    hasActiveFilters={hasActiveFilters}
                                />
                            </div>
                        </div>

                        <p className="sr-only" role="status" aria-live="polite">
                            {sortedPosts.length} posts shown
                        </p>

                        <motion.div layout className="mt-8 min-h-[400px]">
                            {sortedPosts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <AnimatePresence mode="popLayout">
                                        {sortedPosts.map((post, index) => (
                                            <BlogCard key={post.slug} post={post} index={index} />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-paper/15 px-6 py-20 text-center"
                                >
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-line">
                                        <Search className="h-6 w-6 text-paper/50" aria-hidden="true" />
                                    </div>
                                    <h2 className="font-display text-display-sm text-paper">No posts match</h2>
                                    <p className="mx-auto mb-7 mt-3 max-w-md text-paper/70">
                                        Nothing matches these filters. Try a broader search or another topic.
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="rounded-full bg-paper px-6 py-2.5 font-medium text-ink transition-colors hover:bg-violet-100"
                                    >
                                        Clear all filters
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </section>
                </div>
            </main>
        </>
    );
}
