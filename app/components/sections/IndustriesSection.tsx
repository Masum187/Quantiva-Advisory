'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Car, Heart, ShoppingBag, Monitor, 
  Network, Wifi, Cog, Droplet, Zap, Truck, 
  Package, Plane, ArrowRight
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
            
            // Extended description for hover state - industry specific
            const getExtendedDescription = () => {
              if (lang === 'de') {
                const descriptions: Record<string, string> = {
                  'Finance': 'Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen Finanzdienstleister bei der Digitalisierung ihrer Geschäftsprozesse und der Einhaltung strenger regulatorischer Anforderungen.',
                  'Automotive': 'Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen Automobilunternehmen bei der Digitalisierung ihrer Produktionsprozesse und der Einhaltung strenger regulatorischer Anforderungen.',
                  'Health & Life Sciences': 'Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen Pharma- und MedTech-Unternehmen bei der Digitalisierung ihrer Forschungs- und Produktionsprozesse und der Einhaltung strenger regulatorischer Anforderungen.',
                  'Retail & E-Commerce': 'Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen Handelsunternehmen bei der Digitalisierung ihrer Vertriebs- und Logistikprozesse und der Einhaltung strenger regulatorischer Anforderungen.',
                  'Chemical': 'Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen Chemieunternehmen bei der Digitalisierung ihrer Produktionsprozesse und der Einhaltung strenger regulatorischer Anforderungen.',
                };
                return descriptions[industry.title] || `Prozessoptimierung, Qualitätssicherung und Compliance: Wir unterstützen ${industry.title === 'IT & Technology' ? 'IT-Unternehmen' : industry.title === 'Internet' ? 'Internet-Unternehmen' : industry.title === 'Telecommunication' ? 'Telekommunikationsunternehmen' : industry.title === 'Mechanical Engineering' ? 'Maschinenbauunternehmen' : industry.title === 'Energy' ? 'Energieunternehmen' : industry.title === 'Oil & Gas' ? 'Öl- und Gasunternehmen' : industry.title === 'Utilities' ? 'Versorgungsunternehmen' : industry.title === 'Transport' ? 'Transportunternehmen' : industry.title === 'Logistics' ? 'Logistikunternehmen' : industry.title === 'Airlines' ? 'Fluggesellschaften' : industry.title === 'Shipping' ? 'Schifffahrtsunternehmen' : 'Unternehmen'} bei der Digitalisierung ihrer Prozesse und der Einhaltung strenger regulatorischer Anforderungen.`;
              } else {
                const descriptions: Record<string, string> = {
                  'Finance': 'Process optimization, quality assurance and compliance: We support financial services companies in digitalizing their business processes and meeting strict regulatory requirements.',
                  'Automotive': 'Process optimization, quality assurance and compliance: We support automotive companies in digitalizing their production processes and meeting strict regulatory requirements.',
                  'Health & Life Sciences': 'Process optimization, quality assurance and compliance: We support pharma and medtech companies in digitalizing their research and production processes and meeting strict regulatory requirements.',
                  'Retail & E-Commerce': 'Process optimization, quality assurance and compliance: We support retail companies in digitalizing their sales and logistics processes and meeting strict regulatory requirements.',
                  'Chemical': 'Process optimization, quality assurance and compliance: We support chemical companies in digitalizing their production processes and meeting strict regulatory requirements.',
                };
                return descriptions[industry.title] || `Process optimization, quality assurance and compliance: We support ${industry.title === 'IT & Technology' ? 'IT companies' : industry.title === 'Internet' ? 'internet companies' : industry.title === 'Telecommunication' ? 'telecommunications companies' : industry.title === 'Mechanical Engineering' ? 'mechanical engineering companies' : industry.title === 'Energy' ? 'energy companies' : industry.title === 'Oil & Gas' ? 'oil and gas companies' : industry.title === 'Utilities' ? 'utilities companies' : industry.title === 'Transport' ? 'transport companies' : industry.title === 'Logistics' ? 'logistics companies' : industry.title === 'Airlines' ? 'airlines' : industry.title === 'Shipping' ? 'shipping companies' : 'companies'} in digitalizing their processes and meeting strict regulatory requirements.`;
              }
            };
            const extendedDescription = getExtendedDescription();
            
            return (
              <motion.div key={industry.title} variants={item}>
                <Link
                  href={localePath(`/industries/${industry.slug}`)}
                  className="group relative block h-full min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-900/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
                >
                  {/* Vertical colored bar left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${barColor} transition-all duration-500 group-hover:w-1.5`} />
                  
                  {/* Vertical bar right (appears on hover) */}
                  <div className={`absolute right-0 top-0 bottom-0 w-1 ${barColor} opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-teal-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/20" />
                  </div>
                  
                  {/* Content - Default State */}
                  <div className="p-6 pl-8 relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-20px]">
                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="h-8 w-8 text-white transition-transform duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white">
                      {industry.title}
                    </h3>
                    
                    {/* Description - Short */}
                    <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                      {industry.description}
                    </p>
                    
                    {/* Projects badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                      <span>{industry.projects}+ {lang === 'de' ? 'Projekte' : 'projects'}</span>
                    </div>
                  </div>
                  
                  {/* Content - Hover State */}
                  <div className="absolute inset-0 p-6 pl-8 opacity-0 group-hover:opacity-100 translate-y-[20px] group-hover:translate-y-0 transition-all duration-500">
                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {industry.title}
                    </h3>
                    
                    {/* Extended Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {extendedDescription}
                    </p>
                    
                    {/* Projects - Large */}
                    <div className="mb-6">
                      <div className="text-3xl font-black text-white mb-1">
                        {industry.projects}+
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white">
                        {lang === 'de' ? 'PROJEKTE' : 'PROJECTS'}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex flex-col items-start gap-1 text-teal-300 font-semibold text-sm">
                      <span>{lang === 'de' ? 'MEHR' : 'MORE'}</span>
                      <div className="flex items-center gap-2">
                        <span>{lang === 'de' ? 'ERFAHREN' : 'LEARN'}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
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
