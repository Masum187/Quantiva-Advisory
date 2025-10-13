'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, ArrowLeft, CheckCircle } from 'lucide-react';

// Animation Component
function SlideIn({ children, direction = 'up', delay = 0 }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CyberSecurityPage() {
  const services = [
    {
      icon: Shield,
      title: 'Zero Trust & IAM',
      description: 'Implementierung moderner Zero Trust-Frameworks und Identity Access Management für maximale Sicherheit.',
      features: ['Multi-Factor Authentication', 'Role-Based Access Control', 'Identity Governance', 'Single Sign-On'],
      details: 'Zero Trust folgt dem Prinzip "Never trust, always verify" und minimiert Angriffsflächen durch systematische Identitäts- und Geräteauthentifizierung. Unsere IAM-Lösungen sorgen für nahtlose Benutzerauthentifizierung und granulare Berechtigungskontrolle.',
      benefits: ['Minimierung von Angriffsflächen', 'Compliance & Datenschutz', 'Granulare Zugriffskontrolle', 'Skalierbare Sicherheitsarchitektur']
    },
    {
      icon: Lock,
      title: 'Security Architecture',
      description: 'Aufbau einer resilienten und skalierbaren Sicherheitsarchitektur für Ihr Unternehmen.',
      features: ['Network Segmentation', 'Cloud Security', 'API Security', 'Security by Design'],
      details: 'Wir entwickeln ganzheitliche Sicherheitsarchitekturen, die Netzwerk- und Cloud-Security integrieren. Durch Security-by-Design und API-Absicherung schaffen wir langfristigen Schutz vor Sicherheitslücken und steigern die Effizienz durch Automatisierung.',
      benefits: ['Langfristiger Schutz vor Sicherheitslücken', 'Effizienzsteigerung durch Automatisierung', 'Skalierbare Architektur', 'Integration neuer Technologien']
    },
    {
      icon: Eye,
      title: 'Audits & Hardening',
      description: 'Systematische Sicherheitsüberprüfungen und Absicherung Ihrer Infrastruktur gegen moderne Bedrohungen.',
      features: ['Security Assessments', 'Penetration Testing', 'Vulnerability Management', 'Compliance Audits'],
      details: 'Regelmäßige Audits und Hardening-Maßnahmen sind die Basis für nachhaltigen Schutz. Wir führen umfassende Sicherheits-Assessments durch und erstellen automatisierte Schwachstellen-Scans mit konkreten Remediation-Strategien.',
      benefits: ['Nachhaltiger Schutz durch regelmäßige Überprüfungen', 'Automatisierte Schwachstellen-Scans', 'Konkrete Remediation-Strategien', 'Compliance mit regulatorischen Anforderungen']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Modeling',
      description: 'Proaktive Identifikation und Bewertung von Sicherheitsrisiken in Ihren Systemen.',
      features: ['Risk Assessment', 'Attack Surface Analysis', 'Security Controls', 'Incident Response'],
      details: 'Threat Modeling ermöglicht die systematische Analyse von Bedrohungen und Risiken. Wir modellieren potenzielle Angreifer und Angriffswege, priorisieren Risiken und entwickeln proaktive Gegenmaßnahmen für Ihre Sicherheitsstrategie.',
      benefits: ['Proaktive Entwicklung von Gegenmaßnahmen', 'Anpassung an tatsächliche Gefährdungslage', 'Systematische Risikobewertung', 'Kontinuierliche Verbesserung der Sicherheitsstrategie']
    }
  ];

  const studies = [
    {
      title: 'ZTNA Studie von techconsult (2024)',
      description: 'Zeigt, wie Zero Trust traditionelle Sicherheitsansätze ablöst, besonders durch Cloud und Remote Work. Analysiert Herausforderungen und Erfolgsfaktoren.',
      topic: 'Zero Trust & IAM',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'PwC Digital Trust Insights (2022)',
      description: 'Nur ein Drittel der Unternehmen weltweit schätzt die eigene Cyber-Abwehr als „gut bis sehr gut" ein. Defizite bei Integration neuer Technologien.',
      topic: 'Security Architecture',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'TÜV Cybersecurity Studie 2025',
      description: 'Zeigt die Zunahme KI-gestützter Angriffe und mangelnde Verteidigung. Regelmäßige Audits und Hardening dringend empfohlen.',
      topic: 'Audits & Hardening',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'KI-basierte Cyber Security Risikoanalyse (SCS 2025)',
      description: 'Evaluierung von künstlicher Intelligenz zur automatischen Risikoerkennung und Bedrohungsmodellierung.',
      topic: 'Threat Modeling',
      date: '2025',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Trendstudie IAM in deutschen KMU (2023)',
      description: 'Ermittelt Bewusstsein für Risiken durch unbefugten Zugriff und Akzeptanz von IAM-Lösungen im Mittelstand.',
      topic: 'Zero Trust & IAM',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Threat Modeling – Johner Institut (2024)',
      description: 'Beschreibt systematisches Auffinden und Beseitigen von Risiken durch iterative, kontinuierliche Bedrohungsmodellierung.',
      topic: 'Threat Modeling',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760385739/kling_20251014_Text_to_Video_Scene_1__M_930_0_1_djdrj2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-orange-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <SlideIn>
              <div className="text-center mb-16">
                <Link 
                  href="/de"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 border border-white/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zur Hauptseite
                </Link>
                
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 border border-red-400/50 mb-12 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-red-300" />
                  <span className="text-white text-lg font-semibold tracking-wider">CYBER SECURITY</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight">
                  Cyber Security{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                    Excellence
                  </span>
                </h1>

                <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
                  Schutz Ihrer digitalen Assets durch umfassende Sicherheitslösungen. 
                  Von Zero Trust Architekturen bis hin zu proaktivem Threat Modeling.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/de#contact"
                    className="px-12 py-6 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xl font-semibold rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-sm"
                  >
                    Sicherheitsberatung anfragen
                  </Link>
                  <Link
                    href="/de/capabilities/microservices"
                    className="px-12 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-xl font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
                  >
                    Microservices →
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn delay={0.2}>
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Cyber Security bei{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                      Quantiva Advisory
                    </span>
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                    Die Bedeutung ganzheitlicher IT-Sicherheit für moderne Unternehmen kann nicht überschätzt werden. 
                    In einer Zeit, in der Cyber-Bedrohungen immer ausgeklügelter werden, sind Zero Trust, IAM, 
                    Security Architecture, Audits & Hardening und Threat Modeling nicht mehr optional – sie sind unerlässlich.
                  </p>
                </motion.div>
              </div>
            </SlideIn>

            <SlideIn delay={1.1}>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-400/50 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ganzheitlicher Ansatz</h3>
                  <p className="text-white/80">
                    Wir betrachten Cyber Security als ganzheitliche Disziplin, die alle Aspekte Ihrer IT-Infrastruktur umfasst.
                  </p>
                </motion.div>

                <motion.div
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-400/50 flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Proaktiver Schutz</h3>
                  <p className="text-white/80">
                    Statt nur auf Angriffe zu reagieren, entwickeln wir proaktive Strategien zur Risikominimierung.
                  </p>
                </motion.div>

                <motion.div
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-400/50 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-red-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Compliance & Standards</h3>
                  <p className="text-white/80">
                    Unsere Lösungen entsprechen internationalen Standards und unterstützen Ihre Compliance-Anforderungen.
                  </p>
                </motion.div>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn delay={0.2}>
              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Unsere{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                    Sicherheitsdienstleistungen
                  </span>
                </h2>
                <p className="text-2xl text-white/80 max-w-3xl mx-auto">
                  Umfassende Cyber Security Lösungen für moderne Unternehmen
                </p>
              </div>
            </SlideIn>

            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <SlideIn key={index} delay={index * 0.2 + 0.5}>
                    <motion.div
                      className="p-12 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-300/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>

                      <p className="text-white/90 text-lg mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-white mb-4">Was ist {service.title.split(' ')[0]}?</h4>
                        <p className="text-white/80 text-lg leading-relaxed">
                          {service.details}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Unsere Leistungen:</h4>
                          <div className="space-y-3">
                            {service.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + idx * 0.1 + 0.8 }}
                              >
                                <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                                <span className="text-white/80">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Ihre Vorteile:</h4>
                          <div className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + idx * 0.1 + 1.0 }}
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></div>
                                <span className="text-white/80">{benefit}</span>
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
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn delay={0.2}>
              <div className="text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    Aktuelle{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                      Studien & Insights
                    </span>
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <p className="text-2xl text-white/80 max-w-3xl mx-auto">
                    Wissenschaftlich fundierte Erkenntnisse zur aktuellen Cyber Security Landschaft
                  </p>
                </motion.div>
              </div>
            </SlideIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies.map((study, index) => (
                <SlideIn key={index} delay={index * 0.1 + 0.5}>
                  <motion.article
                    className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500"
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
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Topic Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
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
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                        {study.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-red-300 text-sm font-semibold">
                          Studie lesen →
                        </span>
                        <div className="flex items-center gap-2 text-white/60 text-xs">
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
                <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 backdrop-blur-sm">
                  <span className="text-white/80">
                    Interesse an detaillierten Studienergebnissen?
                  </span>
                  <Link
                    href="/de#contact"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:scale-105"
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
        <section className="py-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SlideIn delay={0.2}>
              <div className="p-16 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Bereit für{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
                    maximale Sicherheit?
                  </span>
                </h2>
                
                <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto">
                  Lassen Sie uns gemeinsam Ihre Cyber Security Strategie entwickeln und umsetzen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link
                    href="/de#contact"
                    className="px-16 py-8 bg-gradient-to-r from-red-600 to-orange-600 text-white text-2xl font-semibold rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-sm"
                  >
                    Sicherheitsberatung anfragen
                  </Link>
                  <Link
                    href="/de/capabilities/microservices"
                    className="px-16 py-8 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white text-2xl font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
                  >
                    Microservices →
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>
      </div>
    </div>
  );
}
