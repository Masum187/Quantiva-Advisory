import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Menu, X, BookOpen, Search, ChevronRight, Github, ExternalLink } from "lucide-react";

// --- Minimal shadcn-like helpers -------------------------------------------------
function cn(...a: (string | false | null | undefined)[]) { 
  return a.filter(Boolean).join(" "); 
}

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: "solid" | "outline" | "ghost"; 
  size?: "sm" | "md" | "lg"; 
}> = ({ className, variant="outline", size="md", ...props }) => {
  const base = "inline-flex items-center gap-2 rounded-xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed";
  const v = variant === "solid"
    ? "bg-teal-600 text-white hover:bg-teal-700"
    : variant === "outline"
      ? "border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800";
  const s = size === "lg" ? "px-5 py-3 text-base" : size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-sm";
  return <button className={cn(base, v, s, className)} {...props} />
};

// --- Active link -----------------------------------------------------------------
function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = pathname === href || (href !== "/docs" && pathname?.startsWith(href));
  
  return (
    <Link 
      to={href}
      className={cn(
        "group flex items-center justify-between rounded-lg px-3 py-2 text-sm transition",
        isActive
          ? "bg-teal-50 text-teal-800 dark:bg-teal-900/20 dark:text-teal-200"
          : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
      )}
    >
      <span className="flex items-center gap-2">
        <ChevronRight className={cn("h-4 w-4 transition", isActive ? "opacity-100" : "opacity-40 group-hover:opacity-70")} />
        {children}
      </span>
    </Link>
  );
}

// --- Sidebar ---------------------------------------------------------------------
function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="w-full sm:w-64 shrink-0 border-r border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/40 backdrop-blur p-3 sm:p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-teal-600 text-white grid place-items-center font-extrabold">Q</div>
        <div className="leading-tight">
          <div className="text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400">Quantiva Docs</div>
          <div className="text-sm font-semibold">Developer Handbook</div>
        </div>
      </div>

      <div className="relative mb-3">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          placeholder="Suchen… (⌘K bald)"
          className="w-full rounded-xl border px-9 py-2 text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 placeholder-gray-400 dark:placeholder-gray-500"
          onKeyDown={(e)=> { if (e.key === "Enter") onNavigate?.(); }}
        />
      </div>

      <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1 mb-1">Grundlagen</div>
      <nav className="space-y-1">
        <NavItem href="/docs">Übersicht</NavItem>
        <NavItem href="/docs/cms-workflow">CMS Workflow</NavItem>
        <NavItem href="/docs/admin">Admin Dashboard</NavItem>
        <NavItem href="/docs/content-model">Content Model</NavItem>
      </nav>

      <div className="mt-4 text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 px-1 mb-1">Guides</div>
      <nav className="space-y-1">
        <NavItem href="/docs/how-to/create-case">Case anlegen</NavItem>
        <NavItem href="/docs/how-to/review-publish">Review & Publish</NavItem>
        <NavItem href="/docs/how-to/assets">Assets & Medien</NavItem>
      </nav>

      <div className="mt-4 flex gap-2">
        <a 
          href="https://quantivaadvisory.com" 
          className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-3.5 w-3.5"/> Website
        </a>
        <a 
          href="https://github.com/Masum187/Quantiva-Advisory" 
          className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-3.5 w-3.5"/> GitHub
        </a>
      </div>
    </aside>
  );
}

// --- Layout ----------------------------------------------------------------------
export default function DocsLayout({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link to="/docs" className="flex items-center gap-2 hover:opacity-80 transition">
            <BookOpen className="h-5 w-5 text-teal-600"/>
            <div className="font-semibold">Quantiva Documentation</div>
          </Link>
          <div className="flex items-center gap-2">
            <Button 
              className="sm:hidden" 
              onClick={()=> setOpen(v=>!v)} 
              aria-label="Navigation umschalten"
            >
              {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </Button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-[16rem_1fr] gap-0">
        {/* Sidebar (mobile sheet) */}
        <div className={cn(
          "sm:block", 
          open ? "block" : "hidden"
        )}>
          <Sidebar onNavigate={()=> setOpen(false)} />
        </div>

        {/* Content */}
        <main className="min-h-[70vh] p-4 sm:p-6">
          <article className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-teal-600 dark:prose-a:text-teal-400">
            {children || <Outlet />}
          </article>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-sm">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <div className="text-gray-500">© {new Date().getFullYear()} Quantiva Advisory</div>
          <div className="text-gray-500">Docs • v1</div>
        </div>
      </footer>
    </div>
  );
}

