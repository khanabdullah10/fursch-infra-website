import React from "react";
import { Metadata } from "next";
import { company } from "@/data/company";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us — Project Enquiries & Technical Desk",
  description:
    "Get in touch with Fursch Infra LLP for turnkey contracting and architectural finishing proposals, drawing reviews, and trade coordination.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber font-mono">
            <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
            <span>Direct Project Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Let’s Discuss What You’re Building
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Connect directly with Fursch Infra LLP. Whether you are seeking single-point turnkey execution or trade-specific finishing across residential, commercial, hospitality, or infrastructure projects, our engineering desk is at your service.
          </p>
        </div>

        {/* Contact Matrix + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#0F1426] border border-white/10 shadow-xl space-y-6 rounded-xs">
              <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Direct Contact Channels
              </h2>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                    Primary Telephone Desk
                  </span>
                  <a
                    href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
                    className="text-xl font-bold text-white hover:text-brand-amber transition-colors block mt-1"
                  >
                    {company.contact.phonePrimaryFormatted}
                  </a>
                  <span className="text-xs text-slate-400">
                    Direct line for client coordination and project milestones
                  </span>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                    Secondary Line
                  </span>
                  <a
                    href={`tel:${company.contact.phoneSecondary.replace(/\s+/g, "")}`}
                    className="text-xl font-bold text-white hover:text-brand-amber transition-colors block mt-1"
                  >
                    {company.contact.phoneSecondaryFormatted}
                  </a>
                  <span className="text-xs text-slate-400">
                    Site logistics and contractor communications
                  </span>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                    Email for Drawings &amp; Tenders
                  </span>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-lg font-bold text-white hover:text-brand-amber transition-colors block mt-1 underline underline-offset-4"
                  >
                    {company.contact.email}
                  </a>
                  <span className="text-xs text-slate-400">
                    Submit architectural CAD files, PDF sets, or tender BOQs
                  </span>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                    Instagram Updates
                  </span>
                  <a
                    href={company.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-amber hover:underline block mt-1 flex items-center gap-1.5"
                  >
                    <span>{company.contact.instagramHandle}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="text-xs text-slate-400">
                    Verified platform showcasing ongoing site works and project milestones
                  </span>
                </div>
              </div>
            </div>

            {/* Portfolio Download Box */}
            <div className="p-6 bg-[#121830] border border-white/15 text-white space-y-3 rounded-xs shadow-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-amber block font-mono">
                Company Presentation
              </span>
              <h3 className="text-lg font-bold">
                Download Official Portfolio PDF
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review our complete 13-page portfolio presentation including documented client references, core capabilities, and execution scope.
              </p>
              <div className="pt-2">
                <a
                  href={company.contact.portfolioPdfPath}
                  download="FURSCH_INFRA_LLP_Portfolio.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber hover:bg-brand-amber-dark text-[#0A0D17] font-bold text-xs transition-colors shadow-xs"
                >
                  <span>Download PDF Document (2.4 MB)</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="bg-[#0F1426] border border-white/10 p-4 text-xs text-slate-300 flex items-center justify-between rounded-xs">
                <span>
                  <strong>Note:</strong> All technical enquiries are directly routed to our engineering review team.
                </span>
                <span className="font-mono text-brand-amber font-bold hidden sm:inline">
                  CONFIDENTIAL
                </span>
              </div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
