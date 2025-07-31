import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cvMap = [
  {
    id: "work",
    title: "Work Experience",
    icon: "💼",
    color: "from-blue-500 to-blue-700",
    children: [
      {
        title: "Business Development Manager",
        company: "Yellow Method",
        period: "Apr 2024 – Dec 2024",
        description: "Supported pitch decks, market research, HubSpot pipeline, etc.",
        details: [
          "Support in the creation of a compelling and persuasive pitch deck for potential investors",
          "Conduct comprehensive market research to identify trends, customer needs, and competitive landscape",
          "Develop and maintain a comprehensive database of potential investors, venture capitalists, and strategic partners",
          "Manage and optimize HubSpot pipeline usage"
        ]
      },
      {
        title: "Marie Curie Postdoctoral Fellow",
        company: "University of Helsinki",
        period: "Jun 2021 – Feb 2022",
        description: "Secured €22,000 Marie Skłodowska-Curie fellowship",
        details: [
          "Secured €22,000 Marie Skłodowska-Curie fellowship",
          "Synthesized and analyzed fluorinated polyamines as anticancer agents",
          "Maintained lab instruments and co-supervised a French engineering student"
        ]
      },
      {
        title: "Doctoral Researcher",
        company: "Université Mohammed Premier Oujda",
        period: "Dec 2016 – Nov 2020",
        description: "Synthesis, biological evaluation and in silico modeling of 36 new compounds",
        details: [
          "Synthesis, biological evaluation and in silico modeling of 36 new compounds",
          "Published 17 research papers with 241 citations",
          "Supervised 4 master's students and taught chemistry lab courses"
        ]
      }
    ]
  },
  {
    id: "volunteering",
    title: "Volunteering",
    icon: "🤝",
    color: "from-green-500 to-green-700",
    children: [
      {
        title: "Sustainability Group Lead",
        org: "Slush",
        period: "Sep 2023 – Dec 2023",
        description: "Led recycling ops for 13,000 attendees, praised internationally",
        details: [
          "Led and coached a group of volunteers",
          "Managed recycling & waste for 13,000+ attendees",
          "Collaborated with recycling partners, praised for international standards"
        ]
      },
      {
        title: "Head of Global Participants Acquisition",
        org: "Junction",
        period: "Aug 2023 – Nov 2023",
        description: "Led international outreach strategy and team coordination",
        details: [
          "Led a team for global participant outreach",
          "Created strategy, analyzed data, improved registrations",
          "Collaborated across departments"
        ]
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: "🎓",
    color: "from-purple-500 to-purple-700",
    children: [
      {
        title: "PhD in Organic Chemistry",
        org: "Université Mohammed Premier Oujda",
        period: "2016 – 2020",
        description: "Focus on medicinal and computational chemistry with 20+ scientific publications",
        details: [
          "Focus on medicinal and computational chemistry",
          "20+ scientific publications",
          "Research in drug discovery and development"
        ]
      },
      {
        title: "Master's in Chemistry",
        org: "Université Mohammed Premier Oujda",
        period: "2014 – 2016",
        description: "Advanced studies in organic synthesis and analytical chemistry",
        details: [
          "Advanced studies in organic synthesis",
          "Analytical chemistry and spectroscopy",
          "Research methodology and laboratory techniques"
        ]
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    icon: "⚡",
    color: "from-yellow-500 to-orange-600",
    children: [
      {
        title: "Technical Skills",
        category: "Programming & Tools",
        description: "Modern web development and data analysis",
        details: [
          "React, JavaScript, TypeScript",
          "Python, R for data analysis",
          "Git, Docker, AWS",
          "Power BI, Tableau"
        ]
      },
      {
        title: "Business Skills",
        category: "Leadership & Strategy",
        description: "Business development and team leadership",
        details: [
          "Business Development & Strategy",
          "Team Leadership & Management",
          "Market Research & Analysis",
          "Project Management"
        ]
      },
      {
        title: "Research Skills",
        category: "Scientific Research",
        description: "Advanced research methodologies and publications",
        details: [
          "Medicinal Chemistry",
          "Drug Discovery & Development",
          "Scientific Writing & Publications",
          "Laboratory Management"
        ]
      }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    icon: "🚀",
    color: "from-red-500 to-red-700",
    children: [
      {
        title: "Everest Center",
        category: "Educational Startup",
        period: "2013 – 2014",
        description: "Co-founded training center achieving 1000% ROI",
        details: [
          "Trained +250 students in IT, languages, and personal development",
          "Achieved 1000% ROI and >€10K in revenue in 12 months",
          "Developed comprehensive training programs"
        ]
      },
      {
        title: "Research Publications",
        category: "Scientific Contributions",
        period: "2016 – Present",
        description: "20+ peer-reviewed publications in medicinal chemistry",
        details: [
          "Published 17 research papers with 241 citations",
          "Co-authored multiple Q1 papers",
          "Contributed to scientific knowledge in drug discovery"
        ]
      }
    ]
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: "🏆",
    color: "from-indigo-500 to-indigo-700",
    children: [
      {
        title: "Effective Stakeholder Engagement",
        org: "Coursera",
        period: "Jul 2025",
        description: "Strategic approach to stakeholder management",
        details: [
          "Strategic stakeholder engagement methodologies",
          "Communication and relationship building",
          "Project stakeholder management"
        ]
      },
      {
        title: "Gender Analytics for Innovation",
        org: "University of Toronto",
        period: "Jul 2025",
        description: "Innovation through gender analytics",
        details: [
          "Gender analytics methodologies",
          "Innovation strategies",
          "Data-driven decision making"
        ]
      },
      {
        title: "McKinsey Forward Program",
        org: "McKinsey & Company",
        period: "Dec 2024",
        description: "Professional development and leadership skills",
        details: [
          "Leadership development",
          "Strategic thinking",
          "Professional growth"
        ]
      }
    ]
  }
];

const InteractiveCV = () => {
  const [expandedNode, setExpandedNode] = useState(null);
  const [isDark, setIsDark] = useState(true);

  const nodePositions = [
    { x: 0, y: -200 },    // Top
    { x: 200, y: -100 },  // Top Right
    { x: 200, y: 100 },   // Bottom Right
    { x: 0, y: 200 },     // Bottom
    { x: -200, y: 100 },  // Bottom Left
    { x: -200, y: -100 }, // Top Left
  ];

  const toggleNode = (nodeId) => {
    setExpandedNode(expandedNode === nodeId ? null : nodeId);
  };

  return (
    <motion.div 
      id="interactive-cv" 
      className={`min-h-screen relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-black' 
          : 'bg-gradient-to-br from-green-50 via-blue-50 to-purple-50'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Theme Toggle */}
      <motion.button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-6 right-6 z-50 p-3 rounded-full shadow-lg ${
          isDark 
            ? 'bg-white/20 text-white hover:bg-white/30' 
            : 'bg-gray-800/20 text-gray-800 hover:bg-gray-800/30'
        } backdrop-blur-md transition-all duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? '🌞' : '🌙'}
      </motion.button>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Interactive CV Network
            </motion.h2>
            <motion.p 
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Click on any node to explore my professional journey
            </motion.p>
          </div>

          {/* Network Container */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {cvMap.map((node, index) => (
                <motion.line
                  key={node.id}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${nodePositions[index].x}px)`}
                  y2={`calc(50% + ${nodePositions[index].y}px)`}
                  stroke={isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              ))}
            </svg>

            {/* Center Node (User) */}
            <motion.div
              className={`absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl flex flex-col items-center justify-center cursor-pointer ${
                isDark ? 'shadow-indigo-500/50' : 'shadow-indigo-500/30'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-1">👨‍💼</div>
              <div className="text-white text-sm font-semibold text-center leading-tight">
                Dr. Yassine Kaddouri
              </div>
              <div className="text-white/80 text-xs text-center mt-1">
                I turn ideas into MVPs
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 opacity-30 blur-xl" />
            </motion.div>

            {/* Category Nodes */}
            {cvMap.map((node, index) => (
              <motion.div
                key={node.id}
                className="absolute"
                style={{
                  left: `calc(50% + ${nodePositions[index].x}px)`,
                  top: `calc(50% + ${nodePositions[index].y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
              >
                {/* Node */}
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${node.color} shadow-xl flex flex-col items-center justify-center cursor-pointer relative ${
                    expandedNode === node.id ? 'ring-4 ring-white/50' : ''
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: isDark ? "0 0 30px rgba(255,255,255,0.3)" : "0 0 30px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleNode(node.id)}
                >
                  <div className="text-xl mb-1">{node.icon}</div>
                  <div className="text-white text-xs font-semibold text-center leading-tight">
                    {node.title}
                  </div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${node.color} opacity-30`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Expanded Content */}
          <AnimatePresence mode="wait">
            {expandedNode && (
              <motion.div
                key={expandedNode}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="mt-16 max-w-6xl mx-auto"
              >
                <div className={`p-6 rounded-2xl shadow-2xl backdrop-blur-md border ${
                  isDark 
                    ? 'bg-white/10 border-white/20 text-white' 
                    : 'bg-white/80 border-gray-200 text-gray-900'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cvMap.find(n => n.id === expandedNode).color} flex items-center justify-center text-2xl mr-4`}>
                      {cvMap.find(n => n.id === expandedNode).icon}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {cvMap.find(n => n.id === expandedNode).title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cvMap.find(n => n.id === expandedNode).children.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`p-4 rounded-xl border ${
                          isDark 
                            ? 'bg-white/5 border-white/10' 
                            : 'bg-white/50 border-gray-200'
                        }`}
                      >
                        <h4 className="font-semibold text-lg mb-2">
                          {item.title}
                        </h4>
                        {(item.company || item.org) && (
                          <p className={`font-medium mb-1 ${
                            isDark ? 'text-blue-300' : 'text-blue-600'
                          }`}>
                            {item.company || item.org}
                          </p>
                        )}
                        {item.period && (
                          <p className={`text-sm mb-2 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {item.period}
                          </p>
                        )}
                        <p className={`text-sm mb-3 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item.description}
                        </p>
                        
                        <ul className="space-y-1">
                          {item.details.map((detail, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (j * 0.05) }}
                              className={`flex items-start space-x-2 text-xs ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                              }`}
                            >
                              <span className={`mt-1 ${
                                isDark ? 'text-blue-400' : 'text-blue-600'
                              }`}>•</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveCV; 