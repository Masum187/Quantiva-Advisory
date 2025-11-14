export type ServiceOverview = {
  slug: string;
  language: 'de' | 'en';
  title: string;
  description: string;
  tags: string[];
};

export const servicesOverview: ServiceOverview[] = [
  {
    slug: 'ai',
    language: 'de',
    title: 'AI & Data Products',
    description: 'KI-Strategie, Machine Learning und MLOps für mittelständische Unternehmen.',
    tags: ['AI', 'MLOps', 'Data Products'],
  },
  {
    slug: 'cloud',
    language: 'de',
    title: 'Cloud & Operating Model',
    description: 'Cloud-Transition, Landing Zones und FinOps für skalierbare Plattformen.',
    tags: ['Cloud', 'FinOps', 'Operating Model'],
  },
  {
    slug: 'sap',
    language: 'de',
    title: 'SAP Transformation',
    description: 'S/4HANA Migration, Prozessautomatisierung und Integration in hybride Landschaften.',
    tags: ['SAP', 'S/4HANA', 'ERP'],
  },
  {
    slug: 'microservices',
    language: 'de',
    title: 'Microservices & Integration',
    description: 'API-first Architekturen, Event Streaming und Legacy-Modernisierung.',
    tags: ['Integration', 'APIs', 'Architecture'],
  },
  {
    slug: 'cyber-security',
    language: 'de',
    title: 'Cyber Security & GRC',
    description: 'Zero Trust Architekturen, SOC-Modernisierung und ISO 27001 Programme.',
    tags: ['Security', 'Governance', 'GRC'],
  },
  {
    slug: 'new-work',
    language: 'de',
    title: 'New Work & Collaboration',
    description: 'Digitale Arbeitsplatzlösungen, Collaboration Suites und Change Begleitung.',
    tags: ['New Work', 'Collaboration', 'Change'],
  },
  {
    slug: 'erp-crm',
    language: 'de',
    title: 'ERP & CRM Services',
    description: 'SAP, Microsoft Dynamics und Salesforce Implementierungen für durchgängige Prozesse.',
    tags: ['ERP', 'CRM', 'Integration'],
  },
  {
    slug: 'test-automation',
    language: 'de',
    title: 'Testautomatisierung',
    description: 'End-to-End QA, CI/CD-Integration und Performance-Testing.',
    tags: ['QA', 'Testing', 'Automation'],
  },
  {
    slug: 'sustainability',
    language: 'de',
    title: 'Sustainability Consulting',
    description: 'ESG-Strategien, CO₂-Bilanzierung und nachhaltige Lieferketten.',
    tags: ['Sustainability', 'ESG', 'CO₂'],
  },
  {
    slug: 'change-management',
    language: 'de',
    title: 'Change Management & Training',
    description: 'Change Strategien, Enablement Programme und Adoption Management.',
    tags: ['Change', 'Training', 'Adoption'],
  },
  // English counterparts
  {
    slug: 'ai',
    language: 'en',
    title: 'AI & Data Products',
    description: 'AI strategy, machine learning and MLOps tailored for mid-market organisations.',
    tags: ['AI', 'MLOps', 'Data'],
  },
  {
    slug: 'cloud',
    language: 'en',
    title: 'Cloud & Operating Model',
    description: 'Cloud transition, landing zones and FinOps for scalable platforms.',
    tags: ['Cloud', 'FinOps', 'Operating Model'],
  },
  {
    slug: 'sap',
    language: 'en',
    title: 'SAP Transformation',
    description: 'S/4HANA migrations, process automation and hybrid integrations.',
    tags: ['SAP', 'S/4HANA', 'ERP'],
  },
  {
    slug: 'microservices',
    language: 'en',
    title: 'Microservices & Integration',
    description: 'API-first architectures, event streaming and legacy modernisation.',
    tags: ['Integration', 'APIs', 'Architecture'],
  },
  {
    slug: 'cyber-security',
    language: 'en',
    title: 'Cyber Security & GRC',
    description: 'Zero trust architectures, SOC modernisation and ISO 27001 programmes.',
    tags: ['Security', 'Governance', 'GRC'],
  },
  {
    slug: 'new-work',
    language: 'en',
    title: 'New Work & Collaboration',
    description: 'Digital workplace solutions, collaboration suites and change enablement.',
    tags: ['New Work', 'Collaboration', 'Change'],
  },
  {
    slug: 'erp-crm',
    language: 'en',
    title: 'ERP & CRM Services',
    description: 'SAP, Microsoft Dynamics and Salesforce implementations for seamless processes.',
    tags: ['ERP', 'CRM', 'Integration'],
  },
  {
    slug: 'test-automation',
    language: 'en',
    title: 'Test Automation',
    description: 'End-to-end QA, CI/CD integration and performance testing.',
    tags: ['QA', 'Testing', 'Automation'],
  },
  {
    slug: 'sustainability',
    language: 'en',
    title: 'Sustainability Consulting',
    description: 'ESG strategies, carbon accounting and sustainable supply chains.',
    tags: ['Sustainability', 'ESG', 'Carbon'],
  },
  {
    slug: 'change-management',
    language: 'en',
    title: 'Change Management & Training',
    description: 'Change strategies, enablement programmes and adoption coaching.',
    tags: ['Change', 'Training', 'Adoption'],
  },
];

