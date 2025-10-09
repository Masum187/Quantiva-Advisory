import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../components/DocsLayout';
import { 
  Workflow, 
  Settings, 
  FileText, 
  GitBranch, 
  Users, 
  Upload, 
  CheckCircle2,
  BookOpen,
  Zap,
  Shield
} from 'lucide-react';

export default function DocsOverview() {
  return (
    <DocsLayout>
      <h1>Quantiva Documentation</h1>
      <p className="lead">
        Willkommen zur Quantiva Advisory Dokumentation. 
        Hier finden Sie alle Informationen zum CMS, Workflow und Admin-Dashboard.
      </p>

      {/* Quick Start Cards */}
      <h2>Schnellstart</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link 
          to="/docs/cms-workflow" 
          className="group p-6 border-2 border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition bg-white"
        >
          <Workflow className="h-10 w-10 text-teal-600 mb-3 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">CMS Workflow</h3>
          <p className="text-gray-600 text-sm">
            Rollenbasiertes Workflow-System mit 5 Status-Stufen für strukturierte Content-Verwaltung
          </p>
          <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1">
            Mehr erfahren →
          </div>
        </Link>
        
        <Link 
          to="/docs/admin" 
          className="group p-6 border-2 border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition bg-white"
        >
          <Settings className="h-10 w-10 text-teal-600 mb-3 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Admin Dashboard</h3>
          <p className="text-gray-600 text-sm">
            Visual Content Management Interface mit Undo/Redo, Bulk-Actions und Real-time Validation
          </p>
          <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1">
            Mehr erfahren →
          </div>
        </Link>

        <Link 
          to="/docs/content-model" 
          className="group p-6 border-2 border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-lg transition bg-white"
        >
          <FileText className="h-10 w-10 text-teal-600 mb-3 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Content Model</h3>
          <p className="text-gray-600 text-sm">
            Datenstruktur für Case Studies mit Taxonomie, Medien und Metadaten
          </p>
          <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1">
            Mehr erfahren →
          </div>
        </Link>

        <a 
          href="/admin" 
          className="group p-6 border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl hover:border-teal-500 hover:shadow-lg transition"
        >
          <Zap className="h-10 w-10 text-teal-600 mb-3 group-hover:scale-110 transition" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Dashboard öffnen</h3>
          <p className="text-gray-700 text-sm">
            Direkt zum Admin Dashboard wechseln und loslegen
          </p>
          <div className="mt-4 text-teal-600 text-sm font-medium flex items-center gap-1">
            Dashboard öffnen →
          </div>
        </a>
      </div>

      {/* Features Overview */}
      <h2>Features</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <GitBranch className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Workflow-System</h4>
          <p className="text-sm text-gray-600">
            5 Status-Stufen mit rollenbasierten Berechtigungen
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <Users className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Rollen & Rechte</h4>
          <p className="text-sm text-gray-600">
            Admin, Editor, Reviewer, Publisher, Viewer
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <Upload className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">File Upload</h4>
          <p className="text-sm text-gray-600">
            Drag & Drop für Videos, Bilder und Dokumente
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <CheckCircle2 className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Validation</h4>
          <p className="text-sm text-gray-600">
            Real-time Validierung mit detaillierten Fehlermeldungen
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <BookOpen className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">History</h4>
          <p className="text-sm text-gray-600">
            Undo/Redo mit Session-Persistenz und Export/Import
          </p>
        </div>

        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          <Shield className="h-6 w-6 text-teal-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">Sicherheit</h4>
          <p className="text-sm text-gray-600">
            Rollenbasierte Guards und Vier-Augen-Prinzip
          </p>
        </div>
      </div>

      {/* Guides */}
      <h2>Guides</h2>
      <p>Schritt-für-Schritt Anleitungen für häufige Aufgaben:</p>
      <ul>
        <li>
          <Link to="/docs/how-to/create-case">Case Study erstellen</Link> – 
          Von der Erstellung bis zur Veröffentlichung
        </li>
        <li>
          <Link to="/docs/how-to/review-publish">Review & Publish Prozess</Link> – 
          Workflow-Schritte und Best Practices
        </li>
        <li>
          <Link to="/docs/how-to/assets">Assets & Medien verwalten</Link> – 
          Upload, Optimierung und Verwaltung
        </li>
      </ul>

      {/* Technical Reference */}
      <h2>Technische Referenz</h2>
      <div className="not-prose my-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Stack</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Frontend:</strong> React 18 + TypeScript</li>
            <li>• <strong>Styling:</strong> Tailwind CSS 3</li>
            <li>• <strong>Routing:</strong> React Router 6</li>
            <li>• <strong>Icons:</strong> Lucide React</li>
            <li>• <strong>Diagrams:</strong> Mermaid.js</li>
            <li>• <strong>Build:</strong> Create React App</li>
            <li>• <strong>Deploy:</strong> Vercel</li>
          </ul>
        </div>
      </div>

      {/* Getting Help */}
      <h2>Hilfe & Support</h2>
      <div className="not-prose bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Fragen oder Probleme?</h3>
        <div className="space-y-2 text-sm text-blue-900">
          <p>
            <strong>GitHub:</strong>{' '}
            <a 
              href="https://github.com/Masum187/Quantiva-Advisory/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              Issue erstellen
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@quantivaadvisory.com" className="underline hover:text-blue-700">
              support@quantivaadvisory.com
            </a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a 
              href="https://quantivaadvisory.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-700"
            >
              quantivaadvisory.com
            </a>
          </p>
        </div>
      </div>

      <hr />

      <p className="text-sm text-gray-500">
        Diese Dokumentation wird kontinuierlich erweitert. 
        Letzte Aktualisierung: Oktober 2025
      </p>
    </DocsLayout>
  );
}

