'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users, Rocket, ArrowRight } from 'lucide-react';
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
      icon: Sparkles,
      title: 'Ideation & Research',
      shortTitle: 'Ideation',
      description: 'Wir sammeln Ideen, analysieren Markttrends und definieren die KI-Strategie',
      details: [
        'Konzeptentwicklung',
        'Marktanalyse',
        'Anforderungsdefinition'
      ],
      color: 'gradient-purple',
      status: 'Abgeschlossen'
    },
    {
      id: '02',
      icon: Zap,
      title: 'Design & Planning',
      shortTitle: 'Planning',
      description: 'Technische Architektur, UI/UX Design und Projektplanung',
      details: [
        'System Design',
        'Prototyping',
        'Timeline Planung'
      ],
      color: 'gradient-blue',
      status: 'In Arbeit'
    },
    {
      id: '04',
      icon: Users,
      title: 'Development & Testing',
      shortTitle: 'Development',
      description: 'Agile Entwicklung mit kontinuierlichem Testing und Feedback',
      details: [
        'Feature Development',
        'QA Testing',
        'User Feedback'
      ],
      color: 'gradient-cyan',
      status: 'In Arbeit'
    },
    {
      id: '05',
      icon: Rocket,
      title: 'Launch & Optimization',
      shortTitle: 'Launch',
      description: 'Produktstart, Marketing und kontinuierliche Optimierung',
      details: [
        'Production Deployment',
        'Go-to-Market',
        'Performance Monitoring'
      ],
      color: 'gradient-purple',
      status: 'Geplant'
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
          <svg className="roadmap-svg" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Gradient Definitionen */}
              <linearGradient id="pathGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
              </linearGradient>

              <filter id="glow-intense">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Path Layer */}
            <path
              d="M 80 250 Q 250 150, 380 200 T 680 180 T 1050 250"
              stroke="url(#pathGradient)"
              strokeWidth="50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.3"
            />

            {/* Main Path with Animation */}
            <motion.path
              d="M 80 250 Q 250 150, 380 200 T 680 180 T 1050 250"
              stroke="url(#pathGradient)"
              strokeWidth="35"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="main-path"
              filter="url(#glow-intense)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Dashed Overlay */}
            <motion.path
              d="M 80 250 Q 250 150, 380 200 T 680 180 T 1050 250"
              stroke="url(#pathGradient)"
              strokeWidth="35"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20,15"
              opacity="0.4"
              className="dashed-path"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "linear" }}
            />

            {/* Animated Particles along Path */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={`particle-${i}`}
                cx={80 + (i * 90)}
                cy={250}
                r="4"
                fill="#06b6d4"
                opacity="0.6"
                className="path-particle"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  r: [3, 5, 3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15
                }}
              />
            ))}

            {/* Connection Lines */}
            {[...Array(3)].map((_, i) => (
              <line
                key={`connector-${i}`}
                x1={220 + i * 230}
                y1={250}
                x2={220 + i * 230}
                y2={350}
                stroke="url(#pathGradient)"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              />
            ))}
          </svg>

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
                  <div className={`milestone-circle ${milestone.color}`}>
                    <div className="circle-bg"></div>
                    <div className="circle-border"></div>
                    <Icon className="milestone-icon" size={44} />
                    <div className="circle-glow"></div>
                  </div>

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
