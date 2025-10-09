import React, { useState } from "react";
import { autoPosterFromVideo } from "../utils/autoPosterFromVideo";
import { capturePosterFromVideo } from "../utils/capturePoster";

type Props = {
  slug: string;
  videoPath?: string | null;     // heroMedia (URL/Pfad)
  onUploaded: (result: { url: string; path: string }) => void; // setzt heroPoster (und ggf. heroImage)
};

export default function PosterButton({ slug, videoPath, onUploaded }: Props) {
  const [busy, setBusy] = useState(false);
  const [posterTime, setPosterTime] = useState(1.0);
  const [useAutoSelection, setUseAutoSelection] = useState(true);

  async function handleClick() {
    try {
      if (!slug) { alert("Bitte zuerst einen Slug vergeben."); return; }
      if (!videoPath) { alert("Kein Video hinterlegt."); return; }
      setBusy(true);

      let blob: Blob;
      
      if (useAutoSelection) {
        // Intelligente Poster-Auswahl aus Video
        blob = await autoPosterFromVideo(videoPath, { frameCount: 6, interval: 0.8 });
      } else {
        // Manuelle Zeitpunkt-Auswahl
        blob = await capturePosterFromVideo(videoPath, { time: posterTime, type: "image/webp", quality: 0.92 });
      }
      
      const posterFile = new File([blob], `${slug}-poster.webp`, { type: "image/webp" });

      // Upload via /api/upload
      const key = `/assets/cases/${slug}-poster.webp`;
      const fd = new FormData();
      fd.append("file", posterFile);
      fd.append("key", key);

      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload fehlgeschlagen");

      onUploaded({ url: data.url, path: data.path });
    } catch (e: any) {
      alert(e.message || "Poster-Erzeugung fehlgeschlagen");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleClick}
          disabled={busy || !slug || !videoPath}
          className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
          title={!videoPath ? "Bitte zuerst ein Hero-Video hinterlegen" : ""}
        >
          {busy ? "Analysiere Video…" : "Intelligentes Poster erstellen"}
        </button>
        
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={useAutoSelection}
            onChange={(e) => setUseAutoSelection(e.target.checked)}
            className="rounded"
          />
          <span className="text-gray-600 dark:text-gray-400">Automatisch</span>
        </label>
      </div>

      {!useAutoSelection && (
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600 dark:text-gray-400">Zeitpunkt:</label>
          <input
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={posterTime}
            onChange={(e) => setPosterTime(parseFloat(e.target.value))}
            className="w-24 rounded-lg border px-2 py-1 text-sm"
            disabled={busy}
          />
          <span className="text-sm text-gray-400">Sekunden</span>
        </div>
      )}
    </div>
  );
}