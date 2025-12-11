"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useScroll } from "framer-motion";

export function ReadingProgress() {
    // Use Framer Motion's useScroll hook which is optimized
    const { scrollYProgress } = useScroll();
    
    // Smooth out the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-white/[0.05] z-50">
            <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-rose-500 origin-left"
                style={{ scaleX }}
            />
        </div>
    );
}
