"use client";

import React, { useState } from "react";
import { Bot, Sparkles, Send, Play, Beaker, RotateCcw, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function AILabBuddySection() {
  const [showExperiment, setShowExperiment] = useState(false);
  const [emulsifierAdded, setEmulsifierAdded] = useState(true);

  return (
    <section id="ai-buddy" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]/80 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#EDE9FE]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE9FE] border border-[#C4B5FD] text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COSMETIC SCIENCE TUTOR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Meet your AI Lab Buddy 🤖🧪
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Ask questions. Get hints. Test ideas. Make mistakes. Your AI Lab Buddy adapts explanations and challenges to your level, helping you understand the why — not just memorize the answer.
            </p>

            {/* Tutor vs Advisor Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B132B] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>The Science Tutor Guarantee</span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Your AI Lab Buddy will never diagnose skin conditions, judge your appearance, or tell you what skincare products to buy. Its sole mission is to make chemistry and biology intuitive through joyful virtual experimentation.
              </p>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Popular student questions:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-xs text-[#334155] border border-[#E2E8F0]">
                  "Why do some sunscreens leave a white cast?"
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-xs text-[#334155] border border-[#E2E8F0]">
                  "What is the difference between AHA and BHA?"
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-xs text-[#334155] border border-[#E2E8F0]">
                  "How do peptides communicate with cells?"
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Mock Interactive Chat & Virtual Emulsion Simulator */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Chat Box Container */}
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-xl p-6 sm:p-8 space-y-6">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#818CF8] to-[#F472B6] p-[2px]">
                    <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center">
                      <Bot className="w-5 h-5 text-[#6366F1]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B132B] flex items-center gap-1.5">
                      <span>AI Lab Buddy</span>
                      <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
                    </div>
                    <span className="text-[11px] text-[#64748B]">Virtual Cosmetic Chemistry Mentor</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] font-bold border border-[#A7F3D0]">
                  ONLINE
                </span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Student Message */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="max-w-[85%] p-4 rounded-2xl rounded-tr-sm bg-[#EEF2FF] text-[#1E1B4B] border border-[#C7D2FE]/60 space-y-1 shadow-sm">
                    <span className="text-[10px] font-mono text-[#6366F1] font-bold uppercase tracking-wider block">
                      Student
                    </span>
                    <p className="font-medium leading-relaxed">
                      “Why does my moisturizer need an emulsifier?”
                    </p>
                  </div>
                </div>

                {/* AI Lab Buddy Reply */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-xs shrink-0 mt-1">
                    🤖
                  </div>
                  <div className="max-w-[90%] p-4 rounded-2xl rounded-tl-sm bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] space-y-2 shadow-sm">
                    <span className="text-[10px] font-mono text-[#059669] font-bold uppercase tracking-wider block">
                      AI Lab Buddy
                    </span>
                    <p className="leading-relaxed">
                      “Oil and water normally separate. An emulsifier helps them stay together. Want to try removing it from your virtual formula and see what happens?”
                    </p>

                    {/* Interactive Trigger Button inside Chat */}
                    <div className="pt-2">
                      <button
                        onClick={() => setShowExperiment(!showExperiment)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#EC4899] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 cursor-pointer transition-all"
                      >
                        <Beaker className="w-3.5 h-3.5" />
                        <span>{showExperiment ? "Hide Simulation" : "Try an Experiment →"}</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Interactive Virtual Emulsion Simulation Reveal */}
              {showExperiment && (
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border-2 border-dashed border-[#C4B5FD] space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0B132B]">
                      <Beaker className="w-4 h-4 text-[#8B5CF6]" />
                      <span>Virtual Emulsion Simulator</span>
                    </div>
                    
                    <button
                      onClick={() => setEmulsifierAdded(!emulsifierAdded)}
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                        emulsifierAdded 
                          ? "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46]" 
                          : "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]"
                      }`}
                    >
                      {emulsifierAdded ? "Emulsifier: ON (Click to Remove)" : "Emulsifier: OFF (Click to Add)"}
                    </button>
                  </div>

                  {/* Virtual Beaker Visual */}
                  <div className="w-full h-36 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] p-4 flex flex-col justify-end relative overflow-hidden shadow-inner">
                    {emulsifierAdded ? (
                      /* Emulsified Cream Layer */
                      <div className="w-full h-28 rounded-xl bg-gradient-to-t from-[#FDF2F8] via-[#FCE7F3] to-[#FDF4FF] border border-[#F472B6]/40 flex flex-col items-center justify-center p-2 text-center transition-all duration-500 animate-pulse-subtle">
                        <span className="text-xs font-bold text-[#9D174D]">
                          ✨ Homogeneous Stable Emulsion
                        </span>
                        <span className="text-[10px] text-[#BE185D]">
                          Micelles surround oil droplets, suspending them seamlessly in water.
                        </span>
                      </div>
                    ) : (
                      /* Phase Separation Split Layers */
                      <div className="w-full h-28 space-y-1 transition-all duration-500">
                        {/* Oil Layer Floating On Top */}
                        <div className="w-full h-12 rounded-t-xl bg-[#FEF3C7] border border-[#F59E0B]/50 flex items-center justify-center text-[11px] font-bold text-[#92400E]">
                          <span>⚠️ Upper Layer: Pure Cosmetic Plant Oils (Density ~0.92 g/ml)</span>
                        </div>
                        {/* Water Layer Sunk to Bottom */}
                        <div className="w-full h-14 rounded-b-xl bg-[#E0F2FE] border border-[#38BDF8]/50 flex items-center justify-center text-[11px] font-bold text-[#0369A1]">
                          <span>Lower Layer: Polar Hydrosol Water (Density 1.00 g/ml)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-[#64748B] text-center italic">
                    {emulsifierAdded 
                      ? "Result: Silky moisturizer texture ready for skin absorption!" 
                      : "Result: Phase separation! The product curdles and splits without an amphiphilic bond."}
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
