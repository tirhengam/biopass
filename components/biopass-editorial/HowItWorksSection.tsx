"use client";

import React from "react";
import { UserCheck, QrCode, Target, HelpCircle, ArrowRight } from "lucide-react";
import { BIOPASS_APP_URL } from "@/config/appConfig";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "TELL US ABOUT YOU",
      desc: "Build your evolving BioPass profile.",
      sub: "Answer a few intuitive questions regarding your skin type, climate, allergies, and daily habits.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "EXPLORE OR SCAN",
      desc: "Search for a product or scan something you find in a store.",
      sub: "Type any cosmetic brand or point your camera at an INCI barcode in real time.",
      icon: QrCode,
    },
    {
      num: "03",
      title: "DISCOVER YOUR MATCH",
      desc: "See how well it fits your individual needs.",
      sub: "Instantly receive a clear personal match percentage calibrated to your unique biology.",
      icon: Target,
    },
    {
      num: "04",
      title: "UNDERSTAND WHY",
      desc: "See the reasons, compatibility and science behind the match.",
      sub: "Unlock transparent ingredient synergies, potential conflicts, and dermatological evidence.",
      icon: HelpCircle,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-noir-deep text-white overflow-hidden">
      
      {/* Background Micro Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-hotpink/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-20 sm:mb-28">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            05 // THE JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            From curiosity to clarity.
          </h2>
          <p className="text-base sm:text-xl text-white/70 font-normal leading-relaxed">
            Four simple, frictionless steps to absolute confidence in every drop and formulation you apply.
          </p>
        </div>

        {/* 4 Step Horizontal / Grid Layout (Minimal, not heavy cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="space-y-4 relative group">
                
                {/* Step Number & Line */}
                <div className="flex items-center justify-between border-b border-white/[0.12] pb-3">
                  <span className="text-sm font-mono font-bold text-hotpink">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-hotpink group-hover:border-hotpink transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-black tracking-wider uppercase text-white group-hover:text-hotpink transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-white/90 leading-snug">
                    {step.desc}
                  </p>
                  <p className="text-xs text-white/50 leading-relaxed font-normal pt-1">
                    {step.sub}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* CTA link */}
        <div className="mt-16 text-center pt-8 border-t border-white/[0.06]">
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-white hover:text-hotpink transition-colors group"
          >
            <span>Start with step 01 — Build your BioPass profile</span>
            <ArrowRight className="w-4 h-4 text-hotpink group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>

    </section>
  );
}
