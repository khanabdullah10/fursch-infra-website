import React from "react";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { company } from "@/data/company";
import { ProjectFilterGrid } from "@/components/projects/ProjectFilterGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects & Portfolio References — Residential, Metro & Hospitality",
  description:
    "Review Fursch Infra LLP’s execution portfolio across Mumbai Metro Line 3, DLF Grove, Swastik Onyx, Swastik Coral, Central Park Flower Valley, and five-star hospitality landmarks.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber font-mono">
              <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
              <span>Documented Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Execution Across Landmark Developments
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Every project represents specific architectural and engineering demands met with coordinated trade execution. Documented case studies and portfolio references are cataloged accurately from official company records.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={company.contact.portfolioPdfPath}
              download="FURSCH_INFRA_LLP_Portfolio.pdf"
              variant="outline"
              size="md"
            >
              Download PDF Portfolio (2.4 MB) ↓
            </Button>
          </div>
        </div>

        {/* Filterable Projects Grid */}
        <ProjectFilterGrid projects={projects} />

        {/* Closing Information Callout */}
        <div className="p-6 sm:p-8 bg-[#0F1426] border border-white/10 text-xs text-slate-400 leading-relaxed rounded-xs shadow-xl">
          <span className="font-bold text-brand-amber uppercase tracking-wider block mb-1 font-mono">
            Publishing Note &amp; Project Attribution Policy:
          </span>
          <p>
            In accordance with engineering integrity standards, Fursch Infra LLP publishes detailed project scope and photographic evidence exclusively for projects where documented records are verified. Unlabeled photography is never assigned to projects by estimation. For confidential client projects or additional tender documentation, contact our project desk at{" "}
            <a
              href={`mailto:${company.contact.email}`}
              className="text-brand-amber underline font-medium"
            >
              {company.contact.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
