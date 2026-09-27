"use client";

import React from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { Compass, Eye, Users, Dna, ArrowRight, Heart } from "lucide-react";

export default function ChapterMissionVisionTeam() {
  const teamMembers = [
    {
      name: "Dr. Maya Lin",
      role: "Cosmetic Formulation Chemist",
      emoji: "🧪",
      avatarBg: "bg-pastel-pink",
      bio: "Former green-chemistry researcher turning complex lipid emulsion science into hands-on virtual mixing experiments.",
      tag: "EMULSIONS & PH",
    },
    {
      name: "Leo Vance",
      role: "Master Perfumer & Olfactive Artist",
      emoji: "👃",
      avatarBg: "bg-pastel-lavender",
      bio: "Grasse-trained perfumer decoding top, heart, and base volatile accords so teens can compose signature scents.",
      tag: "SCENT ACCORDS",
    },
    {
      name: "Chloe Park",
      role: "Bio-Game Designer & Creative Director",
      emoji: "🎨",
      avatarBg: "bg-pastel-green",
      bio: "Game developer blending playful interactive mechanics with rigorous peer-reviewed formulation physics.",
      tag: "EXPERIENCE DESIGN",
    },
    {
      name: "Samira Chen",
      role: "Science Educator & Teen Mentor",
      emoji: "✨",
      avatarBg: "bg-[#FFE4D1]",
      bio: "Dedicated to demystifying beauty marketing and helping youth question ingredient lists with scientific confidence.",
      tag: "YOUTH LABS",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#FFF4F8] text-ink-navy flex flex-col justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden font-space"
    >
      {/* Top Header / Eyebrow */}
      <div className="w-full flex items-center justify-between pb-3 border-b-2 border-ink-navy/15 z-10 shrink-0 font-space">
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy">
          [ PAGE 4 // MISSION • VISION • TEAM 💖 ]
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-ink-navy/70 hidden sm:inline">
          THE PEOPLE BEHIND THE SECRET LAB
        </span>
      </div>

      {/* Main Center Body */}
      <div className="my-auto py-8 sm:py-10 max-w-6xl mx-auto w-full space-y-10 z-10 font-space">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-pastel-pink border-3 border-ink-navy shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-ink-navy text-pastel-pink text-xs font-bold uppercase flex items-center gap-1.5 font-space">
                <Compass className="w-3.5 h-3.5" />
                <span>MISSION</span>
              </span>
              <span className="text-2xl">🧭</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-ink-navy leading-snug">
                Turn cosmetic science into an adventure every teenager can explore, question, and create.
              </h3>
              <p className="font-space text-xs sm:text-sm font-normal text-ink-navy/80 leading-relaxed">
                Empowering the next generation to look beyond surface advertising, master real biochemical mechanisms, and trust their scientific intuition.
              </p>
            </div>

            <div className="pt-2 text-xs font-bold text-ink-navy/60 font-space">
              #HandsOnChemistry • #NoGuesswork
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-pastel-lavender border-3 border-ink-navy shadow-lg flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-ink-navy text-pastel-lavender text-xs font-bold uppercase flex items-center gap-1.5 font-space">
                <Eye className="w-3.5 h-3.5" />
                <span>VISION</span>
              </span>
              <span className="text-2xl">🔭</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-ink-navy leading-snug">
                The next generation of cosmetic scientists starts with curiosity, play, and a secret lab.
              </h3>
              <p className="font-space text-xs sm:text-sm font-normal text-ink-navy/80 leading-relaxed">
                We imagine a world where teenage creators lead cosmetic innovation with transparency, sustainable formulation, and barrier biology literacy.
              </p>
            </div>

            <div className="pt-2 text-xs font-bold text-ink-navy/60 font-space">
              #NextGenScientists • #SecretLab
            </div>
          </div>

        </div>

        {/* Team Section */}
        <div className="space-y-5 font-space">
          <div className="text-center space-y-1">
            <span className="px-3 py-1 rounded-full bg-pastel-green border-2 border-ink-navy text-xs font-bold uppercase inline-flex items-center gap-1.5 shadow-sm font-space">
              <Users className="w-3.5 h-3.5" />
              <span>THE TEAM</span>
            </span>
            <h4 className="font-fredoka text-xl sm:text-2xl font-bold text-ink-navy">
              A handful of creative scientists, perfumers, designers, and educators who believe science belongs to everyone.
            </h4>
          </div>

          {/* Team Portraits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-space">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-3xl border-3 border-ink-navy bg-white shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-3 text-center"
              >
                {/* Simple Team Portrait */}
                <div className="mx-auto relative">
                  <div className={`w-20 h-20 rounded-2xl ${member.avatarBg} border-3 border-ink-navy flex items-center justify-center text-4xl shadow-inner mx-auto`}>
                    {member.emoji}
                  </div>
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-ink-navy text-white text-[9px] font-bold uppercase font-space">
                    PRO
                  </span>
                </div>

                <div className="space-y-1">
                  <h5 className="font-fredoka font-bold text-base sm:text-lg text-ink-navy leading-tight">
                    {member.name}
                  </h5>
                  <p className="font-space text-[11px] font-bold text-ink-navy/70 leading-tight">
                    {member.role}
                  </p>
                  <p className="font-space text-xs text-ink-navy/80 leading-relaxed pt-1 font-normal">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-2 border-t-2 border-ink-navy/10 text-[10px] font-mono font-bold text-ink-navy/60">
                  {member.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="w-full flex items-center justify-between text-xs font-bold text-ink-navy/60 pt-3 border-t-2 border-ink-navy/15 z-10 shrink-0">
        <span>BIOPASS // MISSION • VISION • TEAM</span>
        <a href="#final-cta" className="hover:text-ink-navy font-black transition-colors">
          READY FOR YOUR EXPERIMENT? ↓
        </a>
        <span>CHAPTER 04</span>
      </div>
    </section>
  );
}
