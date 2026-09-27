"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight } from "lucide-react";

export default function Chapter4InsideFormula() {
  const textures = [
    { name: "CREAM", desc: "Oil-in-water micro-emulsion", tag: "LIPID MATRIX" },
    { name: "SERUM", desc: "Active hydrosols", tag: "HIGH VISCOSITY" },
    { name: "GEL", desc: "Polymer water mesh", tag: "HYDRATION MESH" },
    { name: "OIL", desc: "Fatty acids & squalane", tag: "NON-POLAR LIPID" },
    { name: "PIGMENT", desc: "Iron oxides & mica", tag: "MINERAL OPTICS" },
    { name: "EMULSION", desc: "Micelle suspension", tag: "THERMODYNAMIC" },
  ];

  return (
    <section 
      id="formula" 
      className="min-h-screen lg:h-screen lg:max-h-screen bg-pastel-green text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans"
    >
      
      {/* Top Section Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-ink-navy">
          [ 04 // FORMULATION SCIENCE ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          DISSECTING COSMETIC INGREDIENTS
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-3 sm:py-6 space-y-6 sm:space-y-8 z-10 shrink">
        
        {/* Headlines */}
        <div className="space-y-2 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04] text-ink-navy uppercase">
            What's actually inside?
          </h2>

          <div className="text-2xl sm:text-4xl font-black tracking-tight text-ink-navy/85">
            Learn ingredients. Understand formulas.
          </div>
        </div>

        {/* Macro Textures Ticker Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {textures.map((t, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-2xl bg-ink-navy text-white border-2 border-ink-navy space-y-0.5 shadow-md hover:-translate-y-1 transition-transform"
            >
              <span className="text-[9px] font-mono text-pastel-green font-black uppercase tracking-wider block">
                {t.tag}
              </span>
              <div className="text-sm font-black tracking-tight text-white">
                {t.name}
              </div>
              <p className="text-[10px] text-white/70 font-medium leading-tight">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Two Core Experiences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Experience 1: Ingredient Detective */}
          <div className="rounded-[2rem] bg-ink-navy text-white p-6 sm:p-8 border-3 border-ink-navy space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2 rounded-xl bg-white/10">🕵️</span>
                <span className="px-2.5 py-0.5 rounded-full bg-pastel-pink text-ink-navy text-[9px] font-mono font-black uppercase tracking-wider">
                  DECODER MODULE
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Ingredient Detective
                </h3>
                <h4 className="text-xs sm:text-sm font-bold text-pastel-green">
                  What does this ingredient actually do?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Decode INCI lists and discover the exact biological jobs different ingredients perform — humectants, antioxidants, lipids, and actives.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/15 text-[11px] font-mono text-white/60">
              FEATURED IN: BIOPASS SCANNER & GLOSSARY
            </div>
          </div>

          {/* Experience 2: Formula Lab */}
          <div className="rounded-[2rem] bg-ink-navy text-white p-6 sm:p-8 border-3 border-ink-navy space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2 rounded-xl bg-white/10">🧪</span>
                <span className="px-2.5 py-0.5 rounded-full bg-pastel-green text-ink-navy text-[9px] font-mono font-black uppercase tracking-wider">
                  EMULSION LAB
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  Formula Lab
                </h3>
                <h4 className="text-xs sm:text-sm font-bold text-pastel-green">
                  Why doesn't your moisturizer separate into oil and water?
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Explore emulsifiers, humectants, surfactants, and preservatives. See what happens when ratios get disrupted.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/15 text-[11px] font-mono text-white/60">
              FEATURED IN: VIRTUAL EMULSION SIMULATOR
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div>
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-pastel-pink hover:bg-[#FFBFD7] text-ink-navy text-sm sm:text-base font-black tracking-wide uppercase transition-all duration-300 shadow-lg hover:scale-[1.02] group border-2 border-ink-navy"
          >
            <span>CRACK THE FORMULA →</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-[11px] font-mono font-bold text-ink-navy/70 pt-2 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <span>[ 04 // INCI DECODED ]</span>
        <span className="hidden sm:inline">DECONSTRUCTING COSMETIC FORMULAS</span>
        <span>[ CHAPTER 04 ]</span>
      </footer>

    </section>
  );
}
