"use client";

import React from "react";
import Image from "next/image";
import { Compass, Flame, ArrowRight, Sparkles, Heart, Droplets, Shield } from "lucide-react";

interface Chapter2StartWithYouProps {
  onContinue: () => void;
}

export const Chapter2StartWithYou: React.FC<Chapter2StartWithYouProps> = ({
  onContinue,
}) => {
  return (
    <section
      id="section-start-with-you"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FF5C8A] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Soft Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-16 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-mono uppercase tracking-[0.16em]">
            <Compass className="w-3.5 h-3.5 text-yellow-300" />
            <span>Chapter 02 · Start With You</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
            Don&apos;t start with another product. <br />
            <span className="font-normal italic text-yellow-200">Start with you.</span>
          </h2>

          <p className="hidden sm:block text-lg sm:text-2xl text-white/95 font-medium italic">
            Want a routine but don&apos;t know where to start?
          </p>
        </div>

        {/* MOBILE VIEW (lg:hidden) — Vertically Stacked 3 Steps: DISCOVERY ↓ PHASES & PLANS ↓ DAILY ACTION */}
        <div className="lg:hidden flex flex-col space-y-4 pt-2">
          {/* STEP 1: DISCOVERY */}
          <div className="relative rounded-3xl p-5 bg-[#FF477E]/85 border border-white/25 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold">
                01 · DISCOVERY
              </span>
              <span className="text-[10px] font-mono text-white/80">Skin Needs</span>
            </div>

            {/* Visual: Blonde Avatar Pointing to Observations */}
            <div className="relative w-full h-44 rounded-2xl bg-white/10 border border-white/15 p-2 flex items-end justify-between overflow-hidden">
              <div className="relative w-28 h-44 -mb-1 drop-shadow-xl shrink-0">
                <Image
                  src="/characters/character-pointing-blonde.png"
                  alt="BioPass user discovering skin needs"
                  fill
                  sizes="120px"
                  className="object-contain object-bottom"
                />
              </div>

              <div className="flex flex-col items-end gap-1.5 pb-3 pr-2 z-10">
                <div className="px-2.5 py-1 rounded-full bg-white/25 border border-white/40 backdrop-blur-md text-white font-mono text-[10px] font-bold shadow flex items-center gap-1.5">
                  <span>💧</span>
                  <span>HYDRATION</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-yellow-300 text-stone-950 font-mono text-[10px] font-extrabold shadow flex items-center gap-1.5 mr-1">
                  <span className="w-1.5 h-1.5 rounded-full border-2 border-stone-950" />
                  <span>PORES</span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-white/25 border border-white/40 backdrop-blur-md text-white font-mono text-[10px] font-bold shadow flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
                  <span>BREAKOUTS</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white">
              Find out your skin needs
            </h3>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center justify-center py-0.5 text-yellow-200">
            <span className="text-base font-mono font-bold tracking-wider">↓</span>
          </div>

          {/* STEP 2: PHASES & PLANS */}
          <div className="relative rounded-3xl p-5 bg-[#FF477E]/85 border border-white/25 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold">
                02 · PHASES &amp; PLANS
              </span>
              <span className="text-[10px] font-mono text-white/80">Structure</span>
            </div>

            {/* Visual: Organic Path */}
            <div className="relative w-full rounded-2xl bg-white/10 border border-white/15 p-3 py-5">
              <div className="relative flex items-center justify-between px-2">
                <div className="absolute left-4 right-4 top-3 h-1 bg-white/30 rounded-full" />
                <div className="absolute left-4 w-3/5 top-3 h-1 bg-yellow-300 rounded-full shadow" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 text-stone-950 flex items-center justify-center text-[9px] font-extrabold shadow">
                    ✓
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white mt-1.5">START</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-yellow-300 text-stone-950 flex items-center justify-center text-[9px] font-extrabold shadow ring-2 ring-white/30">
                    01
                  </div>
                  <span className="text-[9px] font-mono font-bold text-yellow-200 mt-1.5">PHASE 1</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[9px] font-extrabold shadow ring-2 ring-white">
                    ◆
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white mt-1.5">CHECK-IN</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 border border-white/60 text-white flex items-center justify-center text-[9px] font-bold">
                    02
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white/70 mt-1.5">NEXT</span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white">
              Phases, milestones &amp; check-ins
            </h3>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center justify-center py-0.5 text-yellow-200">
            <span className="text-base font-mono font-bold tracking-wider">↓</span>
          </div>

          {/* STEP 3: DAILY ACTION */}
          <div className="relative rounded-3xl p-5 bg-[#FF477E]/85 border border-white/25 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold">
                03 · DAILY ACTION
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-300 text-stone-950 text-[10px] font-mono font-extrabold shadow-sm">
                <Flame className="w-3 h-3 text-orange-600 fill-orange-500" />
                <span>🔥 9 DAY STREAK</span>
              </div>
            </div>

            {/* Visual: 7-day dot rhythm */}
            <div className="relative w-full rounded-2xl bg-white/10 border border-white/15 p-3">
              <div className="grid grid-cols-7 gap-1 text-center">
                {[
                  { d: "M", dot: "bg-purple-400", act: "NIA" },
                  { d: "T", dot: "bg-amber-300 ring-2 ring-white", act: "VIT C" },
                  { d: "W", dot: "bg-sky-300", act: "PEP" },
                  { d: "T", dot: "border-2 border-white/80 bg-transparent", act: "REST" },
                  { d: "F", dot: "bg-purple-400", act: "NIA" },
                  { d: "S", dot: "bg-amber-300", act: "VIT C" },
                  { d: "S", dot: "border-2 border-white/80 bg-transparent", act: "REST" },
                ].map((item, idx) => (
                  <div key={idx} className="p-1 rounded-lg bg-black/20 border border-white/10 flex flex-col items-center">
                    <span className="text-[8px] font-mono text-white/70">{item.d}</span>
                    <div className={`w-2.5 h-2.5 rounded-full my-1 ${item.dot}`} />
                    <span className="text-[7px] font-mono text-white font-bold">{item.act}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white">
              Daily consistency &amp; rhythm
            </h3>
          </div>
        </div>

        {/* DESKTOP VIEW (hidden lg:grid) — Three Columns */}
        <div className="hidden lg:grid grid-cols-3 gap-8 sm:gap-10 pt-4">
          {/* COLUMN 1: LET'S FIND OUT YOUR SKIN NEEDS */}
          <div className="relative rounded-3xl p-7 bg-[#FF477E]/80 border border-white/25 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all group">
            {/* Visual: Uploaded Blonde 3D Character Pointing to Skin Observations */}
            <div className="relative w-full aspect-[4/3] flex items-end justify-between overflow-visible">
              {/* Soft background aura */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none" />

              {/* Uploaded Blonde Character (pointing upward) */}
              <div className="relative w-40 sm:w-44 h-64 -mt-10 -ml-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl shrink-0 z-10">
                <Image
                  src="/characters/character-pointing-blonde.png"
                  alt="BioPass user discovering skin needs"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Pointing Target: Cluster of Visual Skin Observations */}
              <div className="flex flex-col items-end gap-2 pb-6 pr-1 z-20">
                <div className="px-3 py-1.5 rounded-full bg-white/25 border border-white/40 backdrop-blur-md text-white font-mono text-[11px] font-bold shadow-lg flex items-center gap-1.5 hover:bg-white/30 transition-all">
                  <span>💧</span>
                  <span>HYDRATION</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-yellow-300 text-stone-950 font-mono text-[11px] font-extrabold shadow-lg flex items-center gap-1.5 mr-2 hover:scale-105 transition-all">
                  <span className="w-2 h-2 rounded-full border-2 border-stone-950" />
                  <span>PORES</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/25 border border-white/40 backdrop-blur-md text-white font-mono text-[11px] font-bold shadow-lg flex items-center gap-1.5 hover:bg-white/30 transition-all">
                  <span className="w-2 h-2 rounded-full bg-pink-300" />
                  <span>BREAKOUTS</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold block">
                01 · Discovery
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Let&apos;s find out your skin needs
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-light">
                Understand your skin, concerns and current routine before deciding what comes next.
              </p>
            </div>
          </div>

          {/* COLUMN 2: PHASES & PLANS */}
          <div className="relative rounded-3xl p-7 bg-[#FF477E]/80 border border-white/25 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all group">
            {/* Visual: Organic Playful Journey Path */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/10 border border-white/15 p-4 flex flex-col justify-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 mb-6 text-center font-bold">
                Organic Beauty Path
              </div>

              {/* ●━━━━━━●━━━━━━●━━━━━━● */}
              <div className="relative flex items-center justify-between px-2">
                {/* Playful Organic Line */}
                <div className="absolute left-6 right-6 top-3 h-1 bg-white/30 rounded-full" />
                <div className="absolute left-6 w-3/5 top-3 h-1 bg-yellow-300 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]" />

                {/* Node 1: START */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-yellow-300 text-stone-950 flex items-center justify-center text-[10px] font-extrabold shadow-md">
                    ✓
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white mt-2">START</span>
                  <span className="text-[9px] text-white/70 font-mono">Needs</span>
                </div>

                {/* Node 2: PHASE 1 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-yellow-300 text-stone-950 flex items-center justify-center text-[10px] font-extrabold shadow-md ring-4 ring-white/30">
                    01
                  </div>
                  <span className="text-[10px] font-mono font-bold text-yellow-200 mt-2">PHASE 1</span>
                  <span className="text-[9px] text-white/70 font-mono">Barrier</span>
                </div>

                {/* Node 3: CHECK-IN */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-extrabold shadow-md ring-2 ring-white">
                    ◆
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white mt-2">CHECK-IN</span>
                  <span className="text-[9px] text-white/70 font-mono">Day 14</span>
                </div>

                {/* Node 4: NEXT */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-white/20 border-2 border-white/60 text-white flex items-center justify-center text-[10px] font-bold">
                    02
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/70 mt-2">NEXT</span>
                  <span className="text-[9px] text-white/60 font-mono">Target</span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-center text-white/80 mt-6 pt-3 border-t border-white/10 italic">
                &ldquo;I know where I am now and what comes next.&rdquo;
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold block">
                02 · Structure
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Phases &amp; Plans
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-light">
                Turn your goals into a journey with clear phases, milestones and check-ins.
              </p>
            </div>
          </div>

          {/* COLUMN 3: STREAKS & OVERVIEW */}
          <div className="relative rounded-3xl p-7 bg-[#FF477E]/80 border border-white/25 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all group">
            {/* Visual: Conceptual Calendar with colored markers and streak */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/10 border border-white/15 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-white/15">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 font-bold">
                  Daily Rhythm
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-300 text-stone-950 text-xs font-mono font-extrabold shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
                  <span>🔥 9 DAY STREAK</span>
                </div>
              </div>

              {/* 7-day visual dots */}
              <div className="grid grid-cols-7 gap-1.5 text-center my-auto py-2">
                {[
                  { d: "M", dot: "bg-purple-400", act: "NIA" },
                  { d: "T", dot: "bg-amber-300 ring-2 ring-white", act: "VIT C" },
                  { d: "W", dot: "bg-sky-300", act: "PEP" },
                  { d: "T", dot: "border-2 border-white/80 bg-transparent", act: "REST" },
                  { d: "F", dot: "bg-purple-400", act: "NIA" },
                  { d: "S", dot: "bg-amber-300", act: "VIT C" },
                  { d: "S", dot: "border-2 border-white/80 bg-transparent", act: "REST" },
                ].map((item, idx) => (
                  <div key={idx} className="p-1 rounded-xl bg-black/20 border border-white/10 flex flex-col items-center">
                    <span className="text-[9px] font-mono text-white/70">{item.d}</span>
                    <div className={`w-3 h-3 rounded-full my-1 ${item.dot}`} />
                    <span className="text-[8px] font-mono text-white font-bold">{item.act}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-between text-[9px] font-mono text-white/80 pt-2 border-t border-white/15">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400" /> Nia</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-300" /> Vit C</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-300" /> Pep</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full border border-white" /> Rest</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-200 font-bold block">
                03 · Daily Action
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Streaks &amp; Overview
              </h3>
              <p className="text-sm text-white/90 leading-relaxed font-light">
                Know what to do today, stay consistent and see your journey at a glance.
              </p>
            </div>
          </div>
        </div>

        {/* Continuation Button */}
        <div className="text-center pt-2">
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-yellow-200 transition-colors shadow-lg group"
          >
            <span>Explore Your Daily Beauty Calendar</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
