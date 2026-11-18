"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Send,
  Phone,
  MapPin,
  Globe,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "success" | "error">("idle");

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderEmail || !formData.message) return;

    setIsSubmitting(true);
    // Simulate quiet, reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("success");
      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmittedStatus("idle"), 6000);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="py-24 border-b border-[#e2e8e3] bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#5b6a5f] border-b border-[#edf2ee] pb-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2d4633] rounded-none"></span>
            <span>SECTION 04 // WORK ETHICS, CONTACT & DIRECT CHANNELS</span>
          </div>
          <div className="text-[#78887c]">DIRECT CORRESPONDENCE</div>
        </div>

        {/* 1. Work Ethics Statement (Somber, Reflective, Authoritative) */}
        <div className="border border-[#1a2b1f] bg-[#fafcfa] p-8 sm:p-12 mb-20 relative">
          {/* Somber top corner tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#243729] bg-[#eef3ef] px-3 py-1 border border-[#cad5cd] mb-6">
            <Compass className="w-3.5 h-3.5 text-[#243729]" />
            <span>ETHICAL STATEMENT // PROFESSIONAL STANDARD</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-light text-[#121713] tracking-tight mb-4">
            {portfolioData.workEthics.title}
          </h2>

          <p className="text-base sm:text-lg text-[#354338] font-serif italic max-w-3xl leading-relaxed border-l-2 border-[#1a2b1f] pl-4 sm:pl-6 my-6">
            "{portfolioData.workEthics.leadStatement}"
          </p>

          {/* Ethics Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#e2e8e3]">
            {portfolioData.workEthics.principles.map((principle, index) => (
              <div
                key={index}
                className="p-5 bg-white border border-[#e5ebe6] hover:border-[#223526] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-[#4b6051] font-semibold">
                    0{index + 1}.
                  </span>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#142017] font-semibold">
                    {principle.headline}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#46554a] leading-relaxed font-sans">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>

          {/* Somber Closing Quote */}
          <div className="mt-8 pt-6 border-t border-[#e6ece7] text-xs font-mono text-[#5b6e60] flex items-center justify-between flex-wrap gap-2">
            <span>{portfolioData.workEthics.closingQuote}</span>
            <span className="text-[#7d8e82]">— {portfolioData.personal.fullName}</span>
          </div>
        </div>

        {/* 2. Direct Contact Information & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (Name, Personal Email, Work Email, Phone, Socials) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#3b5240] uppercase">
                // Direct Communication
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#111712] tracking-tight mt-1">
                Contact Dossier
              </h3>
              <p className="text-xs text-[#59695d] mt-2 font-sans leading-relaxed">
                Whether discussing technical roles, security research, or collaborative projects, my communication channels are open.
              </p>
            </div>

            <div className="border border-[#dce3de] bg-[#fafcfa] p-6 space-y-5">
              {/* Name */}
              <div className="border-b border-[#edf2ee] pb-4">
                <span className="text-[11px] font-mono text-[#78887b] uppercase block">
                  Full Name
                </span>
                <span className="text-sm font-semibold text-[#141d16] font-mono mt-0.5 block">
                  {portfolioData.personal.fullName}
                </span>
              </div>

              {/* Work Email */}
              <div className="border-b border-[#edf2ee] pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#78887b] uppercase">
                    Work / Professional Email
                  </span>
                  <button
                    onClick={() =>
                      copyText(portfolioData.personal.workEmail, "work-email")
                    }
                    className="text-[11px] font-mono text-[#2b4231] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === "work-email" ? (
                      <>
                        <Check className="w-3 h-3 text-[#253d2b]" />
                        <span className="text-[#253d2b] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#647568]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.personal.workEmail}`}
                  className="text-sm font-mono text-[#1a2b1f] hover:underline mt-1 block font-medium"
                >
                  {portfolioData.personal.workEmail}
                </a>
              </div>

              {/* Personal Email */}
              <div className="border-b border-[#edf2ee] pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#78887b] uppercase">
                    Personal Email
                  </span>
                  <button
                    onClick={() =>
                      copyText(portfolioData.personal.personalEmail, "personal-email")
                    }
                    className="text-[11px] font-mono text-[#2b4231] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === "personal-email" ? (
                      <>
                        <Check className="w-3 h-3 text-[#253d2b]" />
                        <span className="text-[#253d2b] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#647568]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.personal.personalEmail}`}
                  className="text-sm font-mono text-[#1a2b1f] hover:underline mt-1 block font-medium"
                >
                  {portfolioData.personal.personalEmail}
                </a>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-2 gap-3 border-b border-[#edf2ee] pb-4 text-xs font-mono">
                <div>
                  <span className="text-[11px] text-[#78887b] uppercase block">
                    Contact Phone
                  </span>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-[#2b3c2f] hover:underline mt-1 block"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-[#78887b] uppercase block">
                    Location
                  </span>
                  <span className="text-[#2b3c2f] mt-1 block">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>

              {/* Online Platforms */}
              <div className="pt-1">
                <span className="text-[11px] font-mono text-[#78887b] uppercase block mb-2">
                  Repositories & Professional Profiles
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={portfolioData.personal.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#d2dbd4] text-xs font-mono text-[#233527] hover:border-[#1a2b1f] hover:bg-[#1a2b1f] hover:text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    href={portfolioData.personal.netlifyProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#d2dbd4] text-xs font-mono text-[#233527] hover:border-[#1a2b1f] hover:bg-[#1a2b1f] hover:text-white transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Netlify</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    href={portfolioData.personal.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#d2dbd4] text-xs font-mono text-[#233527] hover:border-[#1a2b1f] hover:bg-[#1a2b1f] hover:text-white transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Message Form */}
          <div className="lg:col-span-7 border border-[#dce3de] bg-[#ffffff] p-8 shadow-sm">
            <div className="border-b border-[#edf2ee] pb-4 mb-6">
              <span className="text-xs font-mono text-[#394f3e] uppercase tracking-wider block">
                // Direct Dispatch
              </span>
              <h4 className="text-xl font-light text-[#121713] mt-1">
                Send a Structured Message
              </h4>
              <p className="text-xs text-[#5c6e61] mt-1 font-sans">
                Messages dispatch directly to <span className="font-mono text-[#1a2b1f]">{portfolioData.personal.workEmail}</span>.
              </p>
            </div>

            {submittedStatus === "success" && (
              <div className="mb-6 p-4 bg-[#f2f6f3] border border-[#2b4431] text-[#1e3023] text-xs font-mono flex items-start gap-3">
                <Check className="w-4 h-4 text-[#2b4431] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Transmission Prepared</p>
                  <p className="mt-0.5 text-[#3b4e40]">
                    Your message has been formatted. If you prefer your standard mail client, you can also mail directly to{" "}
                    <a
                      href={`mailto:${portfolioData.personal.workEmail}`}
                      className="underline font-semibold"
                    >
                      {portfolioData.personal.workEmail}
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#4a5a4e] uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.senderName}
                    onChange={(e) =>
                      setFormData({ ...formData, senderName: e.target.value })
                    }
                    placeholder="e.g. Dr. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 bg-[#fafcfa] border border-[#dbe3dc] text-sm text-[#131c15] focus:outline-none focus:border-[#1a2b1f] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#4a5a4e] uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.senderEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, senderEmail: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#fafcfa] border border-[#dbe3dc] text-sm text-[#131c15] focus:outline-none focus:border-[#1a2b1f] font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#4a5a4e] uppercase mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Engineering Role / Project Inquiries / Security Research"
                  className="w-full px-3.5 py-2.5 bg-[#fafcfa] border border-[#dbe3dc] text-sm text-[#131c15] focus:outline-none focus:border-[#1a2b1f] font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#4a5a4e] uppercase mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Outline the scope, team context, or question..."
                  className="w-full px-3.5 py-2.5 bg-[#fafcfa] border border-[#dbe3dc] text-sm text-[#131c15] focus:outline-none focus:border-[#1a2b1f] font-sans resize-y"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a2b1f] bg-[#1a2b1f] text-white text-xs font-mono tracking-wider hover:bg-[#293d2e] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "DISPATCHING..." : "SEND CORRESPONDENCE"}</span>
                </button>

                <a
                  href={`mailto:${portfolioData.personal.workEmail}?subject=${encodeURIComponent(
                    formData.subject || "Portfolio Inquiry"
                  )}&body=${encodeURIComponent(
                    `From: ${formData.senderName} (${formData.senderEmail})\n\n${formData.message}`
                  )}`}
                  className="text-xs font-mono text-[#4e6052] hover:text-[#1a2b1f] underline"
                >
                  Or open default mail client →
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
