# Go-Live Checkliste - Quantiva Advisory

## Vor dem Go-Live

### Domain & DNS
- [ ] Finale Produktions-Domain festgelegt: `_________________`
- [ ] DNS-Einträge zu Vercel konfiguriert
- [ ] SSL-Zertifikat verifiziert (automatisch via Vercel)
- [ ] `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables gesetzt

### Build & Validierung
- [ ] `npm run build` erfolgreich
- [ ] `npm run validate:cases:strict` erfolgreich
- [ ] `public/sitemap.xml` generiert und validiert
- [ ] Alle URLs in Sitemap nutzen finale Domain

### Recht & Compliance
- [ ] Impressum-Seiten erstellt und getestet (`/de/impressum`, `/en/imprint`)
- [ ] Datenschutz-Seiten erstellt und getestet (`/de/datenschutz`, `/en/privacy`)
- [ ] Footer-Links zu Impressum/Datenschutz funktionieren
- [ ] Cookie Banner aktiv und getestet
- [ ] Analytics lädt nur nach Consent

### Sicherheit
- [ ] Admin/CMS-Routes geschützt (Middleware + Vercel Password Protection)
- [ ] Security-Header getestet (`curl -I https://[domain]`)
- [ ] CSP validiert (keine Verletzungen)
- [ ] reCAPTCHA v3 konfiguriert (falls verwendet)

### SEO
- [ ] Google Search Console: Domain verifiziert
- [ ] Google Search Console: Sitemap eingereicht
- [ ] Bing Webmaster Tools: Domain verifiziert
- [ ] Bing Webmaster Tools: Sitemap eingereicht
- [ ] Structured Data getestet (Rich Results Test)

### Monitoring
- [ ] Sentry installiert und konfiguriert (siehe `SENTRY_SETUP.md`)
- [ ] Error Boundaries aktiviert
- [ ] Uptime Monitoring konfiguriert (UptimeRobot/Pingdom)
- [ ] Alerts eingerichtet (Email/Slack)

### Performance
- [ ] Lighthouse Audit durchgeführt
  - [ ] Performance > 90
  - [ ] Accessibility > 90
  - [ ] SEO > 90
  - [ ] Best Practices > 90
- [ ] Core Web Vitals überprüft

### CI/CD
- [ ] GitHub Actions Workflow aktiv (`.github/workflows/pre-merge.yml`)
- [ ] Branch Protection Rules auf `main` aktiviert
- [ ] Status Checks als erforderlich markiert

### Rollback-Vorbereitung
- [ ] Git Tag gesetzt: `git tag -a v1.0.0 -m "Go-Live Production"`
- [ ] Tag gepusht: `git push --tags`
- [ ] Vercel Deployment-ID notiert: `_________________`
- [ ] Rollback-Plan dokumentiert (siehe `DEPLOYMENT.md`)

## Go-Live Tag

### Pre-Deployment
- [ ] Finaler Build auf Staging getestet
- [ ] Alle Tests bestanden
- [ ] Team informiert

### Deployment
- [ ] Deployment auf Vercel gestartet
- [ ] Build erfolgreich
- [ ] Domain erreichbar
- [ ] SSL aktiv

### Post-Deployment Tests
- [ ] Homepage lädt korrekt (`/de`, `/en`)
- [ ] Navigation funktioniert
- [ ] Alle Hauptseiten erreichbar
- [ ] Kontaktformular funktioniert
- [ ] Cookie Banner erscheint
- [ ] Analytics lädt nach Consent
- [ ] Impressum/Datenschutz erreichbar
- [ ] Sitemap erreichbar: `https://[domain]/sitemap.xml`
- [ ] Robots.txt erreichbar: `https://[domain]/robots.txt`

### Monitoring (erste 24h)
- [ ] Sentry zeigt keine kritischen Fehler
- [ ] Uptime Monitoring zeigt keine Ausfälle
- [ ] Vercel Analytics zeigt Traffic
- [ ] Performance-Metriken im grünen Bereich

## Notfall-Kontakte

- **Vercel Support**: support@vercel.com
- **Domain-Provider**: _________________
- **Entwicklungsteam**: _________________
- **Sentry Dashboard**: https://sentry.io/organizations/[org]/

## Rollback-Prozedur

Falls kritische Probleme auftreten:

1. Vercel Dashboard → Deployments → Vorheriges stabiles Deployment → "Promote to Production"
2. Oder: `vercel rollback [deployment-url]`
3. Team informieren
4. Fehlerursache analysieren

## Nach Go-Live (erste Woche)

- [ ] Google Search Console: Indexierung überwachen
- [ ] Bing Webmaster Tools: Indexierung überwachen
- [ ] Sentry: Fehlerrate überwachen
- [ ] Vercel Analytics: Traffic-Analyse
- [ ] User-Feedback sammeln
- [ ] Performance-Metriken tracken

