'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../Navigation';
import {
  ChevronRight, ArrowRight, Users, Heart, TrendingUp,
  GraduationCap, Lightbulb, Target, Award, Shield, Sparkles,
  Brain, Cloud, Code, Database, Globe, Zap
} from 'lucide-react';
import { useLanguage } from '../QuantivaWebsite';

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
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CareerPage() {
  const { lang, localePath } = useLanguage();

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Home', href: localePath('/') },
    { id: 'about', label: lang === 'de' ? 'Über uns' : 'About', href: localePath('/about') },
    { id: 'services', label: 'Services', href: localePath('/#services') },
    { id: 'cases', label: lang === 'de' ? 'Projekte' : 'Cases', href: localePath('/cases') },
    { id: 'team', label: 'Team', href: localePath('/team') },
    { id: 'career', label: lang === 'de' ? 'Karriere' : 'Career', href: localePath('/career') },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible Arbeitszeiten und Remote-Möglichkeiten für eine gesunde Balance.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Karrierewachstum',
      description: 'Kontinuierliche Weiterbildung und klare Aufstiegsmöglichkeiten.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Team Spirit',
      description: 'Ein unterstützendes, kollaboratives Arbeitsumfeld.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Anerkennung',
      description: 'Faire Bezahlung und Anerkennung für Ihre Leistungen.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const positions = [
    {
      title: 'Senior SAP Consultant',
      location: 'Remote / München',
      type: 'Vollzeit',
      description: 'Verantwortlich für die Beratung und Implementierung von SAP-Lösungen für Enterprise-Kunden.',
      requirements: ['5+ Jahre SAP-Erfahrung', 'S/4HANA Expertise', 'Projektmanagement'],
      benefits: ['Competitive Salary', 'Flexible Hours', 'Learning Budget']
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote / Berlin',
      type: 'Vollzeit',
      description: 'Entwicklung und Implementierung von KI-Lösungen für unsere Kunden.',
      requirements: ['Python/ML Expertise', 'Cloud Platforms', 'Data Science'],
      benefits: ['Competitive Salary', 'Flexible Hours', 'Learning Budget']
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Hamburg',
      type: 'Vollzeit',
      description: 'Design und Implementierung von Cloud-Architekturen für Enterprise-Kunden.',
      requirements: ['AWS/Azure Expertise', 'DevOps Experience', 'Architecture Design'],
      benefits: ['Competitive Salary', 'Flexible Hours', 'Learning Budget']
    }
  ];

  const stats = [
    { value: '15+', label: 'Jahre Erfahrung', icon: Award },
    { value: '50+', label: 'Erfolgreiche Projekte', icon: Target },
    { value: '95%', label: 'Kundenzufriedenheit', icon: Heart },
    { value: '100%', label: 'Engagement', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <Navigation lang={lang} items={navigationItems} />

      {/* Main Content - Seamless Flow */}
      <div className="relative bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Hero Section */}
          <div className="text-center mb-24">
            <SlideIn direction="up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-white font-semibold">Karriere bei Quantiva</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Werden Sie Teil unseres <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Teams</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Gestalten Sie die Zukunft der digitalen Transformation mit uns. 
                Bei Quantiva Advisory finden Sie ein inspirierendes Arbeitsumfeld, 
                das Innovation und persönliches Wachstum fördert.
              </p>
            </SlideIn>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SlideIn key={stat.label} direction="up" delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 border border-teal-500/30 flex items-center justify-center group-hover:border-teal-400/60 transition-all">
                      <Icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </SlideIn>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-24">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                  <Heart className="w-6 h-6 text-teal-400" />
                  <span className="text-white font-semibold">Unsere Benefits</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Warum <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Quantiva</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Wir bieten mehr als nur einen Job - wir bieten eine Karriere mit Zukunft.
                </p>
              </div>
            </SlideIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <SlideIn key={benefit.title} direction="up" delay={index * 0.1}>
                    <div className="group">
                      <div className="relative h-full p-8 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl"></div>
                        <div className="relative z-10">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color}/30 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-teal-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4 mt-6">{benefit.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </SlideIn>
                );
              })}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-24">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                  <Target className="w-6 h-6 text-teal-400" />
                  <span className="text-white font-semibold">Offene Positionen</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Aktuelle <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Stellenangebote</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Entdecken Sie unsere aktuellen Stellenangebote und finden Sie Ihre perfekte Position.
                </p>
              </div>
            </SlideIn>

            <div className="space-y-8">
              {positions.map((position, index) => (
                <SlideIn key={position.title} direction="up" delay={index * 0.1}>
                  <div className="group">
                    <div className="relative p-8 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl"></div>
                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                            <div className="flex items-center gap-4 text-gray-300">
                              <span className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                {position.location}
                              </span>
                              <span className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {position.type}
                              </span>
                            </div>
                          </div>
                          <button className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300">
                            Jetzt bewerben
                          </button>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {position.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Anforderungen</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-center gap-2 text-gray-300">
                                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {position.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideIn direction="left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                      alt="Team Culture"
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Unsere <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Kultur</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      Bei Quantiva Advisory schaffen wir ein Arbeitsumfeld, das Innovation, 
                      Kollaboration und persönliches Wachstum fördert. Wir glauben daran, 
                      dass die besten Lösungen entstehen, wenn talentierte Menschen zusammenarbeiten.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                        <p className="text-gray-300">Wir fördern kreatives Denken und experimentieren mit neuen Technologien.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Teamwork</h3>
                        <p className="text-gray-300">Zusammenarbeit und gegenseitige Unterstützung stehen im Mittelpunkt.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Lernkultur</h3>
                        <p className="text-gray-300">Kontinuierliche Weiterbildung und persönliche Entwicklung werden gefördert.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <SlideIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der digitalen Transformation mit uns.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:careers@quantiva-advisory.com"
                  className="px-10 py-5 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                >
                  Jetzt bewerben
                </a>
                <a
                  href="/de#contact"
                  className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}