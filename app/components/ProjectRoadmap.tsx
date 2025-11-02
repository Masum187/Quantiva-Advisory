'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Target, Users, Bot, ArrowRight, Sparkles, Lock, CheckCircle2, ClipboardList } from 'lucide-react';
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
      icon: Zap,
      title: 'FlowGrid OS',
      description: 'AI-powered Collaboration Platform & Workflow Automation für intelligente Teamkollaboration',
      color: 'red',
      position: { top: '-5%', left: '5%' },
      angle: -20
    },
    {
      id: '02',
      icon: Brain,
      title: 'OrchestIQ',
      description: 'Intelligente Automatisierung & Business Process Orchestration für effiziente Prozesse',
      color: 'blue',
      position: { top: '20%', left: '-5%' },
      angle: 30
    },
    {
      id: '03',
      icon: Target,
      title: 'Proofroom',
      description: 'AI-gestützte Sales Enablement & Marketing Automation für höhere Conversion',
      color: 'cyan',
      position: { top: '0%', right: '5%' },
      angle: 15
    },
    {
      id: '04',
      icon: Users,
      title: 'SkillLedger',
      description: 'Intelligentes Schulmanagement & Learning Analytics für personalisierte Bildung',
      color: 'purple',
      position: { top: '25%', right: '-5%' },
      angle: -30
    },
    {
      id: '05',
      icon: Bot,
      title: 'Verisprint',
      description: 'AI-native Recruiting Platform für intelligente Talent-Akquise und Matching',
      color: 'yellow',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)' },
      angle: 0
    },
    {
      id: '06',
      icon: Lock,
      title: 'ShiftGate AI',
      description: 'AI-powered Security Gateway für intelligente Bedrohungserkennung und Zugriffskontrolle',
      color: 'green',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)', offset: '120px' },
      angle: 45
    },
    {
      id: '07',
      icon: CheckCircle2,
      title: 'SoftCheck',
      description: 'AI-gestütztes Quality Assurance & Testing System für automatisierte Qualitätskontrolle',
      color: 'green',
      position: { bottom: '15%', left: '50%', transform: 'translateX(-50%)', offset: '-120px' },
      angle: -45
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
          {/* Circular Track */}
          <div className="circular-track">
            <svg className="roadmap-circle" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4b5563" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
              </defs>
              {/* Main circular path */}
              <circle
                cx="300"
                cy="300"
                r="240"
                fill="none"
                stroke="url(#trackGradient)"
                strokeWidth="30"
                strokeDasharray="15 10"
                className="road-path"
              />
              {/* Center dashed line */}
              <circle
                cx="300"
                cy="300"
                r="240"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="3"
                strokeDasharray="10 10"
                className="center-line"
              />
            </svg>
          </div>

          {/* Rotating wrapper for all milestones */}
          <motion.div
            className="rotating-milestones"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Milestones positioned around the circle */}
            {milestones.slice(0, 7).map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeIndex === index;
              
              // Calculate positions for evenly spaced items around the circle
              const angle = (index * 360 / 7) - 90; // Start at top (-90 degrees)
              const radius = 240;
              const radian = (angle * Math.PI) / 180;
              const x = 300 + radius * Math.cos(radian);
              const y = 300 + radius * Math.sin(radian);
              
              return (
                <motion.div
                  key={milestone.id}
                  className={`milestone-wrapper ${isActive ? 'active' : ''}`}
                  style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
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
                >
                  {/* Milestone Circle */}
                  <motion.div
                    className={`milestone-circle ${milestone.color}`}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className="milestone-icon" size={44} />
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
