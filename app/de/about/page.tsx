'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  Shield
} from 'lucide-react';

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

// Expandable Section Component
function ExpandableSection({ title, icon: Icon, children, defaultOpen = false }: { title: string; icon: any; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="border-b border-purple-500/20 overflow-hidden"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-purple-500/5 transition-colors px-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-8 pt-2 text-gray-300 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  const stats = [
    { value: '15+', label: 'Jahre Erfahrung', icon: Award },
    { value: '200+', label: 'Erfolgreiche Projekte', icon: Target },
    { value: '50+', label: 'Zufriedene Kunden', icon: Heart },
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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section with Illustration */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-purple-900/20 via-black to-teal-900/20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168, 85, 247, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <SlideIn direction="left">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-500/30 mb-8"
                >
                  <span className="text-purple-300 text-sm font-semibold tracking-wider">ÜBER QUANTIVA ADVISORY</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Digitale Excellence{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                    ist unser Herzstück
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Jeden Tag gestalten wir die digitale Zukunft unserer Kunden. Mit Expertise in SAP, Cloud und AI 
                  schaffen wir nachhaltige Wertschöpfung in allen Bereichen der digitalen Transformation.
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/de/career"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
                  >
                    Karriere bei uns
                  </Link>
                  <Link
                    href="/de/team"
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Unser Team
                  </Link>
                </div>
              </div>
            </SlideIn>

            {/* Right: Illustration/Image */}
            <SlideIn direction="right" delay={0.2}>
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden border border-purple-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=80"
                    alt="Team Collaboration"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6"
                  >
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">15+</p>
                    <p className="text-sm text-gray-300 mt-1">Jahre Excellence</p>
                  </motion.div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/10 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SlideIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/60 transition-all">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </motion.div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unsere Mission & Vision
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Wir glauben an eine Zukunft, in der Technologie Menschen befähigt und Unternehmen transformiert
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            <SlideIn direction="left">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Wir befähigen Unternehmen, ihre digitale Transformation erfolgreich zu meistern. 
                  Durch modernste Technologien, tiefes Fachwissen und echte Partnerschaft schaffen 
                  wir nachhaltige Wertschöpfung und Wettbewerbsvorteile.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Wir streben danach, der vertrauenswürdigste Partner für digitale Transformation 
                  im DACH-Raum zu werden. Eine Zukunft, in der Innovation und menschliche Expertise 
                  Hand in Hand gehen.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values - Expandable Sections */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unsere Werte & Prinzipien
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Was uns antreibt und wie wir arbeiten
              </p>
            </div>
          </SlideIn>

          <div className="space-y-2 bg-black/40 backdrop-blur-sm rounded-3xl border border-purple-500/20 overflow-hidden">
            <ExpandableSection title="Excellence" icon={Award} defaultOpen={true}>
              <p className="mb-4">
                Excellence ist kein Ziel, sondern eine Reise. Wir streben in jedem Projekt, bei jeder 
                Interaktion nach höchster Qualität. Das bedeutet:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Best Practices aus über 15 Jahren Projekterfahrung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Kontinuierliche Qualitätssicherung auf allen Ebenen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Zertifizierte Experten mit tiefem Fachwissen</span>
                </li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Innovation" icon={Sparkles}>
              <p className="mb-4">
                Technologie entwickelt sich rasant. Wir bleiben am Puls der Zeit und bringen die neuesten 
                Innovationen in Ihre Organisation:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Cloud-native Architekturen und Microservices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>KI und Machine Learning Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Moderne DevOps und CI/CD Pipelines</span>
                </li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Partnerschaft" icon={Users}>
              <p className="mb-4">
                Wir verstehen uns als echte Partner unserer Kunden. Das bedeutet langfristige 
                Beziehungen auf Augenhöhe:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Transparente Kommunikation auf allen Ebenen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Gemeinsame Zielsetzung und Erfolgsmetriken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Langfristige Betreuung über das Projekt hinaus</span>
                </li>
              </ul>
            </ExpandableSection>

            <ExpandableSection title="Nachhaltigkeit" icon={Globe}>
              <p className="mb-4">
                Digitale Transformation muss nachhaltig sein - technologisch, wirtschaftlich und ökologisch:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Green IT und energieeffiziente Cloud-Lösungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Langlebige Architekturen statt Quick Fixes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">✓</span>
                  <span>Wissenstransfer und Enablement Ihrer Teams</span>
                </li>
              </ul>
            </ExpandableSection>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-black to-teal-900/20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&auto=format&q=80"
                  alt="Gülnur Patan - CEO"
                  className="relative rounded-3xl w-full h-[600px] object-cover border border-purple-500/20"
                />
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="relative">
                <div className="text-8xl text-purple-500/20 font-serif mb-4">&ldquo;</div>
                <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                  Digitale Transformation ist mehr als Technologie – es ist die Kunst, Menschen, 
                  Prozesse und Innovation in Einklang zu bringen, um nachhaltigen Mehrwert zu schaffen.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-teal-500 rounded-full"></div>
                  <div>
                    <p className="text-xl font-bold text-white">Gülnur Patan</p>
                    <p className="text-purple-400">CEO & Gründerin, Quantiva Advisory</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Industry Focus - Visual Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Branchen-Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tiefes Verständnis für Ihre Industrie
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manufacturing',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'Industrie 4.0 & Smart Factory Lösungen'
              },
              {
                title: 'Pharma & Healthcare',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'Compliance-konforme digitale Transformation'
              },
              {
                title: 'Retail & E-Commerce',
                image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'Omnichannel & Customer Experience'
              },
              {
                title: 'Finance & Banking',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'FinTech & digitale Finanzservices'
              },
              {
                title: 'Logistics',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'Supply Chain Optimization & IoT'
              },
              {
                title: 'Energy & Utilities',
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format&q=80',
                description: 'Smart Grid & nachhaltige Energie'
              },
            ].map((industry, index) => (
              <SlideIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                    <p className="text-gray-300">{industry.description}</p>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/30 via-black to-teal-900/30 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                gemeinsam
              </span>{' '}
              Ihre Zukunft gestalten
            </motion.h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Bereit für Ihre digitale Transformation? Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/de#contact"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-lg font-semibold rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <Link
                href="/de/cases"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Erfolgsgeschichten ansehen
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
