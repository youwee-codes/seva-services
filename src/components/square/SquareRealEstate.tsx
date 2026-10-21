"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import { PropertyDeedArtifact } from "@/components/Artifacts";
import {
  Building,
  Home,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Tag,
  Key,
  Compass,
} from "lucide-react";

interface ListingItem {
  id: string;
  type: "shops" | "flats" | "plots";
  title: string;
  location: string;
  specs: string;
  status: string;
  priceGuidance: string;
  reraStatus: string;
  legalTag: string;
}

const listingsData: ListingItem[] = [
  {
    id: "shop-1",
    type: "shops",
    title: "Ground Floor Commercial Retail Suite",
    location: "Tulip Plaza CHS, Sector-13 Kharghar",
    specs: "320 - 680 Sq. Ft. Carpet • High Footfall",
    status: "Ready to Move",
    priceGuidance: "Available for Rent & Sale",
    reraStatus: "CIDCO Commercial Approved",
    legalTag: "Title 100% Clear",
  },
  {
    id: "shop-2",
    type: "shops",
    title: "Main Road Corner Office Space",
    location: "Sector-20 & Sector-35 Kharghar",
    specs: "450 - 1,200 Sq. Ft. • Dedicated Parking",
    status: "Ready for Setup",
    priceGuidance: "Ideal for Doctors, CA, Clinics & IT",
    reraStatus: "NMMC Trade License Ready",
    legalTag: "Society NOC Verified",
  },
  {
    id: "flat-1",
    type: "flats",
    title: "Spacious 2 BHK High-Rise Apartment",
    location: "Sector-12 & Sector-13 Kharghar (Near Metro)",
    specs: "1,050 Sq. Ft. Built-up • Master Bed • Balcony",
    status: "Ready with Full OC",
    priceGuidance: "Loans from SBI, HDFC & All Banks",
    reraStatus: "MahaRERA: P52000028192",
    legalTag: "CIDCO Final Order Done",
  },
  {
    id: "flat-2",
    type: "flats",
    title: "Prime 3 BHK Luxury Living Flat",
    location: "Sector-20 Kharghar (Hills Facing)",
    specs: "1,480 Sq. Ft. Carpet • 2 Car Parks",
    status: "Gated Society CHS",
    priceGuidance: "Direct Resale via Jayanand Desk",
    reraStatus: "Bank Loan Approved",
    legalTag: "Clear Conveyance",
  },
  {
    id: "plot-1",
    type: "plots",
    title: "CIDCO 12.5% Scheme Clear Residential Plot",
    location: "Kharghar Valley Node & Ulwe Sector-19",
    specs: "100 - 350 Sq. Mtr. Clear Demarcation",
    status: "Allotment Order Ready",
    priceGuidance: "Tripartite Agreement Ready",
    reraStatus: "CIDCO Registered File",
    legalTag: "Mortgage NOC Clear",
  },
  {
    id: "plot-2",
    type: "plots",
    title: "Commercial-cum-Residential Corner Land",
    location: "Roadpali / Taloja Phase 1 Node",
    specs: "500 - 1,500 Sq. Mtr. • FSI 1.5 - 2.0",
    status: "Compound Walled",
    priceGuidance: "Joint Venture / Direct Sale",
    reraStatus: "Town Planning Approved",
    legalTag: "Clean 30-Yr Search",
  },
];

