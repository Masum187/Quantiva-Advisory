import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, PauseIcon, PlayIcon, HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';
import casesData from '../lib/data/cases.json';

type ReferencesSliderProps = {
  lang: 'de' | 'en';
};

export default function ReferencesSlider({ lang }: ReferencesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Filtere nur Cases mit Quotes (Referenzen)
  const references = casesData
    .filter(c => c.quote && (lang === 'de' ? c.quote.textDe : c.quote.textEn))
    .map(c => ({
      id: c.slug,
      company: c.quote?.author || (lang === 'de' ? 'Kunde' : 'Client'),
      quote: lang === 'de' ? c.quote?.textDe : c.quote?.textEn,
      industry: c.industry,
      category: c.category,
      logo: c.heroImage,
      title: lang === 'de' ? c.titleDe : c.titleEn,
    }));

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered || references.length <= 1 || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % references.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, references.length, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Drag functionality
  const handleDragStart = (event: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(event.clientX);
    setIsPlaying(false);
  };

  const handleDragMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = event.clientX - dragStart;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  if (references.length === 0) {
    return null;
  }

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      rotateX: -15,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: -50,
      rotateX: 15,
      filter: "blur(10px)",
      transition: { duration: 0.3 }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header with enhanced animations */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <SparklesIcon className="h-5 w-5 text-teal-400" />
            <span className="text-sm font-medium text-teal-300">
              {lang === 'de' ? 'Kundenstimmen' : 'Customer Voices'}
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-teal-100 to-teal-300 bg-clip-text text-transparent">
            {lang === 'de' ? 'Was unsere Kunden sagen' : 'What our clients say'}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'de' 
              ? 'Erfolgsgeschichten aus verschiedenen Branchen und Technologien' 
              : 'Success stories from various industries and technologies'
            }
          </p>
        </motion.div>

        {/* Main Testimonial Card with enhanced design */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              <div 
                className="relative group cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 40px 80px rgba(20, 184, 166, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Background Image */}
                  {references[currentIndex].logo && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-20 group-hover:opacity-30"
                      style={{ backgroundImage: `url(${references[currentIndex].logo})` }}
                      variants={backgroundVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  )}

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-black/80 rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(20, 184, 166, 0.5), transparent)",
                      padding: "2px",
                    }}
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent, rgba(20, 184, 166, 0.5), transparent)",
                        "linear-gradient(225deg, transparent, rgba(20, 184, 166, 0.5), transparent)",
                        "linear-gradient(45deg, transparent, rgba(20, 184, 166, 0.5), transparent)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-black/95 rounded-3xl" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon with animation */}
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500/30 to-teal-600/20 rounded-2xl backdrop-blur-sm border border-teal-500/40 shadow-lg">
                        <svg
                          className="h-10 w-10 text-teal-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                    </motion.div>

                    {/* Quote Text with enhanced typography */}
                    <motion.blockquote 
                      className="text-3xl md:text-4xl font-medium text-white leading-relaxed mb-8 relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-6xl text-teal-400/30 font-serif absolute -top-4 -left-2">"</span>
                      <span className="relative z-10">{references[currentIndex].quote}</span>
                      <span className="text-6xl text-teal-400/30 font-serif absolute -bottom-8 -right-2">"</span>
                    </motion.blockquote>

                    {/* Author Info with enhanced design */}
                    <motion.div 
                      className="flex flex-col md:flex-row md:items-center justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="mb-6 md:mb-0">
                        <motion.p 
                          className="text-xl font-bold text-teal-400 mb-2"
                          whileHover={{ x: 5 }}
                        >
                          {references[currentIndex].company}
                        </motion.p>
                        <p className="text-sm text-gray-300 mb-4">
                          {references[currentIndex].title}
                        </p>
                      </div>
                      
                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-3">
                        <motion.span 
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500/30 to-teal-600/20 text-teal-300 border border-teal-500/40 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {references[currentIndex].industry}
                        </motion.span>
                        <motion.span 
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-slate-700/60 to-slate-800/40 text-gray-200 border border-slate-600/50 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {references[currentIndex].category}
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Enhanced Rating Stars */}
                    <motion.div 
                      className="mt-8 flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <StarIcon className="h-6 w-6 text-yellow-400 fill-current drop-shadow-lg" />
                        </motion.div>
                      ))}
                      <span className="ml-3 text-sm text-gray-300 font-medium">
                        {lang === 'de' ? '5.0/5.0' : '5.0/5.0'}
                      </span>
                      <motion.div
                        className="ml-4 flex items-center gap-1 text-red-400"
                        whileHover={{ scale: 1.1 }}
                      >
                        <HeartIcon className="h-4 w-4 fill-current" />
                        <span className="text-xs font-medium">Loved</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Controls */}
          {references.length > 1 && (
            <motion.div 
              className="flex items-center justify-center mt-12 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Previous Button */}
              <motion.button
                onClick={prevSlide}
                className="group p-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 hover:from-teal-500/20 hover:to-teal-600/10 border border-white/20 hover:border-teal-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={lang === 'de' ? 'Vorheriges Testimonial' : 'Previous testimonial'}
              >
                <ChevronLeftIcon className="h-6 w-6 text-white group-hover:text-teal-400 transition-colors" />
              </motion.button>

              {/* Play/Pause Button */}
              <motion.button
                onClick={togglePlayPause}
                className="group p-4 rounded-full bg-gradient-to-r from-teal-500/30 to-teal-600/20 hover:from-teal-500/40 hover:to-teal-600/30 border border-teal-500/40 hover:border-teal-500/60 transition-all duration-300 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? (lang === 'de' ? 'Pausieren' : 'Pause') : (lang === 'de' ? 'Abspielen' : 'Play')}
              >
                {isPlaying ? (
                  <PauseIcon className="h-6 w-6 text-teal-400 group-hover:text-teal-300 transition-colors" />
                ) : (
                  <PlayIcon className="h-6 w-6 text-teal-400 group-hover:text-teal-300 transition-colors" />
                )}
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                className="group p-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 hover:from-teal-500/20 hover:to-teal-600/10 border border-white/20 hover:border-teal-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={lang === 'de' ? 'Nächstes Testimonial' : 'Next testimonial'}
              >
                <ChevronRightIcon className="h-6 w-6 text-white group-hover:text-teal-400 transition-colors" />
              </motion.button>
            </motion.div>
          )}

          {/* Enhanced Dots Indicator */}
          {references.length > 1 && (
            <motion.div 
              className="flex justify-center mt-8 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {references.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-teal-400 to-teal-500 scale-125 shadow-lg shadow-teal-500/50'
                      : 'bg-white/30 hover:bg-white/50 hover:scale-110'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`${lang === 'de' ? 'Testimonial' : 'Testimonial'} ${index + 1}`}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: '50+', label: lang === 'de' ? 'Zufriedene Kunden' : 'Satisfied Clients', icon: '👥' },
            { value: '95%', label: lang === 'de' ? 'Projekt-Erfolgsrate' : 'Project Success Rate', icon: '📈' },
            { value: '24/7', label: lang === 'de' ? 'Support verfügbar' : 'Support Available', icon: '🚀' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}