# Legacy CRA Deployment (Historisch)

> **Hinweis:** Dieses Dokument dient **nur** als Referenz für das alte **Create React App** / SPA‑Setup.  
> Das Projekt wird heute als **Next.js App Router** auf Vercel betrieben (siehe `DEPLOYMENT.md`).

## Was war früher?
- Clientseitiges Routing mit `index.html`‑Fallback
- Rewrites (z. B. `/cases/* → /index.html`)
- `npm start` als Dev‑Server
- Statisches Build‑Artefakt im Ordner `build/`

## Warum Legacy?
- Next.js übernimmt Routing, i18n‑Pfadpräfixe und SEO out‑of‑the-box
- Serverless API Routes statt Express‑Server lokal
- `public/sitemap.xml` wird automatisch generiert

## Falls du alte Notizen brauchst
- **MDX Setup für CRA:** `docs/MDX_SETUP_CRA.md` *(nicht mehr aktiv verwendet)*
- **Lokaler SPA‑Server:** `scripts/local-dev/server.js` *(nur zu Testzwecken)*

## Wohin jetzt?
- **Aktuelles Deployment:** `DEPLOYMENT.md`
- **SEO & Sitemap:** `README.md` → Abschnitt „SEO & Sitemap Management“
- **Datenpflege:** JSON unter `app/lib/data/*` (Cases/Content/Taxonomy)

