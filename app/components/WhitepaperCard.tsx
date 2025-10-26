'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface WhitepaperCardProps {
  title: string;
  description: string;
  topic: string;
  date: string;
  image: string;
  downloadUrl: string;
}

export default function WhitepaperCard({ 
  title, 
  description, 
  topic, 
  date, 
  image,
  downloadUrl 
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

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    // Hier würde normalerweise die Daten an ein Backend oder CRM gesendet werden
    console.log('Form data submitted:', formData);
    
    // Simuliere Download nach kurzer Verzögerung
    setTimeout(() => {
      window.open(downloadUrl, '_blank');
      setShowForm(false);
      setIsDownloading(false);
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
    <article className="group relative overflow-hidden rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/30 hover:border-white/50 transition-all duration-500 shadow-2xl">
      {/* Study Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={192}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Topic Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {topic}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Download Button */}
        <button
          onClick={() => setShowForm(true)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:scale-105 font-semibold"
        >
          <Download className="w-5 h-5" />
          Whitepaper herunterladen
        </button>
      </div>

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
    </article>
  );
}
