import React from "react";
import Image from "next/image";
import Link from "next/link";
import { verifiedCaseStudies, projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";

export function ProjectsGallerySection() {
  const featuredProjects = verifiedCaseStudies.slice(0, 3);

  const residentialRefs = projects.filter((p) => p.sector === "residential");
  const infraRefs = projects.filter((p) => p.sector === "infrastructure");
  const hospitalityRefs = projects.filter((p) => p.sector === "hospitality");

  return (
    <section className="bg-[#090C15] border-b border-white/10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Verified Execution"
            headline="Selected Work &amp; Project References"
            description="Verified execution highlights across mass transit infrastructure and premium residential developments, supported by comprehensive trade coordination."
          />
          <div className="shrink-0">
            <Button href="/projects" variant="outline" size="md">
              View All Project References →
            </Button>
          </div>
        </div>

        {/* Generous Image Cards for 3 Strong Verified Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between bg-[#0F1426] border border-white/10 hover:border-brand-amber/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(228,159,67,0.15)] rounded-xs"
            >
              <div>
                <SteppedFrame amberAccent={idx === 0} className="border-0 p-0">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#0A0D17]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10">
                      {project.sectorLabel.split("&")[0].trim()}
                    </div>
                  </div>
                </SteppedFrame>

                <div className="p-6">
                  {project.client && (
                    <div className="text-xs text-brand-amber font-mono font-bold uppercase tracking-wider mb-1">
                      {project.client}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-amber transition-colors">
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                      {project.title}
                    </Link>
                  </h3>
                  {project.location && (
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-mono">
                      <span>📍</span>
                      <span>{project.location}</span>
                    </div>
                  )}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.executionSummary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-amber group-hover:text-white group-hover:underline flex items-center gap-1">
                  View Case Study
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  REF 0{idx + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Restrained Text List of All Documented Portfolio References */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-2xl mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-amber font-mono">
              Complete Portfolio References by Sector
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Accurately cataloged from the official company portfolio. Scopes and specific details are published exclusively where verified documentation exists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Residential */}
            <div className="p-5 bg-[#0F1426] border border-white/10 rounded-xs">
              <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-3 pb-2 border-b border-white/10 font-mono">
                Residential Developments
              </span>
              <ul className="space-y-2 text-slate-200">
                {residentialRefs.map((r) => (
                  <li key={r.slug} className="flex items-start justify-between text-xs sm:text-sm">
                    <span className="font-medium">{r.title}</span>
                    {r.hasVerifiedCaseStudy ? (
                      <Link
                        href={`/projects/${r.slug}`}
                        className="text-brand-amber font-semibold hover:underline text-xs"
                      >
                        Case Study →
                      </Link>
                    ) : (
                      <span className="text-[10px] text-slate-500 font-mono">Ref</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure */}
            <div className="p-5 bg-[#0F1426] border border-white/10 rounded-xs">
              <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-3 pb-2 border-b border-white/10 font-mono">
                Infrastructure &amp; Mass Transit
              </span>
              <ul className="space-y-2 text-slate-200">
                {infraRefs.map((r) => (
                  <li key={r.slug} className="flex items-start justify-between text-xs sm:text-sm">
                    <span className="font-medium">{r.title}</span>
                    {r.hasVerifiedCaseStudy ? (
                      <Link
                        href={`/projects/${r.slug}`}
                        className="text-brand-amber font-semibold hover:underline text-xs"
                      >
                        Case Study →
                      </Link>
                    ) : (
                      <span className="text-[10px] text-slate-500 font-mono">Ref</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospitality */}
            <div className="p-5 bg-[#0F1426] border border-white/10 rounded-xs">
              <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block mb-3 pb-2 border-b border-white/10 font-mono">
                Hospitality &amp; Leisure
              </span>
              <ul className="space-y-2 text-slate-200">
                {hospitalityRefs.map((r) => (
                  <li key={r.slug} className="flex items-start justify-between text-xs sm:text-sm">
                    <span className="font-medium">{r.title}</span>
                    <span className="text-[10px] text-slate-500 font-mono">Ref</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
