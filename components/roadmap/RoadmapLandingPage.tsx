"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Chapter1Promise } from "./Chapter1Promise";
import { Chapter2StartWithYou } from "./Chapter2StartWithYou";
import { Chapter3BeautyRoadmap } from "./Chapter3BeautyRoadmap";
import { Chapter4TodayRoutine } from "./Chapter4TodayRoutine";
import { FinalSectionCTA } from "./FinalSectionCTA";
import { ContactModal } from "./ContactModal";

export const RoadmapLandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "section-promise",
      "section-start-with-you",
      "section-calendar",
      "section-routine",
      "section-final-cta",
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
    <div className="relative w-full min-h-screen font-sans selection:bg-violet-600 selection:text-white">
      {/* Dynamic Theme-Adaptive Navbar — Always featuring "TRY THE DEMO" */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Streamlined Visual Story Flow */}
      <main className="w-full">
        {/* 1. Hero: BioPass + Conceptual Dashboard with 5 Products (Dark Background) */}
        <Chapter1Promise
          onExplore={() => scrollToSection("section-start-with-you")}
        />

        {/* 2. Chapter 2: Don't start with another product. Start with you. (3 Visual Columns: Photo Woman, Timeline, Calendar Streaks) */}
        <Chapter2StartWithYou
          onContinue={() => scrollToSection("section-calendar")}
        />

        {/* 3. Chapter 3: Prominent Daily Beauty Calendar ("Your roadmap connects directly to what you do each day.") */}
        <Chapter3BeautyRoadmap />

        {/* 4. Chapter 4: Today's Routine & Everyday Consistency */}
        <Chapter4TodayRoutine />

        {/* 5. Final Section: "Your beauty goal is a journey. Give it a roadmap." + TRY THE DEMO */}
        <FinalSectionCTA
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
