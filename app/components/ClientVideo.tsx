"use client";
import { useEffect, useRef } from "react";

type Props = {
  /** z.B. "/videos/hero.mp4" (unter /public/videos) oder absolute Cloudinary-URL */
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  /** Automatisches Abspielen beim Scrollen (Intersection Observer) */
  playOnScroll?: boolean;
};

export default function ClientVideo({
  src,
  poster,
  className,
  loop = true,
  muted = true,
  playOnScroll = true,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer für Scroll-basiertes Abspielen
  useEffect(() => {
    if (!playOnScroll) return;

    const video = ref.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video ist sichtbar - abspielen
            video.play().catch((err) => {
              console.log("Autoplay prevented:", err);
            });
          } else {
            // Video ist nicht sichtbar - pausieren (spart Ressourcen)
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Video muss zu 50% sichtbar sein
        rootMargin: "0px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [playOnScroll]);

  // Initiales Abspielen (falls nicht playOnScroll)
  useEffect(() => {
    if (playOnScroll) return; // Überspringen wenn playOnScroll aktiv ist

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
  }, [playOnScroll]);

  // iOS/Autoplay-Edgecases abfedern
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onVisibility = () => {
      if (document.visibilityState === "visible" && playOnScroll) {
        // Nur abspielen wenn Video sichtbar ist (Intersection Observer prüft das)
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            v.play().catch(() => {});
          }
        }
      } else if (document.visibilityState === "visible" && !playOnScroll) {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playOnScroll]);

  return (
    <div ref={containerRef} className={className || ""}>
      <video
        ref={ref}
        className="w-full h-full object-cover"
        src={src}
        poster={poster}
        playsInline
        muted={muted}
        loop={loop}
        autoPlay={!playOnScroll} // Nur autoPlay wenn playOnScroll deaktiviert ist
        preload="auto"
        // Bei externen Hosts (Cloudinary) hilft das oft:
        crossOrigin="anonymous"
      />
    </div>
  );
}
