"use client";

import React, { useEffect, useRef, useState } from "react";

export interface HeroDoorsScrollProps {
  /** Base path for the 128-frame doors sequence. Defaults to /images/hero/doors */
  basePath?: string;
  /** Total frames in the sequence (000 to frameCount - 1). Defaults to 128 */
  frameCount?: number;
}

export function HeroDoorsScroll({
  basePath = "/images/hero/doors",
  frameCount = 118,
}: HeroDoorsScrollProps) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Accessibility: Detect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrefersReducedMotion(true);
      setIsInitialLoading(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!container || !canvas || !ctx) {
      return;
    }

    // 2. Select sequence folder: mobile ('m') vs desktop ('d') based on viewport aspect ratio
    const folder = window.innerWidth / window.innerHeight < 0.9 ? "m" : "d";
    const getFrameUrl = (idx: number) =>
      `${basePath}/${folder}/${String(idx).padStart(3, "0")}.webp`;

    // 3. Multi-pass Stratum Queue Generation [16, 8, 4, 2, 1]
    // Preloads keyframes first for instant, stutter-free scrubbing while remaining frames load
    const imageCache: (HTMLImageElement | null)[] = Array(frameCount).fill(null);
    const loadQueue: number[] = [];
    const seen = new Set<number>();

    for (const step of [16, 8, 4, 2, 1]) {
      for (let t = 0; t < frameCount; t += step) {
        if (!seen.has(t)) {
          seen.add(t);
          loadQueue.push(t);
        }
      }
    }
    // Ensure final opened-gate frame loads early
    if (!seen.has(frameCount - 1)) {
      loadQueue.splice(1, 0, frameCount - 1);
    }

    // 4. Concurrent Frame Loader (6 simultaneous streams)
    let queueIdx = 0;
    let isComponentActive = true;
    let needsRedraw = true;

    const fetchNextFrame = () => {
      if (!isComponentActive || queueIdx >= loadQueue.length) return;
      const targetFrame = loadQueue[queueIdx++];
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        imageCache[targetFrame] = img;
        needsRedraw = true;
        fetchNextFrame();
      };
      img.onerror = fetchNextFrame;
      img.src = getFrameUrl(targetFrame);
    };

    for (let i = 0; i < 6; i++) {
      fetchNextFrame();
    }

    // 5. Canvas Dimensions & Hardware-Accelerated Retina DPR Scaling
    let canvasWidth = 0;
    let canvasHeight = 0;

    const handleResize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvasWidth = canvas.clientWidth;
      canvasHeight = canvas.clientHeight;
      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(canvasHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      needsRedraw = true;
    };

    // 6. Nearest Neighbor Fallback Lookup (Instant frame rendering)
    const getNearestLoadedFrame = (frame: number): HTMLImageElement | null => {
      for (let offset = 0; offset < frameCount; offset++) {
        if (frame - offset >= 0 && imageCache[frame - offset]) {
          return imageCache[frame - offset];
        }
        if (frame + offset < frameCount && imageCache[frame + offset]) {
          return imageCache[frame + offset];
        }
      }
      return null;
    };

    // 7. Kinetic Lerp Render Loop (Buttery 60/120fps Gate Opening Motion)
    let currentLerpedFrame = 0;
    let lastRenderedFrame = -1;
    let rafId = 0;
    let isIntersecting = true;

    const updateFrame = () => {
      rafId = 0;
      if (!isComponentActive) return;

      const rect = container.getBoundingClientRect();
      const maxScrollDistance = Math.max(1, rect.height - window.innerHeight);
      const scrollProgress = Math.min(1, Math.max(0, -rect.top / maxScrollDistance));
      const targetFrame = (frameCount - 1) * scrollProgress;

      // 0.22 Lerp factor delivers authentic weighted kinetic inertia
      currentLerpedFrame += (targetFrame - currentLerpedFrame) * 0.22;
      if (Math.abs(targetFrame - currentLerpedFrame) < 0.02) {
        currentLerpedFrame = targetFrame;
      }

      const activeFrameIndex = Math.round(currentLerpedFrame);

      // Draw canvas when frame updates or canvas resizes
      if (activeFrameIndex !== lastRenderedFrame || needsRedraw) {
        const frameImage = getNearestLoadedFrame(activeFrameIndex);
        if (frameImage && frameImage.naturalWidth > 0 && canvasWidth > 0 && canvasHeight > 0) {
          // Object-fit: cover math
          const scale = Math.max(
            canvasWidth / frameImage.naturalWidth,
            canvasHeight / frameImage.naturalHeight
          );
          const drawWidth = frameImage.naturalWidth * scale;
          const drawHeight = frameImage.naturalHeight * scale;
          const drawX = (canvasWidth - drawWidth) / 2;
          const drawY = (canvasHeight - drawHeight) / 2;

          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.drawImage(frameImage, drawX, drawY, drawWidth, drawHeight);
          lastRenderedFrame = activeFrameIndex;
          needsRedraw = false;
          setIsInitialLoading(false);
        }
      }

      // Continue animation frame while lerping to rest
      if (
        isIntersecting &&
        (Math.abs(targetFrame - currentLerpedFrame) > 0.01 || needsRedraw)
      ) {
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    const triggerRender = () => {
      if (!rafId && isIntersecting) {
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    // 8. Lifecycle Observers & Event Listeners
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      triggerRender();
    });
    intersectionObserver.observe(container);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
      triggerRender();
    });
    resizeObserver.observe(canvas);

    window.addEventListener("scroll", triggerRender, { passive: true });
    handleResize();
    triggerRender();

    const heartbeatTimer = window.setInterval(() => {
      if (needsRedraw) triggerRender();
    }, 120);

    return () => {
      isComponentActive = false;
      cancelAnimationFrame(rafId);
      clearInterval(heartbeatTimer);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", triggerRender);
    };
  }, [basePath, frameCount]);

  // Reduced motion accessible fallback
  if (prefersReducedMotion) {
    return (
      <section className="relative h-[100svh] overflow-hidden bg-[#090C15]">
        <picture className="absolute inset-0 h-full w-full">
          <source media="(max-aspect-ratio: 9/10)" srcSet={`${basePath}/m/000.webp`} />
          <img
            src={`${basePath}/d/000.webp`}
            alt="Architectural Entrance"
            className="h-full w-full object-cover"
          />
        </picture>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[240vh] bg-[#090C15] md:h-[320vh]"
      aria-label="Architectural Gate Opening Scroll Sequence"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Instant static poster while first frame initializes */}
        {isInitialLoading && (
          <picture className="absolute inset-0 h-full w-full">
            <source media="(max-aspect-ratio: 9/10)" srcSet={`${basePath}/m/000.webp`} />
            <img
              src={`${basePath}/d/000.webp`}
              alt="Architectural Entrance"
              className="h-full w-full object-cover"
            />
          </picture>
        )}

        {/* 100% Clean, Sharp 60/120fps Hardware-Accelerated Canvas (Zero text overlays) */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />

        {/* Seamless bottom fade transitioning into the graph section below */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090C15] via-[#090C15]/70 to-transparent"
        />
      </div>
    </section>
  );
}

export default HeroDoorsScroll;
