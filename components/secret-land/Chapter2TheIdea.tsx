"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Sparkles, Beaker, Search, Palette } from "lucide-react";

export default function Chapter2TheIdea() {
  const words = [
    {
      word: "EXPERIMENT",
      emoji: "🧪",
      icon: Beaker,
      tag: "HANDS-ON",
      subtext: "Swap oils, adjust pH, tweak emulsifiers and observe live molecular reactions in real time.",
      bgCard: "bg-white",
      borderColor: "border-ink-navy",
    },
    {
      word: "DISCOVER",
      emoji: "🔬",
      icon: Search,
      tag: "DECODE TRUTH",
      subtext: "Look beneath the marketing buzzwords to understand real lipid bilayers, antioxidants, and active botanicals.",
      bgCard: "bg-[#F3E8FF]",
      borderColor: "border-ink-navy",
    },
    {
      word: "CREATE",
      emoji: "✨",
      icon: Palette,
      tag: "YOUR FORMULA",
      subtext: "Mix custom shades, compose olfactive fragrance accords, and craft your personal barrier protection products.",
      bgCard: "bg-white",
      borderColor: "border-ink-navy",
    },
  ];

  return (
    <section
      id="idea"
      className="min-h-screen bg-pastel-lavender text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden font-space"
      style={{ backgroundColor: "#EAE0FF" }}
    >
      {/* Top Header / Chapter Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0 font-space">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy">
          [ PAGE 2 // THE IDEA 💜 ]
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy/70 hidden sm:inline">
          COSMETIC SCIENCE THROUGH PLAY
        </span>
      </div>

      {/* Main Center Body */}
      <div className="my-auto py-8 sm:py-12 max-w-5xl mx-auto w-full space-y-10 z-10">
        
        {/* Headline */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border-2 border-ink-navy text-xs font-bold uppercase text-ink-navy shadow-sm font-space">
            <Sparkles className="w-3.5 h-3.5 text-pastel-pink" />
            <span>LEARNING REDEFINED</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-navy leading-tight">
            Learn science by playing with it
          </h2>

          <p className="font-space text-base sm:text-lg font-normal text-ink-navy/80 max-w-xl mx-auto">
            Forget boring textbooks. Enter an interactive cosmetic playground where every reaction teaches you how beauty truly works.
          </p>
        </div>

        {/* Three Large Words Cards: EXPERIMENT 🧪, DISCOVER 🔬, CREATE ✨ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {words.map((item) => (
            <div
              key={item.word}
              className={`rounded-3xl p-6 sm:p-8 border-3 ${item.borderColor} ${item.bgCard} shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold font-space uppercase px-2.5 py-0.5 rounded-full bg-ink-navy text-pastel-green">
                  {item.tag}
                </span>
                <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-300">
                  {item.emoji}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-fredoka text-3xl sm:text-4xl font-bold tracking-tight text-ink-navy group-hover:text-purple-700 transition-colors">
                  {item.word}
                </h3>
                <p className="font-space text-xs sm:text-sm font-normal text-ink-navy/80 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-ink-navy/10 flex items-center justify-between text-xs font-bold font-space text-ink-navy">
                <span>INTERACTIVE LAB</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA Button: START EXPLORING → */}
        <div className="text-center pt-4 font-space">
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-ink-navy hover:bg-black text-pastel-lavender font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 border-2 border-ink-navy group font-space"
          >
            <span>START EXPLORING</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform text-pastel-green" />
          </a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-full flex items-center justify-between text-xs font-bold text-ink-navy/60 pt-3 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <span>BIOPASS // THE IDEA</span>
        <a href="#compete" className="hover:text-ink-navy font-black transition-colors">
          CONTINUE TO CREATE & COMPETE ↓
        </a>
        <span>CHAPTER 02</span>
      </div>
    </section>
  );
}
