import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteppedFrame } from "@/components/ui/SteppedFrame";

export function SectorsSection() {
  return (
    <section className="bg-[#090C15] border-b border-white/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Specialised Work Fronts"
            headline="Tailored Execution Across Four Sectors"
            description="Every sector imposes unique physical demands, footfall dynamics, and tolerance parameters. We adapt our field coordination to suit each environment."
          />
          <div className="shrink-0">
            <Link
              href="/sectors"
              className="text-xs font-bold uppercase tracking-wider text-brand-amber hover:text-white flex items-center gap-1.5 transition-colors font-mono"
            >
              <span>Explore All Sector Specs</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 4 Distinct Image-Led Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={sec.slug}
              className="bg-[#0F1426] border border-white/10 hover:border-brand-amber/50 hover:bg-[#131A33] transition-all duration-300 flex flex-col justify-between group shadow-xl rounded-xs"
            >
              <div>
                <SteppedFrame amberAccent={idx === 3} className="border-0 p-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0D17]">
                    <Image
                      src={sec.image}
                      alt={sec.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 text-white">
                      <span className="text-[10px] font-mono text-brand-amber block uppercase tracking-wider">
                        Sector 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-bold">
                        {sec.title}
                      </h3>
                    </div>
                  </div>
                </SteppedFrame>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sec.tagline}
                  </p>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[11px] font-bold text-brand-lavender uppercase tracking-wider block mb-1.5 font-mono">
                      Execution Requirements
                    </span>
                    <ul className="space-y-1 text-xs text-slate-400">
                      {sec.executionRequirements.slice(0, 2).map((req, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-brand-amber font-bold">›</span>
                          <span className="line-clamp-2">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href="/sectors"
                  className="block text-center py-2 text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-brand-amber hover:text-[#0A0D17] hover:border-brand-amber transition-all"
                >
                  View Sector Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
