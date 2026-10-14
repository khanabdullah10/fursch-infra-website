import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — Scope & Execution Standards`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Fursch Infra LLP`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const suitableSectorDetails = sectors.filter((sec) =>
    service.suitableSectors.includes(sec.slug)
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Expertise", url: `${siteUrl}/expertise` },
    { name: service.title, url: `${siteUrl}/expertise/${service.slug}` },
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#090C15]">
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400 font-mono">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-amber">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/expertise" className="hover:text-brand-amber">
                Expertise
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-brand-amber">{service.title}</li>
          </ol>
        </nav>

        {/* Hero Section of Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-amber">
              <span>TRADE {service.number}</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-lavender">DOCUMENTED SCOPE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              {service.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
              >
                Enquire for {service.title}
              </Button>
              <Button href="/expertise" variant="outline" size="md">
                ← All Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SteppedFrame amberAccent={true} gridOverlay={true}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0D17]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </SteppedFrame>
          </div>
        </div>

        {/* Detailed Scope of Work */}
        <section className="p-6 sm:p-8 bg-[#0F1426] border border-white/10 space-y-6 rounded-xs shadow-xl">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
              Specifications
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Documented Scope of Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.scope.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/5 rounded-xs"
              >
                <span className="font-mono text-xs font-bold text-brand-amber mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm text-slate-200 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Execution Details & Trade Coordination */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Execution Methodology */}
          <div className="p-6 sm:p-8 bg-[#0F1426] border border-white/10 space-y-4 rounded-xs shadow-xl">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender block font-mono">
                Field Coordination
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Execution Methodology
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {service.executionDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-amber font-bold">▪</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Assurance Protocols */}
          <div className="p-6 sm:p-8 bg-[#0F1426] border border-white/10 space-y-4 rounded-xs shadow-xl">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-lavender block font-mono">
                Zero Defect Standards
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Quality Assurance Protocols
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {service.qualityAssurance.map((qa, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-amber font-bold">✓</span>
                  <span>{qa}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Suitable Sectors */}
        <section className="space-y-4">
          <div className="border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
              Application Environments
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Suitable Project Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suitableSectorDetails.map((sec) => (
              <div
                key={sec.slug}
                className="p-4 bg-[#0F1426] border border-white/10 hover:border-brand-amber/40 transition-colors rounded-xs shadow-md"
              >
                <span className="text-[10px] font-mono font-bold text-brand-amber block uppercase tracking-wider">
                  Sector Reference
                </span>
                <h3 className="font-bold text-white text-base mt-1">
                  {sec.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {sec.tagline}
                </p>
                <div className="mt-3 pt-2 border-t border-white/10">
                  <Link
                    href={`/sectors#${sec.slug}`}
                    className="text-xs font-semibold text-brand-amber hover:underline"
                  >
                    View sector specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Enquiry CTA banner */}
        <div className="p-8 sm:p-10 bg-[#121830] border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xs shadow-2xl">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber font-mono">
              Discuss Scope &amp; Drawings
            </span>
            <h3 className="text-2xl font-bold">
              Require execution for {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your project location and drawings to receive our technical review.
            </p>
          </div>
          <Button
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            variant="primary"
            size="md"
          >
            Submit Enquiry →
          </Button>
        </div>
      </div>
    </div>
  );
}
