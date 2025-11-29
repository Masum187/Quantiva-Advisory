'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  ArrowRight, 
  TrendingUp, 
  Heart, 
  Cpu, 
  ShoppingBag, 
  Building2, 
  Factory, 
  Zap, 
  Truck, 
  Plane, 
  Ship, 
  Wifi, 
  Fuel, 
  Battery, 
  Droplets,
  Activity,
  BarChart3,
  Network
} from 'lucide-react';
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
  { color: 'bg-blue-400', border: 'border-blue-400' },
  { color: 'bg-pink-400', border: 'border-pink-400' },
  { color: 'bg-orange-400', border: 'border-orange-400' },
  { color: 'bg-yellow-400', border: 'border-yellow-400' },
];

// Industry Icons Mapping
const getIndustryIcon = (slug: string) => {
  const iconMap: Record<string, any> = {
    'financial-services': BarChart3,
    'manufacturing': Factory,
    'health-life-sciences': Heart,
    'retail-ecommerce': ShoppingBag,
    'it-technology': Cpu,
    'internet': Network,
    'telecommunications': Wifi,
    'mechanical-engineering': Building2,
    'chemical': Droplets,
    'energy': Battery,
    'oil-gas': Fuel,
    'utilities': Zap,
    'transport': Truck,
    'logistics': Truck,
    'airlines': Plane,
    'shipping': Ship,
  };
  return iconMap[slug] || Briefcase;
};

