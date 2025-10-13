'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, ArrowLeft, CheckCircle, Users, TrendingUp, Lightbulb, BookOpen } from 'lucide-react';

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

export default function DigitalStrategyServicePage() {
  const offerings = [
    {
      icon: Target,
      title: 'Digital Strategy Development',
      description: 'Development of a tailored digital strategy for your organization',
      features: ['Digital Maturity Assessment', 'Technology Roadmap', 'Business Case Analysis', 'Strategic Planning']
    },
    {
      icon: Users,
      title: 'Change Management & Training',
      description: 'Guiding your organization through digital transformation',
      features: ['Stakeholder Management', 'Communication Strategy', 'Training Programs', 'Adoption Support']
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      description: 'Analysis and optimization of your business processes',
      features: ['Process Mapping', 'Gap Analysis', 'Automation Opportunities', 'Performance Metrics']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identification and implementation of innovative technologies',
      features: ['Technology Scouting', 'Innovation Labs', 'Pilot Projects', 'ROI Measurement']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/en"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8">
                <Target className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold tracking-wider">ENABLEMENT & TRAINING</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Enablement &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Training
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Workshops, training and knowledge transfer for your teams. 
                We empower your employees to successfully shape digital transformation.
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Enablement Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional training and strategy consulting for modern enterprises
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {offering.description}
                    </p>

                    <div className="space-y-3">
                      {offering.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
                Digital Transformation?
              </span>
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop your digital strategy together and empower your teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-10 py-5 bg-white text-emerald-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Request Strategy Consulting
              </Link>
              <Link
                href="/en/capabilities/digital-strategy"
                className="px-10 py-5 bg-emerald-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-emerald-500/30 transition-all duration-300"
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
