"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function SquareSubNav() {
  const { language, t, currentTheme } = useApp();
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);

      const sections = ["overview", "process", "services", "real-estate", "sla", "faq", "contact"];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "overview", label: language === "en" ? "Overview" : "अवलोकन", href: "#overview" },
    { id: "process", label: language === "en" ? "Counter Specs" : "कार्यालय विवरण", href: "#process" },
    { id: "services", label: language === "en" ? "28 Services" : "२८ सेवांची यादी", href: "#services" },
    { id: "real-estate", label: language === "en" ? "Real Estate" : "रियल एस्टेट", href: "#real-estate" },
    { id: "sla", label: language === "en" ? "SLA & Pricing" : "शुल्क व वेळ", href: "#sla" },
    { id: "faq", label: language === "en" ? "FAQ" : "प्रश्नोत्तरी", href: "#faq" },
    { id: "contact", label: language === "en" ? "Stamp Studio" : "स्टॅम्प स्टुडिओ", href: "#contact" },
  ];

  return (
    <div
      className={`w-full z-30 transition-all duration-200 border-b border-neutral-200 bg-white/95 backdrop-blur-md ${
        isSticky ? "sticky top-0 shadow-sm" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 text-sm">
          {/* Left: Product title / identifier (like Square's 'Kiosk') */}
          <div className="flex items-center gap-3">
            <Link
              href="#overview"
              className="font-bold text-neutral-900 tracking-tight text-base hover:text-neutral-600 transition-colors"
            >
              Seva Kiosk
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Sec-13 Kharghar Desk
            </span>
          </div>

          {/* Center Links (Square style sub-nav) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                style={
                  activeSection === link.id
                    ? {
                        borderBottomColor: currentTheme.vars.accent,
                        color: currentTheme.vars.primaryDark,
                      }
                    : {}
                }
                className={`py-1 border-b-2 transition-all ${
                  activeSection === link.id
                    ? "font-bold"
                    : "border-transparent hover:text-neutral-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Quick Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20assistance%20with%20government%20documentation%20or%20real%20estate."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              style={{ backgroundColor: currentTheme.vars.primaryDark }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white transition-colors hover:opacity-90 shadow-2xs"
            >
              <span>{language === "en" ? "Consultation" : "परामर्श"}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
