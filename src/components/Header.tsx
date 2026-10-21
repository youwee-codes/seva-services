"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  MessageCircle,
  Languages,
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
  Building,
  CheckCircle2,
} from "lucide-react";

export default function Header() {
  const { language, setLanguage, currentTheme } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    playHapticSound("switch");
    setLanguage(language === "en" ? "hi" : "en");
  };

  const openSearch = () => {
    playHapticSound("switch");
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  const navLinks = [
    {
      href: "#services",
      label: language === "en" ? "28 Services" : "२८ सेवांची यादी",
      badge: "28",
    },
    {
      href: "#process",
      label: language === "en" ? "Process & Counter" : "प्रक्रिया व काउंटर",
    },
    {
      href: "#real-estate",
      label: language === "en" ? "Real Estate" : "रियल एस्टेट",
    },
    {
      href: "#sla",
      label: language === "en" ? "SLA & Pricing" : "वेळ व दर",
    },
    {
      href: "#faq",
      label: language === "en" ? "FAQ" : "प्रश्नोत्तरे",
    },
    {
      href: "#contact",
      label: language === "en" ? "Contact & Stamp" : "संपर्क व स्टॅम्प",
    },
  ];

  const handleLinkClick = () => {
    playHapticSound("click");
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Strip: Clean, Modern Cultural Pride & Direct Contact */}
      <div
        className="text-white text-[11px] py-1.5 px-4 font-medium border-b border-white/10 transition-colors duration-300 relative z-50"
        style={{ backgroundColor: currentTheme.vars.primaryDark }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: currentTheme.vars.accent }}
            />
            <span
              className="font-bold tracking-wide"
              style={{ color: currentTheme.vars.accent }}
            >
              || एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80 hidden sm:inline font-normal">
              सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात...
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/80 text-[11px]">
            <span className="hidden md:inline text-white/60">
              Sector-13 Kharghar Desk
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <a
              href="tel:+919323467370"
              onClick={() => playHapticSound("click")}
              className="flex items-center gap-1.5 font-bold transition-opacity hover:opacity-90"
              style={{ color: currentTheme.vars.accent }}
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>+91 9323467370</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Glassmorphic Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-neutral-200/90 shadow-xs py-2 sm:py-2.5"
            : "bg-white/85 backdrop-blur-lg border-neutral-200/60 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity Lockup */}
            <Link
              href="/"
              onClick={() => {
                playHapticSound("click");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-lg tracking-tight transition-transform group-hover:scale-105 shadow-xs"
                style={{
                  backgroundColor: currentTheme.vars.primaryDark,
                  color: currentTheme.vars.accent,
                  border: `1.5px solid ${currentTheme.vars.accentSoft}`,
                }}
              >
                स
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-950 font-black text-base sm:text-lg leading-none tracking-tight">
                    Seva Services
                  </span>
                  <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Kharghar Desk
                  </span>
                </div>
                <span className="text-neutral-500 text-[11px] leading-tight font-medium mt-0.5">
                  Administrative &amp; Real Estate • Jayanand
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/70 p-1 rounded-2xl border border-neutral-200/60">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => playHapticSound("hover")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-neutral-600 hover:text-neutral-950 hover:bg-white transition-all"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className="px-1.5 py-0.2 rounded-md text-[10px] font-mono font-bold"
                      style={{
                        backgroundColor: currentTheme.vars.accentSoft,
                        color: currentTheme.vars.primaryDark,
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Right: Actions (Search, Language, WhatsApp, Call) */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Cmd+K Search Button */}
              <button
                onClick={openSearch}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/70 transition-all cursor-pointer"
                title="Search 28 services (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-neutral-500" />
                <span className="hidden xl:inline text-neutral-500">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white text-[10px] font-mono font-bold text-neutral-600 border border-neutral-200">
                  ⌘K
                </kbd>
              </button>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/70 transition-colors cursor-pointer"
              >
                <Languages className="w-3.5 h-3.5 text-neutral-500" />
                <span>{language === "en" ? "मराठी" : "English"}</span>
              </button>

              {/* High-Converting Direct WhatsApp CTA */}
              <a
                href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20would%20like%20to%20consult%20regarding%20documentation%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playHapticSound("click")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Call Desk CTA */}
              <a
                href="tel:+919323467370"
                onClick={() => playHapticSound("click")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-900 border border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Desk</span>
              </a>
            </div>

            {/* Mobile Actions: Quick WhatsApp, Call & Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20urgent%20assistance%20with%20documentation%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playHapticSound("click")}
                className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs"
                aria-label="WhatsApp Jayanand"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:+919323467370"
                onClick={() => playHapticSound("click")}
                className="p-2 rounded-xl bg-neutral-100 text-neutral-800 border border-neutral-200"
                aria-label="Call Jayanand"
              >
                <Phone className="w-4 h-4 text-amber-600" />
              </a>

              <button
                type="button"
                onClick={() => {
                  playHapticSound("switch");
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors border border-neutral-200"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Framer Motion Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[88px] z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto md:hidden"
            >
              {/* Quick Search & Language in Mobile Drawer */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openSearch();
                    }}
                    className="flex-1 flex items-center justify-between px-4 py-3 rounded-2xl bg-neutral-100 text-neutral-700 text-sm font-medium border border-neutral-200"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-neutral-500" />
                      Search all 28 services...
                    </span>
                    <kbd className="px-2 py-0.5 rounded bg-white text-xs font-mono font-bold text-neutral-600 border border-neutral-200">
                      ⌘K
                    </kbd>
                  </button>

                  <button
                    onClick={toggleLanguage}
                    className="px-3 py-3 rounded-2xl bg-neutral-100 text-neutral-800 text-xs font-bold border border-neutral-200 whitespace-nowrap"
                  >
                    {language === "en" ? "मराठी" : "English"}
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                    },
                    closed: {
                      transition: { staggerChildren: 0.03, staggerDirection: -1 },
                    },
                  }}
                  className="space-y-1 pt-3"
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: 10, opacity: 0 },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-neutral-50 text-base font-bold text-neutral-900 active:text-amber-600 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span>{link.label}</span>
                          {link.badge && (
                            <span
                              className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold"
                              style={{
                                backgroundColor: currentTheme.vars.accentSoft,
                                color: currentTheme.vars.primaryDark,
                              }}
                            >
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400" />
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Drawer Bottom Information & Direct Conversion CTAs */}
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200 text-xs text-neutral-600 space-y-1">
                  <div className="font-bold text-neutral-900">
                    Seva Administrative &amp; Real Estate • Jayanand
                  </div>
                  <div>
                    Shop No. 03, 1st Floor, Tulip Plaza CHS, Sector-13 Kharghar
                  </div>
                  <div
                    className="font-bold pt-1"
                    style={{ color: currentTheme.vars.accent }}
                  >
                    || एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pb-6">
                  <a
                    href="tel:+919323467370"
                    onClick={() => playHapticSound("click")}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Jayanand</span>
                  </a>

                  <a
                    href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20assistance%20with%20documentation%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playHapticSound("click")}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}