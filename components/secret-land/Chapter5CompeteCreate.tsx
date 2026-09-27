"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Trophy, Star, Sparkles } from "lucide-react";

export default function Chapter5CompeteCreate() {
  const challenges = [
    {
      emoji: "🧴",
      title: "MAKE A CREAM",
      description: "Choose ingredients and build a virtual moisturizer.",
      badge: "FORMULATION",
    },
    {
      emoji: "💧",
      title: "BUILD A SERUM",
      description: "Create a formula for a fictional challenge.",
      badge: "ACTIVE STABILITY",
    },
    {
      emoji: "🎨",
      title: "CREATE YOUR PALETTE",
      description: "Use color theory to create a cosmetic palette.",
      badge: "PIGMENT OPTICS",
    },
    {
      emoji: "👃",
      title: "BUILD AN ACCORD",
      description: "Combine fragrance notes and create a scent.",
      badge: "SCENT HARMONY",
    },
  ];

  const mechanics = [
    "Weekly Challenges",
    "Points & XP",
    "Formulator Badges",
    "Lab Levels",
    "Creative Challenges",
    "Science Challenges",
  ];

  return (
    <section 
      id="compete" 
      className="min-h-screen lg:h-screen lg:max-h-screen bg-pastel-pink text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans"
    >
      
      {/* Top Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-ink-navy/15 z-10 shrink-0">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-ink-navy">
          [ 05 // COMPETE & CREATE ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          KNOWLEDGE & CREATIVITY ARENA
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-3 sm:py-6 space-y-5 sm:space-y-6 z-10 shrink">
        
        {/* Headlines */}
        <div className="space-y-2 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-ink-navy text-pastel-green text-[10px] font-mono font-black uppercase tracking-wider">
            <span>Think you've learned enough? 👀</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04] text-ink-navy uppercase">
            Now create something.
          </h2>

          <p className="text-sm sm:text-lg font-bold text-ink-navy/85 max-w-2xl leading-snug">
            Take on challenges. Build your creation. Test your knowledge.
          </p>
        </div>

        {/* 4 Challenge Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {challenges.map((c, idx) => (
            <div
              key={idx}
              className="rounded-[1.75rem] bg-ink-navy text-white p-4 sm:p-5 border-3 border-ink-navy flex flex-col justify-between space-y-3 shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl p-1 rounded-xl bg-white/10">{c.emoji}</span>
                  <span className="text-[8px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-pastel-green text-ink-navy">
                    MISSION 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-pastel-green transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[11px] font-medium text-white/80 leading-snug">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15 text-[10px] font-mono text-pastel-green font-bold">
                {c.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Join the Challenge */}
        <div className="space-y-3 max-w-4xl pt-1">
          
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-ink-navy uppercase">
              Join the Challenge.
            </h3>
            
            <p className="text-xs sm:text-sm font-bold text-ink-navy/85 max-w-xl">
              Compete through knowledge and creativity — not beauty, appearance, weight or physical characteristics.
            </p>
          </div>

          {/* Competition Mechanics Pills */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            {mechanics.map((m, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-ink-navy text-white text-[11px] font-mono font-bold uppercase tracking-wider border border-ink-navy shadow-xs"
              >
                ★ {m}
              </span>
            ))}
          </div>

          {/* Large Pastel-Green CTA Button */}
          <div className="pt-2">
            <a
              href={BIOPASS_APP_URL}
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-pastel-green hover:bg-[#BCEECD] text-ink-navy text-sm sm:text-base font-black tracking-wide uppercase transition-all duration-300 shadow-xl hover:scale-[1.02] group border-2 border-ink-navy"
            >
              <span>JOIN THE CHALLENGE →</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

      {/* Footer Area */}
      <footer className="w-full pt-3 border-t border-ink-navy/15 z-10 space-y-2 shrink-0">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono font-bold text-ink-navy">
          
          <div className="flex items-center gap-2">
            <span className="font-black uppercase">
              Learn. Experiment. Create.
            </span>
            <span className="text-ink-navy/40">•</span>
            <span className="text-ink-navy/80 font-black">
              Powered by BioPass
            </span>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-4 sm:gap-6 uppercase tracking-wider">
            <a href="#welcome" className="hover:opacity-60 transition-opacity">About</a>
            <span className="text-ink-navy/30">·</span>
            <a href="#experiment" className="hover:opacity-60 transition-opacity">Safety</a>
            <span className="text-ink-navy/30">·</span>
            <a href="#laboratories" className="hover:opacity-60 transition-opacity">Privacy</a>
            <span className="text-ink-navy/30">·</span>
            <a href={BIOPASS_APP_URL} className="hover:opacity-60 transition-opacity">Contact</a>
          </div>

        </div>

        <div className="text-[10px] font-mono text-ink-navy/60 text-center sm:text-left">
          BioPass Cosmetic Secret Land is an educational adventure platform and does not provide medical or dermatological treatment.
        </div>

      </footer>

    </section>
  );
}
