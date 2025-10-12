import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Boxes, GitBranch, Zap, Cloud, CheckCircle, ArrowRight } from 'lucide-react';

export default function MicroservicesPage() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Boxes className="w-12 h-12 text-teal-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {lang === 'de' ? 'Microservices & APIs' : 'Microservices & APIs'}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            {lang === 'de' 
              ? 'Skalierbare Microservice-Architekturen und API-first Designs für moderne, flexible Systeme.'
              : 'Scalable microservice architectures and API-first designs for modern, flexible systems.'}
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
                  { icon: GitBranch, title: lang === 'de' ? 'Microservice-Architektur' : 'Microservice Architecture' },
                  { icon: Zap, title: lang === 'de' ? 'API-First Design' : 'API-First Design' },
                  { icon: Cloud, title: lang === 'de' ? 'Cloud-Native Development' : 'Cloud-Native Development' },
                  { icon: Boxes, title: lang === 'de' ? 'Container Orchestration' : 'Container Orchestration' },
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
                {lang === 'de' ? 'Vorteile' : 'Benefits'}
              </h2>
              <p className="text-gray-300 mb-6">
                {lang === 'de'
                  ? 'Microservices ermöglichen es Ihnen, schneller zu entwickeln, einfacher zu skalieren und flexibler auf Marktveränderungen zu reagieren.'
                  : 'Microservices enable you to develop faster, scale easier, and respond more flexibly to market changes.'}
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Unabhängige Deployment-Zyklen' : 'Independent deployment cycles'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Horizontale Skalierbarkeit' : 'Horizontal scalability'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                  <span>{lang === 'de' ? 'Technologie-Flexibilität' : 'Technology flexibility'}</span>
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


