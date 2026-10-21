"use client";

import React, { useState, useEffect, useRef } from "react";
import { docRequirements, DocRequirement } from "@/data/docRequirements";
import { playHapticSound } from "@/utils/sound";
import {
  Search,
  X,
  ArrowRight,
  Clock,
  ShieldCheck,
  MessageCircle,
  FileText,
  CornerDownLeft,
  Building,
  UserCheck,
  Scale,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (service: DocRequirement) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectService,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter 28 services based on query
  const filtered = docRequirements.filter((doc) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      doc.nameEn.toLowerCase().includes(q) ||
      doc.nameHi.toLowerCase().includes(q) ||
      doc.highlight.toLowerCase().includes(q) ||
      doc.govtDeptEn.toLowerCase().includes(q) ||
      doc.requiredDocsEn.some((d) => d.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
      playHapticSound("hover");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1));
      playHapticSound("hover");
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSelect = (service: DocRequirement) => {
    playHapticSound("stamp");
    if (onSelectService) {
      onSelectService(service);
    }
    const cleanMsg = encodeURIComponent(service.whatsappText);
    window.open(`https://wa.me/919323467370?text=${cleanMsg}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 bg-neutral-50/50">
          <Search className="w-5 h-5 text-neutral-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type any service (Passport, Gumasta, CIDCO, Rent Agreement, Gazette)..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-neutral-400 hover:text-neutral-600 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-neutral-200 text-neutral-400 hover:text-neutral-700 transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto divide-y divide-neutral-100 flex-1 p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 px-4">
              <FileText className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-neutral-700">
                No matching service found for &quot;{query}&quot;
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Call Jayanand directly at +91 9323467370 for custom documentation assistance.
              </p>
              <a
                href="tel:+919323467370"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold"
              >
                Call Jayanand Directly
              </a>
            </div>
          ) : (
            filtered.map((service, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={service.id}
                  onClick={() => handleSelect(service)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected ? "bg-amber-500/10 border border-amber-500/30 shadow-xs" : "hover:bg-neutral-50"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-200/80 text-neutral-700">
                        {service.sectionNum}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                        {service.nameEn}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-500 line-clamp-1">
                      {service.nameHi} • {service.highlight}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-medium pt-0.5">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                        <Clock className="w-3 h-3" />
                        {service.turnaroundEn}
                      </span>
                      <span>•</span>
                      <span>{service.govtDeptEn}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-end gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(service);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">WhatsApp Jayanand</span>
                      <span className="sm:hidden">Send</span>
                    </button>
                    <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">
                      Press ↵
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-2.5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-[10px] font-semibold text-neutral-700">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-[10px] font-semibold text-neutral-700">
                ↵
              </kbd>{" "}
              WhatsApp Desk
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-[10px] font-semibold text-neutral-700">
                ESC
              </kbd>{" "}
              Close
            </span>
          </div>
          <span className="font-semibold text-neutral-700">
            28 Registered Maharashtra Services
          </span>
        </div>
      </div>
    </div>
  );
}
