import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Upload,
  Download,
  Search,
  Trash2,
  Save,
  Pencil,
  X,
  Tags,
  CheckCircle2,
  AlertTriangle,
  Sun,
  Moon,
  GitBranch,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import WorkflowDiagram from "./admin/components/WorkflowDiagram";

// --- UI Primitives (shadcn/ui style) --------------------------------------------------
function cn(...a: (string | false | null | undefined)[]) { return a.filter(Boolean).join(" "); }

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" | "ghost"; size?: "sm" | "md" | "lg"; }>=({ className, variant="solid", size="md", ...props })=>{
  const base = "inline-flex items-center gap-2 rounded-2xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500";
  const v = variant === "solid"
    ? "bg-teal-600 text-white hover:bg-teal-700"
    : variant === "outline"
      ? "border border-gray-300 text-gray-800 hover:bg-gray-50"
      : "text-gray-700 hover:bg-gray-50";
  const s = size === "lg" ? "px-5 py-3 text-base" : size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-sm";
  return <button className={cn(base, v, s, className)} {...props} />
};

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={cn("w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-teal-600 bg-white/90", className)} {...props} />
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className, children, ...props }) => (
  <select className={cn("w-full rounded-xl border px-3 py-2 outline-none bg-white/90 focus:ring-2 focus:ring-teal-600", className)} {...props}>{children}</select>
);

const Card: React.FC<{ className?: string, children: React.ReactNode }> = ({ className, children }) => (
  <div className={cn("rounded-2xl border bg-white shadow-sm", className)}>{children}</div>
);

const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs", className)}>{children}</span>
);

// --- Types ----------------------------------------------------------------------------
type CaseItem = {
  slug: string;
  titleDe?: string | null;
  titleEn?: string | null;
  subtitleDe?: string | null;
  subtitleEn?: string | null;
  category?: string | null;
  industry?: string | null;
  heroImage?: string | null;
  heroMedia?: string | null;
  heroPoster?: string | null;

  goalsDe?: string[];
  goalsEn?: string[];
  solutionDe?: string[];
  solutionEn?: string[];
  resultsDe?: string[];
  resultsEn?: string[];
  tech?: string[];
  quote?: { textDe?: string | null; textEn?: string | null; author?: string | null } | null;
  
  // Workflow fields
  status?: "draft" | "inReview" | "approved" | "rejected" | "published" | null;
  owner?: string | null;
  reviewers?: string[];
  publishedAt?: string | null;
};

// --- Demo data -----------------------------------------------------------------------
const demoCases: CaseItem[] = [
  { slug: "btp-delivery", titleDe: "BTP Delivery in 12 Wochen", titleEn: "BTP Delivery in 12 Weeks", category: "Cloud", industry: "Pharma", heroImage: "/assets/cases/btp-hero.jpg", heroMedia: "/assets/cases/btp-hero.mp4", goalsDe: ["Schnellere Deployments"], resultsDe: ["3x Deployments/Monat"], tech: ["SAP BTP","GitHub Actions"], quote: { textDe: "Quantiva hat unsere Cloud-Strategie in kürzester Zeit Realität werden lassen.", author: "IT‑Leiter, Pharma DACH" } },
  { slug: "data-quality", titleDe: "Stammdatenqualität & Audit", titleEn: "Master Data Quality & Audit", category: "Data", industry: "Healthcare", heroImage: "/assets/cases/data-hero.jpg", goalsDe: ["Konsistente Stammdaten"], resultsDe: ["Audit bestanden"], tech: ["SAP MDG", "Python"] },
  { slug: "api-first", titleDe: "API‑First Integration", titleEn: "API‑First Integration", category: "Integration", industry: "Logistics", heroImage: "/assets/cases/integration-hero.jpg", heroMedia: "/assets/cases/integration-hero.mp4", goalsDe: ["Entkopplung"], resultsDe: ["< 150ms Latenz"], tech: ["Kafka","Event Mesh"] },
];

const taxonomy = {
  categories: ["Cloud", "Data", "Integration", "Security", "Quality", "Enablement"],
  industries: ["Pharma", "Healthcare", "Logistics", "Manufacturing", "Retail", "Finance", "Public"],
};

// --- Helpers -------------------------------------------------------------------------
const downloadFile = (filename: string, content: string, type = "application/json") => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
};

const ensureArray = (v?: string[] | null) => Array.isArray(v) ? v : [];

const nowIso = () => new Date().toISOString();

// Role-based access control
type UserRole = "Admin" | "Editor" | "Reviewer" | "Publisher" | "Viewer";

function can(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole);
}

function validateCase(c: CaseItem) {
  const errors: string[] = [];
  if (!c.slug) errors.push("slug fehlt");
  if (!c.titleDe && !c.titleEn) errors.push("titleDe oder titleEn erforderlich");
  if (c.category && !taxonomy.categories.includes(c.category)) errors.push(`Unzulässige Kategorie: ${c.category}`);
  if (c.industry && !taxonomy.industries.includes(c.industry)) errors.push(`Unzulässige Branche: ${c.industry}`);
  if (c.heroImage && !/^\/.+\.(jpg|jpeg|png|webp)$/i.test(c.heroImage)) errors.push("heroImage Pfad/Endung ungültig");
  if (c.heroMedia && !/^\/.+\.(mp4|webm)$/i.test(c.heroMedia)) errors.push("heroMedia Pfad/Endung ungültig");
  if (c.heroPoster && !/^\/.+\.(jpg|jpeg|png|webp)$/i.test(c.heroPoster)) errors.push("heroPoster Pfad/Endung ungültig");
  if (c.quote && !(c.quote.textDe || c.quote.textEn)) errors.push("quote ohne Text");
  return errors;
}

