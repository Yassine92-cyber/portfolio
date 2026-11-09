"use client";

import { Search, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlogFiltersProps {
    categories: string[];
    years: string[];
    selectedCategory: string;
    selectedYear: string;
    searchQuery: string;
    onCategoryChange: (category: string) => void;
    onYearChange: (year: string) => void;
    onSearchChange: (query: string) => void;
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

export function BlogFilters({
    categories,
    years,
    selectedCategory,
    selectedYear,
    searchQuery,
    onCategoryChange,
    onYearChange,
    onSearchChange,
    onClearFilters,
    hasActiveFilters,
}: BlogFiltersProps) {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const categoryRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setIsCategoryOpen(false);
            }
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsCategoryOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div className="w-full space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 p-1">
            {/* Search Input */}
            <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-paper/60 group-focus-within:text-indigo-400 transition-colors" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search posts"
                    aria-label="Search posts"
                    className="block w-full pl-10 pr-3 py-2.5 rounded-xl bg-ink border border-paper/15 text-white placeholder-paper/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-surface transition-all text-sm"
                />
            </div>

            <div className="flex gap-2 md:contents">
                {/* Category Dropdown (Custom for better styling) */}
                <div className="relative flex-1 md:flex-none md:w-48" ref={categoryRef}>
                    <button
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        aria-haspopup="true"
                        aria-expanded={isCategoryOpen}
                        aria-label={`Category: ${selectedCategory === "all" ? "All categories" : selectedCategory}`}
                        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-ink border border-paper/15 text-sm text-white hover:border-paper/30 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                        <span className="truncate">
                            {selectedCategory === "all" ? "All Categories" : selectedCategory}
                        </span>
                        <ChevronDown className={cn("w-4 h-4 text-paper/60 transition-transform", isCategoryOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                        {isCategoryOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 right-0 mt-2 p-1 bg-surface border border-paper/15 rounded-xl shadow-xl shadow-black/50 z-50 max-h-60 overflow-y-auto custom-scrollbar"
                            >
                                <button
                                    onClick={() => { onCategoryChange("all"); setIsCategoryOpen(false); }}
                                    aria-pressed={selectedCategory === "all"}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                                        selectedCategory === "all" ? "bg-violet-400/15 text-violet-100" : "text-white/70 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    All Categories
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => { onCategoryChange(category); setIsCategoryOpen(false); }}
                                        aria-pressed={selectedCategory === category}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                                            selectedCategory === category ? "bg-violet-400/15 text-violet-100" : "text-white/70 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Year Select (Simple) */}
                <div className="relative flex-1 md:flex-none md:w-32">
                    <select
                        value={selectedYear}
                        onChange={(e) => onYearChange(e.target.value)}
                        aria-label="Filter by year"
                        className="appearance-none block w-full pl-4 pr-10 py-2.5 rounded-xl bg-ink border border-paper/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-surface transition-all cursor-pointer"
                    >
                        <option value="all" className="bg-surface">All Years</option>
                        {years.map((year) => (
                            <option key={year} value={year} className="bg-surface">
                                {year}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paper/60 pointer-events-none" />
                </div>
            </div>

            {/* Clear Button */}
            <AnimatePresence>
                {hasActiveFilters && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={onClearFilters}
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-paper/15 text-paper/80 text-sm hover:border-paper/40 hover:text-paper transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50 whitespace-nowrap"
                        aria-label="Clear filters"
                    >
                        <X className="w-3.5 h-3.5" />
                        <span>Clear</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

