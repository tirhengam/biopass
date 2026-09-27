"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Trophy, Award, Zap, Sparkles } from "lucide-react";

export default function Chapter3CreateCompete() {
  const challenges = [
    {
      id: "cream",
      num: "01",
      title: "Make a Cream",
      emoji: "🧴",
      category: "EMULSION LAB",
      desc: "Balance water and oil phases, select biomimetic lipid emulsifiers, and stabilize smooth velvety texture.",
      reward: "+150 XP",
    },
    {
      id: "serum",
      num: "02",
      title: "Build a Serum",
      emoji: "💧",
      category: "ACTIVE CONCENTRATE",
      desc: "Formulate with 5% Niacinamide, multi-weight Hyaluronic Acid, and botanical antioxidants.",
      reward: "+200 XP",
    },
    {
      id: "palette",
      num: "03",
      title: "Create Your Palette",
      emoji: "🎨",
      category: "COLOR LAB",
      desc: "Compound iron oxides, micas, and pigments to match custom skin undertones and velvety swatches.",
      reward: "+180 XP",
    },
    {
      id: "fragrance",
      num: "04",
      title: "Build a Fragrance Accord",
      emoji: "🌸",
      category: "PERFUME LAB",
      desc: "Layer bergamot top notes, rose heart absolutes, and sandalwood base fixatives into harmonious scent.",
      reward: "+250 XP",
    },
    {
      id: "formula",
      num: "05",
      title: "Solve a Formula",
      emoji: "🧪",
      category: "LAB DETECTIVE",
      desc: "Diagnose why a mystery emulsion broke. Fix phase ratios, adjust pH, and save the formulation.",
      reward: "+300 XP",
    },
    {
      id: "weekly",
      num: "06",
      title: "Weekly Challenge",
      emoji: "⚡",
      category: "GLOBAL QUEST",
      desc: "Compete against teenage formulators worldwide in this week's rapid Barrier Shield tournament.",
      reward: "+500 XP & BADGE",
      isHighlight: true,
    },
  ];

  return (
    <section
      id="compete"
      className="min-h-screen bg-pastel-green text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden font-space"
      style={{ backgroundColor: "#D2F5DC" }}
    >
      {/* Top Header / Chapter Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0 font-space">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy">
          [ PAGE 3 // CREATE & COMPETE 💚 ]
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy/70 hidden sm:inline">
          TEST YOUR SKILLS • EARN BADGES
        </span>
      </div>

      {/* Main Center Body */}
      <div className="my-auto py-8 sm:py-10 max-w-6xl mx-auto w-full space-y-8 z-10 font-space">
        
        {/* Section Headline */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border-2 border-ink-navy text-xs font-bold uppercase text-ink-navy shadow-sm font-space">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>BIO-ARENA CHALLENGES</span>
          </div>

          <h2 className="font-fredoka text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-navy leading-tight">
            Learned it? Now make something
          </h2>

          <p className="font-space text-base sm:text-lg font-normal text-ink-navy/80 max-w-2xl mx-auto">
            Put your chemistry knowledge to work. Pick a challenge, craft your own formulation, and climb the ranks.
          </p>
        </div>

        {/* 6 Challenge Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-5 sm:p-6 border-3 border-ink-navy bg-white shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group ${
                item.isHighlight ? "ring-4 ring-ink-navy/20 bg-[#F6FFF8]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-space font-bold uppercase px-2 py-0.5 rounded-full bg-pastel-pink text-ink-navy border border-ink-navy/20">
                  {item.category}
                </span>
                <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-200">
                  {item.emoji}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-space text-xs font-bold text-ink-navy/40">#{item.num}</span>
                  <h3 className="font-fredoka text-xl sm:text-2xl font-bold text-ink-navy tracking-tight group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="font-space text-xs sm:text-sm text-ink-navy/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-ink-navy/10 flex items-center justify-between font-space">
                <span className="text-[11px] font-bold uppercase text-ink-navy bg-pastel-green px-2 py-0.5 rounded-md border border-ink-navy/20 font-space">
                  {item.reward}
                </span>
                <a
                  href={BIOPASS_APP_URL}
                  className="text-xs font-bold text-ink-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform font-space"
                >
                  <span>PLAY</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rewards Section: Points · Badges · Levels */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white/90 border-3 border-ink-navy shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 font-space">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-ink-navy flex items-center justify-center text-pastel-green shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-space font-bold uppercase text-ink-navy/60 block">
                YOUR SCIENTIFIC CAREER
              </span>
              <span className="font-fredoka text-xl sm:text-2xl font-bold uppercase tracking-wide text-ink-navy">
                Points · Badges · Levels
              </span>
            </div>
          </div>

          {/* Badges preview */}
          <div className="flex items-center gap-2 text-xs font-bold font-space">
            <span className="px-3 py-1.5 rounded-full bg-pastel-pink border-2 border-ink-navy flex items-center gap-1">
              <span>🌟</span>
              <span>1,250 XP</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-pastel-lavender border-2 border-ink-navy flex items-center gap-1">
              <span>🛡️</span>
              <span>Barrier Master</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-pastel-green border-2 border-ink-navy flex items-center gap-1">
              <span>⚡</span>
              <span>Level 4 Alchemist</span>
            </span>
          </div>
        </div>

        {/* CTA Button: JOIN A CHALLENGE → */}
        <div className="text-center pt-2 font-space">
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-ink-navy hover:bg-black text-pastel-green font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 border-2 border-ink-navy group font-space"
          >
            <span>JOIN A CHALLENGE</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform text-white" />
          </a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-full flex items-center justify-between text-xs font-bold text-ink-navy/60 pt-3 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <span>BIOPASS // CREATE & COMPETE</span>
        <a href="#about" className="hover:text-ink-navy font-black transition-colors">
          DISCOVER MISSION, VISION & TEAM ↓
        </a>
        <span>CHAPTER 03</span>
      </div>
    </section>
  );
}
