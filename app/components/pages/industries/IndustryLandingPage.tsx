'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Briefcase, CheckCircle, Phone, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import type { IndustryDetail } from '../../../lib/data/industryDetails';

interface IndustryLandingPageProps {
  industry: IndustryDetail;
  lang: 'de' | 'en';
}

// Circuit Board / Network Background Component
function CircuitBoardBackground() {
  const nodes: Array<{ x: number; y: number; size: number }> = [];
  const connections: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
  
  // Generate nodes in a grid-like pattern with some randomness
  for (let i = 0; i < 40; i++) {
    const x = 10 + (i % 8) * 12 + Math.random() * 3;
    const y = 10 + Math.floor(i / 8) * 15 + Math.random() * 3;
    const size = 2 + Math.random() * 3;
    nodes.push({ x, y, size });
  }
  
  // Generate connections between nearby nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[j].x - nodes[i].x;
      const dy = nodes[j].y - nodes[i].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Connect nodes that are close and aligned
      if (distance < 20 && (Math.abs(dx) < 5 || Math.abs(dy) < 5)) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
        });
      }
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Circuit Board Lines and Nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Circuit Lines - Horizontal and Vertical */}
        {connections.map((conn, i) => {
          // Create path with 90-degree turns (circuit board style)
          const midX = (conn.x1 + conn.x2) / 2;
          const midY = (conn.y1 + conn.y2) / 2;
          const isHorizontal = Math.abs(conn.x2 - conn.x1) > Math.abs(conn.y2 - conn.y1);
          
          let pathData = '';
          if (isHorizontal) {
            pathData = `M ${conn.x1} ${conn.y1} L ${midX} ${conn.y1} L ${midX} ${conn.y2} L ${conn.x2} ${conn.y2}`;
          } else {
            pathData = `M ${conn.x1} ${conn.y1} L ${conn.x1} ${midY} L ${conn.x2} ${midY} L ${conn.x2} ${conn.y2}`;
          }
          
          return (
            <motion.path
              key={`line-${i}`}
              d={pathData}
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="0.3"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.6 + Math.random() * 0.2],
              }}
              transition={{
                duration: 2 + Math.random(),
                ease: "easeOut",
                delay: i * 0.05,
              }}
            />
          );
        })}
        
        {/* Glowing Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#line-gradient)"
            filter="url(#glow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </svg>
      
      {/* Scattered Particles */}
      {[...Array(30)].map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: '2px',
              height: '2px',
              background: 'rgba(6, 182, 212, 0.6)',
              boxShadow: '0 0 4px rgba(6, 182, 212, 0.8)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
}

// Capabilities Grid Component
function CapabilitiesGrid({ capabilities }: { capabilities: IndustryDetail['capabilities'] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((capability, index) => (
        <motion.div
          key={capability.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="relative p-6 rounded-xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 rounded-br-xl" />
            
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-wider text-cyan-200">
              <Briefcase className="h-3 w-3" />
              {capability.title}
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">{capability.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Case Studies Grid Component
function CaseStudiesGrid({ caseStudies, lang }: { caseStudies: IndustryDetail['caseStudies']; lang: 'de' | 'en' }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {caseStudies.map((caseStudy, index) => (
        <motion.div
          key={caseStudy.client}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="relative group"
        >
          <div className="relative p-8 rounded-xl border border-purple-400/20 bg-slate-900/40 backdrop-blur-sm hover:border-pink-400/40 transition-all duration-300">
            {/* Pink Glow on Hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-purple-200/60 mb-1">
                    {lang === 'de' ? 'KUNDE' : 'CLIENT'}
                  </p>
                  <h3 className="text-xl font-bold text-white">{caseStudy.headline}</h3>
                </div>
                <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
                  {caseStudy.impact}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm mb-4">{caseStudy.description}</p>
              <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold">
                <span>{lang === 'de' ? 'Mehr erfahren' : 'Learn more'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function IndustryLandingPage({ industry, lang }: IndustryLandingPageProps) {
  const t = {
    de: {
      casesTitle: 'Referenzen & Praxisbeispiele',
      capabilitiesTitle: 'Was wir liefern',
      technologiesTitle: 'Technologien & Plattformen',
      statsTitle: 'Ergebnisse im Überblick',
      contactTitle: 'Ihr Ansprechpartner',
      contactCta: 'Intro-Gespräch vereinbaren',
      focusAreas: 'Fokusthemen',
      overview: 'Überblick',
    },
    en: {
      casesTitle: 'Selected Client Stories',
      capabilitiesTitle: 'What we deliver',
      technologiesTitle: 'Technologies & Platforms',
      statsTitle: 'Results at a glance',
      contactTitle: 'Your contact',
      contactCta: 'Schedule intro call',
      focusAreas: 'Focus topics',
      overview: 'Overview',
    },
  }[lang];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-slate-950">
      {/* Circuit Board Background */}
      <div className="fixed inset-0 z-0">
        <CircuitBoardBackground />
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Pink Accent Line */}
            <div className="mb-6 h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500" />
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              {industry.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              {industry.hero.subtitle}
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              {industry.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-4xl font-black text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 space-y-24">
        {/* Overview Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-cyan-400" />
                <span className="text-sm uppercase tracking-widest text-cyan-400">{t.overview}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{industry.name}</h2>
            </div>
            
            <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {industry.overview.introduction}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-cyan-400 mb-4">{t.focusAreas}</h3>
                {industry.overview.focusAreas.map((area) => (
                  <div key={area.title} className="p-4 rounded-lg border border-cyan-400/20 bg-cyan-500/5">
                    <h4 className="font-semibold text-white mb-1">{area.title}</h4>
                    <p className="text-sm text-gray-400">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Technologies Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-purple-400" />
                <span className="text-sm uppercase tracking-widest text-purple-400">{t.technologiesTitle}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {industry.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Capabilities Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-cyan-400" />
                <span className="text-sm uppercase tracking-widest text-cyan-400">{t.capabilitiesTitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.capabilitiesTitle}</h2>
            </div>
            <CapabilitiesGrid capabilities={industry.capabilities} />
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-12 bg-pink-400" />
                <span className="text-sm uppercase tracking-widest text-pink-400">{t.casesTitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.casesTitle}</h2>
            </div>
            <CaseStudiesGrid caseStudies={industry.caseStudies} lang={lang} />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-1 w-12 bg-cyan-400" />
                  <span className="text-sm uppercase tracking-widest text-cyan-400">{t.contactTitle}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{t.contactTitle}</h2>
                <p className="text-lg text-gray-300 mb-2">{industry.contact.name}</p>
                <p className="text-sm text-gray-400 mb-6">{industry.contact.role}</p>
                
                <div className="space-y-3 mb-6">
                  <a
                    href={`mailto:${industry.contact.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {industry.contact.email}
                  </a>
                </div>
                
                <Link
                  href={lang === 'de' ? '/de/contact' : '/en/contact'}
                  className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-cyan-200 font-semibold hover:bg-cyan-500/20 transition-colors"
                >
                  {t.contactCta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="relative h-64 w-full rounded-xl overflow-hidden border border-cyan-400/20">
                <Image
                  src={industry.contact.image}
                  alt={industry.contact.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
