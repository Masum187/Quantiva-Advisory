/**
 * TypeScript-Deklarationen für MDX in Vite
 * 
 * Diese Datei wird nur benötigt, wenn Sie von CRA zu Vite migrieren.
 * 
 * Aktuell verwendet das Projekt CRA + CRACO, was eine eigene
 * MDX-Loader-Konfiguration hat.
 * 
 * Bei Migration zu Vite:
 * 1. Diese Datei in `mdx.d.ts` umbenennen
 * 2. In tsconfig.json einbinden (sollte automatisch geschehen)
 * 3. TypeScript-Server neu starten
 * 
 * Siehe: /docs/MDX_ALTERNATIVES_GUIDE.md
 */

declare module '*.mdx' {
  import { ComponentType } from 'react'
  
  /**
   * MDX-Komponenten sind React-Komponenten mit optionalen Props
   * Standard-Export ist die gerenderte Komponente
   */
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
  
  /**
   * Frontmatter-Support (optional, abhängig von Plugins)
   * Beispiel:
   * ---
   * title: 'My Doc'
   * author: 'John Doe'
   * ---
   */
  export const frontmatter: Record<string, unknown>
}

declare module '*.md' {
  import { ComponentType } from 'react'
  
  const MarkdownComponent: ComponentType<Record<string, unknown>>
  export default MarkdownComponent
}

