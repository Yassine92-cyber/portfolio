import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      id="contact" 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-900 via-purple-800 to-black text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lamps.png" 
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
                    />
                  </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-purple-800/50 to-black/50"></div>

      {/* Background Network Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Connection Nodes */}
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-40"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
            <motion.div
          className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <motion.line
            x1="5%"
            y1="10%"
            x2="25%"
            y2="20%"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="75%"
            y1="15%"
            x2="95%"
            y2="25%"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
                    </svg>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* Contact section is now empty - can be removed or used for other content */}
        </div>
    </motion.div>
  );
};

export default Contact; 