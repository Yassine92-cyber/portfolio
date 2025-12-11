"use client";

import { motion } from "framer-motion";
import { Users, Target, Zap, Sparkles, Brain, Rocket } from "lucide-react";

export function SummaryCard() {
  const features = [
    {
      icon: Users,
      title: "Community Building",
      desc: "Creating warm, human-centered systems that help people connect.",
    },
    {
      icon: Target,
      title: "Strategic Clarity",
      desc: "Helping founders & talent move from confusion to clear direction.",
    },
    {
      icon: Brain,
      title: "Research & Analysis",
      desc: "Applying scientific rigor to business development and market analysis.",
    },
    {
      icon: Rocket,
      title: "0→1 Execution",
      desc: "Turning abstract ideas into tangible projects and momentum.",
    },
  ];

  return (
    <section className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden backdrop-blur-sm">
          {/* Card Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                <span>Core Competencies</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bridging the gap between <br />
                <span className="text-white/40">complex information</span> and <span className="text-indigo-400">signal</span>.
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                I combine the structured thinking of a researcher with the empathy of a peer supporter. 
                Whether building communities, analyzing markets, or designing clarity tools, 
                my focus is always on creating momentum.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Integration Coaching", "Public Speaking", "Content Strategy", "AI Workflows"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

