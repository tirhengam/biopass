"use client";

import React from "react";
import Image from "next/image";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, ChevronDown, Sparkles, Flame, Check, Sun, Moon, Shield } from "lucide-react";

interface Chapter1HeroProps {
  onExplore: () => void;
}

export const Chapter1Hero: React.FC<Chapter1HeroProps> = ({
  onExplore,
}) => {
  return (
    <section
      id="section-promise"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-16 px-6 sm:px-12 bg-[#1B0E33] text-white overflow-hidden transition-colors duration-700"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs font-mono uppercase tracking-[0.18em]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>AI-POWERED PERSONAL BEAUTY ROADMAP</span>
            </div>

            <div className="text-xs sm:text-sm text-purple-200/80 italic font-mono">
              &ldquo;Tired of trial and error with skincare products?&rdquo;
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.06] text-white">
            Your path to better skin <br className="hidden sm:inline" />
            <span className="font-normal italic text-yellow-300">starts with a plan.</span>
          </h1>

          {/* Supporting Text */}
          <div className="space-y-3 text-stone-200 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            <p>
              Want to start a skincare routine but don&apos;t know where to begin?
            </p>
            <p>
              Already have one, but aren&apos;t seeing the results you expected?
            </p>
            <p className="text-purple-200/90 pt-1 text-sm sm:text-base">
              BioPass turns your goals into a personalized beauty roadmap — helping you understand what to use, when to use it, and when it&apos;s time to adapt.
            </p>
          </div>

          {/* CTA Area — Strictly "TRY THE DEMO" */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={BIOPASS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-yellow-400 text-stone-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] flex items-center justify-center gap-3 group"
            >
              <span>TRY THE DEMO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onExplore}
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 text-xs font-mono tracking-wider text-purple-300/70">
            Skincare first. Hair care and more coming next.
          </div>
        </div>

        {/* Right Column: Conceptual Dashboard Schematic with 5 Products + 3D Character */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Main Dashboard Card */}
          <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-7 bg-[#2A184D]/90 border border-white/20 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] space-y-4 z-10">
            {/* Header: Goal & Streak */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 block font-semibold">
                  ACTIVE ROADMAP · DAY 12
                </span>
                <div className="text-sm sm:text-base font-semibold text-white flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  <span>Goal: Barrier Resilience &amp; Glow</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>8 Day Streak</span>
              </div>
            </div>

            {/* Daily Routine Rhythm Badge */}
            <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/20 border border-white/10 text-[11px] font-mono text-purple-200">
              <span className="text-white font-medium">Today: Vitamin C Day</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" title="Mon: Niacinamide" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white" title="Today: Vitamin C" />
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" title="Wed: Peptide" />
                <span className="w-2.5 h-2.5 rounded-full border-2 border-stone-300" title="Thu: Rest" />
              </div>
            </div>

            {/* 5 COSMETIC PRODUCTS ORGANIZED IN USER ROUTINE */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-purple-300/80 px-1 font-semibold">
                <span>Personal Routine (5 Products)</span>
                <span className="text-emerald-400">AM Active · PM Scheduled</span>
              </div>

              {/* Product 01: Gentle Cleanser */}
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-purple-900/50 border border-purple-400/30 flex items-center justify-center text-purple-200 text-xs font-mono font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Gentle Milky Cleanser</div>
                    <div className="text-[10px] text-purple-200/70 font-mono">Low-pH Amino Base · AM Step 1</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 flex items-center gap-1 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" /> Done
                </span>
              </div>

              {/* Product 02: Active Serum (Today's Key Active) */}
              <div className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/30 border border-amber-400/60 flex items-center justify-center text-amber-200 text-xs font-mono font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>10% Ascorbyl Glucoside Serum</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#F59E0B]" />
                    </div>
                    <div className="text-[10px] text-amber-200 font-mono">Antioxidant &amp; Glow · Today&apos;s Active</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/25 text-amber-200 text-[10px] font-mono border border-amber-400/40 flex items-center gap-1 font-semibold">
                  <Sun className="w-3 h-3" /> AM Slot
                </span>
              </div>

              {/* Product 03: Ceramide Barrier Gel-Cream */}
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-purple-900/50 border border-purple-400/30 flex items-center justify-center text-purple-200 text-xs font-mono font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Ceramide Barrier Gel-Cream</div>
                    <div className="text-[10px] text-purple-200/70 font-mono">3:1:1 Essential Lipids · AM Step 3</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 flex items-center gap-1 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" /> Done
                </span>
              </div>

              {/* Product 04: Mineral Shield SPF 50+ */}
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-purple-900/50 border border-purple-400/30 flex items-center justify-center text-purple-200 text-xs font-mono font-bold shrink-0">
                    04
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Mineral UV Fluid SPF 50+</div>
                    <div className="text-[10px] text-purple-200/70 font-mono">Broad Spectrum Defense · AM Step 4</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40 flex items-center gap-1 font-semibold">
                  <Check className="w-3 h-3 stroke-[3]" /> Done
                </span>
              </div>

              {/* Product 05: Evening Peptide Emulsion */}
              <div className="p-2.5 rounded-2xl bg-indigo-950/40 border border-indigo-400/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-indigo-900/50 border border-indigo-400/40 flex items-center justify-center text-indigo-200 text-xs font-mono font-bold shrink-0">
                    05
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Multi-Peptide Night Repair</div>
                    <div className="text-[10px] text-indigo-200/80 font-mono">Collagen Renewal · PM Routine</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-400/20 text-indigo-200 text-[10px] font-mono border border-indigo-400/40 flex items-center gap-1 font-semibold">
                  <Moon className="w-3 h-3" /> Tonight
                </span>
              </div>
            </div>

            {/* Bottom Progress Summary */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-purple-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>88% Consistency</span>
              </div>
              <span className="font-semibold text-yellow-300">Next Check-In: 2 days</span>
            </div>
          </div>

          {/* UPLOADED 3D CHARACTER (Delighted / Loving their routine) */}
          <div className="hidden sm:block absolute -top-12 -right-8 w-44 lg:w-52 aspect-[1/1] z-20 pointer-events-none drop-shadow-2xl">
            <Image
              src="/characters/character-heart-eyes.png"
              alt="Delighted BioPass user loving their personalized beauty roadmap"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Chapter Indicator at bottom */}
      <div className="max-w-6xl mx-auto w-full pt-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-purple-300/80 border-t border-white/10 z-10">
        <span>Chapter 01 · Hero</span>
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
