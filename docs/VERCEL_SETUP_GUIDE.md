# Vercel Setup Guide: Preview & Production

## 📋 Schritt-für-Schritt-Anleitung

Diese Anleitung zeigt dir **exakt**, welche Einstellungen du in Vercel vornehmen musst, um den Preview/Production-Workflow einzurichten.

---

## 1️⃣ Git-Integration konfigurieren

### Settings → Git

1. **Öffne dein Vercel-Projekt:**
   - https://vercel.com/masum187s-projects/quantiva-advisory

2. **Navigiere zu:** `Settings` → `Git`

3. **Production Branch einstellen:**
   ```
   Production Branch: main
   ```
   - Klicke auf das Dropdown-Menü
   - Wähle `main`
   - Speichern

4. **Deploy Previews aktivieren:**
   ```
   ✅ Automatically create Deploy Previews for all branches
   ✅ Automatically create Deploy Previews for all pull requests
   ```

5. **Optional: Production-Schutz aktivieren:**
   ```
   ✅ Protect Production Deployments
   ```
   → Erfordert manuelle Freigabe für Production-Deploys

6. **Speichern** (Schaltfläche unten)

---

## 2️⃣ Domains konfigurieren

### Settings → Domains

1. **Navigiere zu:** `Settings` → `Domains`

2. **Production-Domain (bereits konfiguriert):**
   ```
   www.quantivaadvisory.com
   ├─ Environment: Production
   ├─ Branch: main
   └─ Status: ✅ Active
   
   quantivaadvisory.com
   ├─ Redirects to: www.quantivaadvisory.com
   └─ Status: ✅ Active
   ```

3. **Preview-Domain konfigurieren:**

   **Option A: Vercel-Default-Domain (Empfohlen für Start)**
   
   Die `.vercel.app`-Domain ist bereits automatisch eingerichtet:
   ```
   quantiva-advisory-37je.vercel.app
   └─ Automatisch auf develop-Branch gemapped
   ```
   
   Um den Branch explizit zu setzen:
   - Klicke auf die Domain
   - Wähle "Git Branch" → `develop`
   - Speichern

   **Option B: Custom Preview Domain (Optional)**
   
   Für eine professionellere URL wie `preview.quantivaadvisory.com`:
   
   ### Schritt 1: DNS bei IONOS konfigurieren
   
   1. Logge dich bei IONOS ein
   2. Navigiere zu: Domains → DNS-Einstellungen
   3. Füge einen neuen CNAME-Record hinzu:
      ```
      Typ:     CNAME
      Name:    preview
      Ziel:    cname.vercel-dns.com
      TTL:     3600
      ```
   4. Speichern (Propagation dauert 5-60 Min)
   
   ### Schritt 2: Domain in Vercel hinzufügen
   
   1. Zurück zu Vercel: `Settings` → `Domains`
   2. Klicke "Add Domain"
   3. Eingabe: `preview.quantivaadvisory.com`
   4. Klicke "Add"
   5. Wähle:
      ```
      Environment: Preview
      Git Branch: develop
      ```
   6. Speichern

---

## 3️⃣ Environment Variables konfigurieren

### Settings → Environment Variables

1. **Navigiere zu:** `Settings` → `Environment Variables`

2. **Beispiel: API-URL trennen**

   **Für Production:**
   ```
   Name:  REACT_APP_API_URL
   Value: https://api.quantivaadvisory.com
   Target:
     ✅ Production
     ⬜ Preview
     ⬜ Development
   ```
   
   **Für Preview:**
   ```
   Name:  REACT_APP_API_URL
   Value: https://api-staging.quantivaadvisory.com
   Target:
     ⬜ Production
     ✅ Preview
     ⬜ Development
   ```

3. **Beispiel: Analytics-IDs trennen**

   **Production:**
   ```
   Name:  REACT_APP_ANALYTICS_ID
   Value: G-XXXXXXXXXX
   Target:
     ✅ Production
     ⬜ Preview
     ⬜ Development
   ```
   
   **Preview (optional leer lassen):**
   ```
   Name:  REACT_APP_ANALYTICS_ID
   Value: (leer)
   Target:
     ⬜ Production
     ✅ Preview
     ⬜ Development
   ```

4. **Nach Änderungen:** Redeploy triggern
   ```bash
   git commit --allow-empty -m "chore: redeploy with new env vars"
   git push
   ```

---

## 4️⃣ Build-Einstellungen überprüfen

### Settings → General

1. **Build Command:**
   ```
   npm run build
   ```

2. **Output Directory:**
   ```
   build
   ```

3. **Install Command:**
   ```
   npm ci
   ```

4. **Framework Preset:**
   ```
   Create React App
   ```

Diese Einstellungen sollten bereits korrekt sein (werden automatisch erkannt).

---

## 5️⃣ Deployment-Einstellungen

### Settings → Deployment Protection (optional)

**Für zusätzliche Sicherheit:**

