'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Settings, Users, Briefcase, ArrowRight } from 'lucide-react';

const ProjectRoadmap = () => {
  const milestones = [
    {
      id: '01',
      icon: Brain,
      title: 'FlowGrid OS',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500',
      description: 'KI-Kollaborations-Plattform'
    },
    {
      id: '02',
      icon: Settings,
      title: 'OrchestIQ',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500',
      description: 'Intelligente Automatisierung'
    },
    {
      id: '04',
      icon: Users,
      title: 'SkillLedger',
      color: 'from-cyan-400 to-cyan-500',
      bgColor: 'bg-cyan-400',
      description: 'AI School Management'
    },
    {
      id: '05',
      icon: Briefcase,
      title: 'Verisprint',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500',
      description: 'AI Recruiting Platform'
    }
  ];

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Unsere <span className="gradient-text">Projekt-Roadmap</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Von der Idee zur Realität. Entdecken Sie unsere innovativen KI-Projekte auf dem Weg
          zur Zukunft.
        </motion.p>
      </div>

      <div className="roadmap-track">
        <svg className="roadmap-path" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#0891B2', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.8 }} />
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Hauptpfad mit dashed Stroke */}
          <motion.path
            d="M 100 300 Q 300 150, 500 180 T 900 200 L 1050 150"
            stroke="url(#pathGradient)"
            strokeWidth="35"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="15, 10"
            filter="url(#glow)"
            className="animated-path"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Kleine Akzent-Punkte auf dem Pfad */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + i * 130}
              cy={300 - Math.sin(i * 0.3) * 100}
              r="3"
              fill="#06B6D4"
              opacity="0.6"
              className="path-accent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                r: [3, 5, 3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </svg>

        {/* Milestones */}
        <div className="milestones-container">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={milestone.id}
                className="milestone group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Kreis mit Icon */}
                <div className={`milestone-circle ${milestone.bgColor}`}>
                  <Icon size={40} className="milestone-icon" />
                </div>

                {/* Nummer Badge */}
                <div className="milestone-badge">
                  {milestone.id}
                </div>

                {/* Hover Info */}
                <div className="milestone-info">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                  <div className="mt-3 flex justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectRoadmap;

