"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
}

export function InteractiveArchitecturalGraph({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 180,
      active: false,
    };

    // Responsive handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initNodes();
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Architectural grid labels
    const technicalLabels = [
      "AXIS A-01",
      "ELEV +14.2m",
      "BEAM-04",
      "GRID 12-X",
      "TOL ±0.5mm",
      "BKC-STN",
      "CAD REF",
      "LEVEL 00",
    ];

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.max(16, Math.floor((width * height) / 38000));
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 1.2,
          label: i < technicalLabels.length ? technicalLabels[i] : undefined,
        });
      }
    };

    initNodes();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle architectural coordinate grid lines
      const gridSize = 48;
      ctx.strokeStyle = "rgba(142, 151, 203, 0.04)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Subtle dynamic coordinate crosshairs at grid intersections near mouse
      if (mouse.active) {
        const snappedX = Math.round(mouse.x / gridSize) * gridSize;
        const snappedY = Math.round(mouse.y / gridSize) * gridSize;
        ctx.strokeStyle = "rgba(228, 159, 67, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(snappedX - 12, snappedY);
        ctx.lineTo(snappedX + 12, snappedY);
        ctx.moveTo(snappedX, snappedY - 12);
        ctx.lineTo(snappedX, snappedY + 12);
        ctx.stroke();

        // Coordinate text
        ctx.fillStyle = "rgba(228, 159, 67, 0.5)";
        ctx.font = "9px ui-monospace, monospace";
        ctx.fillText(`[X:${snappedX} Y:${snappedY}]`, snappedX + 6, snappedY - 6);
      }

      // 2. Connect nodes with architectural beam lines
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move nodes gently
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Interaction with mouse
        if (mouse.active) {
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const dist = Math.sqrt(dx * dy + dy * dy);
          if (dist < mouse.radius) {
            // Draw interactive beam from cursor to node
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(228, 159, 67, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(a.x, a.y);
            ctx.stroke();

            // Slight gentle gravitational pull towards mouse
            a.x += dx * 0.008;
            a.y += dy * 0.008;
          }
        }

        // Inter-node connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.18;
            ctx.strokeStyle = `rgba(142, 151, 203, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Draw node points
        ctx.fillStyle = a.label
          ? "rgba(228, 159, 67, 0.75)"
          : "rgba(142, 151, 203, 0.5)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw precision tick around labeled nodes
        if (a.label) {
          ctx.strokeStyle = "rgba(142, 151, 203, 0.25)";
          ctx.lineWidth = 0.7;
          ctx.strokeRect(a.x - 3, a.y - 3, 6, 6);

          ctx.fillStyle = "rgba(142, 151, 203, 0.4)";
          ctx.font = "8px ui-monospace, monospace";
          ctx.fillText(a.label, a.x + 6, a.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}
