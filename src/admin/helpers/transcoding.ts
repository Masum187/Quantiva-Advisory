// src/admin/helpers/transcoding.ts
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

export async function transcodeToWebm(input: File): Promise<Blob> {
  const ffmpeg = new FFmpeg();
  await ffmpeg.load();
  await ffmpeg.writeFile("in.mp4", await fetchFile(input));
  // sehr einfache, schnelle WebM-Transcodierung
  await ffmpeg.exec(["-i", "in.mp4", "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "35", "-an", "out.webm"]);
  const data = await ffmpeg.readFile("out.webm");
  return new Blob([data as Uint8Array], { type: "video/webm" });
}

// Helper to normalize paths
export const normPath = (p?: string | null) => p ? (p.startsWith("/") ? p : `/${p}`) : p;
