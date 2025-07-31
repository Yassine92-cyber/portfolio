import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    quote: "Yassine's ability to inspire and motivate his group members towards a shared goal was truly commendable. His enthusiasm and belief in sustainability were contagious.",
    name: "Svenja Fassbender",
    role: "Project Lead",
    company: "Slush",
    avatar: "SF"
  },
  {
    id: 2,
    quote: "Yassine's guidance on launching a customer survey and interpreting market insights was key to our success. He was supportive, empowering, and easy to work with.",
    name: "Marina Repina",
    role: "Innovation Consultant",
    company: "Former Marketing Director",
    avatar: "MR"
  },
  {
    id: 3,
    quote: "Yassine is a joy to work with — positive, focused, and collaborative. He's a standout contributor in any team.",
    name: "Petra Paavola",
    role: "UX/UI Designer",
    company: "Freelance",
    avatar: "PP"
  },
  {
    id: 4,
    quote: "Yassine is a connector. His flexible, human-centered leadership and attention to detail made a big impact on our project.",
    name: "Marii Juht",
    role: "Founder",
    company: "Intero Integration",
    avatar: "MJ"
  },
  {
    id: 5,
    quote: "Yassine is a brilliant results-oriented individual and inclusive team player. Open-minded, diligent, and reliable.",
    name: "Raimo Ainla",
    role: "Mentor",
    company: "Espoo Entrypoint",
    avatar: "RA"
  },
  {
    id: 6,
    quote: "Yassine's collaboration skills and initiative shone bright during our time together at Junction and Slush. A hardworking, diligent leader.",
    name: "Shayaan Ahmed",
    role: "Student",
    company: "Geberit | Aalto | EIT Manufacturing",
    avatar: "SA"
  },
  {
    id: 7,
    quote: "Yassine's leadership and organizational skills were instrumental during Slush. An inspiring and dependable group lead.",
    name: "Tamila Gvozdeva",
    role: "Business Student",
    company: "University",
    avatar: "TG"
  },
  {
    id: 8,
    quote: "Yassine went above and beyond as a volunteer — always reliable and proactive. He directly impacted the success of Arctic15.",
    name: "Nihal Koymatli",
    role: "Marketing Lead",
    company: "Xes Marketing | Fulbright Alumna",
    avatar: "NK"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 2; // lg and above
      if (window.innerWidth >= 768) return 2;  // md and above
      return 1; // mobile
    }
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, maxIndex, nextSlide]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + slidesPerView);

  return (
    <motion.div 
      id="testimonials" 
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
            What People Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Testimonials from colleagues, mentors, and collaborators
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`flex-1 min-w-0 ${
                      slidesPerView === 1 ? 'w-full' : 'w-1/2'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-white rounded-xl shadow-md p-6 h-full hover:shadow-lg transition-all duration-300">
                      {/* Quote */}
                      <div className="mb-6">
                        <svg
                          className="w-8 h-8 text-blue-500 mb-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center space-x-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {testimonial.avatar}
                        </div>
                        
                        {/* Name and Role */}
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="bg-gray-200 rounded-full h-1">
              <motion.div
                className="bg-blue-600 h-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentIndex + 1} of {maxIndex + 1}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCarousel; 