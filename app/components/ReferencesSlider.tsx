import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import casesData from '../lib/data/cases.json';

type ReferencesSliderProps = {
  lang: 'de' | 'en';
};

export default function ReferencesSlider({ lang }: ReferencesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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
    if (!isPlaying || isHovered || references.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % references.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, references.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (references.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lang === 'de' ? 'Was unsere Kunden sagen' : 'What our clients say'}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {lang === 'de' 
                ? 'Erfolgsgeschichten aus verschiedenen Branchen und Technologien' 
                : 'Success stories from various industries and technologies'
              }
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div 
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background Image */}
                {references[currentIndex].logo && (
                  <div
                    className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${references[currentIndex].logo})` }}
                  />
                )}

                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-2xl backdrop-blur-sm border border-teal-500/30">
                    <svg
                      className="h-8 w-8 text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                  &ldquo;{references[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-teal-400 mb-2">
                      {references[currentIndex].company}
                    </p>
                    <p className="text-sm text-gray-300 mb-4 md:mb-0">
                      {references[currentIndex].title}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-sm">
                      {references[currentIndex].industry}
                    </span>
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-slate-700/60 text-gray-200 border border-slate-600/50 backdrop-blur-sm">
                      {references[currentIndex].category}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="relative z-10 mt-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">
                    {lang === 'de' ? '5.0/5.0' : '5.0/5.0'}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {references.length > 1 && (
            <div className="flex items-center justify-center mt-8 gap-4">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="group p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                aria-label={lang === 'de' ? 'Vorheriges Testimonial' : 'Previous testimonial'}
              >
                <ChevronLeftIcon className="h-6 w-6 text-white group-hover:text-teal-400 transition-colors" />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="group p-3 rounded-full bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm"
                aria-label={isPlaying ? (lang === 'de' ? 'Pausieren' : 'Pause') : (lang === 'de' ? 'Abspielen' : 'Play')}
              >
                {isPlaying ? (
                  <PauseIcon className="h-6 w-6 text-teal-400 group-hover:text-teal-300 transition-colors" />
                ) : (
                  <PlayIcon className="h-6 w-6 text-teal-400 group-hover:text-teal-300 transition-colors" />
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="group p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                aria-label={lang === 'de' ? 'Nächstes Testimonial' : 'Next testimonial'}
              >
                <ChevronRightIcon className="h-6 w-6 text-white group-hover:text-teal-400 transition-colors" />
              </button>
            </div>
          )}

          {/* Dots Indicator */}
          {references.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {references.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`${lang === 'de' ? 'Testimonial' : 'Testimonial'} ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-gray-300">
              {lang === 'de' ? 'Zufriedene Kunden' : 'Satisfied Clients'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
            <div className="text-gray-300">
              {lang === 'de' ? 'Projekt-Erfolgsrate' : 'Project Success Rate'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-gray-300">
              {lang === 'de' ? 'Support verfügbar' : 'Support Available'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}