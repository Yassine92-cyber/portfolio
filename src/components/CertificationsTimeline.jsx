import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const certifications = [
  {
    id: 1,
    title: "Effective Stakeholder Engagement: A Strategic Approach",
    issuer: "Coursera",
    date: "Jul 2025",
    credentialId: "0QTYIXCZNT09",
    category: "Business"
  },
  {
    id: 2,
    title: "Gender Analytics for Innovation",
    issuer: "University of Toronto",
    date: "Jul 2025",
    credentialId: "RPUJ3NR8F0PR",
    category: "Research"
  },
  {
    id: 3,
    title: "ADVANCED TRAINING COURSE: Finnish Legal System",
    issuer: "Finnish Refugee Council",
    date: "Jun 2025",
    category: "Training"
  },
  {
    id: 4,
    title: "Training Course for Peer Supporters!",
    issuer: "Finnish Refugee Council",
    date: "Jun 2025",
    expires: "Jun 2029",
    category: "Training"
  },
  {
    id: 5,
    title: "Customer Success Foundations Professional Certificate",
    issuer: "ChurnZero",
    date: "Mar 2025",
    skills: ["Customer Success", "Customer Experience Management", "Customer Loyalty"],
    category: "Business"
  },
  {
    id: 6,
    title: "Power BI for Beginners: Build your First Report",
    issuer: "Coursera",
    date: "Feb 2025",
    credentialId: "CSCWGDMSTTTW",
    category: "AI"
  },
  {
    id: 7,
    title: "Public Speaking Skills Professional Certificate",
    issuer: "Toastmasters International",
    date: "Feb 2025",
    skills: ["Presentation Skills", "Public Speaking", "Speech Writing"],
    category: "Business"
  },
  {
    id: 8,
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "Dec 2024",
    category: "Business"
  },
  {
    id: 9,
    title: "Accenture Nordics - Consultant Job Simulation",
    issuer: "Forage",
    date: "Oct 2024",
    credentialId: "qg2s4f6C2g3KDyPSo",
    category: "Business"
  },
  {
    id: 10,
    title: "Unlocking Your Sales and Marketing Potentials with Data, AI, and Automation",
    issuer: "TechClass",
    date: "Oct 2024",
    category: "AI"
  },
  {
    id: 11,
    title: "GIT for Beginners",
    issuer: "KodeKloud",
    date: "Sep 2024",
    credentialId: "8de72a3f-2c14-4da1-8c71-7df750963f65",
    category: "AI"
  },
  {
    id: 12,
    title: "Mastering Generative AI with OpenAI",
    issuer: "KodeKloud",
    date: "Sep 2024",
    credentialId: "9b892c87-10a7-4cb6-8370-c12595f69dff",
    category: "AI"
  },
  {
    id: 13,
    title: "Train the trainer",
    issuer: "CodeRefinery",
    date: "Sep 2024",
    category: "Training"
  },
  {
    id: 14,
    title: "DECISION MAKING: HOW TO CHOOSE THE RIGHT PROBLEM TO SOLVE",
    issuer: "FutureLearn",
    date: "Aug 2024",
    category: "Business"
  },
  {
    id: 15,
    title: "Digital Marketing Growth Programme 2024",
    issuer: "Girls in Marketing",
    date: "Aug 2024",
    credentialId: "aed683f5-7e3a-4d8c-a3bd-059b6365001f",
    category: "Business"
  },
  {
    id: 16,
    title: "Getting Started with Building Custom GPTs",
    issuer: "LinkedIn",
    date: "Aug 2024",
    skills: ["Generative AI", "ChatGPT", "Chatbot Development"],
    category: "AI"
  },
  {
    id: 17,
    title: "Data Mastery for Entrepreneurs",
    issuer: "TechClass",
    date: "Jun 2024",
    skills: ["Data Analysis", "Artificial Intelligence (AI)"],
    category: "AI"
  },
  {
    id: 18,
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    date: "Jun 2024",
    category: "Business"
  },
  {
    id: 19,
    title: "Foundations of the Fourth Industrial Revolution (Industry 4.0)",
    issuer: "Project Management Institute",
    date: "Jun 2024",
    category: "Business"
  },
  {
    id: 20,
    title: "Webflow 101",
    issuer: "Webflow",
    date: "May 2024",
    category: "AI"
  },
  {
    id: 21,
    title: "Bioinformatics trainer",
    issuer: "CSC - IT Center for Science",
    date: "Dec 2021",
    category: "Research"
  },
  {
    id: 22,
    title: "Train-the-trainer online course for bioinformatics trainers",
    issuer: "CSC - IT Center for Science",
    date: "Dec 2021",
    category: "Training"
  },
  {
    id: 23,
    title: "Workshop for scRNA-seq data analysis trainers",
    issuer: "CSC - IT Center for Science",
    date: "Nov 2021",
    category: "Research"
  },
  {
    id: 24,
    title: "Schrodinger Maestro hands-on workshop",
    issuer: "CSC - IT Center for Science",
    date: "Oct 2021",
    category: "Research"
  },
  {
    id: 25,
    title: "Certified publons academy peer reviewer",
    issuer: "Publons",
    date: "Mar 2020",
    category: "Research"
  },
  {
    id: 26,
    title: "Certified professional trainer",
    issuer: "Expert foundation and academic secretary of expert foundation",
    date: "Jul 2016",
    category: "Training"
  },
  {
    id: 27,
    title: "Certified Practitioner of Hypnotherapy",
    issuer: "The mindcare organisation Ltd",
    date: "Dec 2013",
    category: "Training"
  },
  {
    id: 28,
    title: "Certified professional trainer",
    issuer: "International academies group",
    date: "Mar 2013",
    category: "Training"
  },
  {
    id: 29,
    title: "Certified Trainer in Personnal Strategic Planning",
    issuer: "IAPTLD Canada",
    date: "Apr 2012",
    category: "Training"
  }
];

