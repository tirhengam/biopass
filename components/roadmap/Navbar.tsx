"use client";

import React, { useState } from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  activeSection: number;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section 4 is yellow/warm cream (dark text); Sections 1, 2, 3, 5, 6 are rich colorful backgrounds (white text)
  const isLightSection = activeSection === 4;

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-500">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-3 transition-all duration-500 flex items-center justify-between border ${
          isLightSection
            ? "bg-white/80 border-stone-900/10 text-[#1B0E33] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-[#1B0E33]/70 border-white/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        }`}
      >
        {/* Left: Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group text-left"
        >
          <span className="text-lg sm:text-xl font-black tracking-[0.2em] uppercase font-mono">
            BIOPASS
          </span>
          <span className="w-2 h-2 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        </button>

        {/* Center: Minimal Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase font-semibold">
          <button
            onClick={() => scrollTo("section-start-with-you")}
            className={`transition-colors duration-300 ${
              isLightSection
                ? "text-stone-700 hover:text-stone-950"
                : "text-white/80 hover:text-white"
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("section-calendar")}
            className={`transition-colors duration-300 ${
              isLightSection
                ? "text-stone-700 hover:text-stone-950"
                : "text-white/80 hover:text-white"
            }`}
          >
            Your Calendar
          </button>
          <button
            onClick={() => scrollTo("section-today")}
            className={`transition-colors duration-300 ${
              isLightSection
                ? "text-stone-700 hover:text-stone-950"
                : "text-white/80 hover:text-white"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => scrollTo("section-adapt")}
            className={`transition-colors duration-300 ${
              isLightSection
                ? "text-stone-700 hover:text-stone-950"
                : "text-white/80 hover:text-white"
            }`}
          >
            Adapt &amp; Learn
          </button>
        </nav>

        {/* Right: Primary Action Button — ALWAYS "TRY THE DEMO" */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BIOPASS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 shadow-md flex items-center gap-2 group ${
              isLightSection
                ? "bg-[#1B0E33] text-white hover:bg-black hover:shadow-lg"
                : "bg-yellow-400 text-stone-950 hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
            }`}
          >
            <span>TRY THE DEMO</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BIOPASS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold ${
              isLightSection ? "bg-[#1B0E33] text-white" : "bg-yellow-400 text-stone-950"
            }`}
          >
            TRY THE DEMO
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${isLightSection ? "text-stone-800" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden mt-2 rounded-3xl p-6 border transition-all duration-300 backdrop-blur-2xl shadow-2xl ${
            isLightSection
              ? "bg-white/95 border-stone-900/10 text-[#1B0E33]"
              : "bg-[#1B0E33]/95 border-white/15 text-white"
          }`}
        >
          <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider font-semibold">
            <button
              onClick={() => scrollTo("section-start-with-you")}
              className="text-left py-2 border-b border-white/10"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("section-calendar")}
              className="text-left py-2 border-b border-white/10"
            >
              Your Calendar
            </button>
            <button
              onClick={() => scrollTo("section-today")}
              className="text-left py-2 border-b border-white/10"
            >
              Today
            </button>
            <button
              onClick={() => scrollTo("section-adapt")}
              className="text-left py-2 border-b border-white/10"
            >
              Adapt &amp; Learn
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-2 border-b border-white/10 text-yellow-400"
            >
              Contact Advisory
            </button>

            <a
              href={BIOPASS_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full py-3 rounded-full text-center text-xs font-mono uppercase tracking-wider font-bold mt-2 block shadow-lg ${
                isLightSection ? "bg-[#1B0E33] text-white" : "bg-yellow-400 text-stone-950"
              }`}
            >
              TRY THE DEMO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
