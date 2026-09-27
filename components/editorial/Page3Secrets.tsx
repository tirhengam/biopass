"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export default function Page3Secrets() {
  const statements = [
    { text: "Creams have chemistry.", field: "FORMULATION" },
    { text: "Skin has biology.", field: "BARRIER SCIENCE" },
    { text: "Perfume has molecules.", field: "OLFACTION" },
    { text: "Colors have theory.", field: "OPTICS & PIGMENT" },
    { text: "Ads have claims.", field: "EVIDENCE LITERACY" },
  ];

  return (
    <section 
      id="secrets" 
      className="min-h-screen bg-editorial-pink text-ink-navy flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      
      {/* Top Section Eyebrow */}
      <div className="w-full flex items-center justify-between pb-8 border-b-2 border-ink-navy/20 z-10">
        <span className="text-xs font-mono font-black uppercase tracking-ultra text-ink-navy">
          [ 03 // INVESTIGATION ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          DECODING THE UNSEEN SCIENCE
        </span>
      </div>

      {/* Main Split Screen */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center z-10">
        
        {/* Left Side: Large Experimental Beauty/Science Visual Composition */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] bg-ink-navy border-4 border-ink-navy p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white text-ink-navy text-[10px] font-mono font-black uppercase tracking-wider">
                MACRO SPECIMEN ANALYSIS
              </span>
              <span className="w-3 h-3 rounded-full bg-acid-lime animate-ping" />
            </div>

            {/* Microscopic Liquid Prisms & Bilayers Artwork */}
            <div className="my-auto flex flex-col items-center justify-center text-center space-y-4">
              
              {/* Refraction Core */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-white/30 p-3 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-acid-lime/30 via-editorial-pink/40 to-white/10 flex flex-col items-center justify-center p-4 border border-white/20">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-widest font-mono">
                    pH 5.5
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-acid-lime mt-1 tracking-wider">
                    ACID MANTLE EQUILIBRIUM
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                  SPECTRAL REFRACTION
                </div>
                <p className="text-[11px] text-white/60 font-mono">
                  LIGHT TRANSMITTANCE: 94.2% • INDEX: 1.48
                </p>
              </div>

            </div>

            {/* Bottom Caption */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
              <span>BioPass Visual Lab</span>
              <span className="text-acid-lime">03-SECRETS</span>
            </div>

          </div>

        </div>

        {/* Right Side: Editorial Headline & Statements */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 sm:space-y-10">
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tightest leading-[0.95] text-ink-navy uppercase">
            Beauty has secrets.
          </h2>

          {/* Large Staggered Statements */}
          <div className="space-y-3 sm:space-y-4">
            {statements.map((s, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-ink-navy/20 pb-2.5 hover:border-ink-navy transition-colors"
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink-navy group-hover:text-black">
                  {s.text}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-ink-navy/60 group-hover:text-ink-navy">
                  // {s.field}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-ink-navy tracking-tight">
              Can you figure them out?
            </h3>

            <div>
              <a
                href={BIOPASS_APP_URL}
                className="inline-flex items-center gap-4 px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-ink-navy hover:bg-black text-white text-sm sm:text-base font-black tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-[1.02] group"
              >
                <span>LET'S EXPERIMENT →</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-xs font-mono font-bold text-ink-navy/70 pt-8 border-t-2 border-ink-navy/20 z-10">
        <span>[ DECODE THE FORMULA ]</span>
        <span className="hidden sm:inline">EVERY PRODUCT HAS HIDDEN SCIENCE</span>
        <span>[ PAGE 03 ]</span>
      </footer>

    </section>
  );
}
