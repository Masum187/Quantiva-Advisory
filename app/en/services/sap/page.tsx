'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, ArrowLeft, CheckCircle, Users, Target, Zap } from 'lucide-react';
import ServiceNavigation from '@/components/ServiceNavigation';

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
      title: 'SAP S/4HANA Consulting',
      description: 'Strategic consulting for your SAP S/4HANA transformation',
      features: ['Greenfield vs. Brownfield Analysis', 'ROI Calculation', 'Migration Strategy', 'Change Management']
    },
    {
      icon: Zap,
      title: 'SAP BTP Integration',
      description: 'Integration of SAP Business Technology Platform into your landscape',
      features: ['API Management', 'Integration Suite', 'Extension Suite', 'Analytics Cloud']
    },
    {
      icon: Users,
      title: 'SAP Fiori & UX',
      description: 'Modern user interfaces and user experience design',
      features: ['Fiori App Development', 'UX/UI Design', 'Mobile Apps', 'Role-based Dashboards']
    },
    {
      icon: Target,
      title: 'SAP Testing & Quality',
      description: 'Comprehensive testing strategies and quality assurance',
      features: ['Test Automation', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Service Navigation */}
      <ServiceNavigation lang="en" serviceTitle="SAP Services" serviceId="sap" />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/en"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8">
                <Database className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold tracking-wider">SAP CONSULTING</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                SAP{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Consulting
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Expertise in S/4HANA, BTP, Fiori and SAP integration. 
                From strategy to implementation, we guide you through your SAP transformation.
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
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  SAP Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional SAP consulting for modern enterprises
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                SAP Transformation?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop and successfully implement your SAP strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Request SAP Consulting
              </Link>
              <Link
                href="/en/capabilities/sap"
                className="px-10 py-5 bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-blue-500/30 transition-all duration-300"
              >
                Technical Details →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
