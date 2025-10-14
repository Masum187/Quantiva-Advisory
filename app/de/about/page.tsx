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
  const [showCEOAvatar, setShowCEOAvatar] = useState(false);

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
      {/* Synthesia-Style CEO Avatar Modal */}
      {showCEOAvatar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-4xl bg-black rounded-3xl border border-white/20 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowCEOAvatar(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Avatar Video Container */}
            <div className="relative w-full h-[600px] bg-gradient-to-br from-purple-900/30 to-teal-900/30">
              {/* Synthesia-Style Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src="https://res.cloudinary.com/dbrisux8i/image/upload/v1760346416/image3_l0nj0f.jpg"
                    alt="Gülnur Patan - CEO Avatar"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Animation Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent animate-pulse" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-20 w-4 h-4 bg-purple-400/60 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 right-20 w-3 h-3 bg-teal-400/60 rounded-full blur-sm"
              />
            </div>

            {/* Personalized Message */}
            <div className="p-8 bg-gradient-to-r from-purple-900/20 to-teal-900/20">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">Gülnur Patan</h3>
                <p className="text-purple-300">CEO & Gründerin, Quantiva Advisory</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <h4 className="text-xl font-bold text-white mb-4">Unsere Innovation, Erfolge & Ziele</h4>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-purple-400 font-semibold">🚀 Innovation:</span> Wir revolutionieren die digitale Transformation 
                      durch cutting-edge Technologien wie KI, Cloud-native Architekturen und moderne DevOps-Praktiken.
                    </p>
                    
                    <p>
                      <span className="text-teal-400 font-semibold">🏆 Erfolge:</span> Über 200 erfolgreiche Projekte, 50+ zufriedene Kunden 
                      und 15+ Jahre Expertise haben uns zu einem vertrauenswürdigen Partner im DACH-Raum gemacht.
                    </p>
                    
                    <p>
                      <span className="text-purple-400 font-semibold">🎯 Ziele:</span> Wir streben danach, der führende Partner für 
                      nachhaltige digitale Transformation zu werden und dabei Innovation mit menschlicher Expertise zu verbinden.
                    </p>
                  </div>
                </motion.div>

                <div className="flex gap-4 mt-6 justify-center">
                  <Link
                    href="/de#contact"
                    className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300"
                  >
                    Jetzt Kontakt aufnehmen
                  </Link>
                  <Link
                    href="/de/cases"
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-300"
                  >
                    Erfolgsgeschichten
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
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
                className="mb-8"
              >
                {/* Quantiva Logo */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Das sind{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                  Wir
                </span>
              </h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Jeden Tag gestalten wir die digitale Zukunft unserer Kunden. Mit Expertise in SAP, Cloud und AI 
                  schaffen wir nachhaltige Wertschöpfung in allen Bereichen der digitalen Transformation.
                </p>

                <div className="flex gap-4">
                  <Link
                    href="/de/career"
                    className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
                  >
                    Karriere bei uns
                  </Link>
                  <Link
                    href="/de/team"
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white rounded-xl font-semibold hover:bg-teal-500/10 transition-all duration-300"
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

      {/* Mission & Vision - Innovative 3D Cards */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-full blur-2xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideIn>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8"
              >
                {/* Quantiva Logo */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <span className="text-teal-300 text-sm font-semibold tracking-wider">UNSERE IDENTITÄT</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Mission &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                  Vision
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Wir glauben an eine Zukunft, in der Technologie Menschen befähigt und Unternehmen transformiert
              </p>
            </div>
          </SlideIn>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card - Interactive 3D */}
            <SlideIn direction="left" delay={0.2}>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative"
              >
                {/* 3D Card Container */}
                <div className="relative h-full p-12 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  {/* Background Image - Full Visibility */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=80"
                      alt="Team Collaboration & Mission"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 right-8 w-4 h-4 bg-purple-400/60 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-8 w-3 h-3 bg-teal-400/60 rounded-full blur-sm"
                  />

                  {/* Icon with Glow Effect */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-10 h-10 text-purple-300 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-white transition-all duration-300">
                    Mission
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    Wir befähigen Unternehmen, ihre digitale Transformation erfolgreich zu meistern. 
                    Durch modernste Technologien, tiefes Fachwissen und echte Partnerschaft schaffen 
                    wir nachhaltige Wertschöpfung und Wettbewerbsvorteile.
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-300 font-medium">Excellence</span>
                      <span className="text-sm text-purple-300 font-medium">100%</span>
                    </div>
                    <div className="w-full h-2 bg-purple-900/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>

            {/* Vision Card - Interactive 3D */}
            <SlideIn direction="right" delay={0.4}>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -5,
                  rotateX: 5,
                }}
                className="group relative"
              >
                {/* 3D Card Container */}
                <div className="relative h-full p-12 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  {/* Background Image - Full Visibility */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&auto=format&q=80"
                      alt="Innovation & Future Vision"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-8 left-8 w-4 h-4 bg-teal-400/60 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 right-8 w-3 h-3 bg-purple-400/60 rounded-full blur-sm"
                  />

                  {/* Icon with Glow Effect */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-10 h-10 text-teal-300 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-teal-400/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-white transition-all duration-300">
                    Vision
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                    Wir streben danach, der vertrauenswürdigste Partner für digitale Transformation 
                    im DACH-Raum zu werden. Eine Zukunft, in der Innovation und menschliche Expertise 
                    Hand in Hand gehen.
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-teal-300 font-medium">Innovation</span>
                      <span className="text-sm text-teal-300 font-medium">100%</span>
                    </div>
                    <div className="w-full h-2 bg-teal-900/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values - Innovative 3D Accordion */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-900/5 to-black relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-teal-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-8 h-8 border-2 border-purple-400/30 rotate-45"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-20 w-6 h-6 bg-teal-400/20 rounded-full"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideIn>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8"
              >
                {/* Quantiva Logo */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <span className="text-teal-300 text-sm font-semibold tracking-wider">UNSERE WERTE</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Werte &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                  Prinzipien
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Was uns antreibt und wie wir arbeiten
              </p>
            </div>
          </SlideIn>

          {/* Innovative 3D Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Excellence Card */}
            <SlideIn direction="left" delay={0.2}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50,
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-black/20 border border-white/20 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/10">
                  {/* Background Image - Full Visibility */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Excellence & Quality"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                  
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                      x: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full blur-sm"
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-white transition-all duration-300">
                      Excellence
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Excellence ist kein Ziel, sondern eine Reise. Wir streben in jedem Projekt nach höchster Qualität.
                  </p>

                  {/* Interactive Progress Rings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-sm text-purple-300">Qualität</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-sm text-teal-300">Innovation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>

            {/* Innovation Card */}
            <SlideIn direction="right" delay={0.4}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -10,
                  z: 50,
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-teal-900/40 via-teal-800/20 to-teal-900/40 border border-teal-500/30 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/30">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Innovation & Technology"
                      className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/70 to-teal-900/85" />
                  </div>
                  
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [5, -5, 5],
                      x: [2, -2, 2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full blur-sm"
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-teal-300 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-white transition-all duration-300">
                      Innovation
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Wir bleiben am Puls der Zeit und bringen die neuesten Innovationen in Ihre Organisation.
                  </p>

                  {/* Interactive Progress Rings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                      <span className="text-sm text-teal-300">Cloud</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-sm text-purple-300">AI/ML</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>

            {/* Partnership Card */}
            <SlideIn direction="left" delay={0.6}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50,
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-purple-900/40 border border-purple-500/30 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/30">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Partnership & Collaboration"
                      className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-purple-800/70 to-purple-900/85" />
                  </div>
                  
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [-3, 3, -3],
                      x: [-1, 1, -1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-purple-400/60 rounded-full blur-sm"
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-white transition-all duration-300">
                      Partnerschaft
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Wir verstehen uns als echte Partner unserer Kunden mit langfristigen Beziehungen.
                  </p>

                  {/* Interactive Progress Rings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-sm text-purple-300">Vertrauen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-sm text-teal-300">Transparenz</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>

            {/* Sustainability Card */}
            <SlideIn direction="right" delay={0.8}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -10,
                  z: 50,
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-teal-900/40 via-teal-800/20 to-teal-900/40 border border-teal-500/30 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/30">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format&q=80"
                      alt="Sustainability & Green Technology"
                      className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/70 to-teal-900/85" />
                  </div>
                  
                  {/* 3D Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <motion.div
                    animate={{
                      y: [3, -3, 3],
                      x: [1, -1, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-teal-400/60 rounded-full blur-sm"
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-teal-600/20 border border-teal-400/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-teal-300 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-white transition-all duration-300">
                      Nachhaltigkeit
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    Digitale Transformation muss nachhaltig sein - technologisch, wirtschaftlich und ökologisch.
                  </p>

                  {/* Interactive Progress Rings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                      <span className="text-sm text-teal-300">Green IT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <span className="text-sm text-purple-300">Langlebig</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-24 bg-gradient-to-br from-purple-900/20 via-black to-teal-900/20 border-y border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <div className="relative group cursor-pointer" onClick={() => setShowCEOAvatar(true)}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://res.cloudinary.com/dbrisux8i/image/upload/v1760346416/image3_l0nj0f.jpg"
                  alt="Gülnur Patan - CEO"
                  className="relative rounded-3xl w-full h-[600px] object-cover border border-purple-500/20 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </div>
                </div>
                {/* Hover Text */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Klicken Sie für eine persönliche Nachricht</p>
                </div>
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
                  className="px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-lg font-semibold rounded-xl hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
                <Link
                  href="/de/cases"
                  className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
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
