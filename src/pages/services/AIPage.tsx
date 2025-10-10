import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Brain, Sparkles, TrendingUp, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

export default function AIPage() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {lang === 'de' ? 'Künstliche Intelligenz (AI)' : 'Artificial Intelligence (AI)'}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            {lang === 'de' 
              ? 'KI-gestützte Lösungen zur Automatisierung und Wertschöpfung für Ihr Unternehmen.'
              : 'AI-powered solutions for automation and value creation for your business.'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {lang === 'de' ? 'Unsere Leistungen' : 'Our Services'}
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: lang === 'de' ? 'Machine Learning Modelle' : 'Machine Learning Models' },
                  { icon: TrendingUp, title: lang === 'de' ? 'Predictive Analytics' : 'Predictive Analytics' },
                  { icon: Cpu, title: lang === 'de' ? 'Natural Language Processing' : 'Natural Language Processing' },
                  { icon: Brain, title: lang === 'de' ? 'Computer Vision' : 'Computer Vision' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-teal-500/30">
                    <item.icon className="w-6 h-6 text-teal-400" />
                    <span className="text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {lang === 'de' ? 'Einsatzbereiche' : 'Use Cases'}
              </h2>
              <p className="text-gray-300 mb-6">
                {lang === 'de'
                  ? 'Künstliche Intelligenz transformiert Geschäftsprozesse und schafft neue Möglichkeiten für Innovation und Effizienz.'
                  : 'Artificial intelligence transforms business processes and creates new opportunities for innovation and efficiency.'}
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Intelligente Automatisierung' : 'Intelligent automation'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Datengetriebene Entscheidungen' : 'Data-driven decisions'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Personalisierte Kundenerlebnisse' : 'Personalized customer experiences'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href={localePath('/#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold transition"
            >
              {lang === 'de' ? 'Jetzt Beratung anfragen' : 'Request consultation now'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

