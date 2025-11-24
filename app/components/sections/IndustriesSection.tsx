'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { industriesDe, industriesEn, type IndustryShowcase } from '../../lib/data/industries';
import Link from 'next/link';
import { useLanguage } from '../QuantivaWebsite';

interface IndustriesSectionProps {
  lang: 'de' | 'en';
}

interface IndustryCardProps {
  industry: IndustryShowcase;
  lang: 'de' | 'en';
  localePath: (path: string) => string;
  isLarge: boolean;
}

function IndustryCard({ industry, lang, localePath, isLarge }: IndustryCardProps) {
  return (
    <Link
      href={localePath(`/industries/${industry.slug}`)}
      className="group relative block h-full overflow-hidden rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className={`flex-1 p-8 md:p-12 flex flex-col justify-between ${isLarge ? 'md:w-1/2' : ''}`}>
          {/* Purple Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-purple-500/20 border border-purple-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200">
              {lang === 'de' ? 'BRANCHE' : 'INDUSTRY'}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white mb-4 ${isLarge ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
            {industry.title}
          </h3>

          {/* Description */}
          <p className={`text-gray-300 leading-relaxed mb-8 ${isLarge ? 'text-lg md:text-xl' : 'text-base'}`}>
            {industry.description}
          </p>

          {/* Projects Count */}
          <div className="text-sm text-gray-400 mb-6">
            {industry.projects}+ {lang === 'de' ? 'Projekte' : 'projects'}
          </div>

          {/* White Circular Button */}
          <motion.div
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </motion.div>
        </div>

        {/* Right Side - Iridescent Abstract Shape */}
        <div className={`relative ${isLarge ? 'md:w-1/2 h-64 md:h-auto' : 'h-48 md:h-full'} overflow-hidden`}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={industry.image}
              alt={industry.title}
              width={600}
              height={400}
              className="h-full w-full object-cover opacity-30"
            />
          </div>

          {/* Iridescent Abstract Shape */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.3) 30%, transparent 60%)',
                'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.3) 30%, transparent 60%)',
                'radial-gradient(circle at 50% 70%, rgba(236, 72, 153, 0.4) 0%, rgba(99, 102, 241, 0.3) 30%, transparent 60%)',
                'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.3) 30%, transparent 60%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Additional Glowing Blobs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full blur-3xl"
            style={{
              background: 'rgba(168, 85, 247, 0.3)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full blur-2xl"
            style={{
              background: 'rgba(45, 212, 191, 0.3)',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </Link>
  );
}

export default function IndustriesSection({ lang }: IndustriesSectionProps) {
  const industries = lang === 'de' ? industriesDe : industriesEn;
  const { localePath } = useLanguage();
  const headline = lang === 'de' ? 'Branchen-Expertise' : 'Industry Expertise';
  const subline =
    lang === 'de'
      ? 'Wir begleiten mittelständische Marktführer in regulierten und wachstumsstarken Branchen.'
      : 'We partner with mid-market leaders in regulated and fast-scaling industries.';

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

        {/* Infinite Scrolling Carousel */}
        <div className="mt-14 overflow-hidden relative">
          <div 
            className="flex gap-6"
            style={{
              animation: `scroll-left ${industries.length * 6}s linear infinite`,
            }}
          >
            {/* Duplicate items for seamless loop */}
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={`${industry.slug}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px]"
              >
                <IndustryCard 
                  industry={industry} 
                  lang={lang} 
                  localePath={localePath}
                  isLarge={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
