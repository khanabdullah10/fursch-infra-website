import React from "react";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function QuickEnquirySection() {
  return (
    <section className="bg-[#090C15] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Context and Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Initiate Project Discussion"
              headline="Let’s discuss what you’re building."
              description="Whether you are finalizing drawings for a residential landmark, managing a corporate fit-out, or coordinating mass-transit infrastructure finishing, our engineering team is ready to analyze your scope."
            />

            <div className="space-y-4 pt-2">
              {/* Primary Phone */}
              <div className="p-4 bg-[#0F1426] border border-white/10 shadow-xl rounded-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                  Direct Engineering Desk
                </span>
                <a
                  href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-white hover:text-brand-amber transition-colors mt-1 block"
                >
                  {company.contact.phonePrimaryFormatted}
                </a>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Primary phone for urgent project coordination
                </span>
              </div>

              {/* Secondary Phone */}
              <div className="p-4 bg-[#0F1426] border border-white/10 shadow-xl rounded-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                  Secondary Project Line
                </span>
                <a
                  href={`tel:${company.contact.phoneSecondary.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-white hover:text-brand-amber transition-colors mt-1 block"
                >
                  {company.contact.phoneSecondaryFormatted}
                </a>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Direct site logistics and contractor enquiries
                </span>
              </div>

              {/* Email */}
              <div className="p-4 bg-[#0F1426] border border-white/10 shadow-xl rounded-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                  Drawing Submissions &amp; Tender Enquiries
                </span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-base font-bold text-white hover:text-brand-amber transition-colors mt-1 block underline underline-offset-4"
                >
                  {company.contact.email}
                </a>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Submit architectural CAD files, BOQs, or RFP packages
                </span>
              </div>

              {/* Instagram Notice */}
              <div className="p-4 bg-white/[0.03] border border-white/10 text-xs text-slate-400 rounded-xs">
                <span>Follow project milestones and site execution highlights on Instagram: </span>
                <a
                  href={company.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-amber hover:underline"
                >
                  {company.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Short Accessible Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Stepped corner accent */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-brand-indigo pointer-events-none z-10" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-brand-amber pointer-events-none z-10 shadow-[0_0_8px_#E49F43]" />
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
