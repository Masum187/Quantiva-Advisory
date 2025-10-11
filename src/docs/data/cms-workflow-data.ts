export const permissions = [
  { action: 'Zur Prüfung', from: 'draft', to: 'inReview', roles: ['Admin', 'Editor'] },
  { action: 'Freigeben', from: 'inReview', to: 'approved', roles: ['Admin', 'Reviewer', 'Publisher'] },
  { action: 'Ablehnen', from: 'inReview', to: 'rejected', roles: ['Admin', 'Reviewer'] },
  { action: 'Veröffentlichen', from: 'approved', to: 'published', roles: ['Admin', 'Publisher'] },
  { action: 'Unpublish', from: 'published', to: 'approved', roles: ['Admin', 'Publisher'] },
  { action: 'Zurück zu Entwurf', from: '*alle außer draft*', to: 'draft', roles: ['Admin'] },
];

export const roleDescriptions = [
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
    description: 'Freigabe & Ablehnung'
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


