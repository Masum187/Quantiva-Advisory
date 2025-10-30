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
      <ServiceNavigation lang="de" serviceTitle="New Work" serviceId="enablement" />

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
            <source src="https://res.cloudinary.com/dbrisux8i/video/upload/v1234567890/generated-videos/video-1761079894386.mp4" type="video/mp4" />
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
                Agilität und Zusammenarbeit <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">freisetzen</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Wir setzen Agilität und Zusammenarbeit in Ihrem Unternehmen frei und machen damit jeden einzelnen Mitarbeiter produktiver. Durch den optimalen digitalen Arbeitsplatz sowie eine Arbeitsweise und -kultur, die Zusammenarbeit und Vernetzung fördert.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                >
                  Jetzt Beraten lassen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
                >
                  Lösungen entdecken
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
                    Die neue <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Arbeitswelt</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    New Work ist mehr als nur Homeoffice oder flexible Arbeitszeiten. Es geht um eine grundlegende Transformation der Arbeitsweise, die Zusammenarbeit über Abteilungs- und Unternehmensgrenzen hinaus ermöglicht und jeden Mitarbeiter produktiver macht.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Strategie & Organisations-Transformation</h3>
                      <p className="text-gray-300">Es gibt keine New Work Schablone, die auf jedes Unternehmen passt. Wir entwickeln mit Ihnen den für Sie passenden Ansatz für Mensch & Kultur, Organisation & Prozesse.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Productivity & Collaboration</h3>
                      <p className="text-gray-300">Die neue Arbeitswelt ist geprägt von Zusammenarbeit über Abteilungs- und Unternehmensgrenzen hinaus. Für eine produktive Kollaboration braucht es moderne Arbeitsmethoden und die richtigen digitalen Tools.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                      <Laptop className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Modern Workplace</h3>
                      <p className="text-gray-300">Mit der Arbeitswelt ändern sich auch die Anforderungen an den digitalen Arbeitsplatz. Wie sieht ein Modern Workplace aus, der zu Ihrem Unternehmen und den Mitarbeitern passt?</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
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
                Unsere <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span> Lösungen
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Maßgeschneiderte Ansätze für die Transformation Ihrer Arbeitswelt
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
                <h3 className="text-2xl font-bold text-white mb-4">Strategie & Transformation</h3>
                <p className="text-gray-100 font-medium leading-relaxed mb-6">
                  Entwicklung eines individuellen New Work Konzepts für Ihr Unternehmen. Von der Analyse der aktuellen Situation bis zur schrittweisen Umsetzung.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Organisationsanalyse & Zieldefinition
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Change Management & Kommunikation
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    Rollout-Strategie & Erfolgsmessung
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
                  Modernisierung Ihrer IT-Infrastruktur für flexible und sichere Arbeitsplätze. Microsoft 365, Collaboration Tools und moderne Arbeitsumgebungen.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    Microsoft 365 & Teams Integration
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    Cloud-basierte Arbeitsplätze
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
                  Optimierung der Zusammenarbeit durch moderne Arbeitsmethoden, agile Prozesse und digitale Kollaborationstools.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Agile Arbeitsmethoden & Scrum
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Projektmanagement Tools
                  </li>
                  <li className="flex items-center gap-3 text-gray-100 font-medium">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    Virtuelle Teamarbeit
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
                Warum <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Die Vorteile einer modernen Arbeitsweise für Ihr Unternehmen
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
                <h3 className="text-xl font-bold text-white mb-3">Steigerte Produktivität</h3>
                <p className="text-gray-300">Flexible Arbeitszeiten und -orte führen zu höherer Motivation und Effizienz der Mitarbeiter.</p>
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
                <h3 className="text-xl font-bold text-white mb-3">Bessere Work-Life-Balance</h3>
                <p className="text-gray-300">Mitarbeiter können Beruf und Privatleben besser vereinbaren, was zu höherer Zufriedenheit führt.</p>
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
                <h3 className="text-xl font-bold text-white mb-3">Globaler Talentpool</h3>
                <p className="text-gray-300">Zugang zu internationalen Talenten durch remote-freundliche Arbeitsmodelle.</p>
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
                <h3 className="text-xl font-bold text-white mb-3">Zukunftssicherheit</h3>
                <p className="text-gray-300">Frühe Anpassung an veränderte Arbeitswelten macht Ihr Unternehmen zukunftsfähig.</p>
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
              Bereit für <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">New Work</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Arbeitswelt transformieren und das volle Potenzial Ihrer Teams freisetzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:info@quantiva-advisory.com"
                className="px-10 py-5 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              >
                Jetzt Beraten lassen
              </a>
              <a
                href="tel:+49123456789"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
              >
                Kostenloses Beratungsgespräch
              </a>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
