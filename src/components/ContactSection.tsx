"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageCircle,
  Sparkles,
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

type FormStatus = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Passport (Fresh / Renewal)",
  "Domicile Certificate (In-State / Other)",
  "Income Certificate",
  "Rahivashi Dakhala",
  "Ration Card (Kesari / White)",
  "PAN Card",
  "Name Change (Gazette)",
  "EWS Certificate",
  "Senior Citizen Card",
  "Non-Creamy Layer Certificate",
  "Udyam Aadhar Registration",
  "Gumasta Licence (<10 & >10 Workers)",
  "Food Licence (FSSAI)",
  "GST Registration & Return",
  "Income Tax Return (ITR)",
  "Trust / Mandal / Sanstha Registration",
  "12A & 80G Tax Exemption",
  "FCRA Registration",
  "All Types of Affidavits",
  "CIDCO Transfer / Mortgage NOC",
  "Flat & Plot Registration",
  "RERA Registration",
  "Online Registered Rent Agreement (Police NOC)",
  "Electricity Bill Name Change",
  "Real Estate: Buy / Sale / Rent",
  "Other Government Document Inquiry",
];

export default function ContactSection() {
  const { currentTheme, t } = useApp();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
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
      newErrors.service = "Please select the service you need.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a short message.";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Message must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Simulate submission network response
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d97706", "#064e3b", "#10b981", "#3b82f6"],
        });
      } catch {}

      setStatus("success");

      // Auto-open WhatsApp with the inquiry details pre-filled
      const whatsappText = encodeURIComponent(
        `*New Inquiry from Website*\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📋 Service: ${formData.service}\n💬 Message: ${formData.message}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/919323467370?text=${whatsappText}`, "_blank");
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
    setFormData({ name: "", phone: "", service: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f8fafc] relative">
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
            {t.contact.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Phone Card */}
            <a
              href="tel:+919323467370"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: currentTheme.vars.accentSoft,
                  color: currentTheme.vars.accent,
                }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.info.phoneTitle}
                </p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">
                  +91 9323467370
                </p>
                <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                  Click to Call Jayanand Directly
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info.sevajv@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.info.emailTitle}
                </p>
                <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 break-all">
                  info.sevajv@gmail.com
                </p>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  Click to Send Official Email
                </p>
              </div>
            </a>

            {/* Office Address Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.info.addressTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                  {t.contact.info.address}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t.contact.info.hoursTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold mt-0.5">
                  {t.contact.info.hours}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.contact.info.sunday}
                </p>
              </div>
            </div>

            {/* Big WhatsApp Trigger */}
            <a
              href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20need%20quick%20assistance%20with%20documentation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant Chat on WhatsApp (+91 9323467370)</span>
            </a>
          </div>

          {/* Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 card-3d-hover">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    {t.contact.success.message}
                  </p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-colors cursor-pointer"
                    style={{ backgroundColor: currentTheme.vars.accent }}
                  >
                    {t.contact.success.action}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {t.contact.formTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {t.contact.formSubtitle}
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 mb-5">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-700">
                        Could not process form. Please call or message +91 9323467370 directly.
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.fields.name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.fields.namePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-300 ring-2 ring-red-100"
                            : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.fields.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.fields.phonePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                          errors.phone
                            ? "border-red-300 ring-2 ring-red-100"
                            : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.fields.service} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                          errors.service
                            ? "border-red-300 ring-2 ring-red-100"
                            : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                        } ${!formData.service ? "text-slate-400" : ""}`}
                      >
                        <option value="" disabled>
                          {t.contact.fields.serviceDefault}
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        {t.contact.fields.message} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.contact.fields.messagePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50/50 focus:bg-white focus:outline-none resize-none transition-all ${
                          errors.message
                            ? "border-red-300 ring-2 ring-red-100"
                            : "border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 px-6 rounded-2xl text-white font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      style={{
                        backgroundColor: currentTheme.vars.primary,
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>{t.contact.fields.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contact.fields.submit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
