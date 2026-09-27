"use client";

import React, { useState } from "react";
import { Compass, Gamepad2, Bot, Trophy, ArrowRight, Sparkles, Star } from "lucide-react";

export default function HowItWorksSteps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      icon: Compass,
      title: "Choose a Lab",
      subtitle: "Pick something you're curious about.",
      description: "Whether it's the chemistry of hair dye, the lipid bilayer of your skin barrier, or synthetic vs. natural fragrance molecules, start anywhere curiosity strikes.",
      color: "from-[#818CF8] to-[#C084FC]",
      badge: "STEP 01",
      accent: "bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]"
    },
    {
      number: "2",
      icon: Gamepad2,
      title: "Play",
      subtitle: "Solve challenges, build formulas and run virtual experiments.",
      description: "Mix digital beakers, adjust surfactant ratios, decode confusing INCI lists, and simulate what happens when you remove essential ingredients.",
      color: "from-[#F472B6] to-[#FB7185]",
      badge: "STEP 02",
      accent: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]"
    },
    {
      number: "3",
      icon: Bot,
      title: "Ask AI",
      subtitle: "Ask questions whenever something doesn't make sense.",
      description: "Stuck on why an acid stings or how micellar water traps oil? Your AI Lab Buddy breaks down complex cosmetic biochemistry into crystal-clear explanations.",
      color: "from-[#38BDF8] to-[#34D399]",
      badge: "STEP 03",
      accent: "bg-[#F0FDF4] text-[#059669] border-[#A7F3D0]"
    },
    {
      number: "4",
      icon: Trophy,
      title: "Level Up",
      subtitle: "Earn knowledge, unlock new challenges and explore deeper science.",
      description: "Collect formulation badges, advance from Apprentice to Cosmetic Scientist, and gain real-world scientific literacy that stays with you for life.",
      color: "from-[#FBBF24] to-[#F97316]",
      badge: "STEP 04",
      accent: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative Doodles and Subtle SVGs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-bold uppercase tracking-widest text-[#0B132B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>THE BEAUTY LAB EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Learn beauty differently.
          </h2>

          <p className="text-base text-[#64748B]">
            A seamless journey designed for authentic understanding, active curiosity, and zero memorization stress.
          </p>
        </div>

        {/* 4 Steps Grid with Visual Connecting Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#FFFFFF] border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl cursor-pointer ${
                  isHovered ? "border-[#94A3B8] -translate-y-1" : "border-[#E2E8F0]"
                }`}
              >
                <div className="space-y-4">
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${step.accent}`}>
                      {step.badge}
                    </span>
                    <span className="text-2xl font-black text-[#CBD5E1]">
                      0{step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} p-[2px] shadow-sm`}>
                    <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#0B132B]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-extrabold text-[#0B132B]">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-[#475569] leading-snug">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro-Progress bar on active */}
                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Interactive Phase</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#F59E0B] fill-current" />
                    <span className="font-mono text-[#0B132B] font-bold">100 XP</span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