// --- Uploader ------------------------------------------------------------------------
const ACCEPT: Record<string, string> = {
  image: "image/png,image/jpeg,image/webp",
  video: "video/mp4,video/webm",
};

const Uploader: React.FC<{
  slug: string;
  kind: "image" | "video";
  defaultPath?: string | null;
  fixedKeyPrefix?: string;
  onUploaded: (res: { url: string; path: string }) => void;
}> = ({ slug, kind, defaultPath, fixedKeyPrefix, onUploaded }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [busy, setBusy] = React.useState(false);
  const [preview, setPreview] = React.useState<string | null>(null);

  function openPicker() { inputRef.current?.click(); }

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.currentTarget.value = "";
    if (!file) return;
    const okMime = ACCEPT[kind].split(",").some((t) => file.type === t);
    if (!okMime) { alert(`Ungültiger Typ. Erlaubt: ${ACCEPT[kind]}`); return; }
    setPreview(URL.createObjectURL(file));
    setBusy(true);
    try {
      const ext = kind === "image"
        ? (file.type.includes("webp") ? "webp" : file.type.includes("png") ? "png" : "jpg")
        : (file.type.includes("webm") ? "webm" : "mp4");

      const base = fixedKeyPrefix || `/assets/cases/${slug}-hero`;
      const key = `${base}.${ext}`;

      const fd = new FormData();
      fd.append("file", file);
      fd.append("key", key);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload fehlgeschlagen");
      onUploaded({ url: data.url, path: data.path });
    } catch (err: any) {
      alert(err.message || "Upload fehlgeschlagen");
      setPreview(null);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <input ref={inputRef} type="file" accept={ACCEPT[kind]} className="hidden" onChange={onChange} />
      <button type="button" onClick={openPicker} disabled={busy || !slug}
        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
        title={!slug ? "Bitte zuerst Slug vergeben" : ""}>
        {busy ? "Lädt…" : kind === "image" ? "Bild hochladen" : "Video hochladen"}
      </button>
      {preview ? (
        kind === "image" ? (
          <img src={preview} alt="Preview" className="h-10 w-16 object-cover rounded-md border" />
        ) : (
          <video src={preview} className="h-10 rounded-md border" muted playsInline loop />
        )
      ) : defaultPath ? (
        kind === "image" ? (
          <img src={defaultPath} alt="Aktuell" className="h-10 w-16 object-cover rounded-md border" />
        ) : (
          <video src={defaultPath} className="h-10 rounded-md border" muted playsInline loop />
        )
      ) : null}
    </div>
  );
};

