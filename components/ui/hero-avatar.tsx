"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroAvatarProps {
    src: string;
    alt: string;
    effect?: "heartbeat" | "audioWave";
    className?: string;
}

export function HeroAvatar({ src, alt, effect = "heartbeat", className }: HeroAvatarProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            {/* Effect Layer - Behind Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                {effect === "heartbeat" && <HeartbeatEffect />}
                {effect === "audioWave" && <AudioWaveEffect />}
            </div>

            {/* Profile Image - Top Layer */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-indigo-500/20 bg-[#030303]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}

function HeartbeatEffect() {
    return (
        <>
            {/* Primary Glow - Breathing */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl"
            />
            
            {/* Secondary Ring - Ripple (Very Subtle) */}
            <motion.div
                animate={{
                    scale: [1, 1.2],
                    opacity: [0.3, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-indigo-500/20"
            />
        </>
    );
}

function AudioWaveEffect() {
    return (
        <>
            {/* Inner Ring - Slow Rotation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -inset-4 rounded-full border border-dashed border-indigo-500/20"
            />
            
            {/* Middle Ring - Counter Rotation */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -inset-8 rounded-full border border-dashed border-rose-500/20 opacity-50"
            />

            {/* Outer Pulse */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -inset-1 rounded-full border border-white/5"
            />
        </>
    );
}

