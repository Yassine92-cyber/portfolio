"use client";

import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
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
        toast.success("All filters cleared", {
            icon: "🧹",
            style: {
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
            }
        });
    };

    return (
        <main className="relative min-h-screen bg-[#030303]">
            <Navigation />
            
            <section className="relative py-12 md:py-16 pt-32" aria-label="Blog posts">
                {/* Background Atmosphere */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <Breadcrumbs items={[{ label: "Blog" }]} />
                        
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 md:mb-16"
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                            Blog
                                        </span>
                                    </h1>
                                    <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                                        Thoughts, insights, and stories about community building, career development, and innovation
                                    </p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="text-3xl font-bold text-white">
                                        {filteredPosts.length}
                                    </div>
                                    <div className="text-sm text-white/40 uppercase tracking-wider font-medium">
                                        Posts
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Post Count */}
                            <div className="md:hidden flex items-center gap-2 text-white/40 text-sm mb-6">
                                <span className="text-white font-semibold">{filteredPosts.length}</span> posts found
                            </div>

                            {/* Filters Bar */}
                            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-2 backdrop-blur-sm">
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
                        </motion.div>

                        {/* Posts Grid */}
                        <motion.div layout className="min-h-[400px]">
                            {sortedPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <AnimatePresence mode="popLayout">
                                        {sortedPosts.map((post, index) => (
                                            <BlogCard 
                                                key={post.slug} 
                                                post={post} 
                                                index={index} 
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/[0.01]"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                        <Search className="w-8 h-8 text-white/20" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                                    <p className="text-white/50 max-w-md mx-auto mb-6">
                                        We couldn't find any posts matching your current filters. Try adjusting your search or categories.
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors"
                                    >
                                        Clear all filters
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
