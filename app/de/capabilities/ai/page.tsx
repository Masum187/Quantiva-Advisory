'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cpu, Shield, Zap, ArrowLeft, CheckCircle } from 'lucide-react';

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

export default function AIPage() {
  const services = [
    {
      icon: Brain,
      title: 'Use-Case Discovery',
      description: 'Identifikation und Bewertung von KI-Anwendungsfällen in Ihrem Unternehmen für maximale Wertschöpfung.',
      features: ['Business Case Analysis', 'ROI Assessment', 'Feasibility Studies', 'Proof of Concepts']
    },
    {
      icon: Cpu,
      title: 'Model Training & Eval',
      description: 'Entwicklung, Training und Evaluierung von Machine Learning Modellen für Ihre spezifischen Anwendungsfälle.',
      features: ['Data Preparation', 'Model Selection', 'Training Pipelines', 'Performance Evaluation']
    },
    {
      icon: Zap,
      title: 'MLOps & GenAI',
      description: 'Implementierung von MLOps-Praktiken und Integration von Generative AI in Ihre Geschäftsprozesse.',
      features: ['Model Deployment', 'CI/CD Pipelines', 'LLM Integration', 'Prompt Engineering']
    },
    {
      icon: Shield,
      title: 'Guardrails & Compliance',
      description: 'Sicherstellung von Ethik, Transparenz und Compliance in Ihren KI-Lösungen.',
      features: ['AI Ethics Framework', 'Bias Detection', 'Explainable AI', 'Regulatory Compliance']
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
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Hauptseite
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold tracking-wider">KÜNSTLICHE INTELLIGENZ (AI)</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Künstliche{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Intelligenz
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transformieren Sie Ihr Unternehmen mit intelligenten KI-Lösungen. 
                Von Use-Case Discovery bis hin zu ethischen AI-Frameworks.
              </p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Services Grid */}
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
                Intelligente Lösungen für moderne Unternehmen
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bereit für die{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
                KI-Zukunft?
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre KI-Strategie entwickeln und umsetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/de#contact"
                className="px-10 py-5 bg-white text-purple-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                KI-Beratung anfragen
              </Link>
              <Link
                href="/de/capabilities/cyber-security"
                className="px-10 py-5 bg-purple-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-purple-500/30 transition-all duration-300"
              >
                Cyber Security →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
