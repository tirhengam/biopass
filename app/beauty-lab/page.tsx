"use client";

import React from "react";
import Chapter1Welcome from "@/components/secret-land/Chapter1Welcome";
import Chapter2TheIdea from "@/components/secret-land/Chapter2TheIdea";
import Chapter3CreateCompete from "@/components/secret-land/Chapter3CreateCompete";
import ChapterMissionVisionTeam from "@/components/secret-land/ChapterMissionVisionTeam";
import ChapterFinalCTA from "@/components/secret-land/ChapterFinalCTA";

export default function CosmeticSecretLandPage() {
  return (
    <main 
      className="w-full min-h-screen text-ink-navy selection:bg-ink-navy selection:text-pastel-green font-space"
    >
      {/* PAGE 1: SPIN THE LAB 🩷 (Pastel Pink - Single Screen Sizing) */}
      <Chapter1Welcome />

      {/* PAGE 2: THE IDEA 💜 (Pastel Lavender) */}
      <Chapter2TheIdea />

      {/* PAGE 3: CREATE & COMPETE 💚 (Pastel Green) */}
      <Chapter3CreateCompete />

      {/* PAGE 4: MISSION | VISION | TEAM 💖 (Also accessible from Header) */}
      <ChapterMissionVisionTeam />

      {/* PAGE 5: FINAL CTA 🩷 (Pastel Pink) */}
      <ChapterFinalCTA />
    </main>
  );
}
