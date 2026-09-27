"use client";

import React, { useState, useEffect } from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why BioPass", href: "#meet-biopass" },
    { name: "Science", href: "#science" },
    { name: "Vision", href: "#vision" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        scrolled
          ? "bg-noir-deep/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5 sm:py-7 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors">
            BIOPASS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-hotpink group-hover:scale-150 transition-transform shadow-[0_0_8px_#FF007F]" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs tracking-wider uppercase font-medium text-white/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white hover:opacity-100 transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-hotpink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={BIOPASS_APP_URL}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-hotpink/80 hover:border-hotpink hover:bg-hotpink hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,0,127,0.2)] hover:shadow-[0_0_25px_rgba(255,0,127,0.5)]"
          >
            <span>TRY BIOPASS</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white p-2 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-noir-deep/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-white/80 hover:text-hotpink py-2 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={BIOPASS_APP_URL}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-hotpink hover:bg-hotpink-vibrant transition-all shadow-[0_0_20px_rgba(255,0,127,0.4)]"
            >
              <span>TRY BIOPASS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
