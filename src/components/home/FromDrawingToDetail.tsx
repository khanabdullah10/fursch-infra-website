"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Register ScrollTrigger once safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stages = [
  {
    step: "01",
    label: "Stage 01",
    shortLabel: "01 Drawing Review",
    title: "Drawing Review & Technical Analysis",
    description:
      "Every project begins with rigorous technical analysis of architectural drawings and structural specifications. Our engineers dissect joint conditions, MEP clearances, and material interfaces to eliminate clashes before physical work commences.",
    image: "/images/capabilities/drawing-review.jpg",
    imageAlt: "Site engineers reviewing architectural drawings and blueprints on site",
    technicalNote: "PRE-CONSTRUCTION DIMENSIONAL AUDITS & CLASH ANALYSIS",
  },
  {
    step: "02",
    label: "Stage 02",
    shortLabel: "02 Coordinated Execution",
    title: "Coordinated Execution & Front Management",
    description:
      "Site execution is synchronized under dedicated engineering supervision. Wet trades (flooring, punning, plastering) and dry trades (conduiting, false ceiling frames) advance in planned sequences with active work-front availability.",
    image: "/images/capabilities/site-engineering.jpg",
    imageAlt: "Civil engineers and finishing supervisors coordinating site work fronts",
    technicalNote: "MULTI-TRADE SYNCHRONISATION & FRONT MANAGEMENT",
  },
  {
    step: "03",
    label: "Stage 03",
    shortLabel: "03 Final Finishing",
    title: "Final Architectural Finishing & Handover",
    description:
      "Craftsmanship culminates in exacting finish detailing. Natural stone vein alignment, acoustic ceiling planes, razor-sharp wall punning, and zero-defect handover ensure the completed structure mirrors original architectural intent.",
    image: "/images/projects/marble-mouldings-finish.jpg",
    imageAlt: "Completed architectural marble wall mouldings and luxury finishing",
    technicalNote: "SUB-MILLIMETER TOLERANCE CHECKS & SNAG-FREE HANDOVER",
  },
];

export function FromDrawingToDetail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [isDesktopMotion, setIsDesktopMotion] = useState(false);

  useEffect(() => {
    const checkMotionSupport = () => {
      // Pinned sequence only on wide displays AND tall displays (>=780px viewport height)
      // This prevents laptop screens (1366x768, 1080p with display scaling) from cutting off against the Windows taskbar
      const isLargeScreen = window.innerWidth >= 1024;
      const isTallViewport = window.innerHeight >= 780;
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setIsDesktopMotion(isLargeScreen && isTallViewport && !isCoarse && !prefersReduced);
    };

    checkMotionSupport();
    window.addEventListener("resize", checkMotionSupport);
    return () => window.removeEventListener("resize", checkMotionSupport);
  }, []);

  useGSAP(
    () => {
      if (!isDesktopMotion || !containerRef.current || !pinTargetRef.current) return;

      const totalStages = stages.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",
          pin: pinTargetRef.current,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            const current = Math.min(
              totalStages - 1,
              Math.floor(progress * totalStages)
            );
            setActiveStage(current);
          },
        },
      });

      tl.to(".stage-panel-0", { opacity: 0, scale: 0.98, duration: 0.4 }, 0.25);
      tl.to(".stage-panel-1", { opacity: 1, scale: 1, duration: 0.4 }, 0.3);

      tl.to(".stage-panel-1", { opacity: 0, scale: 0.98, duration: 0.4 }, 0.65);
      tl.to(".stage-panel-2", { opacity: 1, scale: 1, duration: 0.4 }, 0.7);

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { dependencies: [isDesktopMotion], scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#090C15] border-b border-white/10 overflow-hidden"
    >
      {/* Blueprint grid texture */}
      <div
        className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      {/* DESKTOP PINNED SEQUENCE (Only on tall screens >= 780px) */}
      {isDesktopMotion ? (
        <div
          ref={pinTargetRef}
          className="h-screen max-h-[920px] flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6"
        >
          {/* Section Header */}
          <div className="shrink-0">
            <SectionHeading
              eyebrow="Signature Execution Methodology"
              headline="From drawing to detail."
              description="A disciplined three-stage progression bridging initial architectural drawings, synchronized site execution, and uncompromised finish quality."
            />

            {/* Architectural Timeline Track */}
            <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-3 max-w-2xl">
              <div className="flex items-center gap-6">
                {stages.map((stage, idx) => (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`flex items-center gap-2 text-xs font-mono transition-all text-left ${
                      activeStage === idx
                        ? "text-brand-amber font-bold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-2xs ${
                        activeStage === idx
                          ? "bg-brand-amber shadow-[0_0_8px_#E49F43]"
                          : "bg-white/20"
                      }`}
                    />
                    <span>{stage.shortLabel}</span>
                  </button>
                ))}
              </div>

              {/* Step indicator */}
              <div className="text-[11px] font-mono text-brand-amber font-bold">
                STAGE {activeStage + 1} / 3
              </div>
            </div>
          </div>

          {/* Interactive Stage Visualization Stage */}
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Column: Stage Captions */}
            <div className="col-span-5 relative min-h-[180px]">
              {stages.map((stage, idx) => (
                <div
                  key={stage.step}
                  className={`transition-all duration-300 ${
                    activeStage === idx
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 -translate-y-2 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className="inline-block font-mono text-[10px] font-bold text-brand-amber uppercase tracking-widest mb-1.5">
                    {stage.technicalNote}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Architectural Windows with strict height cap */}
            <div className="col-span-7 relative">
              <div className="relative aspect-[16/10] max-h-[340px] sm:max-h-[360px] w-full bg-[#101528] p-2 border border-white/15 shadow-2xl rounded-xs">
                {stages.map((stage, idx) => (
                  <div
                    key={stage.step}
                    className={`stage-panel-${idx} absolute inset-2 overflow-hidden ${
                      idx === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      sizes="600px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 text-white text-xs font-mono">
                      <span className="text-brand-amber font-bold">[{stage.step}]</span> {stage.title}
                    </div>
                  </div>
                ))}

                {/* Decorative architectural ruler corner */}
                <div className="absolute top-1 right-1 text-[10px] font-mono text-brand-amber/80">
                  +1.00m REF
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle status */}
          <div className="shrink-0 text-center text-xs text-slate-500 font-mono">
            Scroll to advance through execution milestones ↓
          </div>
        </div>
      ) : (
        /* ACCESSIBLE STACKED VIEW FOR LAPTOPS, TABLETS & MOBILE */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <SectionHeading
            eyebrow="Signature Execution Methodology"
            headline="From drawing to detail."
            description="A disciplined three-stage progression bridging initial architectural drawings, synchronized site execution, and uncompromised finish quality."
            className="mb-10"
          />

          <div className="space-y-6">
            {stages.map((stage) => (
              <div
                key={stage.step}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 sm:p-6 bg-[#0F1426] border border-white/10 shadow-xl rounded-xs hover:border-brand-amber/40 transition-colors"
              >
                <div className="md:col-span-6 relative aspect-[16/10] max-h-[300px] overflow-hidden bg-[#0A0D17] border border-white/10 rounded-xs">
                  <Image
                    src={stage.image}
                    alt={stage.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/85 text-brand-amber text-[10px] font-mono border border-white/10">
                    {stage.label}
                  </div>
                </div>

                <div className="md:col-span-6 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-amber font-bold block">
                    {stage.technicalNote}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
