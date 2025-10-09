import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mermaid from '../components/Mermaid';
import DocsLayout from '../components/DocsLayout';

const workflowChart = `
flowchart TD
    A[Entwurf<br/>draft]:::draft -->|Zur Prüfung<br/>Admin, Editor| B[In Prüfung<br/>inReview]:::review
    B -->|Freigeben<br/>Admin, Reviewer, Publisher| C[Freigegeben<br/>approved]:::approved
    B -->|Ablehnen<br/>Admin, Reviewer| D[Abgelehnt<br/>rejected]:::rejected

    C -->|Veröffentlichen<br/>Admin, Publisher| E[Veröffentlicht<br/>published]:::published
    E -->|Unpublish<br/>Admin, Publisher| C

    %% Rückwege zu Draft
    B -.->|Zurück zu Entwurf<br/>Admin| A
    C -.->|Zurück zu Entwurf<br/>Admin| A
    D -.->|Zurück zu Entwurf<br/>Admin| A
    E -.->|Zurück zu Entwurf<br/>Admin| A

    classDef draft fill:#f3f4f6,stroke:#6b7280,stroke-width:2px,color:#111827
    classDef review fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#111827
    classDef approved fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#111827
    classDef rejected fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#111827
    classDef published fill:#d1fae5,stroke:#10b981,stroke-width:2px,color:#111827
`;

const permissions = [
  { action: 'Zur Prüfung', from: 'draft', to: 'inReview', roles: ['Admin', 'Editor'] },
  { action: 'Freigeben', from: 'inReview', to: 'approved', roles: ['Admin', 'Reviewer', 'Publisher'] },
  { action: 'Ablehnen', from: 'inReview', to: 'rejected', roles: ['Admin', 'Reviewer'] },
  { action: 'Veröffentlichen', from: 'approved', to: 'published', roles: ['Admin', 'Publisher'] },
  { action: 'Unpublish', from: 'published', to: 'approved', roles: ['Admin', 'Publisher'] },
  { action: 'Zurück zu Entwurf', from: '*alle außer draft*', to: 'draft', roles: ['Admin'] },
];

const roleDescriptions = [
  {
    role: 'Admin',
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: '🔴',
    description: 'Vollzugriff auf alle Funktionen'
  },
  {
    role: 'Editor',
    color: 'bg-green-100 text-green-800 border-green-300',
    icon: '🟢',
    description: 'Erstellen & Bearbeiten von Cases'
  },
  {
    role: 'Reviewer',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    icon: '🟡',
    description: 'Qualitätssicherung & Freigabe'
  },
  {
    role: 'Publisher',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: '🔵',
    description: 'Publikationsmanagement'
  },
  {
    role: 'Viewer',
    color: 'bg-gray-100 text-gray-800 border-gray-300',
    icon: '⚪',
    description: 'Nur Leserechte'
  },
];

export default function DocsWorkflow() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </a>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            CMS Workflow & Berechtigungen
          </h1>
          <p className="text-lg text-gray-600">
            Rollenbasiertes Workflow-System für strukturiertes Content Management
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Status-Flow</h2>
          <p className="text-gray-600 mb-6">
            Das Workflow-System verwendet 5 Status-Stufen für strukturierte Content-Verwaltung:
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <Mermaid chart={workflowChart} />
          </div>
        </div>

        {/* Roles */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Rollen-Übersicht</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roleDescriptions.map((role) => (
              <div 
                key={role.role}
                className="p-4 rounded-xl border-2 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{role.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${role.color}`}>
                    {role.role}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Permissions Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Berechtigungs-Matrix</h2>
          <p className="text-gray-600 mb-6">
            Übersicht aller Workflow-Aktionen und der erlaubten Rollen:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Aktion
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Von → Nach
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Rollen erlaubt
                  </th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((perm, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      {perm.action}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {perm.from}
                      </code>
                      {' → '}
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {perm.to}
                      </code>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {perm.roles.map((role) => (
                          <span 
                            key={role}
                            className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-sm font-medium"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-900 flex items-center gap-2">
            <CheckCircle className="h-6 w-6" />
            Best Practices
          </h3>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Beim Veröffentlichen wird automatisch <code className="bg-blue-100 px-2 py-0.5 rounded">publishedAt</code> gesetzt</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Alle Statuswechsel werden in der History erfasst (300ms Debouncing)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Owner & Reviewer sind Metadaten im Drawer</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Vier-Augen-Prinzip: Editor ≠ Reviewer für Qualitätssicherung</span>
            </li>
          </ul>
        </div>

        {/* Warnings */}
        <div className="bg-amber-50 rounded-2xl border-2 border-amber-200 p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-amber-900 flex items-center gap-2">
            <XCircle className="h-6 w-6" />
            Wichtige Hinweise
          </h3>
          <ul className="space-y-2 text-amber-900">
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Keine direkten Status-Sprünge (z.B. draft → published)</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Nicht eigene Cases freigeben (Editor ≠ Reviewer)</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Keine Veröffentlichung ohne Freigabe</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>Nicht ohne Kommentar ablehnen</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Bereit loszulegen?
          </h3>
          <p className="text-teal-50 mb-6 text-lg">
            Öffnen Sie das Admin Dashboard und testen Sie den Workflow
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/admin" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Zum Admin Dashboard →
            </a>
            <a 
              href="https://github.com/quantiva/quantiva-website/blob/main/docs/cms-workflow.md" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 text-white rounded-xl font-semibold hover:bg-teal-800 transition"
            >
              Vollständige Dokumentation →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Letzte Aktualisierung: Oktober 2025 • Version 1.0.0</p>
          <p className="mt-2">
            <a href="mailto:support@quantiva.com" className="text-teal-600 hover:underline">
              Support kontaktieren
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
