import React from "react";
import { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Handling — Fursch Infra LLP",
  description:
    "Accurate explanation of Fursch Infra LLP’s data handling, contact form submissions, and privacy principles.",
};

export default function PrivacyPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block mb-2 font-mono">
            Transparency &amp; Data Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.12]">
            Privacy Policy &amp; Data Handling
          </h1>
          <p className="mt-2 text-sm text-slate-400 font-mono">
            Last updated: October 2026 • Documented for {company.legalName}
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-[#0F1426] border border-white/10 p-6 sm:p-10 shadow-2xl rounded-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              1. Overview
            </h2>
            <p>
              {company.legalName} (&quot;Fursch Infra&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates this informational website to present our turnkey contracting and architectural finishing capabilities. We believe in minimal data collection and total transparency regarding any technical or personal information received.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              2. Information You Provide Voluntarily
            </h2>
            <p>
              When you submit a project brief through our enquiry form or contact us via telephone or email ({company.contact.email}), you provide us with contact details such as your name, corporate organization, email address, phone number, project city, and scope requirements.
            </p>
            <p>
              This information is used strictly and exclusively to evaluate your technical brief, review architectural drawings, provide contracting proposals, and coordinate site meetings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              3. What We Never Do With Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>We never sell, rent, license, or monetize your contact information or project briefs.</li>
              <li>We never share your tender drawings, BOQs, or project locations with unauthorized third parties.</li>
              <li>We do not enroll your email address in automated marketing spam lists.</li>
              <li>We do not transmit personal contact details or confidential drawing data in web analytics.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              This website is built with native Next.js Server Components and utilizes standard HTTP session headers. We do not deploy invasive cross-site marketing cookies, tracking pixels, or third-party behavioral surveillance scripts without your prior explicit configuration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              5. External Links
            </h2>
            <p>
              Our website provides an outbound link to our official Instagram page ({company.contact.instagram}). When navigating to third-party services, their respective privacy policies and terms govern your interaction on their platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">
              6. Data Retention &amp; Rights
            </h2>
            <p>
              Enquiry records are retained only for the duration required to conduct technical evaluations or execute active contracting agreements. You may request the deletion or correction of your contact details at any time by writing to{" "}
              <a
                href={`mailto:${company.contact.email}`}
                className="text-brand-amber underline font-medium"
              >
                {company.contact.email}
              </a>.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-white/10">
            <h2 className="text-lg font-bold text-white">
              7. Contact Us
            </h2>
            <p>
              For any questions regarding our data practices, please reach out directly:
            </p>
            <div className="p-4 bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1 font-mono rounded-xs">
              <div><strong>Entity:</strong> {company.legalName}</div>
              <div><strong>Email:</strong> {company.contact.email}</div>
              <div><strong>Phone:</strong> {company.contact.phonePrimaryFormatted} / {company.contact.phoneSecondaryFormatted}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
