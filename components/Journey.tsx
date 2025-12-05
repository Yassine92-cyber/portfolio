"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/data/timeline";

// Map timeline eras to story format with "What I learned" insights
const journeyStory = [
  {
    period: "2010–2014",
    title: "Formation",
    bullets: [
      "BSc Organic Chemistry: Thesis on amino-acid-based drugs. Foundations in scientific thinking and laboratory analysis.",
      "Author: Self-published the book 'Breeze and Dust' using a 130 EUR scholarship. Printed 250 copies and sold out in 9 months.",
      "Freelance Trainer: Delivered early workshops across cities. Learned to simplify and communicate complex ideas.",
    ],
    learned: "I learned that people need clarity more than complexity. Whether explaining science or writing stories, the goal is the same: make the invisible visible.",
  },
  {
    period: "2014–2016",
    title: "Advanced Learning",
    bullets: [
      "MSc in Chemistry: Deepened research skills and analytical thinking.",
      "Teaching: Expanded training programs, learned to adapt to different learning styles.",
    ],
    learned: "I learned that everyone learns differently, and the best teachers meet people where they are, not where you think they should be.",
  },
  {
    period: "2016–2020",
    title: "Research and Leadership",
    bullets: [
      "PhD in Computational Chemistry: Published 20+ peer-reviewed papers, presented at international conferences.",
      "Coordinated global research networks, managed complex projects.",
    ],
    learned: "I learned that building bridges between people, ideas, and systems is more powerful than working in isolation. Connection creates opportunity.",
  },
  {
    period: "2021–2022",
    title: "Finland and Postdoc",
    bullets: [
      "Moved to Finland, started postdoc at University of Helsinki.",
      "Navigated a new country, new language, new systems—experienced firsthand what international talents go through.",
    ],
    learned: "I learned what it really feels like to start from zero in a new place, even with years of experience. This became the foundation of my work with international talents.",
  },
  {
    period: "2022–2024",
    title: "Bridge Builder Era",
    bullets: [
      "Night shifts at Slush, Junction, Arctic15—connecting people and opportunities.",
      "Built Career Boost Network: 191-member community for international talents.",
      "Trained 600+ people in peer support, integration, and career development.",
    ],
    learned: "I learned that systems and community together create real change. One person can feel stuck, but a connected group can move mountains.",
  },
  {
    period: "2024",
    title: "Business Development",
    bullets: [
      "Business Development at Yellow Method Oy: Turned research into market insights, built B2B relationships.",
      "Researched 250+ companies, secured 11 B2B meetings.",
    ],
    learned: "I learned that turning noise into signal isn't just about data—it's about understanding what people actually need and connecting the dots.",
  },
  {
    period: "2025–Now",
    title: "Builder of Opportunities",
    bullets: [
      "Peer support training and facilitation: Supporting people through transitions.",
      "AI-assisted clarity tools: Building workflows that help people find clarity faster.",
      "Content and community: Sharing what I've learned, connecting people to opportunities.",
    ],
    learned: "I learned that my role isn't to have all the answers, but to help people find their own clarity and build their own opportunity systems.",
  },
];

export default function Journey() {
  return (
    <section 
      id="journey" 
      className="py-24 bg-clarity-white px-6 sm:px-8 lg:px-12 relative"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 
            id="journey-heading"
            className="text-4xl sm:text-5xl font-bold text-bridge-blue mb-4 leading-tight font-heading"
          >
            My Journey
          </h2>
          <p className="text-lg text-kind-gray max-w-2xl font-body">
            A story of connecting dots between science, community, and opportunity
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative" role="list" aria-label="Career timeline">
          {/* Timeline line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-signal-teal via-bridge-gold to-signal-teal hidden md:block" 
            aria-hidden="true"
          />

          <div className="space-y-12">
            {journeyStory.map((phase, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative pl-0 md:pl-20"
                role="listitem"
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-6 md:left-6 top-2 w-4 h-4 bg-signal-teal rounded-full border-4 border-clarity-white shadow-lg shadow-signal-teal/50 hidden md:block" 
                  aria-hidden="true"
                />

                <div className="bg-warm-blush/30 backdrop-blur-sm rounded-2xl p-8 border border-bridge-blue/20 hover:border-signal-teal/50 hover:shadow-lg hover:shadow-signal-teal/20 transition-all duration-300">
                  <div className="mb-4">
                    <time 
                      className="text-sm font-mono text-signal-teal uppercase tracking-wide font-heading"
                      dateTime={phase.period.replace("–", "/")}
                    >
                      {phase.period}
                    </time>
                    <h3 className="text-2xl font-bold text-bridge-blue mt-2 mb-4 font-heading">
                      {phase.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 mb-6" aria-label={`Highlights from ${phase.title}`}>
                    {phase.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-kind-gray font-body">
                        <span className="text-signal-teal mt-1.5 font-bold" aria-hidden="true">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-bridge-blue/20">
                    <p className="text-kind-gray italic leading-relaxed font-quote">
                      <span className="font-semibold text-bridge-blue font-heading">What I learned about people here:</span>{" "}
                      {phase.learned}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

