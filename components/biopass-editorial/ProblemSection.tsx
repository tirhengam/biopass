"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function ProblemSection() {
  const noiseSignals = [
    {
      source: "Social media",
      message: "tells you what’s trending.",
      sub: "Algorithms favor virality, not your barrier biology.",
    },
    {
      source: "Brands",
      message: "tell you what’s new.",
      sub: "Every launch is 'revolutionary', but is it suitable for you?",
    },
    {
      source: "Reviews",
      message: "tell you what worked for someone else.",
      sub: "Their skin type, climate, and routine are entirely different.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-noir text-white overflow-hidden">
      
      {/* Background Micro Glow */}
      <div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-hotpink/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4 mb-16 sm:mb-24">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink">
            02 // THE OVERWHELM
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-white">
            So many products.<br />
            So many opinions.<br />
            <span className="text-white/50">Which one is right for you?</span>
          </h2>
        </div>

        {/* Progressive Statements Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-16 sm:pb-24 border-b border-white/[0.08]">
          {noiseSignals.map((item, idx) => (
            <div key={idx} className="space-y-3 group">
              <span className="text-xs font-mono text-white/40 block">0{idx + 1}</span>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                <span className="text-hotpink font-extrabold">{item.source}</span> {item.message}
              </p>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-normal">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Climax: But You Are Not Everyone Else */}
        <div className="pt-16 sm:pt-24 max-w-4xl space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              But you are not everyone else.
            </h3>
            <p className="text-lg sm:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed">
              Your skin, preferences, routine and goals are personal.
            </p>
          </div>

          {/* Visual Transformation Box */}
          <div className="pt-4">
            <div className="relative inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 sm:p-8 rounded-3xl bg-noir-card border border-white/[0.08] shadow-2xl">
              
              {/* Question 1 */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">OLD PARADIGM</span>
                <div className="text-lg sm:text-2xl font-bold line-through text-white/50">
                  "Is this a good product?"
                </div>
              </div>

              {/* Transformation Indicator */}
              <div className="w-10 h-10 rounded-full bg-hotpink/10 border border-hotpink/30 flex items-center justify-center text-hotpink shrink-0">
                <ArrowDown className="w-5 h-5 -rotate-90 sm:rotate-0" />
              </div>

              {/* Question 2 */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-hotpink font-bold">BIOPASS PARADIGM</span>
                <div className="text-xl sm:text-3xl font-black text-white">
                  "Is this a good product{" "}
                  <span className="text-hotpink underline decoration-hotpink decoration-2 underline-offset-4 shadow-sm">
                    FOR ME?
                  </span>"
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
