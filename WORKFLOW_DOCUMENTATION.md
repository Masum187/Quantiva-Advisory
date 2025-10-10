# Quantiva CMS – Workflow (Status & Rollen)

Nachfolgend ein übersichtliches Diagramm + Kurzreferenz der erlaubten Statuswechsel und Rollenberechtigungen.

---

## Flowchart

```mermaid
flowchart TD
    A[Entwurf (draft)]:::draft -->|Zur Prüfung| B[Zur Prüfung (inReview)]:::review
    B -->|Freigeben| C[Freigegeben (approved)]:::approved
    B -->|Ablehnen| D[Abgelehnt (rejected)]:::rejected

    C -->|Veröffentlichen| E[Veröffentlicht (published)]:::published
    E -->|Unpublish| C

    %% Rückwege
    B -->|Zurück zu Entwurf| A
    C -->|Zurück zu Entwurf| A
    D -->|Zurück zu Entwurf| A
    E -->|Zurück zu Entwurf (Admin)| A

    classDef draft fill:#eef2ff,stroke:#6366f1,color:#111827
    classDef review fill:#fff7ed,stroke:#f59e0b,color:#111827
    classDef approved fill:#ecfdf5,stroke:#10b981,color:#111827
    classDef rejected fill:#fef2f2,stroke:#ef4444,color:#111827
    classDef published fill:#ecfdf5,stroke:#22c55e,color:#111827
```

---

## Rollen & Berechtigungen (Guard-Logik)

| Aktion            | Von → Nach                 | Rollen erlaubt                         |
| ----------------- | -------------------------- | -------------------------------------- |
| Zur Prüfung       | draft → inReview           | **Admin**, **Editor**                  |
| Freigeben         | inReview → approved        | **Admin**, **Reviewer**, **Publisher** |
| Ablehnen          | inReview → rejected        | **Admin**, **Reviewer**                |
| Veröffentlichen   | approved → published       | **Admin**, **Publisher**               |
| Unpublish         | published → approved       | **Admin**, **Publisher**               |
| Zurück zu Entwurf | *alle außer draft* → draft | **Admin**                              |

**Hinweise**

* Beim Wechsel nach **published** wird `publishedAt` automatisch gesetzt (ISO).
* **Undo/Redo** erfasst Statuswechsel (History mit Batching 300ms).
* **Owner** & **Reviewer** sind Metadaten im Drawer; sie beeinflussen aktuell nicht automatisch die Rollen-Guards (kann optional erweitert werden: Owner = Editor-Rechte auf eigenen Case; Reviewer-Liste = Reviewer-Rechte auf gelistete Cases).

---

## Zustandsübergänge (Technische Referenz)

```typescript
// Pseudocode der Guards (bereits im Code umgesetzt)
can(role, perms) => perms.includes(role)

transitions = {
  draft:      { to: ['inReview'], guard: ['Admin','Editor'] },
  inReview:   { to: ['approved','rejected','draft'], guard: {
                  approved: ['Admin','Reviewer','Publisher'],
                  rejected: ['Admin','Reviewer'],
                  draft:    ['Admin']
               } },
  approved:   { to: ['published','draft'], guard: {
                  published: ['Admin','Publisher'],
                  draft:     ['Admin']
               } },
  rejected:   { to: ['draft'], guard: ['Admin'] },
  published:  { to: ['approved','draft'], guard: {
                  approved: ['Admin','Publisher'],
                  draft:    ['Admin']
               } }
}
```

---

## Rollenübersicht

### 🔴 Admin
- **Vollzugriff** auf alle Funktionen
- Kann jeden Status in jeden anderen Status überführen
- Kann Cases löschen und History verwalten
- Kann Rollen anderer Benutzer ändern (zukünftig)

### 🟢 Editor
- Kann Cases erstellen und bearbeiten
- Kann Cases zur Prüfung einreichen (`draft → inReview`)
- Kann eigene Draft-Cases bearbeiten
- **Keine** Freigabe- oder Veröffentlichungsrechte

### 🟡 Reviewer
- Kann Cases freigeben (`inReview → approved`)
- Kann Cases ablehnen (`inReview → rejected`)
- **Keine** Veröffentlichungsrechte
- Fokus auf Qualitätssicherung

### 🔵 Publisher
- Kann freigegebene Cases veröffentlichen (`approved → published`)
- Kann veröffentlichte Cases zurückziehen (`published → approved`)
- Kann Cases freigeben (`inReview → approved`)
- Fokus auf Publikationsmanagement

### ⚪ Viewer
- **Nur Leserechte**
- Kann Cases ansehen aber nicht bearbeiten
- Alle Buttons sind deaktiviert
- Ideal für Stakeholder und Reporting

---

## Status-Badges

| Status | Badge | Bedeutung |
|--------|-------|-----------|
| `draft` | 🟤 Entwurf | Case wird bearbeitet |
| `inReview` | 🟡 In Prüfung | Wartet auf Review |
| `approved` | 🔵 Freigegeben | Review abgeschlossen, bereit zur Publikation |
| `rejected` | 🔴 Abgelehnt | Review negativ, Überarbeitung nötig |
| `published` | 🟢 Veröffentlicht | Live auf der Website |

---

## Erweiterungen (optional)

### 1. Automatische Reviewer-Zuweisung
Beim Wechsel `draft → inReview` wird der `owner` benachrichtigt und die im Feld *Reviewer* gelisteten Personen erhalten eine Review-Aufgabe.

