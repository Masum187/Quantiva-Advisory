import React, { useRef, useState } from "react";
import { transcodeToWebm } from "../helpers/transcoding";

type Props = {
  slug: string;
  kind: "image" | "video";
  onUploaded: (result: { url: string; path: string }) => void;
  defaultPath?: string | null;
};

const ACCEPT = {
  image: "image/png,image/jpeg,image/webp",
  video: "video/mp4,video/webm"
};

export default function Uploader({ slug, kind, onUploaded, defaultPath }: Props) {
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    inputRef.current?.click();
  }

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.currentTarget.value = "";
    if (!file) return;

    // simple type guard
    const okMime = ACCEPT[kind].split(",").some(t => file.type === t);
    if (!okMime) {
      alert(`Ungültiger Typ. Erlaubt: ${ACCEPT[kind]}`);
      return;
    }

    setPreview(URL.createObjectURL(file));
    setBusy(true);
    try {
      let fileToSend = file;

      // Optional transcoding for videos
      if (kind === "video" && window.confirm("Zu WebM transcodieren (empfohlen für Autoplay)?")) {
        try {
          const webm = await transcodeToWebm(file);
          fileToSend = new File([webm], file.name.replace(/\.\w+$/, ".webm"), { type: "video/webm" });
        } catch (e: any) {
          alert("Transcoding fehlgeschlagen – lade Original hoch.");
        }
      }

      const ext = kind === "image"
        ? (fileToSend.type.includes("webp") ? "webp" : fileToSend.type.includes("png") ? "png" : "jpg")
        : (fileToSend.type.includes("webm") ? "webm" : "mp4");

      const key = kind === "image"
        ? `/assets/cases/${slug}-hero.${ext}`
        : `/assets/cases/${slug}-hero.${ext}`;

      const fd = new FormData();
      fd.append("file", fileToSend);
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
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT[kind]}
        className="hidden"
        onChange={onChange}
      />
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800"
        onClick={openPicker}
        disabled={busy || !slug}
        title={!slug ? "Bitte zuerst Slug vergeben" : ""}
      >
        {busy ? "Lädt…" : (kind === "image" ? "Bild hochladen" : "Video hochladen")}
      </button>

      {preview ? (
        kind === "image" ? (
          <img src={preview} alt="Preview" className="h-10 w-16 object-cover rounded-md border" />
        ) : (
          <video src={preview} className="h-10 rounded-md border" muted playsInline loop />
        )
      ) : defaultPath ? (
        kind === "image" ? (
          <img src={defaultPath} alt="Aktuelles Bild" className="h-10 w-16 object-cover rounded-md border" />
        ) : (
          <video src={defaultPath} className="h-10 rounded-md border" muted playsInline loop />
        )
      ) : null}
    </div>
  );
}
