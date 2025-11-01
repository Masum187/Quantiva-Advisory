'use client';

import React, { useState, useMemo } from 'react';
import casesData from '../../lib/data/cases.json';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import CommandPalette from '../../components/CommandPalette';
import Navigation from '../../components/Navigation';
import { 
  Brain, 
  Cog, 
  Database, 
  Shield, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Layers, 
  Workflow, 
  Bot,
  Users
} from 'lucide-react';

export default function CasesPage() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Navigation items for German
  const navigationItems = [
    { id: 'home', label: 'Home', href: '/de' },
    { id: 'about', label: 'Über uns', href: '/de/about' },
    { id: 'services', label: 'Services', href: '/de#services' },
    { id: 'cases', label: 'Projekte', href: '/de/cases' },
    { id: 'team', label: 'Team', href: '/de/team' },
    { id: 'career', label: 'Karriere', href: '/de#career' },
  ];

  const videos = useMemo(() => [
    'https://res.cloudinary.com/dbrisux8i/video/upload/v1760470890/Eyes_Zoom_in_seed1137337382_jeox5c.mp4',
    'https://res.cloudinary.com/dbrisux8i/video/upload/v1760470890/90s_Me_seed3095152270_jjxpfg.mp4'
  ], []);

  // Rotate videos every 8 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [videos]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Projekte & Innovation - Quantiva Advisory</title>
        <meta name="description" content="Entdecken Sie unsere innovativen KI-Projekte: QA.Orchestrator, PromptSAP und RecruAI. Zukunftsweisende Technologien für die digitale Transformation." />
        <meta name="keywords" content="KI-Projekte, SAP-Beratung, QA.Orchestrator, PromptSAP, RecruAI, Innovation, Quantiva Advisory" />
        <meta property="og:title" content="Projekte & Innovation - Quantiva Advisory" />
        <meta property="og:description" content="Entdecken Sie unsere innovativen KI-Projekte und zukunftsweisende Technologien für die digitale Transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantivaadvisory-masum187s-projects.vercel.app/de/cases" />
        <meta property="og:image" content="https://quantivaadvisory-masum187s-projects.vercel.app/assets/og/cases.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projekte & Innovation - Quantiva Advisory" />
        <meta name="twitter:description" content="Entdecken Sie unsere innovativen KI-Projekte und zukunftsweisende Technologien." />
        <meta name="twitter:image" content="https://quantivaadvisory-masum187s-projects.vercel.app/assets/og/cases.jpg" />
        <link rel="canonical" href="https://quantivaadvisory-masum187s-projects.vercel.app/de/cases" />
        <link rel="alternate" hrefLang="de" href="https://quantivaadvisory-masum187s-projects.vercel.app/de/cases" />
        <link rel="alternate" hrefLang="en" href="https://quantivaadvisory-masum187s-projects.vercel.app/en/cases" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Projekte & Innovation - Quantiva Advisory",
              "description": "Entdecken Sie unsere innovativen KI-Projekte und zukunftsweisende Technologien für die digitale Transformation.",
              "url": "https://quantivaadvisory-masum187s-projects.vercel.app/de/cases",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "CreativeWork",
                    "position": 1,
                    "name": "QA.Orchestrator",
                    "description": "Agentisches Testsystem für SAP mit KI-gestützter Prozess-Orchestrierung",
                    "creator": {
                      "@type": "Organization",
                      "name": "Quantiva Advisory"
                    }
                  },
                  {
                    "@type": "CreativeWork", 
                    "position": 2,
                    "name": "PromptSAP",
                    "description": "KI-Agent für SAP mit natürlicher Sprachverarbeitung",
                    "creator": {
                      "@type": "Organization",
                      "name": "Quantiva Advisory"
                    }
                  },
                  {
                    "@type": "CreativeWork",
                    "position": 3,
                    "name": "RecruAI",
                    "description": "KI-gestütztes Recruiting-System für intelligente Personalauswahl",
                    "creator": {
                      "@type": "Organization",
                      "name": "Quantiva Advisory"
                    }
                  }
                ]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Startseite",
                    "item": "https://quantivaadvisory-masum187s-projects.vercel.app/de"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projekte",
                    "item": "https://quantivaadvisory-masum187s-projects.vercel.app/de/cases"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Command Palette */}
      <CommandPalette />
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Navigation */}
        <Navigation lang="de" items={navigationItems} />
        
        {/* Full-Page Half-Circle Video */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isVideoExpanded ? "0%" : "50%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-[100vw] h-[100vh] z-40 pointer-events-none"
        >
          <div className="relative w-full h-full">
            {/* Half-circle container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isVideoExpanded ? "0%" : "25%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[80vw] h-[60vh] bg-gray-900 rounded-l-full overflow-hidden shadow-2xl"
            >
              {videos.map((videoSrc, index) => (
                <motion.video
                  key={videoSrc}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isVideoExpanded ? (index === currentVideoIndex ? 1 : 0) : (index === currentVideoIndex ? 0.3 : 0)
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-contain rounded-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ zIndex: index === currentVideoIndex ? 1 : 0 }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </motion.video>
              ))}
            </motion.div>
            {/* Glow effect */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ 
                scale: isVideoExpanded ? 1.1 : 1
              }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-[80vw] h-[60vh] rounded-full bg-gradient-to-r from-teal-400/30 via-purple-400/30 to-pink-400/30 blur-3xl"
            />
          </div>
        </motion.div>

        {/* Hero Section - Solana Style */}
        <section id="main-content" className="relative bg-black text-white py-24 z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Main Hero Content */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
              {/* Main Headline */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  KI-Projekte für die
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Enterprise-Welt
                  </span>
                </h2>
                
                {/* Subtitle */}
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Von der Idee zur Realität. Quantiva verwandelt komplexe KI-Konzepte in messbare Business-Ergebnisse.
                </p>
                
                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                  aria-label={isVideoExpanded ? "Video reduzieren" : "Video ansehen"}
                >
                  GO TO CASE STUDIES
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
            
            {/* Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl p-8 border border-teal-500/30">
                <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
                <div className="text-white text-sm">Erfolgreiche Projekte</div>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-white text-sm">Innovative Plattformen</div>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl p-8 border border-pink-500/30">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-white text-sm">KI-Integration</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Roadmap Projects Section */}
        <section className="bg-black pt-0 pb-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Unsere <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Projekt-Roadmap</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Von der Idee zur Realität. Entdecken Sie unsere innovativen KI-Projekte auf dem Weg zur Zukunft.
              </p>
            </motion.div>
            
            {/* Roadmap Container */}
            <div className="relative">
              {/* Tunnel Background with Perspective */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-[200px]" style={{ perspective: '1000px' }}>
                  {/* Multiple tunnel layers for depth */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: `${100 - i * 15}%`,
                        height: `${100 - i * 15}%`,
                        border: `2px solid rgba(236, 72, 153, ${0.3 - i * 0.04})`,
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                      }}
                      animate={{
                        borderColor: [
                          `rgba(236, 72, 153, ${0.3 - i * 0.04})`,
                          `rgba(168, 85, 247, ${0.3 - i * 0.04})`,
                          `rgba(59, 130, 246, ${0.3 - i * 0.04})`,
                          `rgba(236, 72, 153, ${0.3 - i * 0.04})`
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Projects Roadmap */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
                {[
                  { name: "FlowGrid OS", color: "from-fuchsia-500 to-purple-500", icon: Brain, stats: "50%+" },
                  { name: "OrchestIQ", color: "from-purple-500 to-cyan-500", icon: Cog, stats: "70%" },
                  { name: "Proofroom", color: "from-cyan-500 to-blue-500", icon: Target, stats: "40%" },
                  { name: "SkillLedger", color: "from-blue-500 to-indigo-500", icon: Users, stats: "90%" },
                  { name: "Verisprint", color: "from-indigo-500 to-purple-500", icon: Bot, stats: "60%" }
                ].map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group cursor-pointer relative"
                  >
                    {/* Glowing card */}
                    <div className={`relative h-[400px] bg-gradient-to-br ${project.color} rounded-3xl p-8 overflow-hidden border-2 border-transparent hover:border-white/30 transition-all duration-500`}>
                      {/* Animated glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                        animate={{
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.3
                        }}
                      />
                      
                      {/* Pulsing orbs */}
                      <motion.div
                        className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.5
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Icon */}
                        <motion.div
                          className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <project.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {/* Project Name */}
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                            {project.name}
                          </h3>
                          
                          {/* Stats */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-5xl font-bold text-white">{project.stats}</div>
                            <div className="text-white/80 text-sm">Produktivität</div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-white/90 leading-relaxed text-sm">
                            Innovative KI-Plattform für intelligente Automatisierung und Prozess-Optimierung.
                          </p>
                        </div>
                        
                        {/* CTA Arrow */}
                        <motion.div
                          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                          whileHover={{ scale: 1.1, x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-3xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Banner */}
        <section className="relative py-16 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent z-10"></div>
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{
              x: ["100%", "-100%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...Array(2)].map((_, i) => ( // Duplicate content for seamless loop
              <div key={i} className="flex items-center gap-12 px-6">
                <h2 className="text-5xl font-bold text-white">Join a thriving community.</h2>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
                    <div className="text-white text-sm">Projekte</div>
                  </div>
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                      alt="Team Collaboration"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-400 mb-2">3</div>
                    <div className="text-white text-sm">Plattformen</div>
                  </div>
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"
                      alt="Code Development"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-white text-sm">KI-Integration</div>
                  </div>
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=500&auto=format&fit=crop"
                      alt="AI Integration"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-white text-sm">Support</div>
                  </div>
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"
                      alt="24/7 Support"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Lassen Sie uns gemeinsam Ihre Success Story schreiben
            </h2>
            <p className="text-teal-100 mb-8 text-lg">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <Link
              href="/de#contact"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}