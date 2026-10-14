import React from "react";
import Image from "next/image";
import { clients } from "@/data/clients";

export function ClientsSection() {
  return (
    <section className="bg-[#0C101F] border-b border-white/10 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle, quiet header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-amber mb-2">
            Client &amp; Partner References
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Executing architectural finishing and turnkey contracting across leading developers, public infrastructure authorities, and EPC partners.
          </p>
        </div>

        {/* Quiet, static logo grid balanced by visual weight */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="h-20 p-2.5 bg-white/[0.03] border border-white/10 hover:border-brand-amber/40 transition-all flex items-center justify-center group rounded-xs hover:bg-white/[0.06]"
              title={client.fullName}
            >
              <div className="bg-white/90 group-hover:bg-white px-2 py-1 rounded-xs w-full h-full flex items-center justify-center transition-all">
                <Image
                  src={client.logo}
                  alt={`${client.fullName} logo reference`}
                  width={client.width}
                  height={client.height}
                  className="max-h-9 w-auto max-w-[88%] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Small factual source caption */}
        <div className="mt-5 text-center">
          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
            Verified client references documented in official company portfolio (Page 10)
          </span>
        </div>
      </div>
    </section>
  );
}
