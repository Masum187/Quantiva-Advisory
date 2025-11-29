'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface IndustryHeroSectionProps {
  lang: 'de' | 'en';
}

export default function IndustryHeroSection({ lang }: IndustryHeroSectionProps) {
  const title = lang === 'de' ? 'INDUSTRY' : 'INDUSTRY';
  const subtitle = lang === 'de' 
    ? 'Digitale Transformation für Ihre Branche'
    : 'Digital Transformation for Your Industry';

  return (
    <section className="relative z-10 py-32 overflow-hidden" id="industry-hero">
      {/* Blurred Cityscape/Network Background with Glowing Lights */}
      <div className="absolute inset-0 z-0">
        {/* Base Dark Background */}
        <div className="absolute inset-0 bg-slate-950" />
        
        {/* Glowing Light Clusters - Cityscape/Network Effect */}
        {[...Array(80)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = 2 + Math.random() * 4;
          const colorIndex = Math.floor(Math.random() * 6);
          const colors = [
            { r: 6, g: 182, b: 212 },    // cyan
            { r: 59, g: 130, b: 246 },   // blue
            { r: 139, g: 92, b: 246 },   // purple
            { r: 236, g: 72, b: 153 },   // pink
            { r: 251, g: 146, b: 60 },   // orange
            { r: 250, g: 204, b: 21 },   // yellow
          ];
          const color = colors[colorIndex];
          
          return (
            <motion.div
              key={`light-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(${color.r}, ${color.g}, ${color.b}, 0.8), rgba(${color.r}, ${color.g}, ${color.b}, 0.3))`,
                boxShadow: `0 0 ${size * 3}px rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
        
        {/* Vertical Streaks - Building-like Lights */}
        {[...Array(30)].map((_, i) => {
          const x = Math.random() * 100;
          const height = 20 + Math.random() * 40;
          const colorIndex = Math.floor(Math.random() * 4);
          const colors = [
            { r: 6, g: 182, b: 212 },    // cyan
            { r: 59, g: 130, b: 246 },   // blue
            { r: 139, g: 92, b: 246 },   // purple
            { r: 236, g: 72, b: 153 },   // pink
          ];
          const color = colors[colorIndex];
          
          return (
            <motion.div
              key={`streak-${i}`}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${Math.random() * 50}%`,
                width: '2px',
                height: `${height}%`,
                background: `linear-gradient(to bottom, rgba(${color.r}, ${color.g}, ${color.b}, 0.6), rgba(${color.r}, ${color.g}, ${color.b}, 0.2), transparent)`,
                boxShadow: `0 0 10px rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`,
                filter: 'blur(2px)',
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
        
        {/* Horizontal Data Streams */}
        {[...Array(20)].map((_, i) => {
          const y = Math.random() * 100;
          const width = 30 + Math.random() * 50;
          const colorIndex = Math.floor(Math.random() * 3);
          const colors = [
            { r: 6, g: 182, b: 212 },    // cyan
            { r: 59, g: 130, b: 246 },   // blue
            { r: 139, g: 92, b: 246 },   // purple
          ];
          const color = colors[colorIndex];
          
          return (
            <motion.div
              key={`stream-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 50}%`,
                top: `${y}%`,
                width: `${width}%`,
                height: '1px',
                background: `linear-gradient(to right, transparent, rgba(${color.r}, ${color.g}, ${color.b}, 0.5), transparent)`,
                boxShadow: `0 0 8px rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                x: [0, 50, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          );
        })}
        
        {/* Heavy Blur Overlay - Bokeh Effect */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
            background: 'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Content - Glassmorphism Box */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full min-h-[600px] flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-auto"
        >
          {/* Glassmorphism Box - Bottom Left Positioned */}
          <div 
            className="relative w-full md:w-[500px] lg:w-[600px] rounded-2xl p-8 md:p-12"
            style={{
              background: 'rgba(30, 41, 59, 0.4)', // dark grey with transparency
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Subtle Gradient Overlay */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <motion.h1
                className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-4"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 4px 8px rgba(0, 0, 0, 0.5)',
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

