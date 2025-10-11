import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
})

// ⚠️ HINWEIS: Diese Datei wird aktuell NICHT verwendet!
// Das Projekt nutzt Create React App (CRA) mit CRACO.
// 
// Für Vite-Migration siehe: /docs/VITE_MDX_INTEGRATION.md

