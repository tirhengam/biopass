"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight } from "lucide-react";

export default function Chapter3Laboratories() {
  const labs = [
    {
      id: "skin",
      emoji: "🧬",
      name: "SKIN LAB",
      tagline: "What's really happening under the surface?",
      topics: [
        "Skin barrier",
        "Hydration",
        "Sebum",
        "pH balance",
        "UV & environment",
        "Skincare science"
      ],
      pillBg: "bg-pastel-green text-ink-navy",
    },
    {
      id: "hair",
      emoji: "💇",
      name: "HAIR LAB",
      tagline: "Your hair is more complicated than it looks.",
      topics: [
        "Hair structure",
        "Shampoo science",
        "Conditioning",
        "Damage repair",
        "Oils & lipids",
        "Hair ingredients"
      ],
      pillBg: "bg-pastel-pink-card text-ink-navy",
    },
    {
      id: "perfume",
      emoji: "👃",
      name: "PERFUME LAB",
      tagline: "Can you decode a scent?",
      topics: [
        "Fragrance molecules",
        "Notes & accords",
        "Scent families",
        "Fixative science",
        "Volatility curves",
        "How perfumes are built"
      ],
      pillBg: "bg-[#BAE6FD] text-ink-navy",
    },
    {
      id: "nutrition",
      emoji: "🍊",
      name: "NUTRITION LAB",
      tagline: "What does beauty have to do with nutrition?",
      topics: [
        "Essential nutrients",
        "Skin & hair biology",
        "Clinical evidence",
        "Supplement claims",
        "Cellular turnover",
        "What research tells us"
      ],
      pillBg: "bg-[#FED7AA] text-ink-navy",
      note: "Educational STEM science only — no medical advice."
    },
  ];

  return (
    <section 
      id="laboratories" 
      className="min-h-screen lg:h-screen lg:max-h-screen bg-pastel-pink text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans"
    >
      
      {/* Top Section Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-ink-navy/15 z-10 shrink-0">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-ink-navy">
          [ 03 // FOUR WORLDS ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          ENTER A SPECIALIZED LAB
        </span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 sm:py-6 space-y-6 sm:space-y-8 z-10 shrink">
        
        {/* Headline & Subhead */}
        <div className="max-w-4xl space-y-1.5">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.04] text-ink-navy uppercase">
            Choose your laboratory.
          </h2>

          <p className="text-base sm:text-xl font-bold tracking-tight text-ink-navy/85">
            Where do you want to explore first?
          </p>
        </div>

        {/* FOUR Large Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {labs.map((lab, idx) => (
            <div
              key={lab.id}
              className="rounded-[2rem] bg-ink-navy text-white border-3 border-ink-navy p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className="space-y-3">
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl p-1.5 rounded-xl bg-white/10">{lab.emoji}</span>
                  <span className={`text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${lab.pillBg}`}>
                    WORLD 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase group-hover:text-pastel-green transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-xs font-bold text-white/80 leading-snug">
                    {lab.tagline}
                  </p>
                </div>

                {/* Explore Topics */}
                <div className="pt-2.5 border-t border-white/15 space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-white/50 block">
                    EXPLORE:
                  </span>
                  <div className="space-y-0.5 text-xs font-mono text-white/90">
                    {lab.topics.map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-pastel-green text-xs">•</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {lab.note && (
                  <p className="text-[9px] text-white/50 italic leading-tight pt-1">
                    {lab.note}
                  </p>
                )}
              </div>

              {/* Enter Button linking to BIOPASS_APP_URL */}
              <div className="pt-3 border-t border-white/15">
                <a
                  href={BIOPASS_APP_URL}
                  className="w-full py-3 rounded-full bg-pastel-green hover:bg-[#BCEECD] text-ink-navy font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  <span>ENTER →</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-[11px] font-mono font-bold text-ink-navy/70 pt-2 border-t border-ink-navy/15 z-10 shrink-0">
        <span>[ CHAPTER 03 // 4 ENTRYWAYS ]</span>
        <span className="hidden sm:inline">EVERY LAB HAS ITS OWN VIRTUAL SIMULATOR</span>
        <span>[ PAGE 03 ]</span>
      </footer>

    </section>
  );
}
