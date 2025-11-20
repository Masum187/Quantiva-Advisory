'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCard } from '../../services/AnimatedCard';
import { ArrowRight, BarChart3, Briefcase, CheckCircle, Layers, Phone, Sparkles, TrendingUp } from 'lucide-react';
import type { IndustryDetail } from '../../../lib/data/industryDetails';

interface IndustryLandingPageProps {
  industry: IndustryDetail;
  lang: 'de' | 'en';
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
    },
    en: {
      casesTitle: 'Selected Client Stories',
      capabilitiesTitle: 'What we deliver',
      technologiesTitle: 'Technologies & Platforms',
      statsTitle: 'Results at a glance',
      contactTitle: 'Your contact',
      contactCta: 'Schedule intro call',
      focusAreas: 'Focus topics',
    },
  }[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Modern with organic curves */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-teal-400 py-24 md:py-32">
        {/* Organic curve separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,120 Q300,60 600,80 T1200,100 L1200,120 Z"
              fill="black"
              className="opacity-100"
            />
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg"
            >
              <Sparkles className="h-4 w-4" />
              {industry.hero.badge}
            </motion.div>
            <h1 className="mb-6 text-5xl font-black text-white md:text-7xl lg:text-8xl leading-tight">
              {industry.hero.title}
            </h1>
            <p className="text-xl text-white/90 md:text-2xl max-w-3xl leading-relaxed">
              {industry.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-20 bg-black">
        {/* Who We Are Section - Modern dark cards */}
        <section className="relative">
          {/* Background gradient sphere */}
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-full blur-3xl opacity-50" />
          
          <div className="relative">
            <AnimatedCard direction="up" className="bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">Who We Are</h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {industry.overview.focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-2xl p-6 shadow-md border border-white/10 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {industry.overview.introduction}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Stats Section - Modern cards */}
        <section>
          <AnimatedCard direction="up" className="bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-black mb-10 text-white text-center">
              {t.statsTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {industry.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-purple-900/40 to-teal-900/40 rounded-2xl p-8 shadow-md border border-white/10 text-center"
                >
                  <TrendingUp className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
                  <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </section>

        {/* Technologies Section */}
        <section>
          <AnimatedCard direction="up" className="bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-white">
              {t.technologiesTitle}
            </h2>
            <div className="flex flex-wrap gap-4">
              {industry.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedCard>
        </section>

        {/* Services Section - Modern dark cards grid */}
        <section className="relative">
          {/* Background gradient */}
          <div className="absolute -right-32 top-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full blur-3xl opacity-50" />
          
          <div className="relative">
            <AnimatedCard direction="up" className="bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{t.capabilitiesTitle}</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  {industry.overview.introduction}
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {industry.capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-2xl transition-all"
                  >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                      <Briefcase className="h-4 w-4" />
                      {capability.title}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{capability.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Case Studies - Modern cards */}
        <section>
          <AnimatedCard direction="up" className="bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-white">{t.casesTitle}</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {industry.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.client}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-900/40 to-teal-900/40 rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-2xl transition-all"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-2">{caseStudy.client}</p>
                      <h3 className="text-2xl font-bold text-white mb-3">{caseStudy.headline}</h3>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-purple-500 to-teal-500 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-md">
                      {caseStudy.impact}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{caseStudy.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </section>

        {/* Contact Section - Modern dark card */}
        <section>
          <AnimatedCard direction="up" className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border border-white/10 p-10 md:p-12">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full blur-3xl -mr-48 -mt-48" />
            
            <div className="relative grid gap-8 lg:grid-cols-[1fr_320px] items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.contactTitle}</h2>
                <p className="text-xl font-semibold text-white mb-2">
                  {industry.contact.name}
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  {industry.contact.role}
                </p>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="font-medium">{industry.contact.email}</span>
                  </p>
                  {industry.contact.phone ? (
                    <p className="flex items-center gap-3 text-gray-300">
                      <Phone className="h-5 w-5 text-purple-400" />
                      <span className="font-medium">{industry.contact.phone}</span>
                    </p>
                  ) : null}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  {t.contactCta}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={industry.contact.image}
                  alt={industry.contact.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedCard>
        </section>
      </main>
    </div>
  );
}

