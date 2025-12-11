"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
    email: string;
    className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    return (
        <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.15] text-white/70 hover:text-white hover:bg-white/[0.1] transition-all text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#030303] ${className}`}
            aria-label={copied ? "Email copied!" : `Copy ${email} to clipboard`}
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4 text-green-400" aria-hidden="true" />
                    <span className="text-green-400">Copied!</span>
                </>
            ) : (
                <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>{email}</span>
                </>
            )}
        </motion.button>
    );
}

