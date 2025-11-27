'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedCard } from '../../services/AnimatedCard';
import { ArrowRight, BarChart3, Briefcase, CheckCircle, Layers, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import type { IndustryDetail } from '../../../lib/data/industryDetails';

interface IndustryLandingPageProps {
  industry: IndustryDetail;
  lang: 'de' | 'en';
}

// Capabilities Slider Component
function CapabilitiesSlider({ capabilities }: { capabilities: IndustryDetail['capabilities'] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, capabilities.length - 2); // Show 2 cards at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * 50}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="flex-shrink-0"
              style={{
                width: 'calc(50% - 0.75rem)',
                minWidth: '400px',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-3xl border border-white/10 bg-slate-900/20 backdrop-blur-md h-full">
                <div className="mb-4 inline-flex rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-teal-200">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {capability.title}
                </div>
                <p className="text-gray-300 leading-relaxed text-base">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Case Studies Slider Component
function CaseStudiesSlider({ caseStudies }: { caseStudies: IndustryDetail['caseStudies'] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, caseStudies.length - 2); // Show 2 cards at a time

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 hidden md:flex"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * 50}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              className="flex-shrink-0"
              style={{
                width: 'calc(50% - 0.75rem)',
                minWidth: '450px',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 rounded-3xl border border-white/10 bg-purple-900/20 backdrop-blur-md h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-purple-200/80">{caseStudy.client}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{caseStudy.headline}</h3>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-white/80">
                    {caseStudy.impact}
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed text-base">{caseStudy.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
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
    <div className="min-h-screen text-white relative overflow-hidden bg-slate-950">
      {/* Dark Background with Subtle Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Dark Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          }}
        />
        
        {/* Subtle Purple/Blue Gradient Overlays */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          }}
        />
        
        {/* Subtle Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'rgba(139, 92, 246, 0.1)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'rgba(59, 130, 246, 0.1)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                {industry.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {industry.hero.subtitle}
              </p>
              
              {/* 3D Abstract Object - Floating on Left */}
              <motion.div
                className="absolute -left-20 -top-10 w-64 h-64 opacity-20"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15],
                  y: [0, -20, 0],
                }}
                transition={{
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-transparent blur-3xl" />
              </motion.div>
            </motion.div>

            {/* Right Side - Gradient Card Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-600/40 via-blue-600/40 to-purple-800/40 backdrop-blur-md border border-white/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-purple-200 mb-2">
                      {lang === 'de' ? 'Branche' : 'Industry'}
                    </h3>
                    <p className="text-purple-100 text-lg">
                      {industry.overview.introduction.substring(0, 100)}...
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-purple-200 mb-2">
                      {lang === 'de' ? 'Fokus' : 'Focus'}
                    </h3>
                    <p className="text-purple-100 text-lg">
                      {industry.overview.focusAreas[0]?.title || industry.hero.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20 space-y-24">
        {/* Overview */}
        <AnimatedCard direction="up" className="p-10 rounded-3xl border border-white/10 bg-slate-900/20 backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {industry.overview.introduction}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-teal-300 mb-3">{t.focusAreas}</h3>
              <ul className="space-y-4">
                {industry.overview.focusAreas.map((area) => (
                  <li key={area.title} className="rounded-2xl border border-teal-500/20 bg-teal-500/10 p-4">
                    <h4 className="font-semibold text-white mb-1">{area.title}</h4>
                    <p className="text-sm text-teal-100/80">{area.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedCard>

        {/* Stats & Technologies */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <AnimatedCard direction="left">
            <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
              {t.statsTitle}
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {industry.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <BarChart3 className="h-6 w-6 text-teal-300 mb-3" />
                  <p className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</p>
                  <p className="mt-2 text-xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard direction="right" className="p-8 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm">
            <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
              {t.technologiesTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {industry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedCard>
        </div>

        {/* Digital Strategy Section - Text Left, Image Right */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-widest text-gray-400">
                {lang === 'de' ? 'Digitale Strategie' : 'Digital Strategy'}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {lang === 'de' 
                  ? 'Mehr Erfolg durch integrierte digitale Unternehmensstrategie'
                  : 'More success through integrated digital corporate strategy'}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {lang === 'de'
                  ? 'Digital erfolgreich zu sein beginnt mit einer klaren, durchdachten Strategie. Wir unterstützen Sie mit unserer Digitalberatung dabei, Ihre Marke gezielt zu positionieren und Ihre Sichtbarkeit auf den relevanten Kanälen zu steigern. Die Umstellung auf Cloud-Lösungen hilft Ihnen, Ihre internen Prozesse effizient zu digitalisieren und zu optimieren. Mit unserer Digitalberatung gewinnen Sie wertvolle Freiräume, können schneller Entscheidungen treffen und steigern Ihre Innovationskraft und Wettbewerbsfähigkeit.'
                  : 'Being digitally successful begins with a clear, well-thought-out strategy. We support you with our digital consulting to strategically position your brand and increase its visibility on relevant channels. The transition to cloud solutions helps you efficiently digitize and optimize your internal processes. With our digital consulting, you gain valuable leeway, can make faster decisions, and increase your innovative strength and competitiveness.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">+</span>
                  <span>{lang === 'de' ? 'Erfahren Sie mehr' : 'Learn more'}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span>{lang === 'de' ? 'Weitere Informationen' : 'More Information'}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - MacBook Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt={lang === 'de' ? 'Digitale Strategie' : 'Digital Strategy'}
                  fill
                  className="object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <p className="text-white font-semibold">
                      {lang === 'de' ? 'Digitale Strategie' : 'Digital Strategy'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities - Slider Style */}
        <section>
          <AnimatedCard direction="up">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">{t.capabilitiesTitle}</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                {industry.overview.introduction}
              </p>
            </div>
            <CapabilitiesSlider capabilities={industry.capabilities} />
          </AnimatedCard>
        </section>

        {/* Case Studies - New Layout with 3D Object */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title + 3D Object */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {t.casesTitle}
              </h2>
              
              {/* 3D Torus Object with Play Button */}
              <motion.div
                className="relative w-64 h-64 mx-auto lg:mx-0"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Torus Shape */}
                <div className="absolute inset-0 rounded-full border-8 border-gray-300/30" style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%)',
                }} />
                <div className="absolute inset-0 rounded-full border-8 border-gray-300/30" style={{
                  clipPath: 'polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)',
                }} />
                
                {/* Play Button in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Case Study Cards */}
            <div className="space-y-6">
              {industry.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.client}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="rounded-3xl p-8 bg-gradient-to-br from-purple-600/80 to-purple-800/80 backdrop-blur-md border border-purple-400/20 shadow-xl"
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-purple-200/80 mb-2">
                        {lang === 'de' ? 'KUNDE' : 'CLIENT'}
                      </p>
                      <p className="text-white font-semibold text-lg">
                        {caseStudy.client}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-purple-200/80 mb-2">
                        {lang === 'de' ? 'HERAUSFORDERUNG' : 'PROBLEM'}
                      </p>
                      <p className="text-white/90 leading-relaxed">
                        {caseStudy.headline}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-purple-200/80 mb-2">
                        {lang === 'de' ? 'ERGEBNIS' : 'RESULT'}
                      </p>
                      <ul className="space-y-2 text-white/90">
                        {caseStudy.impact.split(',').map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-300 mt-1">•</span>
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-6 py-3 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
                    >
                      {lang === 'de' ? 'Mehr erfahren' : 'Read more'}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <AnimatedCard direction="up" className="relative overflow-hidden rounded-3xl border border-white/15 bg-teal-900/20 backdrop-blur-md p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
                <p className="text-gray-200 mb-6">
                  {industry.contact.name} · {industry.contact.role}
                </p>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-300" />
                    {industry.contact.email}
                  </p>
                  {industry.contact.phone ? (
                    <p className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-teal-300" />
                      {industry.contact.phone}
                    </p>
                  ) : null}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white"
                >
                  {t.contactCta}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-3xl">
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

