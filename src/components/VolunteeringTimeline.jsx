import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const volunteering = [
  {
    org: "Slush",
    role: "Sustainability Group Lead",
    logo: "/logos/slush.svg",
    duration: "Sep 2023 – Dec 2023",
    details: [
      "Led and coached a group of volunteers",
      "Managed recycling & waste for 13,000+ attendees",
      "Collaborated with recycling partners, praised for international standards"
    ]
  },
  {
    org: "Junction",
    role: "Head of Global Participants Acquisition",
    logo: "/logos/junction.svg",
    duration: "Aug 2023 – Nov 2023",
    details: [
      "Led a team for global participant outreach",
      "Created strategy, analyzed data, improved registrations",
      "Collaborated across departments"
    ]
  },
  {
    org: "Arctic15",
    role: "Volunteer & Matchmaker",
    logo: "/logos/arctic15.svg",
    duration: "May 2023 – Jun 2023",
    details: [
      "Onboarded 600+ startups and investors in 2 days",
      "Facilitated 400+ matchmaking meetings",
      "Represented venue to VIP LPs"
    ]
  },
  {
    org: "Frontiers",
    role: "Review Editor",
    logo: "/logos/frontiers.svg",
    duration: "Nov 2023 – Present",
    details: [
      "Review Editor at Frontiers in Experimental Pharmacology and Drug Discovery"
    ]
  }
];

const VolunteeringTimeline = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getOrganizationIcon = (org) => {
    const icons = {
      'Slush': '🌱',
      'Junction': '🚀',
      'Arctic15': '❄️',
      'Frontiers': '🔬',
      'default': '🤝'
    };
    return icons[org] || icons.default;
  };

  const getOrganizationColor = (org) => {
    const colors = {
      'Slush': 'from-green-500 to-emerald-500',
      'Junction': 'from-purple-500 to-indigo-500',
      'Arctic15': 'from-blue-500 to-cyan-500',
      'Frontiers': 'from-orange-500 to-red-500',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[org] || colors.default;
  };

  return (
    <motion.div 
      id="volunteering" 
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
            Volunteering & Community
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Making a positive impact through community engagement and leadership
          </motion.p>
        </div>

        {/* Connected Tabs */}
        <div className="mb-12">
          {/* Connection Line */}
          <div className="relative mb-8">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto max-w-4xl" />
          </div>
          
          {/* Tabs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {volunteering.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-white shadow-lg scale-105 border-2 border-indigo-500'
                    : 'bg-white/70 hover:bg-white/90 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Logo/Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getOrganizationColor(item.org)} flex items-center justify-center text-white text-xl mb-3`}>
                  {getOrganizationIcon(item.org)}
                </div>
                
                {/* Organization Name */}
                <h3 className="font-semibold text-gray-900 text-sm text-center leading-tight mb-1">
                  {item.org}
                </h3>
                
                {/* Role */}
                <p className="text-xs text-gray-600 text-center leading-tight">
                  {item.role}
                </p>
                
                {/* Active Indicator */}
                {activeTab === index && (
                  <motion.div
                    className="w-2 h-2 bg-indigo-500 rounded-full mt-2"
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
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-t-4 border-indigo-500"
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
              {/* Left Column - Organization Info */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${getOrganizationColor(volunteering[activeTab].org)} flex items-center justify-center text-white text-3xl mb-4`}>
                  {getOrganizationIcon(volunteering[activeTab].org)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {volunteering[activeTab].org}
                </h3>
                
                <p className="text-lg text-indigo-600 font-semibold mb-2">
                  {volunteering[activeTab].role}
                </p>
                
                <p className="text-gray-500 text-sm">
                  {volunteering[activeTab].duration}
                </p>
              </div>

              {/* Right Column - Details */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Responsibilities & Achievements
                </h4>
                
                <ul className="space-y-3">
                  {volunteering[activeTab].details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
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

export default VolunteeringTimeline; 