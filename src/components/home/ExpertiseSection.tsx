"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteppedFrame } from "@/components/ui/SteppedFrame";

export function ExpertiseSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = services[activeServiceIndex];

  return (
    <section className="bg-[#0C101F] border-b border-white/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Comprehensive Contracting Scope"
          headline="Every trade. One coordinated standard."
          description="From rough-in conduiting and substrate punning to precision marble vein matching and final snag clearance—executed by synchronized teams under single-point engineering leadership."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Rows */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {services.map((svc, index) => {
              const isActive = index === activeServiceIndex;

              return (
                <div
                  key={svc.slug}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`group transition-all duration-200 ${
                    isActive
                      ? "bg-white/[0.06] border-l-2 border-brand-amber pl-2 sm:pl-3"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-mono text-sm font-bold shrink-0 pt-0.5 ${
                          isActive ? "text-brand-amber" : "text-brand-lavender"
                        }`}
                      >
                        {svc.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-amber transition-colors">
                          <Link
                            href={`/expertise/${svc.slug}`}
                            className="focus:outline-none focus:underline"
                          >
                            {svc.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                          {svc.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 sm:self-center flex items-center gap-2 pl-9 sm:pl-0">
                      <Link
                        href={`/expertise/${svc.slug}`}
                        className={`text-xs font-semibold px-3 py-1.5 border transition-all inline-flex items-center gap-1 min-h-[36px] ${
                          isActive
                            ? "bg-brand-amber text-[#0A0D17] border-brand-amber font-bold shadow-[0_0_10px_rgba(228,159,67,0.3)]"
                            : "border-white/15 text-slate-200 hover:border-white/40 hover:text-white bg-white/[0.02]"
                        }`}
                        aria-label={`Explore scope for ${svc.title}`}
                      >
                        <span>Explore Scope</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Relevant Desktop Image Panel */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            <SteppedFrame amberAccent={true} gridOverlay={true}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0D17]">
                <Image
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fill
                  sizes="500px"
                  className="object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Live contextual badge for current hovered service */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0E1324]/95 backdrop-blur-md border border-white/15 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-amber">
                      TRADE {activeService.number}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-brand-lavender font-mono">
                      Architectural Standard
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm mt-1">
                    {activeService.title}
                  </h4>
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                    {activeService.scope.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-amber font-bold">✓</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono">
                      Strict tolerance inspection
                    </span>
                    <Link
                      href={`/expertise/${activeService.slug}`}
                      className="text-brand-amber font-bold hover:underline"
                    >
                      Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            </SteppedFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
