"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface PublicationsFiltersProps {
    fields: string[];
    years: string[];
    selectedRole: "all" | "first" | "co";
    selectedField: string;
    selectedYear: string;
    searchQuery: string;
    onRoleChange: (role: "all" | "first" | "co") => void;
    onFieldChange: (field: string) => void;
    onYearChange: (year: string) => void;
    onSearchChange: (query: string) => void;
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

export function PublicationsFilters({
    fields,
    years,
    selectedRole,
    selectedField,
    selectedYear,
    searchQuery,
    onRoleChange,
    onFieldChange,
    onYearChange,
    onSearchChange,
    onClearFilters,
    hasActiveFilters,
}: PublicationsFiltersProps) {
    const [isFieldOpen, setIsFieldOpen] = useState(false);
    const fieldRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fieldRef.current && !fieldRef.current.contains(event.target as Node)) {
                setIsFieldOpen(false);
            }
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsFieldOpen(false);
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
                    placeholder="Search titles or journals"
                    aria-label="Search publications by title or journal"
                    className="block w-full pl-10 pr-3 py-2.5 rounded-xl bg-ink border border-paper/15 text-white placeholder-paper/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-surface transition-all text-sm"
                />
            </div>

            <div className="grid grid-cols-2 gap-2 md:contents">
                {/* Author Role Filter */}
                <div className="relative md:w-40 md:flex-none">
                    <div className="relative">
                        <select
                            value={selectedRole}
                            onChange={(e) => onRoleChange(e.target.value as "all" | "first" | "co")}
                            aria-label="Filter by authorship"
                            className="appearance-none block w-full pl-10 pr-10 py-2.5 rounded-xl bg-ink border border-paper/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-surface transition-all cursor-pointer"
                        >
                            <option value="all" className="bg-surface">All Authors</option>
                            <option value="first" className="bg-surface">First Author</option>
                            <option value="co" className="bg-surface">Co-Author</option>
                        </select>
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paper/60 pointer-events-none" />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-paper/60 pointer-events-none" />
                    </div>
                </div>

                {/* Field Dropdown (Custom) */}
                <div className="relative order-last col-span-2 md:order-none md:w-48 md:flex-none" ref={fieldRef}>
                    <button
                        onClick={() => setIsFieldOpen(!isFieldOpen)}
                        aria-haspopup="true"
                        aria-expanded={isFieldOpen}
                        aria-label={`Field: ${selectedField === "all" ? "All fields" : selectedField}`}
                        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-ink border border-paper/15 text-sm text-white hover:border-paper/30 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                        <div className="flex items-center gap-2 truncate">
                            <BookOpen className="w-4 h-4 text-paper/60 flex-shrink-0" />
                            <span className="truncate">
                                {selectedField === "all" ? "All Fields" : selectedField}
                            </span>
                        </div>
                        <ChevronDown className={cn("w-4 h-4 text-paper/60 transition-transform flex-shrink-0", isFieldOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                        {isFieldOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 right-0 mt-2 p-1 bg-surface border border-paper/15 rounded-xl shadow-xl shadow-black/50 z-50 max-h-60 overflow-y-auto custom-scrollbar"
                            >
                                <button
                                    onClick={() => { onFieldChange("all"); setIsFieldOpen(false); }}
                                    aria-pressed={selectedField === "all"}
                                    className={cn(
                                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                                        selectedField === "all" ? "bg-violet-400/15 text-violet-100" : "text-white/70 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    All Fields
                                </button>
                                {fields.map((field) => (
                                    <button
                                        key={field}
                                        onClick={() => { onFieldChange(field); setIsFieldOpen(false); }}
                                        aria-pressed={selectedField === field}
                                        className={cn(
                                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                                            selectedField === field ? "bg-violet-400/15 text-violet-100" : "text-white/70 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {field}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Year Select */}
                <div className="relative md:w-32 md:flex-none">
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

