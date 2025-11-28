'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface WhitepaperCardProps {
  title: string;
  description: string;
  topic: string;
  date: string;
  image: string;
  downloadUrl: string;
  index?: number; // For color rotation
}

export default function WhitepaperCard({ 
  title, 
  description, 
  topic, 
  date, 
  image,
  downloadUrl,
  index = 0
}: WhitepaperCardProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isDownloading, setIsDownloading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const colorBars = [
    { color: 'bg-cyan-400', border: 'border-cyan-400' },
    { color: 'bg-purple-400', border: 'border-purple-400' },
    { color: 'bg-teal-400', border: 'border-teal-400' },
    { color: 'bg-green-400', border: 'border-green-400' },
    { color: 'bg-blue-400', border: 'border-blue-400' },
    { color: 'bg-pink-400', border: 'border-pink-400' },
  ];
  const colorBar = colorBars[index % colorBars.length];

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Hier würde normalerweise die Daten an ein Backend oder CRM gesendet werden
    console.log('Form data submitted:', formData);
    
    // Simuliere Download nach kurzer Verzögerung
    setTimeout(() => {
      // Öffne das Whitepaper als Embedded Viewer
      setShowForm(false);
      setIsDownloading(false);
      
      // Öffne embedded Canva viewer
      window.open('https://www.canva.com/design/DAG2dA7rSLc/szCCyCPcHvj-hudg23snEw/view?utm_content=DAG2dA7rSLc&utm_campaign=designshare&utm_medium=embeds&utm_source=link', '_blank');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: ''
      });
    }, 1000);
  };

  return (
    <motion.article
      className="group relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Closed State - Only Color Bar */}
      <motion.div
        className="absolute inset-0 flex items-center justify-start pl-4"
        animate={{
          width: isExpanded ? '0%' : '100%',
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.div
          className={`w-3 ${colorBar.color} rounded-full h-3/4 shadow-lg`}
          style={{
            boxShadow: `0 10px 20px -5px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.5)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.5)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.5)').replace('bg-green-400', 'rgba(74, 222, 128, 0.5)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.5)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.5)')}`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Expanded State - Full Card */}
      <motion.div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl border border-white/20 hover:border-white/40 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ x: '-100%' }}
        animate={{
          x: isExpanded ? '0%' : '-100%',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        whileHover={{
          boxShadow: `0 20px 40px -10px ${colorBar.color.replace('bg-cyan-400', 'rgba(34, 211, 238, 0.3)').replace('bg-purple-400', 'rgba(192, 132, 252, 0.3)').replace('bg-teal-400', 'rgba(45, 212, 191, 0.3)').replace('bg-green-400', 'rgba(74, 222, 128, 0.3)').replace('bg-blue-400', 'rgba(96, 165, 250, 0.3)').replace('bg-pink-400', 'rgba(244, 114, 182, 0.3)')}`,
        }}
      >
        {/* Animated Background Glow */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 ${colorBar.color} blur-3xl`}
          animate={{
            scale: isExpanded ? [1, 1.2, 1] : 1,
            opacity: isExpanded ? [0, 0.2, 0.1] : 0,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative h-full flex pl-4 pr-4 md:pl-6 md:pr-6 py-6 md:py-8 z-10">
          {/* Vertical Colored Bar - Left */}
          <motion.div
            className={`w-1.5 ${colorBar.color} rounded-full mr-4 flex-shrink-0 shadow-lg`}
            animate={{
              scaleY: isExpanded ? [1, 1.1, 1] : 1,
              opacity: isExpanded ? [0.8, 1, 0.8] : 0.8,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Title with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20,
              }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                {title}
              </h3>

              {/* Topic Badge */}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-semibold rounded-full backdrop-blur-sm">
                  {topic}
                </span>
              </div>
            </motion.div>

            {/* Description with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20,
              }}
              transition={{ delay: 0.2 }}
              className="mb-4 flex-1 overflow-y-auto"
            >
              <p className="text-white leading-relaxed text-xs">
                {description}
              </p>
            </motion.div>

            {/* Bottom Section - Date and CTA */}
            <motion.div
              className="flex items-end justify-between mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                y: isExpanded ? 0 : 20,
              }}
              transition={{ delay: 0.3 }}
            >
              {/* Date */}
              <div className="text-base md:text-lg font-black text-white">
                {date}
              </div>

              {/* CTA - Vertical Stack */}
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  setShowForm(true);
                }}
                className="flex flex-col items-end gap-0.5 text-teal-400 font-semibold"
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs">Whitepaper</span>
                <span className="text-xs">anfordern →</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Form Modal */}
      {showForm && (
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm z-50 p-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-2xl p-8 max-w-md w-full border border-white/30"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Whitepaper herunterladen</h3>
            <p className="text-gray-300 mb-6">
              Bitte füllen Sie das Formular aus, um das Whitepaper herunterzuladen.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Unternehmen *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-white/20 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold disabled:opacity-50"
                >
                  {isDownloading ? (
                    'Wird heruntergeladen...'
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Jetzt herunterladen
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-white/20"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.article>
  );
}
