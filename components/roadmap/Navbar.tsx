"use client";

import React, { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: number;
  onOpenBuilder: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenBuilder,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sections 1 and 6 are dark backgrounds; Sections 2, 3, 4, 5 are light backgrounds
  const isDarkSection = activeSection === 1 || activeSection === 6;

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-500">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-3 transition-all duration-500 flex items-center justify-between border ${
          isDarkSection
            ? "bg-[#0B0B0E]/60 border-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-white/70 border-stone-900/10 text-stone-900 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
        }`}
      >
        {/* Left: Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group text-left"
        >
          <span className="text-lg sm:text-xl font-bold tracking-[0.2em] uppercase font-mono">
            BIOPASS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-150 transition-transform" />
        </button>

        {/* Center: Minimal Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
          <button
            onClick={() => scrollTo("section-start-with-you")}
            className={`transition-colors duration-300 ${
              isDarkSection
                ? "text-stone-300 hover:text-white"
                : "text-stone-600 hover:text-stone-950 font-medium"
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("section-roadmap")}
            className={`transition-colors duration-300 ${
              isDarkSection
                ? "text-stone-300 hover:text-white"
                : "text-stone-600 hover:text-stone-950 font-medium"
            }`}
          >
            Your Journey
          </button>
          <button
            onClick={() => scrollTo("section-adapt")}
            className={`transition-colors duration-300 ${
              isDarkSection
                ? "text-stone-300 hover:text-white"
                : "text-stone-600 hover:text-stone-950 font-medium"
            }`}
          >
            Why BioPass
          </button>
        </nav>

        {/* Right: Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBuilder}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 group ${
              isDarkSection
                ? "bg-white text-stone-950 hover:bg-stone-200 hover:shadow-white/20"
                : "bg-stone-950 text-white hover:bg-stone-800 hover:shadow-stone-950/20"
            }`}
          >
            <span>Start Your Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBuilder}
            className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold ${
              isDarkSection ? "bg-white text-stone-950" : "bg-stone-950 text-white"
            }`}
          >
            Start
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full ${isDarkSection ? "text-stone-300" : "text-stone-700"}`}
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
            isDarkSection
              ? "bg-[#0B0B0E]/95 border-white/10 text-white"
              : "bg-white/95 border-stone-900/10 text-stone-900"
          }`}
        >
          <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => scrollTo("section-start-with-you")}
              className="text-left py-2 border-b border-white/5"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("section-roadmap")}
              className="text-left py-2 border-b border-white/5"
            >
              Your Journey
            </button>
            <button
              onClick={() => scrollTo("section-adapt")}
              className="text-left py-2 border-b border-white/5"
            >
              Why BioPass
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-2 border-b border-white/5 text-violet-400"
            >
              Contact Advisory
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuilder();
              }}
              className={`w-full py-3 rounded-full text-center text-xs font-mono uppercase tracking-wider font-semibold mt-2 ${
                isDarkSection ? "bg-white text-stone-950" : "bg-stone-950 text-white"
              }`}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
