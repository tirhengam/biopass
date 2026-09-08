"use client";

import React, { useState } from "react";
import { X, QrCode, ShieldCheck, CheckCircle2, Copy, Check, FileJson, Layers } from "lucide-react";

interface DPPInteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DPPInteractiveModal({ isOpen, onClose }: DPPInteractiveModalProps) {
  const [activeTab, setActiveTab] = useState<"passport" | "geo_schema">("passport");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleJSONLD = `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Biomimetic Lipid Barrier Elixir",
  "brand": {
    "@type": "Brand",
    "name": "Aura Labs Paris"
  },
  "gtin13": "3760123456789",
  "dppIdentifier": "urn:epc:id:sgtin:3760123.456789.BATCH-2026-X4",
  "compliance": {
    "euEcodesignDirective": "ESPR-2026-Annex-III",
    "recyclabilityIndex": "94.2%",
    "carbonFootprintKgCO2e": 0.38
  },
  "formulationProfile": {
    "keyActives": ["Phytoceramide NP (3.0%)", "Ectoin (2.0%)", "Bifida Ferment (5.0%)"],
    "comedogenicScore": 0,
    "fragranceFree": true,
    "euAllergenCompliant": true
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleJSONLD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-onyx/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-surface border border-surface-hairline rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-surface-hairline flex items-center justify-between bg-canvas">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sage-50 border border-sage-200 flex items-center justify-center text-sage-600">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase font-bold text-sage-700">
                EU Digital Product Passport (DPP) Standard
              </div>
              <h3 className="text-lg font-extrabold text-onyx">
                Batch Provenance & GEO Schema Explorer
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface border border-surface-hairline flex items-center justify-center text-onyx-muted hover:text-onyx"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-surface-hairline px-6 bg-canvas-subtle">
          <button
            onClick={() => setActiveTab("passport")}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-micro border-b-2 transition-colors ${
              activeTab === "passport"
                ? "border-sage-600 text-sage-700"
                : "border-transparent text-onyx-muted hover:text-onyx"
            }`}
          >
            Consumer DPP View
          </button>
          <button
            onClick={() => setActiveTab("geo_schema")}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-micro border-b-2 transition-colors ${
              activeTab === "geo_schema"
                ? "border-sage-600 text-sage-700"
                : "border-transparent text-onyx-muted hover:text-onyx"
            }`}
          >
            AI Agent (GEO) JSON-LD View
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === "passport" ? (
            <div className="space-y-6">
              {/* Product Info Strip */}
              <div className="p-4 rounded-2xl bg-canvas border border-surface-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="text-xs font-mono text-sage-600 font-bold">VERIFIED LOT: #BIO-2026-X849</div>
                  <div className="text-base font-extrabold text-onyx">Biomimetic Lipid Barrier Elixir</div>
                  <div className="text-xs text-onyx-muted">Aura Labs Paris · Made in Grasse, France</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>EU ESPR Certified</span>
                </div>
              </div>

              {/* Provenance & Safety Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Ecodesign Score</div>
                  <div className="text-lg font-extrabold text-onyx mt-1">94.2 / 100</div>
                  <div className="text-[11px] text-sage-600">Grade A Recyclability</div>
                </div>
                <div className="p-4 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Carbon Intensity</div>
                  <div className="text-lg font-extrabold text-onyx mt-1">0.38 kg CO2e</div>
                  <div className="text-[11px] text-sage-600">Neutralized at Source</div>
                </div>
                <div className="p-4 rounded-xl bg-canvas border border-surface-hairline">
                  <div className="text-[10px] uppercase font-bold text-onyx-dim">Raw Material Origin</div>
                  <div className="text-lg font-extrabold text-onyx mt-1">100% Traceable</div>
                  <div className="text-[11px] text-sage-600">Audited Supply Chain</div>
                </div>
              </div>

              {/* INCI Breakdown table */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-micro text-onyx-muted">
                  Batch Chemical Ingredients & Traceability
                </div>
                <div className="rounded-xl border border-surface-hairline overflow-hidden divide-y divide-surface-hairline text-xs">
                  <div className="p-3 bg-canvas font-bold text-onyx flex justify-between">
                    <span>Component Molecule</span>
                    <span>Safety / Purity Rating</span>
                  </div>
                  <div className="p-3 flex justify-between bg-surface">
                    <span>Phytoceramide NP (Sustainably yeast-fermented)</span>
                    <span className="font-mono text-emerald-700 font-semibold">99.8% Pure</span>
                  </div>
                  <div className="p-3 flex justify-between bg-surface">
                    <span>Ectoin (Halophilic micro-organism derived)</span>
                    <span className="font-mono text-emerald-700 font-semibold">Pharmaceutical</span>
                  </div>
                  <div className="p-3 flex justify-between bg-surface">
                    <span>Bifida Ferment Lysate (Probiotic postbiotic)</span>
                    <span className="font-mono text-emerald-700 font-semibold">ISO 22716</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-onyx-muted">
                  Structured semantic graph ingested by Gemini, Claude, and OpenAI web crawlers:
                </p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-canvas border border-surface-hairline text-xs font-semibold text-onyx hover:bg-canvas-subtle transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-sage-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy JSON"}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-canvas border border-surface-hairline font-mono text-[11px] text-onyx leading-relaxed overflow-x-auto">
                {sampleJSONLD}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-surface-hairline bg-canvas flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-onyx text-surface text-xs font-bold uppercase tracking-wide hover:bg-onyx-soft transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
