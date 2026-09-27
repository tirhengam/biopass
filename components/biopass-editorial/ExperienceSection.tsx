"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowUpRight, Sparkles, X, Beaker, ShieldCheck } from "lucide-react";
import { BIOPASS_APP_URL } from "@/config/appConfig";

export default function ExperienceSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-28 sm:py-36 bg-noir text-white overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-hotpink/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            04 // THE TRANSPARENT RESULT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            Know why it matches.
          </h2>
          <p className="text-lg sm:text-2xl text-white/70 font-medium leading-relaxed">
            A recommendation shouldn't be a black box.
          </p>
        </div>

        {/* Consumer-Friendly Product Match Card */}
        <div className="max-w-2xl mx-auto">
          
          <div className="rounded-3xl bg-noir-card border border-white/[0.12] p-6 sm:p-9 shadow-2xl relative space-y-7 hover:border-hotpink/50 transition-all duration-300">
            
            {/* Card Header: Product Meta & Match Badge */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-hotpink font-bold">
                  MATCH RESULT SPECIMEN
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Hydra-Barrier Ceramide Elixir
                </h3>
                <p className="text-xs text-white/50">
                  Target: Barrier Repair & Deep Hydration · 50ml
                </p>
              </div>

              {/* Match Score Badge */}
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-hotpink/15 border border-hotpink/40 text-center shrink-0 shadow-[0_0_20px_rgba(255,0,127,0.2)]">
                <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                  94%
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-hotpink mt-1">
                  MATCH
                </span>
              </div>
            </div>

            {/* Why BioPass Likes It For You (2-3 short personalized reasons) */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/50 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-hotpink" />
                <span>Why BioPass likes it for you</span>
              </span>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-hotpink shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">Identical Lipid Ratio:</strong> Contains 3:1:1 physiological ceramides that replenish your sensitive stratum corneum.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-hotpink shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">Zero Pore-Cloggers:</strong> Free of isopropyl myristate and heavy comedogenic esters flagged in your profile.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-hotpink shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">Retinol Synergist:</strong> Soothes the flaking associated with your existing 0.3% nightly retinol step.
                  </p>
                </div>
              </div>
            </div>

            {/* One Thing to Know (Caution / Compatibility) */}
            <div className="p-4 rounded-2xl bg-[#26101B] border border-hotpink/30 space-y-1">
              <div className="flex items-center gap-2 text-hotpink text-xs font-bold font-mono uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-hotpink shrink-0" />
                <span>One Thing to Know</span>
              </div>
              <p className="text-xs text-white/80 pl-6 leading-relaxed">
                Contains mild fermented galactomyces. If using right after high-percentage Vitamin C (L-Ascorbic Acid), wait 10 minutes to prevent transient flushing.
              </p>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <span>See Ingredients & Science</span>
                <Beaker className="w-3.5 h-3.5 text-hotpink" />
              </button>

              <a
                href={BIOPASS_APP_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-hotpink hover:bg-hotpink-vibrant transition-all shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:scale-105"
              >
                <span>Test With Your Routine</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Ingredient & Science Breakdown Drawer / Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-noir-card rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-hotpink uppercase font-bold">
                  FORMULATION DOSSIER
                </span>
                <h4 className="text-xl font-bold text-white">
                  Hydra-Barrier Ceramide Elixir
                </h4>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-2">
                <span className="font-mono text-white/50 uppercase tracking-wider block">
                  KEY ACTIVES VERIFIED
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="font-bold text-white block">Ceramide NP (3%)</span>
                    <span className="text-[11px] text-white/60">Intercellular lipid replenishment</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="font-bold text-white block">Cholesterol (1%)</span>
                    <span className="text-[11px] text-white/60">Membrane fluid stabilizer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-white/50 uppercase tracking-wider block">
                  CLINICAL EVIDENCE SUMMARY
                </span>
                <p className="text-white/70 leading-relaxed">
                  Peer-reviewed consensus in the <em>Journal of Cosmetic Dermatology</em> demonstrates that identical 3:1:1 lipid molar formulations yield a 42% decrease in transepidermal water loss (TEWL) over 14 days.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white uppercase"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