```typescript
// Beispiel-Implementation
function submitForReview(caseSlug: string) {
  const case = findCase(caseSlug);
  
  // Status ändern
  updateStatus(caseSlug, 'inReview');
  
  // Benachrichtigungen senden
  if (case.owner) {
    sendNotification(case.owner, 'Case zur Prüfung eingereicht');
  }
  
  if (case.reviewers?.length) {
    case.reviewers.forEach(reviewer => {
      sendNotification(reviewer, 'Neuer Case zur Prüfung');
      createTask(reviewer, `Review: ${case.titleDe}`);
    });
  }
}
```

### 2. Audit-Log
Jede Transition schreibt einen Eintrag (`who`, `when`, `from`, `to`, optional `comment`).

```typescript
type AuditEntry = {
  timestamp: string;
  user: string;
  caseSlug: string;
  action: 'status_change' | 'create' | 'update' | 'delete';
  fromStatus?: CaseStatus;
  toStatus?: CaseStatus;
  comment?: string;
};

// Beispiel
auditLog.push({
  timestamp: new Date().toISOString(),
  user: currentUser.email,
  caseSlug: 'btp-delivery',
  action: 'status_change',
  fromStatus: 'inReview',
  toStatus: 'approved',
  comment: 'Alle Anforderungen erfüllt'
});
```

### 3. Publish-Hooks
On `approved → published` Webhook triggern (z. B. Vercel Rebuild, CRM/DAM Sync, Social Push).

```typescript
async function publishCase(caseSlug: string) {
  // Status ändern
  updateStatus(caseSlug, 'published', { publishedAt: nowIso() });
  
  // Webhooks triggern
  await Promise.all([
    fetch('https://api.vercel.com/v1/deployments', {
      method: 'POST',
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
      body: JSON.stringify({ name: 'quantiva-website' })
    }),
    
    fetch('https://hooks.slack.com/services/...', {
      method: 'POST',
      body: JSON.stringify({
        text: `✅ Case "${caseSlug}" wurde veröffentlicht!`
      })
    }),
    
    // CRM/DAM Sync
    syncToCRM(caseSlug),
    updateSearchIndex(caseSlug)
  ]);
}
```

### 4. Draft-Preview-Link
Signierter Link zur Vorschau einer Draft/Review-Version.

```typescript
function generatePreviewLink(caseSlug: string, expiresIn = 24 * 60 * 60) {
  const token = jwt.sign(
    { slug: caseSlug, type: 'preview' },
    SECRET_KEY,
    { expiresIn }
  );
  
  return `https://quantiva.com/preview/${caseSlug}?token=${token}`;
}

// In der UI
<Button onClick={() => {
  const link = generatePreviewLink(case.slug);
  navigator.clipboard.writeText(link);
  showToast('Preview-Link kopiert!');
}}>
  Preview-Link generieren
</Button>
```

---

## Best Practices

### 1. Workflow-Disziplin
- **Immer** über den offiziellen Workflow gehen
- **Keine** direkten Status-Sprünge (z.B. `draft → published`)
- **Kommentare** bei Ablehnung hinzufügen

### 2. Rollen-Trennung
- **Vier-Augen-Prinzip**: Editor ≠ Reviewer
- **Separation of Duties**: Reviewer ≠ Publisher
- **Admin-Rechte** sparsam vergeben

### 3. Qualitätssicherung
- **Checkliste** vor Freigabe durchgehen
- **Preview** vor Veröffentlichung testen
- **Rollback-Plan** für kritische Cases

### 4. Kommunikation
- **Owner** informiert Reviewer bei Submission
- **Reviewer** gibt konstruktives Feedback bei Ablehnung
- **Publisher** koordiniert Veröffentlichungszeitpunkte

---

## Technische Details

### Status-Typen
```typescript
type CaseStatus = 
  | "draft" 
  | "inReview" 
  | "approved" 
  | "rejected" 
  | "published" 
  | null;
```

### Rollen-Typen
```typescript
type UserRole = 
  | "Admin" 
  | "Editor" 
  | "Reviewer" 
  | "Publisher" 
  | "Viewer";
```

### Berechtigungsprüfung
```typescript
function can(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole);
}

// Verwendung
<Button 
  disabled={!can(currentUserRole, ["Admin", "Editor"])}
  onClick={() => submitForReview(case.slug)}
>
  Zur Prüfung
</Button>
```

---

## FAQ

**Q: Kann ein Editor seinen eigenen Case freigeben?**  
A: Nein. Das Vier-Augen-Prinzip erfordert, dass ein Reviewer oder Publisher die Freigabe erteilt.

**Q: Was passiert bei Ablehnung?**  
A: Der Case erhält den Status `rejected`. Nur ein Admin kann ihn zurück zu `draft` setzen, wo der Editor ihn überarbeiten kann.

**Q: Kann ein veröffentlichter Case bearbeitet werden?**  
A: Ja, aber nur über "Unpublish" → Bearbeitung → erneuter Workflow. Direkte Bearbeitungen sind nicht möglich.

**Q: Wie funktioniert die History?**  
A: Alle Änderungen werden automatisch mit 300ms Debouncing gespeichert. Max. 75 Snapshots werden in der Session gespeichert.

**Q: Kann ich die Rollen erweitern?**  
A: Ja! Fügen Sie einfach neue Rollen zum `UserRole` Type hinzu und passen Sie die `can()` Guards an.

---

## Support & Kontakt

Bei Fragen zum Workflow-System:
- **Dokumentation**: `/docs/cms-workflow`
- **Support**: support@quantiva.com
- **Admin**: admin@quantiva.com

---

*Letzte Aktualisierung: Oktober 2025*

