'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Car, Heart, ShoppingBag, Monitor, Network, Wifi, Cog, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../QuantivaWebsite';
import casesData from '../../lib/data/cases.json';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Car,
  Heart,
  ShoppingBag,
  Monitor,
  Network,
  Wifi,
  Cog,
  Briefcase,
};

interface CaseStudiesSectionProps {
  lang: 'de' | 'en';
}

export default function CaseStudiesSection({ lang }: CaseStudiesSectionProps) {
  const { localePath } = useLanguage();
  const [iconsAnimated, setIconsAnimated] = useState(false);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Trigger icon animation when section comes into view
  useEffect(() => {
    if (isInView && !iconsAnimated) {
      setIconsAnimated(true);
    }
  }, [isInView, iconsAnimated]);

  // Get specific case studies from cases.json
  const getCaseStudy = (slug: string) => {
    return casesData.find(c => c.slug === slug);
  };

  // Featured case (FlowGrid OS or first available)
  const featuredCase = getCaseStudy('flowgrid-os') || casesData[0];
  const featuredTitle = lang === 'de' ? featuredCase?.titleDe : featuredCase?.titleEn;
  const featuredDescription = lang === 'de' 
    ? 'FlowGrid OS hat unsere Teamkollaboration revolutioniert. AI-gestützt und zukunftssicher.'
    : 'FlowGrid OS has revolutionized our team collaboration. AI-supported and future-proof.';

  // Grid cases (OrchestIQ, Proofroom, SkillLedger or next 3)
  const gridCases = [
    getCaseStudy('orchestiq') || casesData[1],
    getCaseStudy('proofroom') || casesData[2],
    getCaseStudy('skillledger') || casesData[3],
  ].filter(Boolean);

  const gridCaseTitles = [
    { de: 'OrchestIQ - Automation AI', en: 'OrchestIQ - Automation AI' },
    { de: 'Proofroom - AI Sales & Marketing Platform', en: 'Proofroom - AI Sales & Marketing Platform' },
    { de: 'SkillLedger - AI School Ledger', en: 'SkillLedger - AI School Ledger' },
  ];

  const gridCaseDescriptions = [
    { 
      de: 'OrchestIQ automatisiert unsere komplexesten Prozesse. Intelligent und zuverlässig.',
      en: 'OrchestIQ automates our most complex processes. Intelligent and reliable.'
    },
    { 
      de: 'Proofroom hat unser Sales und Marketing transformiert. AI-gestützt und messbar.',
      en: 'Proofroom has transformed our sales and marketing. AI-supported and measurable.'
    },
    { 
      de: 'SkillLedger modernisiert Bildung mit AI. Effizient, transparent und zukunftsorientiert.',
      en: 'SkillLedger modernizes education with AI. Efficient, transparent and future-oriented.'
    },
  ];

  // Industry icons that will animate into this section
  const industryIcons = [
    { icon: 'TrendingUp', color: 'teal', x: 10, y: 20 },
    { icon: 'Car', color: 'purple', x: 30, y: 40 },
    { icon: 'Heart', color: 'green', x: 50, y: 10 },
    { icon: 'ShoppingBag', color: 'green', x: 70, y: 30 },
    { icon: 'Monitor', color: 'blue', x: 15, y: 50 },
    { icon: 'Network', color: 'pink', x: 85, y: 15 },
    { icon: 'Wifi', color: 'orange', x: 25, y: 60 },
    { icon: 'Cog', color: 'yellow', x: 75, y: 45 },
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black via-purple-900/20 to-black py-24 overflow-hidden">
      {/* Animated background with floating industry icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {industryIcons.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Briefcase;
          const colorClasses: Record<string, string> = {
            teal: 'text-teal-400',
            purple: 'text-purple-400',
            green: 'text-green-400',
            blue: 'text-blue-400',
            pink: 'text-pink-400',
            orange: 'text-orange-400',
            yellow: 'text-yellow-400',
          };
          return (
            <motion.div
              key={index}
              className="absolute opacity-20"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: -200,
                y: -200,
              }}
              animate={iconsAnimated ? {
                opacity: 0.2,
                scale: 1,
                x: 0,
                y: 0,
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 2,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <IconComponent 
                className={`w-12 h-12 ${colorClasses[item.color] || 'text-teal-400'}`}
                style={{
                  filter: 'blur(2px)',
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <motion.h2 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {lang === 'de' ? 'Designed for real world use.' : 'Designed for real world use.'}
          </motion.h2>
          
          <motion.a
            href={localePath('/cases')}
            className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === 'de' ? 'GEHE ZU REFERENZEN' : 'GO TO CASE STUDIES'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Featured Case Study (Large Top Card) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href={localePath(`/cases/${featuredCase?.slug || ''}`)}>
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-teal-500/10 to-green-500/10 opacity-50" />
              
              <div className="relative z-10">
                {/* Case Study Badge */}
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-semibold mb-6">
                  CASE STUDY
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {featuredTitle || 'FlowGrid OS - AI Collaboration'}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl">
                  {featuredDescription}
                </p>

                {/* CTA Button */}
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full text-black"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Grid of 3 Smaller Case Studies */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {gridCases.map((caseItem, index) => (
            <motion.div
              key={caseItem?.slug || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={localePath(`/cases/${caseItem?.slug || ''}`)}>
                <motion.div
                  className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 overflow-hidden group cursor-pointer h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-teal-500/10 to-green-500/10 opacity-50" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Case Study Badge */}
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-semibold mb-4 w-fit">
                      CASE STUDY
                    </div>

                    {/* Title */}
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                      {gridCaseTitles[index]?.[lang] || (lang === 'de' ? caseItem?.titleDe : caseItem?.titleEn)}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                      {gridCaseDescriptions[index]?.[lang] || (lang === 'de' ? caseItem?.subtitleDe : caseItem?.subtitleEn)}
                    </p>

                    {/* CTA Button */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black mt-auto"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Partner Status, KPIs & Customer Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {lang === 'de' ? 'VERTRAUEN & NACHWEISE' : 'TRUST & PROOF'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {lang === 'de' ? 'Partnerstatus, KPIs & Kundenstimmen' : 'Partner Status, KPIs & Customer Testimonials'}
              </h2>
            </div>
            <Link
              href={localePath('/cases')}
              className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white hover:border-white/40 transition-colors"
            >
              {lang === 'de' ? 'Alle Erfolgsstories →' : 'All Success Stories →'}
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'SAP PartnerEdge', badge: 'Gold Partner', icon: 'SAP' },
              { name: 'Microsoft Solutions Partner', badge: 'Digital & App Innovation', icon: 'AZURE' },
              { name: 'AWS Select Consulting', badge: lang === 'de' ? 'Migration & Modernisierung' : 'Migration & Modernization', icon: 'AWS' },
              { name: 'ISO 27001', badge: 'Security & Compliance', icon: 'ISO' },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-white mb-2">{partner.icon}</div>
                <div className="text-sm text-gray-300 mb-1">{partner.name}</div>
                <div className="text-xs text-gray-400">{partner.badge}</div>
              </motion.div>
            ))}
          </div>

          {/* KPIs */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                value: '38%', 
                label: lang === 'de' ? 'Ø ROI NACH 12 MONATEN' : 'AVG. ROI AFTER 12 MONTHS',
                subtitle: lang === 'de' ? 'Mittelstandsprogramme' : 'Mid-market programs'
              },
              { 
                value: '92%', 
                label: lang === 'de' ? 'KUNDENZUFRIEDENHEIT' : 'CUSTOMER SATISFACTION',
                subtitle: 'NPS FY24'
              },
              { 
                value: '45', 
                label: lang === 'de' ? 'REALISIERTE PROJEKTE' : 'REALIZED PROJECTS',
                subtitle: lang === 'de' ? 'DACH Mittelstand' : 'DACH Mid-market'
              },
            ].map((kpi, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-3">{kpi.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">{kpi.label}</div>
                <div className="text-xs text-gray-400">{kpi.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

