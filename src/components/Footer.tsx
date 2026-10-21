"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { playHapticSound } from "@/utils/sound";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Stamp, MessageCircle } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    playHapticSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              onClick={scrollToTop}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-950 flex items-center justify-center text-amber-400 font-black text-lg transition-transform group-hover:scale-105 shadow-sm">
                स
              </div>
              <div>
                <span className="font-black text-lg text-neutral-950 tracking-tight block">
                  Seva Services
                </span>
                <span className="text-xs text-neutral-500 font-semibold block">
                  Administrative &amp; Real Estate • Jayanand
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md font-normal">
              Single-window desk for Government Certificates, Legal Registrations, CIDCO Transfers &amp; Real Estate Consulting in Sector 13 Kharghar. Managed personally by Jayanand.
            </p>

            {/* Cultural Mottos */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs font-semibold">
              <p className="text-amber-900 font-bold">
                || एकमेकां सहाय्य करू | अवघे धरू सुपंथ ||
              </p>
              <p className="text-neutral-700 font-medium">
                &quot;सर्व काही एकाच ठिकाणी ! कमी वेळात, कमी खर्चात...&quot;
              </p>
            </div>

            <div className="text-xs font-mono font-bold text-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Proprietor: Jayanand • Kharghar Desk</span>
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-medium">
              <li>
                <a
                  href="#overview"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Overview &amp; 3D Documents
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Why Choose Us (Office &amp; Desk)
                </a>
              </li>
              <li>
                <a
                  href="#citizen-services"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Part 01 | Personal &amp; Family Certificates
                </a>
              </li>
              <li>
                <a
                  href="#business-services"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Part 02 | Shop &amp; Business Licenses
                </a>
              </li>
              <li>
                <a
                  href="#legal-services"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Part 03 | Rent Agreements &amp; CIDCO
                </a>
              </li>
              <li>
                <a
                  href="#real-estate"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Part 04 | Real Estate (Buy, Sale, Rent)
                </a>
              </li>
              <li>
                <a
                  href="#sla"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Clear Pricing &amp; Timelines
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Questions &amp; Answers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => playHapticSound("hover")}
                  className="hover:text-neutral-950 transition-colors font-bold text-amber-700"
                >
                  Fast Document Request Slip
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-widest mb-4">
              Office Desk &amp; Direct Phone
            </h4>

            <ul className="space-y-3.5 text-xs text-neutral-700">
              <li>
                <a
                  href="tel:+919323467370"
                  onClick={() => playHapticSound("click")}
                  className="flex items-start gap-2.5 text-neutral-900 font-bold hover:text-amber-700 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-black">+91 9323467370</span>
                    <span className="text-[11px] text-neutral-500 font-normal">
                      Direct phone to Jayanand
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919323467370"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playHapticSound("click")}
                  className="flex items-start gap-2.5 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-bold">WhatsApp Desk</span>
                    <span className="text-[11px] text-neutral-500 font-normal">
                      Quick replies &amp; document send
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info.sevajv@gmail.com"
                  onClick={() => playHapticSound("click")}
                  className="flex items-start gap-2.5 text-neutral-800 hover:text-neutral-950 transition-colors"
                >
                  <Mail className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-mono font-semibold">info.sevajv@gmail.com</span>
                    <span className="text-[11px] text-neutral-500">Official emails &amp; agreements</span>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-2.5 text-neutral-600 pt-1">
                  <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Shop No. 03, 1st Floor, Plot No. 114, Tulip Plaza CHS, Sector - 13, Kharghar, Navi Mumbai - 410 210.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>
            &copy; {currentYear ?? new Date().getFullYear()} Seva Administrative Services &amp; Seva Real Estate Consultant. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 font-bold transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}