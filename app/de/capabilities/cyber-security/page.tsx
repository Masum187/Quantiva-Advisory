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
      description: 'Implementierung von Zero Trust Architekturen und Identity & Access Management Lösungen für maximale Sicherheit.',
      features: ['Multi-Factor Authentication', 'Role-Based Access Control', 'Privileged Access Management', 'Single Sign-On (SSO)']
    },
    {
      icon: Lock,
      title: 'Security Architecture',
      description: 'Entwicklung sicherer Systemarchitekturen und Infrastrukturen nach aktuellen Sicherheitsstandards.',
      features: ['Defense in Depth', 'Secure Coding Practices', 'API Security', 'Network Segmentation']
    },
    {
      icon: Eye,
      title: 'Audits & Hardening',
      description: 'Umfassende Sicherheitsaudits und System-Hardening für optimale Schutzmaßnahmen.',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Audits', 'Security Configuration']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Modeling',
      description: 'Proaktive Identifikation und Bewertung von Sicherheitsrisiken in Ihren Systemen.',
      features: ['Risk Assessment', 'Attack Surface Analysis', 'Security Controls', 'Incident Response']
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
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 border border-red-300/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
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
                            <CheckCircle className="w-6 h-6 text-red-300 flex-shrink-0" />
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
