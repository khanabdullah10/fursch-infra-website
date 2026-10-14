"use client";

import React, { useState } from "react";
import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { sectors } from "@/data/sectors";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  serviceType: string;
  message: string;
  honeypot: string;
}

export function EnquiryForm({
  initialService,
  initialSector,
}: {
  initialService?: string;
  initialSector?: string;
}) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    serviceType: initialService || initialSector || "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.location.trim() || !formData.serviceType || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please complete all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you for reaching out. Your enquiry has been received and our engineering desk will review your requirements."
        );
      } else {
        setStatus("error");
        setFeedbackMessage(
          result.error || "Unable to send enquiry. Please contact us directly via phone or email."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "A network connection error occurred. Please contact us directly at " +
          company.contact.email +
          " or call " +
          company.contact.phonePrimaryFormatted +
          "."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 bg-[#0E1324] border-2 border-brand-amber/40 shadow-2xl text-center space-y-4 rounded-xs"
        role="alert"
      >
        <div className="w-12 h-12 mx-auto bg-brand-amber/20 text-brand-amber flex items-center justify-center font-bold text-2xl rounded-full shadow-[0_0_15px_rgba(228,159,67,0.3)]">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-white">
          Enquiry Received
        </h3>
        <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          {feedbackMessage}
        </p>
        <div className="pt-4 border-t border-white/10 text-sm text-slate-400">
          <p>Need immediate technical assistance?</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
              className="font-semibold text-brand-amber hover:underline"
            >
              Call {company.contact.phonePrimaryFormatted}
            </a>
            <span>•</span>
            <a
              href={`mailto:${company.contact.email}`}
              className="font-semibold text-brand-amber hover:underline"
            >
              {company.contact.email}
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              location: "",
              serviceType: "",
              message: "",
              honeypot: "",
            });
          }}
          className="mt-4 text-xs font-semibold text-brand-amber uppercase tracking-wider underline hover:text-white"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 bg-[#0E1324] border border-white/10 shadow-2xl space-y-5 rounded-xs"
      noValidate
    >
      {/* Honeypot field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_trap">Website</label>
        <input
          id="website_trap"
          name="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

      {status === "error" && (
        <div
          className="p-4 bg-red-950/50 border border-red-500/40 text-red-200 text-sm font-medium rounded-xs"
          role="alert"
          aria-live="polite"
        >
          {feedbackMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Your Name <span className="text-brand-amber">*</span>
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors rounded-xs"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <label
            htmlFor="enquiry-company"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Company / Firm <span className="text-slate-500 font-normal">(Optional)</span>
          </label>
          <input
            id="enquiry-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Developer / Studio"
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors rounded-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Email Address <span className="text-brand-amber">*</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors rounded-xs"
          />
        </div>

        {/* Phone (Optional) */}
        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98000 00000"
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors rounded-xs"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Location */}
        <div>
          <label
            htmlFor="enquiry-location"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Project Location / City <span className="text-brand-amber">*</span>
          </label>
          <input
            id="enquiry-location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Mumbai, Pune, NCR"
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors rounded-xs"
          />
        </div>

        {/* Service / Sector Type */}
        <div>
          <label
            htmlFor="enquiry-service"
            className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
          >
            Scope / Service Requirement <span className="text-brand-amber">*</span>
          </label>
          <select
            id="enquiry-service"
            name="serviceType"
            required
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white outline-none transition-colors rounded-xs"
          >
            <option value="" className="bg-[#080B14] text-white">Select Primary Service / Trade</option>
            <optgroup label="Documented Core Services" className="bg-[#0E1324] text-white">
              {services.map((svc) => (
                <option key={svc.slug} value={svc.title} className="bg-[#080B14] text-white">
                  {svc.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="By Sector" className="bg-[#0E1324] text-white">
              {sectors.map((sec) => (
                <option key={sec.slug} value={`${sec.title} Sector`} className="bg-[#080B14] text-white">
                  {sec.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1 font-mono"
        >
          Project Details &amp; Drawing Status <span className="text-brand-amber">*</span>
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project scope, site readiness, work-front schedule, or drawing review requirements..."
          className="w-full px-3.5 py-2.5 text-sm bg-[#080B14] border border-white/15 focus:border-brand-amber focus:ring-1 focus:ring-brand-amber text-white placeholder-slate-500 outline-none transition-colors resize-y rounded-xs"
        />
      </div>

      {/* Privacy disclaimer */}
      <p className="text-xs text-slate-400 leading-relaxed">
        By submitting, you agree that Fursch Infra LLP may contact you regarding your technical brief. We do not sell or share contact details with third parties. Learn more in our{" "}
        <Link href="/privacy" className="text-brand-amber underline hover:text-white">
          Privacy Policy
        </Link>.
      </p>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Transmitting Brief..." : "Submit Project Enquiry"}
        </Button>

        <div className="text-xs text-slate-400 text-center sm:text-right font-mono">
          Direct desk:{" "}
          <a
            href={`tel:${company.contact.phonePrimary.replace(/\s+/g, "")}`}
            className="font-bold text-brand-amber hover:underline"
          >
            {company.contact.phonePrimaryFormatted}
          </a>
        </div>
      </div>
    </form>
  );
}
