'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import teamData from '../../lib/data/team.json';
import { Linkedin, Mail, Award, Users, Target, TrendingUp } from 'lucide-react';

// Animation component
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
  // Sort team members by order
  const sortedTeam = [...teamData].sort((a, b) => a.order - b.order);

  const values = [
    { icon: Award, title: 'Excellence', description: 'Highest quality in everything we do' },
    { icon: Users, title: 'Collaboration', description: 'Achieving more together' },
    { icon: Target, title: 'Innovation', description: 'Future-oriented solutions' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous development' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section - Cinematic */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal-300 uppercase tracking-widest text-sm font-semibold mb-4"
          >
            MEET OUR LEADERSHIP
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            With over 15 years of experience in management consulting and a strong focus on digital transformation,
            our team leads with innovation and strategic vision.
          </motion.p>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
      </section>

      {/* Team Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SlideIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Experts Behind Quantiva
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A team of visionaries and doers
            </p>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedTeam.map((member, idx) => (
            <SlideIn key={member.id} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Image/Avatar */}
                <div className="relative h-80 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border-4 border-white/30 group-hover:scale-110 transition-transform duration-500">
                        <span className="text-6xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-semibold text-lg mb-4">
                    {member.roleEn}
                  </p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.descriptionEn}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertiseEn.split(',').map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full font-medium"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex gap-3 pt-6 border-t border-gray-100">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-xl font-medium"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl font-medium"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                The principles that drive us
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <SlideIn key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-teal-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-white to-slate-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SlideIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Explore our current job openings and start your career at Quantiva Advisory
            </p>
            <Link
              href="/en/career"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-lg font-semibold rounded-xl hover:from-teal-700 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              View Career Opportunities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
