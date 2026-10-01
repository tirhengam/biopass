"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight } from "lucide-react";

interface FinalSectionCTAProps {
  onOpenContact: () => void;
}

export const FinalSectionCTA: React.FC<FinalSectionCTAProps> = ({
  onOpenContact,
}) => {
  return (
    <section
      id="section-final-cta"
      className="relative min-h-[85vh] flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#0B0B0E] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center space-y-10 my-auto z-10">
        {/* Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-violet-300 text-xs font-mono uppercase tracking-[0.2em]">
          <span>BIOPASS</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
          Your beauty goal is a journey. <br />
          <span className="italic font-normal text-stone-200">Give it a roadmap.</span>
        </h2>

        {/* Supporting 5-point sequence */}
        <div className="space-y-1.5 text-base sm:text-lg text-stone-300 font-light max-w-md mx-auto leading-relaxed">
          <p>Understand your needs.</p>
          <p>Define your goals.</p>
          <p>Follow your routine.</p>
          <p>Track your journey.</p>
          <p>Adapt along the way.</p>
        </div>

        {/* Primary CTA — MUST BE "TRY THE DEMO" */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BIOPASS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] flex items-center gap-3 group"
          >
            <span>TRY THE DEMO</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full pt-16 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-6 z-10">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold tracking-widest text-stone-300 uppercase">
            BIOPASS
          </div>
          <div className="text-[11px] text-stone-400">
            Personal Beauty Intelligence · Where Science Meets Care
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-stone-400">
          <span>Skincare</span>
          <span>·</span>
          <span>Hair Care</span>
          <span>·</span>
          <span>Personal Care</span>
          <span>·</span>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors underline underline-offset-4 text-violet-400"
          >
            Contact
          </button>
        </div>

        <div className="text-[11px] text-stone-500">
          © 2026 BioPass. All rights reserved.
        </div>
      </footer>
    </section>
  );
};
