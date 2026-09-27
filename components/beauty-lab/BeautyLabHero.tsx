"use client";

import React from "react";
import { ArrowRight, Sparkles, Play, Beaker, Atom, Droplets, Heart } from "lucide-react";

interface BeautyLabHeroProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export default function BeautyLabHero({ onExploreClick, onHowItWorksClick }: BeautyLabHeroProps) {
  return (
    <section id="hero" className="relative pt-12 pb-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFD]">
      
      {/* Background Soft Pastel Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#EEF2FF] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-[28rem] h-[28rem] bg-[#FFF1F2] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#ECFDF5] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm text-xs font-bold tracking-wider text-[#0B132B]">
              <span className="flex h-2 w-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="text-[#64748B] uppercase tracking-widest text-[11px]">INTERACTIVE COSMETIC SCIENCE</span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="text-[#8B5CF6] font-extrabold">FOR CURIOUS MINDS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0B132B] tracking-tight leading-[1.08]">
                Welcome to the{" "}
                <span className="bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent underline decoration-[#FED7AA]/60 decoration-wavy decoration-2">
                  Beauty Lab
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#334155] tracking-tight">
                Experiment with beauty. Discover the science.
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Explore ingredients, formulations, skin, hair, fragrance, color and more through interactive games, virtual experiments and AI-powered learning.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316] hover:opacity-95 text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Exploring →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onHowItWorksClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B132B] text-xs font-bold tracking-wider uppercase shadow-sm hover:border-[#CBD5E1] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#6366F1] fill-current" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Key Value Micro-Stats */}
            <div className="pt-6 border-t border-[#E2E8F0]/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="font-semibold text-[#0B132B]">8 Interactive Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                <span className="font-semibold text-[#0B132B]">Virtual Emulsion Simulators</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
                <span className="font-semibold text-[#0B132B]">AI Lab Buddy Tutor</span>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Hero Visual Combining Beauty & Science */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container Card */}
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-gradient-to-tr from-[#F8FAFC] via-[#FFFFFF] to-[#EFF6FF] border border-[#E2E8F0] p-6 shadow-xl overflow-hidden flex flex-col justify-between">
              
              {/* Floating Hand-Drawn Annotation 1 (Top-Right) */}
              <div className="absolute top-4 right-4 z-20 transform rotate-2 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#FDA4AF]/40 shadow-sm text-[11px] font-medium text-[#BE123C] flex items-center gap-1.5 animate-bounce-subtle">
                <span>Curiosity looks good on you</span>
                <Heart className="w-3 h-3 text-[#F43F5E] fill-current inline" />
              </div>

              {/* Floating Hand-Drawn Annotation 2 (Bottom-Left) */}
              <div className="absolute bottom-6 left-4 z-20 transform -rotate-2 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-[#C4B5FD]/50 shadow-sm text-[11px] font-medium text-[#6D28D9] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                <span>Science meets self-care</span>
              </div>

              {/* Floating Hand-Drawn Annotation 3 (Top-Left) */}
              <div className="absolute top-6 left-4 z-20 bg-[#FFFFFF]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#86EFAC]/40 shadow-sm text-[10px] font-bold text-[#047857] uppercase tracking-wider">
                Learn • Play • Explore
              </div>

              {/* Central Visual Composition: Glass Petri Dish & Cosmetic Emulsion Textures */}
              <div className="relative my-auto flex flex-col items-center justify-center text-center p-6">
                
                {/* Outer Glass Petri Dish Ring */}
                <div className="relative w-60 h-60 rounded-full border-4 border-[#E2E8F0]/80 bg-gradient-to-b from-[#FFFFFF]/90 via-[#F8FAFC]/70 to-[#EEF2FF]/60 shadow-inner flex items-center justify-center p-4">
                  
                  {/* Internal Liquid / Texture Swirl */}
                  <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-[#FDA4AF]/20 via-[#C4B5FD]/20 to-[#67E8F9]/20 border border-white/60 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                    
                    {/* Floating Cosmetic Droplets & Molecules */}
                    <div className="absolute top-6 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-[#F472B6] to-[#FDA4AF] opacity-80 blur-[1px] shadow-sm animate-pulse" />
                    <div className="absolute bottom-8 left-8 w-8 h-8 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] opacity-70 blur-[1px] shadow-sm" />
                    <div className="absolute top-16 left-6 w-4 h-4 rounded-full bg-[#34D399] opacity-70" />

                    {/* Central Molecular & Lab Icon Badge */}
                    <div className="w-24 h-24 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-md flex flex-col items-center justify-center p-2 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                      <Atom className="w-10 h-10 text-[#6366F1] animate-spin-slow" />
                      <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-[#0B132B] mt-1">
                        H2O + LIPID
                      </span>
                    </div>

                  </div>

                </div>

                {/* Subtext under petri dish */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                  <Droplets className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Phase Emulsion Simulation #04</span>
                </div>

              </div>

              {/* Micro-Annotation Floating Doodle Arrow */}
              <div className="text-center pb-1">
                <span className="text-[10px] text-[#94A3B8] italic">
                  “Watch water & lipid bilayers self-assemble in real-time”
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
