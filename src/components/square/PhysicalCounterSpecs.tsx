"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import {
  Fingerprint,
  Stamp,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function PhysicalCounterSpecs() {
  const { language, currentTheme } = useApp();

  const specs = [
    {
      icon: Fingerprint,
      title: "Doorstep Biometrics",
      subtitle: "We bring the thumb scanner to your home or office for registered rent agreements.",
      details: [
        "No trips to the police station for tenant verification",
        "Instant Aadhaar digital thumb scan in 15 minutes",
        "Available at our Kharghar office or your doorstep",
      ],
      tag: "SAME-DAY SERVICE",
      cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/40 border-emerald-200/80",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/20",
      tagStyle: "bg-emerald-100 text-emerald-800 border-emerald-200",
      checkColor: "text-emerald-600",
      btnColor: "text-emerald-700 hover:text-emerald-800",
      whatsappMsg: "Hello Jayanand Sir, I need doorstep biometric verification for a Rent Agreement in Kharghar.",
    },
    {
      icon: Stamp,
      title: "₹100 Stamp & Notary Desk",
      subtitle: "Genuine Maharashtra stamp papers, affidavits, and notary seals in 30 minutes.",
      details: [
        "Name change, gap certificates & address affidavits",
        "Authorized notary attestation on the spot",
        "Official government challan receipts provided",
      ],
      tag: "READY IN 30 MIN",
      cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/40 border-amber-200/80",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/20",
      tagStyle: "bg-amber-100 text-amber-900 border-amber-200",
      checkColor: "text-amber-600",
      btnColor: "text-amber-700 hover:text-amber-800",
      whatsappMsg: "Hello Jayanand Sir, I need an urgent ₹100 Stamp Paper / Affidavit at your Sector 13 office.",
    },
    {
      icon: Building,
      title: "We Stand in Govt Queues for You",
      subtitle: "Direct work with CIDCO Bhavan, NMMC Ward Office, and Sub-Registrar Belapur.",
      details: [
        "CIDCO Transfer, Mortgage NOC & Final Orders",
        "NMMC Gumasta shop licenses & food permits",
        "Belapur sale deed and flat registration booking",
      ],
      tag: "ZERO RUNNING AROUND",
      cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/40 border-blue-200/80",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/20",
      tagStyle: "bg-blue-100 text-blue-900 border-blue-200",
      checkColor: "text-blue-600",
      btnColor: "text-blue-700 hover:text-blue-800",
      whatsappMsg: "Hello Jayanand Sir, I need assistance with CIDCO Transfer / NMMC Gumasta in Kharghar.",
    },
    {
      icon: ShieldCheck,
      title: "Your Papers Are 100% Safe",
      subtitle: "Original documents are scanned and handed back to you the very same day.",
      details: [
        "Total privacy for your Aadhaar, PAN & property papers",
        "Clear printed receipt issued for every application",
        "Jayanand personally reviews and tracks every file",
      ],
      tag: "SAFE & PRIVATE",
      cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-pink-50/40 border-purple-200/80",
      iconBg: "bg-purple-600 text-white shadow-md shadow-purple-600/20",
      tagStyle: "bg-purple-100 text-purple-900 border-purple-200",
      checkColor: "text-purple-600",
      btnColor: "text-purple-700 hover:text-purple-800",
      whatsappMsg: "Hello Jayanand Sir, I would like to visit your office to submit my documents for review.",
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-24 border-b border-neutral-200 scroll-mt-16 relative overflow-hidden"
      style={{
        backgroundColor: currentTheme.vars.surfaceBg,
      }}
    >
      {/* Decorative ambient color spots */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div id="specs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Warm Friendly Copy */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
            style={{
              backgroundColor: currentTheme.vars.accentSoft,
              color: currentTheme.vars.primaryDark,
            }}
          >
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>REAL OFFICE • SECTOR-13 KHARGHAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
            A real office you can walk into. <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${currentTheme.vars.primary}, ${currentTheme.vars.accent})`,
              }}
            >
              Meet Jayanand. Get it done fast.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            No chatbots or middleman confusion. Visit our physical office at Tulip Plaza in Sector-13 Kharghar, or book a home visit. We handle the paperwork, queues, and government follow-ups for you.
          </p>
        </div>

        {/* 2x2 Grid with Rich Warm Colorful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className={`rounded-3xl p-6 sm:p-8 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${spec.cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${spec.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border shadow-2xs ${spec.tagStyle}`}>
                      {spec.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6 leading-relaxed font-normal">
                    {spec.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/5">
                    {spec.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800 font-medium">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${spec.checkColor}`} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-neutral-500">Shop No. 03, Tulip Plaza CHS</span>
                  <a
                    href={`https://wa.me/919323467370?text=${encodeURIComponent(spec.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold flex items-center gap-1.5 transition-colors ${spec.btnColor}`}
                  >
                    <span>WhatsApp Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}