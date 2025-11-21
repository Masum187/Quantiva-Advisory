'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Server, Lock, CheckCircle, ArrowRight, Database, Network, Key, FileText } from 'lucide-react';
import { AnimatedCard } from '../../services/AnimatedCard';

interface PrivateAIHostingPageProps {
  lang: 'de' | 'en';
}

export default function PrivateAIHostingPage({ lang }: PrivateAIHostingPageProps) {
  const content = {
    de: {
      hero: {
        badge: 'Private AI Hosting',
        title: 'Ihre eigenen KI-Modelle, sicher in Ihrem Unternehmen',
        subtitle: 'Nutzen Sie die Möglichkeiten moderner KI, ohne vertrauliche Daten in öffentliche Cloud-Dienste zu geben',
      },
      intro: {
        title: 'Warum Private AI?',
        description: 'Viele Unternehmen möchten KI einsetzen, stehen aber vor denselben Fragen: Dürfen wir unsere sensiblen Daten in einen Cloud-KI-Dienst hochladen? Werden unsere Prompts und Inhalte zur Verbesserung fremder Modelle verwendet? Wie stellen wir sicher, dass keine personenbezogenen Daten abfließen? Die Folge: KI-Projekte bleiben in der Experimentierphase stecken – oder werden aus Datenschutzgründen komplett blockiert.',
      },
      solution: {
        title: 'Unsere Lösung: Private AI mit Ollama, Open WebUI & dedizierter Infrastruktur',
        description: 'Wir kombinieren moderne Open-Source-Modelle mit einer On-Premise- oder dedizierten EU-Hosting-Lösung und machen KI im Unternehmen sicher nutzbar.',
      },
      services: {
        title: 'Unsere Leistungen',
        items: [
          {
            icon: Server,
            title: 'Ollama als performante Runtime',
            description: 'Unterstützung für aktuelle Open-Source-Modelle (z.B. Llama, Mistral, Qwen, Code-Modelle). Verwaltung mehrerer Modelle parallel. Kontrollierte Updates und Versionierung.',
          },
          {
            icon: Brain,
            title: 'Open WebUI als benutzerfreundliche Oberfläche',
            description: 'Browserbasiertes Chat-Interface – ähnlich bekannten KI-Chat-Tools, aber komplett intern. Auswahl verschiedener Modelle direkt im UI. Prompt-Vorlagen und vordefinierte Workflows.',
          },
          {
            icon: Database,
            title: 'Dedizierte Server / Appliance',
            description: 'Betrieb physisch in Ihrem Rechenzentrum oder in einer dedizierten EU-Cloud-Umgebung. Hardware-Sizing passend zu Ihren Use Cases. Keine geteilten Ressourcen – volle Kontrolle.',
          },
          {
            icon: Network,
            title: 'Integration in Ihre Systemlandschaft',
            description: 'Anbindung an bestehende Systeme (Intranet, DMS, CRM, ERP, Ticket-Systeme). Zugriff für Mitarbeitende über Open WebUI und für Anwendungen über standardisierte APIs.',
          },
        ],
      },
      useCases: {
        title: 'Typische Einsatzszenarien',
        items: [
          'Interner KI-Assistent für Fachbereiche (Einkauf, Vertrieb, HR, Controlling, Service, IT-Support)',
          'Dokumenten- & Wissens-Chat (Richtlinien, Verträge, Projektdokumentation, QM-Handbücher)',
          'Code- & Entwicklungsassistent für Developer im eigenen Git-Umfeld',
          'Branchenspezifische Spezialmodelle (Fertigung, Logistik, Qualitätsmanagement, Kundenservice)',
        ],
      },
      compliance: {
        title: 'Datenschutz & Compliance – konkret geregelt',
        description: 'Wir legen besonderen Wert auf Datenschutz und Informationssicherheit.',
        items: [
          {
            icon: Lock,
            title: 'Daten bleiben im Unternehmen',
            description: 'Verarbeitung ausschließlich in Ihrer Infrastruktur oder klar definierten, dedizierten EU-Umgebungen. Kein verdeckter Datentransfer an Modellanbieter oder Drittparteien.',
          },
          {
            icon: Shield,
            title: 'DSGVO-konforme Architektur',
            description: 'Unterstützung bei Verzeichnis von Verarbeitungstätigkeiten, Auftragsverarbeitungsvertrag (AVV), Technisch-organisatorischen Maßnahmen (TOMs), Löschkonzepten und Protokollierung.',
          },
          {
            icon: Key,
            title: 'Security-by-Design',
            description: 'Verschlüsselte Verbindungen (TLS), Zugriffskontrolle, Logging und Monitoring. Optionale Anbindung an Ihr IAM (Azure AD, Keycloak etc.).',
          },
        ],
      },
      process: {
        title: 'So läuft ein Projekt mit Quantiva ab',
        steps: [
          {
            title: 'Analyse & Beratung',
            description: 'Klärung von Use Cases, Datenschutz- und Compliance-Anforderungen, Infrastrukturvoraussetzungen.',
          },
          {
            title: 'Architektur & Sizing',
            description: 'Auswahl der Modelle, Definition des Ziel-Setups mit Ollama & Open WebUI. Dimensionierung der Server (On-Prem oder dedizierte EU-Cloud).',
          },
          {
            title: 'Implementierung & Integration',
            description: 'Installation und Konfiguration von Ollama & Open WebUI. Anbindung an Ihre Systeme und Einrichtung der gewünschten Schnittstellen.',
          },
          {
            title: 'Datenschutz & Security',
            description: 'Unterstützung bei Dokumentation (AVV, TOMs, Richtlinien). Abstimmung mit IT-Security, Datenschutzbeauftragten & Betriebsrat.',
          },
          {
            title: 'Betrieb & Weiterentwicklung',
            description: 'Optional: Managed Service für Monitoring, Updates, Modellwechsel und Performanceoptimierung. Laufende Anpassung an neue Use Cases und Modelle.',
          },
        ],
      },
      technologies: {
        title: 'Technischer Stack',
        items: [
          'Ollama als Model Runtime (Pull, Konfiguration, Inferenz)',
          'Open WebUI als Web-Frontend (Chat, Modellwahl, Workspaces)',
          'Reverse Proxy / API-Gateway (NGINX, Traefik)',
          'Optional: Vektordatenbank (Qdrant, Weaviate, pgvector) für RAG-Szenarien',
          'Monitoring (Prometheus, Grafana) und zentrales Logging',
        ],
      },
      cta: {
        title: 'Bereit für Private AI?',
        description: 'Lassen Sie uns in einem unverbindlichen Gespräch klären, welche Use Cases sich in Ihrem Unternehmen für Private AI eignen und wie wir Ihre eigenen Modelle sicher und DSGVO-konform in Betrieb bringen.',
        button: 'Jetzt Ersttermin vereinbaren',
      },
    },
    en: {
      hero: {
        badge: 'Private AI Hosting',
        title: 'Your own AI models, secure in your company',
        subtitle: 'Leverage modern AI capabilities without sending confidential data to public cloud services',
      },
      intro: {
        title: 'Why Private AI?',
        description: 'Many companies want to use AI but face the same questions: Can we upload our sensitive data to a cloud AI service? Will our prompts and content be used to improve third-party models? How do we ensure no personal data leaks? The result: AI projects remain in the experimental phase – or are completely blocked due to data protection concerns.',
      },
      solution: {
        title: 'Our Solution: Private AI with Ollama, Open WebUI & Dedicated Infrastructure',
        description: 'We combine modern open-source models with an on-premise or dedicated EU hosting solution, making AI safely usable in your company.',
      },
      services: {
        title: 'Our Services',
        items: [
          {
            icon: Server,
            title: 'Ollama as High-Performance Runtime',
            description: 'Support for current open-source models (e.g., Llama, Mistral, Qwen, code models). Management of multiple models in parallel. Controlled updates and versioning.',
          },
          {
            icon: Brain,
            title: 'Open WebUI as User-Friendly Interface',
            description: 'Browser-based chat interface – similar to known AI chat tools, but completely internal. Selection of different models directly in the UI. Prompt templates and predefined workflows.',
          },
          {
            icon: Database,
            title: 'Dedicated Servers / Appliances',
            description: 'Operation physically in your data center or in a dedicated EU cloud environment. Hardware sizing tailored to your use cases. No shared resources – full control.',
          },
          {
            icon: Network,
            title: 'Integration into Your System Landscape',
            description: 'Connection to existing systems (intranet, DMS, CRM, ERP, ticket systems). Access for employees via Open WebUI and for applications via standardized APIs.',
          },
        ],
      },
      useCases: {
        title: 'Typical Use Cases',
        items: [
          'Internal AI assistant for departments (procurement, sales, HR, controlling, service, IT support)',
          'Document & knowledge chat (guidelines, contracts, project documentation, QM manuals)',
          'Code & development assistant for developers in your own Git environment',
          'Industry-specific specialized models (manufacturing, logistics, quality management, customer service)',
        ],
      },
      compliance: {
        title: 'Data Protection & Compliance – Specifically Regulated',
        description: 'We place particular emphasis on data protection and information security.',
        items: [
          {
            icon: Lock,
            title: 'Data Stays in Your Company',
            description: 'Processing exclusively in your infrastructure or clearly defined, dedicated EU environments. No hidden data transfer to model providers or third parties.',
          },
          {
            icon: Shield,
            title: 'GDPR-Compliant Architecture',
            description: 'Support for records of processing activities, data processing agreements (DPA), technical and organizational measures (TOMs), deletion concepts, and logging.',
          },
          {
            icon: Key,
            title: 'Security-by-Design',
            description: 'Encrypted connections (TLS), access control, logging and monitoring. Optional integration with your IAM (Azure AD, Keycloak, etc.).',
          },
        ],
      },
      process: {
        title: 'How a Project with Quantiva Works',
        steps: [
          {
            title: 'Analysis & Consulting',
            description: 'Clarification of use cases, data protection and compliance requirements, infrastructure prerequisites.',
          },
          {
            title: 'Architecture & Sizing',
            description: 'Selection of models, definition of target setup with Ollama & Open WebUI. Sizing of servers (on-prem or dedicated EU cloud).',
          },
          {
            title: 'Implementation & Integration',
            description: 'Installation and configuration of Ollama & Open WebUI. Connection to your systems and setup of desired interfaces.',
          },
          {
            title: 'Data Protection & Security',
            description: 'Support with documentation (DPA, TOMs, guidelines). Coordination with IT security, data protection officers & works council.',
          },
          {
            title: 'Operations & Further Development',
            description: 'Optional: Managed service for monitoring, updates, model changes, and performance optimization. Ongoing adaptation to new use cases and models.',
          },
        ],
      },
      technologies: {
        title: 'Technical Stack',
        items: [
          'Ollama as Model Runtime (pull, configuration, inference)',
          'Open WebUI as Web Frontend (chat, model selection, workspaces)',
          'Reverse Proxy / API Gateway (NGINX, Traefik)',
          'Optional: Vector database (Qdrant, Weaviate, pgvector) for RAG scenarios',
          'Monitoring (Prometheus, Grafana) and centralized logging',
        ],
      },
      cta: {
        title: 'Ready for Private AI?',
        description: 'Let us clarify in a non-binding conversation which use cases are suitable for Private AI in your company and how we can safely and GDPR-compliantly put your own models into operation.',
        button: 'Schedule initial consultation',
      },
    },
  }[lang];

  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dbrisux8i/video/upload/v1760346430/kling_20251009_Image_to_Video_A_confiden_4908_0_bimwvi.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => {
              setVideoError(true);
              if (videoRef.current) {
                videoRef.current.style.display = 'none';
              }
            }}
          />
        )}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
        )}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 py-32 z-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-purple-200">
              <Brain className="h-4 w-4" />
              {content.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up" className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-12">
            <h2 className="mb-6 text-3xl font-bold">{content.intro.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              {content.intro.description}
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-teal-900/40 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4">{content.solution.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {content.solution.description}
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-4xl font-bold"
          >
            {content.services.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard
                  key={service.title}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-8 transition-all hover:border-purple-500/50"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-purple-500/20 p-4">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-black/80 to-purple-950/20 relative z-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up">
            <h2 className="mb-12 text-center text-4xl font-bold">{content.useCases.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.useCases.items.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-purple-400" />
                  <p className="text-gray-200">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up" className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-12">
            <h2 className="mb-6 text-3xl font-bold">{content.compliance.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              {content.compliance.description}
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {content.compliance.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-white/10 bg-slate-800/60 p-6"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-purple-500/20 p-4">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black/80 to-purple-950/20 relative z-20 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up">
            <h2 className="mb-12 text-center text-4xl font-bold">{content.process.title}</h2>
            <div className="space-y-6">
              {content.process.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedCard direction="up">
            <h2 className="mb-12 text-center text-4xl font-bold">{content.technologies.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {content.technologies.items.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedCard direction="up" className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-black p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{content.cta.title}</h2>
            <p className="mb-8 text-xl text-gray-300">{content.cta.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/70"
            >
              {content.cta.button}
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}

