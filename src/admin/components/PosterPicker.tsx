import React, { useState } from "react";
import { samplePosterFrames, PosterSample } from "../utils/samplePosterFrames";

type Props = {
  slug: string;
  videoPath?: string | null;          // heroMedia
  onPicked: (result: { path: string; url: string }) => void; // setzt heroPoster (und evtl. heroImage)
  topN?: number;                      // default 3
};

export default function PosterPicker({ slug, videoPath, onPicked, topN = 3 }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [candidates, setCandidates] = useState<PosterSample[] | null>(null);
  const [selected, setSelected] = useState<number>(0);

  // Note: previewUrls could be used for cleanup, but we rely on browser garbage collection
  // const previewUrls = useMemo(() => {
  //   if (!candidates) return [];
  //   return candidates.slice(0, topN).map((c) => URL.createObjectURL(c.blob));
  // }, [candidates, topN]);

  async function findCandidates() {
    if (!slug) { setError("Bitte zuerst einen Slug vergeben."); return; }
    if (!videoPath) { setError("Kein Hero-Video vorhanden."); return; }
    setError(null);
    setBusy(true);
    try {
      const list = await samplePosterFrames(videoPath, { frameCount: 8, interval: 0.8, type: "image/webp", quality: 0.92 });
      if (!list.length) throw new Error("Keine Frames gefunden.");
      setCandidates(list);
      setSelected(0);
    } catch (e: any) {
      setError(e.message || "Analyse fehlgeschlagen");
    } finally {
      setBusy(false);
    }
  }

  async function uploadSelected() {
    if (!candidates || !candidates.length) return;
    const pick = candidates.slice(0, topN)[selected];
    const file = new File([pick.blob], `${slug}-poster.webp`, { type: "image/webp" });
    const key = `/assets/cases/${slug}-poster.webp`;

    const fd = new FormData();
    fd.append("file", file);
    fd.append("key", key);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok) { alert(data?.error || "Upload fehlgeschlagen"); return; }

    onPicked({ path: data.path, url: data.url });
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
          onClick={findCandidates}
          disabled={busy || !videoPath}
          title={!videoPath ? "Bitte zuerst Hero-Video festlegen" : ""}
        >
          {busy ? "Analysiere…" : "Beste Frames finden"}
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
          onClick={uploadSelected}
          disabled={!candidates || candidates.length === 0}
        >
          Ausgewählten als Poster speichern
        </button>
      </div>

      {error && <div className="text-sm text-amber-600">{error}</div>}

      {candidates && (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {candidates.slice(0, topN).map((c, idx) => (
            <label key={idx} className={`relative block rounded-lg border overflow-hidden cursor-pointer ${selected === idx ? "ring-2 ring-teal-500" : "border-gray-300 dark:border-gray-700"}`}>
              <input
                type="radio"
                name="posterPick"
                className="peer sr-only"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                aria-label={`Frame bei ${c.time.toFixed(1)}s wählen`}
              />
              <img
                src={URL.createObjectURL(c.blob)}
                alt={`Frame ${idx + 1}`}
                className="w-full h-28 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1 flex items-center justify-between">
                <span>{c.time.toFixed(1)}s</span>
                <span>Score {Math.round(c.score)}</span>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
