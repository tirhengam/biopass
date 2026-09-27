"use client";

import React from "react";
import Navbar from "@/components/biopass-editorial/Navbar";
import HeroSection from "@/components/biopass-editorial/HeroSection";
import ProblemSection from "@/components/biopass-editorial/ProblemSection";
import MeetBiopassSection from "@/components/biopass-editorial/MeetBiopassSection";
import ExperienceSection from "@/components/biopass-editorial/ExperienceSection";
import HowItWorksSection from "@/components/biopass-editorial/HowItWorksSection";
import RoutineIntelligenceSection from "@/components/biopass-editorial/RoutineIntelligenceSection";
import ScienceSection from "@/components/biopass-editorial/ScienceSection";
import UniverseSection from "@/components/biopass-editorial/UniverseSection";
import VisionSection from "@/components/biopass-editorial/VisionSection";
import FinalCtaSection from "@/components/biopass-editorial/FinalCtaSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-noir text-white font-sans selection:bg-hotpink selection:text-white">
      {/* 00. Minimal Sticky Navigation */}
      <Navbar />

      {/* 01. Hero: Buying the wrong products? No more! */}
      <HeroSection />

      {/* 02. The Problem: Is this a good product FOR ME? */}
      <ProblemSection />

      {/* 03. Meet BioPass: 4 Data Streams -> 94% Match */}
      <MeetBiopassSection />

      {/* 04. The BioPass Experience: Know Why It Matches */}
      <ExperienceSection />

      {/* 05. How It Works: 01 to 04 From Curiosity to Clarity */}
      <HowItWorksSection />

      {/* 06. Routine Intelligence: Does It Fit My Routine? */}
      <RoutineIntelligenceSection />

      {/* 07. Science: Simple by Default, Deep When Curious */}
      <ScienceSection />

      {/* 08. Personal Care Universe: 1 BioPass, World of Care */}
      <UniverseSection />

      {/* 09. Vision: People ↔ BioPass ↔ Products / Science */}
      <VisionSection />

      {/* 10. Final CTA: Choose What's Right For You */}
      <FinalCtaSection />
    </main>
  );
}
