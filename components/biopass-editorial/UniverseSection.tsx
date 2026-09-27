"use client";

import React from "react";
import { Sparkles, Dna, ArrowRight } from "lucide-react";
import { BIOPASS_APP_URL } from "@/config/appConfig";

export default function UniverseSection() {
  const verticals = [
    {
      title: "SKIN CARE",
      status: "CURRENTLY LIVE",
      isActive: true,
      desc: "Find products that fit your skin and routine.",
      detail: "Barrier lipid analysis, comedogenic indexing, and seasonal sensitivity tracking.",
    },
    {
      title: "HAIR CARE",
      status: "EXPANDING NEXT",
      isActive: false,
      desc: "Explore products around your hair characteristics and goals.",
      detail: "Scalp microbiome balancing, porosity calibration, and disulfide keratin bond care.",
    },
    {
      title: "PERFUME",
      status: "EXPANDING NEXT",
      isActive: false,
      desc: "Discover fragrances around your personal taste.",
      detail: "Olfactory volatility accords, top/heart/base note resonance, and scent longevity matching.",
    },
    {
      title: "SUPPLEMENTS",
      status: "FUTURE EXPANSION",
      isActive: false,
      desc: "Future expansion into the wider personal-care and wellbeing journey.",
      detail: "Nutritional bio-availability, collagen synthesis, and holistic inner/outer radiance.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-noir text-white overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-hotpink/8 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            08 // THE ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            One BioPass.<br />
            <span className="text-white/60">A world of personal care.</span>
          </h2>
          <p className="text-lg sm:text-2xl text-white/70 font-medium leading-relaxed">
            Your biological profile is interconnected. Your intelligence platform should be too.
          </p>
        </div>

        {/* 4 Verticals Grid with Connected Visual Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {verticals.map((cat, idx) => (
            <div
              key={cat.title}
              className={`p-7 rounded-3xl border transition-all duration-500 relative flex flex-col justify-between space-y-6 ${
                cat.isActive
                  ? "bg-noir-card border-hotpink shadow-[0_0_35px_rgba(255,0,127,0.25)] ring-1 ring-hotpink/30 hover:scale-[1.02]"
                  : "bg-white/[0.02] border-white/[0.08] hover:border-white/20 opacity-85 hover:opacity-100"
              }`}
            >
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    cat.isActive
                      ? "bg-hotpink text-white shadow-[0_0_10px_#FF007F]"
                      : "bg-white/10 text-white/50"
                  }`}>
                    {cat.status}
                  </span>
                  {cat.isActive && (
                    <Sparkles className="w-4 h-4 text-hotpink animate-pulse" />
                  )}
                </div>

                <h3 className="text-2xl font-black tracking-tight text-white pt-2">
                  {cat.title}
                </h3>

                <p className="text-sm font-semibold text-white/90 leading-snug">
                  {cat.desc}
                </p>

                <p className="text-xs text-white/50 leading-relaxed font-normal pt-1">
                  {cat.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                {cat.isActive ? (
                  <a
                    href={BIOPASS_APP_URL}
                    className="text-xs font-bold text-hotpink hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <span>Launch Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-white/40 uppercase">
                    Roadmap Integration
                  </span>
                )}
              </div>

            </div>
          ))}

        </div>

        {/* Unified Profile Connection Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-noir-card border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-hotpink/15 border border-hotpink/40 flex items-center justify-center text-hotpink shrink-0">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-white block">
                One evolving profile. One intelligent platform.
              </span>
              <span className="text-xs text-white/60 font-normal">
                Changes in your skin or routine immediately optimize recommendations across all categories.
              </span>
            </div>
          </div>

          <a
            href={BIOPASS_APP_URL}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-hotpink text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20 hover:border-hotpink shrink-0"
          >
            Create Your Profile
          </a>
        </div>

      </div>

    </section>
  );
}
