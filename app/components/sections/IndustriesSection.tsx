'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Car, Heart, ShoppingBag, Monitor, 
  Network, Wifi, Cog, Droplet, Zap, Truck, 
  Package, Plane
} from 'lucide-react';
import { industriesDe, industriesEn } from '../../lib/data/industries';
import Link from 'next/link';
import { useLanguage } from '../QuantivaWebsite';

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
  Droplet,
  Zap,
  Truck,
  Package,
  Plane,
};

// Color mapping
const colorMap: Record<string, string> = {
  teal: 'bg-teal-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
  orange: 'bg-orange-500',
  yellow: 'bg-yellow-500',
};

interface IndustriesSectionProps {
  lang: 'de' | 'en';
}

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15 * i,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function IndustriesSection({ lang }: IndustriesSectionProps) {
  const industries = lang === 'de' ? industriesDe : industriesEn;
  const { localePath } = useLanguage();
  const headline = lang === 'de' ? 'Branchen-Expertise' : 'Industry Expertise';
  const subline =
    lang === 'de'
      ? 'Wir begleiten mittelständische Marktführer in regulierten und wachstumsstarken Branchen.'
      : 'We partner with mid-market leaders in regulated and fast-scaling industries.';

  return (
    <section className="relative bg-black py-20" id="industries">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.08),_transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
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

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon ? iconMap[industry.icon] : Briefcase;
            const barColor = industry.color ? colorMap[industry.color] || 'bg-teal-500' : 'bg-teal-500';
            
            return (
              <motion.div key={industry.title} variants={item}>
                <Link
                  href={localePath(`/industries/${industry.slug}`)}
                  className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
                >
                  {/* Vertical colored bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${barColor}`} />
                  
                  {/* Content */}
                  <div className="p-6 pl-8">
                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors">
                      {industry.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-400">{industry.description}</p>
                    
                    {/* Projects badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      <span>{industry.projects}+ {lang === 'de' ? 'Projekte' : 'projects'}</span>
                    </div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
