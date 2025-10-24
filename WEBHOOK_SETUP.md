# 🪝 Webhook Setup Guide

## Automatisches Vercel-Deployment bei Contentful-Updates

---

## 🎯 **Was ist das?**

Ein Webhook verbindet Contentful mit Vercel:
```
Contentful: Publish → Webhook → Vercel: Deploy → Live in 2 Min! 🚀
```

---

## 📋 **TEIL 1: Vercel Deploy Hook erstellen** (Sie sind hier! ✅)

### 1.1 Öffnen Sie Ihr Vercel Projekt-Dashboard:
```
https://vercel.com/masum187s-projects/quantiva-advisory/settings/git
```

### 1.2 Deploy Hook erstellen:
1. Scrollen Sie zu **"Deploy Hooks"**
2. Klicken Sie auf **"Create Hook"**
3. Füllen Sie aus:
   - **Hook Name:** `contentful-webhook`
   - **Git Branch:** `main`
4. Klicken Sie auf **"Create Hook"**

### 1.3 URL kopieren:
Sie sehen jetzt eine URL ähnlich wie:
```
https://api.vercel.com/v1/integrations/deploy/prj_xxxxxxxxxxxxx/yyyyyyyyy
```
**⚠️ WICHTIG: Kopieren Sie diese URL!** Sie brauchen sie im nächsten Schritt.

---

## 📋 **TEIL 2: Contentful Webhook konfigurieren**

### 2.1 Öffnen Sie Contentful Webhooks:
```
https://app.contentful.com/spaces/bg0up8emai7s/settings/webhooks
```
(Ersetzen Sie `bg0up8emai7s` durch Ihre Space ID, falls anders)

### 2.2 Neuen Webhook hinzufügen:
1. Klicken Sie auf **"Add Webhook"** (oben rechts)
2. Klicken Sie auf **"Create"**

### 2.3 Webhook konfigurieren:
**Basic Information:**
- **Name:** `Vercel Auto-Deploy`
- **URL:** [Fügen Sie hier Ihre Vercel Deploy Hook URL ein]

**Triggers:**
Aktivieren Sie folgende Checkboxen:
- ✅ **Entry: Publish** (wenn ein Entry publiziert wird)
- ✅ **Entry: Unpublish** (wenn ein Entry depubliziert wird)
- ✅ **Asset: Publish** (wenn ein Asset publiziert wird)
- ✅ **Asset: Unpublish** (wenn ein Asset depubliziert wird)

**Optional - Filters (überspringen Sie dies zunächst):**
- Keine Filter nötig für den Start

### 2.4 Speichern:
1. Klicken Sie auf **"Save"** (oben rechts)
2. Sie sehen jetzt Ihren neuen Webhook in der Liste

---

## ✅ **TEIL 3: Testen**

### 3.1 Test-Deployment auslösen:
1. Gehen Sie zu Contentful Content:
   ```
   https://app.contentful.com/spaces/bg0up8emai7s/entries
   ```
2. Öffnen Sie einen bestehenden Entry (z.B. Ihren "pageContent" Entry)
3. Ändern Sie etwas (z.B. einen Text)
4. Klicken Sie auf **"Publish"** (oben rechts)

### 3.2 Vercel Deployment beobachten:
1. Gehen Sie zu Ihrem Vercel Dashboard:
   ```
   https://vercel.com/masum187s-projects/quantiva-advisory
   ```
2. Sie sollten ein neues Deployment sehen mit:
   - **Source:** "Hook: contentful-webhook"
   - **Status:** "Building..." → "Ready"
3. Nach ~2 Minuten ist Ihre Änderung live!

### 3.3 Webhook-Logs überprüfen (bei Problemen):
1. Gehen Sie zurück zu Contentful Webhooks:
   ```
   https://app.contentful.com/spaces/bg0up8emai7s/settings/webhooks
   ```
2. Klicken Sie auf Ihren "Vercel Auto-Deploy" Webhook
3. Scrollen Sie zu **"Recent activity"**
4. Sie sehen alle Webhook-Aufrufe mit Status:
   - ✅ **Success (200)** - Funktioniert!
   - ❌ **Error (4xx/5xx)** - Problem mit der URL oder Vercel

---

## 🎉 **Fertig!**

```
✅ Vercel Deploy Hook erstellt
✅ Contentful Webhook konfiguriert
✅ Automatisches Deployment aktiv

🎊 Ab jetzt:
Edit in Contentful → Publish → Auto-Deploy → Live in 2 Min!
```

---

## 💡 **Troubleshooting**

### Problem: Webhook wird nicht ausgelöst
**Lösung:**
1. Überprüfen Sie die Webhook-URL in Contentful (kein Tippfehler?)
2. Stellen Sie sicher, dass die Triggers aktiviert sind
3. Überprüfen Sie "Recent activity" im Webhook für Fehlermeldungen

### Problem: Vercel Deployment startet nicht
**Lösung:**
1. Überprüfen Sie, ob die Deploy Hook URL korrekt ist
2. Gehen Sie zu Vercel → Settings → Git → Deploy Hooks
3. Löschen Sie den alten Hook und erstellen Sie einen neuen
4. Aktualisieren Sie die URL in Contentful

### Problem: Deployment schlägt fehl
**Lösung:**
1. Überprüfen Sie die Deployment-Logs in Vercel
2. Möglicherweise ein Build-Fehler (unabhängig vom Webhook)
3. Versuchen Sie ein manuelles Deployment über Git
4. Überprüfen Sie Environment Variables in Vercel

---

## 🔐 **Sicherheits-Hinweis**

Die Vercel Deploy Hook URL ist **öffentlich** (jeder mit der URL kann ein Deployment auslösen). Das ist normalerweise **kein Problem**, da:
- Sie nur einen Build triggert (kein Code-Zugriff)
- Vercel die Build-Limits kontrolliert
- Nur Ihr Git-Repository deployed wird

Wenn Sie zusätzliche Sicherheit wünschen:
1. Gehen Sie zu Contentful Webhook → "Headers"
2. Fügen Sie einen Custom Header hinzu:
   - **Key:** `X-Webhook-Secret`
   - **Value:** `ein_geheimes_passwort`
3. In Vercel können Sie dann diesen Header überprüfen (erfordert Serverless Function)

---

## 📚 **Weitere Ressourcen**

- **Vercel Deploy Hooks Docs:** https://vercel.com/docs/deployments/deploy-hooks
- **Contentful Webhooks Docs:** https://www.contentful.com/developers/docs/concepts/webhooks/
- **Webhook Testing Tool:** https://webhook.site/ (zum Testen von Webhooks)

---

**Viel Erfolg mit Ihrem automatischen Deployment-Workflow! 🚀**






