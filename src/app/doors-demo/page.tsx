import React from "react";
import type { Metadata } from "next";
import { HeroDoorsScroll } from "@/components/home/HeroDoorsScroll";

export const metadata: Metadata = {
  title: "Architectural Doors Scroll Sequence | Fursch Infra LLP",
  description: "High-precision cinematic canvas doors scroll animation showcasing turnkey architectural finishing and engineering execution.",
};

export default function DoorsDemoPage() {
  return (
    <main className="min-h-screen bg-[#090C15]">
      {/* 1. Signature Architectural Canvas Doors Scroll Animation */}
      <HeroDoorsScroll />

      {/* 2. Demonstration of continuity below the hero */}
      <section className="relative z-20 py-24 bg-[#0F1424] border-t border-white/10 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-amber">
            SCROLL SEQUENCE COMPLETE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">
            Seamless Continuity Into Project Delivery
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            As soon as the visitor scrolls through the viewport track, the sticky frame unpins
            fluidly into our client credentials, core contracting expertise, and active site portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}
