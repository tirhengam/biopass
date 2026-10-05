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
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-16 px-6 sm:px-12 bg-[#1B0E33] text-white overflow-hidden transition-none md:transition-colors md:duration-700"
    >
      {/* Background Soft Glows — Lightweight static gradient on mobile, Gaussian blur on desktop */}
      <div className="hidden md:block absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="md:hidden absolute top-1/4 left-1/4 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(147,51,234,0.18)_0%,transparent_70%)]" />
      <div className="md:hidden absolute bottom-10 right-1/4 w-60 h-60 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_70%)]" />

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

          {/* Supporting Text - Desktop */}
          <div className="hidden md:block space-y-3 text-stone-200 text-base sm:text-lg font-light leading-relaxed max-w-xl">
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

          {/* Supporting Text - Mobile Only */}
          <p className="md:hidden text-purple-200/90 text-sm font-light leading-relaxed">
            BioPass turns your goals into a personalized beauty roadmap.
          </p>

          {/* CTA Area — Strictly "TRY THE DEMO" */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={BIOPASS_APP_URL}
              className="px-8 py-4 rounded-full bg-yellow-400 text-stone-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] flex items-center justify-center gap-3 group"
            >
              <span>TRY THE DEMO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={onExplore}
              className="hidden md:flex px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden md:block pt-2 text-xs font-mono tracking-wider text-purple-300/70">
            Skincare first. Hair care and more coming next.
          </div>
        </div>

        {/* Right Column: Personal BioPass Dashboard + 3D Character */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* SIMPLIFIED MOBILE DASHBOARD (md:hidden) — Main Visual on Mobile */}
          <div className="md:hidden w-full max-w-md mx-auto rounded-3xl p-5 bg-[#2A184D]/95 border border-white/20 shadow-2xl space-y-4">
            {/* Header: MY BIOPASS & LEVEL 04 */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-300 font-bold">
                MY BIOPASS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/30 text-[10px] font-mono text-purple-200 font-bold tracking-wider">
                LEVEL 04
              </span>
            </div>

            {/* Current Goals */}
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-purple-300/70 font-semibold block">
                CURRENT GOALS
              </span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  LARGE PORES
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  ACNE
                </span>
              </div>
            </div>

            {/* Today's Routine / Progress */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-yellow-300 uppercase tracking-wide">
                  TODAY&apos;S ROUTINE
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  6 / 7 DONE
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-300 via-emerald-400 to-emerald-500 rounded-full" style={{ width: "85%" }} />
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-purple-200/80">
                  <span className="text-amber-300">☀ AM: 4/4 Complete</span>
                  <span className="text-indigo-300">☾ PM: 2/3 Complete</span>
                </div>
              </div>
            </div>

            {/* Streak & Small Calendar */}
            <div className="grid grid-cols-5 gap-2 pt-0.5">
              <div className="col-span-2 p-3 rounded-2xl bg-amber-400/15 border border-amber-400/35 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-400/25 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white leading-none font-mono">
                    8
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-amber-200 font-bold mt-0.5">
                    STREAK
                  </div>
                </div>
              </div>

              <div className="col-span-3 p-3 rounded-2xl bg-black/25 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-purple-300/80 font-bold mb-1">
                  <span>WEEK 02</span>
                  <span className="text-yellow-300">TODAY</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {[
                    { d: "M", color: "bg-purple-400" },
                    { d: "T", color: "bg-amber-400" },
                    { d: "W", color: "bg-sky-400" },
                    { d: "T", color: "border border-white/60 bg-transparent" },
                    { d: "F", color: "bg-yellow-300 ring-2 ring-white", today: true },
                    { d: "S", color: "bg-white/20" },
                    { d: "S", color: "bg-white/20" },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex flex-col items-center ${item.today ? "font-bold text-yellow-300" : "text-purple-200/70"}`}>
                      <span className="text-[8px] font-mono">{item.d}</span>
                      <div className={`w-2 h-2 rounded-full mt-1 ${item.color}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP DASHBOARD (hidden md:block) */}
          <div className="hidden md:block relative w-full max-w-lg rounded-3xl p-6 sm:p-7 bg-[#2A184D]/90 border border-white/20 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] space-y-5 z-10">
            {/* Header: MY BIOPASS & LEVEL 04 */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-300/90 font-bold">
                MY BIOPASS
              </span>
              <div className="px-2.5 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/30 text-[10px] font-mono text-purple-200 font-bold tracking-wider">
                LEVEL 04
              </div>
            </div>

            {/* Current Goals: Compact Visual Chips */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300/70 block font-semibold">
                MY CURRENT GOALS
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  LARGE PORES
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  ACNE
                </span>
              </div>
            </div>

            {/* Middle: Morning & Evening Visual Routines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* MORNING ROUTINE */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 uppercase tracking-wide">
                    <Sun className="w-3.5 h-3.5 text-amber-300 fill-amber-300/40" />
                    <span>MORNING</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    4 / 4 COMPLETE
                  </span>
                </div>

                {/* Visual Silhouettes with checkmarks */}
                <div className="grid grid-cols-4 gap-1.5">
                  {/* Step 1: Cleanser Bottle */}
                  <div className="relative aspect-square rounded-xl bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-200 group/step">
                    <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="9" width="10" height="13" rx="2" />
                      <path d="M10 9V5a2 2 0 0 1 4 0v4" />
                      <line x1="8" y1="5" x2="16" y2="5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>

                  {/* Step 2: Serum Dropper */}
                  <div className="relative aspect-square rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-200 group/step">
                    <svg className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m14 4 6 6-9 9H5v-6l9-9Z" />
                      <path d="m18 8 2-2" />
                      <circle cx="5" cy="19" r="1.5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>

                  {/* Step 3: Moisture Jar */}
                  <div className="relative aspect-square rounded-xl bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-200 group/step">
                    <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="10" width="16" height="11" rx="3" />
                      <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>

                  {/* Step 4: SPF Fluid */}
                  <div className="relative aspect-square rounded-xl bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-200 group/step">
                    <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>
                </div>
              </div>

              {/* EVENING ROUTINE */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-300 uppercase tracking-wide">
                    <Moon className="w-3.5 h-3.5 text-indigo-300 fill-indigo-300/40" />
                    <span>EVENING</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-400/30">
                    2 / 3 COMPLETE
                  </span>
                </div>

                {/* Visual Silhouettes: 2 Done, 1 Upcoming */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Step 1: Cleanser */}
                  <div className="relative aspect-square rounded-xl bg-purple-900/60 border border-purple-400/30 flex items-center justify-center text-purple-200">
                    <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="9" width="10" height="13" rx="2" />
                      <path d="M10 9V5a2 2 0 0 1 4 0v4" />
                      <line x1="8" y1="5" x2="16" y2="5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>

                  {/* Step 2: Night Active Serum */}
                  <div className="relative aspect-square rounded-xl bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-center text-indigo-200">
                    <svg className="w-4 h-4 text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m14 4 6 6-9 9H5v-6l9-9Z" />
                      <path d="m18 8 2-2" />
                      <circle cx="5" cy="19" r="1.5" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center text-[8px] font-extrabold shadow">
                      ✓
                    </span>
                  </div>

                  {/* Step 3: Night Barrier Cream (Upcoming Tonight) */}
                  <div className="relative aspect-square rounded-xl bg-white/5 border border-dashed border-white/30 flex items-center justify-center text-purple-300/80">
                    <svg className="w-4 h-4 text-purple-300/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="10" width="16" height="11" rx="3" />
                      <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border border-purple-300/50 bg-[#2A184D] text-purple-300 flex items-center justify-center text-[9px] font-extrabold">
                      ○
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center / Lower Middle: Personal Beauty Calendar */}
            <div className="p-3.5 rounded-2xl bg-black/25 border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-purple-300/80 font-bold">
                <span>PERSONAL CALENDAR</span>
                <span className="text-yellow-300">WEEK 02</span>
              </div>

              {/* 7 Days Row: M T W T F S S */}
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {/* Mon */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-200">M</span>
                  <span className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" title="Completed" />
                </div>

                {/* Tue */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-200">T</span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" title="Completed" />
                </div>

                {/* Wed */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-200">W</span>
                  <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" title="Completed" />
                </div>

                {/* Thu (Rest) */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-200">T</span>
                  <span className="w-3 h-3 rounded-full border border-white/80 bg-white/20" title="Recovery" />
                </div>

                {/* Fri (Today!) */}
                <div className="flex flex-col items-center gap-1.5 py-1 rounded-xl bg-yellow-400/20 border border-yellow-300/50">
                  <span className="text-[10px] font-mono font-extrabold text-yellow-300">F</span>
                  <span className="w-3 h-3 rounded-full bg-yellow-300 ring-2 ring-white shadow-[0_0_10px_#FDE047]" title="Today" />
                </div>

                {/* Sat (Upcoming) */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-300/60">S</span>
                  <span className="w-1.5 h-1.5 my-0.5 rounded-full bg-white/30" title="Upcoming" />
                </div>

                {/* Sun (Upcoming) */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                  <span className="text-[10px] font-mono font-bold text-purple-300/60">S</span>
                  <span className="w-1.5 h-1.5 my-0.5 rounded-full bg-white/30" title="Upcoming" />
                </div>
              </div>
            </div>

            {/* Bottom Row: Streak & Points */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {/* STREAK */}
              <div className="p-3.5 rounded-2xl bg-amber-400/15 border border-amber-400/35 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/25 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                  <Flame className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none font-mono">
                    8
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-200/90 font-bold mt-1">
                    DAY STREAK
                  </div>
                </div>
              </div>

              {/* POINTS */}
              <div className="p-3.5 rounded-2xl bg-purple-500/20 border border-purple-400/35 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-yellow-300 shrink-0">
                  <svg className="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none font-mono tracking-tight">
                    1,240
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-purple-200/90 font-bold mt-1">
                    POINTS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UPLOADED 3D CHARACTER (Delighted / Loving their routine) — Desktop Only (zero mobile download) */}
          <div className="hidden md:block absolute -top-12 -right-8 w-44 lg:w-52 aspect-[1/1] z-20 pointer-events-none drop-shadow-2xl">
            <picture>
              <source media="(max-width: 767px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              <source media="(min-width: 768px)" srcSet="/characters/character-heart-eyes.webp" />
              <img
                src="/characters/character-heart-eyes.webp"
                alt="Delighted BioPass user loving their personalized beauty roadmap"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </picture>
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
