"use client";

import React, { useState } from "react";
import { Beaker, CheckCircle2, BookOpen, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function ScienceSection() {
  const [activeTab, setActiveTab] = useState<"simple" | "deeper">("simple");

  return (
    <section id="science" className="relative py-28 sm:py-36 bg-noir-deep text-white overflow-hidden">
      
      {/* Background Abstract Data Grid Visualization */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF007F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-hotpink/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            07 // SOPHISTICATED EVIDENCE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Science when you want it.<br />
            <span className="text-white/60">Simplicity when you don't.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-white/70 font-medium leading-relaxed">
            You shouldn't need to be a cosmetic chemist to choose a serum.
          </p>
        </div>

        {/* Interactive Dual-Level Toggle */}
        <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-10">
          <button
            onClick={() => setActiveTab("simple")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "simple"
                ? "bg-hotpink text-white shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Simple View (Default)
          </button>
          <button
            onClick={() => setActiveTab("deeper")}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "deeper"
                ? "bg-hotpink text-white shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Deeper View (When Curious)
          </button>
        </div>

        {/* View Content Display */}
        <div className="max-w-4xl rounded-3xl bg-noir-card border border-white/[0.1] p-6 sm:p-10 shadow-2xl transition-all duration-500">
          
          {activeTab === "simple" ? (
            /* SIMPLE VIEW */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    INSTANT CLARITY LEVEL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    BioPass Rapid Compatibility
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-hotpink/10 text-hotpink text-xs font-mono font-bold">
                  FAST INSIGHT
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 py-4">
                <div className="w-32 h-32 rounded-full border-4 border-hotpink flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(255,0,127,0.3)] shrink-0">
                  <span className="text-4xl font-black text-white leading-none">92%</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-hotpink mt-1">
                    MATCH
                  </span>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-white">
                    Highly Compatible with Your Skin & Current Routine
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed max-w-lg">
                    Safe for your sensitive barrier, active botanical concentration confirmed effective, and complements your evening hydration steps with zero active ingredient clash.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* DEEPER VIEW: Ingredients, Formulation, Compatibility, Scientific Evidence */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-hotpink font-bold">
                    DEEP SCIENTIFIC DOSSIER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Four-Tier Analytical Breakdown
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold">
                  EVIDENCE-BACKED
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-hotpink text-xs font-bold font-mono uppercase">
                    <Beaker className="w-3.5 h-3.5" />
                    <span>01. INGREDIENTS</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Complete INCI deconstruction with safety indices, EWG toxicity benchmarks, and botanical extract purities.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white text-xs font-bold font-mono uppercase">
                    <Layers className="w-3.5 h-3.5" />
                    <span>02. FORMULATION</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Physical emulsion stability (O/W vs W/O), rheology, delivery liposomes, and active bioavailability.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white text-xs font-bold font-mono uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>03. COMPATIBILITY</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Cross-product acid-base interactions, occlusion timing, and molecular stacking parameters.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-hotpink text-xs font-bold font-mono uppercase">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>04. SCIENTIFIC EVIDENCE</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    Direct citations from peer-reviewed clinical trials, in-vivo barrier recovery metrics, and dermatological reviews.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Guiding Quote */}
        <div className="mt-12 text-center text-sm font-mono tracking-wider text-white/50 uppercase">
          "Simple by default. Deep when curious."
        </div>

      </div>

    </section>
  );
}
