"use client";

import React from "react";
import { Phone, MessageCircle, Stamp } from "lucide-react";
import { playHapticSound } from "@/utils/sound";

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href="tel:+919323467370"
          onClick={() => playHapticSound("click")}
          className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-neutral-950" />
          <span>Call Jayanand</span>
        </a>

        <a
          href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20assistance%20with%20government%20documentation%20%2F%20real%20estate%20consulting%20in%20Kharghar."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playHapticSound("click")}
          className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Desk</span>
        </a>
      </div>
    </div>
  );
}
