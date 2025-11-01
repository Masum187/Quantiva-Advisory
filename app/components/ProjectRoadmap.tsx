'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Cog, Target, Users, Bot, ArrowRight, Sparkles } from 'lucide-react';
import './ProjectRoadmap.css';

const ProjectRoadmap = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const milestones = [
    {
      id: '01',
      icon: Workflow,
      title: 'FlowGrid OS',
      shortTitle: 'FlowGrid',
      description: 'AI-powered Collaboration Platform & Workflow Automation für intelligente Teamkollaboration',
      details: [
        'AI-Integration in Collaboration Tools',
        'Intelligente Workflow-Automatisierung',
        'Multi-Channel Collaboration Platform'
      ],
      color: 'gradient-purple',
      status: 'Abgeschlossen',
      results: '50%+ Produktivität'
    },
    {
      id: '02',
      icon: Cog,
      title: 'OrchestIQ',
      shortTitle: 'OrchestIQ',
      description: 'Intelligente Automatisierung & Business Process Orchestration für effiziente Prozesse',
      details: [
        'AI-powered Automation',
        'Business Process Orchestration',
        'RPA Integration'
      ],
      color: 'gradient-blue',
      status: 'In Arbeit',
      results: '70% Automatisierung'
    },
    {
      id: '03',
      icon: Target,
      title: 'Proofroom',
      shortTitle: 'Proofroom',
      description: 'AI-gestützte Sales Enablement & Marketing Automation für höhere Conversion',
      details: [
        'AI-Sales-Assistenten',
        'Marketing Automation Platform',
        'Lead-Scoring & Qualification'
      ],
      color: 'gradient-cyan',
      status: 'In Arbeit',
      results: '40% Conversion'
    },
    {
      id: '04',
      icon: Users,
      title: 'SkillLedger',
      shortTitle: 'SkillLedger',
      description: 'Intelligentes Schulmanagement & Learning Analytics für personalisierte Bildung',
      details: [
        'AI-Enhanced Learning Platform',
        'Student Performance Analytics',
        'Automated Administration'
      ],
      color: 'gradient-purple',
      status: 'Geplant',
      results: '90% Papierreduktion'
    },
    {
      id: '05',
      icon: Bot,
      title: 'Verisprint',
      shortTitle: 'Verisprint',
      description: 'AI-native Recruiting Platform für intelligente Talent-Akquise und Matching',
      details: [
        'AI-Talent Matching',
        'Intelligent Candidate Screening',
        'Recruiting Analytics'
      ],
      color: 'gradient-blue',
      status: 'Geplant',
      results: '60% Efficiency'
    }
  ];

  return (
    <div className="roadmap-wrapper">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-sphere sphere-1"></div>
        <div className="bg-sphere sphere-2"></div>
        <div className="bg-sphere sphere-3"></div>
      </div>

      <div className="roadmap-container">
        {/* Header Section */}
        <div className="roadmap-header">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>PRODUKTENTWICKLUNG</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unsere <span className="gradient-text-main">Projekt-Roadmap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Von der innovativen Idee zur produktiven Realität. Folgen Sie unseren KI-Projekten 
            auf dem Weg zur Zukunft – transparent und detailliert.
          </motion.p>
          
          <motion.div 
            className="timeline-stats"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Phasen</span>
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

        {/* Main Timeline */}
        <div className={`roadmap-track ${isInView ? 'in-view' : ''}`}>
          {/* Timeline connection line */}
          <div className="timeline-line">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="line-segment" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>

          {/* Milestone Cards */}
          <div className="milestones-grid">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={milestone.id}
                  className={`milestone-item ${isActive ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 150 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Milestone Circle */}
                  <motion.div 
                    className={`milestone-circle ${milestone.color}`}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.3)',
                        '0 0 40px rgba(168, 85, 247, 0.6)',
                        '0 0 20px rgba(168, 85, 247, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="circle-bg"></div>
                    <div className="circle-border"></div>
                    <motion.div
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Icon className="milestone-icon" size={44} />
                    </motion.div>
                    <div className="circle-glow"></div>
                    {/* Animated inner particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="icon-particle"
                        style={{
                          '--angle': `${i * 60}deg`
                        } as React.CSSProperties}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Badge */}
                  <div className={`milestone-badge ${milestone.color}`}>
                    <span>{milestone.id}</span>
                  </div>

                  {/* Status */}
                  <div className={`milestone-status ${milestone.status.toLowerCase().replace(/\s/g, '-')}`}>
                    <span>{milestone.status}</span>
                  </div>

                  {/* Title */}
                  <h3 className="milestone-title">{milestone.title}</h3>

                  {/* Expanded Card */}
                  <div className={`milestone-card ${isActive ? 'show' : ''}`}>
                    <div className="card-header">
                      <h4>{milestone.title}</h4>
                      <ArrowRight size={18} />
                    </div>
                    
                    <p className="card-description">{milestone.description}</p>
                    
                    <div className="card-details">
                      <h5>Aktivitäten:</h5>
                      <ul>
                        {milestone.details.map((detail, i) => (
                          <li key={i}>
                            <span className="detail-dot"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-footer">
                      <div className="timeline-progress">
                        <div className="progress-label">Fortschritt</div>
                        <div className="progress-bar">
                          <motion.div 
                            className="progress-fill"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: milestone.status === 'Abgeschlossen' ? '100%' : 
                                     milestone.status === 'In Arbeit' ? '60%' : '20%'
                            }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div className="connector-line"></div>
                </motion.div>
              );
            })}
          </div>
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
