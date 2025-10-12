import React from "react";

type Props = {
  /** Namespace deiner Checkliste, z. B. "howto-create-case" */
  ns: string;
  /** Optional: Gesamtanzahl Tasks, falls du sie manuell setzen willst.
   *  Wenn nicht gesetzt, versucht die Komponente, die Anzahl aus dem DOM (MDX-CheckItems) zu ermitteln. */
  total?: number;
  className?: string;
};

/** Liest Persistenz aus localStorage */
function readValues(ns: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(`checklist:${ns}`);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export default function GuideProgress({ ns, total, className }: Props) {
  const [values, setValues] = React.useState<Record<string, boolean>>(() => readValues(ns));

  React.useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === `checklist:${ns}`) {
        setValues(readValues(ns));
      }
    };
    window.addEventListener("storage", onStorage);
    // Poll als Fallback (wenn CheckItem im selben Tab geändert wird, wird setItem eh getriggert)
    const iv = setInterval(() => setValues(readValues(ns)), 500);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(iv);
    };
  }, [ns]);

  const done = Object.values(values).filter(Boolean).length;
  const inferredTotal = total ?? Math.max(Object.keys(values).length, 0); // fallback: Anzahl bekannter IDs
  const percent = inferredTotal > 0 ? Math.round((done / inferredTotal) * 100) : 0;

  return (
    <div className={className} aria-label="Guide Progress">
      <div className="flex justify-between items-baseline mb-2">
        <div className="font-semibold text-gray-900 dark:text-white">Fortschritt</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {done}/{inferredTotal} Tasks
        </div>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          className="h-full bg-teal-500 dark:bg-teal-400 transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
        {percent}% erledigt
      </div>
    </div>
  );
}


