"use client";

import React, { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import confetti from "canvas-confetti";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  PassportArtifact,
  StampPaperArtifact,
  PanCardArtifact,
  PropertyDeedArtifact,
} from "@/components/Artifacts";
import CommandPalette from "@/components/CommandPalette";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Search,
  Sparkles,
  Stamp,
  CheckCircle2,
  Zap,
  Globe2,
  ScrollText,
  CreditCard,
  Building2,
  MapPin,
} from "lucide-react";

interface QuickFeature {
  id: "passport" | "stamp" | "pan" | "deed";
  title: string;
  subtitle: string;
  microBadge: string;
  icon: React.ElementType;
  pillQuestion: string;
  headline: string;
  simpleExplanation: string;
  speedBadge: string;
  actionText: string;
  whatsappMessage: string;
}

const quickFeatures: QuickFeature[] = [
  {
    id: "passport",
    title: "Passport Help",
    subtitle: "Fresh & Tatkaal Slots",
    microBadge: "24h Slot",
    icon: Globe2,
    pillQuestion: "Got passport problems or urgent Tatkaal?",
    headline: "Passport appointments in 24 hours. Zero headache.",
    simpleExplanation:
      "Fresh passport, renewal, or urgent Tatkaal? We audit your Aadhaar/proofs, book your slot at Vashi or Thane PSK, and guide you till it arrives at your doorstep.",
    speedBadge: "24-hr Slot Booking • PSK Guidance",
    actionText: "Fix My Passport on WhatsApp",
    whatsappMessage:
      "Hello Jayanand Sir, I need urgent assistance with my Passport (Fresh/Renewal/Tatkaal) appointment booking.",
  },
  {
    id: "stamp",
    title: "₹100 Stamp & Rent",
    subtitle: "Doorstep Biometric",
    microBadge: "Biometric",
    icon: ScrollText,
    pillQuestion: "Need ₹100 stamp paper or rent agreement?",
    headline: "Registered rent agreement with doorstep biometric thumb scan.",
    simpleExplanation:
      "Save yourself a trip to the police station or registrar. We bring the biometric thumb scanner right to your home in Kharghar, generate the auto police NOC, and print on genuine ₹100 stamp paper.",
    speedBadge: "Same-Day Biometric • Home & Office Visit",
    actionText: "Get Rent Agreement & Stamp",
    whatsappMessage:
      "Hello Jayanand Sir, I need a Registered Rent Agreement with doorstep biometric verification in Kharghar.",
  },
  {
    id: "pan",
    title: "PAN Card",
    subtitle: "NSDL & Correction",
    microBadge: "Instant e-PAN",
    icon: CreditCard,
    pillQuestion: "PAN card correction, fresh or lost card?",
    headline: "Instant e-PAN in 24 hours & physical card at your home.",
    simpleExplanation:
      "Need a new PAN card or fixing a spelling mistake in your name or date of birth? We process NSDL/UTI direct submissions with zero delays.",
    speedBadge: "Instant e-PAN • Fast Home Delivery",
    actionText: "Order or Correct PAN Card",
    whatsappMessage:
      "Hello Jayanand Sir, I need assistance applying for a PAN Card / updating my details.",
  },
  {
    id: "deed",
    title: "CIDCO & Property",
    subtitle: "Transfer & Legal Title",
    microBadge: "Clear Title",
    icon: Building2,
    pillQuestion: "Buying, selling or CIDCO transfer in Kharghar?",
    headline: "100% verified legal title, CIDCO Transfer & Mortgage NOC.",
    simpleExplanation:
      "Never risk buying a disputed property. We verify the full CIDCO allotment chain, clear Society NOCs, obtain mortgage permissions, and handle sub-registrar registration.",
    speedBadge: "100% Clear Title • CIDCO Liaison",
    actionText: "Consult on Kharghar Property",
    whatsappMessage:
      "Hello Jayanand Sir, I need guidance regarding CIDCO Transfer NOC / Property Registration in Kharghar.",
  },
];

