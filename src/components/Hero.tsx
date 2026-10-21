"use client";

import React, { useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import AuroraBackground from "@/components/reactbits/AuroraBackground";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ShinyText from "@/components/reactbits/ShinyText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import LegalStampPaper from "@/components/LegalStampPaper";
import { playHapticSound, isSoundEnabled, setSoundEnabled } from "@/utils/sound";
import gsap from "gsap";
import {
  ShieldCheck,
  Zap,
  Building,
  KeyRound,
  FileCheck2,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Volume2,
  VolumeX,
  Compass,
  CheckCircle2,
  MapPin,
  Clock,
  Layers,
  Award,
  Stamp,
  BadgeCheck,
} from "lucide-react";

export default function Hero() {
  const { currentTheme, language, t } = useApp();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);

  // GSAP Entrance timeline on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-badge", {
        opacity: 0,
        y: -30,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          ".gsap-title-line",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
            stagger: 0.2,
          },
          "-=0.4"
        )
        .from(
          ".gsap-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".gsap-cta",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          ".gsap-stamp-deck",
          {
            opacity: 0,
            scale: 0.9,
            rotationY: -15,
            rotationX: 10,
            duration: 1.1,
            ease: "back.out(1.2)",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden text-white select-none transition-colors duration-700 py-16 sm:py-20 lg:py-24"
      style={{
        background: `radial-gradient(ellipse at 50% 15%, ${currentTheme.vars.heroGradVia} 0%, ${currentTheme.vars.heroGradFrom} 55%, ${currentTheme.vars.primaryDark} 100%)`,
      }}
    >
      {/* Vanta / Fluid Aurora Animated Interactive Canvas */}
      <AuroraBackground />

      {/* Subtle Guilloché Watermark Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 0C17.909 0 0 17.909 0 40s17.909 40 40 40 40-17.909 40-40S62.091 0 40 0zm0 4c19.882 0 36 16.118 36 36s-16.118 36-36 36S4 59.882 4 40 20.118 4 40 4zm0 8c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm0 4c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Status & Counter Ribbon */}
      <div className="absolute top-4 left-4 right-4 z-20 max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-[11px] font-semibold text-slate-200 shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-bold text-emerald-300">
            Kharghar Sector-13 Desk:
          </span>
          <span className="text-white hidden sm:inline">
            Counter 03 Active &amp; Accepting Verification
          </span>
          <span className="text-amber-300 font-bold ml-1 hidden md:inline">
            • Jayanand On-Site
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-amber-200 font-semibold">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>15+ Years Registered Liaison</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Kinetic Typography, DecryptedText & ReactBits Spotlight (6 cols) */}
          <div className="lg:col-span-6 text-left">
            {/* Cultural Crest with Gold Seal */}
            <div className="gsap-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 mb-6 shadow-xl">
              <div
                className="w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shadow-md"
                style={{
                  backgroundColor: currentTheme.vars.accent,
                  color: "#ffffff",
                }}
              >
                ॐ
              </div>
              <div>
                <p className="text-xs font-bold text-amber-200 tracking-wide uppercase">
                  {t.mottoTop}
                </p>
                <p className="text-[10px] text-slate-300">
                  {t.mottoSecondary}
                </p>
              </div>
            </div>

            {/* Headline with ReactBits DecryptedText Effect */}
            <h1
              ref={headlineRef}
              className="gsap-title-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-6"
            >
              The Apex Gateway For{" "}
              <span className="block text-amber-400 mt-1">
                <DecryptedText
                  text="Government & Legal"
                  speed={35}
                  maxIterations={12}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-black"
                  encryptedClassName="text-amber-500 font-mono"
                />
              </span>
              Documentation in Kharghar.
            </h1>

            {/* Sub-headline */}
            <p className="gsap-desc text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              {language === "en" ? (
                <>
                  Fast, transparent, and hassle-free Citizen Certificates,
                  Business Licenses &amp; Prime Real Estate Consulting. Verified
                  at{" "}
                  <strong className="text-amber-300">
                    Tulip Plaza CHS, Sector-13
                  </strong>{" "}
                  by Proprietor Jayanand.
                </>
              ) : (
                <>
                  नागरिक प्रमाण पत्र, बिज़नेस लाइसेंस और रियल एस्टेट कंसल्टिंग —
                  तेज़, पारदर्शी और बिना किसी परेशानी के।{" "}
                  <strong className="text-amber-300">ट्यूलिप प्लाजा, सेक्टर-13</strong>{" "}
                  में संचालक जयानंद जी द्वारा सत्यापित।
                </>
              )}
            </p>

            {/* ReactBits Spotlight Quick Features Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
              <SpotlightCard
                className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                spotlightColor="rgba(217, 119, 6, 0.25)"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: currentTheme.vars.accentSoft }}
                  >
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Speed SLA
                    </span>
                    <span className="text-xs font-bold text-white">
                      24-Hr Express
                    </span>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                spotlightColor="rgba(16, 185, 129, 0.25)"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      CIDCO Liaison
                    </span>
                    <span className="text-xs font-bold text-white">
                      100% Legal
                    </span>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard
                className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1"
                spotlightColor="rgba(245, 158, 11, 0.25)"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      Navi Mumbai
                    </span>
                    <span className="text-xs font-bold text-white">
                      Flats &amp; Shops
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* CTAs with ShinyText & Audio Haptics */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#services"
                onClick={() => playHapticSound("click")}
                onMouseEnter={() => playHapticSound("hover")}
                className="gsap-cta flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-shimmer cursor-pointer"
                style={{
                  backgroundColor: currentTheme.vars.accent,
                  boxShadow: `0 15px 35px -5px ${currentTheme.vars.accentGlow}`,
                }}
              >
                <ShinyText text={t.hero.primaryCta} speed={3} />
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20assistance%20with%20government%20documentation%20or%20real%20estate."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playHapticSound("click")}
                onMouseEnter={() => playHapticSound("hover")}
                className="gsap-cta flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-white bg-green-600 hover:bg-green-500 rounded-2xl shadow-xl shadow-green-900/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.secondaryCta}</span>
              </a>

              <a
                href="#checker"
                onClick={() => playHapticSound("click")}
                onMouseEnter={() => playHapticSound("hover")}
                className="gsap-cta flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl transition-all cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-amber-300" />
                <span>Doc Checklist</span>
              </a>
            </div>
          </div>

          {/* Right Column: The 3D Interactive Legal Stamp Paper Centerpiece (6 cols) */}
          <div className="lg:col-span-6 gsap-stamp-deck">
            <LegalStampPaper />
          </div>
        </div>
      </div>

      {/* Modern Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-[#f8fafc]"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,20 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
