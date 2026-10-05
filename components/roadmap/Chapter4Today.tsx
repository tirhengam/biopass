"use client";

import React from "react";
import { AlertCircle, ArrowRight, Check, Sparkles, SlidersHorizontal, Layers, CheckCircle2 } from "lucide-react";

export const Chapter4Today: React.FC = () => {
  const overloadFragments = [
    { label: "INGREDIENTS", icon: "🫧", pos: "top-2 left-4 sm:-top-4 sm:left-6" },
    { label: "10-STEP ROUTINES", icon: "⏰", pos: "top-14 right-2 sm:top-2 sm:right-8" },
    { label: "TRENDS", icon: "📈", pos: "top-32 -left-3 sm:top-28 sm:-left-6" },
    { label: "REVIEWS", icon: "⭐", pos: "bottom-24 -left-2 sm:bottom-28 sm:left-4" },
    { label: "PRODUCTS", icon: "🧴", pos: "bottom-8 -left-3 sm:bottom-4 sm:left-12" },
    { label: "SCIENCE PAPERS", icon: "🔬", pos: "top-28 right-0 sm:top-28 sm:-right-4" },
    { label: "SOCIAL MEDIA HYPE", icon: "📱", pos: "bottom-16 right-1 sm:bottom-12 sm:right-6" },
  ];

  const clarityPoints = [
    {
      title: "WHAT FITS ME",
      desc: "Targeted to your biological starting point and current barrier condition.",
      color: "bg-emerald-500",
    },
    {
      title: "WHAT WORKS TOGETHER",
      desc: "Active ingredient synergy mapped across days with zero chemical clashes.",
      color: "bg-purple-600",
    },
    {
      title: "WHAT TO DO NEXT",
      desc: "Clear everyday routine with scheduled check-ins and gradual phase evolution.",
      color: "bg-indigo-600",
    },
  ];

  return (
    <section
      id="section-today"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FDE047] text-[#1B0E33] transition-colors duration-700 overflow-hidden"
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-300/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12 my-auto z-10">
        {/* Section Header: THE PROBLEM */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B0E33]/10 border border-[#1B0E33]/20 text-[#1B0E33] text-xs font-mono uppercase tracking-[0.16em] font-bold">
            <AlertCircle className="w-3.5 h-3.5 text-[#1B0E33]" />
            <span>Chapter 04 · The Dilemma</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1B0E33] leading-[1.08]">
            Too much beauty information. <br />
            <span className="font-normal italic text-[#5C329C]">Too little clarity.</span>
          </h2>

          <div className="hidden sm:block text-lg sm:text-xl text-[#3A1E68] font-light leading-relaxed max-w-2xl space-y-1">
            <p className="font-medium text-[#1B0E33]">
              Products. Ingredients. Reviews. Trends. Studies.
            </p>
            <p className="italic">
              More information doesn&apos;t always make choosing easier.
            </p>
          </div>
        </div>

        {/* MOBILE VIEW (lg:hidden) — TOO MUCH INFORMATION ↓ BIOPASS ↓ CLARITY */}
        <div className="lg:hidden flex flex-col space-y-4 pt-2">
          {/* STEP 1: TOO MUCH INFORMATION (Stressed Laptop Avatar + Few Fragments) */}
          <div className="relative rounded-3xl p-5 bg-[#FFFDF0]/90 border-2 border-[#1B0E33]/15 shadow-xl flex flex-col items-center justify-center overflow-hidden min-h-[340px]">
            <div className="px-3 py-1 rounded-full bg-[#1B0E33]/10 border border-[#1B0E33]/15 text-[10px] font-mono uppercase tracking-widest font-extrabold text-[#1B0E33] mb-2">
              TOO MUCH INFORMATION
            </div>

            {/* Stressed Character at Laptop */}
            <div className="relative w-44 h-44 my-auto drop-shadow-xl z-10">
              <picture>
                <source media="(min-width: 1024px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                <source media="(max-width: 1023px)" srcSet="/characters/character-laptop-stressed-mobile.webp" />
                <img
                  src="/characters/character-laptop-stressed-mobile.webp"
                  alt="BioPass user overwhelmed by too much beauty information"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>

            {/* Few Information Fragments Around Avatar */}
            <div className="absolute top-12 left-4 z-20 px-2.5 py-1 rounded-full bg-[#1B0E33] text-white font-mono text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20">
              <span>🫧</span>
              <span>INGREDIENTS</span>
            </div>
            <div className="absolute top-14 right-4 z-20 px-2.5 py-1 rounded-full bg-[#1B0E33] text-white font-mono text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20">
              <span>⭐</span>
              <span>REVIEWS</span>
            </div>
            <div className="absolute bottom-12 left-4 z-20 px-2.5 py-1 rounded-full bg-[#1B0E33] text-white font-mono text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20">
              <span>📈</span>
              <span>TRENDS</span>
            </div>
            <div className="absolute bottom-10 right-4 z-20 px-2.5 py-1 rounded-full bg-[#1B0E33] text-white font-mono text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20">
              <span>🧴</span>
              <span>PRODUCTS</span>
            </div>

            <div className="text-[10px] font-mono font-bold text-[#5C329C] bg-[#1B0E33]/5 px-3 py-1 rounded-full mt-2">
              Noise · Clashing Actives · Confusion
            </div>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center justify-center py-0.5 text-[#1B0E33]">
            <span className="text-base font-mono font-bold tracking-wider">↓</span>
          </div>

          {/* STEP 2: BIOPASS INTELLIGENCE FILTER */}
          <div className="p-3.5 rounded-2xl bg-[#1B0E33] text-white flex items-center justify-center gap-2.5 shadow-lg">
            <div className="w-7 h-7 rounded-xl bg-yellow-400 text-stone-950 flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
            </div>
            <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-yellow-300">
              BIOPASS INTELLIGENCE FILTER
            </span>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center justify-center py-0.5 text-[#1B0E33]">
            <span className="text-base font-mono font-bold tracking-wider">↓</span>
          </div>

          {/* STEP 3: CLARITY (3 Concise Outcomes) */}
          <div className="space-y-2.5">
            <div className="text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1B0E33] font-extrabold bg-white/40 px-3 py-1 rounded-full border border-[#1B0E33]/15">
                PERSONAL CLARITY
              </span>
            </div>

            {clarityPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FFFDF0] border-2 border-[#1B0E33]/15 shadow-sm flex items-center gap-3"
              >
                <div className={`w-7 h-7 rounded-xl ${item.color} text-white flex items-center justify-center font-bold shrink-0 shadow-sm`}>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#1B0E33] font-mono tracking-tight flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-[9px] text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded font-bold">
                      ✓ CLARITY
                    </span>
                  </div>
                  <p className="text-[11px] text-[#3A1E68] font-light leading-snug mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Takeaway */}
          <div className="p-3 rounded-2xl bg-[#1B0E33]/10 border border-[#1B0E33]/20 text-center text-[11px] font-mono text-[#1B0E33] font-bold">
            OVERLOAD ➔ BIOPASS ➔ CLARITY
          </div>
        </div>

        {/* DESKTOP VIEW (hidden lg:grid) — TRANSITION FLOW */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center pt-2">
          {/* LEFT: INFORMATION OVERLOAD (Stressed character at laptop with floating fragments) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#FFFDF0]/80 border-2 border-[#1B0E33]/15 shadow-xl min-h-[440px]">
            {/* Stage Tag */}
            <div className="absolute top-4 left-6 px-3 py-1 rounded-full bg-[#1B0E33]/10 border border-[#1B0E33]/15 text-[10px] font-mono uppercase tracking-widest font-extrabold text-[#1B0E33]">
              01 · Information Overload
            </div>

            {/* Stressed Character at Laptop */}
            <div className="relative w-56 sm:w-64 lg:w-72 aspect-square my-auto drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
              <picture>
                <source media="(max-width: 1023px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                <source media="(min-width: 1024px)" srcSet="/characters/character-laptop-stressed.webp" />
                <img
                  src="/characters/character-laptop-stressed.webp"
                  alt="BioPass user overwhelmed by too much beauty information"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>

            {/* Scattered Floating Visual Fragments */}
            {overloadFragments.map((frag, idx) => (
              <div
                key={idx}
                className={`absolute ${frag.pos} z-20 px-3 py-1.5 rounded-full bg-[#1B0E33] text-white font-mono text-[10px] sm:text-[11px] font-extrabold shadow-lg flex items-center gap-1.5 border border-white/20 hover:scale-110 transition-transform cursor-default animate-pulse-subtle`}
              >
                <span>{frag.icon}</span>
                <span>{frag.label}</span>
              </div>
            ))}

            <div className="mt-2 text-center text-xs font-mono font-bold text-[#5C329C] bg-[#1B0E33]/5 px-4 py-1.5 rounded-full">
              Confusion · Clashing Actives · Trial &amp; Error
            </div>
          </div>

          {/* RIGHT: BIOPASS INTELLIGENCE → PERSONAL CLARITY */}
          <div className="lg:col-span-6 space-y-4">
            {/* Funnel Bridge */}
            <div className="p-4 rounded-2xl bg-[#1B0E33] text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-yellow-400 text-stone-950 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4 fill-stone-950" />
                </div>
                <div>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-yellow-300 block">
                    BIOPASS INTELLIGENCE FILTER
                  </span>
                  <span className="text-[11px] text-purple-200/80 font-mono">
                    Filtering the noise into your personal roadmap
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow-400 hidden sm:block" />
            </div>

            {/* 3 Clean Output Cards: What Fits Me, What Works Together, What To Do Next */}
            <div className="space-y-3">
              {clarityPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FFFDF0] border-2 border-[#1B0E33]/15 shadow-md flex items-start gap-4 hover:shadow-xl transition-all group"
                >
                  <div className={`w-8 h-8 rounded-xl ${item.color} text-white flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#1B0E33] font-mono tracking-tight flex items-center gap-2">
                      <span>{item.title}</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                        ✓ CLARITY
                      </span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3A1E68] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Takeaway */}
            <div className="p-4 rounded-2xl bg-[#1B0E33]/10 border border-[#1B0E33]/20 flex items-center justify-between text-xs font-mono text-[#1B0E33] font-bold">
              <span>OVERLOAD ➔ BIOPASS ➔ PERSONAL CLARITY</span>
              <span className="text-[#5C329C]">No guess work.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
