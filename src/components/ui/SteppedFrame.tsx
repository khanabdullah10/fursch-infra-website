import React from "react";

interface SteppedFrameProps {
  children: React.ReactNode;
  className?: string;
  amberAccent?: boolean;
  gridOverlay?: boolean;
}

export function SteppedFrame({
  children,
  className = "",
  amberAccent = true,
  gridOverlay = false,
}: SteppedFrameProps) {
  return (
    <div className={`relative p-2 sm:p-2.5 bg-[#101528] border border-white/15 shadow-xl ${className}`}>
      {/* Architectural corner tick marks */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-brand-amber pointer-events-none" />
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-brand-amber pointer-events-none" />
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-brand-amber pointer-events-none" />
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-brand-amber pointer-events-none" />

      {/* Signature Amber modular accent square derived from F logo */}
      {amberAccent && (
        <div
          className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-brand-amber shadow-[0_0_8px_#E49F43] z-10 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Content wrapper */}
      <div className="relative overflow-hidden bg-[#0A0D17]">
        {children}
        {gridOverlay && (
          <div
            className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
