"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles, Beaker, GraduationCap } from "lucide-react";

interface BeautyLabNavbarProps {
  onOpenJoinModal: () => void;
  onOpenSchoolsModal: () => void;
}

export default function BeautyLabNavbar({ onOpenJoinModal, onOpenSchoolsModal }: BeautyLabNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFD]/90 backdrop-blur-md border-b border-[#E2E8F0]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C4B5FD] via-[#FDA4AF] to-[#BAE6FD] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center">
                <Beaker className="w-5 h-5 text-[#8B5CF6] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0B132B]">
                BioPass
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] font-bold -mt-0.5">
                BEAUTY LAB
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#labs" 
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Labs</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#EDE9FE] text-[#6D28D9] font-bold">
                8
              </span>
            </a>
            <a 
              href="#how-it-works" 
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider"
            >
              How It Works
            </a>
            <a 
              href="#ai-buddy" 
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider"
            >
              AI Lab Buddy
            </a>
            <a 
              href="#philosophy" 
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider"
            >
              About
            </a>
            <a 
              href="#schools" 
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>For Schools</span>
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenJoinModal}
              className="text-xs font-semibold text-[#475569] hover:text-[#0B132B] transition-colors uppercase tracking-wider cursor-pointer"
            >
              Log in
            </button>

            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#818CF8] via-[#F472B6] to-[#FB923C] hover:opacity-95 text-white text-xs font-bold tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Join the Lab →</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-[#475569] hover:text-[#0B132B] border border-[#E2E8F0] bg-[#FFFFFF]"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-[#FCFCFD] p-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            <a
              href="#labs"
              onClick={() => setMobileOpen(false)}
              className="p-3 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-xs font-bold text-[#0B132B] flex items-center justify-between"
            >
              <span>Explore The 8 Labs</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#6D28D9]">8 ACTIVE</span>
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="p-3 rounded-2xl text-xs font-semibold text-[#475569] hover:bg-[#FFFFFF]"
            >
              How It Works
            </a>
            <a
              href="#ai-buddy"
              onClick={() => setMobileOpen(false)}
              className="p-3 rounded-2xl text-xs font-semibold text-[#475569] hover:bg-[#FFFFFF]"
            >
              AI Lab Buddy
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileOpen(false)}
              className="p-3 rounded-2xl text-xs font-semibold text-[#475569] hover:bg-[#FFFFFF]"
            >
              About & Philosophy
            </a>
            <a
              href="#schools"
              onClick={() => setMobileOpen(false)}
              className="p-3 rounded-2xl text-xs font-semibold text-[#0284C7] hover:bg-[#FFFFFF]"
            >
              For Schools & STEM Educators
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#818CF8] via-[#F472B6] to-[#FB923C] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Join the Lab →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
