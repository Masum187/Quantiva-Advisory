import React from 'react';
import { useLanguage } from '../../QuantivaWebsite';
import { Cog, Database, Layers, Workflow, CheckCircle, ArrowLeft } from 'lucide-react';

export default function SAPCapability() {
  const { lang, localePath } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="bg-slate-900/50 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <a 
            href={localePath('/#services-detail')} 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'de' ? 'Zurück zu Kompetenzen' : 'Back to Capabilities'}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
              <Cog className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {lang === 'de' ? 'SAP Services' : 'SAP Services'}
              </h1>
              <p className="text-gray-400 mt-2">
                {lang === 'de' ? 'Expertise für Ihre SAP-Landschaft' : 'Expertise for your SAP landscape'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-6 pb-20">
        {/* Intro */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            {lang === 'de' 
              ? 'Mit jahrelanger Erfahrung in SAP-Projekten unterstützen wir Sie bei der Modernisierung und Optimierung Ihrer SAP-Landschaft. Von ABAP-Entwicklung bis zur SAP BTP Integration.'
              : 'With years of experience in SAP projects, we support you in modernizing and optimizing your SAP landscape. From ABAP development to SAP BTP integration.'}
          </p>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
            alt="SAP Services"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* ABAP/Fiori */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'ABAP/Fiori' : 'ABAP/Fiori'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Unsere SAP-Entwickler beherrschen ABAP und moderne Fiori-Entwicklung. Wir entwickeln Custom-Lösungen, die perfekt in Ihre SAP-Landschaft integriert sind.'
              : 'Our SAP developers master ABAP and modern Fiori development. We develop custom solutions that are perfectly integrated into your SAP landscape.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'ABAP OO & RAP (RESTful ABAP Programming)' : 'ABAP OO & RAP (RESTful ABAP Programming)'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'SAP Fiori Elements & Freestyle Apps' : 'SAP Fiori Elements & Freestyle Apps'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'UI5 & SAPUI5 Development' : 'UI5 & SAPUI5 Development'}</span>
            </li>
          </ul>
        </section>

        {/* SAP BTP & Integration */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'SAP BTP & Integration' : 'SAP BTP & Integration'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'SAP BTP Services' : 'SAP BTP Services'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Cloud Foundry, Kyma, Integration Suite, Workflow Management'
                  : 'Cloud Foundry, Kyma, Integration Suite, Workflow Management'}
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'Integration' : 'Integration'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'SAP PI/PO, CPI, API Management, Event Mesh'
                  : 'SAP PI/PO, CPI, API Management, Event Mesh'}
              </p>
            </div>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-teal-500/30">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
            alt="SAP BTP"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* GxP/CSV & Test Mgmt */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Workflow className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'GxP/CSV & Test Management' : 'GxP/CSV & Test Management'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Für regulierte Industrien (Pharma, Healthcare) bieten wir GxP-konforme SAP-Lösungen und Computer System Validation (CSV). Unser Test Management stellt höchste Qualität sicher.'
              : 'For regulated industries (pharma, healthcare) we offer GxP-compliant SAP solutions and Computer System Validation (CSV). Our test management ensures the highest quality.'}
          </p>
        </section>

        {/* Change & Release */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Change & Release Management' : 'Change & Release Management'}
          </h2>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Strukturierte Change- und Release-Prozesse minimieren Risiken und sorgen für stabile SAP-Systeme. Wir implementieren Best Practices für Ihr SAP Change Management.'
              : 'Structured change and release processes minimize risks and ensure stable SAP systems. We implement best practices for your SAP change management.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Transport Management' : 'Transport management'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Release Planning & Coordination' : 'Release planning & coordination'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Post-Go-Live Support' : 'Post-go-live support'}</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-900/30 to-slate-900/30 border border-teal-500/30">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'SAP-Projekt geplant?' : 'SAP Project Planned?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {lang === 'de'
              ? 'Lassen Sie uns über Ihre SAP-Anforderungen sprechen und die beste Lösung finden.'
              : "Let's talk about your SAP requirements and find the best solution."}
          </p>
          <a
            href={localePath('/#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-xl font-semibold transition"
          >
            {lang === 'de' ? 'Jetzt Kontakt aufnehmen' : 'Contact us now'}
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </a>
        </div>
      </article>
    </div>
  );
}

