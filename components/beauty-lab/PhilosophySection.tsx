"use client";

import React from "react";
import { Microscope, Gamepad2, Brain, Sparkles, CheckCircle2 } from "lucide-react";

export default function PhilosophySection() {
  const values = [
    {
      icon: Microscope,
      title: "Real Science",
      description: "Learn the authentic chemistry and cell biology behind everyday products — from pH scales to molecular weights.",
      badge: "AUTHENTIC STEM",
      accent: "bg-[#EEF2FF] border-[#C7D2FE] text-[#4F46E5]"
    },
    {
      icon: Gamepad2,
      title: "Learning Through Play",
      description: "Turn complicated chemical reactions into interactive simulations, gamified challenges, and virtual formulation beakers.",
      badge: "EXPERIENTIAL",
      accent: "bg-[#FFF1F2] border-[#FECDD3] text-[#E11D48]"
    },
    {
      icon: Brain,
      title: "Think for Yourself",
      description: "Learn to question viral beauty trends, unpack marketing claims, and distinguish between hype and peer-reviewed evidence.",
      badge: "CRITICAL THINKING",
      accent: "bg-[#F0FDF4] border-[#A7F3D0] text-[#059669]"
    },
    {
      icon: Sparkles,
      title: "Curiosity First",
      description: "No product sales pressure. No 10-step routine mandates. Zero judgment on appearance. Just pure, joyful scientific exploration.",
      badge: "ZERO SALES PRESSURE",
      accent: "bg-[#FFFBEB] border-[#FDE68A] text-[#D97706]"
    }
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FCFCFD] border-b border-[#E2E8F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Large Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-bold uppercase tracking-widest text-[#0B132B] shadow-sm">
            <span>OUR CORE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B132B] tracking-tight leading-[1.12]">
            Don't just buy beauty. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
              Understand it.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Beauty products are full of chemistry, biology, materials science and fascinating questions. Beauty Lab gives you the tools to explore them.
          </p>
        </div>

        {/* Four Small Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0B132B] shadow-inner">
                      <Icon className="w-5 h-5 text-[#6366F1]" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full border ${val.accent}`}>
                      {val.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B132B]">
                    {val.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F8FAFC] flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>BioPass Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
