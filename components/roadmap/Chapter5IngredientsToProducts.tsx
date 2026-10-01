"use client";

import React, { useState } from "react";
import { Check, AlertCircle, HelpCircle, ArrowRight, Sparkles, SlidersHorizontal, ShieldAlert, HeartHandshake } from "lucide-react";

interface Chapter5IngredientsToProductsProps {
  onOpenBuilder: () => void;
}

export const Chapter5IngredientsToProducts: React.FC<Chapter5IngredientsToProductsProps> = ({
  onOpenBuilder,
}) => {
  const [activeTab, setActiveTab] = useState<"match" | "fit" | "ingredients" | "price">("match");

  const products = [
    {
      id: "prod-a",
      name: "Product A",
      fullName: "Ascorbyl Radiance Serum 10%",
      matchScore: "94%",
      matchPill: "bg-emerald-50 text-emerald-800 border-emerald-300",
      price: "€29",
      routineFit: "AM Active Slot · Optimal with Mineral SPF",
      keyIngredients: "10% Ascorbyl Glucoside, Zinc PCA, Ferulic Acid",
      bullets: [
        "Fits your current foundation phase",
        "Fits your existing morning routine",
        "Contains targeted antioxidant synergy",
      ],
      tag: "Best Phase Match",
    },
    {
      id: "prod-b",
      name: "Product B",
      fullName: "Gentle Ethyl-C Fluid 8%",
      matchScore: "89%",
      matchPill: "bg-stone-100 text-stone-800 border-stone-300",
      price: "€18",
      routineFit: "AM Active Slot · High Barrier Tolerance",
      keyIngredients: "8% 3-O-Ethyl Ascorbic, Panthenol, Bisabolol",
      bullets: [
        "Budget-friendly alternative",
        "Gentle non-acid buffered pH",
        "Compatible with daily sunscreen",
      ],
      tag: "Budget Alternative",
    },
    {
      id: "prod-c",
      name: "Product C",
      fullName: "Botanical Glow Nectar",
      matchScore: "84%",
      matchPill: "bg-stone-100 text-stone-800 border-stone-300",
      price: "€24",
      routineFit: "AM/PM Flexible · Ultra Lightweight",
      keyIngredients: "Kakadu Plum (Natural C), Licorice Root, HA",
      bullets: [
        "Fits your preference for lightweight water-gels",
        "Zero essential oils or fragrance",
        "Supporting botanical antioxidants",
      ],
      tag: "Preference Match",
    },
  ];

  return (
    <section
      id="section-products"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 bg-[#FCFBF9] text-stone-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16 my-auto z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 text-stone-800 text-xs font-mono uppercase tracking-[0.16em]">
            <Sparkles className="w-3.5 h-3.5 text-stone-700" />
            <span>Chapter 05 · From Ingredients to Products</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-stone-950 leading-[1.12]">
            Know what you need <br className="hidden sm:inline" />
            <span className="font-normal italic text-stone-800">before you shop.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            BioPass doesn&apos;t begin with a shelf full of products. It begins with your current goal and routine, then helps identify what your current phase needs.
          </p>
        </div>

        {/* THREE EVALUATION AREAS (LOOK FOR / CONSIDER / WATCH FOR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LOOK FOR */}
          <div className="p-7 rounded-3xl bg-white border border-emerald-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> LOOK FOR
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Phase Priorities
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-stone-700 font-mono">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Relevant ingredient categories</strong> (e.g. stabilized Vitamin C, Ceramide complex)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Supporting ingredients</strong> (Ferulic acid, Centella asiatica, Ectoin)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Product characteristics</strong> (pH 5.5, fragrance-free, non-comedogenic)</span>
              </li>
            </ul>
          </div>

          {/* CONSIDER */}
          <div className="p-7 rounded-3xl bg-white border border-stone-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-800 font-bold flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-stone-600" /> CONSIDER
              </span>
              <span className="text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full">
                Context Fit
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-stone-700 font-mono">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                <span><strong>Your current routine</strong> and compatibility with steps you already do</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                <span><strong>Your preferences</strong> (lightweight gel vs rich nourishing balm)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
                <span><strong>Your budget</strong> and products you already own</span>
              </li>
            </ul>
          </div>

          {/* WATCH FOR */}
          <div className="p-7 rounded-3xl bg-white border border-amber-900/10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" /> WATCH FOR
              </span>
              <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                Safety Filters
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-stone-700 font-mono">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Potential incompatibilities</strong> (e.g. Copper peptides combined with direct low-pH acids)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Unnecessary duplication</strong> of active compounds across multiple steps</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>Products that don&apos;t fit</strong> the current foundation stage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* TRANSITION & ONLY 3 EXAMPLE PRODUCTS */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-1">
                Phase-Calibrated Selection
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-stone-950 tracking-tight">
                Now find products that fit your plan.
              </h3>
            </div>

            {/* Comparison Dimension Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono">
              {[
                { id: "match", label: "MATCH" },
                { id: "fit", label: "ROUTINE FIT" },
                { id: "ingredients", label: "INGREDIENTS" },
                { id: "price", label: "PRICE" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-stone-950 shadow-sm font-semibold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* EXACTLY 3 CURATED EXAMPLE PRODUCTS (NOT A MARKETPLACE GRID) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      {p.tag}
                    </span>
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${p.matchPill}`}>
                      {p.matchScore} PERSONAL MATCH
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-stone-950">{p.fullName}</h4>
                    <div className="text-2xl font-light text-stone-900 mt-1 font-mono">{p.price}</div>
                  </div>

                  {/* Dynamic Dimension Details based on Tab */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs font-mono text-stone-700 space-y-1">
                    {activeTab === "match" && (
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Match Rationale</span>
                        <p className="text-stone-900 font-sans font-medium text-xs mt-0.5">{p.bullets[0]}</p>
                      </div>
                    )}
                    {activeTab === "fit" && (
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Routine Slot</span>
                        <p className="text-stone-900 font-sans font-medium text-xs mt-0.5">{p.routineFit}</p>
                      </div>
                    )}
                    {activeTab === "ingredients" && (
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Active Compounds</span>
                        <p className="text-stone-900 font-sans font-medium text-xs mt-0.5">{p.keyIngredients}</p>
                      </div>
                    )}
                    {activeTab === "price" && (
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase">Cost Efficiency</span>
                        <p className="text-stone-900 font-sans font-medium text-xs mt-0.5">{p.price} · Approx. 2-month phase cycle</p>
                      </div>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs text-stone-600 font-sans">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-700">
                  <span>Fits Foundation Phase</span>
                  <span className="font-semibold text-stone-950">Option {p.name.replace("Product ", "")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Statement & Action Card */}
          <div className="pt-4 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <p className="text-xl sm:text-2xl font-light text-stone-950 italic">
                &ldquo;You choose. BioPass helps you understand the choice.&rdquo;
              </p>
            </div>

            {/* Want BioPass to do it for you? */}
            <div className="max-w-2xl mx-auto p-7 rounded-3xl bg-stone-900 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-stone-800">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400">
                  Full Automation Option
                </span>
                <h4 className="text-xl font-light text-white">Want BioPass to do it for you?</h4>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  BioPass may suggest a complete routine, while you remain able to replace individual products anytime.
                </p>
              </div>

              <button
                onClick={onOpenBuilder}
                className="px-6 py-3.5 rounded-full bg-white text-stone-950 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-colors shrink-0 shadow-lg"
              >
                Build My Routine
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
