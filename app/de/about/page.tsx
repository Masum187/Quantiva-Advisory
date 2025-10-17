'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import { 
  ChevronDown, 
  Target, 
  Sparkles, 
  Users, 
  Globe, 
  TrendingUp,
  Award,
  Heart,
  Zap,
  Shield,
  Play,
  X
} from 'lucide-react';

// Animation Component
function SlideIn({ children, direction = 'up', delay = 0 }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const [showCEOAvatar, setShowCEOAvatar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('mission'); // 'mission' or 'values'

  const stats = [
    { value: '10+', label: 'Jahre Erfahrung', icon: TrendingUp },
    { value: '50+', label: 'Erfolgreiche Projekte', icon: Award },
    { value: '95%', label: 'Kundenzufriedenheit', icon: Heart },
    { value: '100%', label: 'Engagement', icon: Zap },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Wir streben nach höchster Qualität in allem, was wir tun. Von der ersten Beratung bis zur finalen Implementierung - Excellence ist unser Standard.',
    },
    {
      icon: Users,
      title: 'Partnerschaft',
      description: 'Wir verstehen uns als Partner unserer Kunden, nicht nur als Dienstleister. Gemeinsam entwickeln wir Lösungen, die nachhaltigen Mehrwert schaffen.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Technologie entwickelt sich rasant. Wir bleiben am Puls der Zeit und bringen die neuesten Innovationen in Ihre Organisation - praktisch und umsetzbar.',
    },
    {
      icon: Shield,
      title: 'Vertrauen',
      description: 'Ihre Daten, Ihre Prozesse, Ihre Zukunft - wir behandeln alles mit höchster Vertraulichkeit und Professionalität. Vertrauen ist die Basis unserer Zusammenarbeit.',
    },
  ];

  // Navigation items for German
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/de' },
    { id: 'about', label: 'Über uns', href: '/de/about' },
    { id: 'services', label: 'Services', href: '/de#services' },
    { id: 'cases', label: 'Projekte', href: '/de/cases' },
    { id: 'team', label: 'Team', href: '/de/team' },
    { id: 'career', label: 'Karriere', href: '/de#career' },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <Navigation lang="de" items={navigationItems} />
      
      {/* Synthesia-Style CEO Avatar Modal */}
      {showCEOAvatar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-4xl bg-black rounded-3xl border border-white/20 overflow-hidden"
          >
            <button
              onClick={() => setShowCEOAvatar(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <video
              src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760346462/kling_20251012_Video_to_Audio__1718_0_ti4mch.mp4"
              autoPlay
              controls
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      )}

      {/* Main Content - Seamless Flow */}
      <div className="relative bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Hero Section */}
          <div className="relative w-full max-w-4xl bg-black rounded-3xl border border-white/20 overflow-hidden mb-24">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-teal-900/30"></div>
            
            <div className="relative z-10 p-12">
              <SlideIn direction="up">
                <div className="text-center mb-12">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Das sind <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Wir</span>
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Quantiva Advisory steht für Innovation, Excellence und nachhaltige digitale Transformation. 
                    Unsere Mission ist es, Unternehmen dabei zu helfen, ihre Ziele durch intelligente Technologielösungen zu erreichen.
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative group cursor-pointer" onClick={() => setShowCEOAvatar(true)}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Gülnur Patan</h3>
                          <p className="text-sm text-gray-300">CEO & Gründerin</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        "Innovation entsteht dort, wo Vision auf Leidenschaft trifft. 
                        Bei Quantiva Advisory verwandeln wir komplexe Herausforderungen in elegante Lösungen."
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-2xl font-bold text-white mb-4">Unsere Mission</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Wir befähigen Unternehmen, ihre digitale Transformation erfolgreich zu meistern. 
                        Durch strategische Beratung, innovative Technologien und 15+ Jahre Expertise haben wir uns zu einem vertrauenswürdigen Partner im DACH-Raum gemacht.
                      </p>
                      <div className="mt-4">
                        <span className="text-purple-400 font-semibold">🎯 Ziele:</span> Wir streben danach, der führende Partner für 
                        digitale Transformation zu werden und dabei nachhaltige, messbare Ergebnisse zu liefern.
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href="/de#contact"
                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                      >
                        Kontakt aufnehmen
                      </Link>
                      <Link
                        href="/de/cases"
                        className="px-6 py-3 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-300"
                      >
                        Unsere Projekte
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SlideIn key={stat.label} direction="up" delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/60 transition-all">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </SlideIn>
              );
            })}
          </div>

          {/* Mission & Vision Section */}
          <div className="mb-24">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                  <Sparkles className="w-6 h-6 text-teal-400" />
                  <span className="text-white font-semibold">Mission & Vision</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Unsere <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Vision</span> für die Zukunft
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Wir gestalten die digitale Zukunft mit innovativen Lösungen, die Unternehmen nachhaltig voranbringen.
                </p>
              </div>
            </SlideIn>

            <div className="grid lg:grid-cols-2 gap-12">
              <SlideIn direction="left">
                <div className="relative h-full p-12 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-10 h-10 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 mt-6">Unsere Mission</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Wir befähigen Unternehmen, ihre digitale Transformation erfolgreich zu meistern. 
                      Durch strategische Beratung und innovative Technologien schaffen wir nachhaltigen Mehrwert.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Strategische Beratung</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Innovative Technologien</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Nachhaltiger Mehrwert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="relative h-full p-12 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-10 h-10 text-teal-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 mt-6">Unsere Vision</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Wir streben danach, der führende Partner für digitale Transformation im DACH-Raum zu werden. 
                      Unsere Vision ist eine Welt, in der Technologie und Innovation nahtlos zusammenarbeiten.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300">Führender Partner</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300">DACH-Raum</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-gray-300">Nahtlose Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                  <Heart className="w-6 h-6 text-teal-400" />
                  <span className="text-white font-semibold">Werte & Prinzipien</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Was uns <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">antreibt</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Unsere Werte bilden das Fundament unserer Arbeit und prägen jeden Aspekt unserer Zusammenarbeit.
                </p>
              </div>
            </SlideIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <SlideIn key={value.title} direction="up" delay={index * 0.1}>
                    <div className="group">
                      <div className="relative h-full p-8 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
                        <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-purple-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 mt-6">{value.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  </SlideIn>
                );
              })}
            </div>
          </div>

          {/* Leadership Quote */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideIn direction="left">
                <div className="relative group cursor-pointer" onClick={() => setShowCEOAvatar(true)}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-purple-500/20">
                    <Image
                      src="https://res.cloudinary.com/dbrisux8i/image/upload/v1760346416/image3_l0nj0f.jpg"
                      alt="Gülnur Patan - CEO"
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Gülnur Patan</h3>
                        <p className="text-sm text-gray-300 mt-1">CEO & Gründerin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Leadership <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Quote</span>
                    </h2>
                    <blockquote className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic">
                      "Digitale Transformation ist mehr als Technologie – es ist die Kunst, Menschen, 
                      Prozesse und Innovation in Einklang zu bringen, um nachhaltigen Mehrwert zu schaffen."
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">GP</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Gülnur Patan</div>
                        <div className="text-gray-400 text-sm">CEO & Gründerin</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">15+ Jahre Branchenerfahrung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">Tiefes Verständnis für Ihre Industrie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Visionäre Führung</span>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <SlideIn>
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ihre Zukunft <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">gestalten</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bereit für Ihre digitale Transformation? Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/de#contact"
                  className="px-10 py-5 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
                <Link
                  href="/de/cases"
                  className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
                >
                  Unsere Projekte entdecken
                </Link>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}