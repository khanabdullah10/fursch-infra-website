"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem, SectorSlug } from "@/types";
import { SteppedFrame } from "@/components/ui/SteppedFrame";

interface ProjectFilterGridProps {
  projects: ProjectItem[];
}

export function ProjectFilterGrid({ projects }: ProjectFilterGridProps) {
  const [selectedSector, setSelectedSector] = useState<"all" | SectorSlug>("all");

  const filterTabs: { label: string; value: "all" | SectorSlug }[] = [
    { label: "All Projects", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Infrastructure", value: "infrastructure" },
    { label: "Hospitality", value: "hospitality" },
    { label: "Commercial", value: "commercial" },
  ];

  const filteredProjects =
    selectedSector === "all"
      ? projects
      : projects.filter((p) => p.sector === selectedSector);

  return (
    <div className="space-y-8">
      {/* Sector filter tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {filterTabs.map((tab) => {
          const isActive = selectedSector === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedSector(tab.value)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-150 min-h-[44px] rounded-xs font-mono ${
                isActive
                  ? "bg-brand-amber text-[#0A0D17] font-bold shadow-[0_0_15px_rgba(228,159,67,0.3)]"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.slug}
            className="flex flex-col justify-between bg-[#0F1426] border border-white/10 hover:border-brand-amber/50 hover:bg-[#131A33] transition-all duration-300 shadow-xl rounded-xs group"
          >
            <div>
              <SteppedFrame amberAccent={project.hasVerifiedCaseStudy} className="border-0 p-0">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0A0D17]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/80 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10">
                    {project.sectorLabel.split("&")[0].trim()}
                  </div>

                  {project.hasVerifiedCaseStudy && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-brand-amber text-[#0A0D17] text-[10px] font-bold font-mono uppercase tracking-wider shadow-[0_0_8px_#E49F43]">
                      CASE STUDY
                    </div>
                  )}
                </div>
              </SteppedFrame>

              <div className="p-6 space-y-2">
                {project.client && (
                  <span className="text-xs font-bold text-brand-amber uppercase tracking-wider block font-mono">
                    {project.client}
                  </span>
                )}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-amber transition-colors">
                  {project.hasVerifiedCaseStudy ? (
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                      {project.title}
                    </Link>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                {project.location && (
                  <div className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                )}
                <p className="text-sm text-slate-300 leading-relaxed pt-1 line-clamp-3">
                  {project.executionSummary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-2 border-t border-white/10 flex items-center justify-between">
              {project.hasVerifiedCaseStudy ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-brand-amber group-hover:underline flex items-center gap-1"
                >
                  <span>Read Full Case Study</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <span className="text-xs font-medium text-slate-500 font-mono">
                  Portfolio Listed Reference
                </span>
              )}

              <span className="text-[10px] font-mono text-slate-500">
                REF 0{idx + 1}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
