'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface AIImageData {
  id: string;
  backgroundColor: string;
  title: string;
  titleEn: string;
  kpis: {
    value: string;
    label: string;
    labelEn: string;
    icon: React.ComponentType<any>;
    color: string;
  }[];
}

const aiImages: AIImageData[] = [
  {
    id: 'ai-transformation',
    backgroundColor: '#667eea',
    title: 'KI-Transformation',
    titleEn: 'AI Transformation',
    kpis: [
      { value: '85%', label: 'Effizienzsteigerung', labelEn: 'Efficiency Gain', icon: TrendingUp, color: 'text-green-400' },
      { value: '50+', label: 'KI-Projekte', labelEn: 'AI Projects', icon: Zap, color: 'text-blue-400' },
      { value: '99%', label: 'Genauigkeit', labelEn: 'Accuracy', icon: Shield, color: 'text-purple-400' }
    ]
  },
  {
    id: 'cloud-migration',
    backgroundColor: '#f093fb',
    title: 'Cloud-Migration',
    titleEn: 'Cloud Migration',
    kpis: [
      { value: '60%', label: 'Kosteneinsparung', labelEn: 'Cost Savings', icon: TrendingUp, color: 'text-green-400' },
      { value: '200+', label: 'Migrationen', labelEn: 'Migrations', icon: Users, color: 'text-blue-400' },
      { value: '24/7', label: 'Verfügbarkeit', labelEn: 'Availability', icon: Shield, color: 'text-purple-400' }
    ]
  },
  {
    id: 'data-analytics',
    backgroundColor: '#4facfe',
    title: 'Daten-Analytics',
    titleEn: 'Data Analytics',
    kpis: [
      { value: '95%', label: 'Datenqualität', labelEn: 'Data Quality', icon: Shield, color: 'text-purple-400' },
      { value: '10x', label: 'Schnellere Insights', labelEn: 'Faster Insights', icon: Zap, color: 'text-blue-400' },
      { value: '100+', label: 'Dashboards', labelEn: 'Dashboards', icon: TrendingUp, color: 'text-green-400' }
    ]
  },
  {
    id: 'automation',
    backgroundColor: '#43e97b',
    title: 'Prozess-Automatisierung',
    titleEn: 'Process Automation',
    kpis: [
      { value: '70%', label: 'Zeitersparnis', labelEn: 'Time Savings', icon: TrendingUp, color: 'text-green-400' },
      { value: '500+', label: 'Automatisierte Prozesse', labelEn: 'Automated Processes', icon: Zap, color: 'text-blue-400' },
      { value: '0', label: 'Manuelle Fehler', labelEn: 'Manual Errors', icon: Shield, color: 'text-purple-400' }
    ]
  }
];

interface AIImageSliderProps {
  lang: 'de' | 'en';
}

const AIImageSlider: React.FC<AIImageSliderProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === aiImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isClient]);

  // Only render on client side to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  const currentImage = aiImages[currentIndex];

  return (
        <div
          className="relative w-full h-[100px] rounded-lg overflow-hidden shadow-lg border border-gray-700/50"
        >
      {/* Background with Pattern */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: currentImage.backgroundColor }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-8 py-6">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
              {/* Left side - Title only */}
              <div className="flex-1 pr-8">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {lang === 'de' ? currentImage.title : currentImage.titleEn}
                </h3>
              </div>

              {/* Right side - KPIs */}
              <div className="flex gap-6">
                {currentImage.kpis.map((kpi, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.3, ease: "easeOut" }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[90px]"
                  >
                    <div className={`text-lg font-bold ${kpi.color} mb-1`}>
                      {kpi.value}
                    </div>
                    <div className="text-[9px] text-gray-300 uppercase tracking-wider leading-tight">
                      {lang === 'de' ? kpi.label : kpi.labelEn}
                    </div>
                  </motion.div>
                ))}
              </div>
        </motion.div>
      </div>



      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-white/60 to-white/40"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          key={currentIndex}
        />
      </div>
    </div>
  );
};

export default AIImageSlider;