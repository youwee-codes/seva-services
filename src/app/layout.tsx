import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyMobileBar from "@/components/StickyMobileBar";
import ThemePaletteBar from "@/components/ThemePaletteBar";
import LenisScroll from "@/components/LenisScroll";

export const metadata: Metadata = {
  title: "Seva Administrative Services & Real Estate Consultant | Kharghar, Navi Mumbai",
  description:
    "Kharghar's premier single-window command center for Passport, Maharashtra Domicile, CIDCO Transfer NOC, Online Rent Agreement with Police NOC, Gumasta Licence, GST & Real Estate Consulting in Sector 13, Kharghar, Navi Mumbai. Proprietor: Jayanand. Call +91 9323467370.",
  keywords:
    "Seva Administrative Services, Seva Real Estate Consultant, Kharghar Sector 13, Navi Mumbai, Jayanand, Passport, Domicile, CIDCO Transfer NOC, Rent Agreement Police NOC, Gumasta Licence, Food Licence FSSAI, GST, Real Estate Kharghar Tulip Plaza",
  openGraph: {
    title: "Seva Administrative Services & Real Estate Consultant | Kharghar, Navi Mumbai",
    description:
      "Kharghar's premier single-window command center for Government Certificates, Legal Registrations, CIDCO Transfers & Real Estate Consulting in Sector 13.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <LenisScroll />
        <AppProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ThemePaletteBar />
          <StickyMobileBar />
        </AppProvider>
      </body>
    </html>
  );
}
