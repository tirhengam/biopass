"use client";

import React, { useState } from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { X, Sparkles, Compass, Eye, Users, Dna, ArrowRight } from "lucide-react";

interface MissionVisionTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "mission" | "vision" | "team";
}

export default function MissionVisionTeamModal({
  isOpen,
  onClose,
  initialTab = "mission",
}: MissionVisionTeamModalProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "team">(initialTab);

  if (!isOpen) return null;

  const teamMembers = [
    {
      name: "Dr. Maya Lin",
      role: "Cosmetic Formulation Chemist",
      emoji: "🧪",
      avatarBg: "bg-pastel-pink",
      bio: "Former green-chemistry researcher turning complex lipid emulsion science into hands-on virtual mixing experiments.",
      favoriteMolecule: "Ceramide NP (Barrier Repair)",
    },
    {
      name: "Leo Vance",
      role: "Master Perfumer & Olfactive Artist",
      emoji: "👃",
      avatarBg: "bg-pastel-lavender",
      bio: "Grasse-trained perfumer decoding top, heart, and base volatile accords so teens can compose signature accords.",
      favoriteMolecule: "Linalool (Fresh Botanical)",
    },
    {
      name: "Chloe Park",
      role: "Bio-Game Designer & Creative Director",
      emoji: "🎨",
      avatarBg: "bg-pastel-green",
      bio: "Game developer blending playful interactive mechanics with rigorous peer-reviewed formulation physics.",
      favoriteMolecule: "Hyaluronic Acid Multi-Weight",
    },
    {
      name: "Samira Chen",
      role: "Science Educator & Teen Mentor",
      emoji: "✨",
      avatarBg: "bg-[#FFE4D1]",
      bio: "Dedicated to demystifying beauty marketing and helping youth question ingredient lists with scientific confidence.",
      favoriteMolecule: "Niacinamide (Vitamin B3)",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-navy/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl border-4 border-ink-navy shadow-2xl overflow-hidden flex flex-col max-h-[90vh] font-space"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-pastel-pink border-b-2 border-ink-navy">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ink-navy flex items-center justify-center text-pastel-green">
              <Dna className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="font-fredoka font-bold text-base uppercase tracking-wide text-ink-navy">
                BioPass Lab Dossier
              </span>
              <span className="block text-[10px] font-bold text-ink-navy/60 font-space">
                COSMETIC SECRET LAND // ABOUT
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ink-navy border-2 border-ink-navy flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b-2 border-ink-navy bg-[#FFF6FA] font-space">
          <button
            onClick={() => setActiveTab("mission")}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-r-2 border-ink-navy transition-colors ${
              activeTab === "mission"
                ? "bg-white text-ink-navy shadow-inner"
                : "text-ink-navy/70 hover:bg-white/50"
            }`}
          >
            <Compass className="w-4 h-4 text-pastel-pink" />
            <span>Mission</span>
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-r-2 border-ink-navy transition-colors ${
              activeTab === "vision"
                ? "bg-white text-ink-navy shadow-inner"
                : "text-ink-navy/70 hover:bg-white/50"
            }`}
          >
            <Eye className="w-4 h-4 text-pastel-lavender" />
            <span>Vision</span>
          </button>

          <button
            onClick={() => setActiveTab("team")}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
              activeTab === "team"
                ? "bg-white text-ink-navy shadow-inner"
                : "text-ink-navy/70 hover:bg-white/50"
            }`}
          >
            <Users className="w-4 h-4 text-pastel-green" />
            <span>Team</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 font-space">
          {activeTab === "mission" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-pink text-ink-navy text-xs font-bold uppercase border border-ink-navy font-space">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Core Purpose</span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-ink-navy leading-snug">
                Turn cosmetic science into an adventure every teenager can explore, question, and create.
              </h3>

              <div className="p-4 rounded-2xl bg-pastel-pink-subtle border-2 border-pastel-pink-border text-ink-navy text-xs sm:text-sm font-normal leading-relaxed space-y-2 font-space">
                <p>
                  No dull lectures. No confusing marketing jargon. BioPass makes cosmetic chemistry palpable through interactive simulations, molecular sandbox labs, and weekly formulation quests.
                </p>
                <p className="font-bold text-ink-navy">
                  Science is not a spectator sport — it's an open canvas for your curiosity.
                </p>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-lavender text-ink-navy text-xs font-bold uppercase border border-ink-navy font-space">
                <Eye className="w-3.5 h-3.5" />
                <span>The Future We See</span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-ink-navy leading-snug">
                The next generation of cosmetic scientists starts with curiosity, play, and a secret lab.
              </h3>

              <div className="p-4 rounded-2xl bg-pastel-lavender-subtle border-2 border-pastel-lavender-border text-ink-navy text-xs sm:text-sm font-normal leading-relaxed space-y-2 font-space">
                <p>
                  We envision a generation of teenagers who don't just consume beauty trends blindly, but understand the real biochemical mechanisms behind barrier repair, UV protection, and clean botanical stabilization.
                </p>
                <p className="font-bold text-ink-navy">
                  Curiosity is the ultimate superpower.
                </p>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div className="space-y-4 animate-fadeIn font-space">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-green text-ink-navy text-xs font-bold uppercase border border-ink-navy font-space">
                <Users className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>

              <p className="text-xs sm:text-sm font-normal text-ink-navy/90 font-space">
                A handful of creative scientists, perfumers, designers, and educators who believe science belongs to everyone.
              </p>

              {/* 4 Team Member Cards with Portraits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 font-space">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="p-3.5 rounded-2xl border-2 border-ink-navy bg-white shadow-sm flex items-start gap-3 hover:-translate-y-0.5 transition-transform"
                  >
                    {/* Portrait Avatar */}
                    <div className={`w-12 h-12 rounded-2xl ${member.avatarBg} border-2 border-ink-navy flex items-center justify-center text-2xl shrink-0 shadow-sm`}>
                      {member.emoji}
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="font-fredoka font-bold text-sm text-ink-navy leading-none">
                        {member.name}
                      </h4>
                      <p className="text-[10px] font-bold text-ink-navy/70 leading-tight font-space">
                        {member.role}
                      </p>
                      <p className="text-[10px] text-ink-navy/80 leading-snug pt-1 font-normal font-space">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 border-t-2 border-ink-navy flex items-center justify-between font-space">
          <span className="text-[11px] font-bold text-ink-navy/60 font-space">
            BioPass Cosmetic Secret Land
          </span>
          <a
            href={BIOPASS_APP_URL}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ink-navy hover:bg-black text-pastel-green text-xs font-bold uppercase tracking-wider transition-all shadow-sm font-space"
          >
            <span>Launch Web App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
