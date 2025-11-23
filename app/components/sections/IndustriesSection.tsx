'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { industriesDe, industriesEn } from '../../lib/data/industries';
import Link from 'next/link';
import { useLanguage } from '../QuantivaWebsite';

interface IndustriesSectionProps {
  lang: 'de' | 'en';
}


export default function IndustriesSection({ lang }: IndustriesSectionProps) {
  const industries = lang === 'de' ? industriesDe : industriesEn;
  const { localePath } = useLanguage();
  const headline = lang === 'de' ? 'Branchen-Expertise' : 'Industry Expertise';
  const subline =
    lang === 'de'
      ? 'Wir begleiten mittelständische Marktführer in regulierten und wachstumsstarken Branchen.'
      : 'We partner with mid-market leaders in regulated and fast-scaling industries.';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      // On desktop (lg): show 3 cards, on tablet (md): show 2 cards, on mobile: show 1 card
      const maxIndex = industries.length - 1;
      return prev < maxIndex ? prev + 1 : prev;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const canGoNext = currentIndex < industries.length - 1;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="relative z-10 bg-black/20 backdrop-blur-md py-20" id="industries">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.08),_transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-teal-500/40 bg-teal-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
            <Briefcase className="h-4 w-4" />
            {lang === 'de' ? 'Mittelstand Branchen' : 'Mid-Market Verticals'}
          </div>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">{headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 md:text-lg">{subline}</p>
        </motion.div>

        {/* Slider Container */}
        <div className="mt-14 relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex`}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / 3)}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {industries.map((industry, index) => {
                // Alternate between left and right animation
                const fromLeft = index % 2 === 0;
                return (
                <motion.div
                  key={industry.title}
                  className="flex-shrink-0"
                  style={{
                    width: 'calc(33.333% - 1rem)',
                    minWidth: '350px',
                  }}
                  initial={{ 
                    opacity: 0, 
                    x: fromLeft ? -100 : 100,
                    y: 30,
                    scale: 0.8,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <Link
                    href={localePath(`/industries/${industry.slug}`)}
                    className="group relative block h-full overflow-visible"
                  >
                    {/* 3D Card Container with Holographic Effect */}
                    <motion.div
                      className="relative h-full rounded-3xl overflow-hidden"
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: 5,
                        rotateX: -2,
                      }}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                      }}
                    >
                      {/* Animated Holographic Border */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          background: [
                            'linear-gradient(45deg, rgba(168, 85, 247, 0.6), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.6))',
                            'linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.6))',
                            'linear-gradient(225deg, rgba(236, 72, 153, 0.6), rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.6))',
                            'linear-gradient(315deg, rgba(168, 85, 247, 0.6), rgba(139, 92, 246, 0.4), rgba(99, 102, 241, 0.6))',
                          ],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      
                      {/* Main Card Content */}
                      <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                        {/* Floating Particles Background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-white/40"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -30, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 1.5, 0.5],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>

                        {/* Image Container with 3D Effect */}
                        <div className="relative h-64 overflow-hidden">
                          <motion.div
                            className="absolute inset-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                          >
                            <Image
                              src={industry.image}
                              alt={industry.title}
                              width={500}
                              height={320}
                              className="h-full w-full object-cover"
                            />
                          </motion.div>
                          
                          {/* Animated Gradient Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                            animate={{
                              background: [
                                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                                'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                              ],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          
                          {/* Iridescent Shine Effect */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.2) 100%)',
                              mixBlendMode: 'overlay',
                            }}
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 0.5,
                            }}
                          />
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 z-10">
                          {/* Title with Glow Effect */}
                          <h3 className="text-xl font-semibold text-white mb-3 relative">
                            <span className="relative z-10">{industry.title}</span>
                            <motion.span
                              className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                              style={{
                                background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.6), rgba(139, 92, 246, 0.4))',
                              }}
                            />
                          </h3>
                          
                          <p className="mt-3 text-base text-gray-300 leading-relaxed">{industry.description}</p>
                          
                          {/* Projects Badge with Animated Border */}
                          <motion.div
                            className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] text-gray-300 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                              animate={{
                                background: [
                                  'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
                                  'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                                  'linear-gradient(270deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
                                  'linear-gradient(360deg, transparent, rgba(168, 85, 247, 0.3), transparent)',
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            <span className="relative z-10">{industry.projects}+ {lang === 'de' ? 'Projekte' : 'projects'}</span>
                          </motion.div>
                        </div>

                        {/* Animated Corner Accents */}
                        <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <motion.div
                            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{
                              scaleX: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                            animate={{
                              scaleY: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <motion.div
                            className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-teal-400 to-transparent"
                            animate={{
                              scaleX: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <motion.div
                            className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-transparent via-teal-400 to-transparent"
                            animate={{
                              scaleY: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
