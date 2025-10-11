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
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [showVoiceButton, setShowVoiceButton] = useState(true);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Voice AI Function
  const speakMessage = () => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();
      
      const text = lang === 'de' 
        ? "Du bist derjenige, der dieses Unternehmen mitgestalten kann. Zögere nicht so lange und bewirb dich jetzt!"
        : "You are the one who can help shape this company. Don't hesitate any longer and apply now!";
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set German or English voice
      const voices = window.speechSynthesis.getVoices();
      const germanVoice = voices.find(voice => voice.lang.startsWith(lang === 'de' ? 'de' : 'en'));
      if (germanVoice) {
        utterance.voice = germanVoice;
      }
      
      utterance.lang = lang === 'de' ? 'de-DE' : 'en-US';
      utterance.rate = 0.95; // Slightly slower for clarity
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      utterance.onstart = () => setIsVoicePlaying(true);
      utterance.onend = () => {
        setIsVoicePlaying(false);
        setShowVoiceButton(false); // Hide button after playing
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-Speech wird in diesem Browser nicht unterstützt.');
    }
  };

  // Auto-play voice after 3 seconds on component mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      speakMessage();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [lang]);

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

        {/* Hero Section with Digital AI Head */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-black"></div>
          
          {/* Digital AI Head - Animated Background */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full max-w-4xl">
              {/* Digital Grid Face Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              ></motion.div>
              
              {/* AI Head Image */}
              <motion.img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="Digital AI"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: isVoicePlaying ? 1.1 : 1,
                  opacity: isVoicePlaying ? 0.4 : 0.25,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-contain mix-blend-lighten"
              />
              
              {/* Pulsing Ring Effect */}
              {isVoicePlaying && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-4 border-teal-400 rounded-full"
                ></motion.div>
              )}
            </div>
          </motion.div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <SlideIn direction="up" delay={0.2}>
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                  {t.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  {t.heroSubtitle}
                </p>
                
                {/* Voice Message Display */}
                {isVoicePlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-6 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-md border border-teal-500/30 rounded-2xl max-w-2xl mx-auto"
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-3 h-3 bg-teal-400 rounded-full"
                      ></motion.div>
                      <span className="text-teal-400 font-semibold">KI spricht...</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      {lang === 'de' 
                        ? "Du bist derjenige, der dieses Unternehmen mitgestalten kann. Zögere nicht so lange und bewirb dich jetzt!"
                        : "You are the one who can help shape this company. Don't hesitate any longer and apply now!"}
                    </p>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#openpositions"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
                  >
                    {t.heroCTA}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                  
                  {/* Voice Button */}
                  {showVoiceButton && (
                    <button
                      onClick={speakMessage}
                      disabled={isVoicePlaying}
                      className={`inline-flex items-center px-6 py-3 backdrop-blur-sm border-2 border-teal-400/50 text-white text-base font-semibold rounded-xl hover:bg-teal-500/20 transition-all duration-300 ${
                        isVoicePlaying ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                      }`}
                    >
                      <svg 
                        className={`w-5 h-5 mr-2 ${isVoicePlaying ? 'animate-pulse' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                      </svg>
                      {isVoicePlaying 
                        ? (lang === 'de' ? 'KI spricht...' : 'AI speaking...') 
                        : (lang === 'de' ? 'KI-Botschaft anhören' : 'Listen to AI Message')}
                    </button>
                  )}
                </div>
              </div>
            </SlideIn>
          </div>
        </motion.section>

        {/* Career Areas Section - Accenture Style with Images */}
        <section className="py-20 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SlideIn direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                {t.areasTitle}
              </h2>
            </SlideIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Strategy & Consulting */}
              <SlideIn direction="left" delay={0.2}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                    alt="Strategy & Consulting"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[0].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[0].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-teal-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>

              {/* Technology & Engineering */}
              <SlideIn direction="up" delay={0.3}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                    alt="Technology & Engineering"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[1].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[1].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>

              {/* SAP Solutions */}
              <SlideIn direction="right" delay={0.4}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                    alt="SAP Solutions"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[2].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[2].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-teal-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>

              {/* Cloud & Infrastructure */}
              <SlideIn direction="left" delay={0.5}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                    alt="Cloud & Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[3].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[3].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>

              {/* Cyber Security */}
              <SlideIn direction="up" delay={0.6}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                    alt="Cyber Security"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[4].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[4].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-teal-400 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>

              {/* Artificial Intelligence */}
              <SlideIn direction="right" delay={0.7}>
                <div className="group relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                    alt="Artificial Intelligence"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-800/60 to-black/20"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.areas[5].title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{t.areas[5].description}</p>
                    <ArrowRight className="mt-4 h-6 w-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </SlideIn>
            </div>
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

        {/* Wellbeing Section - Accenture Style */}
        <section className="py-20 bg-black border-t border-white/10">
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

            {/* Asymmetric Grid Layout - Accenture Style */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Large Featured Card - Mental Health (spans 2 rows on desktop) */}
              <SlideIn direction="left" delay={0.2} className="lg:row-span-2">
                <div className="group relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
                    alt="Mental Health"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{t.wellbeingAreas[0].title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{t.wellbeingAreas[0].description}</p>
                    <button className="self-start inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Benefits ansehen' : 'View Benefits'}
                      <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>

              {/* Top-right Card - Relationship-oriented */}
              <SlideIn direction="up" delay={0.3} className="lg:col-span-2">
                <div className="group relative h-full min-h-[240px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                    alt="Team Collaboration"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">{t.wellbeingAreas[1].title}</h3>
                    <p className="text-gray-100 mb-4 leading-relaxed max-w-xl">{t.wellbeingAreas[1].description}</p>
                    <button className="self-start inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Communitys entdecken' : 'Discover Communities'}
                      <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>

              {/* Bottom-right Card - Physical Health */}
              <SlideIn direction="right" delay={0.4}>
                <div className="group relative h-full min-h-[240px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                    alt="Physical Health"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t.wellbeingAreas[2].title}</h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">{t.wellbeingAreas[2].description}</p>
                    <button className="self-start inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Benefits ansehen' : 'View Benefits'}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>

              {/* Bottom-right Card 2 - Purpose-driven */}
              <SlideIn direction="right" delay={0.5}>
                <div className="group relative h-full min-h-[240px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                    alt="Purpose Driven"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t.wellbeingAreas[3].title}</h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">{t.wellbeingAreas[3].description}</p>
                    <button className="self-start inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Wovon wir überzeugt sind' : 'Our Beliefs'}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Second Row - 3 Equal Cards */}
            <div className="grid gap-6 md:grid-cols-3 mt-6">
              <SlideIn direction="up" delay={0.6}>
                <div className="group relative h-full min-h-[280px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                    alt="Career Ready"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t.wellbeingAreas[4].title}</h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">{t.wellbeingAreas[4].description}</p>
                    <button className="self-start inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Trainings & Weiterbildung' : 'Training & Development'}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.7}>
                <div className="group relative h-full min-h-[280px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=800&auto=format&fit=crop"
                    alt="Global Perspectives"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{t.wellbeingAreas[5].title}</h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">{t.wellbeingAreas[5].description}</p>
                    <button className="self-start inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Benefits ansehen' : 'View Benefits'}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.8}>
                <div className="group relative h-full min-h-[280px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="Financial Wellbeing"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{lang === 'de' ? 'Finanzielle Vergütung' : 'Financial Rewards'}</h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      {lang === 'de' 
                        ? 'Wir bieten Rewards- und Benefits-Pakete, die deinen Bedürfnissen entsprechen.' 
                        : 'We offer rewards and benefits packages that meet your needs.'}
                    </p>
                    <button className="self-start inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 group/btn">
                      {lang === 'de' ? 'Benefits ansehen' : 'View Benefits'}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SlideIn>
            </div>
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

