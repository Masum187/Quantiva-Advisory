"use client";
import { useEffect, useRef } from "react";

type Props = {
  /** z.B. "/videos/hero.mp4" (unter /public/videos) oder absolute Cloudinary-URL */
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
};

export default function ClientVideo({
  src,
  poster,
  className,
  loop = true,
  muted = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // iOS/Chrome Autoplay: muted + playsInline MUSS gesetzt sein
    v.muted = true;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Fallback: Erst bei Nutzerinteraktion abspielen
        const onPointer = () => {
          v.play().catch(() => {});
          window.removeEventListener("pointerdown", onPointer);
        };
        window.addEventListener("pointerdown", onPointer, { once: true });
      }
    };
    tryPlay();
  }, []);

  // iOS/Autoplay-Edgecases abfedern
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      playsInline
      muted={muted}
      loop={loop}
      autoPlay
      preload="auto"
      // Bei externen Hosts (Cloudinary) hilft das oft:
      crossOrigin="anonymous"
    />
  );
}
