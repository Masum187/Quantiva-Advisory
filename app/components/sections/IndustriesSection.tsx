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
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  className="flex-shrink-0"
                  style={{
                    width: 'calc(33.333% - 1rem)',
                    minWidth: '350px',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={localePath(`/industries/${industry.slug}`)}
                    className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/60 backdrop-blur transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        width={500}
                        height={320}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                      <p className="mt-3 text-base text-gray-400">{industry.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-gray-400">
                        <span>{industry.projects}+ {lang === 'de' ? 'Projekte' : 'projects'}</span>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
