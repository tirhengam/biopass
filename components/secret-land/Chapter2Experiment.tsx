"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Beaker, Search, Lightbulb } from "lucide-react";

export default function Chapter2Experiment() {
  const pillars = [
    {
      num: "01",
      icon: Beaker,
      tag: "TEST & BREAK",
      title: "Experiment",
      description: "Change an ingredient and see what happens.",
      visualTag: "VIRTUAL BEAKERS & EMULSIONS",
      cardBg: "bg-ink-navy text-white border-ink-navy",
      badgeColor: "bg-pastel-pink text-ink-navy",
    },
    {
      num: "02",
      icon: Search,
      tag: "DEEP DECODE",
      title: "Discover",
      description: "Explore what's happening behind the product.",
      visualTag: "INCI DECONSTRUCTION & MOLECULES",
      cardBg: "bg-ink-navy text-white border-ink-navy",
      badgeColor: "bg-pastel-green text-ink-navy",
    },
    {
      num: "03",
      icon: Lightbulb,
      tag: "INTUITIVE LOGIC",
      title: "Understand",
      description: "Figure out WHY it works.",
      visualTag: "DERMAL BIOLOGY & LIPIDS",
      cardBg: "bg-ink-navy text-white border-ink-navy",
      badgeColor: "bg-pastel-pink text-ink-navy",
    },
  ];

  return (
    <section 
      id="experiment" 
      className="min-h-screen lg:h-screen lg:max-h-screen bg-pastel-green text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans"
    >
      
      {/* Top Section Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-ink-navy">
          [ 02 // HANDS-ON SCIENCE ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          BEAUTY SCIENCE THROUGH EXPERIMENTATION
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-3 sm:py-6 space-y-6 sm:space-y-8 z-10 shrink">
        
        {/* Headline & Supporting Copy */}
        <div className="max-w-4xl space-y-2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04] text-ink-navy uppercase">
            Learn the science<br />through experiments.
          </h2>

          <p className="text-base sm:text-xl font-bold text-ink-navy/85 max-w-2xl leading-relaxed">
            Don't just read about it. Test it. Break it. Change it. See what happens.
          </p>
        </div>

        {/* 3 Visual Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`group relative rounded-[2rem] p-6 sm:p-8 border-3 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${item.cardBg}`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                  <span className="font-mono text-xl font-black text-white/40 group-hover:text-pastel-green transition-colors">
                    #{item.num}
                  </span>
                </div>

                {/* Center Visual */}
                <div className="space-y-3 py-1">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-pastel-green shadow-inner group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-pastel-pink transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span className="truncate">{item.visualTag}</span>
                  <span className="text-pastel-green font-bold">↗</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-pastel-pink hover:bg-[#FFBFD7] text-ink-navy text-sm sm:text-base font-black tracking-wide uppercase transition-all duration-300 shadow-lg hover:scale-[1.02] group border-2 border-ink-navy"
          >
            <span>LET'S EXPERIMENT →</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-[11px] font-mono font-bold text-ink-navy/70 pt-2 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <span>[ 02 // TEST • BREAK • CHANGE ]</span>
        <span className="hidden sm:inline">DISCOVER THE FORMULATION SECRET WORLD</span>
        <span>[ CHAPTER 02 ]</span>
      </footer>

    </section>
  );
}
