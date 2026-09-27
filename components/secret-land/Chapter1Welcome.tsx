"use client";

import React, { useState } from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { Dna, ArrowRight } from "lucide-react";
import SpinTheLabWheel from "./SpinTheLabWheel";
import MissionVisionTeamModal from "./MissionVisionTeamModal";

export default function Chapter1Welcome() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<"mission" | "vision" | "team">("mission");

  const openModal = (tab: "mission" | "vision" | "team") => {
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <section 
      id="welcome" 
      className="w-full h-screen max-h-screen bg-pastel-pink text-ink-navy flex flex-col justify-between p-3 sm:p-5 lg:p-6 relative overflow-hidden font-space"
    >
      
      {/* 1. TOP HEADER */}
      <header className="w-full flex items-center justify-between pb-2 border-b border-ink-navy/15 z-20 shrink-0 font-space">
        
        {/* Left: BioPass + DNA-shaped logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-ink-navy flex items-center justify-center text-pastel-green shadow-sm">
            <Dna className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-fredoka font-bold text-lg sm:text-2xl tracking-tight leading-none text-ink-navy">
              BioPass
            </span>
            <span className="font-space text-[9px] sm:text-[10px] font-bold tracking-wider text-ink-navy/70 uppercase">
              Cosmetic Secret Land
            </span>
          </div>
        </div>

        {/* Center: Navigation (Mission | Vision | Team) */}
        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-navy font-space">
          <button 
            onClick={() => openModal("mission")} 
            className="hover:text-black hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Mission
          </button>
          <span className="text-ink-navy/30">|</span>
          <button 
            onClick={() => openModal("vision")} 
            className="hover:text-black hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Vision
          </button>
          <span className="text-ink-navy/30">|</span>
          <button 
            onClick={() => openModal("team")} 
            className="hover:text-black hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Team
          </button>
        </nav>

        {/* Right: Primary Button (ENTER APP →) */}
        <div className="flex items-center font-space">
          <a 
            href={BIOPASS_APP_URL}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-ink-navy hover:bg-black text-pastel-green font-bold tracking-wider text-xs sm:text-sm uppercase transition-all shadow-md hover:scale-105 border-2 border-ink-navy flex items-center gap-1.5"
          >
            <span>ENTER APP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. MAIN CENTERPIECE BODY (Fits in 1 screen) */}
      <div className="my-auto py-1 sm:py-2 flex flex-col items-center justify-center text-center z-10 shrink">
        
        {/* Intro Headlines */}
        <div className="space-y-1 max-w-2xl mx-auto mb-2 sm:mb-3">
          <h1 className="font-fredoka text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-ink-navy">
            Welcome to the Cosmetic Secret Land.
          </h1>
          <h2 className="font-fredoka text-base sm:text-xl lg:text-2xl font-medium text-ink-navy/80">
            Ready for your next adventure?
          </h2>
        </div>

        {/* 3. CENTER INTERACTIVE SPINNING WHEEL */}
        <div className="w-full">
          <SpinTheLabWheel />
        </div>

      </div>

      {/* 4. BOTTOM ACCENT FOOTER BAR */}
      <footer className="w-full flex items-center justify-between text-[10px] sm:text-xs font-bold text-ink-navy/60 pt-2 border-t border-ink-navy/15 z-10 shrink-0 font-space">
        <span>[ PAGE 1 // SPIN THE LAB 🩷 ]</span>
        <a href="#idea" className="hover:text-ink-navy transition-colors font-bold flex items-center gap-1">
          <span>SCROLL FOR CHAPTER 2</span>
          <span>↓</span>
        </a>
        <span>EST. BIOPASS LABS</span>
      </footer>

      {/* Modal for Mission | Vision | Team */}
      <MissionVisionTeamModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={modalTab}
      />

    </section>
  );
}
