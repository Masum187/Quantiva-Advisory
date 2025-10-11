import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Briefcase, Users, Heart, TrendingUp,
  GraduationCap, Lightbulb, Target, Award, Shield, Sparkles,
  Brain, Cloud, Code, Database, Globe, Zap, Menu, X
} from 'lucide-react';
import { useLanguage } from '../QuantivaWebsite';

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
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function StaggerSlideIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function CareerPage() {
  const { lang, localePath } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Content Data
  const content = {
    de: {
      metaTitle: "Karriere bei Quantiva Advisory – Gestalte die digitale Zukunft",
      metaDescription: "Werde Teil unseres Teams und arbeite an spannenden Projekten in SAP, Cloud, AI und Cyber Security. Entdecke offene Positionen und entwickle dich weiter.",
      heroTitle: "Arbeite im Herzen des Wandels",
      heroSubtitle: "Entwickle dich weiter und wachse über dich hinaus – hier ist der richtige Ort für dich dafür. Du bist genau richtig bei uns – mit all deinen Stärken und Potenzialen.",
      heroCTA: "Offene Stellen entdecken",
      
      areasTitle: "Wir haben das richtige Angebot für dich",
      areas: [
        {
          icon: Brain,
          title: "Strategy & Consulting",
          description: "Erfolg basiert auf der richtigen Strategie. Gestalte mit deinem Wissen und deinem strategischen Denken den digitalen Wandel.",
        },
        {
          icon: Code,
          title: "Technology & Engineering",
          description: "Durch den Einsatz neuer Technologien entwickeln unsere Kunden gemeinsam mit dir ihre Prozesse kontinuierlich weiter.",
        },
        {
          icon: Database,
          title: "SAP Solutions",
          description: "Als SAP-Experte begleitest du Kunden bei S/4HANA-Migrationen und gestaltest die digitale Transformation.",
        },
        {
          icon: Cloud,
          title: "Cloud & Infrastructure",
          description: "Nutze Cloud-Technologien, um Arbeitsmodelle neu zu gestalten und Prozesse zu transformieren.",
        },
        {
          icon: Shield,
          title: "Cyber Security",
          description: "Schütze kritische Infrastrukturen und entwickle zukunftssichere Security-Architekturen.",
        },
        {
          icon: Sparkles,
          title: "Artificial Intelligence",
          description: "Schaffe innovative KI-Lösungen, die echten Mehrwert für unsere Kunden generieren.",
        },
      ],
      
      levelsTitle: "Egal, an welchem Punkt deiner Karriere du dich befindest",
      levels: [
        {
          icon: GraduationCap,
          title: "Studierende",
          description: "Nutze schon während deines Studiums die Zeit, um praktische Erfahrungen zu sammeln und deinen späteren Karriereweg optimal vorzubereiten.",
        },
        {
          icon: Lightbulb,
          title: "Berufseinsteiger:innen",
          description: "Du hast eine großartige Karriere vor dir. Arbeite mit neuesten Technologien und entwickle sie mit deinen Skills weiter.",
        },
        {
          icon: Target,
          title: "Berufserfahrene",
          description: "Du denkst out of the box und entwickelst kreative Lösungen. Komm in unser innovatives Team und transformiere Geschäftsprozesse weltweit.",
        },
        {
          icon: Award,
          title: "Führungskräfte",
          description: "Du siehst unzählige Möglichkeiten und nimmst Herausforderungen an. Erfahre hier, wie du deine innovativen Ideen einsetzen kannst.",
        },
      ],
      
      wellbeingTitle: "Du gehörst hierher",
      wellbeingSubtitle: "Jeder Mensch ist anders. Wir fördern ein inklusives und vielfältiges Arbeitsumfeld, in dem wir uns wertgeschätzt, gesehen und gehört fühlen.",
      wellbeingAreas: [
        {
          icon: Heart,
          title: "Mental Health",
          description: "Wir bieten zahlreiche Maßnahmen um die psychische Gesundheit und das Wohlbefinden unserer Mitarbeiter:innen zu stärken.",
        },
        {
          icon: Users,
          title: "Beziehungsorientiert",
          description: "Wir stellen sicher, dass sich unsere Mitarbeiter:innen wohl fühlen und fördern ein starkes Miteinander.",
        },
        {
          icon: Zap,
          title: "Körperliche Gesundheit",
          description: "Wir unterstützen das körperliche Wohlbefinden mit Sportangeboten und Gesundheitsprogrammen.",
        },
        {
          icon: Target,
          title: "Zielgerichtet",
          description: "Unser Anspruch ist es, uns ständig weiterzuentwickeln – um mit unseren Mitarbeitenden und Kunden Schritt zu halten.",
        },
        {
          icon: TrendingUp,
          title: "Bereit für deine Karriere",
          description: "Wir helfen dir, die richtigen Skills für deine Karriere zu erlangen und auszubauen.",
        },
        {
          icon: Globe,
          title: "Globale Perspektiven",
          description: "Arbeite mit internationalen Teams und erweitere deinen Horizont.",
        },
      ],
      
      statsTitle: "Wir sind weltweit tätig",
      stats: [
        { value: "50+", label: "Erfolgreiche Projekte" },
        { value: "15+", label: "Länder weltweit" },
        { value: "100+", label: "Zufriedene Kunden" },
      ],
      
      ctaTitle: "Komm in unser Team",
      ctaDescription: "Entdecke offene Stellen, die zu deinen Interessen und Fähigkeiten passen.",
      ctaButton: "Zu den offenen Stellen",
    },
    en: {
      metaTitle: "Careers at Quantiva Advisory – Shape the Digital Future",
      metaDescription: "Join our team and work on exciting projects in SAP, Cloud, AI, and Cyber Security. Discover open positions and develop your skills.",
      heroTitle: "Work at the heart of change",
      heroSubtitle: "Develop further and grow beyond yourself – this is the right place for you. You're exactly right with us – with all your strengths and potentials.",
      heroCTA: "Explore open positions",
      
      areasTitle: "We have the right opportunity for you",
      areas: [
        {
          icon: Brain,
          title: "Strategy & Consulting",
          description: "Success is based on the right strategy. Shape digital transformation with your knowledge and strategic thinking.",
        },
        {
          icon: Code,
          title: "Technology & Engineering",
          description: "By using new technologies, our clients continuously develop their processes together with you.",
        },
        {
          icon: Database,
          title: "SAP Solutions",
          description: "As an SAP expert, you accompany clients in S/4HANA migrations and shape digital transformation.",
        },
        {
          icon: Cloud,
          title: "Cloud & Infrastructure",
          description: "Use cloud technologies to redesign work models and transform processes.",
        },
        {
          icon: Shield,
          title: "Cyber Security",
          description: "Protect critical infrastructures and develop future-proof security architectures.",
        },
        {
          icon: Sparkles,
          title: "Artificial Intelligence",
          description: "Create innovative AI solutions that generate real value for our clients.",
        },
      ],
      
      levelsTitle: "No matter where you are in your career",
      levels: [
        {
          icon: GraduationCap,
          title: "Students",
          description: "Use your time during studies to gain practical experience and optimally prepare for your future career path.",
        },
        {
          icon: Lightbulb,
          title: "Career Starters",
          description: "You have a great career ahead of you. Work with the latest technologies and develop them with your skills.",
        },
        {
          icon: Target,
          title: "Experienced Professionals",
          description: "You think out of the box and develop creative solutions. Join our innovative team and transform business processes worldwide.",
        },
        {
          icon: Award,
          title: "Leaders",
          description: "You see countless opportunities and embrace challenges. Learn how you can apply your innovative ideas.",
        },
      ],
      
      wellbeingTitle: "You belong here",
      wellbeingSubtitle: "Every person is different. We promote an inclusive and diverse work environment where we feel valued, seen, and heard.",
      wellbeingAreas: [
        {
          icon: Heart,
          title: "Mental Health",
          description: "We offer numerous measures to strengthen the mental health and well-being of our employees.",
        },
        {
          icon: Users,
          title: "Relationship-oriented",
          description: "We ensure our employees feel comfortable and foster strong community spirit.",
        },
        {
          icon: Zap,
          title: "Physical Health",
          description: "We support physical well-being with sports offerings and health programs.",
        },
        {
          icon: Target,
          title: "Purpose-driven",
          description: "Our goal is to continuously develop – to keep pace with our employees and clients.",
        },
        {
          icon: TrendingUp,
          title: "Ready for your career",
          description: "We help you acquire and expand the right skills for your career.",
        },
        {
          icon: Globe,
          title: "Global Perspectives",
          description: "Work with international teams and broaden your horizon.",
        },
      ],
      
      statsTitle: "We operate globally",
      stats: [
        { value: "50+", label: "Successful Projects" },
        { value: "15+", label: "Countries worldwide" },
        { value: "100+", label: "Satisfied Clients" },
      ],
      
      ctaTitle: "Join our team",
      ctaDescription: "Discover open positions that match your interests and skills.",
      ctaButton: "View open positions",
    },
  };

  const t = content[lang];

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://quantivaadvisory.com${localePath('/karriere')}`} />
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <a href={localePath('/')} className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Q</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">QUANTIVA ADVISORY</div>
                  <div className="text-xs text-gray-400 tracking-wider">CREATOR AND BUILDER</div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href={localePath('/')} className="text-gray-300 hover:text-teal-400 transition font-medium">
                  {lang === 'de' ? 'Home' : 'Home'}
                </a>
                <a href={localePath('/#services')} className="text-gray-300 hover:text-teal-400 transition font-medium">
                  {lang === 'de' ? 'Services' : 'Services'}
                </a>
                <a href={localePath('/cases')} className="text-gray-300 hover:text-teal-400 transition font-medium">
                  {lang === 'de' ? 'Cases' : 'Cases'}
                </a>
                <a href={localePath('/karriere')} className="text-teal-400 font-semibold">
                  {lang === 'de' ? 'Karriere' : 'Career'}
                </a>
                <a 
                  href={localePath('/#contact')} 
                  className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
                >
                  {lang === 'de' ? 'Kontakt' : 'Contact'}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white hover:text-teal-400 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-3">
                <a href={localePath('/')} className="block text-gray-300 hover:text-teal-400 transition py-2">
                  Home
                </a>
                <a href={localePath('/#services')} className="block text-gray-300 hover:text-teal-400 transition py-2">
                  Services
                </a>
                <a href={localePath('/cases')} className="block text-gray-300 hover:text-teal-400 transition py-2">
                  Cases
                </a>
                <a href={localePath('/karriere')} className="block text-teal-400 font-semibold py-2">
                  {lang === 'de' ? 'Karriere' : 'Career'}
                </a>
                <a href={localePath('/#contact')} className="block text-gray-300 hover:text-teal-400 transition py-2">
                  {lang === 'de' ? 'Kontakt' : 'Contact'}
                </a>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-black"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.2}>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                  {t.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  {t.heroSubtitle}
                </p>
                <a
                  href="#openpositions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
                >
                  {t.heroCTA}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </SlideIn>
          </div>
        </motion.section>

        {/* Career Areas Section */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                {t.areasTitle}
              </h2>
            </SlideIn>

            <StaggerSlideIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-teal-500/30 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full"></div>
                    <Icon className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </StaggerSlideIn>
          </div>
        </section>

        {/* Career Levels Section */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                {t.levelsTitle}
              </h2>
            </SlideIn>

            <StaggerSlideIn className="grid gap-6 md:grid-cols-2">
              {t.levels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-teal-500/30 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{level.description}</p>
                    </div>
                  </div>
                );
              })}
            </StaggerSlideIn>
          </div>
        </section>

        {/* Wellbeing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t.wellbeingTitle}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {t.wellbeingSubtitle}
                </p>
              </div>
            </SlideIn>

            <StaggerSlideIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.wellbeingAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/30 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 text-teal-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </StaggerSlideIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                {t.statsTitle}
              </h2>
            </SlideIn>

            <StaggerSlideIn className="grid gap-8 md:grid-cols-3">
              {t.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-teal-500/30"
                >
                  <div className="text-5xl md:text-6xl font-extrabold text-teal-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </StaggerSlideIn>
          </div>
        </section>

        {/* CTA Section */}
        <section id="openpositions" className="py-20 bg-gradient-to-br from-teal-900/20 to-black border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SlideIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                {t.ctaDescription}
              </p>
              <a
                href={localePath('/#contact')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
              >
                {t.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </SlideIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>© 2025 Quantiva Advisory. {lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

