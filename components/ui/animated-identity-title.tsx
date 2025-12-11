"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedIdentityTitleProps {
    className?: string;
    variant?: "glow" | "gradient" | "breathing";
}

export function AnimatedIdentityTitle({ 
    className, 
    variant = "glow" 
}: AnimatedIdentityTitleProps) {
    const text = "Bridge Builder & Peer Supporter";

    if (variant === "gradient") {
        return (
            <h2 className={cn("text-sm md:text-base font-medium tracking-widest uppercase relative", className)}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-rose-300 to-indigo-400 bg-[length:200%_auto] animate-shimmer">
                    {text}
                </span>
            </h2>
        );
    }

    if (variant === "breathing") {
        return (
            <h2 className={cn("text-sm md:text-base font-medium tracking-widest text-indigo-400 uppercase", className)}>
                <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    Bridge Builder
                </motion.span>
                <span className="mx-2 text-white/40">&</span>
                <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    Peer Supporter
                </motion.span>
            </h2>
        );
    }

    // Default: Glow
    return (
        <h2 className={cn("text-sm md:text-base font-medium tracking-widest text-indigo-400 uppercase relative inline-block", className)}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute inset-0 z-0 bg-indigo-500/20 blur-lg rounded-full"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </h2>
    );
}

