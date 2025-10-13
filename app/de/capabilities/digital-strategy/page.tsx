'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Users, TrendingUp, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';

// Enhanced Animation Component with Text Reveal
function SlideIn({ children, direction = 'up', delay = 0, duration = 0.8 }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number; duration?: number }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

// Text Reveal Animation
function TextReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export default function DigitalStrategyPage() {
  const services = [
    {
      icon: Target,
      title: 'Digital Strategy Development',
      description: 'Entwicklung einer maßgeschneiderten Digitalstrategie, die Ihre Geschäftsziele mit technologischen Möglichkeiten verbindet.',
      features: ['Business Case Analysis', 'Technology Roadmap', 'Digital Maturity Assessment', 'Strategic Planning']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Begleitung Ihrer Organisation durch digitale Transformation mit strukturiertem Change Management und Training.',
      features: ['Stakeholder Management', 'Communication Strategy', 'Training Programs', 'Adoption Support']
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      description: 'Analyse und Optimierung Ihrer Geschäftsprozesse für maximale Effizienz und digitale Integration.',
      features: ['Process Mapping', 'Gap Analysis', 'Automation Opportunities', 'Performance Metrics']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identifikation und Implementierung innovativer Technologien für nachhaltigen Wettbewerbsvorteil.',
      features: ['Technology Scouting', 'Innovation Labs', 'Pilot Projects', 'ROI Measurement']
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760346462/kling_20251012_Video_to_Audio__1718_0_ti4mch.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-teal-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <SlideIn delay={0.2}>
              <div className="text-center mb-16">
                <Link
                  href="/de"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 border border-white/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zur Hauptseite
                </Link>

                <TextReveal delay={0.5}>
                  <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-400/50 mb-12 backdrop-blur-sm">
                    <Target className="w-8 h-8 text-emerald-300" />
                    <span className="text-white text-lg font-semibold tracking-wider">DIGITAL STRATEGY</span>
                  </div>
                </TextReveal>

                <TextReveal delay={0.8}>
                  <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight">
                    Digital{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                      Strategy
                    </span>
                  </h1>
                </TextReveal>

                <TextReveal delay={1.1}>
                  <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
                    Gestalten Sie Ihre digitale Zukunft mit strategischer Beratung und nachhaltigen Lösungen.
                    Von der Vision bis zur Umsetzung.
                  </p>
                </TextReveal>

                <TextReveal delay={1.4}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link
                      href="/de#contact"
                      className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xl font-semibold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-sm"
                    >
                      Strategieberatung anfragen
                    </Link>
                    <Link
                      href="/de/capabilities/sap"
                      className="px-12 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-xl font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
                    >
                      SAP Services →
                    </Link>
                  </div>
                </TextReveal>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn delay={0.2}>
              <div className="text-center mb-24">
                <TextReveal delay={0.5}>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    Unsere{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                      Strategie-Dienstleistungen
                    </span>
                  </h2>
                </TextReveal>
                <TextReveal delay={0.8}>
                  <p className="text-2xl text-white/80 max-w-3xl mx-auto">
                    Professionelle Strategieberatung für digitale Transformation
                  </p>
                </TextReveal>
              </div>
            </SlideIn>

            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <SlideIn key={index} delay={index * 0.2 + 0.5}>
                    <motion.div
                      className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 group"
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-300/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>

                      <p className="text-white/90 text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
                          >
                            <CheckCircle className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                            <span className="text-white/80 text-lg">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </SlideIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SlideIn delay={0.2}>
              <div className="p-16 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
                <TextReveal delay={0.5}>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    Bereit für{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                      digitale Transformation?
                    </span>
                  </h2>
                </TextReveal>

                <TextReveal delay={0.8}>
                  <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto">
                    Lassen Sie uns gemeinsam Ihre Digitalstrategie entwickeln und erfolgreich umsetzen.
                  </p>
                </TextReveal>

                <TextReveal delay={1.1}>
                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Link
                      href="/de#contact"
                      className="px-16 py-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-2xl font-semibold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-sm"
                    >
                      Strategieberatung anfragen
                    </Link>
                    <Link
                      href="/de/capabilities/sap"
                      className="px-16 py-8 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-2xl font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
                    >
                      SAP Services →
                    </Link>
                  </div>
                </TextReveal>
              </div>
            </SlideIn>
          </div>
        </section>
      </div>
    </div>
  );
}
