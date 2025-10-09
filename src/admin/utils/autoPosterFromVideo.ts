// src/admin/utils/autoPosterFromVideo.ts
export async function autoPosterFromVideo(
  src: string | File,
  opts: { frameCount?: number; interval?: number; type?: "image/webp" | "image/jpeg"; quality?: number } = {}
): Promise<Blob> {
  const { frameCount = 6, interval = 0.8, type = "image/webp", quality = 0.9 } = opts;
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

  const duration = video.duration;
  const samples: { time: number; score: number; blob: Blob }[] = [];

  const getScore = (imgData: ImageData) => {
    let sum = 0, sumSq = 0, edges = 0;
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const lum = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      sum += lum;
      sumSq += lum * lum;
      if (i % 16 === 0 && i + 8 < data.length) edges += Math.abs(lum - (0.2126 * data[i + 8] + 0.7152 * data[i + 9] + 0.0722 * data[i + 10]));
    }
    const mean = sum / (data.length / 4);
    const variance = sumSq / (data.length / 4) - mean * mean;
    const contrast = Math.sqrt(variance);
    const edgeFactor = edges / (data.length / 16);
    return contrast * 0.7 + edgeFactor * 0.3;
  };

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  for (let i = 0; i < frameCount; i++) {
    const time = Math.min(duration - 0.05, (i + 1) * interval);
    await new Promise<void>((resolve) => {
      video.currentTime = time;
      video.onseeked = () => resolve();
    });

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const score = getScore(imgData);
    const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), type, quality));
    samples.push({ time, score, blob });
  }

  if (objectUrl) URL.revokeObjectURL(objectUrl);
  const best = samples.sort((a, b) => b.score - a.score)[0];
  return best.blob;
}
