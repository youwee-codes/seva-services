"use client";

import { useApp } from "@/context/AppContext";
import {
  Building,
  Home,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function RealEstateBanner() {
  const { currentTheme, t } = useApp();

  return (
    <section id="real-estate" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          {/* Rich Architectural Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.vars.heroGradFrom} 0%, ${currentTheme.vars.primaryDark} 60%, #000000 100%)`,
            }}
          />

          {/* Isometric grid accent */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border"
                  style={{
                    backgroundColor: currentTheme.vars.accentSoft,
                    color: currentTheme.vars.accent,
                    borderColor: `${currentTheme.vars.accent}44`,
                  }}
                >
                  <Building className="w-3.5 h-3.5" />
                  {t.realEstate.badge}
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  <span style={{ color: currentTheme.vars.accent }}>BUY</span> |{" "}
                  <span style={{ color: currentTheme.vars.accent }}>SALE</span> |{" "}
                  <span style={{ color: currentTheme.vars.accent }}>RENT</span>
                </h2>

                {/* Property Type Pills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
                    <Building
                      className="w-4 h-4"
                      style={{ color: currentTheme.vars.accent }}
                    />
                    <span>{t.realEstate.categories.shops}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
                    <Home
                      className="w-4 h-4"
                      style={{ color: currentTheme.vars.accent }}
                    />
                    <span>{t.realEstate.categories.flats}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-semibold">
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: currentTheme.vars.accent }}
                    />
                    <span>{t.realEstate.categories.lands}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {t.realEstate.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <a
                    href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20am%20interested%20in%20buying%2Frenting%20a%20shop%2C%20flat%2C%20or%20plot%20in%20Navi%20Mumbai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                    style={{ backgroundColor: currentTheme.vars.accent }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.realEstate.ctaWhatsapp}</span>
                  </a>

                  <a
                    href="tel:+919323467370"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t.realEstate.ctaCall}</span>
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols) - Trust Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <ShieldCheck
                      className="w-6 h-6"
                      style={{ color: currentTheme.vars.accent }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Navi Mumbai Property Guarantee
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        Zero Legal Disputes • 100% Verified Ownership
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {t.realEstate.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: currentTheme.vars.accent }}
                        />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Office: Tulip Plaza CHS, Sec-13</span>
                    <span className="text-amber-300 font-bold">Kharghar Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
