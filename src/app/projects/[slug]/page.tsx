import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { verifiedCaseStudies, projects } from "@/data/projects";
import { SteppedFrame } from "@/components/ui/SteppedFrame";
import { Button } from "@/components/ui/Button";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return verifiedCaseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = verifiedCaseStudies.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Verified Case Study | Fursch Infra LLP`,
    description: project.executionSummary,
    openGraph: {
      title: `${project.title} Case Study | Fursch Infra LLP`,
      description: project.executionSummary,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.hasVerifiedCaseStudy) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Projects", url: `${siteUrl}/projects` },
    { name: project.title, url: `${siteUrl}/projects/${project.slug}` },
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
              <Link href="/projects" className="hover:text-brand-amber">
                Projects
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-brand-amber">{project.title}</li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-amber">
              <span>{project.sectorLabel}</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-lavender">VERIFIED CASE STUDY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              {project.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              {project.executionSummary}
            </p>

            {/* Project Metadata Matrix */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-b border-white/10 py-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                  Sector
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.sectorLabel}
                </span>
              </div>

              {project.client && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Client / Partner
                  </span>
                  <span className="text-sm font-semibold text-brand-amber">
                    {project.client}
                  </span>
                </div>
              )}

              {project.location && (
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {project.location}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                href={`/contact?service=${encodeURIComponent(project.title)}`}
                variant="primary"
                size="md"
              >
                Discuss Similar Project
              </Button>
              <Button href="/projects" variant="outline" size="md">
                ← All Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SteppedFrame amberAccent={true} gridOverlay={false}>
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0D17]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </SteppedFrame>
            <div className="mt-2 text-right">
              <span className="text-[10px] font-mono text-slate-400">
                {project.verifiedSource}
              </span>
            </div>
          </div>
        </div>

        {/* Scope of Execution */}
        <section className="p-6 sm:p-8 bg-[#0F1426] border border-white/10 space-y-6 rounded-xs shadow-xl">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
              Contracting Scope
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Documented Scope of Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.scope.map((item, idx) => (
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

        {/* Gallery of Verified Photographs */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block font-mono">
                Visual Documentation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Site Execution Photography
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgItem, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F1426] border border-white/10 p-3 space-y-2 shadow-xl rounded-xs"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D17]">
                    <Image
                      src={imgItem.src}
                      alt={imgItem.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-300 font-medium px-1">
                    {imgItem.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Call to Action */}
        <div className="p-8 sm:p-10 bg-[#121830] border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xs shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber font-mono">
              Ready to execute?
            </span>
            <h3 className="text-2xl font-bold mt-1">
              Have a project in this sector?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Get in touch with our engineering team for technical drawing review and scope planning.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md">
            Discuss Your Project →
          </Button>
        </div>
      </div>
    </div>
  );
}
