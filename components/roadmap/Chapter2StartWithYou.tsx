"use client";

import React, { useState } from "react";
import { MessageSquare, Sparkles, Compass, Target, MapPin, ArrowDown, Check } from "lucide-react";

interface Chapter2StartWithYouProps {
  onOpenBuilder: (goal?: string) => void;
  onContinue: () => void;
}

export const Chapter2StartWithYou: React.FC<Chapter2StartWithYouProps> = ({
  onOpenBuilder,
  onContinue,
}) => {
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);

  const goalPrompts = [
    {
      user: "I want smoother-looking skin, better hydration and less visible pores.",
      bot: "Let's turn that into your personal beauty roadmap: Phase 1 prioritizes barrier hydration, followed by targeted niacinamide rotation.",
      tag: "Texture & Pores",
    },
    {
      user: "I want to fade dark spots and get morning glow without irritating my skin.",
      bot: "We'll introduce stabilized Vitamin C with built-in recovery days to protect your barrier while targeting cellular radiance.",
      tag: "Radiance & Tone",
    },
    {
      user: "My skin feels tight after washing and reacts to strong active products.",
      bot: "We'll start with our Calming Foundation protocol: restorative ceramides and zero direct acids for the first 14 days.",
      tag: "Barrier Calm",
    },
  ];

  return (
    <section
      id="section-start-with-you"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FAF6F0] text-stone-900 transition-colors duration-700"
    >
      {/* Top Gradient Transition from Section 1 */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0B0B0E] via-[#0B0B0E]/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-16 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 text-stone-700 text-xs font-mono uppercase tracking-[0.16em]">
            <Compass className="w-3.5 h-3.5 text-stone-600" />
            <span>Chapter 02 · Start With You</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-[1.12]">
            Don&apos;t start with another product. <br className="hidden sm:inline" />
            <span className="font-normal italic text-stone-800">Start with you.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            Before recommending another serum, BioPass helps you understand your starting point and where you want to go.
          </p>
        </div>

        {/* Visual Three-Step Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Step 01: Understand */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-600 font-semibold">
                  01 — UNDERSTAND
                </span>
                <span className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 text-xs font-mono flex items-center justify-center font-bold">
                  01
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight">
                Understand your starting point.
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Explore your skin characteristics, current routine, preferences, and concerns. BioPass guides you through safe observations and simple daily experiments instead of relying only on a photo.
              </p>
            </div>

            {/* Minimal Observation Card */}
            <div className="p-4 rounded-2xl bg-[#F6F2EC] border border-stone-900/5 space-y-2.5 text-xs font-mono text-stone-700">
              <div className="flex items-center justify-between pb-1 border-b border-stone-900/10 text-[11px] text-stone-600 uppercase tracking-wider">
                <span>Guided Observation</span>
                <span className="text-emerald-700 font-semibold">Safe Method</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Barrier Comfort:</span>
                <strong className="text-stone-900">Non-tight at 30 min</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Hydration Retention:</span>
                <strong className="text-stone-900">Moderate</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Active Sensitivity:</span>
                <strong className="text-stone-900">Low/Moderate</strong>
              </div>
            </div>
          </div>

          {/* Step 02: Define Your Goals (Minimal Chatbot Interaction) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-violet-700 font-semibold">
                  02 — DEFINE YOUR GOALS
                </span>
                <span className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 text-xs font-mono flex items-center justify-center font-bold">
                  02
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight">
                Define what you want to achieve.
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Express your personal goals in your own words. BioPass translates everyday wishes into biologically sound milestones.
              </p>
            </div>

            {/* Beautiful Minimal Chatbot Mockup */}
            <div className="p-4 rounded-2xl bg-stone-950 text-white space-y-3 shadow-md">
              {/* User Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-stone-800 text-[9px] font-mono flex items-center justify-center text-stone-300 shrink-0 mt-0.5">
                  YOU
                </div>
                <div className="bg-stone-800/90 text-stone-100 text-xs p-3 rounded-2xl rounded-tl-sm leading-relaxed">
                  &ldquo;{goalPrompts[activeGoalIndex].user}&rdquo;
                </div>
              </div>

              {/* BioPass Bubble */}
              <div className="flex items-start gap-2.5 pl-2">
                <div className="w-5 h-5 rounded-full bg-violet-600 text-[9px] font-mono flex items-center justify-center text-white shrink-0 mt-0.5">
                  BP
                </div>
                <div className="bg-violet-950/70 border border-violet-500/30 text-violet-200 text-xs p-3 rounded-2xl rounded-tl-sm leading-relaxed">
                  &ldquo;{goalPrompts[activeGoalIndex].bot}&rdquo;
                </div>
              </div>

              {/* Interactive Prompt Switcher */}
              <div className="flex gap-1.5 pt-2 border-t border-white/10 overflow-x-auto">
                {goalPrompts.map((g, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveGoalIndex(idx)}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono whitespace-nowrap transition-colors ${
                      activeGoalIndex === idx
                        ? "bg-violet-600 text-white"
                        : "bg-white/10 text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    {g.tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 03: Build The Plan */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-600 font-semibold">
                  03 — BUILD THE PLAN
                </span>
                <span className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 text-xs font-mono flex items-center justify-center font-bold">
                  03
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight">
                Build your personal roadmap.
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed font-light">
                BioPass turns those goals into a structured journey with distinct phases, daily routines, ingredient strategies, and scheduled check-ins.
              </p>
            </div>

            {/* Plan Preview Component */}
            <div className="p-4 rounded-2xl bg-[#F6F2EC] border border-stone-900/5 space-y-2.5 text-xs">
              <div className="flex items-center justify-between font-mono text-[11px] text-stone-600 uppercase pb-1 border-b border-stone-900/10">
                <span>Structured Journey</span>
                <span>Phased Care</span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Phases: Foundation ➔ Target ➔ Advance</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Daily routine & active ingredient rotation</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Scheduled milestones & check-ins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Transition Visual: YOU ARE HERE ↓ YOUR GOAL */}
        <div className="pt-8 border-t border-stone-900/10 flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-stone-900/10 shadow-sm font-mono text-xs uppercase tracking-widest text-stone-800">
            <span className="font-semibold text-stone-950 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-violet-600" /> YOU ARE HERE
            </span>
            <span className="text-stone-400">➔</span>
            <span className="text-stone-600">PERSONALIZED ROADMAP</span>
            <span className="text-stone-400">➔</span>
            <span className="font-semibold text-stone-950 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-600" /> YOUR GOAL
            </span>
          </div>

          <button
            onClick={onContinue}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors pt-2 group"
          >
            <span>Explore The Signature Roadmap In Chapter 03</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
