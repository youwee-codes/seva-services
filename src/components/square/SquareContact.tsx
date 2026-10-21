"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { playHapticSound } from "@/utils/sound";
import confetti from "canvas-confetti";
import { StampPaperArtifact, InkStamp } from "@/components/Artifacts";
import { docRequirements } from "@/data/docRequirements";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Stamp,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function SquareContact() {
  const { language, currentTheme } = useApp();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "Passport (Fresh / Renewal / Tatkaal)",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isApprovedStampActive, setIsApprovedStampActive] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your 10-digit mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone.slice(-10))) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select the service required.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setShakeKey((prev) => prev + 1);
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      playHapticSound("hover");
      return;
    }

    setStatus("submitting");
    playHapticSound("stamp");
    setIsApprovedStampActive(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: [currentTheme.vars.accent, currentTheme.vars.primary, "#10b981"],
        });
      } catch {}

      setStatus("success");
      playHapticSound("success");

      const text = encodeURIComponent(
        `*New Document Request*\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📋 Service: ${formData.service}\n💬 Message: ${formData.message || "Please share required checklist & cost."}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/919323467370?text=${text}`, "_blank");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", service: "Passport (Fresh / Renewal / Tatkaal)", message: "" });
    setErrors({});
    setStatus("idle");
    setIsApprovedStampActive(false);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-neutral-200 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: currentTheme.vars.surfaceBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Friendly Section Header */}
        <div className="max-w-3xl mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-2xs"
            style={{
              backgroundColor: currentTheme.vars.accentSoft,
              color: currentTheme.vars.accent,
            }}
          >
            <Stamp className="w-3.5 h-3.5" />
            <span>DIRECT COUNTER • TULIP PLAZA KHARGHAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
            Fast Document Request.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Fill in your details below. Watch your ₹100 stamp paper preview update live, then tap Stamp &amp; Send to WhatsApp to connect with Jayanand in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Friendly Form (6 cols) */}
          <div
            key={shakeKey}
            className={`lg:col-span-6 bg-white rounded-3xl p-6 sm:p-9 border border-neutral-200 shadow-xl relative ${
              Object.keys(errors).length > 0 ? "animate-shake" : ""
            }`}
          >
            {/* Form Top Title */}
            <div className="border-b border-neutral-100 pb-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block">
                  FAST-TRACK INQUIRY
                </span>
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                  Tell Us What You Need
                </h3>
              </div>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                Desk #03 Online
              </span>
            </div>

            {status === "success" ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900">
                  Approved &amp; Stamped!
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-neutral-900">{formData.name}</span>. Your request for <span className="font-semibold text-amber-700">{formData.service}</span> is ready. Opening WhatsApp now...
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919323467370?text=${encodeURIComponent(
                      `*Document Request Stamped*\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nNotes: ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Now</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold"
                  >
                    Start New Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Patil"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 bg-neutral-50/70 focus:bg-white focus:outline-none transition-all ${
                      errors.name
                        ? "border-red-400 ring-2 ring-red-100"
                        : "border-neutral-300 focus:border-neutral-900"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    WhatsApp Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-xs text-neutral-400 font-mono font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="client-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9323467370"
                      maxLength={14}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-neutral-900 bg-neutral-50/70 focus:bg-white focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-neutral-300 focus:border-neutral-900"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="client-service"
                    className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    Which Document Do You Need? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="client-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/70 text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all font-medium"
                  >
                    <optgroup label="Personal & Identity">
                      {docRequirements
                        .filter((s) => s.sectionNum === "01")
                        .map((s) => (
                          <option key={s.id} value={s.nameEn}>
                            {s.nameEn}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Shop & Business Licenses">
                      {docRequirements
                        .filter((s) => s.sectionNum === "02")
                        .map((s) => (
                          <option key={s.id} value={s.nameEn}>
                            {s.nameEn}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Legal, CIDCO & Real Estate">
                      {docRequirements
                        .filter((s) => s.sectionNum === "03")
                        .map((s) => (
                          <option key={s.id} value={s.nameEn}>
                            {s.nameEn}
                          </option>
                        ))}
                      <option value="Seva Real Estate Buy / Sale / Rent">
                        Seva Real Estate: Buy / Sale / Rent (Shops, Flats, Lands)
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1"
                  >
                    Any Details / Urgency? (Optional)
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Need urgent Tatkaal passport appointment / doorstep biometric rent agreement in Sector 13."
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50/70 text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-all"
                  />
                </div>

                {/* Submit & Stamp Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-sm font-bold shadow-xl transition-transform active:scale-98 cursor-pointer group"
                  style={{
                    backgroundColor: currentTheme.vars.primary,
                  }}
                >
                  <Stamp className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                  <span>
                    {status === "submitting"
                      ? "Stamping Document..."
                      : "Stamp & Send to WhatsApp"}
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="pt-2 text-center text-xs text-neutral-500 font-mono">
                  Or call directly:{" "}
                  <a
                    href="tel:+919323467370"
                    className="font-bold text-neutral-900 hover:text-amber-700 underline"
                  >
                    +91 9323467370 (Jayanand)
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Live Real-Time Updating Stamp Paper Preview (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[400px] mb-2 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>LIVE PREVIEW DOCKET</span>
              </span>
              <span>AA 932346</span>
            </div>

            {/* Live Updating Stamp Paper */}
            <div className="relative scale-95 sm:scale-100">
              <StampPaperArtifact
                applicantName={formData.name || "Citizen of Kharghar"}
                serviceName={formData.service}
                serialNo="AA 932346"
                showStamp={false}
              />

              {isApprovedStampActive && (
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                  <InkStamp
                    label="APPROVED & SENT TO JAYANAND"
                    subLabel="SEVA ADMINISTRATIVE SERVICES"
                    date="2026 • KHARGHAR COUNTER"
                    color="green"
                    animateIn={true}
                  />
                </div>
              )}
            </div>

            <p className="text-[11px] font-mono text-neutral-400 mt-3 text-center">
              Official Maharashtra Treasury ₹100 Docket • Updates as you type
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
