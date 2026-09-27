"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export default function Page1Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-editorial-pink text-ink-navy flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      
      {/* Top Header / Minimal Navigation */}
      <header className="w-full flex items-center justify-between pb-8 sm:pb-12 z-20">
        <div className="flex flex-col">
          <span className="font-black text-2xl sm:text-3xl tracking-tight leading-none text-ink-navy uppercase">
            BioPass
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-black tracking-ultra text-ink-navy/80 uppercase mt-0.5">
            BEAUTY LAB
          </span>
        </div>

        <nav className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <a href="#labs" className="hover:opacity-75 transition-opacity hidden sm:inline-block">
            Labs
          </a>
          <a href="#secrets" className="hover:opacity-75 transition-opacity hidden sm:inline-block">
            Secrets
          </a>
          <a href="#ai-lab" className="hover:opacity-75 transition-opacity hidden md:inline-block">
            Lab AI
          </a>
          <a 
            href={BIOPASS_APP_URL}
            className="px-5 py-2.5 rounded-full bg-ink-navy text-acid-lime font-black tracking-wider text-xs uppercase hover:bg-black transition-all shadow-md"
          >
            Launch App ↗
          </a>
        </nav>
      </header>

      {/* Main Screen Body: Asymmetrical Magazine Split */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-7 space-y-8 sm:space-y-10">
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[6.75rem] font-black tracking-tightest leading-[0.92] text-ink-navy uppercase">
              Welcome to the<br />Beauty Lab
            </h1>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ink-navy/90 max-w-xl leading-snug">
              Experiment with beauty. Discover the science.
            </h2>
          </div>

          <p className="text-base sm:text-xl font-medium text-ink-navy/85 max-w-lg leading-relaxed">
            Ingredients. Skin. Hair. Fragrance. Color. And all the science hiding behind your bathroom shelf.
          </p>

          <div className="pt-2">
            <a
              href={BIOPASS_APP_URL}
              className="inline-flex items-center gap-4 px-10 py-5 sm:px-12 sm:py-6 rounded-full bg-ink-navy hover:bg-black text-acid-lime text-sm sm:text-base font-black tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-[1.02] group"
            >
              <span>ENTER THE LAB →</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Striking Editorial Visual Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Main Visual Container */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] bg-ink-navy/95 border-4 border-ink-navy overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
            
            {/* Top Badge Annotation */}
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-acid-lime text-ink-navy text-[10px] font-mono font-black uppercase tracking-wider">
                SPECIMEN #01 • MOLECULAR EMULSION
              </span>
              <span className="text-white/40 text-xs font-mono">2026</span>
            </div>

            {/* Central Artistic Scientific Representation */}
            <div className="my-auto relative flex flex-col items-center justify-center text-center p-4">
              
              {/* Refraction Petri Disk Circle */}
              <div className="relative w-56 h-56 rounded-full border-2 border-white/20 bg-gradient-to-tr from-[#FF3887]/30 via-transparent to-[#D2FF00]/20 flex items-center justify-center p-4 shadow-inner">
                
                {/* Micro Fluid Swirl */}
                <div className="w-40 h-40 rounded-full border border-white/30 flex items-center justify-center relative overflow-hidden backdrop-blur-xs">
                  <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-acid-lime/80 blur-xs animate-pulse" />
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-editorial-pink/80 blur-xs" />
                  
                  {/* Molecular Formula Typography */}
                  <div className="text-center font-mono text-white space-y-1">
                    <div className="text-2xl font-black tracking-widest text-acid-lime">C21H41NO3</div>
                    <div className="text-[9px] uppercase tracking-widest text-white/70">PHYTOCERAMIDE NP</div>
                  </div>
                </div>

              </div>

              <div className="mt-4 text-[11px] font-mono uppercase tracking-widest text-white/60">
                LIPID MATRIX RESTORATION • 99.8% PURITY
              </div>

            </div>

            {/* Bottom Floating Handwritten Doodles */}
            <div className="z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-acid-lime font-bold">
                <span>Curiosity looks good on you</span>
                <Heart className="w-3.5 h-3.5 fill-current text-editorial-pink inline" />
              </div>
              <span className="text-[10px] font-mono text-white/50">BioPass Lab</span>
            </div>

          </div>

          {/* Floating Sticker Doodles */}
          <div className="absolute -top-4 -right-2 transform rotate-6 bg-acid-lime text-ink-navy px-4 py-1.5 rounded-2xl shadow-xl text-xs font-black uppercase tracking-wider border-2 border-ink-navy">
            100% SCIENCE
          </div>

          <div className="absolute -bottom-4 -left-2 transform -rotate-6 bg-white text-ink-navy px-4 py-1.5 rounded-2xl shadow-xl text-xs font-black uppercase tracking-wider border-2 border-ink-navy">
            0% FAKE CLAIMS
          </div>

        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-xs font-mono font-bold text-ink-navy/70 pt-8 z-10">
        <span>[ 01 // DISCOVER ]</span>
        <span className="hidden sm:inline">SCROLL DOWN TO EXPLORE LABS ↓</span>
        <span>[ PAGE 01 ]</span>
      </footer>

    </section>
  );
}
