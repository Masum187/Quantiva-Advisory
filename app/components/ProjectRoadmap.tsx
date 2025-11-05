'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Brain, Target, Users, Bot, ArrowRight, Sparkles, Lock, CheckCircle2, ClipboardList } from 'lucide-react';
import './ProjectRoadmap.css';

const ProjectRoadmap = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const [cardHovered, setCardHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  // Close card when cursor leaves it (with smoke effect)
  useEffect(() => {
    if (openedIndex !== null && !cardHovered && activeIndex !== openedIndex) {
      const timer = setTimeout(() => {
        setOpenedIndex(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [cardHovered, activeIndex, openedIndex]);

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
              <span className="stat-number">7</span>
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
              rotate: activeIndex !== null ? undefined : [0, 360]
            }}
            transition={{
              duration: 40,
              repeat: activeIndex !== null ? 0 : Infinity,
              ease: "linear"
            }}
          >
            {/* Circular Track */}
            <div className="circular-track">
              <svg className="roadmap-circle" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4b5563" />
                    <stop offset="100%" stopColor="#6b7280" />
                  </linearGradient>
                </defs>
                {/* Main circular path */}
                <circle
                  cx="450"
                  cy="450"
                  r="360"
                  fill="none"
                  stroke="url(#trackGradient)"
                  strokeWidth="45"
                  strokeDasharray="22 15"
                  className="road-path"
                />
                {/* Center dashed line */}
                <circle
                  cx="450"
                  cy="450"
                  r="360"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.8)"
                  strokeWidth="4"
                  strokeDasharray="15 15"
                  className="center-line"
                />
              </svg>
            </div>

            {/* Milestones positioned around the circle */}
            {milestones.slice(0, 7).map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === index;
              
              // Calculate angle for positioning
              const angle = (index * 360 / 7);
              
              return (
                <motion.div
                  key={milestone.id}
                  className={`milestone-wrapper ${isActive ? 'active' : ''}`}
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
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => setOpenedIndex(openedIndex === index ? null : index)}
                >
                  {/* Milestone Circle */}
                  <motion.div
                    className={`milestone-circle ${milestone.color}`}
                    animate={{
                      rotate: activeIndex === index ? 0 : [0, -360]
                    }}
                    transition={{
                      rotate: { 
                        duration: activeIndex === index ? 0 : 40, 
                        repeat: activeIndex === index ? 0 : Infinity, 
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

                  {/* Info Card */}
                  <div className={`milestone-info ${isActive ? 'show' : ''}`}>
                    <h3 className="milestone-title">{milestone.title}</h3>
                    <p className="milestone-description">{milestone.description}</p>
                  </div>
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
            const teamAngle = (index * 360 / 7);
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

          {/* 3D Project Detail Card */}
          {openedIndex !== null && (() => {
            const milestone = milestones[openedIndex];
            const angle = (openedIndex * 360 / 7);
            const angleRad = (angle * Math.PI) / 180;
            const isLeftSide = angle > 90 && angle < 270;
            // Position card above the logo (same angle, but closer to center)
            const cardDistance = 280; // Closer to center than logo
            const cardX = Math.sin(angleRad) * cardDistance;
            const cardY = -Math.cos(angleRad) * cardDistance;
            
            return (
              <motion.div
                className="project-detail-card"
                initial={{ 
                  opacity: 0, 
                  scale: 0.3,
                  rotateY: isLeftSide ? -120 : 120,
                  rotateX: -30,
                  x: cardX,
                  y: cardY - 100,
                  z: -200,
                  filter: 'blur(20px)'
                }}
                animate={{ 
                  opacity: cardHovered ? 1 : 0.95, 
                  scale: 1,
                  rotateY: 0,
                  rotateX: 0,
                  x: cardX,
                  y: cardY,
                  z: 0,
                  filter: 'blur(0px)'
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5,
                  rotateY: isLeftSide ? -90 : 90,
                  rotateX: 30,
                  y: cardY - 50,
                  z: -100,
                  filter: 'blur(15px)'
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.8
                }}
                onMouseEnter={() => setCardHovered(true)}
                onMouseLeave={() => setCardHovered(false)}
                style={{
                  '--card-angle': `${angle}deg`,
                  '--card-distance': `${cardDistance}px`,
                  '--card-side': isLeftSide ? 'left' : 'right'
                } as React.CSSProperties}
              >
                <div className="card-content">
                  {/* Smoke particles effect */}
                  <div className="smoke-particles">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`smoke-particle smoke-${i + 1}`}></div>
                    ))}
                  </div>
                  
                  <button 
                    className="card-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenedIndex(null);
                    }}
                  >
                    ×
                  </button>
                  <h3 className="card-title">{milestone.title}</h3>
                  <p className="card-description">{milestone.description}</p>
                  
                  {/* Team Member Info */}
                  {(() => {
                    const teamMember = teamMembers.find(m => m.projectIndex === openedIndex);
                    if (teamMember) {
                      return (
                        <div className="card-team-section">
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
                  
                  <div className="card-footer">
                    <motion.button
                      className="card-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Mehr erfahren
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
