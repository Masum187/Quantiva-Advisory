import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Cloud, Server, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function CloudPage() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-12 h-12 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {lang === 'de' ? 'Cloud-Lösungen' : 'Cloud Solutions'}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            {lang === 'de' 
              ? 'Skalierbare Cloud-Architekturen und DevOps-Enablement für moderne IT-Infrastrukturen.'
              : 'Scalable cloud architectures and DevOps enablement for modern IT infrastructures.'}
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
                  { icon: Cloud, title: lang === 'de' ? 'Cloud Migration' : 'Cloud Migration' },
                  { icon: Server, title: lang === 'de' ? 'Infrastructure as Code' : 'Infrastructure as Code' },
                  { icon: Zap, title: lang === 'de' ? 'DevOps & CI/CD' : 'DevOps & CI/CD' },
                  { icon: Shield, title: lang === 'de' ? 'Cloud Security' : 'Cloud Security' },
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
                {lang === 'de' ? 'Cloud Plattformen' : 'Cloud Platforms'}
              </h2>
              <p className="text-gray-300 mb-6">
                {lang === 'de'
                  ? 'Wir unterstützen Sie bei der Auswahl und Implementierung der richtigen Cloud-Plattform für Ihre Anforderungen.'
                  : 'We support you in selecting and implementing the right cloud platform for your requirements.'}
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'AWS, Azure, Google Cloud' : 'AWS, Azure, Google Cloud'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Multi-Cloud & Hybrid-Cloud' : 'Multi-cloud & hybrid cloud'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Kostenoptimierung' : 'Cost optimization'}</span>
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