// --- Drawer --------------------------------------------------------------------------
const Drawer: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode; title?: string }>=({ open, onClose, children, title })=>{
  return (
    <div className={cn("fixed inset-0 z-50", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
      <div className={cn("absolute inset-0 bg-black/30 transition-opacity", open ? "opacity-100" : "opacity-0")} onClick={onClose}/>
      <div className={cn("absolute right-0 top-0 h-full w-full sm:w-[540px] bg-white border-l shadow-xl p-6 overflow-y-auto transition-transform",
        open ? "translate-x-0" : "translate-x-full")} role="dialog" aria-modal="true">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="p-2 rounded-lg hover:bg-gray-100" onClick={onClose} aria-label="Schließen"><X className="h-5 w-5"/></button>
        </div>
        {children}
      </div>
    </div>
  )
}

// --- Main ----------------------------------------------------------------------------
export default function AdminDashboard() {
  const [dark, setDark] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "all">("all");
  const [ind, setInd] = useState<string | "all">("all");
  const [items, setItems] = useState<CaseItem[]>(demoCases);
  const [selected, setSelected] = useState<string[]>([]);
  const [editing, setEditing] = useState<CaseItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [view, setView] = useState<"table" | "gallery">("table");
  const [sortKey, setSortKey] = useState<"slug" | "title" | "category" | "industry">("slug");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [inlineEditSlug, setInlineEditSlug] = useState<string | null>(null);
  const [inlineTitle, setInlineTitle] = useState<string>("");
  const [bulkCategory, setBulkCategory] = useState<string>("");
  const [bulkIndustry, setBulkIndustry] = useState<string>("");
  const [bulkTechInput, setBulkTechInput] = useState<string>("");
  // History & Toast
  const [hist, setHist] = useState<CaseItem[][]>([]);
  const [redoStack, setRedoStack] = useState<CaseItem[][]>([]);
  const [toast, setToast] = useState<{ msg: string; visible: boolean }>({ msg: "", visible: false });
  const [historyOpen, setHistoryOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const ignoreHistoryRef = React.useRef(false);
  const debounceRef = React.useRef<number | null>(null);
  const mountedRef = React.useRef(false);
  
  // Current user role (in production, this would come from auth context)
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>("Admin");

  const showToast = (msg: string) => {
    setToast({ msg, visible: true });
    window.setTimeout(() => setToast(t => ({ ...t, visible: false })), 2000);
  };

  // Load persisted history on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('caseHistory');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setHist(parsed);
      } catch {}
    }
  }, []);

  // Persist history after each update
  useEffect(() => {
    if (hist.length > 0) {
      const trimmed = hist.slice(-75); // keep max 75 snapshots
      sessionStorage.setItem('caseHistory', JSON.stringify(trimmed));
    }
  }, [hist]);

  // Automatic history tracking with 300ms debouncing
  useEffect(() => {
    if (ignoreHistoryRef.current) { ignoreHistoryRef.current = false; return; }
    if (!mountedRef.current) { mountedRef.current = true; return; }
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      setHist(h => [...h, items]);
      setRedoStack([]);
      showToast("Änderungen gespeichert");
    }, 300);
    return () => { if (debounceRef.current) window.clearTimeout(debounceRef.current); };
  }, [items]);

  const undo = () => {
    setHist(h => {
      if (h.length < 2) return h;
      const prev = h[h.length - 2];
      const current = h[h.length - 1];
      setRedoStack(r => [...r, current]);
      ignoreHistoryRef.current = true;
      setItems(prev);
      showToast("Rückgängig gemacht");
      return h.slice(0, -1);
    });
  };

  const redo = () => {
    setRedoStack(r => {
      if (!r.length) return r;
      const next = r[r.length - 1];
      ignoreHistoryRef.current = true;
      setItems(next);
      showToast("Wiederholt");
      return r.slice(0, -1);
    });
  };

  useEffect(()=>{ document.documentElement.classList.toggle("dark", dark); },[dark]);

  const filtered = useMemo(()=>{
    const arr = items.filter(it =>
      (cat === "all" || it.category === cat) &&
      (ind === "all" || it.industry === ind) &&
      (q.trim() === "" || (it.slug + " " + (it.titleDe||"") + " " + (it.titleEn||"")).toLowerCase().includes(q.toLowerCase()))
    );
    const getTitle = (it: CaseItem) => (it.titleDe || it.titleEn || "").toLowerCase();
    const getVal = (it: CaseItem) => {
      switch (sortKey) {
        case "title": return getTitle(it);
        case "category": return (it.category || "").toLowerCase();
        case "industry": return (it.industry || "").toLowerCase();
        default: return it.slug.toLowerCase();
      }
    };
    arr.sort((a,b)=>{
      const av = getVal(a), bv = getVal(b);
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  },[items,q,cat,ind,sortKey,sortDir]);

  const catStats = useMemo(()=>{
    const map: Record<string, number> = {};
    items.forEach(i => { if (i.category) map[i.category] = (map[i.category]||0)+1; });
    return Object.entries(map).map(([name, value])=>({ name, value }));
  },[items]);

  function openNew() {
    setEditing({ slug: "", titleDe: "", titleEn: "", category: null, industry: null, goalsDe: [], resultsDe: [], tech: [] });
    setDrawerOpen(true);
  }

  function editItem(slug: string) {
    const it = items.find(i => i.slug === slug);
    if (it) { setEditing(JSON.parse(JSON.stringify(it))); setDrawerOpen(true); }
  }

  function removeSelected() {
    if (!selected.length) return;
    if (!window.confirm(`Ausgewählte löschen (${selected.length})?`)) return;
    setItems(prev => prev.filter(p => !selected.includes(p.slug)));
    setSelected([]);
  }

  function saveEditing() {
    if (!editing) return;
    const errs = validateCase(editing);
    if (errs.length) { alert("Bitte korrigieren:\n- " + errs.join("\n- ")); return; }
    setItems(prev => {
      const idx = prev.findIndex(p => p.slug === editing.slug);
      if (idx >= 0) {
        const next = [...prev]; next[idx] = editing; return next;
      } else {
        return [...prev, editing];
      }
    });
    setDrawerOpen(false); setEditing(null);
  }

  function exportJSON() {
    const json = JSON.stringify(items, null, 2);
    downloadFile("cases.json", json);
  }

  function importJSON(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]; if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!Array.isArray(data)) throw new Error("Erwarte Array");
        setItems(data);
      } catch (err: any) {
        alert("Ungültiges JSON: " + err.message);
      }
    };
    reader.readAsText(f);
    e.currentTarget.value = "";
  }

  function exportHistory() {
    const json = JSON.stringify(hist, null, 2);
    downloadFile('case-history.json', json);
    showToast('History exportiert');
  }

  function importHistory(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!Array.isArray(data)) throw new Error('Ungültiges Format');
        if (!window.confirm('Vorhandene History ersetzen?')) return;
        setHist(data);
        showToast('History importiert');
      } catch (err: any) {
        alert('Fehler beim Importieren: ' + err.message);
      }
    };
    reader.readAsText(f);
    e.currentTarget.value = '';
  }

  const allSelected = selected.length > 0 && selected.length === filtered.length;

  return (
    <div className={cn("min-h-screen", dark ? "bg-slate-950 text-slate-100" : "bg-gray-50 text-gray-900")}>      
      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-teal-600 text-white font-extrabold grid place-items-center">Q</div>
            <div>
              <div className="text-sm uppercase tracking-wider text-teal-700 dark:text-teal-400">Quantiva Admin</div>
              <div className="text-base font-semibold">Enterprise CMS Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Input placeholder="Suchen nach Slug/Titel" value={q} onChange={(e)=>setQ(e.target.value)} className="w-72"/>
              <Select value={cat} onChange={(e)=>setCat(e.target.value as any)}>
                <option value="all">Alle Kategorien</option>
                {taxonomy.categories.map(c => <option key={c} value={c}>{c}</option>)}
              </Select>
              <Select value={ind} onChange={(e)=>setInd(e.target.value as any)}>
                <option value="all">Alle Branchen</option>
                {taxonomy.industries.map(i => <option key={i} value={i}>{i}</option>)}
              </Select>
            </div>
            <Select value={currentUserRole} onChange={(e)=>setCurrentUserRole(e.target.value as UserRole)} className="w-32">
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Publisher">Publisher</option>
              <option value="Viewer">Viewer</option>
            </Select>
            <Button variant="ghost" onClick={()=>setDark(d=>!d)} aria-label="Theme umschalten"><Sun className="h-5 w-5 hidden dark:block"/><Moon className="h-5 w-5 dark:hidden"/></Button>
            <Button onClick={openNew}><Plus className="h-5 w-5"/> Neuer Case</Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5"><div className="text-sm text-gray-500 dark:text-slate-400">Cases</div><div className="mt-1 text-3xl font-bold">{items.length}</div></Card>
          <Card className="p-5"><div className="text-sm text-gray-500 dark:text-slate-400">Gefiltert</div><div className="mt-1 text-3xl font-bold">{filtered.length}</div></Card>
          <Card className="p-5"><div className="text-sm text-gray-500 dark:text-slate-400">Ausgewählt</div><div className="mt-1 text-3xl font-bold">{selected.length}</div></Card>
          <Card className="p-5"><div className="text-sm text-gray-500 dark:text-slate-400">Kategorien</div><div className="mt-1 text-3xl font-bold">{taxonomy.categories.length}</div></Card>
        </div>

        {/* Distribution Chart */}
        <Card className="p-5 mt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-gray-700 dark:text-slate-200"><Tags className="h-4 w-4"/> Verteilung nach Kategorie</div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={catStats} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid vertical={false} strokeOpacity={0.2}/>
                <XAxis dataKey="name"/>
                <YAxis allowDecimals={false}/>
                <Tooltip/>
                <Bar dataKey="value" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Toolbar */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 md:hidden w-full">
            <Input placeholder="Suchen nach Slug/Titel" value={q} onChange={(e)=>setQ(e.target.value)} />
            <Button variant="outline"><Search className="h-4 w-4"/> Suche</Button>
          </div>
          <input type="file" accept="application/json" id="importFile" className="hidden" onChange={importJSON}/>
          <Button variant="outline" onClick={()=>document.getElementById("importFile")?.click()}><Upload className="h-4 w-4"/> Import JSON</Button>
          <Button variant="outline" onClick={exportJSON}><Download className="h-4 w-4"/> Export JSON</Button>
          <input type="file" accept="application/json" id="importHistoryFile" className="hidden" onChange={importHistory}/>
          <Button variant="outline" onClick={()=>document.getElementById("importHistoryFile")?.click()}><Upload className="h-4 w-4"/> History importieren</Button>
          <Button variant="outline" onClick={exportHistory}><Download className="h-4 w-4"/> History exportieren</Button>
          <Button variant="outline" onClick={removeSelected} disabled={!selected.length}><Trash2 className="h-4 w-4"/> Löschen</Button>

          {/* Sortierung */}
          <div className="ml-auto flex items-center gap-2">
            <Select value={sortKey} onChange={(e)=> setSortKey(e.target.value as any)}>
              <option value="slug">Slug</option>
              <option value="title">Titel</option>
              <option value="category">Kategorie</option>
              <option value="industry">Branche</option>
            </Select>
            <Select value={sortDir} onChange={(e)=> setSortDir(e.target.value as any)}>
              <option value="asc">Aufsteigend</option>
              <option value="desc">Absteigend</option>
            </Select>
            <Button variant={view === "table" ? "solid" : "outline"} onClick={() => setView("table")}>Tabelle</Button>
            <Button variant={view === "gallery" ? "solid" : "outline"} onClick={() => setView("gallery")}>Galerie</Button>
            <div className="h-6 w-px bg-gray-200 hidden md:block" />
            <Button variant="outline" onClick={() => setWorkflowOpen(true)}><GitBranch className="h-4 w-4"/> Workflow</Button>
            <Button variant="outline" onClick={() => setHistoryOpen(true)}>History ({hist.length})</Button>
          </div>
        </div>

        {/* Bulk-Action Bar */}
        {selected.length > 0 && (
          <Card className="mt-3 p-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm">{selected.length} ausgewählt</div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Undo/Redo */}
              <Button variant="ghost" onClick={undo} disabled={hist.length < 2}>Rückgängig</Button>
              <Button variant="ghost" onClick={redo} disabled={!redoStack.length}>Wiederholen</Button>
              <div className="h-6 w-px bg-gray-200 hidden md:block" />
              {/* Mehrfach-Kategorie setzen */}
              <div className="flex items-center gap-2">
                <Select value={bulkCategory} onChange={(e)=> setBulkCategory(e.target.value)} aria-label="Kategorie wählen">
                  <option value="">Kategorie wählen…</option>
                  {taxonomy.categories.map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (!bulkCategory) { alert("Bitte zuerst eine Kategorie wählen."); return; }
                    setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, category: bulkCategory } : p));
                  }}
                >
                  Kategorie anwenden
                </Button>
              </div>

              {/* Mehrfach-Branche setzen */}
              <div className="flex items-center gap-2">
                <Select value={bulkIndustry} onChange={(e)=> setBulkIndustry(e.target.value)} aria-label="Branche wählen">
                  <option value="">Branche wählen…</option>
                  {taxonomy.industries.map(i => <option key={i} value={i}>{i}</option>)}
                </Select>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (!bulkIndustry) { alert("Bitte zuerst eine Branche wählen."); return; }
                    setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, industry: bulkIndustry } : p));
                  }}
                >
                  Branche anwenden
                </Button>
              </div>

              {/* Mehrfach-Zuweisung Tags/Tech */}
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Tech (Komma-getrennt)"
                  value={bulkTechInput}
                  onChange={(e)=> setBulkTechInput(e.target.value)}
                  className="w-56"
                />
                <Button
                  variant="outline"
                  onClick={() => {
                    const parts = bulkTechInput.split(',').map(s=>s.trim()).filter(Boolean);
                    if (!parts.length) { alert('Bitte Tech-Einträge eingeben.'); return; }
                    setItems(prev => prev.map(p => {
                      if (!selected.includes(p.slug)) return p;
                      const current = Array.isArray(p.tech) ? p.tech : [];
                      const next = [...current];
                      parts.forEach(x => { if (!next.includes(x)) next.push(x); });
                      return { ...p, tech: next };
                    }));
                  }}
                >
                  Tech hinzufügen
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const parts = bulkTechInput.split(',').map(s=>s.trim()).filter(Boolean);
                    if (!parts.length) { alert('Bitte Tech-Einträge eingeben.'); return; }
                    setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, tech: parts } : p));
                  }}
                >
                  Tech ersetzen
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const parts = bulkTechInput.split(',').map(s=>s.trim()).filter(Boolean);
                    if (!parts.length) { alert('Bitte Tech-Einträge eingeben.'); return; }
                    setItems(prev => prev.map(p => {
                      if (!selected.includes(p.slug)) return p;
                      const current = Array.isArray(p.tech) ? p.tech : [];
                      const next = current.filter(t => !parts.includes(t));
                      return { ...p, tech: next };
                    }));
                  }}
                >
                  Tech entfernen
                </Button>
              </div>

              <div className="h-6 w-px bg-gray-200 hidden md:block" />

              {/* Mehrfach-Clear-Aktion */}
              <div className="flex flex-wrap items-center gap-2">
                <Button variant="ghost" onClick={()=> setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, category: null } : p))}>Kategorie leeren</Button>
                <Button variant="ghost" onClick={()=> setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, industry: null } : p))}>Branche leeren</Button>
                <Button variant="ghost" onClick={()=> setItems(prev => prev.map(p => selected.includes(p.slug) ? { ...p, tech: [] } : p))}>Tech leeren</Button>
              </div>

              <div className="h-6 w-px bg-gray-200 hidden md:block" />

              {/* Bestehende Aktionen */}
              <Button variant="outline" onClick={removeSelected}><Trash2 className="h-4 w-4"/> Löschen</Button>
              <Button variant="outline" onClick={() => {
                const subset = items.filter(i=> selected.includes(i.slug));
                const json = JSON.stringify(subset, null, 2);
                const name = selected.length === 1 ? `${selected[0]}.json` : `cases-selected.json`;
                downloadFile(name, json);
              }}><Download className="h-4 w-4"/> Export Auswahl</Button>
              <Button variant="ghost" onClick={()=> setSelected([])}>Auswahl aufheben</Button>
            </div>
          </Card>
        )}

        {/* Data View - Table or Gallery */}
        {view === "table" ? (
          <Card className="mt-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100/60 dark:bg-slate-900/50">
                  <tr>
                    <th className="text-left px-4 py-3"><input type="checkbox" checked={!!filtered.length && allSelected} onChange={(e)=> setSelected(e.target.checked ? filtered.map(f=>f.slug) : []) }/></th>
                    <th className="text-left px-4 py-3">Slug</th>
                    <th className="text-left px-4 py-3">Titel (DE)</th>
                    <th className="text-left px-4 py-3">Titel (EN)</th>
                    <th className="text-left px-4 py-3">Kategorie</th>
                    <th className="text-left px-4 py-3">Branche</th>
                    <th className="text-left px-4 py-3">Hero</th>
                    <th className="text-left px-4 py-3">Media</th>
                    <th className="text-left px-4 py-3">Workflow</th>
                    <th className="text-left px-4 py-3">Validierung</th>
                    <th className="text-right px-4 py-3">Aktionen</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((it)=>{
                    const errs = validateCase(it);
                    const ok = errs.length === 0;
                    const selectedRow = selected.includes(it.slug);
                    const thumb = it.heroPoster || it.heroImage || null;
                    return (
                      <tr key={it.slug} className={cn("border-t border-gray-200 dark:border-slate-800", selectedRow && "bg-teal-50/60 dark:bg-teal-900/20")}> 
                        <td className="px-4 py-3"><input type="checkbox" checked={selectedRow} onChange={(e)=> setSelected(prev => e.target.checked ? [...prev, it.slug] : prev.filter(s => s !== it.slug)) }/></td>
                        <td className="px-4 py-3 font-mono">{it.slug}</td>
                        <td className="px-4 py-3">{it.titleDe || <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-3">{it.titleEn || <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-3">{it.category || <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-3">{it.industry || <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-3">
                          {thumb ? (
                            <div className="relative group inline-block">
                              <img src={thumb} alt="thumb" className="h-8 w-12 object-cover rounded border"/>
                              <div className="pointer-events-none absolute z-20 hidden group-hover:block -top-2 left-14">
                                <img src={thumb} alt="preview" className="h-40 w-64 object-cover rounded-lg shadow-lg border"/>
                              </div>
                            </div>
                          ) : <span className="text-gray-400">—</span>}
                        </td>
                        <td className="px-4 py-3">{it.heroMedia ? <Badge className="bg-white">Video</Badge> : <span className="text-gray-400">—</span>}</td>
                        <td className="px-4 py-3">
                          {it.status === "published" && <Badge className="bg-green-100 text-green-800 border-green-300">Veröffentlicht</Badge>}
                          {it.status === "approved" && <Badge className="bg-blue-100 text-blue-800 border-blue-300">Freigegeben</Badge>}
                          {it.status === "inReview" && <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">In Prüfung</Badge>}
                          {it.status === "rejected" && <Badge className="bg-red-100 text-red-800 border-red-300">Abgelehnt</Badge>}
                          {(!it.status || it.status === "draft") && <Badge className="bg-gray-100 text-gray-800 border-gray-300">Entwurf</Badge>}
                        </td>
                        <td className="px-4 py-3">
                          {ok ? <span className="inline-flex items-center gap-1 text-teal-700"><CheckCircle2 className="h-4 w-4"/> OK</span> : <span className="inline-flex items-center gap-1 text-amber-600"><AlertTriangle className="h-4 w-4"/> {errs[0]}</span>}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Workflow buttons */}
                            {(!it.status || it.status === "draft") && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                disabled={!can(currentUserRole, ["Admin","Editor"])} 
                                onClick={() => {
                                  setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "inReview" } : p));
                                  showToast("Zur Prüfung eingereicht");
                                }}
                              >
                                Zur Prüfung
                              </Button>
                            )}
                            {it.status === "inReview" && (
                              <>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  disabled={!can(currentUserRole, ["Admin","Reviewer","Publisher"])} 
                                  onClick={() => {
                                    setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "approved" } : p));
                                    showToast("Freigegeben");
                                  }}
                                >
                                  Freigeben
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  disabled={!can(currentUserRole, ["Admin","Reviewer"])} 
                                  onClick={() => {
                                    setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "rejected" } : p));
                                    showToast("Abgelehnt");
                                  }}
                                >
                                  Ablehnen
                                </Button>
                              </>
                            )}
                            {it.status === "approved" && (
                              <Button 
                                size="sm" 
                                disabled={!can(currentUserRole, ["Admin","Publisher"])} 
                                onClick={() => {
                                  setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "published", publishedAt: nowIso() } : p));
                                  showToast("Veröffentlicht");
                                }}
                              >
                                Veröffentlichen
                              </Button>
                            )}
                            {it.status === "published" && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                disabled={!can(currentUserRole, ["Admin","Publisher"])} 
                                onClick={() => {
                                  setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "approved", publishedAt: null } : p));
                                  showToast("Veröffentlichung aufgehoben");
                                }}
                              >
                                Unpublish
                              </Button>
                            )}
                            {(it.status && it.status !== "draft") && (
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                disabled={!can(currentUserRole, ["Admin"])} 
                                onClick={() => {
                                  setItems(prev => prev.map(p => p.slug === it.slug ? { ...p, status: "draft", publishedAt: null } : p));
                                  showToast("Zurück zu Entwurf");
                                }}
                              >
                                Entwurf
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" onClick={()=>editItem(it.slug)}>
                              <Pencil className="h-4 w-4"/> Bearbeiten
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        ) : (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((it) => {
              const errs = validateCase(it);
              const ok = errs.length === 0;
              const img = it.heroPoster || it.heroImage || undefined;
              const selectedCard = selected.includes(it.slug);
              return (
                <Card key={it.slug} className={cn("overflow-hidden", selectedCard && "ring-2 ring-teal-500")}> 
                  <div className="relative">
                    {img ? (
                      <img src={img} alt={it.slug} className="h-40 w-full object-cover"/>
                    ) : (
                      <div className="h-40 w-full grid place-items-center text-gray-400">Kein Bild</div>
                    )}
                    <div className="absolute top-2 left-2">
                      <input type="checkbox" checked={selectedCard} onChange={(e)=> setSelected(prev => e.target.checked ? [...prev, it.slug] : prev.filter(s=>s!==it.slug))} />
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium truncate" title={it.titleDe || it.titleEn || it.slug}>
                      {inlineEditSlug === it.slug ? (
                        <div className="flex items-center gap-2">
                          <Input className="h-8" value={inlineTitle} onChange={(e)=> setInlineTitle(e.target.value)} />
                          <Button size="sm" onClick={()=>{
                            const next = items.map(ci => ci.slug === it.slug ? { ...ci, titleDe: inlineTitle || ci.titleDe } : ci);
                            setItems(next);
                            setInlineEditSlug(null);
                            setInlineTitle("");
                          }}><Save className="h-4 w-4"/></Button>
                          <Button size="sm" variant="outline" onClick={()=>{ setInlineEditSlug(null); setInlineTitle(""); }}><X className="h-4 w-4"/></Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>{it.titleDe || it.titleEn || it.slug}</span>
                          <Button size="sm" variant="ghost" onClick={()=>{ setInlineEditSlug(it.slug); setInlineTitle(it.titleDe || it.titleEn || ""); }}><Pencil className="h-4 w-4"/></Button>
                        </div>
                      )}
                    </div>
                      {ok ? (
                        <span className="inline-flex items-center gap-1 text-teal-700 text-xs"><CheckCircle2 className="h-4 w-4"/>OK</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-600 text-xs"><AlertTriangle className="h-4 w-4"/>{errs.length}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{it.category || "—"}</span>
                      <span>•</span>
                      <span>{it.industry || "—"}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex gap-1">
                        {it.heroImage && <Badge className="bg-white">Bild</Badge>}
                        {it.heroMedia && <Badge className="bg-white">Video</Badge>}
                      </div>
                      <Button variant="ghost" size="sm" onClick={()=>editItem(it.slug)}>
                        <Pencil className="h-4 w-4"/> Bearbeiten
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Toast */}
        {toast.visible && (
          <div className="fixed bottom-4 right-4 z-[60] rounded-xl border bg-white dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 shadow-lg px-4 py-3 text-sm">
            <div className="flex items-center gap-3">
              <span>{toast.msg}</span>
              <Button variant="ghost" size="sm" onClick={undo}>Rückgängig</Button>
            </div>
          </div>
        )}
      </main>

      {/* Drawer Editor */}
      <Drawer open={drawerOpen} onClose={()=>{ setDrawerOpen(false); setEditing(null); }} title={editing?.slug ? `Case bearbeiten: ${editing.slug}` : "Neuer Case"}>
        {editing && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500">Slug</label>
                <Input value={editing.slug || ""} onChange={(e)=> setEditing({ ...editing, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })} placeholder="z. B. btp-delivery"/>
              </div>
              <div>
                <label className="text-xs text-gray-500">Kategorie</label>
                <Select value={editing.category||""} onChange={(e)=> setEditing({ ...editing, category: e.target.value || null })}>
                  <option value="">—</option>
                  {taxonomy.categories.map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
              </div>
              <div>
                <label className="text-xs text-gray-500">Branche</label>
                <Select value={editing.industry||""} onChange={(e)=> setEditing({ ...editing, industry: e.target.value || null })}>
                  <option value="">—</option>
                  {taxonomy.industries.map(i => <option key={i} value={i}>{i}</option>)}
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400">Besitzer</label>
                <Input
                  value={editing.owner || ''}
                  onChange={(e)=> setEditing({ ...editing, owner: e.target.value || null })}
                  placeholder="z.B. john.doe@quantiva.com"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400">Reviewer (Komma-getrennt)</label>
                <Input
                  value={(editing.reviewers||[]).join(', ')}
                  onChange={(e)=> setEditing({
                    ...editing,
                    reviewers: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)
                  })}
                  placeholder="reviewer1@quantiva.com, reviewer2@quantiva.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400">Status</label>
                <Select value={editing.status||"draft"} onChange={(e)=> setEditing({ ...editing, status: e.target.value as CaseItem['status'] })}>
                  <option value="draft">Entwurf</option>
                  <option value="inReview">In Prüfung</option>
                  <option value="approved">Freigegeben</option>
                  <option value="rejected">Abgelehnt</option>
                  <option value="published">Veröffentlicht</option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500">Titel (DE)</label>
                <Input value={editing.titleDe||""} onChange={(e)=> setEditing({ ...editing, titleDe: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Titel (EN)</label>
                <Input value={editing.titleEn||""} onChange={(e)=> setEditing({ ...editing, titleEn: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500">Untertitel (DE)</label>
                <Input value={editing.subtitleDe||""} onChange={(e)=> setEditing({ ...editing, subtitleDe: e.target.value })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Untertitel (EN)</label>
                <Input value={editing.subtitleEn||""} onChange={(e)=> setEditing({ ...editing, subtitleEn: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs text-gray-500">Hero Image (Pfad)</label>
                <Input placeholder="/assets/cases/slug-hero.jpg" value={editing.heroImage||""} onChange={(e)=> setEditing({ ...editing, heroImage: e.target.value })}/>
                <Uploader slug={editing.slug || ""} kind="image" defaultPath={editing.heroImage || undefined}
                  onUploaded={({ path }) => setEditing({ ...editing, heroImage: path })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gray-500">Hero Video (Pfad)</label>
                <Input placeholder="/assets/cases/slug-hero.mp4" value={editing.heroMedia||""} onChange={(e)=> setEditing({ ...editing, heroMedia: e.target.value })}/>
                <Uploader slug={editing.slug || ""} kind="video" defaultPath={editing.heroMedia || undefined}
                  onUploaded={({ path }) => setEditing({ ...editing, heroMedia: path })}
                />
              </div>
            </div>

            {/* Poster manuell hochladen */}
            <div className="mt-3 space-y-2">
              <label className="text-xs text-gray-500">Poster (Standbild) – manuell</label>
              <Input placeholder="/assets/cases/slug-poster.webp" value={editing.heroPoster||""} onChange={(e)=> setEditing({ ...editing, heroPoster: e.target.value })} />
              <Uploader slug={editing.slug || ""} kind="image" defaultPath={editing.heroPoster || undefined}
                fixedKeyPrefix={`/assets/cases/${editing.slug || "slug"}-poster`}
                onUploaded={({ path }) => {
                  const next = { ...editing, heroPoster: path };
                  if (!editing.heroImage) next.heroImage = path;
                  setEditing(next);
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500">Ziele (DE, Komma-getrennt)</label>
                <Input value={ensureArray(editing.goalsDe).join(", ")} onChange={(e)=> setEditing({ ...editing, goalsDe: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Ziele (EN, Komma-getrennt)</label>
                <Input value={ensureArray(editing.goalsEn).join(", ")} onChange={(e)=> setEditing({ ...editing, goalsEn: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Lösung (DE)</label>
                <Input value={ensureArray(editing.solutionDe).join(", ")} onChange={(e)=> setEditing({ ...editing, solutionDe: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Lösung (EN)</label>
                <Input value={ensureArray(editing.solutionEn).join(", ")} onChange={(e)=> setEditing({ ...editing, solutionEn: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Ergebnisse (DE)</label>
                <Input value={ensureArray(editing.resultsDe).join(", ")} onChange={(e)=> setEditing({ ...editing, resultsDe: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div>
                <label className="text-xs text-gray-500">Ergebnisse (EN)</label>
                <Input value={ensureArray(editing.resultsEn).join(", ")} onChange={(e)=> setEditing({ ...editing, resultsEn: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-gray-500">Tech (Komma-getrennt)</label>
                <Input value={ensureArray(editing.tech).join(", ")} onChange={(e)=> setEditing({ ...editing, tech: e.target.value.split(",").map(s=>s.trim()).filter(Boolean) })} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-gray-500">Zitat (DE)</label>
                  <Input value={editing.quote?.textDe||""} onChange={(e)=> setEditing({ ...editing, quote: { ...(editing.quote||{}), textDe: e.target.value } })} />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Zitat (EN)</label>
                  <Input value={editing.quote?.textEn||""} onChange={(e)=> setEditing({ ...editing, quote: { ...(editing.quote||{}), textEn: e.target.value } })} />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Autor</label>
                  <Input value={editing.quote?.author||""} onChange={(e)=> setEditing({ ...editing, quote: { ...(editing.quote||{}), author: e.target.value } })} />
                </div>
              </div>
              {/* Live validation */}
              {(() => { const errs = validateCase(editing); if (!errs.length) return null; return (
                <div className="rounded-xl border border-amber-300 bg-amber-50 text-amber-900 p-3 text-sm">
                  <div className="font-medium mb-1">Bitte korrigieren:</div>
                  <ul className="list-disc list-inside space-y-1">{errs.map((e,i)=><li key={i}>{e}</li>)}</ul>
                </div>
              ); })()}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-gray-500">Änderungen werden erst mit <b>Speichern</b> übernommen.</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={()=>{ setDrawerOpen(false); setEditing(null); }}><X className="h-4 w-4"/> Abbrechen</Button>
                <Button onClick={saveEditing}><Save className="h-4 w-4"/> Speichern</Button>
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Workflow Drawer */}
      <Drawer open={workflowOpen} onClose={() => setWorkflowOpen(false)} title="Workflow & Berechtigungen">
        <WorkflowDiagram />
      </Drawer>

      {/* History Drawer */}
      <Drawer open={historyOpen} onClose={() => setHistoryOpen(false)} title="History">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">{hist.length} Snapshots gespeichert</div>
            <div className="flex items-center gap-2">
              <input type="file" accept="application/json" id="importHistoryFileInDrawer" className="hidden" onChange={importHistory}/>
              <Button variant="outline" size="sm" onClick={()=>document.getElementById("importHistoryFileInDrawer")?.click()}>
                <Upload className="h-4 w-4"/> Importieren
              </Button>
              <Button variant="outline" size="sm" onClick={exportHistory}>
                <Download className="h-4 w-4"/> Exportieren
              </Button>
            </div>
          </div>
          
          {hist.length === 0 ? (
            <div className="text-center py-8 text-gray-400">Keine History vorhanden</div>
          ) : (
            <div className="space-y-2">
              {hist.slice().reverse().map((snapshot, idx) => {
                const realIdx = hist.length - 1 - idx;
                return (
                  <Card key={realIdx} className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Snapshot #{realIdx + 1}</div>
                        <div className="text-xs text-gray-500">{snapshot.length} Cases</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (window.confirm(`Zu Snapshot #${realIdx + 1} zurückkehren?`)) {
                            ignoreHistoryRef.current = true;
                            setItems(snapshot);
                            setHistoryOpen(false);
                            showToast(`Snapshot #${realIdx + 1} wiederhergestellt`);
                          }
                        }}
                      >
                        Wiederherstellen
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </Drawer>

      <style>{`
        .dark .recharts-default-tooltip { color: #0ea5a6; }
        .dark body { background-color: #020617; }
      `}</style>
    </div>
  );
}