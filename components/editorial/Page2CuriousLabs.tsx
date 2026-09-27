"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight } from "lucide-react";

export default function Page2CuriousLabs() {
  const labs = [
    {
      num: "01",
      name: "INGREDIENTS",
      question: "What's actually in this stuff?",
      category: "INCI DECODER",
    },
    {
      num: "02",
      name: "FORMULAS",
      question: "How does a cream become a cream?",
      category: "EMULSION CHEMISTRY",
    },
    {
      num: "03",
      name: "SKIN",
      question: "What's your skin barrier doing?",
      category: "DERMAL BIOLOGY",
    },
    {
      num: "04",
      name: "HAIR",
      question: "Why does shampoo work?",
      category: "CUTICLE & CORTEX",
    },
    {
      num: "05",
      name: "FRAGRANCE",
      question: "Can your nose solve this?",
      category: "OLFACTIVE NOTES",
    },
    {
      num: "06",
      name: "COLOR",
      question: "Why do some colors work together?",
      category: "PIGMENT THEORY",
    },
    {
      num: "07",
      name: "CLAIMS",
      question: "“Clinically proven.” But proven how?",
      category: "EVIDENCE & LITERACY",
    },
    {
      num: "08",
      name: "PACKAGING",
      question: "What happens after you throw it away?",
      category: "CIRCULAR MATERIALS",
    },
  ];

  return (
    <section 
      id="labs" 
      className="min-h-screen bg-acid-lime text-ink-navy flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      
      {/* Top Section Eyebrow & Number */}
      <div className="w-full flex items-center justify-between pb-8 border-b-2 border-ink-navy/20 z-10">
        <span className="text-xs font-mono font-black uppercase tracking-ultra text-ink-navy">
          [ 02 // CURATION ]
        </span>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-navy/70">
          SELECT A LAB TO ENTER THE APP ↗
        </span>
      </div>

      {/* Main Container */}
      <div className="my-auto py-8 sm:py-12 space-y-12 z-10">
        
        {/* Large Headline */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tightest leading-[0.94] text-ink-navy uppercase">
            What are you<br />curious about?
          </h2>
        </div>

        {/* Typographic Magazine Grid Layout (NOT a corporate 4x2 card grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 sm:gap-y-8 pt-4">
          {labs.map((lab) => (
            <a
              key={lab.num}
              href={BIOPASS_APP_URL}
              className="group block border-b-2 border-ink-navy/25 pb-4 hover:border-ink-navy transition-all duration-300"
            >
              <div className="flex items-baseline justify-between gap-4">
                
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm sm:text-base font-mono font-black text-ink-navy/60 group-hover:text-ink-navy transition-colors">
                      {lab.num} —
                    </span>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-ink-navy group-hover:text-editorial-pink transition-colors">
                      {lab.name}
                    </span>
                  </div>

                  <p className="text-sm sm:text-lg font-bold text-ink-navy/80 group-hover:text-ink-navy transition-colors pl-8 sm:pl-10">
                    {lab.question}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border-2 border-ink-navy/20 group-hover:border-ink-navy group-hover:bg-ink-navy group-hover:text-acid-lime flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Bottom Subtext */}
      <footer className="w-full flex items-center justify-between text-xs font-mono font-bold text-ink-navy/70 pt-8 border-t-2 border-ink-navy/20 z-10">
        <span>[ EIGHT VIRTUAL LABS ]</span>
        <span className="hidden sm:inline">CLICK ANY LAB TO START EXPERIMENTING</span>
        <span>[ PAGE 02 ]</span>
      </footer>

    </section>
  );
}
