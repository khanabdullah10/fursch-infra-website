import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  headline,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-brand-amber">
          {/* Architectural modular accent square with amber glow */}
          <span className="w-1.5 h-1.5 bg-brand-amber inline-block shadow-[0_0_6px_#E49F43]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
        {headline}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
