"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Chapter1Promise } from "./Chapter1Promise";
import { Chapter2StartWithYou } from "./Chapter2StartWithYou";
import { Chapter3BeautyRoadmap } from "./Chapter3BeautyRoadmap";
import { Chapter4TodayRoutine } from "./Chapter4TodayRoutine";
import { Chapter5IngredientsToProducts } from "./Chapter5IngredientsToProducts";
import { Chapter6TrackLearnAdapt } from "./Chapter6TrackLearnAdapt";
import { JourneyBuilderModal } from "./JourneyBuilderModal";
import { ContactModal } from "./ContactModal";

export const RoadmapLandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialBuilderGoal, setInitialBuilderGoal] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sectionIds = [
      "section-promise",
      "section-start-with-you",
      "section-roadmap",
      "section-routine",
      "section-products",
      "section-adapt",
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

  const openBuilderWithGoal = (goal?: string) => {
    if (goal) setInitialBuilderGoal(goal);
    setIsBuilderOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-violet-600 selection:text-white">
      {/* Dynamic Theme Adaptive Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenBuilder={() => openBuilderWithGoal()}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main 6-Chapter Flow */}
      <main className="w-full">
        {/* Chapter 01 — THE PROMISE (Dark Near-Black) */}
        <Chapter1Promise
          onOpenBuilder={() => openBuilderWithGoal()}
          onExplore={() => scrollToSection("section-start-with-you")}
        />

        {/* Chapter 02 — START WITH YOU (Warm Ivory / Cream) */}
        <Chapter2StartWithYou
          onOpenBuilder={(g) => openBuilderWithGoal(g)}
          onContinue={() => scrollToSection("section-roadmap")}
        />

        {/* Chapter 03 — YOUR BEAUTY ROADMAP (Soft Lavender - Signature Section) */}
        <Chapter3BeautyRoadmap
          onOpenBuilder={() => openBuilderWithGoal()}
        />

        {/* Chapter 04 — TODAY'S ROUTINE (Very Pale Cool Blue / Slate) */}
        <Chapter4TodayRoutine
          onOpenBuilder={() => openBuilderWithGoal()}
        />

        {/* Chapter 05 — FROM INGREDIENTS TO PRODUCTS (Clean Warm White) */}
        <Chapter5IngredientsToProducts
          onOpenBuilder={() => openBuilderWithGoal()}
        />

        {/* Chapter 06 — TRACK, LEARN & ADAPT (Deep Charcoal / Black) */}
        <Chapter6TrackLearnAdapt
          onOpenBuilder={() => openBuilderWithGoal()}
          onOpenContact={() => setIsContactOpen(true)}
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </main>

      {/* Modals */}
      <JourneyBuilderModal
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
        initialGoal={initialBuilderGoal}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};
