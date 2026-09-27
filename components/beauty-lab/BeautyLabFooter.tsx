"use client";

import React from "react";
import Link from "next/link";
import { Beaker, ShieldAlert, Heart } from "lucide-react";

export default function BeautyLabFooter() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E2E8F0] py-16 text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#F1F5F9]">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#8B5CF6]">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight text-[#0B132B]">
                BioPass <span className="font-light text-[#64748B]">Beauty Lab</span>
              </div>
              <p className="text-[11px] text-[#94A3B8]">
                Interactive Cosmetic Science & Learning Platform
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-[#475569]">
            <a href="#labs" className="hover:text-[#0B132B] transition-colors">Labs</a>
            <a href="#how-it-works" className="hover:text-[#0B132B] transition-colors">How It Works</a>
            <a href="#philosophy" className="hover:text-[#0B132B] transition-colors">About</a>
            <a href="#schools" className="hover:text-[#0B132B] transition-colors">For Schools</a>
            <a href="#safety" className="hover:text-[#0B132B] transition-colors">Safety</a>
            <a href="#privacy" className="hover:text-[#0B132B] transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-[#0B132B] transition-colors">Contact</a>
          </nav>

        </div>

        {/* Bottom Educational Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span className="font-medium text-[#475569]">
              Beauty Lab is an educational platform and does not provide medical advice.
            </span>
          </div>

          <div className="text-[11px] text-[#94A3B8]">
            © {new Date().getFullYear()} BioPass Beauty Lab. All scientific simulations reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
