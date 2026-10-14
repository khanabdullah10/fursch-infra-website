import React from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#060810] text-white border-t border-white/10">
      {/* Upper architectural strip */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-amber flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-amber inline-block" />
                {company.tagline}
              </span>
              <p className="mt-2 text-xl sm:text-2xl font-light text-white max-w-2xl">
                Ready to coordinate your next architectural execution? Let&apos;s build together.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-amber hover:bg-brand-amber-dark text-[#0A0D17] font-bold text-sm transition-all shadow-[0_0_15px_rgba(228,159,67,0.3)] min-h-[44px]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call {company.contact.phonePrimaryFormatted}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:border-white text-white text-sm font-medium transition-colors min-h-[44px]"
              >
                <span>Enquire Online</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 inline-block rounded-xs shadow-xs max-w-[220px]">
              <Image
                src="/images/brand/logo.png"
                alt="Fursch Infra LLP"
                width={200}
                height={55}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Turnkey contracting and architectural finishing partner. Delivering coordinated multi-trade execution across residential, commercial, hospitality, and infrastructure developments.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={company.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-brand-lavender hover:text-white transition-colors"
                aria-label="Fursch Infra LLP Instagram Profile (opens in new tab)"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram: {company.contact.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Documented Expertise
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/expertise/${svc.slug}`}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors & Company */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Sectors & Company
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {sectors.map((sec) => (
                <li key={sec.slug}>
                  <Link
                    href="/sectors"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {sec.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Portfolio Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  About Fursch Infra
                </Link>
              </li>
              <li>
                <Link
                  href="/#delivery-approach"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Delivery Approach
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div>
                <span className="block text-xs text-brand-lavender">Email</span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-white font-medium underline underline-offset-4"
                >
                  {company.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs text-brand-lavender">
                  Primary Phone
                </span>
                <a
                  href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
                  className="hover:text-white font-medium"
                >
                  {company.contact.phonePrimaryFormatted}
                </a>
              </div>

              <div>
                <span className="block text-xs text-brand-lavender">
                  Additional Phone
                </span>
                <a
                  href={`tel:${company.contact.phoneSecondary.replace(/\s+/g, "")}`}
                  className="hover:text-white font-medium"
                >
                  {company.contact.phoneSecondaryFormatted}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={company.contact.portfolioPdfPath}
                  download="FURSCH_INFRA_LLP_Portfolio.pdf"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-amber hover:underline"
                >
                  <span>Download Company Portfolio PDF</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {company.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{company.secondaryTagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
