"use client";

import React, { useState, useEffect, useCallback } from "react";
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

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });

        if (intersecting.size > 0) {
          // Select the latest intersecting section in document order
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            if (intersecting.has(sectionIds[i])) {
              const nextSection = i + 1;
              setActiveSection((prev) => (prev === nextSection ? prev : nextSection));
              break;
            }
          }
        }
      },
      {
        // Triggers section activation when section top reaches ~33% from the top of viewport
        rootMargin: "-33% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleOpenContact = useCallback(() => setIsContactOpen(true), []);
  const handleCloseContact = useCallback(() => setIsContactOpen(false), []);
  const handleExplore = useCallback(() => scrollToSection("section-start-with-you"), [scrollToSection]);
  const handleContinue = useCallback(() => scrollToSection("section-calendar"), [scrollToSection]);

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-yellow-400 selection:text-stone-950">
      {/* Dynamic Theme-Adaptive Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={handleOpenContact}
      />

      {/* Main Colorful 6-Chapter Flow */}
      <main className="w-full">
        {/* CHAPTER 1 — HERO (Deep Purple / Violet) */}
        <Chapter1Hero onExplore={handleExplore} />

        {/* CHAPTER 2 — START WITH YOU (Coral / Soft Bright Pink) */}
        <Chapter2StartWithYou onContinue={handleContinue} />

        {/* CHAPTER 3 — YOUR DAILY BEAUTY CALENDAR (Bright Green / Mint) */}
        <Chapter3Calendar />

        {/* CHAPTER 4 — TODAY (Yellow / Warm Cream) */}
        <Chapter4Today />

        {/* CHAPTER 5 — ADAPT & LEARN (Blue / Lavender / Periwinkle) */}
        <Chapter5AdaptLearn />

        {/* CHAPTER 6 — FINAL (Deep Purple) */}
        <Chapter6Final onOpenContact={handleOpenContact} />
      </main>

      {/* Advisory / Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
};
