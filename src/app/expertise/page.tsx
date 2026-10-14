import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/data/services";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Documented Expertise — Core Contracting & Architectural Finishing Services",
  description:
    "Explore Fursch Infra LLP’s seven core services: turnkey execution, marble and tile flooring, architectural cladding, gypsum and ceilings, painting, electrical works, and plumbing.",
};

export default function ExpertisePage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber font-mono">
            <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
            <span>Documented Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Every Trade. One Coordinated Standard.
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Fursch Infra LLP provides a comprehensive suite of contracting services designed to cover every finishing aspect of your project. We eliminate contractor fragmentation by synchronising allied trades under single-point engineering oversight.
          </p>
        </div>

        {/* 7 Services Detailed Grid */}
        <div className="space-y-10">
          {services.map((svc, idx) => (
            <article
              key={svc.slug}
              id={svc.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-[#0F1426] border border-white/10 shadow-xl hover:border-brand-amber/50 hover:bg-[#131A33] transition-all rounded-xs"
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <SteppedFrame amberAccent={idx % 2 === 0}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0D17]">
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-1 bg-black/80 text-brand-amber font-mono text-xs border border-white/10">
                      {svc.number}
                    </div>
                  </div>
                </SteppedFrame>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-brand-amber">
                    SERVICE {svc.number}
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs uppercase font-semibold text-brand-lavender font-mono">
                    Architectural Finishing
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  <Link
                    href={`/expertise/${svc.slug}`}
                    className="hover:text-brand-amber transition-colors"
                  >
                    {svc.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {svc.fullDescription}
                </p>

                {/* Scope Highlights */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block mb-2 font-mono">
                    Scope of Work
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {svc.scope.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-amber font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Button
                    href={`/expertise/${svc.slug}`}
                    variant="primary"
                    size="sm"
                  >
                    View Full Specifications →
                  </Button>
                  <Button
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    variant="outline"
                    size="sm"
                  >
                    Enquire for this Trade
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Quick Enquiry CTA */}
        <div className="p-8 sm:p-12 bg-[#0F1426] border border-white/10 text-center space-y-4 max-w-3xl mx-auto rounded-xs shadow-xl">
          <h3 className="text-2xl font-bold text-white">
            Require Multi-Trade Contracting Coordination?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our engineering desk reviews architectural drawings, bills of quantities, and schedule parameters to provide aligned proposals.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              Submit Your Drawings for Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
