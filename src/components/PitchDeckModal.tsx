"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  X,
  TrendingUp,
  MessageCircle,
  Clock,
  Languages,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";

export default function PitchDeckModal() {
  const { isPitchModalOpen, setIsPitchModalOpen } = useApp();

  if (!isPitchModalOpen) return null;

  const pitchPoints = [
    {
      icon: MessageCircle,
      title: "1-Click Direct WhatsApp Lead Generation",
      desc: "Every single service (from Domicile to CIDCO NOC) has a dedicated WhatsApp trigger with pre-filled message text. Zero friction, zero lost leads.",
      benefit: "Converts 4x better than standard web forms",
      badge: "High Conversion",
    },
    {
      icon: Clock,
      title: "Interactive Document Checklist Tool",
      desc: "Clients constantly call asking: 'What papers should I bring?'. This interactive tool gives them the exact checklist before visiting Sector-13.",
      benefit: "Saves 2+ hours of repetitive customer phone calls daily",
      badge: "Huge Time Saver",
    },
    {
      icon: Languages,
      title: "Instant English <-> Hindi Bilingual Toggle",
      desc: "Kharghar has both young corporate professionals who prefer English and traditional business traders/seniors who prefer Hindi.",
      benefit: "100% audience coverage across Navi Mumbai",
      badge: "Max Accessibility",
    },
    {
      icon: TrendingUp,
      title: "Dual Business Synergy (Gov Services + Real Estate)",
      desc: "Customers who register a rent agreement or Gumasta licence are the exact same people looking to buy, sell, or rent shops and flats in Kharghar.",
      benefit: "Cross-sells lucrative real estate deals automatically",
      badge: "Revenue Multiplier",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsPitchModalOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pitch Hero Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <button
            onClick={() => setIsPitchModalOpen(false)}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Pitch &amp; Growth Strategy
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Why This Website Will Blow Jayanand Away
          </h3>
          <p className="text-sm text-slate-300 max-w-xl">
            This is not a static digital business card; it is a custom-engineered client acquisition engine built specifically for Seva Administrative Services &amp; Real Estate in Kharghar.
          </p>
        </div>

        {/* Pitch Cards */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          {pitchPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                      <h4 className="font-bold text-base text-slate-900">
                        {point.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {point.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                      {point.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100/80 px-3 py-1.5 rounded-lg w-fit">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{point.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Testimonial / Credibility Box */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-amber-950 mb-1">
                Kharghar Sector-13 Local Dominance
              </h5>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Tulip Plaza CHS is centrally situated in Sector-13. The site is optimized with exact location landmarks, Marathi cultural taglines (|| एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||), and prompt call-to-actions to turn every visitor into an in-person or WhatsApp customer.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Ready to present? Use the live theme picker and language toggle!
          </span>
          <button
            onClick={() => setIsPitchModalOpen(false)}
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
          >
            Show Website
          </button>
        </div>
      </div>
    </div>
  );
}
