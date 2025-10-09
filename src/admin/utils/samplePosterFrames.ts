// src/admin/utils/samplePosterFrames.ts
export type PosterSample = {
  time: number;     // Sekunde im Video
  score: number;    // Qualitäts-Score (Kontrast/Kanten)
  blob: Blob;       // Bilddaten (webp/jpg)
};

export async function samplePosterFrames(
  src: string | File,
  opts: { frameCount?: number; interval?: number; type?: "image/webp" | "image/jpeg"; quality?: number } = {}
): Promise<PosterSample[]> {
  const { frameCount = 8, interval = 0.8, type = "image/webp", quality = 0.9 } = opts;

  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.muted = true;
  video.playsInline = true;

  let objectUrl: string | undefined;
  if (src instanceof File) {
    objectUrl = URL.createObjectURL(src);
    video.src = objectUrl;
  } else {
    video.src = src;
  }

  await new Promise<void>((res, rej) => {
    video.onloadedmetadata = () => res();
    video.onerror = () => rej(new Error("Video konnte nicht geladen werden"));
  });

  const duration = isFinite(video.duration) ? video.duration : 10;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  const scoreFrame = (img: ImageData) => {
    let sum = 0, sumSq = 0, edges = 0;
    const d = img.data;
    const n = d.length / 4;
    for (let i = 0; i < d.length; i += 4) {
      const lum = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      sum += lum;
      sumSq += lum * lum;
      if (i % 16 === 0 && i + 8 < d.length) {
        const lum2 = 0.2126 * d[i + 8] + 0.7152 * d[i + 9] + 0.0722 * d[i + 10];
        edges += Math.abs(lum - lum2);
      }
    }
    const mean = sum / n;
    const variance = sumSq / n - mean * mean;
    const contrast = Math.sqrt(Math.max(variance, 0));
    const edgeFactor = edges / (d.length / 16);
    return contrast * 0.7 + edgeFactor * 0.3;
  };

  const samples: PosterSample[] = [];
  for (let i = 0; i < frameCount; i++) {
    const t = Math.min(duration - 0.05, Math.max(0.1, (i + 1) * interval));
    await new Promise<void>((resolve) => {
      video.currentTime = t;
      video.onseeked = () => resolve();
      // Safari Fallback
      setTimeout(() => resolve(), 1000);
    });

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const score = scoreFrame(imgData);
    const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), type, quality));
    samples.push({ time: t, score, blob });
  }

  if (objectUrl) URL.revokeObjectURL(objectUrl);
  return samples.sort((a, b) => b.score - a.score);
}