```
✅ Vercel Authentication
   → Nur eingeloggte Vercel-Teammitglieder können Previews sehen

✅ Password Protection
   → Previews erfordern ein Passwort
   → Passwort: [eigenes-sicheres-passwort]
```

**Empfehlung:**
- Preview: Kein Schutz (für einfaches Testing)
- Production: Über "Protect Production Deployments" abgesichert

---

## 6️⃣ GitHub-Integration überprüfen

### Vercel → GitHub

1. **Navigiere zu:** `Settings` → `Git` → `GitHub`

2. **Stelle sicher:**
   ```
   ✅ Repository: Masum187/Quantiva-Advisory
   ✅ Auto-deployment: ON
   ✅ Comments on Pull Requests: ON
   ```

3. **GitHub Status Checks:**
   - Vercel postet automatisch Deployment-Status auf PRs
   - ✅ Deployment Ready → Grüner Check
   - ❌ Build Failed → Roter X

---

## 7️⃣ Optional: Branch Protection auf GitHub

### GitHub Repository Settings

1. **Öffne GitHub-Repo:**
   - https://github.com/Masum187/Quantiva-Advisory

2. **Settings → Branches → Add Rule**

3. **Branch-Protection für `main`:**
   ```
   Branch name pattern: main
   
   ✅ Require a pull request before merging
   ✅ Require approvals: 1
   ✅ Require status checks to pass
      └─ Vercel (Deployment)
   ✅ Require conversation resolution
   ⬜ Do not allow bypassing the above settings
   ```

4. **Speichern**

**Effekt:**
- Niemand kann direkt auf `main` pushen
- Alle Änderungen müssen via PR gehen
- Vercel muss erfolgreich bauen, bevor Merge möglich ist

---

## ✅ Verifikation: Alles richtig eingerichtet?

### Checkliste

```
[x] develop-Branch existiert auf GitHub
[x] Vercel: Production Branch = main
[x] Vercel: Deploy Previews aktiviert
[x] Vercel: www.quantivaadvisory.com → main
[x] Vercel: quantiva-advisory-37je.vercel.app verfügbar
[ ] Optional: preview.quantivaadvisory.com → develop (CNAME)
[ ] Environment Variables nach Target getrennt
[ ] Optional: GitHub Branch Protection aktiviert
```

### Test-Workflow

**Schritt 1: Push auf develop**
```bash
git checkout develop
echo "# Test" >> test.md
git add test.md
git commit -m "test: preview deployment"
git push origin develop
```

**Erwartung:**
- Vercel baut automatisch
- Deployment sichtbar unter: https://quantiva-advisory-37je.vercel.app
- KEIN Production-Deployment auf www.quantivaadvisory.com

**Schritt 2: Merge nach main**
```bash
# Via Pull Request oder:
git checkout main
git merge develop
git push origin main
```

**Erwartung:**
- Vercel baut automatisch
- Production-Deployment auf: https://www.quantivaadvisory.com
- Auch Preview bleibt aktiv

---

## 🎯 Zusammenfassung: Was wurde eingerichtet?

```
┌─────────────────────────────────────────────────────────────┐
│                      Git Repository                          │
│  ┌────────────────┐              ┌────────────────┐         │
│  │  main Branch   │◄─── PR ─────│ develop Branch │         │
│  │  (Production)  │              │   (Preview)    │         │
│  └────────┬───────┘              └────────┬───────┘         │
└───────────┼──────────────────────────────┼─────────────────┘
            │                              │
            │ Auto-Deploy                  │ Auto-Deploy
            ▼                              ▼
┌───────────────────────┐      ┌──────────────────────────┐
│  Production Deploy    │      │    Preview Deploy         │
│                       │      │                           │
│ www.quantivaadvisory  │      │ quantiva-advisory-37je    │
│       .com            │      │     .vercel.app           │
│                       │      │                           │
│ + quantivaadvisory    │      │ (optional)                │
│       .com (Redirect) │      │ preview.quantivaadvisory  │
│                       │      │        .com               │
└───────────────────────┘      └──────────────────────────┘
```

---

## 📚 Nächste Schritte

1. ✅ **Dokumentation gelesen**
2. ⬜ **Vercel-Einstellungen überprüft** (siehe Checkliste oben)
3. ⬜ **Test-Deployment durchgeführt**
4. ⬜ **Optional: Custom Preview-Domain eingerichtet**
5. ⬜ **Team über neuen Workflow informiert**

---

## 🆘 Support

**Bei Problemen:**
1. Siehe: `/docs/DEPLOYMENT_WORKFLOW.md` → Troubleshooting
2. Vercel-Docs: https://vercel.com/docs
3. Vercel-Support: https://vercel.com/support

**Logs prüfen:**
- Vercel Dashboard → Deployments → [Deployment auswählen] → Build Logs
- GitHub Actions: https://github.com/Masum187/Quantiva-Advisory/actions

---

**Status:** 🟢 Guide komplett, ready für Setup!




