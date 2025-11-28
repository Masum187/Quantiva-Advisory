'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ServiceNavigation from '../../../components/ServiceNavigation';
import { Brain, ArrowLeft, CheckCircle, Cpu, Zap, Shield, Target } from 'lucide-react';

// Study type definition
type Study = {
  title: string;
  description: string;
  topic: string;
  date: string;
  image: string;
  url: string;
};

// Study Card Component
function StudyCard({ study, index }: { study: Study; index: number }) {
  const colorBars = [
    { color: 'bg-cyan-400', border: 'border-cyan-400' },
    { color: 'bg-purple-400', border: 'border-purple-400' },
    { color: 'bg-teal-400', border: 'border-teal-400' },
    { color: 'bg-green-400', border: 'border-green-400' },
    { color: 'bg-blue-400', border: 'border-blue-400' },
    { color: 'bg-pink-400', border: 'border-pink-400' },
  ];
  const colorBar = colorBars[index % colorBars.length];
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <a
        href={study.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {/* Closed State - Only Color Bar */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start pl-4"
          animate={{
            width: isExpanded ? '0%' : '100%',
            opacity: isExpanded ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.div
            className={`w-3 ${colorBar.color} rounded-full h-3/4 shadow-lg`}
            style={{
              boxShadow: `0 10px 20px -5px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.5)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.5)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.5)').replace('bg-green-400', 'rgba(74, 222, 128, 0.5)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.5)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.5)')}`,
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
        </motion.div>

        {/* Expanded State - Full Card */}
        <motion.div
          className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ x: '-100%' }}
          animate={{
            x: isExpanded ? '0%' : '-100%',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          whileHover={{
            boxShadow: `0 20px 40px -10px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.3)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.3)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.3)').replace('bg-green-400', 'rgba(74, 222, 128, 0.3)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.3)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.3)')}`,
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
            {/* Vertical Colored Bar - Left */}
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
              {/* Title with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 20,
                }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  {study.title}
                </h3>

                {/* Topic Badge */}
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-semibold rounded-full backdrop-blur-sm">
                    {study.topic}
                  </span>
                </div>
              </motion.div>

              {/* Description with Animation */}
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
                  {study.description}
                </p>
              </motion.div>

              {/* Bottom Section - Date and CTA */}
              <motion.div
                className="flex items-end justify-between mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  y: isExpanded ? 0 : 20,
                }}
                transition={{ delay: 0.3 }}
              >
                {/* Date */}
                <div className="text-base md:text-lg font-black text-white">
                  {study.date}
                </div>

                {/* CTA - Vertical Stack */}
                <motion.div
                  className="flex flex-col items-end gap-0.5 text-teal-400 font-semibold"
                  whileHover={{ x: 5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs">Whitepaper</span>
                  <span className="text-xs">lesen →</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
}

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

export default function AIServicePage() {
  // Navigation items for German
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/de' },
    { id: 'about', label: 'Über uns', href: '/de/about' },
    { id: 'services', label: 'Services', href: '/de#services' },
    { id: 'search', label: 'Suche', href: '/de/search' },
    { id: 'cases', label: 'Projekte', href: '/de/cases' },
    { id: 'team', label: 'Team', href: '/de/team' },
    { id: 'career', label: 'Karriere', href: '/de#career' },
  ];
  const offerings = [
    {
      icon: Brain,
      title: 'Use Case Discovery',
      description: 'Strukturierte Identifikation relevanter KI-Anwendungsfälle, die echten Mehrwert schaffen und Ressourcenverschwendung vermeiden.',
      features: ['Strukturierter Discovery-Prozess', 'Business Case Analysis', 'ROI Assessment', 'Pilot-Fatigue Vermeidung'],
      details: 'Wir identifizieren gemeinsam mit Ihnen relevante KI-Anwendungsfälle, die echten Mehrwert schaffen. Unser strukturierter Ansatz sorgt für Klarheit, vermeidet Pilot-Fatigue und hilft Ihnen, Chancen effizient zu nutzen. Studien zeigen, dass über 80% der KI-Pilotprojekte im Markt keinen nachhaltigen Business Impact erzeugen – nur ein strukturierter Prozess macht den Unterschied.',
      benefits: ['Maximale Wertschöpfung durch KI', 'Vermeidung von Ressourcenverschwendung', 'Klare ROI-Prognosen', 'Strategische KI-Roadmap', 'Nachhaltiger Business Impact']
    },
    {
      icon: Shield,
      title: 'Guardrails & Compliance',
      description: 'Einhaltung regulatorischer Vorgaben für KI-Systeme mit intelligenten Compliance-Lösungen auf Basis internationaler Standards.',
      features: ['EU AI Act Compliance', 'ISO/IEC 42001', 'NIST AI RMF', 'Bias Detection & Fairness'],
      details: 'Die Einhaltung regulatorischer Vorgaben für KI-Systeme wird immer komplexer. Mit Guardrails und intelligenten Compliance-Lösungen sorgen wir für Fairness, Sicherheit und Nachvollziehbarkeit Ihrer KI – auf Basis internationaler Standards wie EU AI Act, ISO/IEC 42001 und NIST AI RMF.',
      benefits: ['Regulatorische Compliance', 'Ethische KI-Implementierung', 'Transparente Entscheidungen', 'Risikominimierung', 'Vertrauenswürdige KI-Systeme']
    },
    {
      icon: Zap,
      title: 'MLOps & GenAI',
      description: 'Implementierung moderner MLOps-Plattformen für den gesamten Lebenszyklus von Modellen und Generative AI Integration.',
      features: ['MLOps-Plattformen', 'Datenpipelines', 'Model Deployment', 'GenAI Integration'],
      details: 'Wir implementieren moderne MLOps-Plattformen, die den gesamten Lebenszyklus von Modellen automatisieren – von Datenpipelines über Deployment bis Governance. Dabei bringen wir Ihre AI from Concept to Production und sorgen für Nachhaltigkeit und Skalierbarkeit.',
      benefits: ['Automatisierte ML-Pipelines', 'Generative AI Integration', 'Reduzierte Time-to-Market', 'Skalierbare KI-Infrastruktur', 'Nachhaltige KI-Workflows']
    },
    {
      icon: Cpu,
      title: 'Model Training & Evaluation',
      description: 'Entwicklung, Training und laufende Bewertung von Machine Learning und GenAI-Modellen mit Fokus auf Reproduzierbarkeit und Performance.',
      features: ['Model Selection & Development', 'Training Pipelines', 'Performance Evaluation', 'Reproduzierbarkeit & Transparenz'],
      details: 'Wir unterstützen Sie bei der Auswahl, Entwicklung und laufenden Bewertung von Machine Learning und GenAI-Modellen. Unsere Methoden sichern Reproduzierbarkeit, Transparenz und Performance – auch unter strengen Compliance-Anforderungen.',
      benefits: ['Maßgeschneiderte ML-Modelle', 'Optimale Performance', 'Reproduzierbare Ergebnisse', 'Transparente Modellentscheidungen', 'Kontinuierliche Verbesserung']
    }
  ];

  const studies = [
    {
      title: 'AI Use Case Discovery Whitepaper (2025)',
      description: 'Strategien zur Identifikation & Umsetzung von KI-Anwendungsfällen, inkl. Marktbeispiele und Self-Assessment für Unternehmen.',
      topic: 'Use Case Discovery',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
      url: 'https://skopos-elements.de/wissen/whitepaper/ai-use-case-discovery-ki-marktforschung'
    },
    {
      title: 'AI Compliance & Guardrails (2025)',
      description: 'Überblick zu regulatorischen Anforderungen (EU AI Act, ISO 42001, NIST RMF) und den aktuellen Trends in der AI-Governance.',
      topic: 'Compliance & Guardrails',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
      url: 'https://www.sciencedirect.com/science/article/pii/S0007681325001387'
    },
    {
      title: 'MLOps & GenAI Summit Case Studies (2025)',
      description: 'Erfahrungsberichte & Best Practices zu GenAI, MLOps und Agentic AI in der Praxis. Lessons Learned aus erfolgreichen Implementierungen.',
      topic: 'MLOps & GenAI',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
      url: 'https://mlopsworld.com/'
    },
    {
      title: 'AI Use Case Erfolgsfaktoren (2025)',
      description: 'Analysen zeigen: Strukturierte Discovery-Prozesse sind entscheidend für den Business Impact von KI-Projekten und verhindern Ressourcenverschwendung.',
      topic: 'Success Factors',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      url: 'https://skopos-elements.de/wissen/whitepaper/ai-use-case-discovery-ki-marktforschung'
    },
    {
      title: 'EU AI Act Implementation Guide (2025)',
      description: 'Praktische Anleitung zur Umsetzung der EU AI Act Anforderungen in Unternehmen. Compliance-Framework und Best Practices.',
      topic: 'EU AI Act',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      url: 'https://skopos-elements.de/wissen/whitepaper/ai-use-case-discovery-ki-marktforschung'
    },
    {
      title: 'Generative AI Business Impact Study (2025)',
      description: 'Umfassende Studie zu den Geschäftsauswirkungen von Generative AI in verschiedenen Industrien und Anwendungsbereichen.',
      topic: 'GenAI Impact',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop',
      url: 'https://skopos-elements.de/wissen/whitepaper/ai-use-case-discovery-ki-marktforschung'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Service Navigation */}
      <ServiceNavigation lang="de" serviceTitle="AI & Machine Learning" serviceId="ai" />
      {/* Fixed Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760346462/kling_20251012_Video_to_Audio__1718_0_ti4mch.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Minimal Video Overlay - Only for text readability */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/de"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Hauptseite
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold tracking-wider">AI & MACHINE LEARNING</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                AI & Machine{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Learning
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                End-to-End Beratung für moderne KI-Use Cases entlang des gesamten Lebenszyklus – von der Use Case Discovery, über Guardrails & Compliance, bis hin zu MLOps, GenAI, Model Training & Evaluation.
              </p>

              <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl">
                <p className="text-lg text-gray-100 leading-relaxed mb-6 font-medium">
                  Als innovatives Beratungsunternehmen begleiten wir Organisationen bei der erfolgreichen Realisierung von KI-Projekten. Unser strukturierter Ansatz sorgt für Klarheit, vermeidet Pilot-Fatigue und hilft Ihnen, Chancen effizient zu nutzen.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Use Case Discovery:</strong> Strukturierte Identifikation relevanter KI-Anwendungsfälle, die echten Mehrwert schaffen.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Guardrails & Compliance:</strong> EU AI Act, ISO/IEC 42001 und NIST AI RMF Compliance für sichere KI-Systeme.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">MLOps & GenAI:</strong> Moderne MLOps-Plattformen und Generative AI Integration von Concept to Production.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Model Training & Evaluation:</strong> Entwicklung und Bewertung von ML-Modellen mit Fokus auf Reproduzierbarkeit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Unsere{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  KI-Dienstleistungen
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professionelle KI-Lösungen für moderne Unternehmen
              </p>
            </div>
          </SlideIn>

          <div className="space-y-16">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <SlideIn key={index} delay={index * 0.2}>
                  <motion.div
                    className="p-12 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-purple-600/80 border border-purple-400/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{offering.title}</h3>
                    </div>

                    <p className="text-gray-100 mb-8 leading-relaxed text-lg font-medium">
                      {offering.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Was ist {offering.title.split(' ')[0]}?</h4>
                      <p className="text-gray-100 text-lg leading-relaxed font-medium">
                        {offering.details}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Unsere Leistungen:</h4>
                        <div className="space-y-3">
                          {offering.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
                            >
                              <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                              <span className="text-gray-100 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Ihre Vorteile:</h4>
                        <div className="space-y-3">
                          {offering.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + idx * 0.1 + 1.0 }}
                            >
                              <div className="w-2 h-2 rounded-full bg-pink-400 flex-shrink-0"></div>
                              <span className="text-gray-100 font-medium">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studies Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Aktuelle{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    Studien & Whitepapers
                  </span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Wissenschaftlich fundierte Erkenntnisse und praktische Leitfäden für erfolgreiche KI-Implementierungen
                </p>
              </motion.div>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study, index) => (
              <SlideIn key={index} delay={index * 0.1 + 0.5}>
                <StudyCard study={study} index={index} />
              </SlideIn>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bereit für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                KI-Transformation?
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln und erfolgreich umsetzen.
            </p>
            <div className="flex justify-center">
              <Link
                href="/de#contact"
                className="px-12 py-6 bg-white text-purple-600 text-xl font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                KI-Beratung anfragen
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
      </div>
    </div>
  );
}
