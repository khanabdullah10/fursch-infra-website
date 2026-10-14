import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — Engineering Precision & Execution Philosophy",
  description:
    "Learn about Fursch Infra LLP’s execution philosophy, experienced civil engineers, finishing supervisors, and integrated trade coordination.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber font-mono">
            <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
            <span>Company &amp; Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Bridging Architectural Vision &amp; On-Site Construction Reality.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Real Team Showcase with authentic photo from Page 13 */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-brand-amber uppercase tracking-wider">
                Documented Field Leadership
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                The People Behind the Precision
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:block">
              Photographed on site at Kotak-BKC Station
            </span>
          </div>

          <SteppedFrame amberAccent={true} gridOverlay={false}>
            <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-[#0A0D17]">
              <Image
                src="/images/team/team-bkc-station.jpg"
                alt="Fursch Infra LLP engineering leadership, supervisors, and on-site workforce at Kotak-BKC Station"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0C1124]/95 backdrop-blur-md border border-white/15 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-white text-sm block">
                    Fursch Infra LLP Engineering &amp; Finishing Team
                  </span>
                  <span className="text-slate-300">
                    Concourse execution milestone at Mumbai Metro Line 3 (Kotak-BKC Station)
                  </span>
                </div>
                <span className="font-mono text-[10px] text-brand-amber uppercase tracking-wider">
                  Verified Team Photograph (Portfolio Page 13)
                </span>
              </div>
            </div>
          </SteppedFrame>
        </section>

        {/* Execution Philosophy & Core Strengths Grid */}
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Execution Philosophy"
            headline="Technical Rigour. Coordinated Standards."
            description="We believe that superior architectural finishing is an engineering discipline—not merely an aesthetic choice. Our methodology is rooted in six core execution principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {company.strengths.map((str, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0F1426] border border-white/10 hover:border-brand-amber/50 hover:bg-[#131A33] transition-all shadow-xl rounded-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-amber">
                    0{idx + 1}
                  </span>
                  <div className="w-2 h-2 bg-brand-amber/40 rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {str.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {str.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Analysis & Wastage Reduction Deep Dive */}
        <section className="p-8 sm:p-12 bg-[#0F1426] border border-white/10 space-y-8 rounded-xs shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block mb-2 font-mono">
              Resource Efficiency
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Drawing Analysis &amp; Material-Wastage Reduction
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">
                Drawing Analysis &amp; Front Management
              </h3>
              <p>
                Before mobilizing crews, our civil engineers conduct an exhaustive review of architectural working drawings, structural details, and MEP schemas. By identifying dimensional discrepancies and service interface clashes early, we prevent costly site abortive work.
              </p>
              <p>
                Strategic front availability planning ensures each allied trade—from rough-in conduiting to false ceiling framing—has an unobstructed, cleanly prepared workspace, eliminating trade conflicts.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-white">
                Wastage Reduction &amp; Sourcing Discipline
              </h3>
              <p>
                Stone, tile, and premium gypsum boards represent significant project expenditure. We formulate precision cut schedules and dry-run layouts to optimize yield from natural stone slabs and board materials.
              </p>
              <p>
                Disciplined handling, calibrated mortar batching, and moisture testing keep material wastage strictly curtailed, delivering cost efficiencies to developers while maintaining environmental responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="p-8 sm:p-12 bg-[#121830] border border-white/15 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-xs shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber block font-mono">
              Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to collaborate on your next landmark?
            </h2>
            <p className="text-sm text-slate-300">
              Review our documented service scope or speak directly with our engineering desk.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button href="/expertise" variant="primary" size="md">
              Explore Our Expertise
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Discuss Your Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
