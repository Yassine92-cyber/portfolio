import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    org: "Yellow Method",
    role: "Business Development Manager",
    logo: "/logos/yellow-method.svg",
    duration: "Apr 2024 – Dec 2024",
    location: "Helsinki, Uusimaa, Finland · Remote",
    details: [
      "Support in the creation of a compelling and persuasive pitch deck for potential investors",
      "Conduct comprehensive market research to identify trends, customer needs, and competitive landscape",
      "Gather and analyze data on industry trends, market opportunities, and regulatory changes",
      "Develop and maintain a comprehensive database of potential investors, venture capitalists, and strategic partners",
      "Create and refine lead lists based on market trends and company needs",
      "Manage and optimize HubSpot pipeline usage",
      "Contribute to product vision and maintain meeting notes",
      "Create a tagging system, scientific data, and Q&A for the AI agent",
      "Report website performance metrics (Google Analytics)",
      "Oversee content updates to align with business goals",
      "Attend industry events to promote the company"
    ]
  },
  {
    org: "University of Helsinki",
    role: "Marie Curie Postdoctoral Fellow",
    logo: "/logos/helsinki.svg",
    duration: "Jun 2021 – Feb 2022",
    location: "Helsinki, Finland",
    details: [
      "Secured €22,000 Marie Skłodowska-Curie fellowship",
      "Synthesized and analyzed fluorinated polyamines as anticancer agents",
      "Maintained lab instruments and co-supervised a French engineering student"
    ]
  },
  {
    org: "Université Mohammed Premier Oujda",
    role: "Doctoral Researcher",
    logo: "/logos/ump.svg",
    duration: "Dec 2016 – Nov 2020",
    location: "Oujda, Oriental, Morocco",
    details: [
      "Synthesis, biological evaluation and in silico modeling of 36 new compounds",
      "Published 17 research papers with 241 citations",
      "Supervised 4 master's students and taught chemistry lab courses"
    ]
  },
  {
    org: "Université Mohammed Premier Oujda",
    role: "Teaching Assistant, General Chemistry",
    logo: "/logos/ump.svg",
    duration: "Sep 2018 – Jan 2020",
    location: "Oujda, Morocco",
    details: [
      "Supervised and trained 20 students weekly",
      "Prepared online course for SMC S6 students"
    ]
  },
  {
    org: "Université de Bourgogne",
    role: "Exchange Research Trainee",
    logo: "/logos/bourgogne.svg",
    duration: "May 2017 – Jul 2017",
    location: "Dijon, France",
    details: [
      "Synthesized diphosphines amino acids via Schlenk technique",
      "Analyzed using NMR, improved research efficiency by 75%"
    ]
  },
  {
    org: "ONSSA",
    role: "Trainee, Fish and Food Products",
    logo: "/logos/onssa.svg",
    duration: "Aug 2016 – Sep 2016",
    location: "Berkane, Oriental, Morocco",
    details: [
      "Worked on aflatoxins and food safety analysis",
      "Collected and examined samples, ensured lab standards compliance"
    ]
  },
  {
    org: "Université Mohammed Premier Oujda",
    role: "Research Assistant",
    logo: "/logos/ump.svg",
    duration: "Feb 2016 – Aug 2016",
    location: "Oujda, Morocco",
    details: [
      "Synthesized 4 new N-C linked pyrazole ligands",
      "Published 3 papers cited 23 times",
      "Ran DFT studies and improved research accuracy by 33%"
    ]
  },
  {
    org: "Everest Center",
    role: "Co-Founder and COO",
    logo: "/logos/everest.svg",
    duration: "May 2013 – Jun 2014",
    location: "Oujda, Morocco",
    details: [
      "Trained +250 students in IT, languages, and personal development",
      "Achieved 1000% ROI and >€10K in revenue in 12 months"
    ]
  }
];

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getOrganizationIcon = (org) => {
    const icons = {
      'Yellow Method': '💼',
      'University of Helsinki': '🎓',
      'Université Mohammed Premier Oujda': '🏫',
      'Université de Bourgogne': '🇫🇷',
      'ONSSA': '🔬',
      'Everest Center': '🎯',
      'default': '🏢'
    };
    return icons[org] || icons.default;
  };

  const getOrganizationColor = (org) => {
    const colors = {
      'Yellow Method': 'from-yellow-500 to-orange-500',
      'University of Helsinki': 'from-blue-500 to-indigo-500',
      'Université Mohammed Premier Oujda': 'from-green-500 to-emerald-500',
      'Université de Bourgogne': 'from-red-500 to-pink-500',
      'ONSSA': 'from-purple-500 to-violet-500',
      'Everest Center': 'from-indigo-500 to-purple-500',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[org] || colors.default;
  };

  return (
    <motion.div 
      id="experience" 
      className="py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A journey from academic research to business development
          </motion.p>
        </div>

        {/* Connected Tabs */}
        <div className="mb-12">
          {/* Connection Line */}
          <div className="relative mb-8">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto max-w-4xl" />
          </div>
          
          {/* Tabs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {experiences.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white shadow-lg scale-105 border-2 border-blue-500'
                    : 'bg-white/70 hover:bg-white/90 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Logo/Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getOrganizationColor(item.org)} flex items-center justify-center text-white text-lg mb-2`}>
                  {getOrganizationIcon(item.org)}
                </div>
                
                {/* Organization Name */}
                <h3 className="font-semibold text-gray-900 text-xs text-center leading-tight mb-1">
                  {item.org}
                </h3>
                
                {/* Role */}
                <p className="text-xs text-gray-600 text-center leading-tight">
                  {item.role}
                </p>
                
                {/* Active Indicator */}
                {activeTab === index && (
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full mt-2"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-blue-500"
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
              {/* Left Column - Organization Info */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getOrganizationColor(experiences[activeTab].org)} flex items-center justify-center text-white text-3xl mb-4`}>
                  {getOrganizationIcon(experiences[activeTab].org)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {experiences[activeTab].org}
                </h3>
                
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  {experiences[activeTab].role}
                </p>
                
                <p className="text-gray-500 text-sm mb-2">
                  {experiences[activeTab].duration}
                </p>
                
                {experiences[activeTab].location && (
                  <p className="text-gray-500 text-sm">
                    📍 {experiences[activeTab].location}
                  </p>
                )}
              </div>

              {/* Right Column - Details */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Responsibilities & Achievements
                </h4>
                
                <ul className="space-y-3">
                  {experiences[activeTab].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {detail}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Timeline; 