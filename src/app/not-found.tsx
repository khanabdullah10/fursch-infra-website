import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#090C15]">
      <div className="max-w-md w-full text-center space-y-6 p-8 bg-[#0F1426] border border-white/10 shadow-2xl rounded-xs">
        {/* Architectural 404 Symbol */}
        <div className="relative inline-block">
          <div className="w-16 h-16 mx-auto bg-brand-amber/10 border border-brand-amber/40 flex items-center justify-center font-mono text-2xl font-bold text-brand-amber shadow-[0_0_15px_rgba(228,159,67,0.2)]">
            404
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-amber shadow-[0_0_6px_#E49F43]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">
            Blueprint Not Located
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The requested page or case study reference is not mapped in our active index. It may have been moved or is currently in draft review.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/projects" variant="outline" size="sm">
            Explore Portfolio Projects
          </Button>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs text-slate-500 font-mono">
          Need technical assistance? Email us at{" "}
          <a
            href="mailto:Furschinfra@gmail.com"
            className="text-brand-amber underline font-medium"
          >
            Furschinfra@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
