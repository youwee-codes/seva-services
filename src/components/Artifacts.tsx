"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, CheckCircle2, Award, Building, Sparkles } from "lucide-react";

// Specular sheen & tilt card wrapper
export function InteractiveTilt({
  children,
  className = "",
  maxTilt = 18,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-maxTilt, maxTilt]);
  const sheenX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative [perspective:1200px] select-none ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative transition-shadow duration-300"
      >
        {children}

        {/* Dynamic Specular Sheen Layer */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)`,
            pointerEvents: "none",
          }}
          className="absolute inset-0 rounded-2xl z-30 transition-opacity duration-300 opacity-60 hover:opacity-100"
        />
      </motion.div>
    </div>
  );
}

// 1. THE 3D INDIAN PASSPORT COMPONENT
export function PassportArtifact({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-[240px] h-[330px]",
    md: "w-[280px] sm:w-[310px] h-[390px] sm:h-[430px]",
    lg: "w-[320px] sm:w-[360px] h-[450px] sm:h-[500px]",
  }[size];

  return (
    <InteractiveTilt className={`${sizeClasses} ${className}`}>
      <div
        style={{
          backgroundColor: "#0a192f",
          backgroundImage: `
            radial-gradient(ellipse at 50% 20%, rgba(26, 44, 76, 0.7) 0%, rgba(10, 25, 47, 0.98) 80%),
            radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
            repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)
          `,
          boxShadow: `
            0 25px 50px -12px rgba(5, 12, 24, 0.7),
            0 0 0 1px rgba(212, 175, 55, 0.35),
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            inset 0 -2px 6px rgba(0, 0, 0, 0.8),
            inset 3px 0 6px rgba(0, 0, 0, 0.4)
          `,
        }}
        className="w-full h-full rounded-2xl p-6 flex flex-col items-center justify-between border border-[#d4af37]/40 relative overflow-hidden text-center text-[#d4af37]"
      >
        {/* Passport Spine Crease Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 via-black/20 to-transparent border-r border-[#d4af37]/20" />

        {/* Top Titles */}
        <div className="space-y-1.5 pt-2 relative z-10">
          <div className="tracking-[0.28em] text-[11px] sm:text-xs font-semibold text-[#f5df97] uppercase">
            पासपोर्ट
          </div>
          <div className="tracking-[0.38em] text-xs sm:text-sm font-bold text-[#d4af37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            PASSPORT
          </div>
        </div>

        {/* Ashoka Pillar / National Emblem of India */}
        <div className="my-auto relative z-10 flex flex-col items-center py-2">
          <div className="w-24 h-28 sm:w-28 sm:h-32 text-[#d4af37] drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
            <svg
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full stroke-[#e6ca65] fill-[#d4af37]/15"
            >
              {/* Lion Capitals Silhouette & Details */}
              <circle cx="100" cy="50" r="26" stroke="#d4af37" strokeWidth="2.5" />
              <circle cx="68" cy="62" r="18" stroke="#d4af37" strokeWidth="2" />
              <circle cx="132" cy="62" r="18" stroke="#d4af37" strokeWidth="2" />

              {/* Lion Faces stylized */}
              <path d="M92 42C92 38 108 38 108 42C108 48 104 54 100 58C96 54 92 48 92 42Z" fill="#d4af37" />
              <circle cx="95" cy="45" r="2" fill="#0a192f" />
              <circle cx="105" cy="45" r="2" fill="#0a192f" />
              <path d="M62 58C62 54 74 54 74 58C74 63 70 68 68 70C65 68 62 63 62 58Z" fill="#d4af37" />
              <path d="M126 58C126 54 138 54 138 58C138 63 134 68 132 70C129 68 126 63 126 58Z" fill="#d4af37" />

              {/* Manes */}
              <path d="M80 72Q100 85 120 72Q115 100 100 110Q85 100 80 72Z" fill="#d4af37" fillOpacity="0.3" stroke="#d4af37" strokeWidth="2" />
              <path d="M55 76Q65 92 78 88" stroke="#d4af37" strokeWidth="2" />
              <path d="M145 76Q135 92 122 88" stroke="#d4af37" strokeWidth="2" />

              {/* Abacus Base Platform */}
              <rect x="42" y="112" width="116" height="18" rx="3" stroke="#d4af37" strokeWidth="2.5" fill="#d4af37" fillOpacity="0.2" />

              {/* Central Ashoka Chakra */}
              <circle cx="100" cy="121" r="7.5" stroke="#d4af37" strokeWidth="1.8" />
              <circle cx="100" cy="121" r="2" fill="#d4af37" />
              {/* Spokes */}
              <line x1="100" y1="113.5" x2="100" y2="128.5" stroke="#d4af37" strokeWidth="1" />
              <line x1="92.5" y1="121" x2="107.5" y2="121" stroke="#d4af37" strokeWidth="1" />
              <line x1="94.7" y1="115.7" x2="105.3" y2="126.3" stroke="#d4af37" strokeWidth="1" />
              <line x1="94.7" y1="126.3" x2="105.3" y2="115.7" stroke="#d4af37" strokeWidth="1" />

              {/* Galloping Horse (Left) & Bull (Right) stylized */}
              <path d="M52 121C58 117 64 122 68 121" stroke="#d4af37" strokeWidth="1.5" />
              <path d="M132 121C136 122 142 117 148 121" stroke="#d4af37" strokeWidth="1.5" />

              {/* Bell Lotus Pedestal */}
              <path d="M48 130Q100 148 152 130L148 144Q100 162 52 144Z" stroke="#d4af37" strokeWidth="2" fill="#d4af37" fillOpacity="0.25" />

              {/* Stepped Plinth */}
              <rect x="36" y="146" width="128" height="8" rx="2" stroke="#d4af37" strokeWidth="2" fill="#d4af37" fillOpacity="0.15" />

              {/* Satyameva Jayate (सत्यमेव जयते) Inscription Base */}
              <text
                x="100"
                y="172"
                textAnchor="middle"
                fill="#d4af37"
                fontSize="13"
                fontWeight="bold"
                letterSpacing="1.5"
                fontFamily="sans-serif"
              >
                सत्यमेव जयते
              </text>
              <line x1="45" y1="184" x2="155" y2="184" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#d4af37]/80 uppercase font-medium mt-1">
            सत्यमेव जयते
          </div>
        </div>

        {/* Bottom Country Titles */}
        <div className="space-y-1.5 pb-2 relative z-10">
          <div className="tracking-[0.26em] text-[10px] sm:text-[11px] font-semibold text-[#f5df97]">
            भारत गणराज्य
          </div>
          <div className="tracking-[0.32em] text-xs sm:text-sm font-bold text-[#d4af37] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            REPUBLIC OF INDIA
          </div>
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[9px] text-[#d4af37]/70 font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 inline-block" />
            OFFICIAL TRAVEL DOCUMENT
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 inline-block" />
          </div>
        </div>

        {/* Gold Corner Ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br-sm pointer-events-none" />
      </div>
    </InteractiveTilt>
  );
}

// DYNAMIC RUBBER INK STAMP COMPONENT
export function InkStamp({
  label = "REGISTERED & VERIFIED",
  subLabel = "SEVA ADMINISTRATIVE SERVICES",
  date = "2026 • KHARGHAR",
  color = "purple", // purple | red | green
  animateIn = true,
  className = "",
}: {
  label?: string;
  subLabel?: string;
  date?: string;
  color?: "purple" | "red" | "green";
  animateIn?: boolean;
  className?: string;
}) {
  const colorMap = {
    purple: {
      text: "text-purple-700",
      border: "border-purple-700/80",
      bg: "bg-purple-900/5",
      ring: "stroke-purple-700",
      glow: "shadow-[0_0_15px_rgba(126,34,206,0.25)]",
    },
    red: {
      text: "text-rose-700",
      border: "border-rose-700/80",
      bg: "bg-rose-900/5",
      ring: "stroke-rose-700",
      glow: "shadow-[0_0_15px_rgba(190,18,60,0.25)]",
    },
    green: {
      text: "text-emerald-700",
      border: "border-emerald-700/80",
      bg: "bg-emerald-900/5",
      ring: "stroke-emerald-700",
      glow: "shadow-[0_0_15px_rgba(4,120,87,0.3)]",
    },
  }[color];

  return (
    <motion.div
      initial={animateIn ? { scale: 2.2, opacity: 0, rotate: -25 } : { scale: 1, opacity: 0.9, rotate: -12 }}
      whileInView={animateIn ? { scale: 1, opacity: 0.92, rotate: -12 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`select-none pointer-events-none relative inline-flex items-center justify-center ${className}`}
    >
      <div
        className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 border-dashed ${colorMap.border} ${colorMap.bg} ${colorMap.glow} p-2 flex flex-col items-center justify-center text-center backdrop-blur-[1px]`}
        style={{
          maskImage: "radial-gradient(circle, black 70%, rgba(0,0,0,0.7) 100%)",
        }}
      >
        <div className={`w-full h-full rounded-full border-2 border-double ${colorMap.border} flex flex-col items-center justify-center p-2`}>
          <span className={`text-[8px] font-mono tracking-widest font-extrabold uppercase ${colorMap.text} leading-none mb-1`}>
            {subLabel}
          </span>
          <div className="w-16 h-[1.5px] bg-current my-0.5 opacity-60" />
          <span className={`text-xs sm:text-[13px] font-black uppercase tracking-tight ${colorMap.text} leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] px-1`}>
            {label}
          </span>
          <div className="w-16 h-[1.5px] bg-current my-0.5 opacity-60" />
          <span className={`text-[7.5px] font-mono tracking-widest font-bold ${colorMap.text} opacity-90 mt-0.5`}>
            {date}
          </span>
          <span className={`text-[7px] font-mono font-semibold ${colorMap.text} opacity-75`}>
            GOVT REQUISITION DESK
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// 2. THE ₹100 MAHARASHTRA NON-JUDICIAL STAMP PAPER
export function StampPaperArtifact({
  className = "",
  applicantName = "Citizen of Kharghar",
  serviceName = "General Notary & Documentation",
  serialNo = "AA 932346",
  showStamp = true,
}: {
  className?: string;
  applicantName?: string;
  serviceName?: string;
  serialNo?: string;
  showStamp?: boolean;
}) {
  return (
    <InteractiveTilt className={`w-[320px] sm:w-[380px] h-[480px] sm:h-[540px] ${className}`}>
      <div
        style={{
          backgroundColor: "#fdfbf7",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(0, 0, 0, 0.08),
            inset 0 0 40px rgba(220, 200, 170, 0.35)
          `,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(240, 235, 220, 0.4) 0%, transparent 80%),
            repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0, 0, 0, 0.02) 25px)
          `,
        }}
        className="w-full h-full rounded-lg p-5 sm:p-6 flex flex-col justify-between border border-[#e2d8c3] relative overflow-hidden text-neutral-900 font-serif"
      >
        {/* Treasury Ornate Header (Green Engraved Band) */}
        <div className="border-4 border-double border-[#1b4332] bg-[#f4f9f4] p-3 text-center rounded relative overflow-hidden shadow-sm">
          {/* Micro-text border pattern */}
          <div className="text-[6.5px] tracking-widest text-[#2d6a4f] uppercase font-mono border-b border-[#1b4332]/40 pb-1 mb-1">
            भारत • INDIA • NON JUDICIAL • महाराष्ट्र MAHARASHTRA • सत्यमेव जयते
          </div>

          <div className="flex items-center justify-between px-2">
            {/* Left Value */}
            <div className="text-left font-sans">
              <span className="text-[10px] block font-bold text-[#1b4332] tracking-wider uppercase">
                रुपये
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#1b4332] leading-none">
                ₹100
              </span>
            </div>

            {/* Center Treasury Crest */}
            <div className="text-center px-1">
              <span className="text-[11px] sm:text-xs font-bold text-[#1b4332] tracking-widest uppercase block font-serif">
                INDIA NON JUDICIAL
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#2d6a4f] tracking-wide block">
                महाराष्ट्र MAHARASHTRA
              </span>
              <span className="text-[9px] font-mono text-neutral-600 font-semibold tracking-wider block">
                2026 • KHARGHAR
              </span>
            </div>

            {/* Right Value */}
            <div className="text-right font-sans">
              <span className="text-[10px] block font-bold text-[#1b4332] tracking-wider uppercase">
                RS.
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#1b4332] leading-none">
                100
              </span>
            </div>
          </div>

          {/* Serial Number */}
          <div className="mt-1 pt-1 border-t border-[#1b4332]/30 flex items-center justify-between text-[9px] font-mono text-[#1b4332] font-bold">
            <span>TREASURY CODE: THN-KHG-13</span>
            <span className="text-red-700 tracking-wider">{serialNo}</span>
          </div>
        </div>

        {/* Bond Paper Body & Legal Watermark */}
        <div className="my-auto py-3 relative z-10 space-y-2 text-neutral-800 font-sans text-left">
          <div className="text-center pb-2">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-500 border-b border-neutral-300 pb-0.5">
              LEGAL AFFIDAVIT &amp; REGISTRATION DOCKET
            </span>
          </div>

          <div className="bg-amber-50/60 rounded p-2.5 border border-amber-200/80 text-[11px] space-y-1 font-mono">
            <div className="flex justify-between">
              <span className="text-neutral-500">APPLICANT:</span>
              <span className="font-bold text-neutral-900 truncate max-w-[180px]">
                {applicantName || "Citizen Applicant"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">SERVICE:</span>
              <span className="font-bold text-neutral-900 truncate max-w-[180px]">
                {serviceName || "Legal Liaison"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">JURISDICTION:</span>
              <span className="font-semibold text-neutral-700">Kharghar Sector 13, Navi Mumbai</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">DESK:</span>
              <span className="font-semibold text-neutral-700">Tulip Plaza CHS, Shop No. 03</span>
            </div>
          </div>

          <p className="text-[10px] text-neutral-600 leading-relaxed italic border-l-2 border-[#1b4332]/50 pl-2">
            &quot;I hereby solemnly affirm and declare that the facts stated above are true and correct to the best of my knowledge and belief. No material information has been concealed.&quot;
          </p>

          <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-neutral-500">
            <div>
              <span>VERIFIED BY: </span>
              <span className="font-bold text-neutral-900">JAYANAND (SEVA)</span>
            </div>
            <div className="text-right">
              <span>STATUS: </span>
              <span className="text-emerald-700 font-bold">READY TO SUBMIT</span>
            </div>
          </div>
        </div>

        {/* Dynamic Rubber Ink Stamp Slam */}
        {showStamp && (
          <div className="absolute right-4 bottom-14 z-20">
            <InkStamp
              label="REGISTERED & VERIFIED"
              subLabel="GOVT REQUISITION DESK"
              date="2026 • KHARGHAR"
              color="purple"
            />
          </div>
        )}

        {/* Bottom Notary Sign-off Footer */}
        <div className="border-t border-neutral-300 pt-2 flex items-end justify-between text-[9px] font-mono text-neutral-600 relative z-10">
          <div>
            <div className="font-bold text-neutral-800">NOTARY ATTESTATION DESK</div>
            <div>SEVA ADMINISTRATIVE SERVICES</div>
          </div>
          <div className="text-right">
            <div className="w-20 border-b border-neutral-400 mb-1" />
            <div className="font-bold text-neutral-800">Deponent Signature</div>
          </div>
        </div>
      </div>
    </InteractiveTilt>
  );
}

// 3. THE PAN & IDENTITY SMART CARD
export function PanCardArtifact({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = {
    sm: "w-[260px] h-[165px]",
    md: "w-[300px] sm:w-[330px] h-[190px] sm:h-[210px]",
  }[size];

  return (
    <InteractiveTilt className={`${sizeClasses} ${className}`}>
      <div
        style={{
          background: `
            linear-gradient(135deg, rgba(220, 235, 252, 0.95) 0%, rgba(195, 218, 254, 0.9) 30%, rgba(224, 231, 255, 0.95) 70%, rgba(254, 243, 199, 0.85) 100%)
          `,
          boxShadow: `
            0 20px 40px -10px rgba(30, 58, 138, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.8),
            inset 0 1px 2px rgba(255, 255, 255, 0.9)
          `,
        }}
        className="w-full h-full rounded-2xl p-4 flex flex-col justify-between border border-blue-200/80 relative overflow-hidden text-neutral-800 shadow-xl backdrop-blur-md"
      >
        {/* Holographic Iridescent Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-pink-400/10 pointer-events-none" />

        {/* Header: Income Tax Department & Govt of India */}
        <div className="flex items-center justify-between border-b border-blue-900/15 pb-1 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-6 text-blue-950">
              <svg viewBox="0 0 100 120" fill="currentColor">
                <circle cx="50" cy="30" r="18" />
                <rect x="25" y="55" width="50" height="12" rx="3" />
                <path d="M20 75Q50 90 80 75L75 95Q50 110 25 95Z" />
              </svg>
            </div>
            <div>
              <span className="text-[7.5px] sm:text-[8px] font-bold tracking-wider text-blue-950 uppercase block leading-tight">
                INCOME TAX DEPARTMENT
              </span>
              <span className="text-[6.5px] sm:text-[7px] font-bold text-neutral-600 tracking-wide block">
                GOVT. OF INDIA / भारत सरकार
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[7.5px] font-mono font-bold text-blue-950 uppercase block">
              PERMANENT ACCOUNT CARD
            </span>
            <span className="text-[6.5px] font-bold text-neutral-600 block">
              आयकर पैन कार्ड
            </span>
          </div>
        </div>

        {/* Card Body: Metallic Gold Chip + Holder Info */}
        <div className="grid grid-cols-12 gap-2 items-center my-auto relative z-10">
          {/* Metallic Gold Chip */}
          <div className="col-span-3">
            <div className="w-10 h-8 sm:w-11 sm:h-9 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border border-amber-600/80 shadow-inner flex flex-col justify-around p-1 relative overflow-hidden">
              <div className="w-full h-[1px] bg-amber-800/60" />
              <div className="w-full h-[1px] bg-amber-800/60" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-amber-800/60" />
            </div>
          </div>

          {/* Details */}
          <div className="col-span-6 space-y-0.5">
            <div className="text-[7.5px] font-mono text-neutral-500 font-semibold">NAME / नाम</div>
            <div className="text-[10px] sm:text-[11px] font-black text-neutral-900 tracking-wide font-mono">
              CITIZEN APPLICANT
            </div>
            <div className="text-[7.5px] font-mono text-neutral-500 font-semibold">PAN / स्थायी खाता संख्या</div>
            <div className="text-[11px] sm:text-xs font-black text-blue-900 tracking-widest font-mono">
              ABCPS7370K
            </div>
          </div>

          {/* Photo Slot */}
          <div className="col-span-3 flex justify-end">
            <div className="w-12 h-14 sm:w-14 sm:h-16 rounded bg-slate-200 border border-slate-300/80 shadow-inner flex flex-col items-center justify-center p-1 relative overflow-hidden text-slate-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-[6px] font-mono font-bold text-slate-500 uppercase mt-0.5">
                PHOTO ID
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strip: QR Code & Signature */}
        <div className="border-t border-blue-900/10 pt-1 flex items-center justify-between relative z-10 text-[7px] font-mono">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-neutral-900 rounded p-0.5 flex flex-wrap gap-[1px]">
              <div className="w-1.5 h-1.5 bg-white rounded-xs" />
              <div className="w-1.5 h-1.5 bg-white rounded-xs" />
              <div className="w-1.5 h-1.5 bg-white rounded-xs" />
              <div className="w-1.5 h-1.5 bg-white rounded-xs" />
            </div>
            <span className="text-neutral-600 font-bold">DIGITALLY SIGNED</span>
          </div>

          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-bold">
            <ShieldCheck className="w-2.5 h-2.5" />
            <span>NSDL VERIFIED</span>
          </div>
        </div>
      </div>
    </InteractiveTilt>
  );
}

// 4. THE CIDCO / RERA PROPERTY DOSSIER
export function PropertyDeedArtifact({
  className = "",
  towerName = "TULIP PLAZA CHS",
  sector = "Sector-13, Kharghar",
  reraNo = "P52000048192",
}: {
  className?: string;
  towerName?: string;
  sector?: string;
  reraNo?: string;
}) {
  return (
    <InteractiveTilt className={`w-[320px] sm:w-[380px] h-[460px] sm:h-[500px] ${className}`}>
      <div
        style={{
          backgroundColor: "#0d1b2a",
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.12) 1px, transparent 1px),
            linear-gradient(rgba(0, 150, 255, 0.04) 5px, transparent 5px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.04) 5px, transparent 5px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 8px 8px, 8px 8px",
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(0, 150, 255, 0.4),
            inset 0 0 40px rgba(0, 50, 120, 0.6)
          `,
        }}
        className="w-full h-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-cyan-500/30 relative overflow-hidden text-cyan-300 font-mono shadow-2xl"
      >
        {/* Top Dossier Title */}
        <div className="border-b border-cyan-500/30 pb-3 flex items-start justify-between relative z-10">
          <div>
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5">
              <Building className="w-3.5 h-3.5" />
              <span>CIDCO NAVI MUMBAI NODE</span>
            </div>
            <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
              PROPERTY TITLE DOSSIER
            </h4>
            <div className="text-[9.5px] text-cyan-400 font-medium">
              Kharghar Node • Plot 114 Allotment
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500 text-emerald-400 text-[9px] font-bold tracking-widest uppercase">
              NOC APPROVED
            </span>
          </div>
        </div>

        {/* Isometric Tower Blueprint Illustration */}
        <div className="my-auto py-3 relative z-10 flex flex-col items-center justify-center">
          <div className="w-48 h-36 relative flex items-center justify-center">
            {/* SVG Blueprint Isometric Grid */}
            <svg viewBox="0 0 200 160" className="w-full h-full stroke-cyan-400 fill-none opacity-90">
              {/* Ground Grid */}
              <path d="M100 150L180 105L100 60L20 105Z" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Isometric Tower Wireframe */}
              {/* Left Face */}
              <path d="M60 120L60 30L100 10L100 100Z" strokeWidth="1.5" fill="rgba(0,180,255,0.08)" />
              {/* Right Face */}
              <path d="M100 100L100 10L140 30L140 120Z" strokeWidth="1.5" fill="rgba(0,180,255,0.15)" />
              {/* Roof */}
              <path d="M100 10L60 30L100 50L140 30Z" strokeWidth="1.5" fill="rgba(0,180,255,0.25)" />

              {/* Windows Matrix */}
              <line x1="72" y1="45" x2="72" y2="105" strokeWidth="0.8" strokeDasharray="2 4" />
              <line x1="88" y1="38" x2="88" y2="98" strokeWidth="0.8" strokeDasharray="2 4" />
              <line x1="112" y1="38" x2="112" y2="98" strokeWidth="0.8" strokeDasharray="2 4" />
              <line x1="128" y1="45" x2="128" y2="105" strokeWidth="0.8" strokeDasharray="2 4" />

              {/* Floor dividers */}
              <line x1="60" y1="55" x2="100" y2="35" strokeWidth="0.7" />
              <line x1="60" y1="80" x2="100" y2="60" strokeWidth="0.7" />
              <line x1="60" y1="105" x2="100" y2="85" strokeWidth="0.7" />
              <line x1="100" y1="35" x2="140" y2="55" strokeWidth="0.7" />
              <line x1="100" y1="60" x2="140" y2="80" strokeWidth="0.7" />
              <line x1="100" y1="85" x2="140" y2="105" strokeWidth="0.7" />

              {/* Coordinates overlay */}
              <circle cx="100" cy="100" r="3" fill="#00ffcc" />
            </svg>

            {/* Floating Blueprint Badge */}
            <div className="absolute -bottom-1 bg-slate-900/90 border border-cyan-400/60 rounded px-2 py-0.5 text-[8.5px] text-cyan-200">
              COORDINATES: 19.0433° N, 73.0647° E
            </div>
          </div>

          {/* Dossier Specs */}
          <div className="w-full bg-slate-950/80 border border-cyan-900/60 rounded-lg p-2.5 mt-2 space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-cyan-500 font-semibold">PREMISES:</span>
              <span className="text-white font-bold">{towerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-500 font-semibold">LOCATION:</span>
              <span className="text-white">{sector}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-500 font-semibold">MAHARERA:</span>
              <span className="text-amber-400 font-bold">{reraNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cyan-500 font-semibold">LEGAL ADVISOR:</span>
              <span className="text-white font-bold">SEVA REAL ESTATE (JAYANAND)</span>
            </div>
          </div>
        </div>

        {/* Stamp & Verification Strip */}
        <div className="border-t border-cyan-500/30 pt-2 flex items-center justify-between text-[9px] relative z-10">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-bold">100% CLEAR TITLE CHAIN</span>
          </div>
          <div className="text-cyan-400/80 font-mono">
            REF: KHG-SEC13-CIDCO
          </div>
        </div>
      </div>
    </InteractiveTilt>
  );
}
