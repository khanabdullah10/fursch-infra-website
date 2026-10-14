"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const firstFocusable = mobileNavRef.current?.querySelector<HTMLElement>(
      'a, button, [tabindex="0"]'
    );
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Expertise", href: "/expertise" },
    { label: "Sectors", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Approach", href: "/#delivery-approach" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[#090C15]/95 backdrop-blur-md border-white/10 shadow-lg py-2"
          : "bg-[#090C15]/80 backdrop-blur-sm border-white/5 py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Sleek, native transparent brand logo with no awkward white boxes or empty space */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-xs py-0.5"
            aria-label="Fursch Infra LLP Home"
          >
            <div className="relative h-8 sm:h-9 md:h-10 w-36 sm:w-44 flex items-center">
              <Image
                src="/images/brand/logo-horizontal-dark.png"
                alt="Fursch Infra LLP"
                width={200}
                height={52}
                priority
                className="object-contain object-left max-h-8 sm:max-h-9 md:max-h-10 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : !link.href.startsWith("/#") && pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all duration-150 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5 rounded-xs"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-amber shadow-[0_0_8px_rgba(228,159,67,0.8)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={company.contact.portfolioPdfPath}
              download="FURSCH_INFRA_LLP_Portfolio.pdf"
              className="text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 px-3 py-2 border border-white/10 hover:border-brand-lavender/40 bg-white/[0.03] hover:bg-white/[0.07] transition-all rounded-xs"
              title="Download official company portfolio PDF"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-amber"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Portfolio PDF</span>
            </a>

            <Button href="/contact" variant="primary" size="sm">
              Discuss Your Project
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="px-3 text-xs"
            >
              Enquire
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-xs min-h-[44px] min-w-[44px] flex items-center justify-center border border-white/10"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-brand-amber"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer rendered into document.body via portal to prevent backdrop-filter clipping */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] md:hidden flex flex-col bg-[#070A14] text-white animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar inside Drawer with Brand Logo & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 shrink-0 bg-[#0A0E1B]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
              aria-label="Fursch Infra LLP Home"
            >
              <div className="relative h-8 sm:h-9 w-36 sm:w-44 flex items-center">
                <Image
                  src="/images/brand/logo-horizontal-dark.png"
                  alt="Fursch Infra LLP"
                  width={180}
                  height={48}
                  priority
                  className="object-contain object-left max-h-8 sm:max-h-9 w-auto"
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-200 hover:text-brand-amber hover:bg-white/10 border border-white/15 rounded-xs flex items-center justify-center min-h-[44px] min-w-[44px] transition-colors"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-5 h-5 text-brand-amber"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div
            id="mobile-navigation"
            ref={mobileNavRef}
            className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-amber">
                  Navigation Menu
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  TURNKEY CONTRACTING
                </span>
              </div>

              <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation Links">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : !link.href.startsWith("/#") && pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 text-base font-semibold rounded-xs transition-all flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? "bg-brand-indigo/35 text-brand-amber font-bold border-l-4 border-brand-amber shadow-[0_0_15px_rgba(228,159,67,0.15)]"
                          : "text-slate-100 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-brand-amber shadow-[0_0_8px_#E49F43]" aria-hidden="true" />
                      ) : (
                        <span className="text-slate-500 text-sm" aria-hidden="true">→</span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-center font-bold text-sm shadow-[0_0_20px_rgba(228,159,67,0.25)] min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Discuss Your Project →
                </Button>

                <a
                  href={company.contact.portfolioPdfPath}
                  download="FURSCH_INFRA_LLP_Portfolio.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-200 hover:text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-all rounded-xs min-h-[44px]"
                >
                  <svg
                    className="w-4 h-4 text-brand-amber shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download Official Portfolio (PDF)</span>
                </a>
              </div>
            </div>

            {/* Direct Contact & Details */}
            <div className="pt-5 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-lavender">
                Direct Inquiries
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-brand-amber transition-colors min-h-[36px]"
                >
                  <span className="text-brand-amber font-mono font-bold">Tel:</span>
                  <span className="font-mono">{company.contact.phonePrimaryFormatted}</span>
                </a>
                {company.contact.phoneSecondaryFormatted && (
                  <a
                    href={`tel:${company.contact.phoneSecondary.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-slate-200 hover:text-brand-amber transition-colors min-h-[36px]"
                  >
                    <span className="text-brand-amber font-mono font-bold">Tel:</span>
                    <span className="font-mono">{company.contact.phoneSecondaryFormatted}</span>
                  </a>
                )}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-brand-amber transition-colors min-h-[36px]"
                >
                  <span className="text-brand-amber font-mono font-bold">Email:</span>
                  <span>{company.contact.email}</span>
                </a>
              </div>
              <p className="text-[10px] text-slate-400 font-mono pt-1">
                {company.name} · Mumbai Metro BKC Station Contractor
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
