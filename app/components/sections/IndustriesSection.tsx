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
  
  return (
    <Link
      href={localePath(`/industries/${industry.slug}`)}
      className="group relative block h-full overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      <div className="relative h-full flex p-6 md:p-8">
        {/* Vertical Colored Bar - Left */}
        <div className={`w-1 ${colorBar.color} rounded-full mr-6 flex-shrink-0`} />
        
        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
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
              whileHover={{ x: 5 }}
            >
              <span>{lang === 'de' ? 'MEHR ERFAHREN' : 'LEARN MORE'}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
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
