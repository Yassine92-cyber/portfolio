import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: "Marina Repina",
    role: "Innovation Consultant",
    quote: "Yassine's guidance on customer surveys and market insights was key to our project's success. His leadership was supportive and empowering."
  },
  {
    name: "Svenja Fassbender",
    role: "Project Lead at Slush",
    quote: "Yassine inspired and motivated his team. His dedication to sustainability was contagious."
  },
  {
    name: "Raimo Ainla",
    role: "Mentor, Espoo Entrypoint",
    quote: "Yassine is open-minded, results-oriented, and empowering. A joy to mentor."
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What People Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Testimonials from colleagues and mentors
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Testimonial Slides */}
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                {/* Testimonial Card */}
                <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-8 right-8 text-8xl">💬</div>
                    <div className="absolute bottom-8 left-8 text-6xl">⭐</div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-8 left-8 text-4xl text-blue-200">"</div>

                  {/* Content */}
                  <div className="relative z-10 text-center max-w-3xl mx-auto">
                    {/* Quote */}
                    <motion.blockquote 
                      className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <motion.div
                className="bg-blue-600 h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        <motion.p 
          className="text-center text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Use arrow keys or swipe to navigate • Auto-advances every 5 seconds
        </motion.p>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 