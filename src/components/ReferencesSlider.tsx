import React from 'react';
import { motion } from 'framer-motion';
import casesData from '../data/cases.json';

type ReferencesSliderProps = {
  lang: 'de' | 'en';
};

export default function ReferencesSlider({ lang }: ReferencesSliderProps) {
  // Filtere nur Cases mit Quotes (Referenzen)
  const references = casesData
    .filter(c => c.quote && (lang === 'de' ? c.quote.textDe : c.quote.textEn))
    .map(c => ({
      id: c.slug,
      company: c.quote?.author || (lang === 'de' ? 'Kunde' : 'Client'),
      quote: lang === 'de' ? c.quote?.textDe : c.quote?.textEn,
      industry: c.industry,
      category: c.category,
    }));

  // Dupliziere die Referenzen für nahtloses Looping
  const duplicatedReferences = [...references, ...references, ...references];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-16 overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 mb-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">
          {lang === 'de' ? 'Was unsere Kunden sagen' : 'What our clients say'}
        </h2>
        <p className="text-center text-gray-400 mt-2">
          {lang === 'de' ? 'Erfolgsgeschichten aus verschiedenen Branchen' : 'Success stories from various industries'}
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Gradient Overlays für Fade-Effekt */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Animierter Slider */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1 * (references.length * 320)], // 320px = bubble width + gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: references.length * 8, // 8 Sekunden pro Referenz
              ease: "linear",
            },
          }}
        >
          {duplicatedReferences.map((ref, index) => (
            <motion.div
              key={`${ref.id}-${index}`}
              className="flex-shrink-0 w-[300px] h-[200px] rounded-3xl bg-gradient-to-br from-teal-500/20 via-slate-800/50 to-slate-900/80 border border-teal-500/30 p-6 shadow-xl shadow-teal-500/10 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(20, 184, 166, 0.6)',
                boxShadow: '0 20px 40px rgba(20, 184, 166, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <div className="mb-3">
                <svg
                  className="h-8 w-8 text-teal-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-sm text-gray-200 leading-relaxed mb-4 line-clamp-4">
                "{ref.quote}"
              </p>

              {/* Author & Tags */}
              <div className="mt-auto">
                <p className="text-xs font-semibold text-teal-400 mb-2">{ref.company}</p>
                <div className="flex gap-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {ref.industry}
                  </span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600">
                    {ref.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Pause on Hover Hint */}
      <div className="text-center mt-8">
        <p className="text-xs text-gray-500">
          {lang === 'de' ? 'Bewegen Sie die Maus über eine Karte, um sie zu vergrößern' : 'Hover over a card to enlarge it'}
        </p>
      </div>
    </section>
  );
}

