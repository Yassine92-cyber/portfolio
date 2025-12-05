import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Technical",
    items: [
      "Python", "JavaScript", "Bioinformatics", "Computational Chemistry",
      "DFT", "Molecular Dynamics", "R", "Power BI"
    ]
  },
  {
    category: "AI & Data",
    items: [
      "Machine Learning", "Deep Learning", "ChatGPT", "Generative AI",
      "Data Analysis", "AI for Business"
    ]
  },
  {
    category: "Leadership",
    items: [
      "Team Management", "Mentoring", "Public Speaking", "Product Development",
      "Event Leadership", "Coaching"
    ]
  },
  {
    category: "Research & Academia",
    items: [
      "Organic Synthesis", "Medicinal Chemistry", "Research", "NMR",
      "Publication Writing", "Grant Writing", "Student Supervision"
    ]
  },
  {
    category: "Business & Communication",
    items: [
      "CRM (HubSpot)", "Sales", "Customer Success", "Strategic Thinking",
      "Collaboration", "Multitasking", "Problem Solving"
    ]
  }
];

const getCategoryColor = (category) => {
  const colors = {
    "Technical": "from-blue-500 to-cyan-500",
    "AI & Data": "from-purple-500 to-pink-500",
    "Leadership": "from-green-500 to-emerald-500",
    "Research & Academia": "from-orange-500 to-red-500",
    "Business & Communication": "from-indigo-500 to-blue-600"
  };
  return colors[category] || "from-gray-500 to-gray-600";
};

const getCategoryIcon = (category) => {
  const icons = {
    "Technical": "⚙️",
    "AI & Data": "🤖",
    "Leadership": "👔",
    "Research & Academia": "🔬",
    "Business & Communication": "💼"
  };
  return icons[category] || "💡";
};

const SkillsGrid = () => {
  return (
    <motion.div 
      id="skills" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A diverse skill set spanning technical, research, and business domains
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(skillGroup.category)} flex items-center justify-center text-white text-xl mr-4`}>
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skillGroup.category}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {skillGroup.items.length} skills
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium text-center cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: groupIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#e0e7ff",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Versatile Skill Set
            </h3>
            <p className="text-gray-600">
              Combining technical expertise with business acumen and research capabilities
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-500">
              <span>• {skills.length} Categories</span>
              <span>• Cross-Domain Expertise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsGrid; 