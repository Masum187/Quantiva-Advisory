'use client';

import React, { useState, useMemo } from 'react';
import casesData from '../../lib/data/cases.json';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import CommandPalette from '../../components/CommandPalette';
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

  // Ambient gradient scroll effect
  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}`);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

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
      
      <div className="min-h-screen bg-background ambient-gradient relative overflow-hidden dark">
      {/* Full-Page Half-Circle Video */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isVideoExpanded ? "0%" : "50%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-[100vw] h-[100vh] z-40 pointer-events-none"
      >
        <div className="relative w-full h-full">
          {/* Half-Circle Shape */}
          <div className="absolute top-0 right-0 w-[80vw] h-[60vh] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full transform translate-x-1/4">
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
            </div>
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{ 
              opacity: isVideoExpanded ? 0.6 : 0.2,
              scale: isVideoExpanded ? 1.1 : 1
            }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-[80vw] h-[60vh] rounded-full bg-gradient-to-r from-teal-400/30 via-purple-400/30 to-pink-400/30 blur-3xl"
          />
        </div>
      </motion.div>

      {/* Hero Section - Modern Dark */}
      <section id="main-content" className="relative bg-background text-foreground py-24 z-10">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Modern Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center shadow-2xl"
              >
                <span className="text-foreground font-bold text-3xl">Q</span>
              </motion.div>

              {/* Main Title with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Projekte
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-muted-foreground leading-relaxed mb-8"
              >
                Erfolgsgeschichten aus verschiedenen Branchen und Technologien.
                Erfahren Sie, wie wir unseren Kunden zu digitalem Erfolg verhelfen.
              </motion.p>

              {/* Video Zoom Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto lg:mx-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={isVideoExpanded ? "Video reduzieren" : "Video vergrößern"}
              >
                {isVideoExpanded ? (
                  <>
                    <span>Video reduzieren</span>
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.div>
                  </>
                ) : (
                  <>
                    <span>Video erweitern</span>
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ←
                    </motion.div>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Right: Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="relative h-96 lg:h-[500px] flex items-center justify-center"
            >
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                  scale: isVideoExpanded ? [1, 1.2, 1] : [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-10 right-10 w-8 h-8 bg-teal-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                  scale: isVideoExpanded ? [1, 1.3, 1] : [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 4, 0],
                  scale: isVideoExpanded ? [1, 1.4, 1] : [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-32 right-32 w-4 h-4 bg-pink-400 rounded-full opacity-60"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Future Projects Roadmap - Separated Sections */}
      {/* QA.Orchestrator Section */}
      <section className="bg-black py-24 relative">
        {/* Section Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">01</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-32"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Future & Past
            </h2>
          </motion.div>

          {/* Roadmap Tree Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Innovation Roadmap</h2>
              
              {/* Tree Structure */}
              <div className="relative">
                {/* Central Node - Quantiva */}
                <div className="flex justify-center mb-8">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center shadow-2xl"
                    animate={{ 
                      y: [-5, 5, -5],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-white font-bold text-lg">Q</span>
                  </motion.div>
                </div>
                <div className="text-center mb-12">
                  <h3 className="text-xl font-bold text-white">Quantiva Advisory</h3>
                  <p className="text-gray-400 text-sm">KI-Expertise & Innovation Hub</p>
                </div>

                {/* Branch Lines */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-teal-500 to-transparent"></div>
                
                {/* Three Main Branches */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  {/* QA.Orchestrator Branch */}
                  <div className="relative">
                    <div className="text-center">
                      {/* Branch Line */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                      
                      {/* Project Node */}
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-xl"
                        animate={{ 
                          y: [-3, 3, -3],
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0
                        }}
                      >
                        <Bot className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-white mb-2">QA.Orchestrator</h4>
                      <p className="text-gray-400 text-sm mb-3">Agentisches Testsystem</p>
                      <div className="text-xs text-blue-400">Phase 1</div>
                    </div>
                  </div>

                  {/* PromptSAP Branch */}
                  <div className="relative">
                    <div className="text-center">
                      {/* Branch Line */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-emerald-500 to-transparent"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                      
                      {/* Project Node */}
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-xl"
                        animate={{ 
                          y: [-3, 3, -3],
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.8
                        }}
                      >
                        <Brain className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-white mb-2">PromptSAP</h4>
                      <p className="text-gray-400 text-sm mb-3">KI-Agent für SAP</p>
                      <div className="text-xs text-emerald-400">Phase 2</div>
                    </div>
                  </div>

                  {/* RecruAI Branch */}
                  <div className="relative">
                    <div className="text-center">
                      {/* Branch Line */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                      
                      {/* Project Node */}
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-xl"
                        animate={{ 
                          y: [-3, 3, -3],
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.6
                        }}
                      >
                        <Users className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-lg font-bold text-white mb-2">RecruAI</h4>
                      <p className="text-gray-400 text-sm mb-3">KI-Recruiting</p>
                      <div className="text-xs text-purple-400">Phase 3</div>
                    </div>
                  </div>
                </div>

                {/* Future Extensions */}
                <div className="mt-12 pt-8 border-t border-gray-700/50">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <span>Zukünftige Erweiterungen</span>
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </div>
                    <div className="flex justify-center gap-6 flex-wrap">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center mx-auto mb-2">
                          <Database className="w-6 h-6 text-gray-400" />
                        </div>
                        <span className="text-gray-500 text-xs">Data Platform</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center mx-auto mb-2">
                          <Shield className="w-6 h-6 text-gray-400" />
                        </div>
                        <span className="text-gray-500 text-xs">Security AI</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center mx-auto mb-2">
                          <Cog className="w-6 h-6 text-gray-400" />
                        </div>
                        <span className="text-gray-500 text-xs">Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* QA.Orchestrator Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="card-modern card-gradient-border spotlight-hover bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-950/90 dark:to-purple-950/90 hover:from-blue-100/90 hover:to-purple-100/90 dark:hover:from-blue-900/90 dark:hover:to-purple-900/90 transition-all duration-700 hover:-translate-y-3 border border-blue-200/50 hover:border-blue-400/50 dark:border-blue-800/50 dark:hover:border-blue-600/50 shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
              {/* Left: Content */}
              <div className="space-y-6">
                {/* Project Tag */}
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  PHASE 1
                </div>
                
                {/* Project Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div>
                  <h4 className="text-3xl font-bold text-foreground">QA.Orchestrator</h4>
                  <p className="text-muted-foreground text-lg">Agentisches Testsystem für SAP</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-foreground text-lg leading-relaxed">
                  Ein agentisches Testsystem, das Anforderungen → Tests → Ausführung → Analyse durchgängig automatisiert – mit tiefem SAP-Prozessverständnis und Change-Impact-Intelligenz.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 dark:bg-white/10 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Prozess-Orchestrierung</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Knowledge Graph-basiert</p>
                  </div>
                  <div className="bg-white/60 dark:bg-white/10 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Change-Impact-AI</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Risikoanalyse für SAP</p>
                  </div>
                  <div className="bg-white/60 dark:bg-white/10 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Testdatengenerierung</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">DDIC & Customizing-aware</p>
                  </div>
                  <div className="bg-white/60 dark:bg-white/10 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Multi-Layer Tests</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">UI + API + Belegfluss</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-3">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
                    Demo ansehen
                  </button>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 border border-blue-200/50">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/80 rounded-xl p-6 border border-blue-200/50 shadow-sm">
                      <Brain className="w-8 h-8 text-blue-600 mb-4" />
                      <h6 className="text-foreground font-semibold text-sm mb-2">KI-Layer</h6>
                      <p className="text-gray-600 text-xs">LLM-Services, CV-Models, Graph-Reasoner</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-6 border border-blue-200/50 shadow-sm">
                      <Database className="w-8 h-8 text-purple-600 mb-4" />
                      <h6 className="text-foreground font-semibold text-sm mb-2">Knowledge Layer</h6>
                      <p className="text-gray-600 text-xs">Prozess-Graph + Metadaten</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-6 border border-blue-200/50 shadow-sm">
                      <Cog className="w-8 h-8 text-green-600 mb-4" />
                      <h6 className="text-foreground font-semibold text-sm mb-2">Execution Layer</h6>
                      <p className="text-gray-600 text-xs">Verteilte Runner, Test-Agents</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-6 border border-blue-200/50 shadow-sm">
                      <Shield className="w-8 h-8 text-orange-600 mb-4" />
                      <h6 className="text-foreground font-semibold text-sm mb-2">Governance</h6>
                      <p className="text-gray-600 text-xs">Audit, eSign, Traceability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Prozess-Mining & Scenario Discovery</h5>
                <p className="text-gray-400 text-sm">SAP-spezifische Extraktion aus OData/CDS-Calls und Logs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Transport-Diff Reasoning</h5>
                <p className="text-gray-400 text-sm">LLM + statische Analyse für Customizing/ABAP-Änderungen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Constraint-aware Data Synthesizer</h5>
                <p className="text-gray-400 text-sm">DDIC/Customizing-basierte gültige Datenkombinationen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Multi-Layer Oracle Builder</h5>
                <p className="text-gray-400 text-sm">UI-Ergebnis → Backend-Belegfluss → Tabellenfelder</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-red-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Agentisches Self-Healing</h5>
                <p className="text-gray-400 text-sm">Vision-Modelle für SAP GUI + Fiori Navigation</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Defekt-Triage mit SAP-Kontext</h5>
                <p className="text-gray-400 text-sm">Root-Cause via Korrelation + SAP-Hinweis-Kontext</p>
              </motion.div>
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700"
            >
              <h4 className="text-xl font-bold text-white mb-6">Vergleich mit bestehenden Tools</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-white py-3">Kriterium</th>
                      <th className="text-center text-green-400 py-3">QA.Orchestrator</th>
                      <th className="text-center text-gray-400 py-3">Tosca</th>
                      <th className="text-center text-gray-400 py-3">Worksoft</th>
                      <th className="text-center text-gray-400 py-3">UFT One</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Prozess-Knowledge-Graph</td>
                      <td className="text-center text-green-400">✅ zentral</td>
                      <td className="text-center text-gray-500">➖ teilw.</td>
                      <td className="text-center text-gray-500">➖ prozessgetrieben</td>
                      <td className="text-center text-gray-500">➖ skript-/objektgetrieben</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">SAP Transport-Impact-AI</td>
                      <td className="text-center text-green-400">✅ Deep</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Constraint-aware Data Synthese</td>
                      <td className="text-center text-green-400">✅ DDIC-basiert</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3">Multi-Layer Assertions</td>
                      <td className="text-center text-green-400">✅ standard</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                    <tr>
                      <td className="py-3">Agentisches Self-Healing</td>
                      <td className="text-center text-green-400">✅ hybrid</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                      <td className="text-center text-gray-500">➖</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PromptSAP Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-24 relative">
        {/* Section Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">02</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent flex-1 max-w-32"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              PromptSAP
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prompt-gesteuerter KI-Agent für SAP - Revolutionäre Automatisierung durch natürliche Sprache.
            </p>
          </motion.div>

          {/* PromptSAP Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-emerald-50/90 to-blue-50/90 backdrop-blur-lg rounded-none overflow-hidden hover:from-emerald-100/90 hover:to-blue-100/90 transition-all duration-700 hover:-translate-y-3 border border-emerald-200/50 hover:border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
              {/* Left: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-emerald-500/20 rounded-xl p-4 border border-emerald-500/30">
                      <Brain className="w-8 h-8 text-emerald-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Prompt-to-Change</h6>
                      <p className="text-gray-400 text-xs">KI-Agent übersetzt Prompts in SAP-Änderungen</p>
                    </div>
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <Target className="w-8 h-8 text-blue-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Impact-Graph-Analyse</h6>
                      <p className="text-gray-400 text-xs">Automatische Abhängigkeitsanalyse</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                      <Code className="w-8 h-8 text-purple-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Autonome Testgenerierung</h6>
                      <p className="text-gray-400 text-xs">Unit-, API- und E2E-Tests</p>
                    </div>
                    <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-500/30">
                      <Shield className="w-8 h-8 text-orange-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Transport-Simulation</h6>
                      <p className="text-gray-400 text-xs">Dry-Run mit Validierung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                {/* Project Tag */}
                <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                  PHASE 2
                </div>
                
                {/* Project Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900">PromptSAP</h4>
                    <p className="text-gray-600 text-lg">Prompt-gesteuerter KI-Agent für SAP</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ein KI-Agent, der durch Prompts direkt Customizing oder ABAP-/UI5-Entwicklung durchführt, automatisch Impact-Analysen erstellt und Tests generiert – bevor Änderungen ins Produktivsystem gelangen.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Prompt-to-Change</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Natürliche Sprache zu SAP-Änderungen</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Impact-Analyse</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Automatische Abhängigkeitsanalyse</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Testgenerierung</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Unit-, API- und E2E-Tests</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-emerald-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <h5 className="text-foreground font-semibold">Transport-Simulation</h5>
                    </div>
                    <p className="text-muted-foreground text-sm">Dry-Run mit Validierung</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-3">
                  <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
                    Demo ansehen
                  </button>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-emerald-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Prompt-to-Change-Engine</h5>
                <p className="text-gray-400 text-sm">Natürliche Sprache zu SAP-Customizing/Entwicklung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Impact-Graph-Analyse</h5>
                <p className="text-gray-400 text-sm">Statische Code-Checks, Abhängigkeitsgraphen, Transportkonflikte</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Autonome Testgenerierung</h5>
                <p className="text-gray-400 text-sm">ABAP-Unit-Tests, API-Tests, End-to-End-Szenarien</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Shield className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Transport-Simulation</h5>
                <p className="text-gray-400 text-sm">Dry-Run mit Validierung vor Produktiv-Transport</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Audit-Report</h5>
                <p className="text-gray-400 text-sm">Vollständige Nachvollziehbarkeit aller Schritte</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-red-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">gCTS/CTS+ Integration</h5>
                <p className="text-gray-400 text-sm">Nahtlose Integration in SAP Transport-Management</p>
              </motion.div>
            </div>

            {/* Example Use Case */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700"
            >
              <h4 className="text-xl font-bold text-white mb-6">Beispiel-Use-Case</h4>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Prompt:</h5>
                    <p className="text-gray-300 italic mb-4">
                      &ldquo;Füge eine Packvorschriften-Prüfung im Wareneingang hinzu.&rdquo;
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Agent erstellt Customizing-Tabelle</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">BAdI-Implementierung wird generiert</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Tests werden automatisch erstellt</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Impact-Analyse zeigt unberührte Prozesse</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Transport-Dry-Run erfolgreich → Go</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-xl p-6 border border-emerald-500/30">
                <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Zeitersparnis</h5>
                <p className="text-gray-400 text-sm">Automatisierung von manuellen Prozessen reduziert Entwicklungszeit um bis zu 70%</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Höhere Sicherheit</h5>
                <p className="text-gray-400 text-sm">Dry-Run-Validierung verhindert Produktiv-Ausfälle</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 rounded-xl p-6 border border-purple-500/30">
                <Target className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Standardisierte Qualität</h5>
                <p className="text-gray-400 text-sm">Konsistente Change-Qualität durch KI-gesteuerte Prozesse</p>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RecruAI Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-24 relative">
        {/* Section Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">03</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              RecruAI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KI-gesteuertes End-to-End Recruiting - Revolutionäre Plattform für den europäischen Recruiting-Markt.
            </p>
          </motion.div>

          {/* RecruAI Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-l-3xl rounded-r-none overflow-hidden hover:bg-gray-800/70 transition-all duration-700 hover:-translate-y-3 border border-gray-700/50 hover:border-purple-400/50 shadow-2xl hover:shadow-purple-500/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">RecruAI</h4>
                    <p className="text-gray-400">KI-gesteuertes End-to-End Recruiting</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Eine revolutionäre Plattform, die den europäischen Recruiting-Markt durch KI-gesteuertes End-to-End-System transformiert. Statt klassischer Interviews setzen wir auf bezahlte Probephasen mit integrierter Onboarding-/Offboarding-Lösung.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Dual-Modell: Contracting + Permanent</h5>
                      <p className="text-gray-400 text-sm">IT-, KI- und Engineering-Talente für beide Anstellungsformen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">&ldquo;No Interview&rdquo; → 5-Tage-Probephase</h5>
                      <p className="text-gray-400 text-sm">Reale Leistungsbewertung im Kundenumfeld</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">KI-Jobportal mit Chatbot</h5>
                      <p className="text-gray-400 text-sm">Stellen in Minuten über KI-Chatbot erstellen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="text-white font-semibold">Integrierte Onboarding-Lösung</h5>
                      <p className="text-gray-400 text-sm">Automatisierung von HR-Admin-Prozessen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                      <Users className="w-8 h-8 text-purple-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">KI-Recruiting</h6>
                      <p className="text-gray-400 text-xs">End-to-End Talent-Matching</p>
                    </div>
                    <div className="bg-pink-500/20 rounded-xl p-4 border border-pink-500/30">
                      <Target className="w-8 h-8 text-pink-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Probephase</h6>
                      <p className="text-gray-400 text-xs">5-Tage Trial im Kundenumfeld</p>
                    </div>
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <Brain className="w-8 h-8 text-blue-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">KI-Chatbot</h6>
                      <p className="text-gray-400 text-xs">Job-Erstellung in Minuten</p>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <Workflow className="w-8 h-8 text-green-400 mb-3" />
                      <h6 className="text-white font-semibold text-sm">Onboarding</h6>
                      <p className="text-gray-400 text-xs">Automatisierte HR-Prozesse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Users className="w-8 h-8 text-purple-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Dual-Modell-Plattform</h5>
                <p className="text-gray-400 text-sm">Contracting und Permanent Placement in einer Lösung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Target className="w-8 h-8 text-pink-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Bezahlte Probephase</h5>
                <p className="text-gray-400 text-sm">5-Tage Trial statt klassischer Interviews</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Brain className="w-8 h-8 text-blue-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">KI-Jobportal</h5>
                <p className="text-gray-400 text-sm">Chatbot erstellt Stellen in Minuten</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Workflow className="w-8 h-8 text-green-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Onboarding-Automation</h5>
                <p className="text-gray-400 text-sm">Integrierte HR-Prozess-Automatisierung</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Layers className="w-8 h-8 text-orange-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Smart Templates</h5>
                <p className="text-gray-400 text-sm">Intelligente Job- und Projektvorlagen</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                <h5 className="text-white font-semibold mb-2">Anonymes Posting</h5>
                <p className="text-gray-400 text-sm">Datenschutz-konforme Stellenausschreibungen</p>
              </motion.div>
            </div>

            {/* Market Opportunity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 mb-12"
            >
              <h4 className="text-xl font-bold text-white mb-6">Marktchance & Vision</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-white font-semibold mb-4">Marktpotenzial</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Marktvolumen: &gt;40 Mrd. EUR in Europa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">3 Mio. EUR Seed-Kapital gesichert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <span className="text-gray-300">Ziel: Führender Anbieter in 5 Jahren</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-4">Zielgruppe</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">IT-, KI- und Engineering-Talente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span className="text-gray-300">Unternehmen aller Größen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">Recruitment-as-a-Service Segment</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* For Companies */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Für Unternehmen
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Besetzung in Tagen, nicht Monaten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Höhere Qualität durch reale Leistungsbewertung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Kostentransparenz über Abo-/Flatfee-Modell</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Automatisierung von HR-Admin</span>
                  </div>
                </div>
              </div>

              {/* For Talents */}
              <div className="bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-xl p-6 border border-pink-500/30">
                <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-400" />
                  Für Talente
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Fairer Zugang durch objektive Trial-Evaluierung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Kontinuierliche CV-Optimierung durch KI</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Community & Weiterbildungsmöglichkeiten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Bezahlte Probephasen statt unbezahlte Interviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <h4 className="text-2xl font-bold text-white mb-4">Nächste Schritte</h4>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Wenn Sie interessiert sind, skizzieren wir gerne eine konkrete Modul-Roadmap (MVP → v1.0 in 3 Releases) und die Schnittstellenliste für Ihr SAP-Umfeld.
              </p>
              <Link
                href="/de#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Projekt anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Banner - Moving from Right to Left */}
      <section className="bg-black py-20 overflow-hidden relative">
        <div className="relative">
          {/* Moving Banner Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {/* Community Title */}
            <div className="text-6xl font-bold text-white flex-shrink-0">
              Join a thriving community.
            </div>

            {/* Statistics and Images Grid */}
            <div className="flex items-center gap-12 flex-shrink-0">
              {/* Stat 1 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-white text-sm">Erfolgreiche Projekte</div>
              </div>

              {/* Image 1 - Team Collaboration */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                  alt="Team Collaboration"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 2 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-green-400 mb-2">3</div>
                <div className="text-white text-sm">Innovative Plattformen</div>
              </div>

              {/* Image 2 - Development */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"
                  alt="Development Team"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 3 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-white text-sm">KI-Integration</div>
              </div>

              {/* Image 3 - Innovation */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=500&auto=format&fit=crop"
                  alt="Innovation"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 4 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-white text-sm">Support & Beratung</div>
              </div>

              {/* Image 4 - Conference */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"
                  alt="Conference"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Repeat for seamless loop */}
            <div className="text-6xl font-bold text-white flex-shrink-0">
              Join a thriving community.
            </div>

            <div className="flex items-center gap-12 flex-shrink-0">
              {/* Stat 1 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-white text-sm">Erfolgreiche Projekte</div>
              </div>

              {/* Image 1 - Team Collaboration */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
                  alt="Team Collaboration"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 2 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-green-400 mb-2">3</div>
                <div className="text-white text-sm">Innovative Plattformen</div>
              </div>

              {/* Image 2 - Development */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop"
                  alt="Development Team"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 3 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-white text-sm">KI-Integration</div>
              </div>

              {/* Image 3 - Innovation */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=500&auto=format&fit=crop"
                  alt="Innovation"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat 4 */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center min-w-[200px]">
                <div className="text-5xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-white text-sm">Support & Beratung</div>
              </div>

              {/* Image 4 - Conference */}
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop"
                  alt="Conference"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* CTA Section */}
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

