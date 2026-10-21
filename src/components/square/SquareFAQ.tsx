"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { ChevronDown, Plus, Minus, MessageCircle, Phone, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  catColor: string;
}

const faqs: FAQItem[] = [
  {
    category: "Liaison & Office",
    catColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    question: "Do I have to stand in government queues myself?",
    answer: "No. That is why we are here! You give us your documents at our Sector-13 office, and our team handles the physical filing, challan payments, and follow-ups. You only need to appear if an in-person photo or biometric is legally required by the government (such as at the Passport Seva Kendra).",
  },
  {
    category: "CIDCO Clearances",
    catColor: "bg-blue-100 text-blue-800 border-blue-200",
    question: "How does the CIDCO Transfer NOC process work in Kharghar?",
    answer: "We verify your society NOC, check your original allotment letters, calculate the CIDCO transfer charges, prepare the tripartite agreement, and track your file with CIDCO Bhavan until the final transfer order is signed.",
  },
  {
    category: "Rent Agreements",
    catColor: "bg-amber-100 text-amber-800 border-amber-200",
    question: "Can you do rent agreement biometric scanning at my home?",
    answer: "Yes! We bring the thumb scanner right to your flat or office anywhere in Kharghar, Kamothe, Belapur, and Nerul. The landlord, tenant, and two witnesses can all do their digital verification at home.",
  },
  {
    category: "Name Spelling",
    catColor: "bg-purple-100 text-purple-800 border-purple-200",
    question: "What if there is a spelling mistake in my name or certificates?",
    answer: "Very common! We draft a legal affidavit and publish an official Maharashtra Gazette notification (राजपत्र) to fix your name legally across all your identity proofs.",
  },
  {
    category: "Transparent Fees",
    catColor: "bg-teal-100 text-teal-800 border-teal-200",
    question: "Are there any hidden costs beyond the initial quote?",
    answer: "Zero hidden costs. You receive a clear breakdown upfront. The government fee comes with an official treasury receipt, and our service charge is fixed.",
  },
  {
    category: "Real Estate Title",
    catColor: "bg-rose-100 text-rose-800 border-rose-200",
    question: "How do you verify properties before recommending them to buyers?",
    answer: "We inspect the complete 30-year CIDCO allotment history, Occupancy Certificate (OC), society share certificates, and bank clearance so you never risk buying a disputed property.",
  },
];

export default function SquareFAQ() {
  const { language, currentTheme } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 border-b border-neutral-200 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.vars.surfaceBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: FAQ Header & Support Card (4 cols) */}
          <div className="lg:col-span-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs"
              style={{
                backgroundColor: currentTheme.vars.accentSoft,
                color: currentTheme.vars.primaryDark,
              }}
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>FREQUENT QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 leading-tight mb-3">
              Common questions. <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.vars.primary}, ${currentTheme.vars.accent})`,
                }}
              >
                Simple answers.
              </span>
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
              Got a specific question or an unusual document issue? Message Jayanand directly on WhatsApp for an instant answer.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-neutral-900">
                Have a question not listed here?
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Send your question on WhatsApp. We typically reply in under 15 minutes during office hours.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/919323467370?text=Hello%20Jayanand%20Sir%2C%20I%20have%20a%20question%20regarding%20my%20documents."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>

                <a
                  href="tel:+919323467370"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call: +91 9323467370</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions (8 cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-neutral-900 shadow-md ring-1 ring-neutral-900/10"
                      : "bg-white/95 border-neutral-200/90 hover:border-neutral-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border inline-block mb-1.5 ${faq.catColor}`}>
                        {faq.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                        {faq.question}
                      </h4>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50 font-normal">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}