const getCategoryColor = (category) => {
  const colors = {
    "AI": "bg-purple-100 text-purple-700 border-purple-200",
    "Business": "bg-blue-100 text-blue-700 border-blue-200",
    "Research": "bg-green-100 text-green-700 border-green-200",
    "Training": "bg-orange-100 text-orange-700 border-orange-200"
  };
  return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
};

const getIssuerIcon = (issuer) => {
  const icons = {
    "Coursera": "🎓",
    "University of Toronto": "🏫",
    "Finnish Refugee Council": "🤝",
    "ChurnZero": "📊",
    "Toastmasters International": "🎤",
    "McKinsey & Company": "💼",
    "Forage": "💻",
    "TechClass": "⚡",
    "KodeKloud": "🔧",
    "CodeRefinery": "🔬",
    "FutureLearn": "📚",
    "Girls in Marketing": "📈",
    "LinkedIn": "💼",
    "IBM": "🔵",
    "Project Management Institute": "📋",
    "Webflow": "🌐",
    "CSC - IT Center for Science": "🔬",
    "Publons": "📝",
    "Expert foundation and academic secretary of expert foundation": "🎯",
    "The mindcare organisation Ltd": "🧠",
    "International academies group": "🌍",
    "IAPTLD Canada": "🍁"
  };
  return icons[issuer] || "📜";
};

const CertificationsTimeline = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <motion.div 
      id="certifications" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl mx-4 sm:mx-6 lg:mx-8 shadow-sm"
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
            Certifications & Training
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Continuous learning and professional development across multiple domains
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => openModal(certification)}
            >
              {/* Category Tag */}
              {certification.category && (
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(certification.category)}`}>
                    {certification.category}
                  </span>
                  <div className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                    {getIssuerIcon(certification.issuer)}
                  </div>
                </div>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3 group-hover:text-blue-600 transition-colors">
                {certification.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm font-medium text-gray-700 mb-2">
                {certification.issuer}
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500 mb-3">
                Issued: {certification.date}
                {certification.expires && (
                  <span className="block text-xs text-orange-600">
                    Expires: {certification.expires}
                  </span>
                )}
              </p>

              {/* Credential ID */}
              {certification.credentialId && (
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-xs text-gray-600 mb-1">Credential ID:</p>
                  <p className="text-xs font-mono text-gray-800 break-all">
                    {certification.credentialId}
                  </p>
                </div>
              )}

              {/* Skills Preview */}
              {certification.skills && certification.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {certification.skills.slice(0, 2).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {certification.skills.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{certification.skills.length - 2} more
                    </span>
                  )}
                </div>
              )}

              {/* Click Indicator */}
              <div className="text-xs text-gray-400 text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Click for details
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 mb-4">
              {certifications.length} certifications across multiple domains
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>• {certifications.filter(c => c.category === 'AI').length} AI & Tech</span>
              <span>• {certifications.filter(c => c.category === 'Business').length} Business</span>
              <span>• {certifications.filter(c => c.category === 'Research').length} Research</span>
              <span>• {certifications.filter(c => c.category === 'Training').length} Training</span>
            </div>
          </div>
        </motion.div>
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
            {selectedCertification && (
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">
                      {getIssuerIcon(selectedCertification.issuer)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedCertification.title}</h3>
                      <p className="text-blue-600 font-medium">{selectedCertification.issuer}</p>
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
                  {/* Category */}
                  {selectedCertification.category && (
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedCertification.category)}`}>
                        {selectedCertification.category}
                      </span>
                    </div>
                  )}

                  {/* Date */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Issued Date</h4>
                    <p className="text-gray-700">{selectedCertification.date}</p>
                    {selectedCertification.expires && (
                      <p className="text-sm text-orange-600 mt-1">
                        Expires: {selectedCertification.expires}
                      </p>
                    )}
                  </div>

                  {/* Credential ID */}
                  {selectedCertification.credentialId && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Credential ID</h4>
                      <p className="text-sm font-mono text-gray-700 bg-gray-50 p-2 rounded break-all">
                        {selectedCertification.credentialId}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  {selectedCertification.skills && selectedCertification.skills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Gained</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertification.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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

export default CertificationsTimeline; 