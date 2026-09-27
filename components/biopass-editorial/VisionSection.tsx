"use client";

import React from "react";
import { ArrowLeftRight, ArrowDownUp } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-28 sm:py-36 bg-noir-deep text-white overflow-hidden">
      
      {/* Background Subtle Hot Pink Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-hotpink/8 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            09 // THE FUTURE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.04] text-white">
            The future of beauty is personal.
          </h2>
        </div>

        {/* 4 Pillars of Acceleration */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 sm:pb-24 border-b border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-xs font-mono text-hotpink font-bold">01</span>
            <div className="text-base sm:text-xl font-black text-white">More products.</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-hotpink font-bold">02</span>
            <div className="text-base sm:text-xl font-black text-white">More sophisticated formulations.</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-hotpink font-bold">03</span>
            <div className="text-base sm:text-xl font-black text-white">More scientific innovation.</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-hotpink font-bold">04</span>
            <div className="text-base sm:text-xl font-black text-white">More information than ever before.</div>
          </div>
        </div>

        {/* Middle Core Statement */}
        <div className="py-16 sm:py-20 max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug">
            BioPass is building an intelligent layer between people, products and science.
          </p>

          {/* Visual Network Architecture Diagram */}
          <div className="pt-6">
            <div className="inline-flex flex-col items-center p-8 sm:p-12 rounded-3xl bg-noir-card border border-white/[0.1] shadow-2xl space-y-6">
              
              {/* Horizontal Stream: PEOPLE ↔ BIOPASS ↔ PRODUCTS */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm sm:text-base font-black tracking-widest uppercase">
                
                <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white">
                  PEOPLE
                </div>

                <div className="text-hotpink flex items-center">
                  <ArrowLeftRight className="w-5 h-5 hidden sm:block" />
                  <span className="sm:hidden text-xs">↕</span>
                </div>

                <div className="px-6 py-3 rounded-2xl bg-hotpink text-white shadow-[0_0_30px_#FF007F] font-black tracking-widest">
                  BIOPASS
                </div>

                <div className="text-hotpink flex items-center">
                  <ArrowLeftRight className="w-5 h-5 hidden sm:block" />
                  <span className="sm:hidden text-xs">↕</span>
                </div>

                <div className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white">
                  PRODUCTS
                </div>

              </div>

              {/* Vertical Connector */}
              <div className="text-hotpink flex flex-col items-center">
                <ArrowDownUp className="w-5 h-5" />
              </div>

              {/* Bottom Stream: SCIENCE */}
              <div className="px-7 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/90 text-sm sm:text-base font-black tracking-widest uppercase">
                SCIENCE
              </div>

            </div>
          </div>
        </div>

        {/* Emphasized Philosophy */}
        <div className="max-w-2xl mx-auto text-center space-y-4 pt-4 pb-8">
          <p className="text-base sm:text-lg text-white/50 font-normal">
            Not to tell you what you must buy.
          </p>
          <p className="text-xl sm:text-2xl font-black text-white leading-snug">
            To give you better information to decide for yourself.
          </p>
        </div>

      </div>

    </section>
  );
}
