'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, ArrowLeft, CheckCircle, Monitor, Smartphone, Database, Zap } from 'lucide-react';
import ServiceNavigation from '../../../components/ServiceNavigation';

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

export default function FullstackDevelopmentPage() {
  const offerings = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with React, Next.js, TypeScript and modern UI frameworks',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable backend architectures with Node.js, APIs and microservices',
      features: ['Node.js & Express', 'REST & GraphQL APIs', 'Microservices', 'Database Design', 'Authentication & Security']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'iOS & Android', 'App Store Deployment', 'Push Notifications', 'Offline Capabilities']
    },
    {
      icon: Zap,
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, cloud deployment and automated testing',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Cloud Deployment', 'Automated Testing', 'Monitoring & Logging']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Service Navigation */}
      <ServiceNavigation lang="en" serviceTitle="Fullstack Development" serviceId="fullstack" />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <Link 
                href="/en"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
                <Code className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 text-sm font-semibold tracking-wider">FULLSTACK DEVELOPMENT</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Fullstack{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Development
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Modern web and mobile applications from frontend to backend. React, Next.js, Node.js and cloud-native architectures for scalable, high-performance solutions.
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Development Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end development for modern digital products
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-purple-600/80 backdrop-blur-sm border border-purple-400/50 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{offering.title}</h3>
                    </div>

                    <p className="text-gray-100 mb-6 leading-relaxed font-medium">
                      {offering.description}
                    </p>

                    <div className="space-y-3">
                      {offering.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-100 font-medium">{feature}</span>
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Next Project?
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s develop your digital solution together – from idea to launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="px-10 py-5 bg-white text-purple-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Request Project
              </Link>
              <Link
                href="/en/cases"
                className="px-10 py-5 bg-purple-500/20 backdrop-blur-sm border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-purple-500/30 transition-all duration-300"
              >
                View References →
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}

