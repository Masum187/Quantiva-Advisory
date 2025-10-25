'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface AIImageData {
  id: string;
  image: string;
  title: string;
  titleEn: string;
  kpis: {
    value: string;
    label: string;
    labelEn: string;
    icon: React.ComponentType<any>;
    color: string;
  }[];
  description: string;
  descriptionEn: string;
}

const aiImages: AIImageData[] = [
  {
    id: 'ai-transformation',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    title: 'KI-Transformation',
    titleEn: 'AI Transformation',
    kpis: [
      { value: '85%', label: 'Effizienzsteigerung', labelEn: 'Efficiency Gain', icon: TrendingUp, color: 'text-green-400' },
      { value: '50+', label: 'KI-Projekte', labelEn: 'AI Projects', icon: Zap, color: 'text-blue-400' },
      { value: '99%', label: 'Genauigkeit', labelEn: 'Accuracy', icon: Shield, color: 'text-purple-400' }
    ],
    description: 'Revolutionäre KI-Lösungen für Ihr Unternehmen',
    descriptionEn: 'Revolutionary AI solutions for your business'
  },
  {
    id: 'cloud-migration',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    title: 'Cloud-Migration',
    titleEn: 'Cloud Migration',
    kpis: [
      { value: '60%', label: 'Kosteneinsparung', labelEn: 'Cost Savings', icon: TrendingUp, color: 'text-green-400' },
      { value: '200+', label: 'Migrationen', labelEn: 'Migrations', icon: Users, color: 'text-blue-400' },
      { value: '24/7', label: 'Verfügbarkeit', labelEn: 'Availability', icon: Shield, color: 'text-purple-400' }
    ],
    description: 'Nahtlose Übergang in die Cloud-Ära',
    descriptionEn: 'Seamless transition to the cloud era'
  },
  {
    id: 'data-analytics',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    title: 'Daten-Analytics',
    titleEn: 'Data Analytics',
    kpis: [
      { value: '95%', label: 'Datenqualität', labelEn: 'Data Quality', icon: Shield, color: 'text-purple-400' },
      { value: '10x', label: 'Schnellere Insights', labelEn: 'Faster Insights', icon: Zap, color: 'text-blue-400' },
      { value: '100+', label: 'Dashboards', labelEn: 'Dashboards', icon: TrendingUp, color: 'text-green-400' }
    ],
    description: 'Intelligente Datenanalyse für bessere Entscheidungen',
    descriptionEn: 'Intelligent data analysis for better decisions'
  },
  {
    id: 'automation',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    title: 'Prozess-Automatisierung',
    titleEn: 'Process Automation',
    kpis: [
      { value: '70%', label: 'Zeitersparnis', labelEn: 'Time Savings', icon: TrendingUp, color: 'text-green-400' },
      { value: '500+', label: 'Automatisierte Prozesse', labelEn: 'Automated Processes', icon: Zap, color: 'text-blue-400' },
      { value: '0', label: 'Manuelle Fehler', labelEn: 'Manual Errors', icon: Shield, color: 'text-purple-400' }
    ],
    description: 'Intelligente Automatisierung für optimale Effizienz',
    descriptionEn: 'Intelligent automation for optimal efficiency'
  }
];

interface AIImageSliderProps {
  lang: 'de' | 'en';
}

export default function AIImageSlider({ lang }: AIImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === aiImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === aiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? aiImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = aiImages[currentIndex];

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{ background: currentImage.image }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {lang === 'de' ? currentImage.title : currentImage.titleEn}
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8">
            {lang === 'de' ? currentImage.description : currentImage.descriptionEn}
          </p>

          {/* KPIs Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {currentImage.kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <kpi.icon className={`h-6 w-6 mx-auto mb-2 ${kpi.color}`} />
                <div className="text-2xl font-bold text-white mb-1">
                  {kpi.value}
                </div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">
                  {lang === 'de' ? kpi.label : kpi.labelEn}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="/cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === 'de' ? 'Mehr erfahren' : 'Learn more'}
            <ChevronRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {aiImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-teal-500' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-teal-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentIndex}
        />
      </div>
    </div>
  );
}
