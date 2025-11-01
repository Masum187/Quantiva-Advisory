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
            
            {/* Snake-Style Roadmap Container */}
            <div className="relative min-h-[1200px] py-16">
              {/* Tunnel Background with Perspective */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                  {/* Multiple tunnel layers for depth */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        width: `${100 - i * 15}%`,
                        height: `${100 - i * 15}%`,
                        border: `2px solid rgba(236, 72, 153, ${0.2 - i * 0.03})`,
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                      }}
                      animate={{
                        borderColor: [
                          `rgba(236, 72, 153, ${0.2 - i * 0.03})`,
                          `rgba(168, 85, 247, ${0.2 - i * 0.03})`,
                          `rgba(59, 130, 246, ${0.2 - i * 0.03})`,
                          `rgba(236, 72, 153, ${0.2 - i * 0.03})`
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

              {/* Snake Road Path SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                <defs>
                  <pattern id="dashPattern" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="5" x2="20" y2="5" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="10,10" />
                  </pattern>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main winding path */}
                <motion.path
                  d="M 50 900 Q 150 700 300 650 Q 500 600 700 550 Q 850 500 1000 450 Q 1100 400 1200 350 L 1400 300"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.4)"
                  strokeWidth="60"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Dashed center line */}
                <motion.path
                  d="M 50 900 Q 150 700 300 650 Q 500 600 700 550 Q 850 500 1000 450 Q 1100 400 1200 350 L 1400 300"
                  fill="none"
                  stroke="url(#dashPattern)"
                  strokeWidth="4"
                  strokeDasharray="15,10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                
                {/* Arrow at the end */}
                <motion.polygon
                  points="1380,280 1400,300 1380,320 1390,300"
                  fill="rgba(236, 72, 153, 0.8)"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                />
              </svg>

              {/* Project Bubbles positioned along the path */}
              <div className="relative z-20">
                {[
                  { name: "FlowGrid OS", color: "#ec4899", gradient: "from-fuchsia-500 to-purple-500", icon: Brain, position: { left: "8%", top: "75%" }, step: "A" },
                  { name: "OrchestIQ", color: "#a855f7", gradient: "from-purple-500 to-cyan-500", icon: Cog, position: { left: "25%", top: "60%" }, step: "B" },
                  { name: "Proofroom", color: "#06b6d4", gradient: "from-cyan-500 to-blue-500", icon: Target, position: { left: "50%", top: "50%" }, step: "C" },
                  { name: "SkillLedger", color: "#3b82f6", gradient: "from-blue-500 to-indigo-500", icon: Users, position: { left: "70%", top: "38%" }, step: "D" },
                  { name: "Verisprint", color: "#8b5cf6", gradient: "from-indigo-500 to-purple-500", icon: Bot, position: { left: "90%", top: "28%" }, step: "E" }
                ].map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", stiffness: 150 }}
                    className="absolute group cursor-pointer"
                    style={{
                      left: project.position.left,
                      top: project.position.top,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Animated Bubble */}
                    <motion.div
                      className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} shadow-2xl border-2 border-white/30 flex items-center justify-center z-10`}
                      animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2
                      }}
                      whileHover={{
                        scale: 1.3,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className="absolute -inset-4 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                        animate={{
                          opacity: [0, 0.2, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.3
                        }}
                      />
                      
                      {/* Icon inside bubble */}
                      <project.icon className="w-12 h-12 text-white z-10 relative" />
                      
                      {/* Step badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg z-20">
                        <span className="text-white font-bold text-xs">{project.step}</span>
                      </div>
                    </motion.div>

                    {/* Thought Bubble Tooltip - appears on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-30 pointer-events-none opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      {/* Speech bubble card */}
                      <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border-2 border-white/20 min-w-[220px]">
                        {/* Project name */}
                        <h4 className="text-white font-bold text-lg mb-2 text-center">
                          {project.name}
                        </h4>
                        
                        {/* CTA text */}
                        <p className="text-white/80 text-sm text-center mb-3">
                          Klicken Sie hier um mehr zu erfahren
                        </p>
                        
                        {/* Arrow indicator */}
                        <div className="flex justify-center">
                          <ArrowRight className="w-5 h-5 text-white/60" />
                        </div>
                        
                        {/* Speech bubble tail pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                          <div 
                            className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900/95"
                            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                          />
                        </div>
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
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