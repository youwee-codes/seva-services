"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  UserCheck,
  Briefcase,
  Scale,
  Building2,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const { currentTheme, t } = useApp();
  const [activeCategory, setActiveCategory] = useState<"identity" | "business" | "legal" | "property">("identity");

  const categoryConfigs = [
    {
      id: "identity" as const,
      icon: UserCheck,
      data: t.services.categories.identity,
      bgSoft: "bg-blue-50/70",
      accentDot: "bg-blue-500",
    },
    {
      id: "business" as const,
      icon: Briefcase,
      data: t.services.categories.business,
      bgSoft: "bg-amber-50/70",
      accentDot: "bg-amber-500",
    },
    {
      id: "legal" as const,
      icon: Scale,
      data: t.services.categories.legal,
      bgSoft: "bg-emerald-50/70",
      accentDot: "bg-emerald-500",
    },
    {
      id: "property" as const,
      icon: Building2,
      data: t.services.categories.property,
      bgSoft: "bg-purple-50/70",
      accentDot: "bg-purple-500",
    },
  ];

  const currentCategoryConfig = categoryConfigs.find((c) => c.id === activeCategory)!;
  const activeData = currentCategoryConfig.data;

  return (
    <section id="services" className="py-16 md:py-24 relative bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border"
            style={{
              backgroundColor: currentTheme.vars.accentSoft,
              color: currentTheme.vars.accent,
              borderColor: `${currentTheme.vars.accent}33`,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.services.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categoryConfigs.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg shadow-black/10 scale-[1.02]"
                    : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: currentTheme.vars.primary,
                        borderColor: currentTheme.vars.primary,
                      }
                    : {}
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.data.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden card-3d-hover">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0"
                style={{ backgroundColor: currentTheme.vars.primary }}
              >
                <currentCategoryConfig.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {activeData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {activeData.desc}
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 w-fit">
              {activeData.items.length} Official Services Listed
            </span>
          </div>

          {/* Service Cards Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {activeData.items.map((service, index) => {
                const whatsappUrl = `https://wa.me/919323467370?text=${encodeURIComponent(
                  `Hello Jayanand Sir, I need assistance with *${service}*. Please guide me on documents required and fee structure.`
                )}`;

                return (
                  <a
                    key={index}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-md transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{
                          backgroundColor: currentTheme.vars.accentSoft,
                          color: currentTheme.vars.accent,
                        }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors">
                        {service}
                      </span>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Conversion Prompt */}
          <div
            className="p-6 sm:p-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ backgroundColor: `${currentTheme.vars.accentSoft}` }}
          >
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-slate-900">
                Unsure which document or license is required for your case?
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Visit Shop 03, Tulip Plaza CHS or drop a line to Jayanand directly.
              </p>
            </div>

            <a
              href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20expert%20guidance%20on%20my%20documents."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              style={{ backgroundColor: currentTheme.vars.accent }}
            >
              <span>{t.services.guideCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
