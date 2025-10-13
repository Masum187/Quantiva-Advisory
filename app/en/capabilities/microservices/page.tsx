'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Network, Layers, Zap, Activity, ArrowLeft, CheckCircle } from 'lucide-react';

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

export default function MicroservicesPage() {
  const services = [
    {
      icon: Network,
      title: 'Domain-Driven Design',
      description: 'Development of scalable microservices architectures based on Domain-Driven Design principles.',
      features: ['Bounded Contexts', 'Aggregate Design', 'Event Sourcing', 'CQRS Pattern']
    },
    {
      icon: Layers,
      title: 'API-Gateway & Governance',
      description: 'Central API management and governance for consistent and secure service communication.',
      features: ['API Gateway Setup', 'Rate Limiting', 'Authentication', 'API Documentation']
    },
    {
      icon: Zap,
      title: 'Event-/Async-Patterns',
      description: 'Implementation of asynchronous communication patterns for high-performance, decoupled systems.',
      features: ['Event Streaming', 'Message Queues', 'Pub/Sub Patterns', 'Saga Patterns']
    },
    {
      icon: Activity,
      title: 'Observability',
      description: 'Comprehensive monitoring, logging and tracing for microservices architectures.',
      features: ['Distributed Tracing', 'Metrics Collection', 'Centralized Logging', 'Health Checks']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
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
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
                <Network className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold tracking-wider">MICROSERVICES & APIs</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Microservices &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  APIs
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Scalable and maintainable systems through modern microservices architectures. 
                From Domain-Driven Design to comprehensive observability.
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Microservices Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modern architectures for scalable and maintainable systems
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/40 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                scalable architectures?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop and implement your microservices strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Request Architecture Consultation
              </Link>
              <Link
                href="/en/capabilities/ai"
                className="px-10 py-5 bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-blue-500/30 transition-all duration-300"
              >
                AI Services →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
