'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Users, Target, TrendingUp, Volume2, VolumeX, ChevronRight } from 'lucide-react';

// Animation Components
function SlideIn({ children, direction = 'up', delay = 0 }: { children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number }) {
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
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function TeamPage() {
  const lang = 'de';
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // ☁️ Cloudinary Configuration
  const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dbrisux8i';
  
  // 🎵 Suno Music Playlist - Cloudinary CDN
  const musicPlaylist = [
    {
      url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/q_auto/west-side-rollin_tnpcbq.mp3`,
      title: 'West Side Rollin',
      artist: 'Suno AI',
    },
  ];

  // Toggle background music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Go to next track
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % musicPlaylist.length);
    setIsMusicPlaying(true);
  };

  // Go to previous track
  const previousTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + musicPlaylist.length) % musicPlaylist.length);
    setIsMusicPlaying(true);
  };

  // Auto-play next track when current ends
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        nextTrack();
      };
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex]);

  const t = {
    hero: {
      subtitle: 'MEET OUR LEADERSHIP',
      title: 'Unsere visionäre Führungskraft',
      name: 'Dr. Elena Richter',
      role: 'CEO & Gründerin',
      description: 'Mit über 15 Jahren Erfahrung in der Unternehmensberatung und einem starken Fokus auf digitale Transformation führt Dr. Richter unser Team mit Innovation und strategischer Weitsicht.',
    },
    teamTitle: 'Unser Team',
    teamSubtitle: 'Die Experten hinter Quantiva',
    values: {
      title: 'Unsere Werte',
      items: [
        { icon: Award, title: 'Excellence', description: 'Höchste Qualität in allem, was wir tun' },
        { icon: Users, title: 'Zusammenarbeit', description: 'Gemeinsam mehr erreichen' },
        { icon: Target, title: 'Innovation', description: 'Zukunftsorientierte Lösungen' },
        { icon: TrendingUp, title: 'Wachstum', description: 'Kontinuierliche Weiterentwicklung' },
      ],
    },
    cta: 'Jetzt Kontakt aufnehmen',
  };

  const teamMembers = [
    {
      name: 'Francja Albertijn',
      role: 'Strategieberaterin',
      department: 'Business & Strategie',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Roseness Simmons',
      role: 'Technologieberaterin',
      department: 'Digitale Lösungen',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Florian Emmanuel',
      role: 'Finanzberater',
      department: 'CFO Services',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Emmanuel Di Invideo',
      role: 'Datenanalyst',
      department: 'Analytics & Insights',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Leonett Andrew',
      role: 'Prozessberater',
      department: 'Operations',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Sarah Mitchell',
      role: 'HR-Beraterin',
      department: 'People & Culture',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      role: 'IT-Architekt',
      department: 'Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
    {
      name: 'Anna Schmidt',
      role: 'Marketing-Strategin',
      department: 'Growth & Marketing',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Music - Suno Playlist */}
      <audio
        ref={audioRef}
        src={musicPlaylist[currentTrackIndex].url}
        onEnded={nextTrack}
      />

      {/* Music Control Panel */}
      <div className="fixed top-24 right-8 z-50 flex flex-col gap-2">
        {/* Now Playing Info */}
        {isMusicPlaying && (
          <div className="bg-black/80 backdrop-blur-sm border border-teal-400/30 rounded-lg px-4 py-2 text-right animate-slide-in">
            <p className="text-xs text-gray-400">Now Playing</p>
            <p className="text-sm font-semibold text-white">{musicPlaylist[currentTrackIndex].title}</p>
            <p className="text-xs text-teal-400">{musicPlaylist[currentTrackIndex].artist}</p>
          </div>
        )}

        {/* Music Controls */}
        <div className="flex gap-2">
          {/* Previous Track */}
          {musicPlaylist.length > 1 && (
            <button
              onClick={previousTrack}
              className="w-10 h-10 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center hover:bg-teal-500/30 hover:scale-110 transition-all duration-300 group"
              aria-label="Previous track"
            >
              <ChevronRight className="h-5 w-5 text-teal-400 rotate-180" />
            </button>
          )}

          {/* Play/Pause */}
          <button
            onClick={toggleMusic}
            className="w-14 h-14 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center hover:bg-teal-500/30 hover:scale-110 transition-all duration-300 group"
            aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
          >
            {isMusicPlaying ? (
              <Volume2 className="h-6 w-6 text-teal-400 group-hover:text-teal-300" />
            ) : (
              <VolumeX className="h-6 w-6 text-gray-400 group-hover:text-teal-400" />
            )}
            {isMusicPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
            )}
          </button>

          {/* Next Track */}
          {musicPlaylist.length > 1 && (
            <button
              onClick={nextTrack}
              className="w-10 h-10 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center hover:bg-teal-500/30 hover:scale-110 transition-all duration-300 group"
              aria-label="Next track"
            >
              <ChevronRight className="h-5 w-5 text-teal-400" />
            </button>
          )}
        </div>
      </div>

      {/* Hero Section - Leadership */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <SlideIn direction="left">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                  <span className="text-teal-400 text-sm font-semibold tracking-wider">{t.hero.subtitle}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {t.hero.title}
                </h1>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-teal-400 mb-2">{t.hero.name}</h2>
                  <p className="text-xl text-gray-300">{t.hero.role}</p>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {t.hero.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href="mailto:elena.richter@quantiva.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {t.cta}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/quantiva-advisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </SlideIn>

            {/* Right: Leadership Image */}
            <SlideIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Elena Richter"
                  className="relative rounded-2xl w-full h-[600px] object-cover shadow-2xl"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values Section - Interactive 3D Flip Cards */}
      <section className="py-20 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.values.title}
              </h2>
              <p className="text-xl text-gray-300">
                Hover für mehr Details
              </p>
            </div>
          </SlideIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => {
              const Icon = value.icon;
              const colors = [
                { from: 'from-teal-500', to: 'to-cyan-500', glow: 'teal' },
                { from: 'from-purple-500', to: 'to-pink-500', glow: 'purple' },
                { from: 'from-orange-500', to: 'to-yellow-500', glow: 'orange' },
                { from: 'from-blue-500', to: 'to-indigo-500', glow: 'blue' },
              ];
              const color = colors[index % colors.length];

              return (
                <SlideIn key={index} direction="up" delay={index * 0.1}>
                  <motion.div
                    className="group relative h-64 [perspective:1000px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${color.from} ${color.to} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    {/* Card Container with 3D Flip */}
                    <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700">
                      {/* Front Side */}
                      <div className="absolute inset-0 [backface-visibility:hidden]">
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
                          {/* Animated Icon */}
                          <motion.div
                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center mb-6`}
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              },
                              scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }}
                          >
                            <Icon className="h-10 w-10 text-white" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                          <p className="text-gray-300 text-sm">{value.description}</p>
                          
                          {/* Hover Indicator */}
                          <div className="mt-4 text-xs text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            ↻ Hover für mehr
                          </div>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${color.from} ${color.to} flex flex-col items-center justify-center text-center`}>
                          <Icon className="h-12 w-12 text-white mb-4 opacity-80" />
                          <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                          <div className="space-y-2 text-white/90">
                            <p className="text-sm font-semibold">
                              {index === 0 && '✓ Höchste Standards'}
                              {index === 1 && '✓ Teamgeist'}
                              {index === 2 && '✓ Kreative Lösungen'}
                              {index === 3 && '✓ Ständige Verbesserung'}
                            </p>
                            <p className="text-sm font-semibold">
                              {index === 0 && '✓ Qualitätskontrolle'}
                              {index === 1 && '✓ Offene Kommunikation'}
                              {index === 2 && '✓ Zukunftstechnologien'}
                              {index === 3 && '✓ Persönliche Entwicklung'}
                            </p>
                            <p className="text-sm font-semibold">
                              {index === 0 && '✓ Best Practices'}
                              {index === 1 && '✓ Gemeinsame Erfolge'}
                              {index === 2 && '✓ Agilität'}
                              {index === 3 && '✓ Karriere-Wachstum'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.teamTitle}
              </h2>
              <p className="text-xl text-gray-300">
                {t.teamSubtitle}
              </p>
            </div>
          </SlideIn>

          {/* Team Members Grid - Floating Bubbles */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              // Random animation values for natural floating effect
              const floatDuration = 3 + (index % 3) * 0.5; // 3-4.5 seconds
              const floatDistance = 15 + (index % 4) * 5; // 15-30px
              const rotateAngle = (index % 2 === 0 ? 1 : -1) * (2 + index % 3); // -5 to 5 degrees
              
              return (
                <SlideIn key={index} direction="up" delay={index * 0.05}>
                  <motion.div
                    className="group text-center"
                    animate={{
                      y: [-floatDistance, floatDistance, -floatDistance],
                      rotate: [-rotateAngle, rotateAngle, -rotateAngle],
                    }}
                    transition={{
                      duration: floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2, // Stagger start times
                    }}
                    whileHover={{
                      y: 0,
                      rotate: 0,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Profile Image */}
                    <div className="relative mb-4">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: floatDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-teal-500/30 group-hover:border-teal-400/60 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* LinkedIn Icon */}
                      <a
                        href={member.linkedin}
                        className="absolute bottom-2 right-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-teal-600 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-teal-400 font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-400">
                      {member.department}
                    </p>
                  </motion.div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Werden Sie Teil unseres Teams
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Wir suchen talentierte Menschen, die mit uns die Zukunft gestalten möchten.
            </p>
            <a
              href="/de/career"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors text-lg"
            >
              Offene Stellen ansehen
            </a>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
