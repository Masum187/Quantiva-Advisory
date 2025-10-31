'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Heart,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  GraduationCap,
  Clock,
  Smartphone,
  Laptop,
  Coffee
} from 'lucide-react';
import ServiceNavigation from '../../../components/ServiceNavigation';

// Animation Components
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
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function NewWorkPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Service Navigation */}
      <ServiceNavigation lang="en" serviceTitle="New Work" serviceId="enablement" />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dbrisux8i/video/upload/v1761924430/video_f85758c6_1761914591442_yszhud.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SlideIn direction="up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-white font-semibold">New Work</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Unlock Agility and <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Collaboration</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                We unlock agility and collaboration in your company, making every single employee more productive. Through the optimal digital workplace and a work culture that promotes collaboration and networking.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                >
                  Get Consulting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
                >
                  Discover Solutions
                </a>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    The New <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Workplace</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    New Work is more than just home office or flexible working hours. It&apos;s about a fundamental transformation of work methods that enables collaboration across departmental and company boundaries and makes every employee more productive.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 group/item cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="relative flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* 3D Background Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-gradient-to-br from-teal-500/40 to-teal-600/30 border-2 border-teal-400/60 transform group-hover/item:translate-y-[-4px] group-hover/item:translate-x-[4px] transition-transform duration-300" />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-teal-400/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      {/* Icon Container */}
                      <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center group-hover/item:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-shadow duration-300">
                        <Target className="w-7 h-7 text-teal-300 group-hover/item:text-teal-100 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover/item:text-teal-300 transition-colors duration-300">Strategy & Organizational Transformation</h3>
                      <p className="text-gray-300 leading-relaxed">There is no New Work template that fits every company. We develop the right approach for you regarding people & culture, organization & processes.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 group/item cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="relative flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: [0, 5, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* 3D Background Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-gradient-to-br from-purple-500/40 to-purple-600/30 border-2 border-purple-400/60 transform group-hover/item:translate-y-[-4px] group-hover/item:translate-x-[4px] transition-transform duration-300" />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-purple-400/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      {/* Icon Container */}
                      <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover/item:shadow-[0_0_30px_rgba(192,132,252,0.4)] transition-shadow duration-300">
                        <Zap className="w-7 h-7 text-purple-300 group-hover/item:text-purple-100 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover/item:text-purple-300 transition-colors duration-300">Productivity & Collaboration</h3>
                      <p className="text-gray-300 leading-relaxed">The new world of work is characterized by collaboration across departmental and company boundaries. Productive collaboration requires modern work methods and the right digital tools.</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start gap-4 group/item cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="relative flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.15, rotate: [0, -8, 8, -8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* 3D Background Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500/40 to-blue-600/30 border-2 border-blue-400/60 transform group-hover/item:translate-y-[-4px] group-hover/item:translate-x-[4px] transition-transform duration-300" />
                      {/* Glow Effect */}
                      <div className="absolute inset-0 w-14 h-14 rounded-3xl bg-blue-400/20 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      {/* Icon Container */}
                      <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 border border-blue-400/40 flex items-center justify-center group-hover/item:shadow-[0_0_30px_rgba(96,165,250,0.4)] transition-shadow duration-300">
                        <Laptop className="w-7 h-7 text-blue-300 group-hover/item:text-blue-100 transition-colors duration-300" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover/item:text-blue-300 transition-colors duration-300">Modern Workplace</h3>
                      <p className="text-gray-300 leading-relaxed">As the world of work changes, so do the requirements for the digital workplace. What does a Modern Workplace look like that fits your company and employees?</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbrisux8i/image/upload/v1760221494/generated-image_w8egwd.jpg"
                    alt="New Work Team Collaboration"
                    width={600}
                    height={600}
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored approaches for transforming your workplace
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy & Transformation */}
            <SlideIn direction="up" delay={0.1}>
              <div className="group relative h-full p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategy & Transformation</h3>
                <p className="text-gray-100 font-medium leading-relaxed mb-6">
                  Development of an individual New Work concept for your company. From analysis of the current situation to step-by-step implementation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Organizational Analysis & Goal Definition
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Change Management & Communication
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Rollout Strategy & Success Measurement
                  </li>
                </ul>
              </div>
            </SlideIn>

            {/* Digital Workplace */}
            <SlideIn direction="up" delay={0.2}>
              <div className="group relative h-full p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Workplace</h3>
                <p className="text-gray-100 font-medium leading-relaxed mb-6">
                  Modernization of your IT infrastructure for flexible and secure workplaces. Microsoft 365, collaboration tools and modern work environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    Microsoft 365 & Teams Integration
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    Cloud-based Workplaces
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    Mobile Device Management
                  </li>
                </ul>
              </div>
            </SlideIn>

            {/* Collaboration & Productivity */}
            <SlideIn direction="up" delay={0.3}>
              <div className="group relative h-full p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 border border-blue-400/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Productivity</h3>
                <p className="text-gray-100 font-medium leading-relaxed mb-6">
                  Optimization of collaboration through modern work methods, agile processes and digital collaboration tools.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Agile Work Methods & Scrum
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Project Management Tools
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Virtual Teamwork
                  </li>
                </ul>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The benefits of modern work methods for your company
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SlideIn direction="up" delay={0.1}>
              <div className="text-center group">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-500/40 to-teal-600/30 border-2 border-teal-400/60 flex items-center justify-center shadow-lg shadow-teal-500/20"
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)"
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <TrendingUp className="w-10 h-10 text-teal-300 group-hover:text-teal-200 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">Increased Productivity</h3>
                <p className="text-gray-300">Flexible working hours and locations lead to higher motivation and efficiency of employees.</p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.2}>
              <div className="text-center group">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/40 to-purple-600/30 border-2 border-purple-400/60 flex items-center justify-center shadow-lg shadow-purple-500/20"
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(192, 132, 252, 0.4)"
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }}
                >
                  <Heart className="w-10 h-10 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">Better Work-Life Balance</h3>
                <p className="text-gray-300">Employees can better balance work and private life, leading to higher satisfaction.</p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.3}>
              <div className="text-center group">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-600/30 border-2 border-blue-400/60 flex items-center justify-center shadow-lg shadow-blue-500/20"
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(96, 165, 250, 0.4)"
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }
                  }}
                >
                  <Globe className="w-10 h-10 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">Global Talent Pool</h3>
                <p className="text-gray-300">Access to international talents through remote-friendly work models.</p>
              </div>
            </SlideIn>

            <SlideIn direction="up" delay={0.4}>
              <div className="text-center group">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/40 to-green-600/30 border-2 border-green-400/60 flex items-center justify-center shadow-lg shadow-green-500/20"
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 20px 40px rgba(74, 222, 128, 0.4)"
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }
                  }}
                >
                  <Shield className="w-10 h-10 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof</h3>
                <p className="text-gray-300">Early adaptation to changing work environments makes your company future-ready.</p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let&apos;s transform your workplace together and unlock the full potential of your teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:info@quantiva-advisory.com"
                className="px-10 py-5 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              >
                Get Consulting Now
              </a>
              <a
                href="tel:+49123456789"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
              >
                Free Consultation Call
              </a>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
