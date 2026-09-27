"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import ContactModal from "./ContactModal";

export default function FinalCtaSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative py-32 sm:py-44 bg-noir-deep text-white overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-hotpink/12 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Dramatic Return of the Hot-Pink Gerbera Cleopatra Flower */}
      <div className="absolute -bottom-20 -left-20 sm:-left-16 lg:left-0 w-[380px] sm:w-[500px] md:w-[650px] lg:w-[750px] aspect-square pointer-events-none select-none z-0">
        <div className="relative w-full h-full animate-float-delayed">
          <Image
            src="/images/gerbera-cleopatra-transparent.png"
            alt="Gerbera Cleopatra Flower Visual"
            fill
            className="object-contain filter drop-shadow-[0_20px_50px_rgba(255,0,127,0.35)] opacity-90 transition-transform duration-1000"
            sizes="(max-width: 768px) 380px, (max-width: 1200px) 650px, 750px"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-hotpink" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/80">
              Where Science Meets Beauty
            </span>
          </div>

          {/* Large Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight leading-[1.04] text-white">
            Don't choose what's popular.<br />
            <span className="text-hotpink">Choose what's right for you.</span>
          </h2>

          {/* Brand Signature */}
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black tracking-widest text-white uppercase">
              BIOPASS
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-widest text-white/60 uppercase">
              Where Science Meets Beauty.
            </div>
          </div>

          {/* Dual CTAs: Primary "TRY BIOPASS" + Secondary "CONTACT DEVELOPER" */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <a
              href={BIOPASS_APP_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-full bg-hotpink hover:bg-hotpink-vibrant text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_40px_rgba(255,0,127,0.5)] hover:shadow-[0_0_60px_rgba(255,0,127,0.8)] hover:scale-105 active:scale-95 group"
            >
              <span>TRY BIOPASS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <button
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-5 rounded-full bg-white/5 hover:bg-white/15 text-white/90 hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 border border-white/15 hover:border-white/40 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-hotpink" />
              <span>CONTACT DEVELOPER</span>
            </button>

          </div>

          {/* Small Subtext */}
          <p className="text-xs sm:text-sm text-white/50 tracking-wider font-mono uppercase pt-2">
            Personal Product Intelligence for Cosmetics & Personal Care
          </p>

        </div>
      </div>

      {/* Global Minimal Footer */}
      <footer className="mt-28 pt-8 border-t border-white/[0.08] max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white uppercase">BIOPASS</span>
          <span>© 2026. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Back to Top ↑</a>
          <a href={BIOPASS_APP_URL} className="text-hotpink hover:underline uppercase font-bold">
            Launch App ↗
          </a>
        </div>
      </footer>

      {/* Contact Developer Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

    </section>
  );
}
