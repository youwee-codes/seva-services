"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, ShieldCheck, Clock, FileText, ArrowRight, MessageCircle, Zap } from "lucide-react";

export default function SquareSLAPricing() {
  const { language, currentTheme } = useApp();

  const pricingPillars = [
    {
      title: "Government Statutory Fees",
      rate: "100% Official Receipts",
      desc: "Zero extra markup. You pay the exact government fee and get the authentic Maharashtra treasury challan receipt.",
      features: [
        "Official treasury duty paid challan copy provided",
        "Direct payments to Treasury / NMMC / CIDCO",
        "Clear fee schedule explained before we start",
      ],
      badge: "OFFICIAL GOVT FEE",
      cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/40 border-emerald-200/90",
      badgeStyle: "bg-emerald-100 text-emerald-900 border-emerald-200",
      rateColor: "text-emerald-900",
      checkColor: "text-emerald-600",
    },
    {
      title: "Our Fixed Service Charge",
      rate: "Upfront & Fixed",
      desc: "One simple, predictable fee for drafting, notary attestations, and standing in the government lines for you.",
      features: [
        "Covers drafting, document filing & queue liaison",
        "Includes biometric setup & notary attestations",
        "Zero surprise costs midway through your file",
      ],
      badge: "FIXED SERVICE FEE",
      cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/40 border-amber-200/90",
      badgeStyle: "bg-amber-100 text-amber-900 border-amber-200",
      rateColor: "text-amber-900",
      checkColor: "text-amber-600",
    },
    {
      title: "Free Document Check",
      rate: "₹0 (Always Free)",
      desc: "Bring your papers to our Tulip Plaza office. We check them for free so your application is never rejected.",
      features: [
        "Catches missing proofs before paying any fees",
        "Name spelling check across Aadhaar & PAN",
        "No obligation to proceed after our review",
      ],
      badge: "FREE PRE-CHECK",
      cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/40 border-blue-200/90",
      badgeStyle: "bg-blue-100 text-blue-900 border-blue-200",
      rateColor: "text-blue-900",
      checkColor: "text-blue-600",
    },
  ];

  const slaTable = [
    { service: "Online Registered Rent Agreement", sla: "Same Day", authority: "IGR Maharashtra", tag: "Doorstep Biometric", tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { service: "Gumasta Shop & Establishment Licence", sla: "24 – 48 Hours", authority: "NMMC Ward Office", tag: "Fast License", tagColor: "bg-blue-100 text-blue-800 border-blue-200" },
    { service: "Passport Appointment Booking", sla: "24 – 48 Hours", authority: "Passport Seva Kendra", tag: "PSK Confirmed", tagColor: "bg-purple-100 text-purple-800 border-purple-200" },
    { service: "Udyam Aadhar MSME Registration", sla: "24 Hours", authority: "Ministry of MSME", tag: "Instant e-Certificate", tagColor: "bg-teal-100 text-teal-800 border-teal-200" },
    { service: "All Types of Legal Affidavits", sla: "30 – 60 Minutes", authority: "Notary Public", tag: "On-Site Stamping", tagColor: "bg-amber-100 text-amber-800 border-amber-200" },
    { service: "Income Certificate / Rahivashi", sla: "5 – 7 Days", authority: "Talathi / Tahsildar", tag: "Signed & Sealed", tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200" },
    { service: "Maharashtra Domicile Certificate", sla: "7 – 10 Days", authority: "Tahsildar / Revenue Dept", tag: "Official Clearance", tagColor: "bg-sky-100 text-sky-800 border-sky-200" },
    { service: "CIDCO Transfer NOC & Mortgage", sla: "15 – 21 Days", authority: "CIDCO Bhavan", tag: "Final Legal Order", tagColor: "bg-rose-100 text-rose-800 border-rose-200" },
  ];

  return (
    <section
      id="sla"
      className="py-16 sm:py-24 border-b border-neutral-200 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.vars.surfaceBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
            style={{
              backgroundColor: currentTheme.vars.accentSoft,
              color: currentTheme.vars.primaryDark,
            }}
          >
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>CLEAR PRICING • ZERO SECRETS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
            Honest pricing. <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${currentTheme.vars.primary}, ${currentTheme.vars.accent})`,
              }}
            >
              Guaranteed timelines.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            No vague quotes or surprise costs. We tell you the exact government fee and our fixed service charge upfront.
          </p>
        </div>

        {/* 3 Colorful Pricing Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${pillar.cardBg}`}
            >
              <div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border inline-block mb-3 ${pillar.badgeStyle}`}>
                  {pillar.badge}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {pillar.title}
                </h3>
                <span className={`text-2xl font-black block mb-3 tracking-tight ${pillar.rateColor}`}>
                  {pillar.rate}
                </span>
                <p className="text-xs text-neutral-600 mb-6 leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-black/5">
                  {pillar.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-800 font-medium">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pillar.checkColor}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5">
                <a
                  href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20would%20like%20to%20get%20a%20price%20quote%20for%20my%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Fee on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Timelines Table with Colorful Badges */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                How Fast We Deliver Each Service
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                Average working days required from document submission to delivery:
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Direct Liaison
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px] uppercase">
                  <th className="pb-3 font-semibold">Service Name</th>
                  <th className="pb-3 font-semibold">Expected Timeline</th>
                  <th className="pb-3 font-semibold hidden md:table-cell">Government Authority</th>
                  <th className="pb-3 font-semibold text-right">Delivery Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {slaTable.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3.5 font-bold text-neutral-900">
                      {row.service}
                    </td>
                    <td className="py-3.5 font-bold text-emerald-700">
                      {row.sla}
                    </td>
                    <td className="py-3.5 text-neutral-500 hidden md:table-cell">
                      {row.authority}
                    </td>
                    <td className="py-3.5 text-right">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${row.tagColor}`}>
                        {row.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}