export default function SquareRealEstate() {
  const { language } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<"all" | "shops" | "flats" | "plots">("all");

  const filteredListings =
    selectedFilter === "all"
      ? listingsData
      : listingsData.filter((item) => item.type === selectedFilter);

  return (
    <section
      id="real-estate"
      className="relative bg-gradient-to-b from-[#0a1128] via-[#091024] to-[#040814] text-white py-16 sm:py-24 border-b border-neutral-800 overflow-hidden"
    >
      {/* Subtle Warm Gold Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217, 119, 6, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative ambient gold glow */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Kinetic Infinite Marquee */}
      <div className="w-full overflow-hidden border-y border-amber-500/20 bg-amber-950/20 py-3 mb-14 select-none backdrop-blur-xs">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-amber-300 font-extrabold">
            <span>BUY • SALE • RENT — SHOPS • FLATS • PLOTS</span>
            <span className="text-amber-500/40">◆</span>
            <span>100% CLEAR TITLE VERIFIED</span>
            <span className="text-amber-500/40">◆</span>
            <span>TULIP PLAZA SECTOR 13 KHARGHAR</span>
            <span className="text-amber-500/40">◆</span>
            <span>CIDCO TRANSFER NOC &amp; MORTGAGE</span>
            <span className="text-amber-500/40">◆</span>
            <span>BUY • SALE • RENT — SHOPS • FLATS • PLOTS</span>
            <span className="text-amber-500/40">◆</span>
            <span>100% CLEAR TITLE VERIFIED</span>
            <span className="text-amber-500/40">◆</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 04 Header with Kinetic 04 Counter */}
        <div className="flex items-start justify-between border-b border-white/10 pb-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>SEVA REAL ESTATE CONSULTANT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Buy, Sell or Rent in Kharghar. <br />
              <span className="text-amber-400">100% verified legal titles.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl font-normal leading-relaxed">
              Never risk your savings on disputed property. We verify the full CIDCO allotment chain, Society NOCs, and bank loan approvals before you make any payment.
            </p>
          </div>

          <div className="text-5xl sm:text-7xl font-mono font-black text-amber-400/20 leading-none select-none">
            04
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
            <button
              onClick={() => {
                setSelectedFilter("all");
                playHapticSound("switch");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "bg-white/10 border border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              All Properties ({listingsData.length})
            </button>
            <button
              onClick={() => {
                setSelectedFilter("shops");
                playHapticSound("switch");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "shops"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "bg-white/10 border border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              Commercial Shops
            </button>
            <button
              onClick={() => {
                setSelectedFilter("flats");
                playHapticSound("switch");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "flats"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "bg-white/10 border border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              2 &amp; 3 BHK Flats
            </button>
            <button
              onClick={() => {
                setSelectedFilter("plots");
                playHapticSound("switch");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === "plots"
                  ? "bg-amber-400 text-neutral-950 shadow-md"
                  : "bg-white/10 border border-white/10 text-neutral-300 hover:text-white"
              }`}
            >
              CIDCO Plots &amp; Land
            </button>
          </div>

          <div className="text-xs text-amber-300 font-mono flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>MahaRERA &amp; CIDCO Title Verified</span>
          </div>
        </div>

        {/* Real Estate Cards Grid with Rich Color Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredListings.map((prop) => {
            const whatsappText = encodeURIComponent(
              `Hello Jayanand Sir, I am interested in ${prop.title} at ${prop.location}. Please share details and pricing.`
            );

            return (
              <div
                key={prop.id}
                className="bg-white/[0.05] backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-amber-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {prop.type.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {prop.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors leading-snug">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{prop.location}</span>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-3.5 border border-white/10 space-y-2 text-xs font-mono mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">SPECS:</span>
                      <span className="text-white font-semibold">{prop.specs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">DETAILS:</span>
                      <span className="text-amber-300">{prop.priceGuidance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">TITLE:</span>
                      <span className="text-emerald-400">{prop.legalTag}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="tel:+919323467370"
                    className="text-xs text-neutral-300 hover:text-white flex items-center gap-1 font-mono"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>+91 9323467370</span>
                  </a>

                  <a
                    href={`https://wa.me/919323467370?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Estate Action Ribbon */}
        <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-neutral-900 to-amber-950/40 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Have a Shop, Flat, or Plot to Sell or Rent in Kharghar?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              List directly with Jayanand. Fast verified tenant matching, registered rent agreements, and smooth CIDCO transfer clearances.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <a
              href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20want%20to%20list%20my%20property%20for%20Sale%20%2F%20Rent%20in%20Kharghar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Property Desk</span>
            </a>

            <a
              href="tel:+919323467370"
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Jayanand</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}