import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import casesData from '../lib/data/cases.json';

type ReferencesSliderProps = {
  lang: 'de' | 'en';
};

export default function ReferencesSlider({ lang }: ReferencesSliderProps) {
  // Filtere nur Cases mit Quotes (Referenzen)
  const references = casesData
    .filter(c => c.quote && (lang === 'de' ? c.quote.textDe : c.quote.textEn))
    .slice(0, 4) // Limitiere auf 4 Cases für das Grid-Layout
    .map(c => ({
      id: c.slug,
      company: c.quote?.author || (lang === 'de' ? 'Kunde' : 'Client'),
      quote: lang === 'de' ? c.quote?.textDe : c.quote?.textEn,
      industry: c.industry,
      category: c.category,
      logo: c.heroImage,
      title: lang === 'de' ? c.titleDe : c.titleEn,
      subtitle: lang === 'de' ? c.subtitleDe : c.subtitleEn,
      results: lang === 'de' ? c.resultsDe : c.resultsEn,
    }));

  // Haupt-Featured Case (erster)
  const featuredCase = references[0];
  // Kleinere Cases (rest)
  const gridCases = references.slice(1);

  if (references.length === 0 || !featuredCase) {
    return null;
  }

  // Animation variants für neue Cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <motion.h2 
            className="text-white text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {lang === 'de' ? 'Designed for real world use.' : 'Designed for real world use.'}
          </motion.h2>
          
          <motion.a
            href={lang === 'de' ? '/de/cases' : '/en/cases'}
            className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang === 'de' ? 'GEHE ZU REFERENZEN' : 'GO TO CASE STUDIES'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Featured Card (Large Top Card) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <motion.div
                className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-green-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Case Study Label */}
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                CASE STUDY
              </div>

              {/* Title */}
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {featuredCase.title}
              </h3>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
                {featuredCase.quote}
              </p>

              {/* CTA Button */}
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-black"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid of Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gridCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 overflow-hidden h-full">
                {/* Abstract Background Shape */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/15 via-teal-500/15 to-green-500/15 rounded-full blur-2xl"
                    style={{ 
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -180, -360],
                    }}
                    transition={{
                      duration: 15 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Case Study Label */}
                  <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-md text-xs font-semibold mb-4 w-fit">
                    CASE STUDY
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {caseItem.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {caseItem.quote}
                  </p>

                  {/* CTA Button */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black mt-auto"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}