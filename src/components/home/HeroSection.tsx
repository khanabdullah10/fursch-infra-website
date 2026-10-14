import React from "react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { InteractiveArchitecturalGraph } from "@/components/ui/InteractiveArchitecturalGraph";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#090C15] border-b border-white/10 pt-2 sm:pt-3 pb-12 sm:pb-16 lg:pb-20">
      {/* Interactive Architectural Canvas Graph */}
      <InteractiveArchitecturalGraph className="opacity-80" />

      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 ambient-glow-indigo pointer-events-none -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 ambient-glow-amber pointer-events-none translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek architectural status HUD bar directly under header */}
        <div className="flex items-center justify-between py-1.5 mb-3 sm:mb-4 border-b border-white/10 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
            <span className="text-slate-300 font-semibold tracking-wider">
              COORDINATED SITE EXECUTION
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-500">
            <span>GRID: 19.0760°N / 72.8777°E (MUMBAI)</span>
            <span>•</span>
            <span className="text-brand-amber font-semibold">TOLERANCE: ±0.5mm</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Confident Editorial Typography */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Secondary brand line badge from portfolio */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/15 text-xs font-semibold text-brand-amber tracking-wider uppercase backdrop-blur-md shadow-xs">
              <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
              <span>{company.secondaryTagline}</span>
            </div>

            {/* Exact Master Prompt Eyebrow */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-lavender">
              TURNKEY CONTRACTING &amp; ARCHITECTURAL FINISHING
            </div>

            {/* Exact Master Prompt Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-2xl">
              Engineered with precision.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber via-amber-300 to-brand-amber">
                Finished with distinction.
              </span>
            </h1>

            {/* Exact Master Prompt Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Coordinated execution, skilled workmanship and attention to every finish — across residential, commercial, hospitality and infrastructure projects.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="primary" size="lg">
                Explore Our Work
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your Project
              </Button>
            </div>

            {/* Architectural Trust Indicators (Strictly verified portfolio facts) */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xs">
                <span className="block text-[11px] uppercase tracking-wider text-brand-amber font-bold font-mono">
                  Sectors
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  Residential to Metro
                </span>
              </div>
              <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xs">
                <span className="block text-[11px] uppercase tracking-wider text-brand-amber font-bold font-mono">
                  Accountability
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  Single-Point Turnkey
                </span>
              </div>
              <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-xs">
                <span className="block text-[11px] uppercase tracking-wider text-brand-amber font-bold font-mono">
                  Supervision
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">
                  Engineers &amp; Leads
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Stepped Architectural Frame with glowing detail */}
          <div className="lg:col-span-5 relative">
            {/* Modular F Geometry Decorative backdrop */}
            <div
              className="absolute -top-3 -right-3 w-36 h-36 bg-brand-indigo/30 blur-2xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-amber/20 blur-2xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Stepped Frame Container */}
            <div className="relative p-2 sm:p-2.5 bg-[#101528] border border-white/15 shadow-2xl backdrop-blur-sm">
              {/* Stepped Corner Markings */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-amber" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-amber" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-amber" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-amber" />

              {/* Small Amber Square derived from F symbol */}
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-brand-amber shadow-[0_0_10px_#E49F43] z-20 pointer-events-none"
                aria-hidden="true"
                title="Modular geometric detail"
              />

              {/* Master Execution Image: Verified Authentic Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0A0D17]">
                <Image
                  src="/images/projects/residential-highrise.jpg"
                  alt="Turnkey architectural finishing and residential execution by Fursch Infra"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Stepped architectural label badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0C1124]/90 backdrop-blur-md border border-white/15 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white uppercase tracking-wider">
                      Turnkey Fit-Outs &amp; Finishing
                    </span>
                    <span className="text-[10px] text-brand-amber font-mono font-bold">
                      VERIFIED REF
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 truncate">
                    Precision engineering from drawing review to final detailing
                  </p>
                </div>
              </div>

              {/* Secondary architectural inset thumbnail */}
              <div className="flex items-center gap-3 mt-2.5 pt-2.5 border-t border-white/10 px-1">
                <div className="relative w-11 h-11 shrink-0 border border-white/20 overflow-hidden">
                  <Image
                    src="/images/projects/marble-mouldings-finish.jpg"
                    alt="Marble finishing detail"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <span className="font-semibold text-white block">
                    Architectural Marble &amp; Mouldings
                  </span>
                  <Link
                    href="/expertise/marble-stone-tile-flooring"
                    className="text-brand-amber hover:text-white font-medium underline transition-colors"
                  >
                    View finishing scope →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
