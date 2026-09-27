"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUp, ArrowRight, Dna, Sparkles } from "lucide-react";

export default function ChapterFinalCTA() {
  const scrollToWheel = () => {
    const el = document.getElementById("welcome");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="final-cta"
      className="min-h-screen bg-pastel-pink text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden font-space"
      style={{ backgroundColor: "#FFD5E5" }}
    >
      {/* Top Header / Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0 font-space">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy">
          [ FINAL CHAPTER // THE SECRET LAND AWAITS 🩷 ]
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy/70 hidden sm:inline">
          BEAUTY • SCIENCE • ADVENTURE
        </span>
      </div>

      {/* Main Center Body */}
      <div className="my-auto py-12 sm:py-16 max-w-4xl mx-auto w-full text-center space-y-8 z-10 font-space">
        
        {/* Mini Animated Wheel Icon */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-ink-navy bg-white shadow-xl flex items-center justify-center p-2 group hover:scale-110 transition-transform">
            
            {/* Spinning inner disc */}
            <div className="w-full h-full rounded-full animate-spin-slow border-2 border-ink-navy/20 relative overflow-hidden flex items-center justify-center">
              {/* Slices represented as quadrants */}
              <div className="absolute inset-0 bg-conic-gradient from-pastel-pink via-pastel-lavender via-pastel-green to-pastel-pink opacity-80" />
              <div className="w-6 h-6 rounded-full bg-ink-navy border-2 border-white z-10 flex items-center justify-center text-pastel-green">
                <Dna className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Small Pointer */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-ink-navy" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h2 className="font-fredoka text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-navy leading-tight">
            Your next experiment is waiting
          </h2>
          <p className="font-space text-base sm:text-xl font-normal text-ink-navy/80 max-w-xl mx-auto">
            Step into the laboratory. Spin the wheel, question the ingredients, and create formulations you understand.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-space">
          
          {/* Button 1: SPIN YOUR NEXT ADVENTURE → (Scrolls back to wheel) */}
          <button
            onClick={scrollToWheel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-pastel-green hover:bg-[#BDEECC] text-ink-navy font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 border-2 border-ink-navy cursor-pointer group font-space"
          >
            <span>SPIN YOUR NEXT ADVENTURE</span>
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Button 2: ENTER BIOPASS → */}
          <a
            href={BIOPASS_APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-ink-navy hover:bg-black text-pastel-pink font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 border-2 border-ink-navy group font-space"
          >
            <span>ENTER BIOPASS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform text-pastel-green" />
          </a>

        </div>

        <div className="text-xs font-bold text-ink-navy/60 pt-2 font-space">
          Spin it. Pick one. Follow your curiosity.
        </div>

      </div>

      {/* Bottom Minimal Footer */}
      <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-ink-navy/60 pt-4 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-black text-ink-navy uppercase">BioPass</span>
          <span>© 2026 Cosmetic Secret Land. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#welcome" className="hover:text-ink-navy transition-colors">Back to Top ↑</a>
          <a href={BIOPASS_APP_URL} className="text-ink-navy font-black hover:underline">
            Launch Web App ↗
          </a>
        </div>
      </footer>
    </section>
  );
}
