"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Page5Understand() {
  return (
    <section 
      id="understand" 
      className="min-h-screen bg-editorial-pink text-ink-navy flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      
      {/* Top Eyebrow */}
      <div className="w-full flex items-center justify-between pb-8 border-b-2 border-ink-navy/20 z-10">
        <span className="text-xs font-mono font-black uppercase tracking-ultra text-ink-navy">
          [ 05 // PHILOSOPHY & FINALE ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          GENUINE SCIENTIFIC LITERACY
        </span>
      </div>

      {/* Main Screen Body: Minimal, Bold, Massive Typography */}
      <div className="my-auto py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-6xl z-10">
        
        <div className="space-y-2 sm:space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tightest text-ink-navy uppercase">
            Don't just buy beauty.
          </h2>

          <h2 className="text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black tracking-tightest leading-[0.88] text-ink-navy uppercase">
            Understand it.
          </h2>
        </div>

        <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-ink-navy/90 max-w-3xl leading-relaxed">
          No perfect routines. No telling you what you “need.” Just experiments, questions and science.
        </p>

        <div className="pt-6 sm:pt-10 space-y-6 sm:space-y-8">
          <h3 className="text-4xl sm:text-6xl font-black text-ink-navy uppercase tracking-tight">
            Ready?
          </h3>

          <div>
            <a
              href={BIOPASS_APP_URL}
              className="inline-flex items-center gap-4 px-10 py-5 sm:px-14 sm:py-7 rounded-full bg-acid-lime hover:bg-acid-lime-hover text-ink-navy text-base sm:text-xl font-black tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-[1.03] group border-4 border-ink-navy"
            >
              <span>ENTER THE BEAUTY LAB →</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <footer className="w-full pt-12 border-t-2 border-ink-navy/20 z-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-ink-navy/80">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink-navy inline-block" />
            <span className="uppercase tracking-widest font-black">
              Powered by BioPass
            </span>
          </div>

          {/* Minimal Footer Links */}
          <div className="flex items-center gap-6 sm:gap-8 uppercase tracking-wider text-ink-navy">
            <a href="#hero" className="hover:opacity-60 transition-opacity">About</a>
            <span className="text-ink-navy/30">·</span>
            <a href="#secrets" className="hover:opacity-60 transition-opacity">Safety</a>
            <span className="text-ink-navy/30">·</span>
            <a href="#labs" className="hover:opacity-60 transition-opacity">Privacy</a>
            <span className="text-ink-navy/30">·</span>
            <a href={BIOPASS_APP_URL} className="hover:opacity-60 transition-opacity">Contact</a>
          </div>

        </div>

        <div className="text-[11px] font-mono text-ink-navy/60 text-center sm:text-left">
          BioPass Beauty Lab is an interactive educational platform and does not provide medical or dermatological advice.
        </div>
      </footer>

    </section>
  );
}
