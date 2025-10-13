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
      description: 'Implementation of Zero Trust architectures and Identity & Access Management solutions for maximum security.',
      features: ['Multi-Factor Authentication', 'Role-Based Access Control', 'Privileged Access Management', 'Single Sign-On (SSO)']
    },
    {
      icon: Lock,
      title: 'Security Architecture',
      description: 'Development of secure system architectures and infrastructures according to current security standards.',
      features: ['Defense in Depth', 'Secure Coding Practices', 'API Security', 'Network Segmentation']
    },
    {
      icon: Eye,
      title: 'Audits & Hardening',
      description: 'Comprehensive security audits and system hardening for optimal protection measures.',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Audits', 'Security Configuration']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Modeling',
      description: 'Proactive identification and assessment of security risks in your systems.',
      features: ['Risk Assessment', 'Attack Surface Analysis', 'Security Controls', 'Incident Response']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/en"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-8">
                <Shield className="w-6 h-6 text-red-400" />
                <span className="text-red-300 text-sm font-semibold tracking-wider">CYBER SECURITY</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Cyber Security{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Protection of your digital assets through comprehensive security solutions. 
                From Zero Trust architectures to proactive threat modeling.
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
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Security Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive Cyber Security solutions for modern enterprises
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-gradient-to-br from-red-900/10 to-orange-900/10 border border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
                maximum security?
              </span>
            </h2>
            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop and implement your Cyber Security strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-10 py-5 bg-white text-red-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Request Security Consultation
              </Link>
              <Link
                href="/en/capabilities/microservices"
                className="px-10 py-5 bg-red-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-red-500/30 transition-all duration-300"
              >
                Microservices →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
