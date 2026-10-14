import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { sectors } from "@/data/sectors";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sectors — Residential, Commercial, Hospitality & Infrastructure",
  description:
    "Explore Fursch Infra LLP’s turnkey contracting and architectural finishing across luxury residential, commercial offices, five-star hospitality, and mass-transit metro infrastructure.",
};

export default function SectorsPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber font-mono">
            <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
            <span>Sector Specialisation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Diverse Portfolio. Consistent Precision.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Fursch Infra LLP delivers specialized architectural finishing across four core sectors. Each project environment demands tailored methodologies—from acoustic serenity in luxury residences to heavy-traffic resilience in underground metro concourses.
          </p>
        </div>

        {/* 4 Sectors Deep Dive */}
        <div className="space-y-14">
          {sectors.map((sector, idx) => (
            <section
              key={sector.slug}
              id={sector.slug}
              className="scroll-mt-24 p-6 sm:p-10 bg-[#0F1426] border border-white/10 shadow-2xl space-y-8 rounded-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text column */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-amber">
                    <span>SECTOR 0{idx + 1}</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-brand-lavender">FIELD SPECIFICATIONS</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {sector.title}
                  </h2>

                  <p className="text-sm sm:text-base font-medium text-brand-amber leading-snug">
                    {sector.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Image column */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <SteppedFrame amberAccent={idx % 2 === 0}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D17]">
                      <Image
                        src={sector.image}
                        alt={sector.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover"
                      />
                    </div>
                  </SteppedFrame>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {/* Execution Requirements */}
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2 rounded-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender block font-mono">
                    Execution Requirements
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {sector.executionRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-amber font-bold">›</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges Addressed */}
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2 rounded-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender block font-mono">
                    Key Challenges Solved
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {sector.keyChallengesAddressed.map((chal, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-amber font-bold">▪</span>
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Portfolio Project References */}
                <div className="p-4 bg-white/[0.02] border border-white/5 space-y-2 rounded-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                    Documented Project References
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200 leading-relaxed font-medium">
                    {sector.portfolioProjects.map((proj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-amber font-bold">✓</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/projects"
                      className="text-xs font-semibold text-brand-amber hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore case studies</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="p-8 sm:p-12 bg-[#0F1426] border border-white/10 text-center space-y-4 max-w-3xl mx-auto rounded-xs shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Planning a Multi-Sector or Complex Development?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our experienced civil engineers and finishing supervisors will analyze your architectural working drawings and milestone dates.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              Discuss Sector Requirements →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
