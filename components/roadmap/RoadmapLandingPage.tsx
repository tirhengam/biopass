"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Chapter1Hero } from "./Chapter1Hero";
import { Chapter2StartWithYou } from "./Chapter2StartWithYou";
import { Chapter3Calendar } from "./Chapter3Calendar";
import { Chapter4Today } from "./Chapter4Today";
import { Chapter5AdaptLearn } from "./Chapter5AdaptLearn";
import { Chapter6Final } from "./Chapter6Final";
import { ContactModal } from "./ContactModal";

export const RoadmapLandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "section-promise",
      "section-start-with-you",
      "section-calendar",
      "section-today",
      "section-adapt",
      "section-final",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-yellow-400 selection:text-stone-950">
      {/* Dynamic Theme-Adaptive Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Colorful 6-Chapter Flow */}
      <main className="w-full">
        {/* CHAPTER 1 — HERO (Deep Purple / Violet) */}
        <Chapter1Hero
          onExplore={() => scrollToSection("section-start-with-you")}
        />

        {/* CHAPTER 2 — START WITH YOU (Coral / Soft Bright Pink) */}
        <Chapter2StartWithYou
          onContinue={() => scrollToSection("section-calendar")}
        />

        {/* CHAPTER 3 — YOUR DAILY BEAUTY CALENDAR (Bright Green / Mint) */}
        <Chapter3Calendar />

        {/* CHAPTER 4 — TODAY (Yellow / Warm Cream) */}
        <Chapter4Today />

        {/* CHAPTER 5 — ADAPT & LEARN (Blue / Lavender / Periwinkle) */}
        <Chapter5AdaptLearn />

        {/* CHAPTER 6 — FINAL (Deep Purple) */}
        <Chapter6Final
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Advisory / Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
