'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Smartphone, Server, CheckCircle, ArrowRight, Zap, Database } from 'lucide-react';
import { AnimatedCard } from '../../services/AnimatedCard';

interface FullStackDevelopmentPageProps {
  lang: 'de' | 'en';
}

export default function FullStackDevelopmentPage({ lang }: FullStackDevelopmentPageProps) {
  const content = {
    de: {
      hero: {
        badge: 'Full Stack Development',
        title: 'Individuelle Softwareentwicklung',
        subtitle: 'Maßgeschneiderte Full-Stack-Lösungen von Frontend bis Backend – modern, skalierbar und zukunftssicher',
      },
      intro: {
        title: 'Ihre Vision, unsere Expertise',
        description: 'Wir entwickeln individuelle Softwarelösungen, die perfekt auf Ihre Geschäftsanforderungen zugeschnitten sind. Von Web-Anwendungen über Mobile Apps bis hin zu komplexen Enterprise-Systemen – wir begleiten Sie von der Konzeption bis zum Go-Live und darüber hinaus.',
      },
      services: {
        title: 'Unsere Leistungen',
        items: [
          {
            icon: Code,
            title: 'Frontend-Entwicklung',
            description: 'Moderne Web-Anwendungen mit React, Next.js, Vue.js oder Angular. Responsive Design, Progressive Web Apps (PWA) und optimale User Experience.',
          },
          {
            icon: Server,
            title: 'Backend-Entwicklung',
            description: 'Skalierbare APIs und Microservices mit Node.js, Python, Java oder .NET. RESTful APIs, GraphQL und Event-driven Architekturen.',
          },
          {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Native iOS/Android Apps mit Swift, Kotlin oder Cross-Platform-Lösungen mit React Native, Flutter für maximale Reichweite.',
          },
          {
            icon: Database,
            title: 'Datenbank-Design',
            description: 'Optimale Datenbankarchitekturen mit PostgreSQL, MongoDB, Redis oder SQL Server. Datenmodellierung, Performance-Optimierung und Migration.',
          },
        ],
      },
      benefits: {
        title: 'Ihre Vorteile',
        items: [
          'Individuelle Lösungen: 100% auf Ihre Anforderungen zugeschnitten',
          'Moderne Technologien: State-of-the-Art Frameworks und Best Practices',
          'Skalierbarkeit: Architekturen, die mit Ihrem Business wachsen',
          'Agile Entwicklung: Transparente Prozesse, schnelle Iterationen',
          'Langfristiger Support: Wartung, Updates und Weiterentwicklung',
        ],
      },
      technologies: {
        title: 'Technologien & Frameworks',
        items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', '.NET', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
      },
      cta: {
        title: 'Bereit für Ihre individuelle Lösung?',
        description: 'Lassen Sie uns gemeinsam Ihre Software-Vision verwirklichen.',
        button: 'Jetzt Projekt anfragen',
      },
    },
    en: {
      hero: {
        badge: 'Full Stack Development',
        title: 'Custom Software Development',
        subtitle: 'Tailored full-stack solutions from frontend to backend – modern, scalable and future-proof',
      },
      intro: {
        title: 'Your Vision, Our Expertise',
        description: 'We develop custom software solutions perfectly tailored to your business requirements. From web applications to mobile apps and complex enterprise systems – we guide you from conception to go-live and beyond.',
      },
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Code,
            title: 'Frontend Development',
            description: 'Modern web applications with React, Next.js, Vue.js or Angular. Responsive design, Progressive Web Apps (PWA) and optimal user experience.',
          },
          {
            icon: Server,
            title: 'Backend Development',
            description: 'Scalable APIs and microservices with Node.js, Python, Java or .NET. RESTful APIs, GraphQL and event-driven architectures.',
          },
          {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Native iOS/Android apps with Swift, Kotlin or cross-platform solutions with React Native, Flutter for maximum reach.',
          },
          {
            icon: Database,
            title: 'Database Design',
            description: 'Optimal database architectures with PostgreSQL, MongoDB, Redis or SQL Server. Data modeling, performance optimization and migration.',
          },
        ],
      },
      benefits: {
        title: 'Your Benefits',
        items: [
          'Custom solutions: 100% tailored to your requirements',
          'Modern technologies: State-of-the-art frameworks and best practices',
          'Scalability: Architectures that grow with your business',
          'Agile development: Transparent processes, fast iterations',
          'Long-term support: Maintenance, updates and further development',
        ],
      },
      technologies: {
        title: 'Technologies & Frameworks',
        items: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', '.NET', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
      },
      cta: {
        title: 'Ready for your custom solution?',
        description: 'Let us realize your software vision together.',
        button: 'Request project now',
      },
    },
  }[lang];

  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760346430/kling_20251009_Image_to_Video_A_confiden_4908_0_bimwvi.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => {
              setVideoError(true);
              if (videoRef.current) {
                videoRef.current.style.display = 'none';
              }
            }}
          />
        )}
        {/* Fallback gradient if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-black" />
        )}
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 py-32 z-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-blue-200">
              <Code className="h-4 w-4" />
              {content.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up" className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-12">
            <h2 className="mb-6 text-3xl font-bold">{content.intro.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {content.intro.description}
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold"
          >
            {content.services.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={service.title}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-8 transition-all hover:border-blue-500/50"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-blue-500/20 p-4">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black/80 to-blue-950/20 relative z-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up">
            <h2 className="mb-12 text-center text-4xl font-bold">{content.benefits.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-400" />
                  <p className="text-gray-200">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up">
            <h2 className="mb-12 text-center text-4xl font-bold">{content.technologies.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {content.technologies.items.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedCard direction="up" className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/40 to-black p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{content.cta.title}</h2>
            <p className="mb-8 text-xl text-gray-300">{content.cta.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/70"
            >
              {content.cta.button}
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}

