import React from "react";
import { deliveryStages } from "@/data/deliverySteps";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DeliveryApproachSection() {
  return (
    <section
      id="delivery-approach"
      className="bg-[#0C101F] border-b border-white/10 py-16 lg:py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Single-Point Responsibility"
          headline="One partner. Clear accountability."
          description="A systematic six-stage delivery narrative derived from our contracting portfolio—transforming complex multi-trade execution into a predictable, coordinated workflow."
          className="mb-14"
        />

        {/* 6 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {deliveryStages.map((stage) => (
            <div
              key={stage.step}
              className="relative p-6 sm:p-7 bg-[#0F1426] border border-white/10 hover:border-brand-amber/50 hover:bg-[#131A33] transition-all duration-300 flex flex-col justify-between group shadow-xl rounded-xs"
            >
              {/* Stepped corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-brand-amber transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-brand-amber tracking-widest">
                    STAGE {stage.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-slate-400">
                    {stage.portfolioName}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-amber transition-colors mb-2">
                  {stage.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Documented Key Actions */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-lavender block font-mono">
                  Execution Focus
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {stage.keyActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-brand-amber font-bold">▪</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative boundary notice to prevent implying contractual guarantees */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic max-w-2xl mx-auto">
            *Execution stages reflect Fursch Infra LLP&apos;s standard field coordination workflow. Project-specific scopes, schedules, and deliverables are tailored to bilateral contracts and approved engineering specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
