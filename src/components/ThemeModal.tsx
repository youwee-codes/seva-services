"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { X, Check, Sparkles, Palette, ShieldCheck } from "lucide-react";

export default function ThemeModal() {
  const { currentTheme, setThemeId, isThemeModalOpen, setIsThemeModalOpen, palettes } =
    useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (!isThemeModalOpen) return null;

  const categories = ["All", "Royal Indian", "Executive", "Fintech Modern", "Earth & Land"];

  const filteredPalettes =
    selectedCategory === "All"
      ? palettes
      : palettes.filter((p) => p.category === selectedCategory);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsThemeModalOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                Bespoke Color Palette Lab
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  12 Handcrafted Options
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Click any palette to switch the live site theme instantly in front of the owner.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-xl transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-100 bg-white overflow-x-auto text-xs font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Palette Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPalettes.map((palette) => {
            const isSelected = currentTheme.id === palette.id;
            return (
              <div
                key={palette.id}
                onClick={() => setThemeId(palette.id)}
                className={`group relative p-5 rounded-2xl border text-left cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? "border-2 border-amber-500 bg-amber-50/20 shadow-md ring-2 ring-amber-500/20"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                {/* Active Indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                    Active Theme
                  </div>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-100">
                    {palette.category}
                  </span>
                </div>

                <h4 className="font-bold text-base text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {palette.name}
                </h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {palette.tagline}
                </p>

                {/* Swatches */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center -space-x-1.5">
                    {palette.previewColors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <div className="ml-auto text-[11px] font-semibold text-slate-600 group-hover:text-slate-900 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Preview Live
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All palettes verified for high contrast, WCAG accessibility &amp; Indian civic trust.</span>
          </div>
          <button
            onClick={() => setIsThemeModalOpen(false)}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
