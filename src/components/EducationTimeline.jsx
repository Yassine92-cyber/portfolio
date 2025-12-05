import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const education = [
  {
    institution: "University Mohammed First Oujda",
    degree: "PhD, Organic Chemistry, Medicinal Chemistry and Computational Chemistry",
    date: "Dec 2016 – Nov 2020",
    grade: "High distinction",
    activities: [
      "AIESEC",
      "SMS network",
      "NGOs",
      "Event management",
      "Training",
      "Continuous learning"
    ],
    skills: [
      "Critical Thinking",
      "Research",
      "Computational Chemistry",
      "Collaboration",
      "Communication",
      "Organic Synthesis",
      "Multitasking",
      "Problem Solving",
      "Medicinal Chemistry",
      "Density Functional Theory (DFT)",
      "Student Supervision"
    ]
  },
  {
    institution: "University Chouaïb Doukkali El Jadida",
    degree: "Master, Chemistry",
    date: "Oct 2014 – Aug 2016",
    activities: ["Continuous learning", "Networking"],
    skills: [
      "Critical Thinking",
      "Research",
      "Organic Synthesis",
      "Multitasking",
      "Problem Solving"
    ]
  },
  {
    institution: "University Mohammed First Oujda",
    degree: "Bachelor of Science – BS, Chemistry",
    date: "Sep 2010 – Jul 2014",
    activities: [
      "Training administrator",
      "Project manager",
      "Consultant",
      "Professional trainer"
    ],
    skills: []
  }
];

const EducationTimeline = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const getInstitutionIcon = (institution) => {
    const icons = {
      'University Mohammed First Oujda': '🎓',
      'University Chouaïb Doukkali El Jadida': '🏫',
      'default': '🎓'
    };
    return icons[institution] || icons.default;
  };

  const getInstitutionColor = (institution) => {
    const colors = {
      'University Mohammed First Oujda': 'from-indigo-500 to-purple-500',
      'University Chouaïb Doukkali El Jadida': 'from-blue-500 to-indigo-500',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[institution] || colors.default;
  };

  const categories = [
    { id: 'all', name: 'All', count: education.length },
    { id: 'phd', name: 'PhD', count: education.filter(e => e.degree.includes('PhD')).length },
    { id: 'masters', name: 'Master', count: education.filter(e => e.degree.includes('Master')).length },
    { id: 'bachelor', name: 'Bachelor', count: education.filter(e => e.degree.includes('Bachelor')).length }
  ];

  const filteredEducation = activeTab === 'all' 
    ? education 
    : education.filter(edu => {
        switch (activeTab) {
          case 'phd': return edu.degree.includes('PhD');
          case 'masters': return edu.degree.includes('Master');
          case 'bachelor': return edu.degree.includes('Bachelor');
          default: return true;
        }
      });

  const openModal = (education) => {
    setSelectedEducation(education);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEducation(null);
  };

  return (
    <motion.div 
      id="education" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-8 shadow-sm"
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
            Education & Research
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic journey and research achievements
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEducation.map((edu, index) => (
            <motion.div
              key={index}
              onClick={() => openModal(edu)}
              className="cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 ease-in-out h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getInstitutionColor(edu.institution)} flex items-center justify-center text-white text-xl mb-3`}>
                  {getInstitutionIcon(edu.institution)}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                  {edu.degree}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-xs text-gray-500 mb-2">{edu.date}</p>
                {edu.grade && (
                  <p className="text-xs text-green-600 font-medium mb-2">{edu.grade}</p>
                )}
                <p className="text-xs text-gray-500">
                  {(edu.activities?.length || 0)} activities • {(edu.skills?.length || 0)} skills
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Modal */}
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal} open={isModalOpen}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <motion.div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {selectedEducation && (
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getInstitutionColor(selectedEducation.institution)} flex items-center justify-center text-white text-xl`}>
                      {getInstitutionIcon(selectedEducation.institution)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedEducation.degree}</h3>
                      <p className="text-indigo-600 font-medium">{selectedEducation.institution}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="text-gray-900 font-medium">{selectedEducation.date}</p>
                  </div>

                  {selectedEducation.grade && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Grade</p>
                      <p className="text-green-600 font-medium">{selectedEducation.grade}</p>
                    </div>
                  )}

                  {selectedEducation.activities && selectedEducation.activities.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Activities & Societies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEducation.activities.map((activity, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedEducation.skills && selectedEducation.skills.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEducation.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default EducationTimeline; 