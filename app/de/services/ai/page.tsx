'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, ArrowLeft, CheckCircle, Cpu, Zap, Shield, Target } from 'lucide-react';

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
  const offerings = [
    {
      icon: Brain,
      title: 'Use-Case Discovery',
      description: 'Identifikation und Bewertung von KI-Anwendungsfällen in Ihrem Unternehmen für maximale Wertschöpfung.',
      features: ['Business Case Analysis', 'ROI Assessment', 'Feasibility Studies', 'Proof of Concepts'],
      details: 'Wir identifizieren und bewerten KI-Anwendungsfälle, die den größten Geschäftswert für Ihr Unternehmen schaffen. Durch systematische Analyse Ihrer Prozesse und Daten finden wir die optimalen Einsatzgebiete für künstliche Intelligenz.',
      benefits: ['Maximale Wertschöpfung durch KI', 'Reduzierte Implementierungsrisiken', 'Klare ROI-Prognosen', 'Strategische KI-Roadmap']
    },
    {
      icon: Cpu,
      title: 'Model Training & Eval',
      description: 'Entwicklung, Training und Evaluierung von Machine Learning Modellen für Ihre spezifischen Anwendungsfälle.',
      features: ['Data Preparation', 'Model Selection', 'Training Pipelines', 'Performance Evaluation'],
      details: 'Wir entwickeln und trainieren maßgeschneiderte ML-Modelle für Ihre spezifischen Anwendungsfälle. Von der Datenaufbereitung bis zur Modelloptimierung begleiten wir Sie durch den gesamten Entwicklungsprozess.',
      benefits: ['Maßgeschneiderte ML-Modelle', 'Optimale Performance', 'Skalierbare Lösungen', 'Kontinuierliche Verbesserung']
    },
    {
      icon: Zap,
      title: 'MLOps & GenAI',
      description: 'Implementierung von MLOps-Praktiken und Integration von Generative AI in Ihre Geschäftsprozesse.',
      features: ['Model Deployment', 'CI/CD Pipelines', 'LLM Integration', 'Prompt Engineering'],
      details: 'Wir implementieren robuste MLOps-Praktiken und integrieren Generative AI in Ihre Geschäftsprozesse. Von der Modellbereitstellung bis zur Prompt-Optimierung schaffen wir nachhaltige KI-Workflows.',
      benefits: ['Automatisierte ML-Pipelines', 'Generative AI Integration', 'Reduzierte Time-to-Market', 'Skalierbare KI-Infrastruktur']
    },
    {
      icon: Shield,
      title: 'Guardrails & Compliance',
      description: 'Sicherstellung von Ethik, Transparenz und Compliance in Ihren KI-Lösungen.',
      features: ['AI Ethics Framework', 'Bias Detection', 'Explainable AI', 'Compliance & Auditing'],
      details: 'Wir sorgen für ethische, transparente und compliant KI-Lösungen. Durch umfassende Governance-Frameworks und Bias-Detection stellen wir sicher, dass Ihre KI-Systeme vertrauenswürdig und nachvollziehbar sind.',
      benefits: ['Ethische KI-Implementierung', 'Transparente Entscheidungen', 'Compliance-Sicherheit', 'Vertrauenswürdige KI-Systeme']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
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

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Intelligente Automatisierung, Predictive Analytics und KI-gestützte Geschäftsprozesse. 
                Wir helfen Ihnen dabei, das volle Potenzial der künstlichen Intelligenz zu nutzen.
              </p>
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
                    className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-purple-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{offering.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {offering.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Was ist {offering.title.split(' ')[0]}?</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
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
                              <span className="text-gray-300">{feature}</span>
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
                              <span className="text-gray-300">{benefit}</span>
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
  );
}
