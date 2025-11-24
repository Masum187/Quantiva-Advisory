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
  index: number;
}

// Color bars for different cards (rotating colors)
const colorBars = [
  { color: 'bg-cyan-400', border: 'border-cyan-400' },
  { color: 'bg-purple-400', border: 'border-purple-400' },
  { color: 'bg-teal-400', border: 'border-teal-400' },
  { color: 'bg-green-400', border: 'border-green-400' },
];

function IndustryCard({ industry, lang, localePath, index }: IndustryCardProps & { index: number }) {
  const colorBar = colorBars[index % colorBars.length];
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <motion.div
      className="group relative h-full overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      animate={{
        scale: isExpanded ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={localePath(`/industries/${industry.slug}`)}
        className="block h-full"
      >
        <div className="relative h-full flex p-6 md:p-8">
          {/* Vertical Colored Bar - Left */}
          <motion.div 
            className={`w-1 ${colorBar.color} rounded-full mr-6 flex-shrink-0`}
            animate={{
              width: isExpanded ? '4px' : '4px',
              opacity: isExpanded ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-between relative overflow-hidden">
            {/* Title with Bar */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                {industry.description}
              </p>
            </div>

            {/* Bottom Section - Metric and CTA */}
            <div className="flex items-end justify-between mt-auto">
              {/* Metric */}
              <div className="text-2xl md:text-3xl font-black text-white">
                {industry.projects}+ {lang === 'de' ? 'PROJEKTE' : 'PROJECTS'}
              </div>

              {/* CTA Button */}
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-teal-400 transition-colors"
                animate={{
                  x: isExpanded ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span>{lang === 'de' ? 'MEHR ERFAHREN' : 'LEARN MORE'}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Expandable Content - Slides in from right */}
            <motion.div
              className="absolute inset-y-0 right-0 bg-gradient-to-l from-slate-800/95 to-transparent backdrop-blur-sm"
              initial={{ x: '100%', opacity: 0 }}
              animate={{
                x: isExpanded ? '0%' : '100%',
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              style={{
                width: isExpanded ? '50%' : '0%',
              }}
            >
              <div className="h-full flex flex-col justify-center items-center p-6">
                {/* Image Preview */}
                <motion.div
                  className="relative w-full h-48 rounded-xl overflow-hidden mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: isExpanded ? 1 : 0.8,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: isExpanded ? 0 : 20,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                    {lang === 'de' ? 'Erfolgreiche Projekte' : 'Successful Projects'}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {lang === 'de' ? 'Mittelstand & Enterprise' : 'Mid-Market & Enterprise'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
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
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{headline}</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {lang === 'de' ? 'LIVE DATEN' : 'LIVE DATA'}
              </span>
            </div>
          </div>
          <p className="text-base text-gray-400 max-w-3xl">{subline}</p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.slice(0, 4).map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
            >
              <IndustryCard 
                industry={industry} 
                lang={lang} 
                localePath={localePath}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
