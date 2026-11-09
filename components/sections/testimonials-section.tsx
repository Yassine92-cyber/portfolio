"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/testimonials-data";

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
    const [showFullContent, setShowFullContent] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextTestimonial = () => {
        setShowFullContent(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    // Auto-rotate effect
    useEffect(() => {
        if (isAutoPlaying && !showFullContent) {
            autoPlayRef.current = setInterval(() => {
                nextTestimonial();
            }, 8000); // 8 seconds per slide
        }

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlaying, currentIndex, showFullContent]);

    const prevTestimonial = () => {
        setShowFullContent(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section id="testimonials" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                Words from the Network
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            What colleagues, mentors, and collaborators say about working together
                        </p>
                    </motion.div>

                    {/* Main Carousel Layout */}
                    <div className="relative">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            
                            {/* Visual Side (Left) - Animated Stack */}
                            <div className="relative w-full md:w-1/2 max-w-md aspect-square flex items-center justify-center">
                                {/* Decorative Orbits */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-dashed border-white/5 rounded-full"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 border border-dashed border-white/5 rounded-full"
                                />

                                <div className="relative w-64 h-64 md:w-80 md:h-80">
                                    <AnimatePresence mode="popLayout">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                            className="relative w-full h-full z-20"
                                        >
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-indigo-500/20 bg-[#1a1a1a]">
                                                {currentTestimonial.image && !imageError[currentIndex] ? (
                                                    <Image
                                                        src={currentTestimonial.image}
                                                        alt={currentTestimonial.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 300px, 400px"
                                                        onError={() => {
                                                            setImageError((prev) => ({ ...prev, [currentIndex]: true }));
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-rose-500/20 text-4xl md:text-5xl font-bold text-white/40">
                                                        {currentTestimonial.initials}
                                                    </div>
                                                )}
                                                
                                                {/* Quote Icon Overlay */}
                                                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg border-2 border-[#0a0a0a]">
                                                    <Quote className="w-5 h-5 fill-current" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Ghost Card (Next) - Subtle Preview */}
                                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/5 blur-sm scale-90 -z-10 translate-x-4 translate-y-2 opacity-50" />
                                </div>
                            </div>

                            {/* Content Side (Right) - Text & Controls */}
                            <div className="w-full md:w-1/2 relative min-h-[300px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {currentTestimonial.name}
                                            </h3>
                                            <div className="flex items-center gap-3 text-white/60 text-sm md:text-base">
                                                <span className="font-medium text-indigo-300">
                                                    {currentTestimonial.role}
                                                </span>
                                                {currentTestimonial.company && (
                                                    <>
                                                        <span className="w-1 h-1 rounded-full bg-white/30" />
                                                        <span>{currentTestimonial.company}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 font-light mb-8 relative">
                                            <span className="absolute -left-4 -top-2 text-4xl text-indigo-500/20 font-serif select-none">&quot;</span>
                                            {showFullContent ? currentTestimonial.content : currentTestimonial.short}
                                            {!showFullContent && (
                                                <button 
                                                    onClick={() => {
                                                        setShowFullContent(true);
                                                        setIsAutoPlaying(false);
                                                    }}
                                                    className="inline-block ml-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer transition-colors"
                                                >
                                                    Read full
                                                </button>
                                            )}
                                            <span className="absolute -bottom-4 text-4xl text-indigo-500/20 font-serif select-none leading-none ml-2">&quot;</span>
                                        </blockquote>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Controls */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                prevTestimonial();
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white group"
                                            aria-label="Previous testimonial"
                                        >
                                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                nextTestimonial();
                                                setIsAutoPlaying(false);
                                            }}
                                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white group"
                                            aria-label="Next testimonial"
                                        >
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    </div>

                                    <div className="h-8 w-px bg-white/10 mx-2" />

                                    <button
                                        onClick={toggleAutoPlay}
                                        className="p-2 rounded-full text-white/40 hover:text-white transition-colors"
                                        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                                    >
                                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>

                                    {/* Progress Bar */}
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden relative">
                                        <motion.div 
                                            key={currentIndex}
                                            initial={{ width: "0%" }}
                                            animate={{ width: isAutoPlaying && !showFullContent ? "100%" : "0%" }}
                                            transition={{ 
                                                duration: 8, 
                                                ease: "linear",
                                                repeat: isAutoPlaying && !showFullContent ? 0 : 0 
                                            }}
                                            className={cn(
                                                "h-full bg-indigo-500",
                                                (!isAutoPlaying || showFullContent) && "hidden"
                                            )}
                                        />
                                        {(!isAutoPlaying || showFullContent) && (
                                            <div 
                                                className="h-full bg-indigo-500" 
                                                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }} 
                                            />
                                        )}
                                    </div>
                                    
                                    <span className="text-xs text-white/40 font-mono tabular-nums">
                                        {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
