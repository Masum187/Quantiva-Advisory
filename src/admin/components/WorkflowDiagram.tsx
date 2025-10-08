import React from 'react';
import { ArrowRight, CheckCircle, XCircle, Upload, Eye, RotateCcw } from 'lucide-react';

/**
 * Visual Workflow Diagram Component
 * Shows the status flow and role permissions for the CMS
 */
export default function WorkflowDiagram() {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Workflow & Berechtigungen
      </h2>

      {/* Status Flow */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Status-Flow
        </h3>
        <div className="flex flex-col gap-4">
          {/* Draft */}
          <div className="flex items-center gap-3">
            <StatusBadge status="draft" />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <ActionLabel action="Zur Prüfung" roles={['Admin', 'Editor']} />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <StatusBadge status="inReview" />
          </div>

          {/* In Review - Approve */}
          <div className="flex items-center gap-3 ml-8">
            <StatusBadge status="inReview" />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <ActionLabel action="Freigeben" roles={['Admin', 'Reviewer', 'Publisher']} icon={<CheckCircle className="h-4 w-4" />} />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <StatusBadge status="approved" />
          </div>

          {/* In Review - Reject */}
          <div className="flex items-center gap-3 ml-8">
            <StatusBadge status="inReview" />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <ActionLabel action="Ablehnen" roles={['Admin', 'Reviewer']} icon={<XCircle className="h-4 w-4" />} />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <StatusBadge status="rejected" />
          </div>

          {/* Approved - Publish */}
          <div className="flex items-center gap-3 ml-16">
            <StatusBadge status="approved" />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <ActionLabel action="Veröffentlichen" roles={['Admin', 'Publisher']} icon={<Upload className="h-4 w-4" />} />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <StatusBadge status="published" />
          </div>

          {/* Published - Unpublish */}
          <div className="flex items-center gap-3 ml-24">
            <StatusBadge status="published" />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <ActionLabel action="Unpublish" roles={['Admin', 'Publisher']} icon={<Eye className="h-4 w-4" />} />
            <ArrowRight className="h-5 w-5 text-gray-400" />
            <StatusBadge status="approved" />
          </div>

          {/* Back to Draft */}
          <div className="flex items-center gap-3 mt-4 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <RotateCcw className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Zurück zu Entwurf:</strong> Von jedem Status möglich (nur <span className="font-semibold text-teal-600">Admin</span>)
            </span>
          </div>
        </div>
      </div>

      {/* Role Permissions Table */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Rollen-Matrix
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-slate-800">
              <tr>
                <th className="text-left px-4 py-2 font-semibold">Aktion</th>
                <th className="text-center px-4 py-2 font-semibold">Admin</th>
                <th className="text-center px-4 py-2 font-semibold">Editor</th>
                <th className="text-center px-4 py-2 font-semibold">Reviewer</th>
                <th className="text-center px-4 py-2 font-semibold">Publisher</th>
                <th className="text-center px-4 py-2 font-semibold">Viewer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <PermissionRow action="Zur Prüfung" admin editor />
              <PermissionRow action="Freigeben" admin reviewer publisher />
              <PermissionRow action="Ablehnen" admin reviewer />
              <PermissionRow action="Veröffentlichen" admin publisher />
              <PermissionRow action="Unpublish" admin publisher />
              <PermissionRow action="Zurück zu Entwurf" admin />
              <PermissionRow action="Cases erstellen" admin editor />
              <PermissionRow action="Cases bearbeiten" admin editor />
              <PermissionRow action="Cases löschen" admin />
              <PermissionRow action="History verwalten" admin />
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-200">
          💡 Hinweise
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
          <li>• Beim Veröffentlichen wird automatisch <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded">publishedAt</code> gesetzt</li>
          <li>• Alle Statuswechsel werden in der History erfasst (300ms Debouncing)</li>
          <li>• Owner & Reviewer sind Metadaten und beeinflussen aktuell nicht die Guards</li>
          <li>• Vier-Augen-Prinzip: Editor ≠ Reviewer für Qualitätssicherung</li>
        </ul>
      </div>
    </div>
  );
}

// Helper Components
function StatusBadge({ status }: { status: 'draft' | 'inReview' | 'approved' | 'rejected' | 'published' }) {
  const styles = {
    draft: 'bg-gray-100 text-gray-800 border-gray-300',
    inReview: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    approved: 'bg-blue-100 text-blue-800 border-blue-300',
    rejected: 'bg-red-100 text-red-800 border-red-300',
    published: 'bg-green-100 text-green-800 border-green-300',
  };

  const labels = {
    draft: 'Entwurf',
    inReview: 'In Prüfung',
    approved: 'Freigegeben',
    rejected: 'Abgelehnt',
    published: 'Veröffentlicht',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function ActionLabel({ action, roles, icon }: { action: string; roles: string[]; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-w-[140px]">
      <div className="flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300">
        {icon}
        {action}
      </div>
      <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
        {roles.join(', ')}
      </div>
    </div>
  );
}

function PermissionRow({ 
  action, 
  admin, 
  editor, 
  reviewer, 
  publisher, 
  viewer 
}: { 
  action: string; 
  admin?: boolean; 
  editor?: boolean; 
  reviewer?: boolean; 
  publisher?: boolean; 
  viewer?: boolean; 
}) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-slate-800/50">
      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{action}</td>
      <td className="text-center px-4 py-2">
        {admin ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-gray-300 mx-auto" />}
      </td>
      <td className="text-center px-4 py-2">
        {editor ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-gray-300 mx-auto" />}
      </td>
      <td className="text-center px-4 py-2">
        {reviewer ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-gray-300 mx-auto" />}
      </td>
      <td className="text-center px-4 py-2">
        {publisher ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-gray-300 mx-auto" />}
      </td>
      <td className="text-center px-4 py-2">
        {viewer ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-gray-300 mx-auto" />}
      </td>
    </tr>
  );
}
