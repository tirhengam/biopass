"use client";

import React, { useState } from "react";
import { Sparkles, RefreshCw, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldCheck, Mail } from "lucide-react";

interface Chapter6TrackLearnAdaptProps {
  onOpenBuilder: () => void;
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

export const Chapter6TrackLearnAdapt: React.FC<Chapter6TrackLearnAdaptProps> = ({
  onOpenBuilder,
  onOpenContact,
  onScrollToTop,
}) => {
  const [checkInState, setCheckInState] = useState<"continue" | "adapt" | "next">("next");

  const checkInOptions = {
    continue: {
      title: "CONTINUE",
      sub: "Stay with the current phase.",
      detail: "Skin barrier is stabilizing well. Keep current gentle foundation rhythm for 7 more days before introducing concentrated actives.",
      calendarNote: "Calendar maintains 3 weekly recovery days.",
      badge: "Stabilizing",
      days: [
        { label: "M", dot: "bg-purple-500", name: "NIA" },
        { label: "T", dot: "border border-stone-500", name: "REST" },
        { label: "W", dot: "bg-sky-500", name: "PEP" },
        { label: "T", dot: "border border-stone-500", name: "REST" },
        { label: "F", dot: "bg-purple-500", name: "NIA" },
        { label: "S", dot: "border border-stone-500", name: "REST" },
        { label: "S", dot: "border border-stone-500", name: "REST" },
      ],
    },
    adapt: {
      title: "ADAPT",
      sub: "Something needs to change.",
      detail: "Mild seasonal dryness reported. BioPass automatically adds a ceramide barrier buffer and postpones direct acids by 5 days.",
      calendarNote: "Calendar recalculated: Extra barrier recovery day inserted.",
      badge: "Adapting",
      days: [
        { label: "M", dot: "border border-stone-500", name: "REST" },
        { label: "T", dot: "border border-stone-500", name: "REST" },
        { label: "W", dot: "bg-sky-500", name: "PEP" },
        { label: "T", dot: "border border-stone-500", name: "REST" },
        { label: "F", dot: "border border-stone-500", name: "REST" },
        { label: "S", dot: "bg-purple-500", name: "NIA" },
        { label: "S", dot: "border border-stone-500", name: "REST" },
      ],
    },
    next: {
      title: "NEXT STEP",
      sub: "You're ready to move forward.",
      detail: "Barrier resilience confirmed at Day 14 milestone. BioPass unlocks Phase 2: Target Radiance with Vitamin C rotation.",
      calendarNote: "Calendar unlocked: Target Active Phase activated.",
      badge: "Advancing",
      days: [
        { label: "M", dot: "bg-purple-500", name: "NIA" },
        { label: "T", dot: "bg-amber-500 ring-2 ring-amber-400", name: "VIT C" },
        { label: "W", dot: "bg-sky-500", name: "PEP" },
        { label: "T", dot: "border border-stone-500", name: "REST" },
        { label: "F", dot: "bg-purple-500", name: "NIA" },
        { label: "S", dot: "bg-amber-500", name: "VIT C" },
        { label: "S", dot: "border border-stone-500", name: "REST" },
      ],
    },
  };

  const activeOption = checkInOptions[checkInState];

  return (
    <section
      id="section-adapt"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#0B0B0E] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-20 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-violet-300 text-xs font-mono uppercase tracking-[0.16em]">
            <RefreshCw className="w-3.5 h-3.5 text-violet-400" />
            <span>Chapter 06 · Track, Learn & Adapt</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]">
            Your plan evolves <br className="hidden sm:inline" />
            <span className="font-normal italic text-stone-200">with you.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-2xl">
            Your beauty journey isn&apos;t static. At important milestones, BioPass checks in, helps you review what happened, and adapts what comes next.
          </p>
        </div>

        {/* VISUAL CHECK-IN MOMENT */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl space-y-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 font-bold block">
                Milestone Evaluation · Day 14
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white mt-1">
                HOW IS YOUR JOURNEY GOING?
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 w-fit">
              Select an outcome to see the calendar adapt
            </span>
          </div>

          {/* 3 Outcome Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["continue", "adapt", "next"] as const).map((key) => {
              const opt = checkInOptions[key];
              const isSelected = checkInState === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCheckInState(key)}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "bg-violet-950/40 border-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold tracking-wider text-violet-300">
                      {opt.title}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-violet-400" />}
                  </div>
                  <div className="text-sm font-medium text-white">{opt.sub}</div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Adaptation Preview */}
          <div className="p-6 rounded-2xl bg-[#0F0E13] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-stone-300">
                Algorithm Recalibration: <strong className="text-white">{activeOption.detail}</strong>
              </span>
              <span className="text-[11px] font-mono text-violet-400">
                {activeOption.calendarNote}
              </span>
            </div>

            {/* Recalculated Calendar Preview */}
            <div className="grid grid-cols-7 gap-2 text-center pt-2">
              {activeOption.days.map((d, i) => (
                <div key={i} className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                  <span className="text-[10px] text-stone-500 font-mono">{d.label}</span>
                  <div className={`w-3.5 h-3.5 rounded-full my-1.5 ${d.dot}`} />
                  <span className="text-[9px] font-mono text-stone-300">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTINUOUS FEEDBACK LOOP */}
        <div className="space-y-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
            The BioPass Continuous Cycle
          </span>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs text-stone-300">
            <span className="text-white font-semibold">PLAN</span>
            <span className="text-violet-400">➔</span>
            <span>FOLLOW</span>
            <span className="text-violet-400">➔</span>
            <span>TRACK</span>
            <span className="text-violet-400">➔</span>
            <span>CHECK-IN</span>
            <span className="text-violet-400">➔</span>
            <span>ADAPT</span>
            <span className="text-violet-400">➔</span>
            <span className="text-violet-300 font-semibold">NEXT PHASE</span>
          </div>
        </div>

        {/* SCIENCE BEHIND THE PLAN. SIMPLICITY IN YOUR DAY. (TWO LEVELS) */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="max-w-2xl space-y-3">
            <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Science behind the plan. <br />
              <span className="italic text-stone-300">Simplicity in your day.</span>
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              BioPass connects personal goals, routines, product information, ingredients, and scientific knowledge — while keeping the everyday experience calm and simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Level 1: Simple */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-semibold block">
                Level 01 · Everyday Simplicity
              </span>
              <h4 className="text-2xl font-light text-white">
                &ldquo;What should I do today?&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                No guessing. No multi-serum confusion. Glance at your calendar, perform your 4-minute morning steps, and carry on with your life knowing your skin is on track.
              </p>
            </div>

            {/* Level 2: Deeper */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold block">
                Level 02 · Scientific Rigor
              </span>
              <h4 className="text-2xl font-light text-white">
                &ldquo;Why this ingredient? Why now?&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                Tap any product or active day to inspect formulation biology, pH compatibility, synergy citations, and dermatological evidence behind your roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* FINAL CTA AREA */}
        <div className="pt-16 sm:pt-24 border-t border-white/10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-stone-300 text-xs font-mono uppercase tracking-[0.2em]">
            <span>BIOPASS ROADMAP INTELLIGENCE</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
              Your beauty goal is a journey. <br />
              <span className="italic font-normal text-stone-200">Give it a roadmap.</span>
            </h2>

            {/* Supporting 5-point sequence */}
            <p className="text-sm sm:text-base text-stone-400 font-light max-w-xl mx-auto leading-relaxed pt-2">
              Understand your needs. Define your goals. Build your routine. Follow your plan. Adapt along the way.
            </p>

            <div className="text-base sm:text-lg text-violet-300 font-mono italic pt-2">
              &ldquo;Let&apos;s build your new journey.&rdquo;
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenBuilder}
              className="px-9 py-4 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] flex items-center gap-3 group"
            >
              <span>Start My Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToTop}
              className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-white/[0.05] hover:border-white/40 transition-colors"
            >
              Explore BioPass
            </button>
          </div>
        </div>

        {/* MINIMAL EDITORIAL FOOTER */}
        <footer className="pt-16 pb-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold tracking-widest text-stone-300 uppercase">
              BIOPASS
            </div>
            <div className="text-[11px] text-stone-400">
              Personal Beauty Intelligence · Where Science Meets Care
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-stone-400">
            <span>Skincare</span>
            <span>·</span>
            <span>Hair Care</span>
            <span>·</span>
            <span>Personal Care</span>
            <span>·</span>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors underline underline-offset-4 text-violet-400"
            >
              Contact
            </button>
          </div>

          <div className="text-[11px] text-stone-500">
            © 2026 BioPass. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};
