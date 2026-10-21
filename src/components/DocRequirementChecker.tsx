"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { docRequirements, DocRequirement } from "@/data/docRequirements";
import {
  FileText,
  Clock,
  CheckCircle2,
  Share2,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Copy,
  Check,
} from "lucide-react";

export default function DocRequirementChecker() {
  const { currentTheme, language, t } = useApp();
  const [selectedDocId, setSelectedDocId] = useState<string>("domicile");
  const [copied, setCopied] = useState<boolean>(false);

  const selectedDoc: DocRequirement =
    docRequirements.find((d) => d.id === selectedDocId) || docRequirements[0];

  const handleCopyChecklist = () => {
    const title = language === "en" ? selectedDoc.nameEn : selectedDoc.nameHi;
    const docs =
      language === "en"
        ? selectedDoc.requiredDocsEn
        : selectedDoc.requiredDocsHi;
    const text = `📋 *Documents Required for ${title}*\n\n` +
      docs.map((doc, i) => `${i + 1}. ${doc}`).join("\n") +
      `\n\n📍 *Office:* Seva Administrative Services, Tulip Plaza, Sector-13, Kharghar\n📞 *Call/WhatsApp:* +91 9323467370`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentDocs =
    language === "en" ? selectedDoc.requiredDocsEn : selectedDoc.requiredDocsHi;
  const currentTitle =
    language === "en" ? selectedDoc.nameEn : selectedDoc.nameHi;
  const currentTurnaround =
    language === "en" ? selectedDoc.turnaroundEn : selectedDoc.turnaroundHi;
  const currentFee =
    language === "en" ? selectedDoc.govtFeeEn : selectedDoc.govtFeeHi;

  const whatsappMessage = encodeURIComponent(
    `Hello Jayanand Sir, I need assistance with *${selectedDoc.nameEn}*. Please guide me on the next steps and document verification.`
  );

  return (
    <section id="checker" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: currentTheme.vars.accent }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: currentTheme.vars.primary }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border"
            style={{
              backgroundColor: currentTheme.vars.accentSoft,
              color: currentTheme.vars.accent,
              borderColor: `${currentTheme.vars.accent}33`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.docChecker.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.docChecker.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.docChecker.subtitle}
          </p>
        </div>

        {/* Interactive Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {docRequirements.map((item) => {
            const isSelected = item.id === selectedDocId;
            const label = language === "en" ? item.nameEn : item.nameHi;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedDocId(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-white shadow-lg shadow-black/10 scale-[1.02]"
                    : "bg-slate-100 hover:bg-slate-200/70 text-slate-700 border border-slate-200"
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: currentTheme.vars.primary,
                        borderColor: currentTheme.vars.primary,
                      }
                    : {}
                }
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>{label.split(" (")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Result Card */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden card-3d-hover max-w-4xl mx-auto">
          {/* Card Title Banner */}
          <div
            className="p-6 sm:p-8 text-white relative"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.vars.heroGradFrom}, ${currentTheme.vars.heroGradVia})`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Documentation Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                  {currentTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  {selectedDoc.highlight}
                </p>
              </div>

              {/* Turnaround Pill */}
              <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                  <Clock className="w-4 h-4" />
                  {t.docChecker.turnaroundTitle}
                </div>
                <span className="text-sm font-bold text-white">
                  {currentTurnaround}
                </span>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4"
                  style={{ color: currentTheme.vars.accent }}
                />
                {t.docChecker.requiredDocsTitle}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: currentTheme.vars.accentSoft,
                        color: currentTheme.vars.accent,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Advisory */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-8 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Government Fee &amp; Legal Advisory:{" "}
                </span>
                {currentFee}. All original documents will be verified and handed back safely on the same day. Self-declaration affidavits and notary stamps are arranged on-site at Tulip Plaza CHS.
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200/80">
              <a
                href={`https://wa.me/919323467370?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: "#16a34a" }}
              >
                <Share2 className="w-4 h-4" />
                {t.docChecker.consultNow}
              </a>

              <button
                onClick={handleCopyChecklist}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-700 text-sm font-semibold transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copied Checklist!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Checklist</span>
                  </>
                )}
              </button>

              <a
                href="tel:+919323467370"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white text-sm font-semibold transition-all cursor-pointer"
                style={{ backgroundColor: currentTheme.vars.accent }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 9323467370</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
