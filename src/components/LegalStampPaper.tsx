"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import confetti from "canvas-confetti";
import {
  FileText,
  ShieldCheck,
  CheckCircle,
  Building,
  Award,
  Stamp,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone,
  RefreshCw,
} from "lucide-react";

interface DeedDocument {
  id: string;
  name: string;
  category: string;
  actTitle: string;
  serialNumber: string;
  applicantPlaceholder: string;
  propertyOrBizDetails: string;
  clearanceSpeed: string;
  stampLabel: string;
}

const deedDocuments: DeedDocument[] = [
  {
    id: "domicile",
    name: "Certificate of Domicile & Age Proof",
    category: "CITIZEN DOCUMENTATION",
    actTitle: "GOVERNMENT OF MAHARASHTRA • REVENUE DEPARTMENT",
    serialNumber: "MH-DOC/KHARGHAR/SEC13/9842",
    applicantPlaceholder: "Kharghar Resident / Citizen Applicant",
    propertyOrBizDetails: "Tulip Plaza CHS, Sector-13 Kharghar, Navi Mumbai - 410210",
    clearanceSpeed: "3 - 7 Working Days (Direct Tahsildar Counter)",
    stampLabel: "VERIFIED & ATTESTED",
  },
  {
    id: "gumasta",
    name: "Shop & Commercial Establishment Licence",
    category: "COMMERCIAL & MSME",
    actTitle: "MAHARASHTRA SHOPS & ESTABLISHMENTS ACT, 2017",
    serialNumber: "NMMC/GUM/2026/04812",
    applicantPlaceholder: "Proprietor / Managing Partner",
    propertyOrBizDetails: "Commercial Shop / Retail Outlet, Sector-13 Kharghar",
    clearanceSpeed: "24 - 48 Hours Express Delivery",
    stampLabel: "OFFICIALLY REGISTERED",
  },
  {
    id: "cidco",
    name: "CIDCO Transfer & Final Clearance NOC",
    category: "CIDCO & PROPERTY DEED",
    actTitle: "CITY AND INDUSTRIAL DEVELOPMENT CORP. OF MAHARASHTRA",
    serialNumber: "CIDCO/TRANS-NOC/NAVI-MUM/7719",
    applicantPlaceholder: "Buyer / Transferee & Allottee",
    propertyOrBizDetails: "Residential Flat / Commercial Plot, Kharghar Node",
    clearanceSpeed: "Official CIDCO Clearance & Mortgage NOC",
    stampLabel: "CIDCO CLEARED",
  },
  {
    id: "rent",
    name: "Registered Rent Agreement & Police NOC",
    category: "LEGAL TENANCY",
    actTitle: "DEPARTMENT OF REGISTRATION & STAMPS • MAHARASHTRA",
    serialNumber: "IGR/RENT-AGMT/2026/11029",
    applicantPlaceholder: "Licensor (Owner) & Licensee (Tenant)",
    propertyOrBizDetails: "Sector-13 & Sector-20 Residential High-Rise",
    clearanceSpeed: "Same-Day Government Biometric Verification",
    stampLabel: "POLICE & IGR VERIFIED",
  },
];

