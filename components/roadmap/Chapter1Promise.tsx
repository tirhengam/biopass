"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, ChevronDown, Sparkles, Flame, Check, Droplets, Sun, Moon, Shield } from "lucide-react";

interface Chapter1PromiseProps {
  onExplore: () => void;
}

export const Chapter1Promise: React.FC<Chapter1PromiseProps> = ({
  onExplore,
}) => {
  return (
    <section
      id="section-promise"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 px-6 sm:px-12 bg-[#0B0B0E] text-white overflow-hidden"
    >
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
        {/* Left Column: Editorial Copy */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          {/* Eyebrow & Subtle Question */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-violet-300 text-xs font-mono uppercase tracking-[0.18em]">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>AI-POWERED PERSONAL BEAUTY ROADMAP</span>
            </div>

            <div className="text-xs sm:text-sm text-stone-400 italic">
              &ldquo;Tired of trial and error with skincare products?&rdquo;
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white">
            Your path to better skin <br className="hidden sm:inline" />
            <span className="font-normal italic text-stone-200">starts with a plan.</span>
          </h1>

          {/* Supporting Copy */}
          <div className="space-y-3 text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            <p className="text-stone-300">
              Want to start a skincare routine but don&apos;t know where to begin?
            </p>
            <p className="text-stone-300">
              Already have one, but aren&apos;t seeing the results you expected?
            </p>
            <p className="text-stone-400 pt-1 text-sm sm:text-base">
              BioPass turns your goals into a personalized beauty roadmap — helping you understand what to use, when to use it, and when it&apos;s time to adapt.
            </p>
          </div>

          {/* CTAs — Always "TRY THE DEMO" */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={BIOPASS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
            >
              <span>TRY THE DEMO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onExplore}
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.05] hover:border-white/40 transition-colors flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Supporting footnote */}
          <div className="pt-2 text-xs font-mono tracking-wider text-stone-400">
            Skincare first. Hair care and more coming next.
          </div>
        </div>

        {/* Right Column: Conceptual Schematic Preview of BioPass Dashboard with 5 Products */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-7 bg-[#111016]/90 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] space-y-5">
            {/* Top Bar: Goals & Streaks */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 block font-medium">
                  ACTIVE ROADMAP · DAY 12
                </span>
                <div className="text-sm sm:text-base font-medium text-white flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  <span>Goal: Barrier Resilience & Glow</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-semibold">8 Day Streak</span>
              </div>
            </div>

            {/* Daily Rhythm Tracker Pill */}
            <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] font-mono text-stone-300">
              <span className="text-stone-400">Today: Vitamin C Day</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" title="Mon: Niacinamide" />
                <span className="w-2 h-2 rounded-full bg-amber-400 ring-2 ring-white/60" title="Tue (Today): Vitamin C" />
                <span className="w-2 h-2 rounded-full bg-sky-400" title="Wed: Peptide" />
                <span className="w-2 h-2 rounded-full border border-stone-500" title="Thu: Rest" />
              </div>
            </div>

            {/* 5 COSMETIC PRODUCTS ORGANIZED IN USER ROUTINE */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-400 px-1">
                <span>Personal Routine (5 Products)</span>
                <span className="text-emerald-400">AM Active · PM Next</span>
              </div>

              {/* Product 1: Gentle Cleanser */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-800 border border-white/10 flex items-center justify-center text-stone-300 text-xs font-mono shrink-0">
                    01
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Gentle Milky Cleanser</div>
                    <div className="text-[10px] text-stone-400 font-mono">Low-pH Amino Base · AM Step 1</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-mono border border-emerald-500/30 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Done
                </span>
              </div>

              {/* Product 2: Active Serum (Today's Key Active) */}
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 text-xs font-mono font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white flex items-center gap-1.5">
                      <span>10% Ascorbyl Glucoside Serum</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    </div>
                    <div className="text-[10px] text-amber-200/80 font-mono">Targeted Antioxidant · Today&apos;s Active</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/30 flex items-center gap-1">
                  <Sun className="w-3 h-3" /> AM Slot
                </span>
              </div>

              {/* Product 3: Barrier Moisturizer */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-800 border border-white/10 flex items-center justify-center text-stone-300 text-xs font-mono shrink-0">
                    03
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Ceramide Barrier Gel-Cream</div>
                    <div className="text-[10px] text-stone-400 font-mono">3:1:1 Essential Lipids · AM Step 3</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-mono border border-emerald-500/30 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Done
                </span>
              </div>

              {/* Product 4: SPF Mineral Shield */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-stone-800 border border-white/10 flex items-center justify-center text-stone-300 text-xs font-mono shrink-0">
                    04
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Mineral UV Fluid SPF 50+</div>
                    <div className="text-[10px] text-stone-400 font-mono">Broad Spectrum Defense · AM Step 4</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-mono border border-emerald-500/30 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Done
                </span>
              </div>

              {/* Product 5: Evening Peptide Recovery */}
              <div className="p-3 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-indigo-300 text-xs font-mono shrink-0">
                    05
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Multi-Peptide Recovery Emulsion</div>
                    <div className="text-[10px] text-stone-400 font-mono">Collagen Support · PM Routine</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 text-[10px] font-mono border border-indigo-500/30 flex items-center gap-1">
                  <Moon className="w-3 h-3" /> Tonight
                </span>
              </div>
            </div>

            {/* Bottom Progress Summary */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>88% Weekly Consistency</span>
              </div>
              <span>Next Check-In: 2 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Indicator at bottom */}
      <div className="max-w-6xl mx-auto w-full pt-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-stone-400 border-t border-white/10 z-10">
        <span>AI-Powered Personal Beauty Roadmap</span>
        <button
          onClick={onExplore}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Scroll to How It Works</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