function IndustryCard({ industry, lang, localePath, index }: IndustryCardProps & { index: number }) {
  const colorBar = colorBars[index % colorBars.length];
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = getIndustryIcon(industry.slug);
  const gradientId = `icon-gradient-${industry.slug}-${index}`;
  const gradientIdExpanded = `icon-gradient-expanded-${industry.slug}-${index}`;
  
  return (
    <motion.div
      className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={localePath(`/industries/${industry.slug}`)}
        className="block h-full"
      >
        {/* Closed State - Color Bar + Icon + Industry Name with Neon Glow */}
        <motion.div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl flex flex-col items-center justify-center pl-4 pr-4 md:pl-6 md:pr-6"
          animate={{
            height: isExpanded ? '0%' : '100%',
            opacity: isExpanded ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Top Section - Icon with Neon Glow */}
          <motion.div
            className="mb-6 relative flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Neon Glow Effect - Background Blur */}
            <div 
              className="absolute inset-0 blur-2xl opacity-70"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(168, 85, 246, 0.8) 100%)',
                width: '80px',
                height: '80px',
                margin: '-40px',
              }}
            />
            {/* Icon with Gradient Stroke */}
            <Icon 
              className="relative w-16 h-16 md:w-20 md:h-20"
              style={{
                stroke: `url(#${gradientId})`,
                filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 16px rgba(167, 139, 250, 0.6))',
              }}
              strokeWidth={1.5}
            />
            {/* SVG Gradient Definition */}
            <svg className="absolute w-0 h-0">
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Bottom Section - Vertical Bar + Industry Name */}
          <div className="flex items-center w-full">
            {/* Vertical Colored Bar */}
            <motion.div
              className={`w-3 ${colorBar.color} rounded-full h-16 shadow-lg mr-4 flex-shrink-0`}
              style={{
                boxShadow: `0 10px 20px -5px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.5)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.5)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.5)').replace('bg-green-400', 'rgba(74, 222, 128, 0.5)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.5)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.5)').replace('bg-orange-400', 'rgba(251, 146, 60, 0.5)').replace('bg-yellow-400', 'rgba(250, 204, 21, 0.5)')}`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Industry Name with Neon Glow */}
            <h3 
              className="text-xl md:text-2xl font-bold leading-tight text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.3)',
              }}
            >
              {industry.title}
            </h3>
          </div>
        </motion.div>

        {/* Expanded State - Full Card opening from top */}
        <motion.div
          className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ y: '-100%' }}
          animate={{
            y: isExpanded ? '0%' : '-100%',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          whileHover={{
            boxShadow: `0 20px 40px -10px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.3)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.3)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.3)').replace('bg-green-400', 'rgba(74, 222, 128, 0.3)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.3)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.3)').replace('bg-orange-400', 'rgba(251, 146, 60, 0.3)').replace('bg-yellow-400', 'rgba(250, 204, 21, 0.3)')}`,
          }}
        >
          {/* Animated Background Glow */}
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 ${colorBar.color} blur-3xl`}
            animate={{
              scale: isExpanded ? [1, 1.2, 1] : 1,
              opacity: isExpanded ? [0, 0.2, 0.1] : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative h-full flex pl-4 pr-4 md:pl-6 md:pr-6 py-6 md:py-8 z-10">
            {/* Vertical Colored Bar - Left with Pulse Animation */}
            <motion.div
              className={`w-1.5 ${colorBar.color} rounded-full mr-4 flex-shrink-0 shadow-lg`}
              animate={{
                scaleY: isExpanded ? [1, 1.1, 1] : 1,
                opacity: isExpanded ? [0.8, 1, 0.8] : 0.8,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Top Section - Icon + Title with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 20,
                }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                {/* Icon with Neon Glow */}
                <motion.div
                  className="mb-4 relative inline-flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Neon Glow Effect - Background Blur */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-60"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(168, 85, 246, 0.6) 100%)',
                      width: '60px',
                      height: '60px',
                      margin: '-30px',
                    }}
                  />
                  {/* Icon with Gradient Stroke */}
                  <Icon 
                    className="relative w-12 h-12 md:w-14 md:h-14"
                    style={{
                      stroke: `url(#${gradientIdExpanded})`,
                      filter: 'drop-shadow(0 0 6px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 12px rgba(167, 139, 250, 0.6))',
                    }}
                    strokeWidth={1.5}
                  />
                  {/* SVG Gradient Definition */}
                  <svg className="absolute w-0 h-0">
                    <defs>
                      <linearGradient id={gradientIdExpanded} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Title with Neon Glow */}
                <h3 
                  className="text-xl md:text-2xl font-bold mb-2 leading-tight text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.3)',
                  }}
                >
                  {industry.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-400 leading-relaxed mb-2 text-xs">
                  {industry.description}
                </p>
              </motion.div>

              {/* Detailed Content with Animation */}
              {industry.content && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    y: isExpanded ? 0 : 20,
                  }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 flex-1 overflow-y-auto"
                >
                  <p className="text-white leading-relaxed text-xs">
                    {industry.content}
                  </p>
                </motion.div>
              )}

              {/* Bottom Section - Metric and CTA */}
              <motion.div
                className="flex items-end justify-between mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 20,
                }}
                transition={{ delay: 0.3 }}
              >
                {/* Metric with Pulse Animation */}
                <div className="flex flex-col">
                  <motion.div
                    className="text-2xl md:text-3xl font-black text-white mb-0.5"
                    animate={{
                      scale: isExpanded ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                  >
                    {industry.projects}+
                  </motion.div>
                  <div className="text-base md:text-lg font-black text-white">
                    {lang === 'de' ? 'PROJEKTE' : 'PROJECTS'}
                  </div>
                </div>

                {/* CTA Button with Enhanced Animation - Vertical Stack */}
                <motion.div
                  className="flex flex-col items-end gap-0.5 text-teal-400 font-semibold"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs">{lang === 'de' ? 'MEHR' : 'LEARN'}</span>
                  <span className="text-xs">{lang === 'de' ? 'ERFAHREN' : 'MORE'}</span>
                  <motion.div
                    className="mt-0.5"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
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

        {/* Grid Layout - All Industries */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              className="min-h-[400px] md:min-h-[450px]"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.08,
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }}
              whileHover={{ y: -8 }}
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
