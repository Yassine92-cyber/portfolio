import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', color: 'bg-gray-500' },
    { id: 'research', name: 'Research', color: 'bg-blue-500' },
    { id: 'social', name: 'Social Impact', color: 'bg-green-500' },
    { id: 'creative', name: 'Creative', color: 'bg-purple-500' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryColor = (category) => {
    const categoryObj = categories.find(cat => cat.id === category);
    return categoryObj ? categoryObj.color : 'bg-gray-500';
  };

  const getTechColor = (tech) => {
    const colors = [
      'bg-blue-100 text-blue-700',
      'bg-purple-100 text-purple-700',
      'bg-green-100 text-green-700',
      'bg-orange-100 text-orange-700',
      'bg-pink-100 text-pink-700',
      'bg-teal-100 text-teal-700',
      'bg-indigo-100 text-indigo-700',
      'bg-red-100 text-red-700'
    ];
    return colors[tech.length % colors.length];
  };

  return (
    <motion.div 
      id="projects" 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive portfolio of research projects, academic work, and creative endeavors spanning chemistry, drug discovery, and community impact
          </motion.p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${filter === category.id 
                    ? `${category.color} text-white shadow-lg` 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Card */}
              <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-400 opacity-50">
                      {project.category === 'research' && '🔬'}
                      {project.category === 'social' && '🤝'}
                      {project.category === 'creative' && '✍️'}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Date and Organization */}
                  <div className="mb-3">
                    {project.date && (
                      <p className="text-sm text-gray-500 mb-1">
                        📅 {project.date}
                      </p>
                    )}
                    {project.organization && (
                      <p className="text-sm text-blue-600 font-medium">
                        🏢 {project.organization}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`${getTechColor(tech)} px-2 py-1 rounded-md text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-400 text-sm font-medium py-2 px-4 rounded-lg text-center cursor-not-allowed">
                        Research Project
                      </div>
                    )}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center"
                      >
                        View Code
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-400 text-sm font-medium py-2 px-4 rounded-lg text-center cursor-not-allowed">
                        Academic Work
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try selecting a different category to see more projects.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectShowcase; 