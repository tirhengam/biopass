"use client";

import React from "react";
import { BEAUTY_LABS_DATA, LabItem } from "@/data/beautyLabsData";
import { ArrowRight, Sparkles, Beaker, Play, Layers } from "lucide-react";

interface TheLabsGridProps {
  onSelectLab: (lab: LabItem) => void;
}

export default function TheLabsGrid({ onSelectLab }: TheLabsGridProps) {
  return (
    <section id="labs" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#E2E8F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPLORE THE BEAUTY LAB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B132B] tracking-tight">
            Eight labs. Endless curiosity.
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Choose a lab, play a challenge and discover the science hiding inside everyday beauty products.
          </p>
        </div>

        {/* 4 × 2 Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEAUTY_LABS_DATA.map((lab) => (
            <div
              key={lab.id}
              onClick={() => onSelectLab(lab)}
              className={`group relative rounded-3xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer bg-[#FFFFFF] hover:border-[#CBD5E1] hover:-translate-y-1 overflow-hidden`}
            >
              {/* Subtle top card ambient tone */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${lab.colors.gradient}`} />

              <div className="space-y-4">
                {/* Header: Emoji & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm border ${lab.colors.border} ${lab.colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <span>{lab.emoji}</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${lab.colors.badgeBg} ${lab.colors.badgeText}`}>
                    {lab.tag}
                  </span>
                </div>

                {/* Lab Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-[#0B132B] group-hover:text-[#6366F1] transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                {/* Game Pill */}
                <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 text-[#6366F1] fill-current shrink-0" />
                  <div className="text-[11px] font-semibold text-[#0F172A] truncate">
                    Game: <span className="font-bold">{lab.gameTitle}</span>
                  </div>
                </div>

                {/* Visual Summary */}
                <p className="text-[11px] text-[#94A3B8] italic leading-tight">
                  {lab.visualSummary}
                </p>
              </div>

              {/* Enter Lab CTA */}
              <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#0B132B] group-hover:text-[#6366F1] transition-colors">
                <span>Enter Lab</span>
                <div className="w-7 h-7 rounded-full bg-[#F1F5F9] group-hover:bg-[#EDE9FE] group-hover:text-[#6366F1] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
