"use client";

import React from "react";
import { ArrowRight, Sparkles, Beaker, Atom, Droplets } from "lucide-react";

interface BeautyLabFinalCTAProps {
  onEnterLab: () => void;
}

export default function BeautyLabFinalCTA({ onEnterLab }: BeautyLabFinalCTAProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFCFD] relative overflow-hidden text-[#0B132B]">
      
      {/* Background soft ambient pastel swirls */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-gradient-to-r from-[#EEF2FF] via-[#FFF1F2] to-[#ECFDF5] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Floating Lab Object Icons */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#8B5CF6]">
            <Beaker className="w-5 h-5" />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-md flex items-center justify-center text-[#EC4899] -mt-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#06B6D4]">
            <Droplets className="w-5 h-5" />
          </div>
        </div>

        {/* Headline & Subhead */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0B132B] tracking-tight">
            Ready to enter the Beauty Lab?
          </h2>

          <p className="text-lg sm:text-xl text-[#64748B] max-w-xl mx-auto">
            Your first experiment is waiting.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onEnterLab}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316] hover:opacity-95 text-white text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Enter the Lab →</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Powered by BioPass */}
        <div className="pt-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#94A3B8]">
            Powered by <span className="text-[#0B132B]">BioPass</span>
          </span>
        </div>

      </div>
    </section>
  );
}
