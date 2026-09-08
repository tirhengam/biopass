"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ShieldCheck, QrCode } from "lucide-react";

interface NavbarProps {
  onOpenDemoModal?: () => void;
  onOpenAccessModal?: () => void;
}

export default function Navbar({ onOpenDemoModal, onOpenAccessModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleOpen = () => {
    if (onOpenDemoModal) onOpenDemoModal();
    else if (onOpenAccessModal) onOpenAccessModal();
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-surface-hairline transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-600 group-hover:scale-125 transition-transform duration-300" />
              <span className="font-extrabold text-xl tracking-[0.16em] text-onyx uppercase">
                BIOPASS
              </span>
              <span className="text-[10px] font-mono uppercase tracking-micro px-2 py-0.5 rounded-full bg-sage-50 text-sage-700 border border-sage-200 font-bold">
                ENTERPRISE
              </span>
            </Link>
            <span className="hidden lg:inline-block text-[11px] font-semibold uppercase tracking-micro text-onyx-muted pl-4 border-l border-surface-hairline">
              Digital Product Passports & GEO Infrastructure
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#live-demo" className="text-xs font-semibold text-onyx hover:text-sage-600 transition-colors uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              <span>Interactive DPP Demo</span>
            </a>
            <a href="#pillars" className="text-xs font-semibold text-onyx-muted hover:text-onyx transition-colors uppercase tracking-wide">
              Core Pillars
            </a>
            <a href="#geo-spec" className="text-xs font-semibold text-onyx-muted hover:text-onyx transition-colors uppercase tracking-wide">
              GEO Protocol
            </a>
            <a href="#compliance" className="text-xs font-semibold text-onyx-muted hover:text-onyx transition-colors uppercase tracking-wide">
              EU ESPR Compliance
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sage-600 hover:bg-sage-700 text-surface text-xs font-bold tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>Book Enterprise Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-onyx-muted hover:text-onyx border border-surface-hairline bg-surface"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-hairline bg-canvas p-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-surface border border-surface-hairline text-xs font-bold text-onyx flex items-center justify-between"
            >
              <span>Interactive DPP Demo</span>
              <span className="text-[10px] font-mono text-sage-600">LIVE</span>
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl text-xs font-semibold text-onyx-muted hover:bg-surface"
            >
              Core Pillars
            </a>
            <a
              href="#geo-spec"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl text-xs font-semibold text-onyx-muted hover:bg-surface"
            >
              GEO Protocol for AI Search
            </a>
            <a
              href="#compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl text-xs font-semibold text-onyx-muted hover:bg-surface"
            >
              EU ESPR Compliance Standards
            </a>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleOpen();
            }}
            className="w-full py-3.5 rounded-xl bg-sage-600 text-surface text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-md"
          >
            <span>Book Enterprise Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}
