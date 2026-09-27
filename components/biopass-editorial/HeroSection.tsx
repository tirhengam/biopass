"use client";

import React from "react";
import Image from "next/image";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-noir-deep text-white flex flex-col justify-center pt-28 pb-16 sm:py-32 overflow-hidden">
      
      {/* Background Subtle Gradient & Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-hotpink/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-hotpink/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Dramatic Gerbera Cleopatra Flower Visual Composition (Entering from Edge & Cropped for Depth) */}
      <div className="absolute -top-16 -right-24 sm:-right-20 lg:-right-10 xl:right-4 w-[360px] sm:w-[480px] md:w-[620px] lg:w-[720px] xl:w-[820px] aspect-square pointer-events-none select-none z-0">
        <div className="relative w-full h-full animate-float-slow">
          <Image
            src="/images/gerbera-cleopatra-transparent.png"
            alt="Hot-Pink Gerbera Cleopatra Beauty-Tech Motif"
            fill
            priority
            className="object-contain filter drop-shadow-[0_20px_50px_rgba(255,0,127,0.35)] opacity-95 transition-transform duration-1000 hover:scale-105"
            sizes="(max-width: 768px) 360px, (max-width: 1200px) 620px, 820px"
          />
        </div>
      </div>

      {/* Floating subtle petal accents */}
      <div className="absolute top-1/3 right-1/4 w-3.5 h-3.5 rounded-full bg-hotpink/40 blur-[2px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-hotpink/50 blur-[1px] animate-pulse pointer-events-none" />

      {/* Main Content Container (Not placed in cards - pure editorial layout) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-hotpink" />
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-white/80 uppercase">
              Where Science Meets Beauty
            </span>
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-tight leading-[1.04] text-white">
            Buying the wrong products?<br />
            <span className="text-hotpink underline decoration-hotpink/40 decoration-wavy decoration-2 underline-offset-8">
              No more!
            </span>
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white/90">
            Find what’s right for you.
          </h2>

          {/* Body Copy */}
          <p className="text-base sm:text-xl text-white/70 max-w-2xl font-normal leading-relaxed">
            BioPass uses AI to connect you, your products, their ingredients and science — helping you discover cosmetics that match your needs, preferences and routine.
          </p>

          {/* CTA & Verticals */}
          <div className="pt-2 sm:pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={BIOPASS_APP_URL}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-hotpink hover:bg-hotpink-vibrant text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(255,0,127,0.45)] hover:shadow-[0_0_50px_rgba(255,0,127,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>TRY BIOPASS</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Secondary Small Text */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/50 tracking-wider">
              <span>Skin Care</span>
              <span className="text-hotpink/80">·</span>
              <span>Hair Care</span>
              <span className="text-hotpink/80">·</span>
              <span>Perfume</span>
              <span className="text-hotpink/80">·</span>
              <span>Supplements</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
