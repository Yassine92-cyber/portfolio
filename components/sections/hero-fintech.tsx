"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Linkedin, MapPin, Globe } from "lucide-react";
import Link from "next/link";
import { HeroAvatar } from "@/components/ui/hero-avatar";
import { AnimatedIdentityTitle } from "@/components/ui/animated-identity-title";

export function HeroFintech() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#030303] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-rose-500 opacity-20 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to new opportunities</span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex flex-col items-center"
        >
          <AnimatedIdentityTitle variant="gradient" className="mb-8" />
          
          <div className="mb-6">
            <HeroAvatar 
                src="/images/yassine.png" 
                alt="Yassine Kaddouri" 
                className="w-40 h-40 md:w-56 md:h-56"
                effect="heartbeat" // Change to "audioWave" to switch effects
            />
          </div>
          <h1 className="sr-only">Yassine Kaddouri</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-white/60 mb-8 leading-relaxed"
        >
          Postdoc researcher turned B2B SaaS business developer and community builder, helping people and teams go from <span className="text-white font-medium">0→1</span> and turn noise into signal by bridging scientific insight, human connection, and AI-driven progress.
        </motion.p>

        {/* Location & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-white/50 mb-10"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>Helsinki, Finland</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-rose-400" />
            <span>Open to Remote Roles across the EU & Middle East</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="#portfolio"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white text-black px-8 text-sm font-medium transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#030303]"
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Contact Me
            <Terminal className="w-4 h-4" />
          </Link>

          <a
            href="https://www.linkedin.com/in/dr-yassine92"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-white px-8 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#0077b5]/50"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
            <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:text-white transition-colors" />
          </a>
        </motion.div>
      </div>
      
      {/* Spacer */}
      <div className="h-16 md:h-24"></div>
    </section>
  );
}