export default function LegalStampPaper() {
  const { currentTheme, language, t } = useApp();
  const [activeDocId, setActiveDocId] = useState<string>("domicile");
  const [isStamped, setIsStamped] = useState<boolean>(true);
  const [isStamping, setIsStamping] = useState<boolean>(false);

  const activeDoc =
    deedDocuments.find((d) => d.id === activeDocId) || deedDocuments[0];

  const handleSlamStamp = () => {
    setIsStamping(true);
    playHapticSound("switch");

    setTimeout(() => {
      setIsStamped(true);
      setIsStamping(false);
      playHapticSound("success");

      // Trigger Confetti Stamp Burst
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#d97706", "#16a34a", "#dc2626", "#0f172a"],
        });
      } catch {}
    }, 400);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Jayanand Sir, I was reviewing the *${activeDoc.name}* (${activeDoc.serialNumber}) on your website. Please guide me on getting this verified and processed for my application.`
  );

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Interactive Tabs Header */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 mb-3 overflow-x-auto text-[11px] font-bold">
        {deedDocuments.map((doc) => {
          const isSelected = doc.id === activeDocId;
          return (
            <button
              key={doc.id}
              onClick={() => {
                setActiveDocId(doc.id);
                setIsStamped(true);
                playHapticSound("click");
              }}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {doc.id.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Realistic Indian Non-Judicial Stamp Paper Container */}
      <div
        className={`relative rounded-3xl p-6 sm:p-8 bg-[#fffdf9] text-slate-900 shadow-2xl border-4 transition-all duration-300 ${
          isStamping ? "scale-[0.98] ring-4 ring-amber-400" : ""
        }`}
        style={{
          borderColor: currentTheme.vars.accent,
          boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px ${currentTheme.vars.accentGlow}`,
        }}
      >
        {/* Subtle Paper Parchment Texture Effect */}
        <div
          className="absolute inset-0 rounded-3xl opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Intricate Legal Guilloché Header (₹100 Non-Judicial Emblem) */}
        <div className="relative border-2 border-amber-900/30 rounded-2xl p-4 bg-amber-50/50 mb-5 overflow-hidden">
          {/* Watermark Crest */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none text-6xl font-black text-amber-900">
            सत्यमेव जयते
          </div>

          <div className="flex items-center justify-between border-b border-amber-900/20 pb-2.5 mb-2.5">
            <div className="flex items-center gap-2">
              {/* Ashoka / Government Emblem Motif */}
              <div className="w-9 h-9 rounded-full bg-amber-900/10 border border-amber-900/30 flex items-center justify-center font-serif font-black text-amber-950 text-xs">
                स
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-amber-900 uppercase block">
                  भारत INDIA • NON-JUDICIAL
                </span>
                <span className="text-[9px] font-bold text-amber-800 tracking-wider">
                  MAHARASHTRA STATE NOTARY &amp; LIAISON
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-sm font-black text-amber-950 font-serif">
                ₹ 500
              </span>
              <span className="block text-[8px] font-mono text-amber-800">
                DUTY PAID
              </span>
            </div>
          </div>

          <p className="text-[10px] font-mono text-center font-bold text-amber-900 tracking-wider">
            {activeDoc.actTitle}
          </p>
        </div>

        {/* Document Body & Metadata */}
        <div className="space-y-3 mb-6 relative z-10">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-200 pb-1.5">
            <span>DOCKET: {activeDoc.serialNumber}</span>
            <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full text-[10px]">
              AUTHENTIC RECORD
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Instrument Type
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {activeDoc.name}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200/80">
              <span className="text-[9px] font-bold text-slate-500 uppercase block">
                Jurisdiction &amp; Desk
              </span>
              <span className="font-bold text-slate-900 text-[11px]">
                Tulip Plaza CHS, Sec-13, Kharghar
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200/80">
              <span className="text-[9px] font-bold text-slate-500 uppercase block">
                Clearance Timeframe
              </span>
              <span className="font-bold text-emerald-700 text-[11px]">
                {activeDoc.clearanceSpeed}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Slammed Stamps & Wax Seal Section */}
        <div className="relative p-4 rounded-2xl bg-amber-50/30 border border-amber-200/60 min-h-[110px] flex items-center justify-between flex-wrap gap-4 overflow-hidden">
          {/* Rubber Notary Stamp (The Interactive Slam Target) */}
          <div className="relative">
            {isStamped && (
              <div
                className="transform -rotate-12 border-2 border-red-600/90 rounded-xl p-2 px-3 text-red-600 bg-red-50/40 font-mono text-center tracking-tight shadow-xs animate-in zoom-in-75 duration-200 select-none"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at center, rgba(220, 38, 38, 0.08) 0%, transparent 80%)",
                }}
              >
                <div className="border border-dashed border-red-500/70 p-1.5 rounded-lg">
                  <span className="text-[9px] font-black tracking-widest block uppercase text-red-700">
                    SEVA ADMINISTRATIVE SERVICES
                  </span>
                  <span className="text-xs font-black tracking-wider block my-0.5 text-red-600">
                    ★ {activeDoc.stampLabel} ★
                  </span>
                  <span className="text-[8px] font-bold block text-red-500">
                    KHARGHAR NAVI MUMBAI • JAYANAND
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Official Gold Embossed Wax Seal Medallion with Red Ribbon */}
          <div className="relative flex flex-col items-center">
            {/* Hanging Ribbon */}
            <div className="w-3 h-8 bg-gradient-to-b from-red-600 to-red-700 rounded-b shadow-sm -mt-2 mb-1" />

            <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 shadow-lg border-2 border-amber-300 flex items-center justify-center text-amber-950 font-black text-center p-1 cursor-pointer transform hover:scale-105 transition-transform">
              <div className="w-11 h-11 rounded-full border border-dashed border-amber-800/40 flex flex-col items-center justify-center">
                <Award className="w-4 h-4 text-amber-900" />
                <span className="text-[7px] font-black leading-tight uppercase text-amber-950">
                  SEVA
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Re-Stamp Action Button */}
          <div className="flex flex-col gap-1.5 ml-auto">
            <button
              onClick={handleSlamStamp}
              disabled={isStamping}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold transition-all shadow cursor-pointer disabled:opacity-50"
            >
              <Stamp className="w-3.5 h-3.5 text-amber-400" />
              <span>{isStamping ? "Stamping..." : "Slam Notary Stamp"}</span>
            </button>
            <span className="text-[8px] text-slate-400 font-mono text-center">
              Click to verify attestation
            </span>
          </div>
        </div>

        {/* Bottom Fast-Track Actions */}
        <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2.5">
          <a
            href={`https://wa.me/919323467370?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playHapticSound("click")}
            className="w-full flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
            style={{ backgroundColor: "#16a34a" }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Process {activeDoc.id.toUpperCase()} on WhatsApp</span>
          </a>

          <a
            href="tel:+919323467370"
            onClick={() => playHapticSound("click")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs transition-all cursor-pointer"
            style={{ backgroundColor: currentTheme.vars.accent }}
          >
            <Phone className="w-4 h-4" />
            <span>Call Jayanand</span>
          </a>
        </div>
      </div>
    </div>
  );
}
