"use client";

import React, { useState } from "react";
import { User, Sparkles, Layers, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { BIOPASS_APP_URL } from "@/config/appConfig";

export default function MeetBiopassSection() {
  const streams = [
    {
      id: "you",
      title: "YOU",
      tag: "BIOLOGICAL PROFILE",
      desc: "Your characteristics, needs, goals and preferences.",
      icon: User,
      color: "border-hotpink/50 text-hotpink bg-hotpink/10",
      accent: "#FF007F",
    },
    {
      id: "products",
      title: "YOUR PRODUCTS",
      tag: "INCI & FORMULATION",
      desc: "Ingredients, formulations and product characteristics.",
      icon: Layers,
      color: "border-white/20 text-white bg-white/5",
      accent: "#FFFFFF",
    },
    {
      id: "routine",
      title: "YOUR ROUTINE",
      tag: "COMPATIBILITY MATRIX",
      desc: "What you already use and how products fit together.",
      icon: Sparkles,
      color: "border-white/20 text-white bg-white/5",
      accent: "#FFA0D2",
    },
    {
      id: "science",
      title: "THE SCIENCE",
      tag: "EVIDENCE DATABASE",
      desc: "Scientific evidence and evolving cosmetic knowledge.",
      icon: FileText,
      color: "border-hotpink/40 text-hotpink bg-hotpink/10",
      accent: "#FF007F",
    },
  ];

  return (
    <section id="meet-biopass" className="relative py-28 sm:py-36 bg-noir-deep text-white overflow-hidden">
      
      {/* Background radial glow behind central intelligence layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hotpink/12 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 sm:mb-28">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-hotpink block">
            03 // THE INTELLIGENCE ENGINE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            Meet your personal product intelligence.
          </h2>
          <p className="text-base sm:text-xl text-white/70 font-normal leading-relaxed">
            BioPass brings together information that normally lives separately and turns it into something useful for you.
          </p>
        </div>

        {/* 4 Streams Converging into Central BioPass Layer */}
        <div className="relative max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 2 Streams: YOU & YOUR PRODUCTS */}
            <div className="lg:col-span-4 space-y-6">
              {streams.slice(0, 2).map((stream) => {
                const Icon = stream.icon;
                return (
                  <div
                    key={stream.id}
                    className="p-6 rounded-3xl bg-noir-card border border-white/[0.08] hover:border-hotpink/40 transition-all duration-300 space-y-2 group shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 group-hover:text-hotpink transition-colors">
                        {stream.tag}
                      </span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${stream.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {stream.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-normal leading-relaxed">
                      {stream.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Central BioPass Intelligence Nexus & Revelation (THE STRONGEST VISUAL MOMENT) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 sm:py-0">
              
              <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#14141E] to-[#0A0A0F] border-2 border-hotpink/60 shadow-[0_0_60px_rgba(255,0,127,0.35)] text-center space-y-4 group hover:scale-[1.03] transition-all duration-500 w-full max-w-[340px]">
                
                {/* Glowing Aura Ring */}
                <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-hotpink via-hotpink-magenta to-hotpink opacity-30 blur-md -z-10 group-hover:opacity-60 transition-opacity" />

                <div className="w-12 h-12 rounded-full bg-hotpink/20 border border-hotpink flex items-center justify-center text-hotpink shadow-[0_0_15px_#FF007F]">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-hotpink uppercase">
                    BIOPASS CORE AI
                  </span>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                    94%
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider uppercase text-white/80">
                    PERSONAL MATCH
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-white/50 border-t border-white/10 w-full">
                  Synthesized across 4 intelligence streams
                </div>

              </div>

            </div>

            {/* Right 2 Streams: YOUR ROUTINE & THE SCIENCE */}
            <div className="lg:col-span-4 space-y-6">
              {streams.slice(2, 4).map((stream) => {
                const Icon = stream.icon;
                return (
                  <div
                    key={stream.id}
                    className="p-6 rounded-3xl bg-noir-card border border-white/[0.08] hover:border-hotpink/40 transition-all duration-300 space-y-2 group shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-white/40 group-hover:text-hotpink transition-colors">
                        {stream.tag}
                      </span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${stream.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {stream.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-normal leading-relaxed">
                      {stream.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Clarifying Statement */}
          <div className="mt-16 text-center">
            <a
              href={BIOPASS_APP_URL}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-hotpink hover:text-white transition-colors group"
            >
              <span>Explore your personal profile matches</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
