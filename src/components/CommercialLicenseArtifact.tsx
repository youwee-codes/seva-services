"use client";

import React from "react";
import { InteractiveTilt } from "@/components/Artifacts";
import { ShieldCheck, Award, CheckCircle2, Building, Sparkles } from "lucide-react";

export default function CommercialLicenseArtifact({
  className = "",
  licenseType = "GUMASTA & FSSAI COMPLIANCE DOCKET",
  enterpriseName = "REGISTERED COMMERCIAL ENTERPRISE",
  licenseNo = "NMMC/MH-2026/GUM-4819",
}: {
  className?: string;
  licenseType?: string;
  enterpriseName?: string;
  licenseNo?: string;
}) {
  return (
    <InteractiveTilt className={`w-[320px] sm:w-[380px] h-[460px] sm:h-[500px] ${className}`}>
      <div
        style={{
          backgroundColor: "#031b15",
          backgroundImage: `
            radial-gradient(ellipse at 50% 20%, rgba(6, 78, 59, 0.7) 0%, rgba(2, 44, 34, 0.98) 75%),
            linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 24px 24px, 24px 24px",
          boxShadow: `
            0 25px 50px -12px rgba(2, 44, 34, 0.8),
            0 0 0 1px rgba(212, 175, 55, 0.35),
            inset 0 0 40px rgba(0, 0, 0, 0.6)
          `,
        }}
        className="w-full h-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between border-2 border-[#d4af37]/50 relative overflow-hidden text-[#d4af37] font-serif shadow-2xl"
      >
        {/* Ornate Gold Border Corners */}
        <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#d4af37]" />

        {/* Certificate Top Crest */}
        <div className="text-center relative z-10 border-b border-[#d4af37]/30 pb-3">
          <div className="text-[8px] font-mono tracking-[0.3em] uppercase text-[#fef08a] block mb-1">
            GOVERNMENT OF MAHARASHTRA • NMMC WARD DESK
          </div>
          <h4 className="text-sm sm:text-base font-extrabold tracking-tight text-white uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            COMMERCIAL COMPLIANCE CERTIFICATE
          </h4>
          <div className="text-[9px] font-mono text-emerald-400 mt-0.5 font-bold">
            STATUTORY TRADE &amp; TAX REGISTRY
          </div>
        </div>

        {/* Certificate Center Info */}
        <div className="my-auto py-2 relative z-10 space-y-2.5 text-center font-sans">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 text-[10px] font-mono font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>ACTIVE COMPLIANCE STATUS: VERIFIED</span>
          </div>

          <div className="space-y-1 pt-1">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">
              ENTERPRISE TITLE
            </span>
            <div className="text-xs sm:text-sm font-black text-white tracking-wide">
              {enterpriseName}
            </div>
            <span className="text-[10px] text-amber-200/80 font-mono block">
              Sector 13, Kharghar, Navi Mumbai - 410210
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-left bg-black/40 rounded-xl p-2.5 border border-[#d4af37]/20 font-mono text-[9.5px]">
            <div>
              <span className="text-neutral-400 block">REG NO:</span>
              <span className="text-white font-bold">{licenseNo}</span>
            </div>
            <div>
              <span className="text-neutral-400 block">VALIDITY:</span>
              <span className="text-emerald-400 font-bold">LIFETIME / PERPETUAL</span>
            </div>
            <div>
              <span className="text-neutral-400 block">DEPARTMENT:</span>
              <span className="text-white">NMMC / MSME / GST</span>
            </div>
            <div>
              <span className="text-neutral-400 block">LIAISON DESK:</span>
              <span className="text-[#d4af37] font-bold">JAYANAND (SEVA)</span>
            </div>
          </div>
        </div>

        {/* Bottom Gold Hologram Emblem */}
        <div className="border-t border-[#d4af37]/30 pt-2 flex items-center justify-between relative z-10 text-[9px] font-mono">
          <div className="flex items-center gap-1.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 border border-amber-300 flex items-center justify-center text-neutral-950 shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left text-neutral-300">
              <div className="font-bold text-white">OFFICIAL RECORD</div>
              <div className="text-[8px] text-emerald-400">100% AUDIT READY</div>
            </div>
          </div>

          <div className="text-right text-[#d4af37]/80">
            <div>DESK: TULIP PLAZA</div>
            <div>TEL: +91 9323467370</div>
          </div>
        </div>
      </div>
    </InteractiveTilt>
  );
}
