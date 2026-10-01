"use client";

import React from "react";
import Image from "next/image";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Chapter6FinalProps {
  onOpenContact: () => void;
}

export const Chapter6Final: React.FC<Chapter6FinalProps> = ({
  onOpenContact,
}) => {
  return (
    <section
      id="section-final"
      className="relative min-h-[90vh] flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#1B0E33] text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center space-y-10 my-auto z-10">
        {/* Character Visual: Optimistic, Confident Character */}
        <div className="relative w-40 sm:w-48 h-56 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500">
          <Image
            src="/characters/character-singing-microphone.png"
            alt="BioPass empowering your beauty journey"
            fill
            className="object-contain"
          />
        </div>

        {/* Small Brand Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-300 text-xs font-mono uppercase tracking-[0.2em] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>BIOPASS</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
          Your beauty goal is a journey. <br />
          <span className="italic font-normal text-yellow-300">Give it a roadmap.</span>
        </h2>

        {/* Supporting 5-Point Sequence */}
        <div className="space-y-1.5 text-base sm:text-lg text-purple-200/90 font-light max-w-md mx-auto leading-relaxed font-sans">
          <p>Understand your needs.</p>
          <p>Define your goals.</p>
          <p>Follow your routine.</p>
          <p>Track your journey.</p>
          <p>Adapt along the way.</p>
        </div>

        {/* Primary CTA — STRICTLY "TRY THE DEMO" */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BIOPASS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-full bg-yellow-400 text-stone-950 font-mono text-xs uppercase tracking-wider font-extrabold hover:bg-yellow-300 transition-all shadow-[0_0_35px_rgba(250,204,21,0.4)] flex items-center gap-3 group"
          >
            <span>TRY THE DEMO</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full pt-16 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-purple-300/60 gap-6 z-10">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold tracking-widest text-white uppercase">
            BIOPASS
          </div>
          <div className="text-[11px] text-purple-200/70">
            Personal Beauty Intelligence · Where Science Meets Care
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-purple-200/80">
          <span>Skincare</span>
          <span>·</span>
          <span>Hair Care</span>
          <span>·</span>
          <span>Personal Care</span>
          <span>·</span>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors underline underline-offset-4 text-yellow-300"
          >
            Contact
          </button>
        </div>

        <div className="text-[11px] text-purple-300/60">
          © 2026 BioPass. All rights reserved.
        </div>
      </footer>
    </section>
  );
};
