"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20assistance%20with%20government%20documentation%20or%20real%20estate."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
      aria-label="Direct WhatsApp Consultation with Jayanand"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="text-xs font-bold tracking-tight">WhatsApp Consultation</span>
    </a>
  );
}
