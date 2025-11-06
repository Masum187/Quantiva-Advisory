'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Brain, Target, Users, Bot, ArrowRight, Sparkles, Lock, CheckCircle2, ClipboardList, Database } from 'lucide-react';
import './ProjectRoadmap.css';

const ProjectRoadmap = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

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

  // Project Stats for Cards
  const projectStats = [
    {
      id: '01',
      title: 'FlowGrid OS',
      description: 'AI-powered Collaboration Platform & Workflow Automation für intelligente Teamkollaboration. Unsere Plattform revolutioniert die Art und Weise, wie Teams zusammenarbeiten und komplexe Projekte effizient umsetzen.',
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762285982/f213ad3c-ec49-431c-9304-acd5c2d43a53_ebiuch.jpg',
      statValue: '50K+',
      statLabel: 'tägliche Nutzer'
    },
    {
      id: '02',
      title: 'OrchestIQ',
      description: 'Intelligente Automatisierung & Business Process Orchestration für effiziente Prozesse. Unsere Plattform ermöglicht es Unternehmen, komplexe Prozesse nahtlos zu automatisieren und zu optimieren.',
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762166973/35dcb90e-f046-431f-9552-57e85f45d53b_h62a0i.jpg',
      statValue: '10K+',
      statLabel: 'automatisierte Prozesse'
    },
    {
      id: '03',
      title: 'Proofroom',
      description: 'AI-gestützte Sales Enablement & Marketing Automation für höhere Conversion. Unsere Plattform hilft Sales-Teams, bessere Pitches zu erstellen und Conversion-Raten signifikant zu steigern.',
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762182285/808a4e4c-d7d3-4ad2-90b8-afc74b3f3cb5_ygvgxq.jpg',
      statValue: '35%',
      statLabel: 'höhere Conversion'
    },
    {
      id: '04',
      title: 'SkillLedger',
      description: 'Intelligentes Schulmanagement & Learning Analytics für personalisierte Bildung. Unsere Plattform ermöglicht Bildungseinrichtungen, personalisierte Lernpfade zu erstellen und den Lernerfolg zu maximieren.',
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762183140/afadxeax39xcaj5utiy0.jpg',
      statValue: '25K+',
      statLabel: 'Lernende'
    },
    {
      id: '05',
      title: 'DataVault AI',
      description: 'KI-gestützte Datenverwaltung & Analytics Platform für intelligente Datenanalyse und -speicherung. Unsere Lösung ermöglicht es Unternehmen, große Datenmengen effizient zu verwalten und wertvolle Insights zu generieren.',
      imageUrl: 'https://res.cloudinary.com/dbrisux8i/image/upload/v1762421820/ickdffvwgns0gn7jfehn.jpg',
      statValue: '100TB+',
      statLabel: 'verwaltete Daten'
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
        {/* Project Stats Cards Section */}
        <section className="project-stats-section">
          <div className="project-stats-grid">
            {projectStats.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="project-stat-header">
                  <div className="project-stat-logo">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="project-stat-logo-image"
                      unoptimized
                    />
                  </div>
                  <h3 className="project-stat-title">{project.title}</h3>
                </div>
                <p className="project-stat-description">{project.description}</p>
                <div className="project-stat-footer">
                  <span className="project-stat-value">{project.statValue}</span>
                  <span className="project-stat-label">{project.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Separator between Project Stats and Roadmap Header */}
        <div className="roadmap-separator"></div>

        {/* Header Section */}
        <div className="roadmap-header">
          <div className="header-icon">
            <ClipboardList size={24} />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projekt-Roadmap
          </motion.h1>
          <motion.div 
            className="timeline-stats"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">Projekte</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2024</span>
              <span className="stat-label">Start</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Q2</span>
              <span className="stat-label">Launch</span>
            </div>
          </motion.div>
        </div>

        {/* Circular Roadmap */}
        <div className="circular-roadmap-container">
          {/* Rotating wrapper that contains both circle and milestones */}
          <motion.div
            className="rotating-wrapper"
            animate={{
              rotate: openedIndex !== null ? undefined : [0, 360]
            }}
            transition={{
              duration: 40,
              repeat: openedIndex !== null ? 0 : Infinity,
              ease: "linear"
            }}
          >
            {/* Circular Track with Connection Lines */}
            <div className="circular-track">
              <svg className="roadmap-circle" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                    <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
                    <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
                  </linearGradient>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Connection lines between projects */}
                {milestones.slice(0, 8).map((_, index) => {
                  const angle1 = (index * 360 / 8) * Math.PI / 180;
                  const angle2 = ((index + 1) * 360 / 8) * Math.PI / 180;
                  const radius = 360;
                  const x1 = 450 + Math.sin(angle1) * radius;
                  const y1 = 450 - Math.cos(angle1) * radius;
                  const x2 = 450 + Math.sin(angle2) * radius;
                  const y2 = 450 - Math.cos(angle2) * radius;
                  
                  return (
                    <line
                      key={`connection-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                      opacity="0.5"
                      filter="url(#glow)"
                    />
                  );
                })}
                {/* Main circular path */}
                <circle
                  cx="450"
                  cy="450"
                  r="360"
                  fill="none"
                  stroke="url(#trackGradient)"
                  strokeWidth="8"
                  strokeDasharray="20 10"
                  className="road-path"
                />
                {/* Center dashed line */}
                <circle
                  cx="450"
                  cy="450"
                  r="360"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.8)"
                  strokeWidth="3"
                  strokeDasharray="12 8"
                  className="center-line"
                />
              </svg>
            </div>

            {/* Milestones positioned around the circle */}
            {milestones.slice(0, 8).map((milestone, index) => {
              const Icon = milestone.icon;
              
              // Calculate angle for positioning (8 projects = 45 degrees each)
              const angle = (index * 360 / 8);
              
              return (
                <motion.div
                  key={milestone.id}
                  className="milestone-wrapper"
                  style={{
                    '--icon-angle': `${angle}deg`
                  } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: index * 0.1 },
                    scale: { duration: 0.6, delay: index * 0.1 }
                  }}
                  onClick={() => setOpenedIndex(openedIndex === index ? null : index)}
                >
                  {/* Milestone Circle */}
                  <motion.div
                    className={`milestone-circle ${milestone.color}`}
                    animate={{
                      rotate: openedIndex === index ? 0 : [0, -360]
                    }}
                    transition={{
                      rotate: { 
                        duration: openedIndex === index ? 0 : 40, 
                        repeat: openedIndex === index ? 0 : Infinity, 
                        ease: "linear" 
                      }
                    }}
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
            })}
          </motion.div>

          {/* Center Slogan */}
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

          {/* Team Members around Slogan */}
          {teamMembers.map((member, index) => {
            const teamAngle = (index * 360 / 8);
            const teamAngleRad = (teamAngle * Math.PI) / 180;
            const teamDistance = 160; // Closer to center than projects
            
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
              </motion.div>
            );
          })}

          {/* Connection Arrow */}
          {openedIndex !== null && (() => {
            const milestone = milestones[openedIndex];
            const angle = (openedIndex * 360 / 8);
            const angleRad = (angle * Math.PI) / 180;
            // Calculate project position (center of milestone logo, relative to container center)
            const projectDistance = 360; // Same as icon-distance in CSS
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
                      Go to Projects
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

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
