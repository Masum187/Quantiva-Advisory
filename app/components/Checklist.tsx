import React from "react";

type ChecklistContextType = {
  ns: string;                 // namespace (localStorage key prefix)
  values: Record<string, boolean>;
  toggle: (id: string) => void;
};

const ChecklistCtx = React.createContext<ChecklistContextType | null>(null);

function useChecklist() {
  const ctx = React.useContext(ChecklistCtx);
  if (!ctx) throw new Error("CheckItem must be used within <Checklist>");
  return ctx;
}

function loadState(ns: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(`checklist:${ns}`);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(ns: string, values: Record<string, boolean>) {
  try { localStorage.setItem(`checklist:${ns}`, JSON.stringify(values)); } catch {}
}

export function Checklist({
  ns,
  title,
  children,
  className,
}: {
  /** Namespace/ID für Persistenz, z.B. "howto-create-case" */
  ns: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [values, setValues] = React.useState<Record<string, boolean>>(() => loadState(ns));

  const toggle = React.useCallback((id: string) => {
    setValues(prev => {
      const next = { ...prev, [id]: !prev[id] };
      saveState(ns, next);
      return next;
    });
  }, [ns]);

  const done = Object.values(values).filter(Boolean).length;
  const total = React.Children.toArray(children).length;

  return (
    <ChecklistCtx.Provider value={{ ns, values, toggle }}>
      <section className={className} aria-labelledby={`cl-${ns}-title`}>
        {title && (
          <div id={`cl-${ns}-title`} style={{ fontWeight: 600, marginBottom: 8 }}>
            {title} {total > 0 && <span style={{ opacity: 0.6 }}>({done}/{total})</span>}
          </div>
        )}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {children}
        </ul>
      </section>
    </ChecklistCtx.Provider>
  );
}

export function CheckItem({
  id,
  children,
  defaultChecked = false,
}: {
  /** Stabile ID innerhalb des ns, z.B. "slug", "titles", "save" */
  id: string;
  children: React.ReactNode;
  defaultChecked?: boolean;
}) {
  const { values, toggle } = useChecklist();
  const checked = values[id] ?? defaultChecked;

  // A11y: label + keyboard toggle (Space/Enter)
  const onKeyDown: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <li
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={() => toggle(id)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        borderRadius: 8,
        cursor: "pointer",
        userSelect: "none",
        border: "1px solid #e5e7eb",
        marginBottom: 8,
        background: checked ? "#ecfdf5" : "#fff",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 18, height: 18, borderRadius: 6,
          border: "1px solid #9ca3af",
          background: checked ? "#10b981" : "#fff",
          display: "inline-block",
        }}
      />
      <span style={{ textDecoration: checked ? "line-through" as const : "none" }}>
        {children}
      </span>
    </li>
  );
}

