"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Bot } from "lucide-react";

export default function Page4AILab() {
  return (
    <section 
      id="ai-lab" 
      className="min-h-screen bg-acid-lime text-ink-navy flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      
      {/* Top Eyebrow */}
      <div className="w-full flex items-center justify-between pb-8 border-b-2 border-ink-navy/20 z-10">
        <span className="text-xs font-mono font-black uppercase tracking-ultra text-ink-navy">
          [ 04 // AI COMPANION ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          YOUR SCIENCE TUTOR ON CALL
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Headline Area */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tightest leading-[0.88] text-ink-navy uppercase">
              Stuck?
            </h2>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tightest leading-[0.92] text-ink-navy uppercase">
              Ask the Lab.
            </h2>
          </div>

          <p className="text-base sm:text-xl font-bold text-ink-navy/80 max-w-md leading-relaxed">
            No judgment. No test anxiety. Just instant answers that explain the why behind the molecules.
          </p>
        </div>

        {/* Right Single Large Conversation Showcase */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="rounded-[2.5rem] bg-ink-navy text-white p-8 sm:p-12 shadow-2xl space-y-8 border-4 border-ink-navy">
            
            {/* YOU Question */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-black tracking-widest text-acid-lime uppercase block">
                YOU
              </span>
              <p className="text-2xl sm:text-3xl font-black leading-snug tracking-tight text-white">
                Why can't oil and water just stay mixed?
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/15" />

            {/* LAB AI Response */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-black tracking-widest text-editorial-pink uppercase">
                  LAB AI
                </span>
                <span className="text-lg">👀</span>
              </div>
              
              <p className="text-lg sm:text-2xl font-bold leading-relaxed text-white/95">
                Good question. Want to remove the emulsifier from your virtual moisturizer and see what happens?
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div>
            <a
              href={BIOPASS_APP_URL}
              className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-ink-navy hover:bg-black text-editorial-pink text-base sm:text-lg font-black tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-[1.02] group"
            >
              <span>TRY IT →</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-xs font-mono font-bold text-ink-navy/70 pt-8 border-t-2 border-ink-navy/20 z-10">
        <span>[ ZERO JARGON TUTOR ]</span>
        <span className="hidden sm:inline">ASK ANYTHING ABOUT COSMETIC SCIENCE</span>
        <span>[ PAGE 04 ]</span>
      </footer>

    </section>
  );
}
