"use client";

import React from "react";
import Image from "next/image";
import { Compass, Flame, ArrowRight, CheckCircle2, Calendar as CalendarIcon, Sparkles } from "lucide-react";

interface Chapter2StartWithYouProps {
  onContinue: () => void;
}

export const Chapter2StartWithYou: React.FC<Chapter2StartWithYouProps> = ({
  onContinue,
}) => {
  return (
    <section
      id="section-start-with-you"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FAF6F0] text-stone-900 transition-colors duration-700"
    >
      {/* Top Gradient Transition from Section 1 */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0B0B0E] via-[#0B0B0E]/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-14 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 text-stone-700 text-xs font-mono uppercase tracking-[0.16em]">
            <Compass className="w-3.5 h-3.5 text-stone-600" />
            <span>How It Works</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-[1.12]">
            Don&apos;t start with another product. <br />
            <span className="font-normal italic text-stone-800">Start with you.</span>
          </h2>

          <p className="text-lg sm:text-xl text-stone-600 font-light italic">
            Want a routine but don&apos;t know where to start?
          </p>
        </div>

        {/* THREE HIGHLY VISUAL COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* COLUMN 1: LET'S FIND OUT YOUR SKIN NEEDS */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            {/* Visual: Relevant beauty/lifestyle photo of a woman */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-stone-900/5 bg-stone-100">
              <Image
                src="/images/woman-mindful-skincare.jpg"
                alt="Mindful beauty and personal skin understanding"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-mono">
                <span className="bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                  Personal Skin Profile
                </span>
                <span className="text-stone-200">Starting Point</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-semibold block">
                Column 01
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-stone-950 tracking-tight">
                Let&apos;s find out your skin needs
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                BioPass first helps you better understand your skin, concerns, and needs before creating a routine.
              </p>
            </div>
          </div>

          {/* COLUMN 2: PHASES & PLANS */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            {/* Visual: Simplified plan of dots connected by lines */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-[#F8F5F0] border border-stone-900/5 p-5 flex flex-col justify-center relative overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-6 text-center">
                Visual Journey Path
              </div>

              {/* Dots connected by lines: ●───────●───────●───────● */}
              <div className="relative flex items-center justify-between px-2">
                {/* Connecting Line */}
                <div className="absolute left-6 right-6 top-3 h-[2px] bg-stone-300" />
                <div className="absolute left-6 w-1/2 top-3 h-[2px] bg-violet-600" />

                {/* Node 1: Start */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md">
                    ✓
                  </div>
                  <span className="text-[10px] font-mono font-bold text-stone-900 mt-2">START</span>
                  <span className="text-[9px] text-stone-500 font-mono">Profile</span>
                </div>

                {/* Node 2: Phase 1 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-violet-200">
                    01
                  </div>
                  <span className="text-[10px] font-mono font-bold text-violet-900 mt-2">PHASE 1</span>
                  <span className="text-[9px] text-stone-500 font-mono">Weeks 1-2</span>
                </div>

                {/* Node 3: Check-in */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                    ◆
                  </div>
                  <span className="text-[10px] font-mono font-bold text-stone-900 mt-2">CHECK-IN</span>
                  <span className="text-[9px] text-stone-500 font-mono">Day 14</span>
                </div>

                {/* Node 4: Phase 2 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-stone-300 text-stone-400 flex items-center justify-center text-[10px]">
                    02
                  </div>
                  <span className="text-[10px] font-mono font-bold text-stone-500 mt-2">PHASE 2</span>
                  <span className="text-[9px] text-stone-400 font-mono">Weeks 3-6</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-center text-stone-500 mt-6 pt-3 border-t border-stone-200">
                &ldquo;I know where I am now and what comes next.&rdquo;
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-700 font-semibold block">
                Column 02
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-stone-950 tracking-tight">
                Phases &amp; Plans
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Turn your goals into a structured beauty journey with different phases, milestones and check-ins.
              </p>
            </div>
          </div>

          {/* COLUMN 3: STREAKS & OVERVIEW */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300">
            {/* Visual: Beautiful Conceptual Calendar with colored markers and streak */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-[#F8F5F0] border border-stone-900/5 p-4 flex flex-col justify-between">
              {/* Header with Streak */}
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  Weekly Rhythm
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold border border-amber-300/60">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>9 Day Streak</span>
                </div>
              </div>

              {/* 7-Day Mini Markers */}
              <div className="grid grid-cols-7 gap-1.5 text-center my-auto py-2">
                {[
                  { d: "M", dot: "bg-purple-600", act: "NIA" },
                  { d: "T", dot: "bg-amber-500 ring-2 ring-stone-900/20", act: "VIT C" },
                  { d: "W", dot: "bg-sky-500", act: "PEP" },
                  { d: "T", dot: "border border-stone-400 bg-transparent", act: "REST" },
                  { d: "F", dot: "bg-purple-600", act: "NIA" },
                  { d: "S", dot: "bg-amber-500", act: "VIT C" },
                  { d: "S", dot: "border border-stone-400 bg-transparent", act: "REST" },
                ].map((item, idx) => (
                  <div key={idx} className="p-1 rounded-lg bg-white border border-stone-200 flex flex-col items-center">
                    <span className="text-[9px] font-mono text-stone-500">{item.d}</span>
                    <div className={`w-2.5 h-2.5 rounded-full my-1 ${item.dot}`} />
                    <span className="text-[8px] font-mono text-stone-800 font-bold">{item.act}</span>
                  </div>
                ))}
              </div>

              {/* Legend line */}
              <div className="flex items-center justify-between text-[9px] font-mono text-stone-500 pt-2 border-t border-stone-200">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-600" /> Nia</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Vit C</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Pep</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full border border-stone-400" /> Rest</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold block">
                Column 03
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-stone-950 tracking-tight">
                Streaks &amp; Overview
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                See your daily routines, stay consistent and keep an overview of your journey.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA / Continuation trigger */}
        <div className="text-center pt-4">
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors group"
          >
            <span>Explore The Daily Beauty Calendar Below</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
