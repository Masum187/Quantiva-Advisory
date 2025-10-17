'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import { Linkedin, Mail, Award, Users, Target, TrendingUp, Volume2, VolumeX, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerSlideIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function TeamPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Navigation items for German
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/de' },
    { id: 'about', label: 'Über uns', href: '/de/about' },
    { id: 'services', label: 'Services', href: '/de#services' },
    { id: 'cases', label: 'Projekte', href: '/de/cases' },
    { id: 'team', label: 'Team', href: '/de/team' },
    { id: 'career', label: 'Karriere', href: '/de#career' },
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Gülnur Patan',
      role: 'CEO & Gründerin',
      image: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1760346416/image3_l0nj0f.jpg',
      bio: 'Visionäre Führungskraft mit 15+ Jahren Erfahrung in der digitalen Transformation. Expertin für strategische Beratung und innovative Technologielösungen.',
      expertise: ['Strategische Beratung', 'Digitale Transformation', 'Leadership'],
      linkedin: 'https://linkedin.com/in/gulnur-patan',
      email: 'gulnur@quantiva-advisory.com'
    },
    {
      id: 2,
      name: 'Dr. Michael Weber',
      role: 'CTO & Technischer Leiter',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
      bio: 'Technologie-Visionär mit Expertise in KI, Cloud-Architekturen und modernen Entwicklungsmethoden. Treibt Innovation voran.',
      expertise: ['KI & Machine Learning', 'Cloud Architecture', 'DevOps'],
      linkedin: 'https://linkedin.com/in/michael-weber',
      email: 'michael@quantiva-advisory.com'
    }
  ];

  const stats = [
    { value: '15+', label: 'Jahre Erfahrung', icon: Award },
    { value: '50+', label: 'Erfolgreiche Projekte', icon: Target },
    { value: '95%', label: 'Kundenzufriedenheit', icon: TrendingUp },
    { value: '100%', label: 'Engagement', icon: Users },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Wir streben nach höchster Qualität in allem, was wir tun.',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Innovation',
      description: 'Wir bringen die neuesten Technologien in Ihre Organisation.',
      icon: Target,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Partnerschaft',
      description: 'Wir verstehen uns als Partner, nicht nur als Dienstleister.',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Vertrauen',
      description: 'Vertraulichkeit und Professionalität sind unsere Basis.',
      icon: Award,
      color: 'from-green-500 to-green-600'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, teamMembers.length]);

  const togglePlayPause = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <Navigation lang="de" items={navigationItems} />

      {/* Main Content - Seamless Flow */}
      <div className="relative bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Hero Section */}
          <div className="text-center mb-24">
            <SlideIn direction="up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-white font-semibold">Unser Team</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Die <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Experten</span> hinter Quantiva
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Lernen Sie die talentierten Menschen kennen, die Quantiva Advisory zu dem machen, was es ist. 
                Unser Team vereint jahrzehntelange Erfahrung mit frischer Innovation.
              </p>
            </SlideIn>
          </div>

          {/* Team Members Carousel */}
          <div className="mb-24">
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  animate={{ x: `-${currentSlide * 100}%` }}
                >
                  {teamMembers.map((member, index) => (
                    <div key={member.id} className="w-full flex-shrink-0">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <SlideIn direction="left" delay={index * 0.2}>
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative rounded-3xl overflow-hidden">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={600}
                                height={400}
                                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-black/80 backdrop-blur-md border border-teal-500/30 rounded-2xl p-6">
                                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                  <p className="text-teal-400 font-semibold">{member.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SlideIn>

                        <SlideIn direction="right" delay={index * 0.2 + 0.1}>
                          <div className="space-y-8">
                            <div>
                              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {member.name}
                              </h2>
                              <p className="text-2xl text-teal-400 font-semibold mb-6">{member.role}</p>
                              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                {member.bio}
                              </p>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-xl font-semibold text-white mb-4">Expertise</h4>
                              <div className="flex flex-wrap gap-3">
                                {member.expertise.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                              >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                              </a>
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                              >
                                <Mail className="w-5 h-5" />
                                Kontakt
                              </a>
                            </div>
                          </div>
                        </SlideIn>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                
                <button
                  onClick={togglePlayPause}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  {isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % teamMembers.length)}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-teal-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
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

          {/* Values Section */}
          <div className="mb-24">
            <SlideIn direction="up">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                  <Target className="w-6 h-6 text-teal-400" />
                  <span className="text-white font-semibold">Unsere Werte</span>
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
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl"></div>
                        <div className="relative z-10">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color}/30 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-teal-400" />
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

          {/* CTA Section */}
          <div className="text-center">
            <SlideIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Werden Sie Teil unseres Teams
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Sind Sie bereit, die Zukunft der digitalen Transformation mit uns zu gestalten? 
                Entdecken Sie unsere offenen Positionen und werden Sie Teil unseres innovativen Teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/de/career"
                  className="px-10 py-5 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                >
                  Karriere entdecken
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