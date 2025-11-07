'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Zap, Brain, Target, Users, Bot, ArrowRight, Sparkles, Lock, CheckCircle2, ClipboardList, Database } from 'lucide-react';
import './ProjectRoadmap.css';

const ProjectRoadmap = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const [clickedTeamMember, setClickedTeamMember] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const focusAreasRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const circularRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const focusAreasInView = useInView(focusAreasRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const principlesInView = useInView(principlesRef, { once: true, amount: 0.2 });
  const circularInView = useInView(circularRef, { once: true, amount: 0.3 });

  // Close card when cursor leaves it (with smoke effect)
  useEffect(() => {
    if (openedIndex !== null && !cardHovered) {
      const timer = setTimeout(() => {
        setOpenedIndex(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cardHovered, openedIndex]);

  // Team members data - mapped to projects
  const teamMembers = [
    {
      id: 1,
      name: 'Gülnur Patan',
      role: 'CEO & Gründerin',
      image: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1760346416/image3_l0nj0f.jpg',
      projectIndex: 0, // FlowGrid OS
      projectStory: 'FlowGrid OS ist unsere Vision für die Zukunft der Teamkollaboration. Mit KI-gestützten Workflows revolutionieren wir, wie Teams zusammenarbeiten und komplexe Projekte effizient umsetzen. Als CEO sehe ich täglich, wie diese Plattform Unternehmen dabei hilft, ihre Produktivität zu steigern und Innovationen voranzutreiben.'
    },
    {
      id: 2,
      name: 'Dr. Michael Weber',
      role: 'CTO & Technischer Leiter',
      image: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1760221471/generated-image_30_r8cjtq.png',
      projectIndex: 1, // OrchestIQ
      projectStory: 'OrchestIQ setzt neue Maßstäbe in der Business Process Automation. Unsere intelligente Orchestrierungsplattform ermöglicht es Unternehmen, komplexe Prozesse nahtlos zu automatisieren und zu optimieren. Als CTO habe ich die technische Architektur entwickelt, die es ermöglicht, tausende von Prozessen gleichzeitig zu orchestrieren.'
    },
    {
      id: 3,
      name: 'Francja Albertijn',
      role: 'Strategieberaterin',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
      projectIndex: 2, // Proofroom
      projectStory: 'Proofroom transformiert Sales Enablement durch KI. Unsere Plattform hilft Sales-Teams, bessere Pitches zu erstellen und Conversion-Raten signifikant zu steigern. Mit meiner strategischen Expertise habe ich dabei geholfen, die Customer Journey zu optimieren und die ROI unserer Kunden zu maximieren.'
    },
    {
      id: 4,
      name: 'Roseness Simmons',
      role: 'Technologieberaterin',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
      projectIndex: 3, // SkillLedger
      projectStory: 'SkillLedger revolutioniert das Bildungsmanagement. Mit KI-gestützten Analytics können Bildungseinrichtungen personalisierte Lernpfade erstellen und den Lernerfolg maximieren. Als Technologieberaterin habe ich die Integration verschiedener Lernplattformen geleitet und sichergestellt, dass die Lösung nahtlos funktioniert.'
    },
    {
      id: 5,
      name: 'Emmanuel Di Invideo',
      role: 'Datenanalyst',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300&auto=format&fit=crop',
      projectIndex: 4, // Verisprint
      projectStory: 'Verisprint nutzt KI, um Recruiting zu revolutionieren. Unsere Plattform findet die perfekten Kandidaten durch intelligentes Matching und automatisiert den gesamten Recruiting-Prozess. Mit meiner Expertise in Datenanalyse habe ich die Algorithmen entwickelt, die die Genauigkeit unserer Matching-Prozesse auf über 95% erhöht haben.'
    },
    {
      id: 6,
      name: 'Leonett Andrew',
      role: 'Prozessberater',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
      projectIndex: 5, // ShiftGate AI
      projectStory: 'ShiftGate AI ist unsere Antwort auf moderne Sicherheitsherausforderungen. Mit KI-gestützter Bedrohungserkennung schützen wir Unternehmen vor Cyber-Angriffen in Echtzeit. Als Prozessberater habe ich die Sicherheitsprozesse optimiert und dafür gesorgt, dass die Lösung auch in komplexen Enterprise-Umgebungen nahtlos funktioniert.'
    },
    {
      id: 7,
      name: 'Michael Chen',
      role: 'IT-Architekt',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      projectIndex: 6, // SoftCheck
      projectStory: 'SoftCheck automatisiert Quality Assurance durch KI. Unser System findet Bugs schneller, testet umfassender und stellt sicher, dass nur qualitativ hochwertige Software ausgeliefert wird. Als IT-Architekt habe ich die skalierbare Infrastruktur entwickelt, die es ermöglicht, Millionen von Tests parallel durchzuführen.'
    },
    {
      id: 8,
      name: 'Sarah Martinez',
      role: 'Data Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
      projectIndex: 7, // DataVault AI
      projectStory: 'DataVault AI revolutioniert die Art und Weise, wie Unternehmen ihre Daten verwalten und analysieren. Mit KI-gestützten Algorithmen können wir große Datenmengen in Echtzeit verarbeiten und wertvolle Insights generieren. Als Data Engineer habe ich die Infrastruktur entwickelt, die es ermöglicht, Petabytes von Daten sicher und effizient zu speichern und zu analysieren.'
    }
  ];

  // Focus Areas for Cards
  const focusAreas = [
    {
      id: '01',
      title: 'Vertrieb',
      subtitle: 'der umsatzstarke Copilot',
      features: [
        'Opportunity-Intelligence: Priorisierung nach Abschlusswahrscheinlichkeit und Marge.',
        'Next-Best-Action: KI-gestützte Empfehlungen für Kontakt, Kanal und Timing.',
        'Content-AutoCraft: passgenaue E-Mails, Pitches und Angebote – markenkonform und rechtssicher.'
      ],
      icon: Target
    },
    {
      id: '02',
      title: 'Workflow-Management',
      subtitle: 'der Orchestrator für Teams und Tools',
      features: [
        'Automatisierte Prozessketten: von Anfrage bis Abrechnung, systemübergreifend.',
        'Agenten statt Workarounds: KI-Assistenten, die Daten beschaffen, prüfen und übergeben.',
        'Transparenz by Design: End-to-End-Monitoring, KPI-Dashboards und Audit-Trails.'
      ],
      icon: Bot
    },
    {
      id: '03',
      title: 'Learning',
      subtitle: 'der adaptive Kompetenz-Companion',
      features: [
        'Rollenbasiertes Upskilling: Lernpfade, die sich an Zielen und Projekten ausrichten.',
        'On-the-Job-Coaching: Antworten im Kontext realer Aufgaben statt abstrakter Kurse.',
        'Wissenssicherung: Unternehmenswissen wird auffindbar, aktuell und wiederverwendbar.'
      ],
      icon: Brain
    }
  ];

  // Timeline Data
  const timelineData = [
    {
      year: '2025',
      title: 'Validieren & Beschleunigen',
      items: [
        '5–10 Pilotprojekte in Vertrieb, Operations und HR',
        'Messbare Outcomes (z. B. Conversion, Durchlaufzeit, Time-to-Productivity)',
        'Open-Interfaces, Security & Governance als Standard'
      ]
    },
    {
      year: '2026',
      title: 'Skalieren & Markteinführung',
      items: [
        'Produktisierte Module („Copilot", „Orchestrator", „Learning Companion")',
        'Marketplace-Bereitstellung & Partner-Ökosystem',
        'Rollouts mit Erfolgsgarantien auf Basis klarer KPIs'
      ]
    }
  ];

  // Principles Data
  const principles = [
    {
      title: 'Datenschutz & Souveränität',
      description: 'EU-konforme Verarbeitung, Datenhoheit bleibt beim Kunden.'
    },
    {
      title: 'Interoperabilität',
      description: 'Offene Schnittstellen zu CRM, ERP, ITSM & Collaboration-Tools.'
    },
    {
      title: 'Responsible AI',
      description: 'Transparenz, Fairness, menschliche Kontrolle – von Anfang an.'
    },
    {
      title: 'Time-to-Value',
      description: 'Wochen statt Monate – schnelle MVPs, iterative Releases.'
    }
  ];

  const milestones = [
    {
      id: '01',
      icon: Zap,
      title: 'FlowGrid OS',
      description: 'AI-powered Collaboration Platform & Workflow Automation für intelligente Teamkollaboration',
      color: 'teal',
      position: { top: '-5%', left: '5%' },
      angle: -20,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762285982/f213ad3c-ec49-431c-9304-acd5c2d43a53_ebiuch.jpg'
    },
    {
      id: '02',
      icon: Brain,
      title: 'OrchestIQ',
      description: 'Intelligente Automatisierung & Business Process Orchestration für effiziente Prozesse',
      color: 'purple',
      position: { top: '20%', left: '-5%' },
      angle: 30,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762166973/35dcb90e-f046-431f-9552-57e85f45d53b_h62a0i.jpg'
    },
    {
      id: '03',
      icon: Target,
      title: 'Proofroom',
      description: 'AI-gestützte Sales Enablement & Marketing Automation für höhere Conversion',
      color: 'pink',
      position: { top: '0%', right: '5%' },
      angle: 15,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762182285/808a4e4c-d7d3-4ad2-90b8-afc74b3f3cb5_ygvgxq.jpg'
    },
    {
      id: '04',
      icon: Users,
      title: 'SkillLedger',
      description: 'Intelligentes Schulmanagement & Learning Analytics für personalisierte Bildung',
      color: 'teal',
      position: { top: '25%', right: '-5%' },
      angle: -30,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762183140/afadxeax39xcaj5utiy0.jpg'
    },
    {
      id: '05',
      icon: Bot,
      title: 'Verisprint',
      description: 'AI-native Recruiting Platform für intelligente Talent-Akquise und Matching',
      color: 'purple',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)' },
      angle: 0,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762180477/6db05ac3-0d38-4abd-9e47-13a5c5ab71e2_h1aedi.jpg'
    },
    {
      id: '06',
      icon: Lock,
      title: 'ShiftGate AI',
      description: 'AI-powered Security Gateway für intelligente Bedrohungserkennung und Zugriffskontrolle',
      color: 'pink',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)', offset: '120px' },
      angle: 45,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762114669/58c4aae7-e7e2-40e2-a084-3f2dbf2abdb5_hse9pv.jpg'
    },
    {
      id: '07',
      icon: CheckCircle2,
      title: 'SoftCheck',
      description: 'AI-gestütztes Quality Assurance & Testing System für automatisierte Qualitätskontrolle',
      color: 'teal',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)', offset: '-120px' },
      angle: -45,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762160270/e1cfed67-2f6a-4b57-9390-4d41d6975844_zgy0pq.jpg'
    },
    {
      id: '08',
      icon: Database,
      title: 'DataVault AI',
      description: 'KI-gestützte Datenverwaltung & Analytics Platform für intelligente Datenanalyse und -speicherung',
      color: 'purple',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)', offset: '0px' },
      angle: 0,
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762421820/ickdffvwgns0gn7jfehn.jpg'
    }
  ];

  return (
    <div className="roadmap-wrapper">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="cube-container">
          <div className="cube-3d"></div>
          <div className="cube-3d"></div>
          <div className="cube-3d"></div>
          <div className="cube-3d"></div>
          <div className="cube-3d"></div>
          <div className="cube-3d"></div>
        </div>
        <div className="bg-sphere sphere-1"></div>
        <div className="bg-sphere sphere-2"></div>
        <div className="bg-sphere sphere-3"></div>
      </div>

      <div className="roadmap-container">
        {/* Hero Section */}
        <section className="quantiva-hero-section" ref={heroRef}>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 100, rotateX: -20, scale: 0.8 }}
            animate={heroInView ? { 
              opacity: 1, 
              y: 0, 
              rotateX: 0, 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1
              }
            } : {}}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={heroInView ? { 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                transition: { delay: 0.2, type: "spring", stiffness: 80 }
              } : {}}
            >
              Quantiva Advisory – Wir bauen KI-Produkte, nicht nur PowerPoints
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={heroInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { delay: 0.4, type: "spring", stiffness: 80 }
              } : {}}
            >
              Wir beraten nicht nur in KI – wir entwickeln sie.
            </motion.p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={heroInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { delay: 0.6, type: "spring", stiffness: 80 }
              } : {}}
            >
              Quantiva Advisory treibt eigene, marktreife KI-Lösungen voran und bringt sie bis Ende 2026 in den produktiven Einsatz. Unser Anspruch: Geschäftsprozesse neu denken – vom Vertrieb über Workflow-Management bis hin zu Learning – und daraus messbaren Nutzen schaffen.
            </motion.p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            ref={missionRef}
            className="mission-section"
            initial={{ opacity: 0, y: 80, rotateX: 25, scale: 0.9 }}
            animate={missionInView ? { 
              opacity: 1, 
              y: 0, 
              rotateX: 0, 
              scale: 1,
              transition: { 
                type: "spring",
                stiffness: 90,
                damping: 12
              }
            } : {}}
            whileHover={{ 
              rotateY: 2,
              rotateX: -2,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2 
              className="mission-title"
              initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
              animate={missionInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateZ: 0,
                transition: { delay: 0.2, type: "spring" }
              } : {}}
            >
              Unsere Mission
            </motion.h2>
            <motion.p 
              className="mission-text"
              initial={{ opacity: 0, y: 20 }}
              animate={missionInView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4 }
              } : {}}
            >
              Wir verbinden strategische Beratung mit echter Produktentwicklung. Gemeinsam mit Pilotkunden entwickeln wir KI-Bausteine, die sich nahtlos in bestehende Systeme integrieren, Datenschutz respektieren und schnell Wert stiften.
            </motion.p>
          </motion.div>

          {/* Focus Areas Section */}
          <section className="focus-areas-section" ref={focusAreasRef}>
            <motion.h2
              className="focus-areas-title"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={focusAreasInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2
                }
              } : {}}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Drei Fokusfelder, neu gedacht
            </motion.h2>
            <div className="focus-areas-grid">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.id}
                    className="focus-area-card"
                    initial={{ 
                      opacity: 0, 
                      y: 100, 
                      rotateX: -45,
                      rotateY: index % 2 === 0 ? -20 : 20,
                      scale: 0.7,
                      z: -200
                    }}
                    animate={focusAreasInView ? { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1,
                      z: 0,
                      transition: { 
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: 0.3 + index * 0.15
                      }
                    } : {}}
                    whileHover={{ 
                      y: -14,
                      rotateY: index % 2 === 0 ? 2.5 : -2.5,
                      rotateX: -2,
                      scale: 1.03,
                      z: 35,
                      transition: { duration: 0.4, type: "spring", stiffness: 260 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div 
                      className="focus-area-header"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="focus-area-icon"
                        whileHover={{ 
                          rotateY: 360,
                          rotateZ: 10,
                          scale: 1.2,
                          transition: { duration: 0.6 }
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <Icon size={32} />
                      </motion.div>
                      <div>
                        <h3 className="focus-area-title">{area.title}</h3>
                        <p className="focus-area-subtitle">{area.subtitle}</p>
                      </div>
                    </motion.div>
                    <ul className="focus-area-features">
                      {area.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="focus-area-feature"
                          initial={{ opacity: 0, x: -20 }}
                          animate={focusAreasInView ? { 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: 0.5 + index * 0.15 + idx * 0.1 }
                          } : {}}
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section" ref={timelineRef}>
            <motion.h2
              className="timeline-title"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={timelineInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2
                }
              } : {}}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Unser Weg bis Ende 2026
            </motion.h2>
            <div className="timeline-grid">
              {timelineData.map((timeline, index) => (
                <motion.div
                  key={timeline.year}
                  className="timeline-card"
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -150 : 150,
                    rotateY: index % 2 === 0 ? -45 : 45,
                    scale: 0.8,
                    z: -300
                  }}
                  animate={timelineInView ? { 
                    opacity: 1, 
                    x: 0, 
                    rotateY: 0,
                    scale: 1,
                    z: 0,
                    transition: { 
                      type: "spring",
                      stiffness: 70,
                      damping: 15,
                      delay: 0.3 + index * 0.2
                    }
                  } : {}}
                  whileHover={{ 
                    rotateY: index % 2 === 0 ? 3.5 : -3.5,
                    rotateX: -2.5,
                    scale: 1.03,
                    z: 60,
                    transition: { duration: 0.4, type: "spring", stiffness: 260 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div 
                    className="timeline-year"
                    whileHover={{ 
                      scale: 1.1,
                      rotateZ: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {timeline.year}
                  </motion.div>
                  <h3 className="timeline-card-title">{timeline.title}</h3>
                  <ul className="timeline-items">
                    {timeline.items.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={timelineInView ? { 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: 0.5 + index * 0.2 + idx * 0.1 }
                        } : {}}
                        whileHover={{ x: 10, scale: 1.05 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Principles Section */}
          <section className="principles-section" ref={principlesRef}>
            <motion.h2
              className="principles-title"
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={principlesInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2
                }
              } : {}}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Prinzipien, die wir nicht verhandeln
            </motion.h2>
            <div className="principles-grid">
              {principles.map((principle, index) => {
                const row = Math.floor(index / 2);
                const col = index % 2;
                return (
                  <motion.div
                    key={index}
                    className="principle-card"
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5,
                      rotateX: -60,
                      rotateY: col === 0 ? -30 : 30,
                      z: -400
                    }}
                    animate={principlesInView ? { 
                      opacity: 1, 
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      z: 0,
                      transition: { 
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: 0.3 + index * 0.12
                      }
                    } : {}}
                    whileHover={{ 
                      rotateY: col === 0 ? 3.5 : -3.5,
                      rotateX: -2.5,
                      scale: 1.03,
                      z: 45,
                      transition: { duration: 0.4, type: "spring", stiffness: 260 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.h4 
                      className="principle-title"
                      whileHover={{ scale: 1.1, x: 5 }}
                    >
                      {principle.title}
                    </motion.h4>
                    <motion.p 
                      className="principle-description"
                      initial={{ opacity: 0 }}
                      animate={principlesInView ? { 
                        opacity: 1,
                        transition: { delay: 0.5 + index * 0.12 }
                      } : {}}
                    >
                      {principle.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </section>

        {/* Separator between Project Stats and Roadmap Header */}
        <div className="roadmap-separator"></div>

        {/* Header Section */}
        <div className="roadmap-header" ref={headerRef}>
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="roadmap-title"
          >
            Projekt-Roadmap
          </motion.h1>
          <motion.div 
            className="timeline-stats"
            ref={statsRef}
          >
            <motion.div 
              className="stat-item stat-item-left"
              initial={{ opacity: 0, x: -100 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="stat-number">8</span>
              <span className="stat-label">Projekte</span>
            </motion.div>
            <div className="stat-divider"></div>
            <motion.div 
              className="stat-item stat-item-right"
              initial={{ opacity: 0, x: 100 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <span className="stat-number">2024</span>
              <span className="stat-label">Start</span>
            </motion.div>
            <div className="stat-divider"></div>
            <motion.div 
              className="stat-item stat-item-right"
              initial={{ opacity: 0, x: 100 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <span className="stat-number">2026</span>
              <span className="stat-label">Ende Datum</span>
            </motion.div>
            <div className="stat-divider"></div>
            <motion.div 
              className="stat-item stat-item-right"
              initial={{ opacity: 0, x: 100 }}
              animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <span className="stat-number">Q2</span>
              <span className="stat-label">Launch</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Circular Roadmap */}
        <motion.div
          className="circular-roadmap-container"
          ref={circularRef}
          initial={{ opacity: 0, x: -250, scale: 0.85 }}
          animate={
            circularInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -250, scale: 0.85 }
          }
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Rotating wrapper that contains circle and team members - only stops when project clicked */}
          <motion.div
            className="rotating-wrapper"
            animate={{
              rotate: (openedIndex !== null || clickedTeamMember !== null) ? undefined : [0, 360]
            }}
            transition={{
              duration: 40,
              repeat: (openedIndex !== null || clickedTeamMember !== null) ? 0 : Infinity,
              ease: "linear"
            }}
          >
            {/* Team Members around Slogan - inside rotating wrapper so they rotate */}
            {teamMembers.map((member, index) => {
              const teamAngle = (index * 360 / 8);
              const teamAngleRad = (teamAngle * Math.PI) / 180;
              const teamDistance = 300; // Increased distance for larger circle
              const isHovered = hoveredTeamMember === index;
              const isClicked = clickedTeamMember === index;
              
              return (
                <motion.div
                  key={member.id}
                  className="team-member-wrapper"
                  style={{
                    '--team-angle': `${teamAngle}deg`,
                    '--team-distance': `${teamDistance}px`
                  } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1.5 + index * 0.1 },
                    scale: { duration: 0.6, delay: 1.5 + index * 0.1 }
                  }}
                  onMouseEnter={() => setHoveredTeamMember(index)}
                  onMouseLeave={() => {
                    // Only clear hover if not clicked, and rotation continues on hover
                    if (clickedTeamMember !== index) {
                      setHoveredTeamMember(null);
                    }
                  }}
                >
                  <div className="team-member-circle">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="team-member-image"
                      unoptimized
                      priority={index < 3}
                    />
                  </div>
                  
                  {/* Speech Bubble "Mein Projekt" - clickable */}
                  {(isHovered || isClicked) && (
                    <motion.div
                      className="team-speech-bubble"
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setClickedTeamMember(isClicked ? null : index);
                        if (!isClicked) {
                          setHoveredTeamMember(index);
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>Mein Projekt</span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Milestones positioned around the circle - only visible when team member clicked */}
            {clickedTeamMember !== null && (() => {
              const teamMember = teamMembers[clickedTeamMember];
              const projectIndex = teamMember.projectIndex;
              const milestone = milestones[projectIndex];
              const Icon = milestone.icon;
              
              // Calculate angle for positioning (8 projects = 45 degrees each)
              const angle = (projectIndex * 360 / 8);
              
              return (
                <motion.div
                  key={milestone.id}
                  className="milestone-wrapper"
                  style={{
                    '--icon-angle': `${angle}deg`
                  } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0.3, filter: 'blur(20px)' }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)'
                  }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeOut" },
                    scale: { duration: 1.2, ease: "easeOut" },
                    filter: { duration: 1.2, ease: "easeOut" }
                  }}
                  onClick={() => {
                    setOpenedIndex(projectIndex);
                    setClickedTeamMember(null);
                  }}
                >
                  {/* Milestone Circle */}
                  <motion.div
                    className={`milestone-circle ${milestone.color}`}
                    whileHover={{ scale: 1.1 }}
                    style={{ cursor: 'pointer' }}
                  >
                    {milestone.imageUrl ? (
                      <Image 
                        src={milestone.imageUrl} 
                        alt={milestone.title}
                        width={150}
                        height={150}
                      />
                    ) : (
                      <Icon className="milestone-icon" size={66} />
                    )}
                  </motion.div>
                </motion.div>
              );
            })()}
          </motion.div>

          {/* Center Slogan - outside rotating wrapper so it stays fixed */}
          <div className="center-slogan">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="slogan-text"
            >
              AI-Powered
              <br />
              <span className="slogan-highlight">Innovation</span>
            </motion.h2>
          </div>

          {/* Arrow from Team Member Speech Bubble to Project - only when clicked */}
          {clickedTeamMember !== null && (() => {
            const teamMember = teamMembers[clickedTeamMember];
            const teamAngle = (clickedTeamMember * 360 / 8);
            const teamAngleRad = (teamAngle * Math.PI) / 180;
            const teamDistance = 300; // Increased distance
            
            const projectIndex = teamMember.projectIndex;
            const projectAngle = (projectIndex * 360 / 8);
            const projectAngleRad = (projectAngle * Math.PI) / 180;
            const projectDistance = 540; // Increased distance for larger circle
            
            // Calculate positions (relative to container center)
            const teamX = Math.sin(teamAngleRad) * teamDistance;
            const teamY = -Math.cos(teamAngleRad) * teamDistance;
            
            const projectX = Math.sin(projectAngleRad) * projectDistance;
            const projectY = -Math.cos(projectAngleRad) * projectDistance;
            
            // Offset for speech bubble (above team member)
            const bubbleOffset = -120;
            const arrowStartX = teamX;
            const arrowStartY = teamY + bubbleOffset;
            const arrowEndX = projectX;
            const arrowEndY = projectY;
            
            // Calculate control points for smooth curved arrow
            const midX = (arrowStartX + arrowEndX) / 2;
            const controlX1 = arrowStartX + (midX - arrowStartX) * 0.5;
            const controlY1 = arrowStartY;
            const controlX2 = arrowEndX - (arrowEndX - midX) * 0.5;
            const controlY2 = arrowEndY;
            
            return (
              <svg
                className="team-to-project-arrow"
                viewBox="-700 -700 1400 1400"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 12,
                  overflow: 'visible'
                }}
              >
                <defs>
                  <marker
                    id={`team-arrowhead-${clickedTeamMember}`}
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 12 3, 0 6"
                      fill="rgba(168, 85, 247, 0.9)"
                    />
                  </marker>
                  <linearGradient id={`teamArrowGradient-${clickedTeamMember}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`M ${arrowStartX} ${arrowStartY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${arrowEndX} ${arrowEndY}`}
                  stroke={`url(#teamArrowGradient-${clickedTeamMember})`}
                  strokeWidth="4"
                  fill="none"
                  markerEnd={`url(#team-arrowhead-${clickedTeamMember})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))'
                  }}
                />
              </svg>
            );
          })()}

          {/* Connection Arrow */}
          {openedIndex !== null && (() => {
            const milestone = milestones[openedIndex];
            const angle = (openedIndex * 360 / 8);
            const angleRad = (angle * Math.PI) / 180;
            // Calculate project position (center of milestone logo, relative to container center)
            const projectDistance = 540; // Matches icon distance for enlarged circle
            const projectX = Math.sin(angleRad) * projectDistance;
            const projectY = -Math.cos(angleRad) * projectDistance;
            
            // Bubble position (right side of container, centered vertically)
            // Container is 1200px max-width, so center is at 0,0
            // Bubble is at right: 20px, so X = 600 - 210 (half width) - 20 = 370
            const bubbleX = 370; // Right side position
            const bubbleY = 0; // Centered vertically
            
            // Calculate arrow path (from project center to bubble left edge)
            const arrowStartX = projectX;
            const arrowStartY = projectY;
            const arrowEndX = bubbleX - 210; // Left edge of bubble (420px / 2)
            const arrowEndY = bubbleY;
            
            // Calculate control points for smooth curved arrow
            const midX = (arrowStartX + arrowEndX) / 2;
            const controlX1 = arrowStartX + (midX - arrowStartX) * 0.6;
            const controlY1 = arrowStartY;
            const controlX2 = arrowEndX - (arrowEndX - midX) * 0.6;
            const controlY2 = arrowEndY;
            
            return (
              <svg
                className="project-connection-arrow"
                viewBox="-600 -600 1200 1200"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                  zIndex: 15,
                  overflow: 'visible'
                }}
              >
                <defs>
                  <marker
                    id={`arrowhead-${openedIndex}`}
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="3"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 12 3, 0 6"
                      fill="rgba(168, 85, 247, 0.9)"
                    />
                  </marker>
                  <linearGradient id={`arrowGradient-${openedIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`M ${arrowStartX} ${arrowStartY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${arrowEndX} ${arrowEndY}`}
                  stroke={`url(#arrowGradient-${openedIndex})`}
                  strokeWidth="4"
                  fill="none"
                  markerEnd={`url(#arrowhead-${openedIndex})`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))'
                  }}
                />
              </svg>
            );
          })()}

          {/* Bubble Project Detail Card */}
          {openedIndex !== null && (() => {
            const milestone = milestones[openedIndex];
            
            return (
              <motion.div
                className="project-detail-bubble"
                initial={{ 
                  opacity: 0, 
                  scale: 0.3,
                  x: 100,
                  filter: 'blur(20px)'
                }}
                animate={{ 
                  opacity: cardHovered ? 1 : 0.95, 
                  scale: 1,
                  x: 0,
                  filter: 'blur(0px)'
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5,
                  x: 50,
                  filter: 'blur(15px)'
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 0.5
                }}
                onMouseEnter={() => setCardHovered(true)}
                onMouseLeave={() => setCardHovered(false)}
              >
                <div className="bubble-content">
                  {/* Smoke particles effect */}
                  <div className="smoke-particles">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`smoke-particle smoke-${i + 1}`}></div>
                    ))}
                  </div>
                  
                  <button 
                    className="bubble-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenedIndex(null);
                    }}
                  >
                    ×
                  </button>
                  <h3 className="bubble-title">{milestone.title}</h3>
                  <p className="bubble-description">{milestone.description}</p>
                  
                  {/* Team Member Info */}
                  {(() => {
                    const teamMember = teamMembers.find(m => m.projectIndex === openedIndex);
                    if (teamMember) {
                      return (
                        <div className="bubble-team-section">
                          <div className="team-member-info">
                            <Image
                              src={teamMember.image}
                              alt={teamMember.name}
                              width={50}
                              height={50}
                              className="team-member-avatar"
                            />
                            <div className="team-member-details">
                              <h4 className="team-member-name">{teamMember.name}</h4>
                              <p className="team-member-role">{teamMember.role}</p>
                            </div>
                          </div>
                          <p className="team-member-story">{teamMember.projectStory}</p>
                        </div>
                      );
                    }
                    return null;
                  })()}
                  
                  <div className="bubble-footer">
                    <motion.button
                      className="bubble-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const projectSection = document.querySelector('.project-stats-section');
                        if (projectSection) {
                          projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      GO TO PROJECTS
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="roadmap-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="footer-content">
            <h2>Bereit, Teil dieser Journey zu sein?</h2>
            <p>Entdecken Sie, wie unsere KI-Lösungen Ihr Unternehmen transformieren können.</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Jetzt Kontakt aufnehmen</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectRoadmap;
