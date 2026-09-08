"use client";

import React, { useState } from "react";
import { Sparkles, Droplets, Wind, Pill, ShieldAlert, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface CategoryData {
  id: string;
  label: string;
  icon: React.ElementType;
  headline: string;
  summary: string;
  pillars: { title: string; detail: string; status: string }[];
  sampleMatch: {
    product: string;
    brand: string;
    compatibility: number;
    highlight: string;
    clashStatus: string;
  };
}

const CATEGORIES: CategoryData[] = [
  {
    id: "skin",
    label: "Skin Care",
    icon: Sparkles,
    headline: "Barrier integrity, active tolerances & comedogenic profiling.",
    summary:
      "BioPass dissects raw INCI cosmetic listings down to molecular weight and comedogenicity ratings (0-5), cross-referencing your personal sebum production and redness triggers.",
    pillars: [
      {
        title: "Barrier Integrity Analysis",
        detail: "Ceramide to free-fatty-acid lipid ratio optimization for stratum corneum restoration.",
        status: "99% Synergistic",
      },
      {
        title: "Active Tolerance Calibration",
        detail: "Buffered concentration modeling for pure L-Ascorbic acid, retinoids, and direct acids.",
        status: "Clash Shielded",
      },
      {
        title: "Comedogenic Pore-Safety",
        detail: "Identifies volatile esters, myristates, and heavy occlusives that provoke acne cosmetica.",
        status: "Zero Cloggers",
      },
      {
        title: "Contact Allergen & Fragrance Guard",
        detail: "Flags 26 regulated EU fragrance sensitizers and essential oil oxidants in real-time.",
        status: "100% Cleaned",
      },
    ],
    sampleMatch: {
      product: "Barrier Restoration Lipid Serum",
      brand: "Clinical Formulation Lab",
      compatibility: 97,
      highlight: "High Phytoceramide & Niacinamide harmony",
      clashStatus: "No conflict with PM Retinoid",
    },
  },
  {
    id: "hair",
    label: "Hair & Scalp",
    icon: Droplets,
    headline: "Scalp microbiome balance, porosity matching & peptide repair.",
    summary:
      "Your scalp is living skin with a unique follicular microbiome. BioPass matches cuticle porosity (low, medium, high) with hydrolysed proteins, bond builders, and mild non-stripping surfactants.",
    pillars: [
      {
        title: "Scalp Microbiome Balance",
        detail: "Sulfate-free cleansing systems that preserve natural sebum without feeding Malassezia yeasts.",
        status: "Optimal pH 5.2",
      },
      {
        title: "Cuticle Porosity Calibration",
        detail: "Low-porosity moisture penetrating molecules vs. high-porosity cationic sealants.",
        status: "Matched: Med-High",
      },
      {
        title: "Peptide Bond Restoration",
        detail: "Disulfide bond cross-linking amino acids for bleached and thermal-stressed fibers.",
        status: "94% Protein Balance",
      },
      {
        title: "Surfactant Irritancy Index",
        detail: "Replaces harsh sodium lauryl sulfates with gentle amphoteric glucoside complexes.",
        status: "Non-Stripping",
      },
    ],
    sampleMatch: {
      product: "Biomimetic Follicle Peptide Treatment",
      brand: "Trichological Science",
      compatibility: 95,
      highlight: "Copper Peptides + Zinc PCA scalp harmony",
      clashStatus: "Safe for color-treated hair",
    },
  },
  {
    id: "fragrance",
    label: "Perfume & Scent",
    icon: Wind,
    headline: "Olfactive longevity, botanical aromatics & molecule safety.",
    summary:
      "Demystify the mystery of 'Parfum'. BioPass provides full transparency over synthetic fixatives, natural absolutes, and skin sensitization potentials without compromising olfactory artistry.",
    pillars: [
      {
        title: "Olfactive Note Longevity",
        detail: "Evaporation rate modeling across volatile top notes, floral heart, and heavy base fixatives.",
        status: "8-10hr Projection",
      },
      {
        title: "Non-Irritant Botanical Aromatics",
        detail: "Filter formulations that rely on phototoxic furocoumarins and bergapten-rich citrus oils.",
        status: "IFRA Certified",
      },
      {
        title: "Synthetic Molecule Transparency",
        detail: "Full visibility into modern hypoallergenic molecules: Iso E Super, Ambroxan, and Hedione.",
        status: "EWG Grade 1",
      },
      {
        title: "Barrier Absorption Kinetics",
        detail: "Denatured ethanol solvent evaporation rates vs. alcohol-free lipid perfume carriers.",
        status: "Low Epidermal Dryness",
      },
    ],
    sampleMatch: {
      product: "Santal & Vetiver Botanical Eau de Parfum",
      brand: "Modern Niche Parfumerie",
      compatibility: 92,
      highlight: "100% Bergapten-Free Bergamot + Clean Iso E",
      clashStatus: "Low dermal sensitization",
    },
  },
  {
    id: "supplements",
    label: "Supplements",
    icon: Pill,
    headline: "Clinical bio-availability, vitamin synergies & routine safety.",
    summary:
      "What you ingest affects collagen synthesis and systemic inflammation. BioPass verifies chelated mineral bioavailability, active co-enzyme forms, and screens for pharmaceutical conflicts.",
    pillars: [
      {
        title: "Chelated Bio-Availability",
        detail: "Prioritizes high-absorption bisglycinate and liposomal delivery over insoluble oxides.",
        status: "4x Bio-availability",
      },
      {
        title: "Micronutrient Synergies",
        detail: "Automated co-factor pairing: Vitamin D3 + K2 (MK-7) and Vitamin C + Non-heme Iron.",
        status: "Full Synergy",
      },
      {
        title: "Circadian AM/PM Scheduling",
        detail: "Optimizes absorption timing (energizing methylated B-complex in AM, Magnesium Glycinate in PM).",
        status: "Chronobiological",
      },
      {
        title: "Topical-Systemic Conflict Guard",
        detail: "Prevents toxic hypervitaminosis between high-dose oral Vitamin A and topical retinoids.",
        status: "Safety Validated",
      },
    ],
    sampleMatch: {
      product: "Liposomal Glutathione & Marine Collagen",
      brand: "Cellular Nutrition Institute",
      compatibility: 96,
      highlight: "Clinically validated tripeptide ratio",
      clashStatus: "Synergistic with morning Vitamin C",
    },
  },
];

export default function CategoryTabs() {
  const [activeTabId, setActiveTabId] = useState("skin");
  const activeCategory = CATEGORIES.find((c) => c.id === activeTabId) || CATEGORIES[0];

  return (
    <div className="w-full space-y-8">
      
      {/* Category Tab Selector Pills */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 sm:pb-0 gap-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeTabId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTabId(cat.id)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-micro whitespace-nowrap transition-all duration-300 border ${
                isActive
                  ? "bg-onyx text-surface border-onyx shadow-md"
                  : "bg-surface text-onyx-muted border-surface-hairline hover:border-onyx-dim hover:text-onyx"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-sage-500" : "text-onyx-muted"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Showcase Box */}
      <div className="rounded-3xl bg-surface border border-surface-hairline p-6 sm:p-10 shadow-editorial transition-all duration-500">
        
        {/* Header of Active Category */}
        <div className="max-w-3xl space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-micro text-sage-600">
            <Activity className="w-3.5 h-3.5" />
            <span>Biochemical Analysis Protocol</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-onyx tracking-tight">
            {activeCategory.headline}
          </h3>
          <p className="text-sm sm:text-base text-onyx-muted leading-relaxed">
            {activeCategory.summary}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {activeCategory.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-canvas border border-surface-hairline hover:border-sage-500/30 transition-all duration-300 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-onyx uppercase tracking-wide">
                  {pillar.title}
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sage-50 text-sage-700 border border-sage-200">
                  {pillar.status}
                </span>
              </div>
              <p className="text-xs text-onyx-muted leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Live Formulation Matching Demonstration Card */}
        <div className="p-5 rounded-2xl bg-canvas-subtle border border-surface-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-micro text-onyx-dim">
              Verified Formulation Match Example
            </div>
            <div className="text-sm font-extrabold text-onyx">
              {activeCategory.sampleMatch.product}
            </div>
            <div className="text-xs text-onyx-muted flex items-center gap-2">
              <span>{activeCategory.sampleMatch.brand}</span>
              <span>•</span>
              <span className="text-sage-600 font-medium">{activeCategory.sampleMatch.highlight}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <div className="text-2xl font-extrabold text-onyx tracking-tight">
                {activeCategory.sampleMatch.compatibility}%
              </div>
              <div className="text-[10px] font-mono text-sage-600 font-bold uppercase">
                {activeCategory.sampleMatch.clashStatus}
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-sage-600 text-surface flex items-center justify-center font-bold text-sm shadow-sm">
              ✓
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
