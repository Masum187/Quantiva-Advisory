'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Database, ArrowLeft, CheckCircle, Users, Target, Zap } from 'lucide-react';

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

export default function SAPServicePage() {
  const offerings = [
    {
      icon: Database,
      title: 'SAP S/4HANA Beratung',
      description: 'Strategische Beratung für Ihre SAP S/4HANA Transformation mit Fokus auf hybride Ansätze und KI-Integration.',
      features: ['Greenfield vs. Brownfield Analyse', 'ROI-Berechnung', 'Migrationsstrategie', 'Change Management', 'KI-Integration'],
      details: 'Wir unterstützen Sie beim Umstieg sowie der Migration zu SAP S/4HANA – von Strategie über Prozessdesign bis Umsetzung. Laut aktueller Studien setzen bereits zwei Drittel der Unternehmen in der DACH-Region auf S/4HANA, wobei hybride Ansätze dominieren. Die größten Herausforderungen bleiben IT-Landschaftsanpassung und Stammdatenmanagement; der Stellenwert von KI-Integration zur Effizienzsteigerung steigt rapide.',
      benefits: ['Strategische Transformation', 'Hybride Migrationsansätze', 'KI-Integration', 'Reduzierte Risiken', 'Optimierte Prozesse']
    },
    {
      icon: Target,
      title: 'SAP BTP (Business Technology Platform)',
      description: 'Individuelle, integrierte Lösungen auf SAP BTP für Entwicklung, Integration und Analytics.',
      features: ['Entwicklung & Integration', 'Analytics & Reporting', 'Best Practices', 'Automatisierung', 'Erweiterbarkeit'],
      details: 'Wir realisieren für Sie individuelle, integrierte Lösungen auf SAP BTP – für alle Herausforderungen rund um Entwicklung, Integration und Analytics. Moderne Best Practices, Automatisierung und Erweiterbarkeit sind unser Standard.',
      benefits: ['Individuelle Lösungen', 'Nahtlose Integration', 'Moderne Best Practices', 'Automatisierung', 'Skalierbare Architektur']
    },
    {
      icon: Users,
      title: 'SAP Cloud ALM',
      description: 'Application Lifecycle Management speziell für Cloud- und hybride SAP-Umgebungen.',
      features: ['Cloud-basiertes ALM', 'Fiori-UX', 'Best Practices', 'Zentrale Steuerung', 'Nahtlose Integration'],
      details: 'Mit SAP Cloud ALM bieten wir Application Lifecycle Management speziell für Cloud- und hybride SAP-Umgebungen. Das Ganze cloudbasiert und mit moderner Fiori-UX – für eine schnelle Time-to-Value und reduzierten Betriebsaufwand. Zentrale Vorteile: Best Practices, zentrale Steuerung, nahtlose Integration und höchste Transparenz.',
      benefits: ['Schnelle Time-to-Value', 'Reduzierter Betriebsaufwand', 'Zentrale Steuerung', 'Höchste Transparenz', 'Moderne UX']
    },
    {
      icon: Zap,
      title: 'SAP Joule KI-Agenten',
      description: 'Integration intelligenter Agenten für Entwicklung, Testautomatisierung und Prozessautomation.',
      features: ['Entwicklung & Testautomatisierung', 'Prozessautomation', 'SAP Fiori Integration', 'UX-Optimierung', 'KI-Integration'],
      details: 'Unsere Expert:innen integrieren Joule als intelligente Agenten für Entwicklung, Testautomatisierung, Prozessautomation sowie für SAP Fiori und UX – und holen so das Maximum aus Ihren SAP-Investitionen heraus. Diese KI-Integration macht den Wechsel zwischen Tools überflüssig, beschleunigt Innovationen und sorgt für bessere Erkennbarkeit und Steuerbarkeit von Geschäftsprozessen.',
      benefits: ['Maximale SAP-Investitionen', 'Beschleunigte Innovationen', 'Bessere Prozesssteuerung', 'Tool-Integration', 'KI-gestützte Automatisierung']
    },
    {
      icon: CheckCircle,
      title: 'SAP Test Services & Automation',
      description: 'Automatisierung Ihrer SAP-Tests von der Anforderungsaufnahme bis zum Monitoring.',
      features: ['Testautomatisierung', 'Best Practice-Frameworks', 'Cloud & Hybrid', 'Monitoring', 'Nachhaltige Absicherung'],
      details: 'Wir automatisieren Ihre SAP-Tests von der Anforderungsaufnahme bis zum Monitoring. Dabei setzen wir auf Best Practice-Frameworks und sorgen für eine nachhaltige Absicherung Ihrer Projekte – gerade in Cloud- und hybriden Umgebungen.',
      benefits: ['Automatisierte Tests', 'Best Practice-Frameworks', 'Nachhaltige Absicherung', 'Cloud-optimiert', 'Reduzierte Risiken']
    },
    {
      icon: Users,
      title: 'SAP Fiori & UX',
      description: 'Intuitive und moderne Benutzeroberflächen auf Basis von SAP Fiori und neuesten UX-Standards.',
      features: ['SAP Fiori Design', 'SAPUI5 Entwicklung', 'UX-Standards', 'Intuitive Oberflächen', 'Produktivitätsschub'],
      details: 'Wir gestalten intuitive und moderne Benutzeroberflächen auf Basis von SAP Fiori, SAPUI5 und neuesten UX-Standards. Das Ergebnis: optimaler Zugang zu Systemen, hohe Akzeptanz und nachhaltiger Produktivitätsschub für Ihre Teams.',
      benefits: ['Intuitive Benutzeroberflächen', 'Hohe Akzeptanz', 'Produktivitätsschub', 'Moderne UX-Standards', 'Optimale Systemzugriffe']
    }
  ];

  const studies = [
    {
      title: 'Studie SAP S/4HANA 2025 (COMPUTERWOCHE/Spirit21)',
      description: 'Markttrends, Erfolgsfaktoren, Praxisbeispiele und Herausforderungen der S/4HANA-Transformation in der DACH-Region.',
      topic: 'S/4HANA Transformation',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'valantic SAP Studie 2025',
      description: 'Trends zu S/4HANA-Migration, Cloud-Strategien, SAP BTP, Business Data Cloud, KI- und Joule-Integration mit Experteneinschätzungen.',
      topic: 'SAP Trends & Migration',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'SAP Cloud ALM & Best Practices (rz10.de, FIS GmbH, Solutive AG)',
      description: 'Überblick moderner ALM-Lösungen für die Cloud-Ära, Entscheidungshilfen und Praxisbeispiele für SAP Cloud ALM.',
      topic: 'Cloud ALM',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'KI & SAP Joule Integration (SAP News Portal)',
      description: 'Praxisberichte und Roadmap zur Integration von GenAI/Joule in SAP-Lösungen. Best Practices und Implementierungsstrategien.',
      topic: 'KI & Joule Integration',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'SAP BTP Integration Patterns (SAP Community)',
      description: 'Moderne Integrationsmuster und Best Practices für SAP Business Technology Platform. Architektur-Entscheidungen und Implementierungsstrategien.',
      topic: 'BTP Integration',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'SAP Fiori UX Design Guidelines 2025',
      description: 'Neueste UX-Standards und Design-Prinzipien für SAP Fiori Anwendungen. User Experience Best Practices und Accessibility.',
      topic: 'Fiori UX Design',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/de"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Hauptseite
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8">
                <Database className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold tracking-wider">SAP BERATUNG</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                SAP{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Beratung
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                End-to-End Beratung für Ihre digitale Transformation mit SAP S/4HANA, Cloud Services, KI-Integration und optimaler UX.
              </p>

              <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                  Als erfahrenes Beratungsunternehmen begleiten wir Sie bei allen Herausforderungen rund um SAP – von der SAP S/4HANA Transformation über innovative Cloud Services, KI-Integration bis hin zur Automatisierung und optimalen UX.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">SAP S/4HANA:</strong> Strategische Transformation mit hybriden Ansätzen und KI-Integration.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">SAP BTP:</strong> Individuelle Lösungen für Entwicklung, Integration und Analytics.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">SAP Cloud ALM:</strong> Application Lifecycle Management für Cloud- und hybride Umgebungen.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">SAP Joule:</strong> KI-Agenten für Entwicklung, Testautomatisierung und Prozessautomation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Unsere{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  SAP-Dienstleistungen
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professionelle SAP-Beratung für moderne Unternehmen
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {offering.description}
                    </p>

                    <div className="space-y-3">
                      {offering.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
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
                  Wissenschaftlich fundierte Erkenntnisse und praktische Leitfäden für erfolgreiche SAP-Implementierungen
                </p>
              </motion.div>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.map((study, index) => (
              <SlideIn key={index} delay={index * 0.1 + 0.5}>
                <motion.article
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Study Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Topic Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {study.topic}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {study.date}
                      </span>
                    </div>
                  </div>

                  {/* Study Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {study.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-300 text-sm font-semibold">
                        Whitepaper lesen →
                      </span>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <span>{study.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SlideIn>
            ))}
          </div>

          {/* Studies CTA */}
          <SlideIn delay={0.8}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-white/80">
                  Interesse an detaillierten Studienergebnissen?
                </span>
                <Link
                  href="/de#contact"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Kontakt aufnehmen
                  <CheckCircle className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bereit für Ihre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                SAP-Transformation?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre SAP-Strategie entwickeln und erfolgreich umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/de#contact"
                className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                SAP-Beratung anfragen
              </Link>
              <Link
                href="/de/capabilities/sap"
                className="px-10 py-5 bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-blue-500/30 transition-all duration-300"
              >
                Technische Details →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
