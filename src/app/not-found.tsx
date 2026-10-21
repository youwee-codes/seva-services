import Link from "next/link";
import { Home, ArrowLeft, Phone, Search, FileX2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f6f2] px-4 py-16 relative overflow-hidden select-none">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-xl w-full">
        {/* Simulated Legal Bond Paper Docket */}
        <div className="bg-[#fdfbf7] rounded-2xl border-2 border-stone-300 p-8 sm:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden">
          {/* Top Maharashtra Header */}
          <div className="border-b-2 border-stone-300 pb-4 mb-6 text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 font-bold block mb-1">
              GOVERNMENT DOCKET RECORD SEARCH • ERROR CODE 404
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-stone-900 tracking-tight">
              DOCUMENT NOT FOUND IN REGISTRY
            </h2>
            <p className="text-xs font-mono text-stone-500 mt-1">
              File Index #ERR-404-NOT-FOUND • Seva Administrative Services, Kharghar
            </p>
          </div>

          {/* Center Void Rubber Stamp Graphic */}
          <div className="relative py-8 my-4 flex items-center justify-center">
            {/* Background 404 Watermark */}
            <span className="text-8xl sm:text-9xl font-black text-stone-200/60 font-mono tracking-tighter select-none">
              404
            </span>

            {/* 3D Angled VOID Stamp */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="rotate-[-16deg] border-4 border-dashed border-rose-700 bg-rose-50/90 text-rose-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg flex flex-col items-center justify-center"
                style={{
                  boxShadow: "0 10px 25px rgba(190, 18, 60, 0.25)",
                }}
              >
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-rose-600">
                  SECTION 404 • REGISTRY CITATION
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-black tracking-wider text-rose-800 leading-tight">
                  VOID / UNREGISTERED
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-rose-700 font-semibold mt-0.5">
                  RECORD PURGED OR INVALID DOSSIER URL
                </span>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 mb-8 text-xs font-mono text-stone-700 space-y-1">
            <div className="flex justify-between">
              <span className="text-stone-500">REQUISITION:</span>
              <span className="font-bold text-stone-900">Requested Web Path Missing</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">LOCATION:</span>
              <span className="font-semibold text-stone-800">Tulip Plaza CHS, Kharghar</span>
            </div>
            <p className="pt-2 text-[11px] text-stone-600 italic border-t border-amber-200/60">
              The requested governmental dossier or certificate page is not present in our digital register. Return to the main command center or verify the 28 active services.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl text-xs transition-transform active:scale-95 shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Return to Command Center</span>
            </Link>
            <Link
              href="/#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-stone-50 text-neutral-900 font-semibold rounded-xl border border-stone-300 text-xs transition-colors shadow-sm"
            >
              <Search className="w-4 h-4 text-amber-600" />
              <span>Search 28 Services</span>
            </Link>
            <a
              href="tel:+919323467370"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Jayanand</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
