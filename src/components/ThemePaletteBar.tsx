"use client";

import React, { useState } from "react";
import { useApp, FontStyle } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import {
  Palette,
  X,
  Check,
  Sparkles,
  Type,
  RotateCcw,
  SlidersHorizontal,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function ThemePaletteBar() {
  const { currentTheme, setThemeId, fontStyle, setFontStyle, palettes } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Royal Indian", "Executive", "Fintech Modern", "Earth & Land"];

  const filteredPalettes =
    activeCategory === "All"
      ? palettes
      : palettes.filter((p) => p.category === activeCategory);

  const handleSelectPalette = (id: string) => {
    playHapticSound("switch");
    setThemeId(id);
  };

  const handleSelectFont = (font: FontStyle) => {
    playHapticSound("click");
    setFontStyle(font);
  };

  return (
    <>
      {/* Floating Pill Trigger (Positioned safely above mobile dock) */}
      <div className="fixed bottom-20 md:bottom-6 left-4 z-40 select-none">
        <button
          onClick={() => {
            playHapticSound("click");
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-900/95 hover:bg-neutral-900 text-white shadow-2xl border border-white/20 backdrop-blur-md transition-all active:scale-95 group cursor-pointer"
          aria-label="Toggle Color & Font Studio"
        >
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-amber-400/20 text-amber-400 group-hover:rotate-45 transition-transform duration-300">
            <Palette className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold tracking-tight hidden sm:inline">
            12 Live Themes &amp; Fonts
          </span>
          <span className="text-xs font-bold tracking-tight sm:hidden">
            Themes
          </span>

          {/* Active 3-color swatch dots */}
          <div className="flex items-center -space-x-1 pl-1">
            <span
              className="w-2.5 h-2.5 rounded-full border border-neutral-900"
              style={{ backgroundColor: currentTheme.vars.primary }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full border border-neutral-900"
              style={{ backgroundColor: currentTheme.vars.accent }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full border border-neutral-900"
              style={{ backgroundColor: currentTheme.vars.surfaceBg }}
            />
          </div>

          {isOpen ? (
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
          )}
        </button>
      </div>

      {/* Slide-Up / Modal Palette & Font Studio Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-100 bg-neutral-50/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs"
                  style={{
                    backgroundColor: currentTheme.vars.accentSoft,
                    color: currentTheme.vars.accent,
                  }}
                >
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-neutral-900 flex items-center gap-2">
                    Live Demo Theme &amp; Font Studio
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      12 Palettes
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Tap any color palette to see the website instantly transform live.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 rounded-xl transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Typography Controls Strip */}
            <div className="px-5 sm:px-6 py-3 border-b border-neutral-100 bg-white flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-600 font-semibold">
                <Type className="w-4 h-4 text-neutral-500" />
                <span>Font Feel:</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectFont("modern")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    fontStyle === "modern"
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  Clean Modern Sans
                </button>
                <button
                  onClick={() => handleSelectFont("humanist")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    fontStyle === "humanist"
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  Warm Friendly Sans
                </button>
                <button
                  onClick={() => handleSelectFont("serif")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all font-serif ${
                    fontStyle === "serif"
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                >
                  Prestigious Serif
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="px-5 sm:px-6 py-2.5 border-b border-neutral-100 bg-neutral-50/50 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-neutral-800 text-white"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 12 Palettes Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredPalettes.map((p) => {
                const isSelected = p.id === currentTheme.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => handleSelectPalette(p.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left group ${
                      isSelected
                        ? "border-neutral-900 shadow-md ring-2 ring-neutral-900 bg-neutral-50"
                        : "border-neutral-200 hover:border-neutral-400 bg-white hover:shadow-xs"
                    }`}
                  >
                    <div>
                      {/* Swatch color bar */}
                      <div className="flex h-5 rounded-lg overflow-hidden border border-black/10 shadow-inner mb-2.5">
                        <div
                          className="flex-1"
                          style={{ backgroundColor: p.vars.primary }}
                          title={`Primary: ${p.vars.primary}`}
                        />
                        <div
                          className="flex-1"
                          style={{ backgroundColor: p.vars.accent }}
                          title={`Accent: ${p.vars.accent}`}
                        />
                        <div
                          className="flex-1"
                          style={{ backgroundColor: p.vars.surfaceBg }}
                          title={`Surface: ${p.vars.surfaceBg}`}
                        />
                      </div>

                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-neutral-900 tracking-tight leading-snug">
                          {p.name}
                        </h4>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>{p.category}</span>
                      <span className="font-semibold text-neutral-600 group-hover:text-neutral-900">
                        {isSelected ? "ACTIVE NOW" : "Click to Apply →"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer with Reset */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  handleSelectPalette("royal-emerald");
                  handleSelectFont("modern");
                }}
                className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Royal Emerald</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors shadow-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
