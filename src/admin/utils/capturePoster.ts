// src/admin/utils/capturePoster.ts
export async function capturePosterFromVideo(
  src: string | File,
  opts: { time?: number; type?: "image/webp" | "image/jpeg"; quality?: number } = {}
): Promise<Blob> {
  const { time = 1.0, type = "image/webp", quality = 0.9 } = opts;

  // Video-Quelle
  const video = document.createElement("video");
  video.crossOrigin = "anonymous"; // erlaubt Canvas drawImage bei gleichen Origins/CDNs
  video.muted = true;
  video.playsInline = true;

  let objectUrl: string | undefined;
  if (src instanceof File) {
    objectUrl = URL.createObjectURL(src);
    video.src = objectUrl;
  } else {
    video.src = src;
  }

  // Metadaten laden
  await new Promise<void>((resolve, reject) => {
    video.onloadedmetadata = () => resolve();
    video.onerror = () => reject(new Error("Video konnte nicht geladen werden"));
  });

  // Zu Zielzeit springen (oder letzte Frame falls kürzer)
  const seekTo = Math.min(time, Math.max(0.0, video.duration - 0.05));
  await new Promise<void>((resolve, reject) => {
    const onSeeked = () => { video.removeEventListener("seeked", onSeeked); resolve(); };
    video.addEventListener("seeked", onSeeked);
    video.currentTime = isFinite(seekTo) ? seekTo : 0.1;
    // Safari-Edgecases: Fallback-Timeout
    setTimeout(()=>resolve(), 1200);
  });

  // Canvas rendern
  const w = video.videoWidth;
  const h = video.videoHeight;
  if (!w || !h) throw new Error("Ungültige Videodimensionen");

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas Context nicht verfügbar");
  ctx.drawImage(video, 0, 0, w, h);

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("Poster-Blob konnte nicht erzeugt werden"))),
      type,
      quality
    );
  });

  if (objectUrl) URL.revokeObjectURL(objectUrl);
  return blob;
}
