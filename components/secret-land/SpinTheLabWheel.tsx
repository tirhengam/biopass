"use client";

import React, { useState } from "react";
import { BIOPASS_APP_URL } from "@/config/appConfig";
import { ArrowRight, RotateCw } from "lucide-react";

export interface LabSlice {
  id: string;
  name: string;
  emoji: string;
  color: string;
  border: string;
  textColor: string;
  description: string;
}

export const LAB_SLICES: LabSlice[] = [
  {
    id: "skin",
    name: "SKIN LAB",
    emoji: "🧬",
    color: "#FFE0EB", // Soft pastel rose
    border: "#F3ADC8",
    textColor: "#192231",
    description: "Barrier lipid bilayers, pH balancing & hydration dynamics",
  },
  {
    id: "hair",
    name: "HAIR LAB",
    emoji: "💇",
    color: "#EADEFF", // Soft pastel lilac
    border: "#C8B4FA",
    textColor: "#192231",
    description: "Keratin matrices, cuticle sealing & disulfide bonds",
  },
  {
    id: "perfume",
    name: "PERFUME LAB",
    emoji: "👃",
    color: "#D9EFFF", // Soft pastel sky
    border: "#AFD6FA",
    textColor: "#192231",
    description: "Top, heart & base volatility accords with natural extracts",
  },
  {
    id: "nutrition",
    name: "NUTRITION LAB",
    emoji: "🍊",
    color: "#FFE4D1", // Soft pastel peach
    border: "#FFC59E",
    textColor: "#192231",
    description: "Vitamins, antioxidant shields & cellular micronutrients",
  },
  {
    id: "ingredient",
    name: "INGREDIENT LAB",
    emoji: "🧪",
    color: "#D2F5DC", // Soft pastel mint
    border: "#9FE0B3",
    textColor: "#192231",
    description: "Active botanical molecules, clean green syntheses & purity",
  },
  {
    id: "formula",
    name: "FORMULA LAB",
    emoji: "🧴",
    color: "#FEF3C7", // Soft pastel butter
    border: "#FCD34D",
    textColor: "#192231",
    description: "Oil-in-water emulsions, viscosity stabilization & rheology",
  },
  {
    id: "color",
    name: "COLOR LAB",
    emoji: "🎨",
    color: "#FFD8DC", // Soft pastel coral
    border: "#FFAAB6",
    textColor: "#192231",
    description: "Mineral pigment dispersion, light refraction & undertones",
  },
  {
    id: "challenge",
    name: "CHALLENGE LAB",
    emoji: "🏆",
    color: "#FDE68A", // Soft pastel gold
    border: "#F59E0B",
    textColor: "#192231",
    description: "Formulation mysteries, weekly science quests & peer ranks",
  },
];

interface SpinTheLabWheelProps {
  onSelectLab?: (lab: LabSlice) => void;
}

