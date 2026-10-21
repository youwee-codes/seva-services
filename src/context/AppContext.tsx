"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemePalette, palettes } from "@/data/themes";
import { Language, translations, Translations } from "@/data/translations";

export type FontStyle = "modern" | "humanist" | "serif";

interface AppContextType {
  currentTheme: ThemePalette;
  setThemeId: (id: string) => void;
  fontStyle: FontStyle;
  setFontStyle: (font: FontStyle) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isThemeModalOpen: boolean;
  setIsThemeModalOpen: (open: boolean) => void;
  isPitchModalOpen: boolean;
  setIsPitchModalOpen: (open: boolean) => void;
  palettes: ThemePalette[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Default to Royal Emerald & Champagne Gold (luxurious, high-trust, authentic)
  const [themeId, setThemeIdState] = useState<string>("royal-emerald");
  const [fontStyle, setFontStyleState] = useState<FontStyle>("modern");
  const [language, setLanguageState] = useState<Language>("en");
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState<boolean>(false);

  // Initialize from localStorage if present
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("seva_theme");
      if (savedTheme && palettes.some((p) => p.id === savedTheme)) {
        setThemeIdState(savedTheme);
      }
      const savedFont = localStorage.getItem("seva_font");
      if (savedFont === "modern" || savedFont === "humanist" || savedFont === "serif") {
        setFontStyleState(savedFont as FontStyle);
      }
      const savedLang = localStorage.getItem("seva_lang");
      if (savedLang === "en" || savedLang === "hi") {
        setLanguageState(savedLang as Language);
      }
    } catch {
      // Storage unavailable or blocked
    }
  }, []);

  const currentTheme = palettes.find((p) => p.id === themeId) || palettes[0];

  // Apply CSS custom properties to :root whenever currentTheme changes
  useEffect(() => {
    const root = document.documentElement;
    const v = currentTheme.vars;
    root.style.setProperty("--theme-primary", v.primary);
    root.style.setProperty("--theme-primary-dark", v.primaryDark);
    root.style.setProperty("--theme-primary-light", v.primaryLight);
    root.style.setProperty("--theme-accent", v.accent);
    root.style.setProperty("--theme-accent-hover", v.accentHover);
    root.style.setProperty("--theme-accent-soft", v.accentSoft);
    root.style.setProperty("--theme-hero-from", v.heroGradFrom);
    root.style.setProperty("--theme-hero-via", v.heroGradVia);
    root.style.setProperty("--theme-hero-to", v.heroGradTo);
    root.style.setProperty("--theme-bg", v.surfaceBg);
    root.style.setProperty("--theme-card", v.surfaceCard);
    root.style.setProperty("--theme-border", v.borderLight);
    root.style.setProperty("--theme-glow", v.accentGlow);
  }, [currentTheme]);

  // Apply font family based on fontStyle
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-font", fontStyle);
    if (fontStyle === "modern") {
      root.style.setProperty(
        "--theme-font-family",
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      );
      root.style.setProperty("--theme-heading-font", "inherit");
    } else if (fontStyle === "humanist") {
      root.style.setProperty(
        "--theme-font-family",
        '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      );
      root.style.setProperty("--theme-heading-font", "inherit");
    } else if (fontStyle === "serif") {
      root.style.setProperty(
        "--theme-font-family",
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      );
      root.style.setProperty(
        "--theme-heading-font",
        'Georgia, Cambria, "Times New Roman", Times, serif'
      );
    }
  }, [fontStyle]);

  const setThemeId = (id: string) => {
    setThemeIdState(id);
    try {
      localStorage.setItem("seva_theme", id);
    } catch {}
  };

  const setFontStyle = (font: FontStyle) => {
    setFontStyleState(font);
    try {
      localStorage.setItem("seva_font", font);
    } catch {}
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("seva_lang", lang);
    } catch {}
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        setThemeId,
        fontStyle,
        setFontStyle,
        language,
        setLanguage,
        t,
        isThemeModalOpen,
        setIsThemeModalOpen,
        isPitchModalOpen,
        setIsPitchModalOpen,
        palettes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
