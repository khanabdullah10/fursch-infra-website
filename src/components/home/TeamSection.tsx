import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteppedFrame } from "@/components/ui/SteppedFrame";

export function TeamSection() {
  return (
    <section className="bg-[#0C101F] border-b border-white/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Full Authentic Team Photograph from Page 13 */}
          <div className="lg:col-span-7">
            <SteppedFrame amberAccent={true} gridOverlay={false}>
              <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-[#0A0D17]">
                <Image
                  src="/images/team/team-bkc-station.jpg"
                  alt="Fursch Infra engineering leadership and finishing workforce on site at Kotak-BKC Station"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                {/* Caption overlaid on team photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0C1124]/95 backdrop-blur-md border border-white/15 text-xs flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">
                      Fursch Infra On-Site Crew &amp; Engineering Supervisors
                    </span>
                    <span className="text-[11px] text-slate-300">
                      Photographed on site at Mumbai Metro Line 3 (Kotak-BKC Station)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-amber hidden sm:inline-block">
                    VERIFIED TEAM PHOTO
                  </span>
                </div>
              </div>
            </SteppedFrame>
          </div>

          {/* Right Column: Accurate, Modest Copy */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="On-Site Engineering Oversight"
              headline="The people behind the precision."
              description="Behind every flat plane, clean joint, and flawless finish are experienced civil engineers and dedicated finishing supervisors who guide our tradespeople on the ground."
            />

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Our teams bridge design drawings and physical construction. By maintaining on-site supervisors who oversee day-to-day tolerances, we ensure that plaster lines are plumb, tile joints are flush, and conduit chases do not undermine structural integrity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-[#0F1426] border border-white/10 rounded-xs">
                  <span className="text-xs font-bold text-brand-amber block mb-1 font-mono">
                    Material Checks
                  </span>
                  <span className="text-xs text-slate-400">
                    Testing stone batches, mortar mixes, and conduit ratings before installation.
                  </span>
                </div>

                <div className="p-3 bg-[#0F1426] border border-white/10 rounded-xs">
                  <span className="text-xs font-bold text-brand-amber block mb-1 font-mono">
                    Trade Coordination
                  </span>
                  <span className="text-xs text-slate-400">
                    Synchronizing MEP teams and finishing artisans to prevent re-work and damage.
                  </span>
                </div>

                <div className="p-3 bg-[#0F1426] border border-white/10 rounded-xs">
                  <span className="text-xs font-bold text-brand-amber block mb-1 font-mono">
                    Multi-Stage Audits
                  </span>
                  <span className="text-xs text-slate-400">
                    Inspecting substrate readiness before primer, paint, or marble fixing.
                  </span>
                </div>

                <div className="p-3 bg-[#0F1426] border border-white/10 rounded-xs">
                  <span className="text-xs font-bold text-brand-amber block mb-1 font-mono">
                    Wastage Reduction
                  </span>
                  <span className="text-xs text-slate-400">
                    Pre-planning cut schedules to optimize slab yields and limit site scrap.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-amber hover:text-white underline underline-offset-4 transition-colors font-mono"
              >
                <span>Read more about our team &amp; philosophy</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
