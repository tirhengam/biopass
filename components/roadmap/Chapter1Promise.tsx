"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, Check, ChevronDown } from "lucide-react";

interface Chapter1PromiseProps {
  onOpenBuilder: () => void;
  onExplore: () => void;
}

export const Chapter1Promise: React.FC<Chapter1PromiseProps> = ({
  onOpenBuilder,
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
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
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

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBuilder}
              className="px-8 py-4 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
            >
              <span>Build My Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

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

        {/* Right Column: Close-up Skincare Visual + Teaser Mockup */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900 group">
            {/* Real Editorial Beauty Photography */}
            <Image
              src="/images/hero-skin-luminous.jpg"
              alt="Luminous healthy skin texture with hydrating serum droplet"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-90 contrast-105"
            />

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-transparent opacity-80" />

            {/* Teaser Experience Card — Do NOT reveal full application */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B0B0E]/85 border border-white/15 backdrop-blur-xl shadow-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-violet-300 font-medium">
                  TODAY · DAY 12
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                  <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>8 Day Streak</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-base font-medium text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                    <span>Vitamin C Day</span>
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">Antioxidant & Radiance Focus</div>
                </div>

                <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Check className="w-3.5 h-3.5" />
                  <span>Morning Routine ✓</span>
                </div>
              </div>

              {/* Teaser Rhythm Dots */}
              <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-stone-400 border-t border-white/5">
                <span>Rhythm preview:</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" title="Niacinamide" />
                  <span className="w-2 h-2 rounded-full bg-amber-400 ring-2 ring-white/50" title="Today: Vitamin C" />
                  <span className="w-2 h-2 rounded-full bg-sky-400" title="Peptide" />
                  <span className="w-2 h-2 rounded-full border border-stone-500" title="Rest" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Indicator at bottom */}
      <div className="max-w-6xl mx-auto w-full pt-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-stone-400 border-t border-white/10 z-10">
        <span>Chapter 01 · The Promise</span>
        <button
          onClick={onExplore}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Scroll to Chapter 02</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
