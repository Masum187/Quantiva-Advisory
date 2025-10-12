import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../QuantivaWebsite';
import { Boxes, GitBranch, Zap, Network, CheckCircle, ArrowLeft } from 'lucide-react';

export default function MicroservicesCapability() {
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
              <Boxes className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {lang === 'de' ? 'Microservices & APIs' : 'Microservices & APIs'}
              </h1>
              <p className="text-gray-400 mt-2">
                {lang === 'de' ? 'Moderne, skalierbare Architekturen für agile Entwicklung' : 'Modern, scalable architectures for agile development'}
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
              ? 'Microservices ermöglichen es Unternehmen, schneller zu entwickeln, einfacher zu skalieren und flexibler auf Marktveränderungen zu reagieren. Wir unterstützen Sie bei der Transformation zu einer modernen, serviceorientierten Architektur.'
              : 'Microservices enable companies to develop faster, scale easier, and respond more flexibly to market changes. We support you in the transformation to a modern, service-oriented architecture.'}
          </p>
        </div>

        {/* Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-teal-500/30 h-96">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
            alt="Microservices Architecture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* Domain-Driven Design */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Domain-Driven Design' : 'Domain-Driven Design'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Wir nutzen Domain-Driven Design (DDD), um Ihre Geschäftslogik klar zu strukturieren und in unabhängige Services zu zerlegen. Bounded Contexts sorgen für klare Grenzen und reduzieren Abhängigkeiten.'
              : 'We use Domain-Driven Design (DDD) to clearly structure your business logic and decompose it into independent services. Bounded contexts ensure clear boundaries and reduce dependencies.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Bounded Contexts & Aggregate Design' : 'Bounded contexts & aggregate design'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Event Storming Workshops' : 'Event storming workshops'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Ubiquitous Language' : 'Ubiquitous language'}</span>
            </li>
          </ul>
        </section>

        {/* API Gateway & Governance */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Network className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'API-Gateway & Governance' : 'API Gateway & Governance'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'API Management' : 'API Management'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'Zentrale API-Gateways für Routing, Rate Limiting und Security'
                  : 'Central API gateways for routing, rate limiting and security'}
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/50 p-6 border border-teal-500/30">
              <h3 className="font-semibold text-lg mb-2">{lang === 'de' ? 'API Design' : 'API Design'}</h3>
              <p className="text-gray-400 text-sm">
                {lang === 'de' 
                  ? 'RESTful APIs, GraphQL, gRPC - die richtige Technologie für Ihren Use Case'
                  : 'RESTful APIs, GraphQL, gRPC - the right technology for your use case'}
              </p>
            </div>
          </div>
        </section>

        {/* Image 2 */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-teal-500/30 h-80">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
            alt="API Development"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* Event-/Async-Patterns */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-teal-400" />
            <h2 className="text-2xl font-bold">
              {lang === 'de' ? 'Event-/Async-Patterns' : 'Event/Async Patterns'}
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Event-Driven Architecture und asynchrone Kommunikation ermöglichen lose gekoppelte Services, die unabhängig voneinander skalieren können. Wir setzen auf bewährte Patterns wie Event Sourcing, CQRS und Saga.'
              : 'Event-driven architecture and asynchronous communication enable loosely coupled services that can scale independently. We rely on proven patterns like event sourcing, CQRS and saga.'}
          </p>
        </section>

        {/* Observability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Observability' : 'Observability'}
          </h2>
          <p className="text-gray-300 mb-4">
            {lang === 'de'
              ? 'Distributed Tracing, Logging und Monitoring sind essentiell für den Betrieb von Microservices. Wir implementieren umfassende Observability-Lösungen, die Ihnen volle Transparenz über Ihre Systeme geben.'
              : 'Distributed tracing, logging and monitoring are essential for operating microservices. We implement comprehensive observability solutions that give you full transparency over your systems.'}
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'OpenTelemetry & Jaeger' : 'OpenTelemetry & Jaeger'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'Prometheus & Grafana' : 'Prometheus & Grafana'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
              <span>{lang === 'de' ? 'ELK Stack / Loki' : 'ELK Stack / Loki'}</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-900/30 to-slate-900/30 border border-teal-500/30">
          <h3 className="text-2xl font-bold mb-4">
            {lang === 'de' ? 'Microservices-Architektur für Ihr Unternehmen?' : 'Microservices Architecture for Your Business?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {lang === 'de'
              ? 'Lassen Sie uns gemeinsam Ihre Architektur modernisieren und für die Zukunft aufstellen.'
              : "Let's modernize your architecture together and prepare it for the future."}
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


