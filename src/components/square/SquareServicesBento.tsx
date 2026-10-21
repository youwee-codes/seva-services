"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import {
  section1Services,
  section2Services,
  section3Services,
  DocRequirement,
} from "@/data/docRequirements";
import {
  PassportArtifact,
  PanCardArtifact,
  StampPaperArtifact,
} from "@/components/Artifacts";
import CommercialLicenseArtifact from "@/components/CommercialLicenseArtifact";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle2,
  Building,
  Sparkles,
  FileCheck2,
} from "lucide-react";

export default function SquareServicesBento() {
  const { language, currentTheme } = useApp();
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>("passport");
  const [sec1ActiveCard, setSec1ActiveCard] = useState<"passport" | "pan">("passport");

  const toggleExpand = (id: string) => {
    playHapticSound("switch");
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  const openWhatsApp = (e: React.MouseEvent, doc: DocRequirement) => {
    e.stopPropagation();
    playHapticSound("click");
    const msg = encodeURIComponent(doc.whatsappText);
    window.open(`https://wa.me/919323467370?text=${msg}`, "_blank");
  };

  return (
    <div id="services" className="text-neutral-900 border-b border-neutral-200">
      {/* Friendly Catalog Intro Banner */}
      <div
        className="pt-16 pb-12 transition-colors duration-300 border-b border-neutral-200/80 relative overflow-hidden"
        style={{ backgroundColor: currentTheme.vars.surfaceBg }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
              style={{
                backgroundColor: currentTheme.vars.accentSoft,
                color: currentTheme.vars.primaryDark,
              }}
            >
              <FileCheck2 className="w-3.5 h-3.5 text-amber-600" />
              <span>All 28 Services • Simple &amp; Fast</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
              Clear checklists. <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.vars.primary}, ${currentTheme.vars.accent})`,
                }}
              >
                No guesswork. No waiting.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Tap any service below to see what papers you need to bring and how long it takes. Tap the WhatsApp button to message Jayanand directly.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 01 | PERSONAL & CITIZEN CERTIFICATES (Services 1 - 12) */}
      {/* Warm Emerald / Mint Tinted Background */}
      {/* ========================================================================= */}
      <section
        id="citizen-services"
        className="py-14 sm:py-20 border-b border-neutral-200 bg-gradient-to-b from-[#f2f9f5] via-[#fafdfb] to-[#f2f9f5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Clean Kinetic 01 */}
          <div className="flex items-start justify-between border-b-2 border-emerald-200/80 pb-5 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold block mb-1 text-emerald-800">
                PART 01 • FAMILY &amp; COLLEGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Personal &amp; College Certificates
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                For school, college admissions, scholarships, job quotas, and government IDs.
              </p>
            </div>
            {/* Massive Kinetic Counter 01 Tinted Emerald */}
            <div className="text-5xl sm:text-7xl font-mono font-black leading-none select-none text-emerald-600/20">
              01
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Sticky 3D Rotating Indian Passport & PAN Card (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
              <div className="w-full flex justify-center mb-4 gap-2">
                <button
                  onClick={() => {
                    setSec1ActiveCard("passport");
                    playHapticSound("switch");
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    sec1ActiveCard === "passport"
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-white border border-neutral-300 text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Indian Passport 3D
                </button>
                <button
                  onClick={() => {
                    setSec1ActiveCard("pan");
                    playHapticSound("switch");
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    sec1ActiveCard === "pan"
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-white border border-neutral-300 text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Holographic PAN 3D
                </button>
              </div>

              <div className="flex items-center justify-center p-4 bg-white rounded-3xl border border-emerald-200 shadow-xl shadow-emerald-900/5 w-full max-w-[400px]">
                {sec1ActiveCard === "passport" ? (
                  <PassportArtifact size="md" />
                ) : (
                  <div className="py-6">
                    <PanCardArtifact size="md" />
                  </div>
                )}
              </div>

              <p className="text-[11px] font-mono text-neutral-400 mt-3 text-center">
                Move cursor over card to catch specular light reflection
              </p>
            </div>

            {/* Right: Interactive 12 Service Rows (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {section1Services.map((doc, idx) => {
                const isExpanded = expandedServiceId === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleExpand(doc.id)}
                    className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? "bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20"
                        : "bg-white/95 border-emerald-100/90 hover:border-emerald-300 hover:shadow-2xs"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-mono font-bold shrink-0 border border-emerald-200">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                            {doc.nameEn}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {doc.nameHi}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                          <Clock className="w-3 h-3" />
                          {doc.turnaroundEn}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Drawer: Required Documents Checklist */}
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-emerald-100 bg-emerald-50/30 animate-in fade-in duration-200 space-y-4">
                        <div className="p-3 bg-emerald-100/60 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium leading-relaxed">
                          <span className="font-bold text-emerald-900">Good to know: </span>
                          {doc.highlight}
                        </div>

                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                            PAPERS YOU NEED TO BRING:
                          </span>
                          <ul className="space-y-2">
                            {doc.requiredDocsEn.map((item, docIdx) => (
                              <li
                                key={docIdx}
                                className="flex items-start gap-2.5 text-xs text-neutral-800 leading-snug font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Drawer Actions */}
                        <div className="pt-3 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="text-neutral-500 font-mono text-[11px]">
                            <span>DEPT: </span>
                            <span className="font-semibold text-neutral-800">{doc.govtDeptEn}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href="tel:+919323467370"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold"
                            >
                              <Phone className="w-3.5 h-3.5 text-neutral-600" />
                              <span>Call</span>
                            </a>

                            <button
                              onClick={(e) => openWhatsApp(e, doc)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp Jayanand</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 | SHOP, BUSINESS & TAX LICENSES (Services 13 - 19) */}
      {/* Soft Royal Blue / Cobalt Tinted Background */}
      {/* ========================================================================= */}
      <section
        id="business-services"
        className="py-14 sm:py-20 border-b border-neutral-200 bg-gradient-to-b from-[#f0f6ff] via-[#fafcff] to-[#f0f6ff]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Kinetic Counter 02 */}
          <div className="flex items-start justify-between border-b-2 border-blue-200/80 pb-5 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold block mb-1 text-blue-800">
                PART 02 • SHOPS &amp; BUSINESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Shop, Business &amp; Tax Licenses
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Open bank accounts, start retail shops, get FSSAI food permits, and file GST / ITR.
              </p>
            </div>
            {/* Massive Kinetic Counter 02 Tinted Blue */}
            <div className="text-5xl sm:text-7xl font-mono font-black leading-none select-none text-blue-600/20">
              02
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Sticky 3D Commercial License Certificate (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
              <div className="flex items-center justify-center p-4 bg-neutral-950 rounded-3xl border border-blue-900/60 shadow-2xl w-full max-w-[400px]">
                <CommercialLicenseArtifact />
              </div>

              <p className="text-[11px] font-mono text-neutral-500 mt-3 text-center">
                NMMC Gumasta &amp; FSSAI Active Compliance Docket
              </p>
            </div>

            {/* Right: Interactive Business Service Rows (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {section2Services.map((doc, idx) => {
                const isExpanded = expandedServiceId === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleExpand(doc.id)}
                    className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20"
                        : "bg-white/95 border-blue-100/90 hover:border-blue-300 hover:shadow-2xs"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {idx + 13}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                            {doc.nameEn}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {doc.nameHi}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-800 bg-blue-100/80 px-2.5 py-1 rounded-full border border-blue-200">
                          <Clock className="w-3 h-3" />
                          {doc.turnaroundEn}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Drawer: Required Documents Checklist */}
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-blue-100 bg-blue-50/30 animate-in fade-in duration-200 space-y-4">
                        <div className="p-3 bg-blue-100/60 rounded-xl border border-blue-200 text-xs text-blue-950 font-medium leading-relaxed">
                          <span className="font-bold text-blue-900">Good to know: </span>
                          {doc.highlight}
                        </div>

                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-900 block mb-2">
                            PAPERS YOU NEED TO BRING:
                          </span>
                          <ul className="space-y-2">
                            {doc.requiredDocsEn.map((item, docIdx) => (
                              <li
                                key={docIdx}
                                className="flex items-start gap-2.5 text-xs text-neutral-800 leading-snug font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Drawer Actions */}
                        <div className="pt-3 border-t border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="text-neutral-500 font-mono text-[11px]">
                            <span>DEPT: </span>
                            <span className="font-semibold text-neutral-800">{doc.govtDeptEn}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href="tel:+919323467370"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold"
                            >
                              <Phone className="w-3.5 h-3.5 text-neutral-600" />
                              <span>Call</span>
                            </a>

                            <button
                              onClick={(e) => openWhatsApp(e, doc)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp Jayanand</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 | PROPERTY, RENT AGREEMENTS & CIDCO REGISTRY (Services 20 - 28) */}
      {/* Warm Golden Amber / Parchment Tinted Background */}
      {/* ========================================================================= */}
      <section
        id="legal-services"
        className="py-14 sm:py-20 border-b border-neutral-200 bg-gradient-to-b from-[#fffbeb] via-[#fffdf5] to-[#fffbeb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Kinetic Counter 03 */}
          <div className="flex items-start justify-between border-b-2 border-amber-200/80 pb-5 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest font-bold block mb-1 text-amber-800">
                PART 03 • RENT, PROPERTY &amp; LEGAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Rent Agreements, Stamp Paper &amp; CIDCO
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Same-day biometric rent agreements, CIDCO NOC clearances, and Sub-Registrar flat deeds.
              </p>
            </div>
            {/* Massive Kinetic Counter 03 Tinted Amber */}
            <div className="text-5xl sm:text-7xl font-mono font-black leading-none select-none text-amber-600/20">
              03
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left: Sticky 3D Stamp Paper & CIDCO Dossier (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
              <div className="flex items-center justify-center p-4 bg-white rounded-3xl border border-amber-200 shadow-xl shadow-amber-900/5 w-full max-w-[400px]">
                <StampPaperArtifact showStamp={true} />
              </div>

              <p className="text-[11px] font-mono text-neutral-400 mt-3 text-center">
                Authentic ₹100 Maharashtra Bond Paper with Live Spring Notary Stamp
              </p>
            </div>

            {/* Right: Interactive Legal Service Rows (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {section3Services.map((doc, idx) => {
                const isExpanded = expandedServiceId === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleExpand(doc.id)}
                    className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                      isExpanded
                        ? "bg-white border-amber-600 shadow-md ring-2 ring-amber-600/20"
                        : "bg-white/95 border-amber-100/90 hover:border-amber-300 hover:shadow-2xs"
                    }`}
                  >
                    {/* Header Row */}
                    <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {idx + 20}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                            {doc.nameEn}
                          </h4>
                          <p className="text-xs text-neutral-500">
                            {doc.nameHi}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200">
                          <Clock className="w-3 h-3" />
                          {doc.turnaroundEn}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Drawer: Required Documents Checklist */}
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-amber-100 bg-amber-50/30 animate-in fade-in duration-200 space-y-4">
                        <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed">
                          <span className="font-bold text-amber-900">Good to know: </span>
                          {doc.highlight}
                        </div>

                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 block mb-2">
                            PAPERS YOU NEED TO BRING:
                          </span>
                          <ul className="space-y-2">
                            {doc.requiredDocsEn.map((item, docIdx) => (
                              <li
                                key={docIdx}
                                className="flex items-start gap-2.5 text-xs text-neutral-800 leading-snug font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Drawer Actions */}
                        <div className="pt-3 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="text-neutral-500 font-mono text-[11px]">
                            <span>DEPT: </span>
                            <span className="font-semibold text-neutral-800">{doc.govtDeptEn}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href="tel:+919323467370"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold"
                            >
                              <Phone className="w-3.5 h-3.5 text-neutral-600" />
                              <span>Call</span>
                            </a>

                            <button
                              onClick={(e) => openWhatsApp(e, doc)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold shadow-xs transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span>WhatsApp Jayanand</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}