export default function SquareHero() {
  const { language, currentTheme } = useApp();
  const [activeTab, setActiveTab] = useState<"passport" | "stamp" | "pan" | "deed">("passport");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [stampedSuccess, setStampedSuccess] = useState(false);

  const activeFeature = quickFeatures.find((f) => f.id === activeTab) || quickFeatures[0];

  // Parallax floating desk mouse coordinates
  const deskRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const deskRotateX = useTransform(springY, [-250, 250], [10, -10]);
  const deskRotateY = useTransform(springX, [-250, 250], [-10, 10]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
        playHapticSound("switch");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!deskRef.current) return;
    const rect = deskRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerStampToInquire = (e: React.MouseEvent) => {
    playHapticSound("stamp");
    setStampedSuccess(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        colors: [currentTheme.vars.accent, currentTheme.vars.primary, "#10b981"],
      });
    } catch {}

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      <section
        id="overview"
        className="relative overflow-hidden transition-colors duration-300 pt-4 sm:pt-8 pb-16 sm:pb-24 border-b border-neutral-200"
        style={{
          backgroundColor: currentTheme.vars.surfaceBg,
        }}
      >
        {/* Subtle Architectural Pattern & Tint Gradient */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Context Strip: Clean, Uncluttered Location Status & Cmd+K Search */}
          <div className="flex items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-neutral-200/90 text-neutral-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>Tulip Plaza, Sector-13 Kharghar Desk</span>
            </div>

            {/* Quick ⌘K Search Pill */}
            <button
              onClick={() => {
                setIsCommandOpen(true);
                playHapticSound("switch");
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-medium transition-all shadow-2xs cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-neutral-500" />
              <span className="hidden sm:inline">Search 28 services</span>
              <span className="sm:hidden">28 Services</span>
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-[10px] font-mono font-bold text-neutral-600">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* ========================================================================= */}
          {/* HERO SHOWCASE CARD: 3D ARTIFACTS + HIGH-CRAFT TACTILE SWITCHER */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-neutral-200 shadow-xl mb-10 transition-shadow">
            {/* Friendly Hero Hook */}
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
              <span
                className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3"
                style={{
                  backgroundColor: currentTheme.vars.accentSoft,
                  color: currentTheme.vars.primaryDark,
                }}
              >
                KHARGHAR’S SINGLE-WINDOW DESK
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
                Got document problems? <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.vars.primary}, ${currentTheme.vars.accent})`,
                  }}
                >
                  We’ve got you covered.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed">
                Skip government lines and middleman confusion. Select any document category below to inspect your verified solution:
              </p>
            </div>

            {/* ========================================================================= */}
            {/* ULTRA-CRAFT CATEGORY SELECTOR DOCK: 2x2 ON MOBILE, 4-COL ON DESKTOP */}
            {/* ZERO CLIPPING • ZERO UGLY SCROLLBARS • 100% VISIBLE ON EVERY SCREEN */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
              {quickFeatures.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      playHapticSound("switch");
                    }}
                    className={`group relative p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden active:scale-[0.98] ${
                      isActive
                        ? "bg-white shadow-md ring-2 ring-neutral-900/10 border-neutral-900"
                        : "bg-neutral-50/90 hover:bg-white border-neutral-200 hover:border-neutral-300"
                    }`}
                    style={
                      isActive
                        ? {
                            borderColor: currentTheme.vars.primary,
                          }
                        : {}
                    }
                  >
                    {/* Active Accent Ambient Glow */}
                    {isActive && (
                      <div
                        className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-xl opacity-30 pointer-events-none"
                        style={{ backgroundColor: currentTheme.vars.accent }}
                      />
                    )}

                    <div className="flex items-start justify-between gap-1.5 mb-2 relative z-10">
                      {/* Icon container */}
                      <div
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors shadow-2xs"
                        style={
                          isActive
                            ? {
                                backgroundColor: currentTheme.vars.primary,
                                color: "#ffffff",
                              }
                            : {
                                backgroundColor: "#f3f4f6",
                                color: "#4b5563",
                              }
                        }
                      >
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>

                      {/* Micro Speed Badge */}
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md uppercase tracking-tight transition-colors ${
                          isActive
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-neutral-200/70 text-neutral-600"
                        }`}
                      >
                        {item.microBadge}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3
                        className={`text-xs sm:text-sm font-bold tracking-tight leading-snug transition-colors ${
                          isActive ? "text-neutral-950" : "text-neutral-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Active indicator bottom bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDockIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ backgroundColor: currentTheme.vars.accent }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 3D Visual Center Stage & Solution Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* 3D Floating Physical Artifact (6 cols on desktop, FIRST on mobile!) */}
              <div
                ref={deskRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="lg:col-span-6 [perspective:1200px] flex flex-col items-center justify-center min-h-[340px] sm:min-h-[460px] relative order-1"
              >
                {/* Background Ambient Glow Tinted by Theme Accent */}
                <div
                  className="absolute inset-0 blur-3xl opacity-25 pointer-events-none rounded-full"
                  style={{
                    backgroundColor: currentTheme.vars.accent,
                  }}
                />

                {/* 3D Active Card */}
                <motion.div
                  style={{
                    rotateX: deskRotateX,
                    rotateY: deskRotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative z-10 w-full flex items-center justify-center scale-[0.85] sm:scale-100 transition-transform"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ scale: 0.9, opacity: 0, y: 15 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0, y: -15 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    >
                      {activeTab === "passport" && <PassportArtifact size="md" />}
                      {activeTab === "stamp" && <StampPaperArtifact showStamp={true} />}
                      {activeTab === "pan" && <PanCardArtifact size="md" />}
                      {activeTab === "deed" && <PropertyDeedArtifact />}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                <p className="text-[11px] font-mono text-neutral-400 mt-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Interactive 3D Physical Model • Move cursor or tilt screen</span>
                </p>
              </div>

              {/* Friendly Direct Solution & Fast Action Buttons (6 cols) */}
              <div className="lg:col-span-6 space-y-5 order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeFeature.speedBadge}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                    {activeFeature.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                    {activeFeature.simpleExplanation}
                  </p>
                </div>

                {/* Direct 1-Click Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/919323467370?text=${encodeURIComponent(
                      activeFeature.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playHapticSound("click")}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white shadow-lg transition-transform active:scale-95 cursor-pointer"
                    style={{
                      backgroundColor: "#16a34a",
                    }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{activeFeature.actionText}</span>
                  </a>

                  <button
                    onClick={triggerStampToInquire}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold bg-neutral-900 hover:bg-neutral-800 text-white shadow-md transition-all active:scale-95 cursor-pointer relative overflow-hidden"
                  >
                    <Stamp className="w-4 h-4 text-amber-400" />
                    <span>Stamp to Inquire</span>

                    {stampedSuccess && (
                      <span className="absolute inset-0 bg-emerald-700 flex items-center justify-center text-xs font-bold text-white">
                        ✓ STAMPED FOR JAYANAND
                      </span>
                    )}
                  </button>

                  <a
                    href="tel:+919323467370"
                    onClick={() => playHapticSound("click")}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-semibold bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-900 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>Call Jayanand</span>
                  </a>
                </div>

                {/* Quick Reassurances in Simple English */}
                <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 gap-3 text-xs text-neutral-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero middleman commission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Originals returned same day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Doorstep biometric in Kharghar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Official treasury challan receipts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search & Popular Service Pills */}
          <div className="bg-white/90 rounded-2xl p-4 sm:p-5 border border-neutral-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: currentTheme.vars.accentSoft,
                  color: currentTheme.vars.primaryDark,
                }}
              >
                <Search className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  Looking for a specific certificate or license?
                </span>
                <span className="text-[11px] text-neutral-500">
                  Tap to search all 28 registered Maharashtra administrative services:
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                "Passport",
                "Rent Agreement",
                "Gumasta",
                "CIDCO Transfer",
                "Name Gazette",
                "Income Certificate",
                "FSSAI Food",
              ].map((pill) => (
                <button
                  key={pill}
                  onClick={() => {
                    setIsCommandOpen(true);
                    playHapticSound("hover");
                  }}
                  className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-colors cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cmd + K Command Palette */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </>
  );
}