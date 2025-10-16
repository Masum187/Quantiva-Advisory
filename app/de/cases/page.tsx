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
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 text-teal-300 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                  Designed for real world use
                </div>
                
                {/* Logo + Company Name */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center justify-center gap-4 mb-8"
                >
                  {/* Quantiva Logo */}
                  <motion.div 
                    className="w-16 h-16 relative"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-teal-400">
                      {/* Outer Hexagon */}
                      <polygon 
                        points="50,5 85,25 85,75 50,95 15,75 15,25" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      />
                      {/* Inner Hexagon */}
                      <polygon 
                        points="50,20 70,30 70,70 50,80 30,70 30,30" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                      />
                      {/* Network Lines */}
                      <line x1="50" y1="20" x2="50" y2="5" stroke="currentColor" strokeWidth="1"/>
                      <line x1="70" y1="30" x2="85" y2="25" stroke="currentColor" strokeWidth="1"/>
                      <line x1="70" y1="70" x2="85" y2="75" stroke="currentColor" strokeWidth="1"/>
                      <line x1="50" y1="80" x2="50" y2="95" stroke="currentColor" strokeWidth="1"/>
                      <line x1="30" y1="70" x2="15" y2="75" stroke="currentColor" strokeWidth="1"/>
                      <line x1="30" y1="30" x2="15" y2="25" stroke="currentColor" strokeWidth="1"/>
                      {/* Network Nodes */}
                      <circle cx="50" cy="5" r="2" fill="currentColor"/>
                      <circle cx="85" cy="25" r="2" fill="currentColor"/>
                      <circle cx="85" cy="75" r="2" fill="currentColor"/>
                      <circle cx="50" cy="95" r="2" fill="currentColor"/>
                      <circle cx="15" cy="75" r="2" fill="currentColor"/>
                      <circle cx="15" cy="25" r="2" fill="currentColor"/>
                      {/* Additional connecting lines */}
                      <line x1="50" y1="50" x2="70" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                      <line x1="50" y1="50" x2="30" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                      <line x1="50" y1="50" x2="70" y2="70" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                      <line x1="50" y1="50" x2="30" y2="70" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                    </svg>
                  </motion.div>
                  
                  {/* Company Name */}
                  <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      Quantiva Advisory
                    </h1>
                    <p className="text-teal-300 text-sm font-medium mt-1">
                      KI-Expertise & Innovation Hub
                    </p>
                  </div>
                </motion.div>

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

        {/* Case Studies Grid - Solana Style */}
        <section className="bg-black pt-0 pb-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Designed for real world use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Von der Idee zur Realität. Quantiva verwandelt komplexe KI-Konzepte in messbare Business-Ergebnisse.
              </p>
            </motion.div>
            
            {/* Asymmetric Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Large Featured Case - QA.Orchestrator */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2 group"
              >
                <div className="relative h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-blue-500/30 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Case Study Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6">
                      CASE STUDY QA.ORCHESTRATOR
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                      QA.Orchestrator aims to revolutionize SAP testing using AI agents.
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      Ein agentisches Testsystem, das Anforderungen → Tests → Ausführung → Analyse durchgängig automatisiert – mit tiefem SAP-Prozessverständnis und Change-Impact-Intelligenz.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-400">85%</div>
                        <div className="text-white text-sm">Test-Automatisierung</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-400">3x</div>
                        <div className="text-white text-sm">Schnellere Tests</div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                        <span className="font-medium">Mehr erfahren</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Smaller Cases */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* PromptSAP Case */}
                <div className="group">
                  <div className="relative h-full bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-emerald-500/30 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-5 right-5 w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium mb-4">
                        CASE STUDY PROMPTSAP
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3">
                        PromptSAP used AI agents to increase SAP efficiency by 67%.
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        Ein intelligenter KI-Agent, der natürliche Sprache in SAP-Aktionen übersetzt, um Prozesse zu automatisieren.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-white hover:text-emerald-300 transition-colors">
                          <span className="font-medium text-sm">Mehr erfahren</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* RecruAI Case */}
                <div className="group">
                  <div className="relative h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl p-6 border border-purple-500/30 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-5 right-5 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-4">
                        CASE STUDY RECRUAI
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-3">
                        RecruAI decentralized hiring with better AI matching and community incentives.
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        Ein intelligentes Recruiting-System, das KI nutzt, um den gesamten Einstellungsprozess zu optimieren.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
                          <span className="font-medium text-sm">Mehr erfahren</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Video Case */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-teal-500/30 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-5 right-5 w-20 h-20 bg-gradient-to-br from-teal-400 to-purple-600 rounded-full blur-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center px-2 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium mb-4">
                      VIDEO QUANTIVA
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">
                      Quantiva decentralizes innovation with better AI integration and enterprise solutions.
                    </h4>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      Von der Idee zur Realität. Quantiva verwandelt komplexe KI-Konzepte in messbare Business-Ergebnisse.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-white hover:text-teal-300 transition-colors">
                        <span className="font-medium text-sm">Video ansehen</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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