'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '../../components/Navigation';
import {
  ArrowRight, Brain, Target, Zap, Users, Award, ChevronLeft,
  TrendingUp, Shield, Database, Cloud, Sparkles, Globe, Code
} from 'lucide-react';
import { useLanguage } from '../../components/QuantivaWebsite';

// Animation Components
function SlideIn({ children, direction = 'up', delay = 0, className = '' }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number; className?: string }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -5, 
        rotateY: 5,
        scale: 1.05
      }}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );
}

export default function StrategyConsultingPage() {
  const { lang, localePath } = useLanguage();

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Home', href: localePath('/') },
    { id: 'about', label: 'About', href: localePath('/about') },
    { id: 'services', label: 'Services', href: localePath('/#services') },
    { id: 'cases', label: 'Cases', href: localePath('/cases') },
    { id: 'team', label: 'Team', href: localePath('/team') },
    { id: 'career', label: 'Career', href: localePath('/career') },
  ];

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // 3D Text Blocks
  const heroClaims = [
    "Strategy & Consulting",
    "Success is based on the right strategy.",
    "Shape digital transformation with your knowledge."
  ];

  const valuePunchlines = [
    "From Vision to Impact.",
    "Think in Outcomes.",
    "Tech meets Business.",
    "Decide. Implement. Scale.",
    "Quantiva Advisory."
  ];

  const pillars = [
    { name: "Strategy", icon: Brain },
    { name: "Transformation", icon: Target },
    { name: "Cloud", icon: Cloud },
    { name: "Data & AI", icon: Database },
    { name: "ERP", icon: Code },
    { name: "Security", icon: Shield }
  ];

  const processSteps = [
    "Discover → Design → Validate → Scale",
    "Insights → Roadmap → Delivery → Impact"
  ];

  const impactMetrics = [
    { label: "Time-to-Value", value: "↓", color: "text-green-400" },
    { label: "Risk", value: "↓", color: "text-red-400" },
    { label: "ROI", value: "↑", color: "text-green-400" },
    { label: "Adoption", value: "↑", color: "text-blue-400" }
  ];

  const growthAreas = [
    { title: "Early Ownership", description: "Take responsibility early" },
    { title: "Mentoring & Certifications", description: "Learn from the best" },
    { title: "Lab Time & Innovation", description: "Experiment and develop" },
    { title: "Clear Career Path", description: "Consultant → Senior → Lead → Principal" }
  ];

  const techStack = [
    "SAP", "BTP", "Fiori", "ABAP",
    "Azure", "AWS", "GCP",
    "MLOps", "Data Mesh", "Integration"
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <Navigation lang={lang} items={navigationItems} />

      {/* Back Button */}
      <div className="absolute top-24 left-8 z-10">
        <motion.a
          href={localePath('/career')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
          whileHover={{ x: -5 }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Career
        </motion.a>
      </div>

      {/* Main Content */}
      <div className="relative bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          
          {/* Hero Section */}
          <div className="text-center mb-24">
            <SlideIn direction="up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 mb-8">
                <Brain className="w-6 h-6 text-teal-400" />
                <span className="text-white font-semibold">Strategy & Consulting</span>
              </div>
            </SlideIn>

            {/* Hero Claims with 3D Animation */}
            <div className="space-y-8 mb-12">
              {heroClaims.map((claim, index) => (
                <FloatingText key={index} delay={index * 0.2}>
                  <motion.h1 
                    className={`text-white font-bold ${
                      index === 0 ? 'text-5xl md:text-7xl' : 
                      index === 1 ? 'text-3xl md:text-4xl' : 
                      'text-2xl md:text-3xl'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(20, 184, 166, 0.5)"
                    }}
                  >
                    {index === 0 ? (
                      <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {claim}
                      </span>
                    ) : (
                      claim
                    )}
                  </motion.h1>
                </FloatingText>
              ))}
            </div>

            {/* Value Punchlines - 3D Bubbles */}
            <SlideIn direction="up" delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {valuePunchlines.map((punchline, index) => (
                  <motion.div
                    key={index}
                    className="group perspective-1000"
                    initial={{ opacity: 0, scale: 0, rotateX: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 15,
                      rotateX: 10,
                      y: -10
                    }}
                    animate={{
                      y: [0, -5, 0],
                      rotateY: [0, 2, 0],
                      rotateX: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* 3D Bubble Container */}
                    <div className="relative h-32 perspective-1000">
                      {/* Bubble Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Main Bubble */}
                      <div className="relative h-full w-full rounded-full bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-white/20 backdrop-blur-xl group-hover:border-teal-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/30 transform-gpu">
                        
                        {/* Inner Bubble Reflection */}
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-60"></div>
                        
                        {/* Floating Particles Inside Bubble */}
                        <div className="absolute inset-0 overflow-hidden rounded-full">
                          <motion.div
                            className="absolute w-1 h-1 bg-teal-400/40 rounded-full"
                            animate={{
                              x: [0, 60, 0],
                              y: [0, -30, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                            style={{ top: '30%', left: '20%' }}
                          />
                          <motion.div
                            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
                            animate={{
                              x: [0, -40, 0],
                              y: [0, 40, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                            style={{ top: '60%', right: '25%' }}
                          />
                          <motion.div
                            className="absolute w-1 h-1 bg-pink-400/40 rounded-full"
                            animate={{
                              x: [0, 30, 0],
                              y: [0, -20, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: index * 0.7
                            }}
                            style={{ top: '20%', right: '30%' }}
                          />
                        </div>

                        {/* Text Content */}
                        <div className="relative z-10 h-full flex items-center justify-center p-6">
                          <motion.p 
                            className="text-white font-bold text-sm md:text-base text-center leading-tight group-hover:text-teal-300 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            {punchline}
                          </motion.p>
                        </div>

                        {/* Bubble Surface Highlights */}
                        <div className="absolute top-2 left-1/4 w-2 h-2 rounded-full bg-white/10 opacity-40"></div>
                        <div className="absolute bottom-3 right-1/3 w-1 h-1 rounded-full bg-white/20 opacity-60"></div>
                      </div>

                      {/* Outer Bubble Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-teal-400/20 opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>

          {/* Combined Section: Pillars, Process & Impact */}
          <div className="mb-24">
            <SlideIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                Our <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Core Areas</span>
              </h2>
            </SlideIn>

            {/* Three Column Layout */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Pillars Column */}
              <SlideIn direction="left">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    Our <span className="text-teal-400">Pillars</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      return (
                        <motion.div
                          key={pillar.name}
                          className="group perspective-1000"
                          initial={{ opacity: 0, rotateX: -90, y: 50 }}
                          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            rotateY: 15,
                            rotateX: 5,
                            y: -10,
                            scale: 1.05
                          }}
                        >
                          <div className="relative h-24 p-4 rounded-2xl bg-gradient-to-br from-black/40 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl group-hover:border-teal-400/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 border border-teal-400/40 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-4 h-4 text-teal-400" />
                              </div>
                              <h4 className="text-white font-semibold text-xs group-hover:text-teal-300 transition-colors">
                                {pillar.name}
                              </h4>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </SlideIn>

              {/* Process Column */}
              <SlideIn direction="up">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    Our <span className="text-purple-400">Process</span>
                  </h3>
                  <div className="space-y-4">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-black/40 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl">
                          <div className="flex items-center space-x-3 text-white text-sm font-semibold">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 border border-purple-400/30 flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <span>{step}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideIn>

              {/* Impact Column */}
              <SlideIn direction="right">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    Measurable <span className="text-pink-400">Impact</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {impactMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="group text-center"
                        initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 10
                        }}
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-black/40 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl group-hover:border-teal-400/30 transition-all duration-500">
                          <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                            {metric.value}
                          </div>
                          <h4 className="text-white font-semibold text-sm group-hover:text-teal-300 transition-colors">
                            {metric.label}
                          </h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideIn>

            </div>
          </div>


          {/* Growth Areas - Flip Cards */}
          <div className="mb-24">
            <SlideIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                Your <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Development</span>
              </h2>
            </SlideIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="group h-64"
                  initial={{ opacity: 0, rotateX: -90 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-full w-full transition-transform duration-500 group-hover:rotateY-180">
                    <div className="absolute inset-0 p-6 rounded-3xl bg-gradient-to-br from-black/40 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl group-hover:border-teal-400/30 transition-all duration-500">
                      <div className="h-full flex flex-col justify-center text-center">
                        <h3 className="text-white font-bold text-lg mb-3 group-hover:text-teal-300 transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack - Tag Cloud */}
          <div className="mb-24">
            <SlideIn direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                Our <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
              </h2>
            </SlideIn>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotateZ: 5
                  }}
                >
                  <div className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 text-white font-semibold group-hover:border-teal-400/60 group-hover:bg-teal-500/30 transition-all duration-300">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Description Section */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideIn direction="left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dbrisux8i/image/upload/v1760221491/generated-image_12_zvzgif.jpg"
                      alt="Strategy & Consulting Team"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="right">
                <div className="space-y-8">
                  <div>
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold text-white mb-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Strategy & <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">Consulting</span>
                    </motion.h2>
                    <motion.p 
                      className="text-xl text-gray-300 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Success is based on the right strategy. Shape digital transformation with your knowledge and strategic thinking.
                    </motion.p>
                  </div>

                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-black/40 via-black/20 to-black/40 border border-white/10 backdrop-blur-xl">
                      <p className="text-gray-200 leading-relaxed">
                        At Quantiva Advisory, you accompany companies end-to-end – from vision to measurable implementation. As a Strategy Consultant, you develop market and technology roadmaps, translate business goals into sustainable target images, and steer transformation programs. In IT Consulting, you realize modern solutions in Cloud, Data & AI, and ERP – close to the customer, close to the result.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-transparent border border-teal-400/20 backdrop-blur-xl">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-teal-400" />
                        Your Development
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        Steep learning curve, mentoring by seniors, certifications, lab time for innovations, and clear career paths (Consultant → Senior → Lead → Principal). You take responsibility early, present to customers, set standards – and actively shape the Quantiva story.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.a
                      href={localePath('/#contact')}
                      className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 text-center"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                    </motion.a>
                    <motion.a
                      href="mailto:careers@quantiva-advisory.com"
                      className="px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300 text-center"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get in Touch
                    </motion.a>
                  </motion.div>
                </div>
              </SlideIn>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <SlideIn direction="up">
              <motion.div
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-400/30 backdrop-blur-xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                      Consult. Build. Move.
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Become part of Quantiva Advisory and shape the digital future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.a
                      href={localePath('/#contact')}
                      className="px-10 py-5 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                    </motion.a>
                    <motion.a
                      href="mailto:careers@quantiva-advisory.com"
                      className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-teal-500/30 text-white text-lg font-semibold rounded-xl hover:bg-teal-500/10 transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get in Touch
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
