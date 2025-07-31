import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    id: 'researcher',
    label: 'Scientific Researcher',
    color: 'bg-blue-700',
    icon: '🔬',
    items: [
      {
        title: 'Marie Curie Postdoctoral Fellow',
        org: 'University of Helsinki',
        date: 'Jun 2021 – Feb 2022',
        description: 'Worked on anticancer polyamines. Led EU-funded research and co-authored multiple Q1 papers.'
      },
      {
        title: 'PhD in Organic Chemistry',
        org: 'University Mohammed First Oujda',
        date: '2016 – 2020',
        description: 'Focus on medicinal and computational chemistry with 20+ scientific publications.'
      }
    ]
  },
  {
    id: 'leader',
    label: 'Leader',
    color: 'bg-green-600',
    icon: '🌱',
    items: [
      {
        title: 'Sustainability Group Lead',
        org: 'Slush',
        date: 'Sep 2023 – Dec 2023',
        description: 'Managed sustainability operations for 13,000 attendees, coached volunteers.'
      },
      {
        title: 'Head of Global Participant Acquisition',
        org: 'Junction',
        date: 'Aug 2023 – Nov 2023',
        description: 'Led international outreach strategy and team coordination for participant recruitment.'
      }
    ]
  },
  {
    id: 'entrepreneur',
    label: 'Entrepreneur',
    color: 'bg-yellow-500',
    icon: '🎤',
    items: [
      {
        title: 'Founder & Life Coach',
        org: 'Everest Center',
        date: '2013 – 2017',
        description: 'Delivered workshops on personal development, productivity, and self-leadership.'
      },
      {
        title: 'Public Speaker',
        org: 'Various Events in Morocco & Finland',
        date: '2015 – Present',
        description: 'Keynotes and trainings on innovation, career growth, and entrepreneurship.'
      },
      {
        title: 'Freelance Trainer & Consultant',
        org: '',
        date: '2018 – Present',
        description: 'Conducted corporate training, coaching sessions, and strategy workshops.'
      }
    ]
  },
  {
    id: 'author',
    label: 'Author',
    color: 'bg-purple-600',
    icon: '📖',
    items: [
      {
        title: 'Author of "Breeze and Dust"',
        org: '',
        date: '2010 – 2012',
        description: 'Wrote and published a personal reflection book blending poetry, emotion, and resilience.'
      }
    ]
  }
];

export default function LivingCV() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div id="living-cv" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Yassine Kaddouri
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveId(activeId === section.id ? null : section.id)}
              className={`group relative w-36 h-36 flex items-center justify-center rounded-full shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 ${section.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
              
              <div className="relative flex flex-col items-center">
                <span className="text-3xl mb-2">{section.icon}</span>
                <span className="text-center font-semibold text-sm px-2 leading-tight">{section.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {activeId && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              className="mt-12 w-full max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md text-white p-8 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">
                    {sections.find(s => s.id === activeId)?.icon}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {sections.find(s => s.id === activeId)?.label}
                  </h2>
                </div>
                
                <ul className="space-y-6">
                  {sections.find(s => s.id === activeId)?.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="border-l-4 border-blue-400 pl-4"
                    >
                      <p className="font-semibold text-lg mb-1">
                        {item.title}
                        {item.org && <span className="text-blue-300"> – {item.org}</span>}
                      </p>
                      {item.date && (
                        <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                      )}
                      {item.description && (
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 