export default function SpinTheLabWheel({ onSelectLab }: SpinTheLabWheelProps) {
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [selectedLab, setSelectedLab] = useState<LabSlice | null>(null);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

  const numSlices = LAB_SLICES.length;
  const sliceAngle = 360 / numSlices; // 45 degrees
  const radius = 200;
  const center = 200;

  // Function to spin randomly
  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedLab(null);

    // Pick a random winning index
    const randomIndex = Math.floor(Math.random() * numSlices);
    const targetSlice = LAB_SLICES[randomIndex];

    // Slices mid-angles: index * 45 + 22.5
    // Pointer is at TOP (270 degrees in SVG coordinates)
    const midAngle = randomIndex * sliceAngle + sliceAngle / 2;
    const currentModulo = rotation % 360;
    
    // We want: (rotation + additional) % 360 = (270 - midAngle) % 360
    const desiredFinalNormalized = (270 - midAngle + 360) % 360;
    const extraTurns = 360 * (5 + Math.floor(Math.random() * 2)); // 5-6 full spins
    const delta = (desiredFinalNormalized - (currentModulo % 360) + 360) % 360;

    const finalRotation = rotation + extraTurns + delta;
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedLab(targetSlice);
      if (onSelectLab) onSelectLab(targetSlice);
    }, 4200);
  };

  // Function to click directly on a slice
  const handleSliceClick = (index: number) => {
    if (isSpinning) return;

    const targetSlice = LAB_SLICES[index];
    const midAngle = index * sliceAngle + sliceAngle / 2;
    const desiredFinalNormalized = (270 - midAngle + 360) % 360;
    const currentModulo = rotation % 360;
    const delta = (desiredFinalNormalized - (currentModulo % 360) + 360) % 360;
    
    // Quick smooth align to pointer (1 full turn + delta)
    const finalRotation = rotation + 360 + delta;
    setRotation(finalRotation);
    setIsSpinning(true);

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedLab(targetSlice);
      if (onSelectLab) onSelectLab(targetSlice);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
      
      {/* Interactive Wheel Graphic Container */}
      <div className="relative flex items-center justify-center">
        
        {/* Top Pointer Indicator Arrow (Points Down at 12 O'Clock) */}
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md flex flex-col items-center">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-ink-navy filter drop-shadow-sm" />
          <div className="w-2.5 h-2.5 rounded-full bg-pastel-green border border-ink-navy -mt-5" />
        </div>

        {/* Outer Wheel Shadow & Glow Rim */}
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full p-2.5 bg-ink-navy/10 border-4 border-ink-navy shadow-[0_12px_36px_rgba(25,34,49,0.15)] transition-all">
          
          {/* Rotating SVG Wheel */}
          <div
            className="w-full h-full rounded-full overflow-hidden"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? "transform 4.2s cubic-bezier(0.12, 0.88, 0.28, 1)"
                : "transform 1s ease-out",
            }}
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full select-none"
              style={{ transformOrigin: "center center" }}
            >
              {LAB_SLICES.map((slice, i) => {
                const startAngle = i * sliceAngle;
                const endAngle = (i + 1) * sliceAngle;
                const midAngle = startAngle + sliceAngle / 2;

                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;

                const x1 = center + radius * Math.cos(startRad);
                const y1 = center + radius * Math.sin(startRad);
                const x2 = center + radius * Math.cos(endRad);
                const y2 = center + radius * Math.sin(endRad);

                return (
                  <g
                    key={slice.id}
                    onClick={() => handleSliceClick(i)}
                    onMouseEnter={() => setHoveredSlice(i)}
                    onMouseLeave={() => setHoveredSlice(null)}
                    className="cursor-pointer group transition-opacity"
                  >
                    {/* Pie Slice Wedge */}
                    <path
                      d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                      fill={slice.color}
                      stroke="#192231"
                      strokeWidth="2.5"
                      className="transition-colors hover:brightness-95"
                    />

                    {/* Radial Label and Emoji */}
                    <g transform={`translate(${center}, ${center}) rotate(${midAngle})`}>
                      {/* Text label reading outwards along radius */}
                      <text
                        x="106"
                        y="4"
                        textAnchor="middle"
                        fill={slice.textColor}
                        className="font-bold text-[11px] sm:text-[12px] uppercase tracking-wider select-none font-space"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {slice.name}
                      </text>

                      {/* Emoji near outer rim */}
                      <text
                        x="166"
                        y="5"
                        textAnchor="middle"
                        className="text-[15px] sm:text-[17px] select-none"
                      >
                        {slice.emoji}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Center Hub: SPIN! Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            aria-label="Spin the Laboratory Wheel"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 
              w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-ink-navy text-pastel-pink border-4 border-white
              shadow-xl flex flex-col items-center justify-center transition-all duration-200
              ${
                isSpinning
                  ? "scale-95 cursor-not-allowed opacity-90"
                  : "hover:scale-105 active:scale-95 hover:bg-black hover:text-white cursor-pointer"
              }`}
          >
            <span className="font-fredoka font-black text-xs sm:text-sm tracking-wider uppercase leading-none">
              {isSpinning ? "SPINNING" : "SPIN!"}
            </span>
            <RotateCw
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 text-pastel-green ${
                isSpinning ? "animate-spin" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Result & Interaction Section */}
      <div className="mt-4 sm:mt-5 text-center min-h-[85px] flex flex-col items-center justify-center space-y-2.5 w-full px-2 font-space">
        {selectedLab ? (
          <div className="w-full max-w-md flex flex-col items-center space-y-2 animate-bounce-short">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border-2 border-ink-navy shadow-sm">
              <span className="text-xs sm:text-sm font-bold text-ink-navy uppercase font-space">
                Your next adventure:
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-ink-navy text-pastel-green text-xs font-bold uppercase flex items-center gap-1.5 font-space">
                <span>{selectedLab.name}</span>
                <span>{selectedLab.emoji}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`${BIOPASS_APP_URL}&lab=${selectedLab.id}`}
                className="inline-flex items-center gap-2 px-7 py-2.5 sm:px-9 sm:py-3 rounded-full bg-ink-navy hover:bg-black text-pastel-green font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 border-2 border-ink-navy group font-space"
              >
                <span>ENTER THE LAB →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleSpin}
                disabled={isSpinning}
                className="px-3.5 py-2.5 rounded-full bg-white hover:bg-ink-navy hover:text-white text-ink-navy text-xs font-bold border-2 border-ink-navy shadow-sm transition-all cursor-pointer font-space"
                title="Spin again"
              >
                ↻
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-1 font-space">
            <p className="text-xs sm:text-sm font-bold text-ink-navy/85">
              Spin it. Pick one. Follow your curiosity.
            </p>
            <p className="text-[11px] text-ink-navy/60 font-medium">
              (Click SPIN or pick any lab directly to enter)
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
