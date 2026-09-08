"use client";

import React, { useState } from "react";
import { 
  QrCode, ShieldCheck, CheckCircle2, Copy, Check, FileJson, 
  ExternalLink, Layers, Database, Sparkles, Cpu, RefreshCw, BarChart3 
} from "lucide-react";

interface SampleProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  batch: string;
  esprStatus: string;
  recyclability: string;
  carbon: string;
  origin: string;
  actives: { name: string; purity: string; function: string }[];
  jsonLd: string;
}

const SAMPLE_PRODUCTS: SampleProduct[] = [
  {
    id: "sku-1",
    name: "Biomimetic Lipid Barrier Elixir",
    brand: "Aura Labs Paris",
    category: "Skin Formulation (EU CPNP #492019)",
    batch: "BATCH-2026-X849",
    esprStatus: "ESPR 2026 / Annex III Compliant",
    recyclability: "94.2% (Grade A Recyclability)",
    carbon: "0.38 kg CO2e (Neutralized at Source)",
    origin: "100% Traceable (Grasse, France)",
    actives: [
      { name: "Phytoceramide NP", purity: "99.8% Bio-fermented", function: "Stratum Corneum Lipid Restoration" },
      { name: "Ectoin", purity: "Pharma-Grade 99.4%", function: "Extremolyte Environmental Defense" },
      { name: "Bifida Ferment Lysate", purity: "Standardized Postbiotic", function: "Microbiome Barrier Fortification" },
      { name: "Squalane (Olive-Derived)", purity: "100% Upcycled Plant Lipid", function: "Non-Comedogenic Sebum Emollience" },
    ],
    jsonLd: `{
  "@context": ["https://schema.org", "https://biopass.ai/schema/dpp-v1"],
  "@type": "Product",
  "name": "Biomimetic Lipid Barrier Elixir",
  "brand": { "@type": "Brand", "name": "Aura Labs Paris" },
  "gtin13": "3760123456789",
  "dppIdentifier": "urn:epc:id:sgtin:3760123.456789.BATCH-2026-X849",
  "gs1DigitalLink": "https://dpp.biopass.ai/01/03760123456789/10/BATCH-2026-X849",
  "esprCompliance": {
    "standard": "EU-ESPR-2026-ANNEX-III",
    "verificationHash": "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
    "carbonFootprintKgCO2e": 0.38,
    "recyclabilityIndex": 0.942
  },
  "geoKnowledgeGraph": {
    "keyActives": ["Phytoceramide NP (3.0%)", "Ectoin (2.0%)", "Bifida Ferment (5.0%)"],
    "comedogenicScore": 0,
    "fragranceFree": true,
    "dermalSensitizers": []
  }
}`,
  },
  {
    id: "sku-2",
    name: "Biomimetic Follicle Peptide Tonic",
    brand: "Vance Trichology Switzerland",
    category: "Hair & Scalp (EU CPNP #839210)",
    batch: "BATCH-2026-H120",
    esprStatus: "ESPR 2026 / Annex III Compliant",
    recyclability: "96.5% (Aluminum Monomaterial)",
    carbon: "0.29 kg CO2e (Neutralized at Source)",
    origin: "100% Traceable (Basel, Switzerland)",
    actives: [
      { name: "Copper Tripeptide-1 (GHK-Cu)", purity: "99.2% HPLC", function: "Follicular Extracellular Matrix Support" },
      { name: "Zinc PCA", purity: "Purified Chelated", function: "Scalp Sebum Microflora Regulation" },
      { name: "Hydrolysed Pea Peptide", purity: "Low MW 2,000Da", function: "Cortex Moisture Retention & Strength" },
    ],
    jsonLd: `{
  "@context": ["https://schema.org", "https://biopass.ai/schema/dpp-v1"],
  "@type": "Product",
  "name": "Biomimetic Follicle Peptide Tonic",
  "brand": { "@type": "Brand", "name": "Vance Trichology" },
  "gtin13": "7640198765432",
  "dppIdentifier": "urn:epc:id:sgtin:7640198.765432.BATCH-2026-H120",
  "esprCompliance": { "standard": "EU-ESPR-2026", "carbonFootprintKgCO2e": 0.29 }
}`,
  },
];

export default function LiveDPPInspector() {
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"passport" | "geo" | "qr">("passport");
  const [copied, setCopied] = useState(false);

  const product = SAMPLE_PRODUCTS[selectedSkuIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(product.jsonLd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-surface border border-surface-hairline p-6 sm:p-10 shadow-editorial space-y-8">
      
      {/* Top Header & SKU Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-surface-hairline">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sage-600 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-micro uppercase text-sage-700">
              Interactive Product Passport Explorer
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-onyx tracking-tight">
            Live DPP & GEO Engine Simulation
          </h3>
          <p className="text-xs sm:text-sm text-onyx-muted mt-1">
            Test how BioPass renders consumer-facing digital passports and structured semantic graphs for conversational AI.
          </p>
        </div>

        {/* SKU Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {SAMPLE_PRODUCTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedSkuIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap border ${
                selectedSkuIndex === idx
                  ? "bg-onyx text-surface border-onyx shadow-sm"
                  : "bg-canvas text-onyx-muted border-surface-hairline hover:border-onyx-dim hover:text-onyx"
              }`}
            >
              {p.brand} ({p.name.split(" ")[0]}...)
            </button>
          ))}
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2">
        <div className="inline-flex p-1 rounded-2xl bg-canvas border border-surface-hairline">
          <button
            onClick={() => setActiveTab("passport")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-micro transition-colors flex items-center gap-2 ${
              activeTab === "passport"
                ? "bg-surface text-onyx shadow-sm border border-surface-hairline"
                : "text-onyx-muted hover:text-onyx"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
            <span>EU DPP Passport View</span>
          </button>

          <button
            onClick={() => setActiveTab("geo")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-micro transition-colors flex items-center gap-2 ${
              activeTab === "geo"
                ? "bg-surface text-onyx shadow-sm border border-surface-hairline"
                : "text-onyx-muted hover:text-onyx"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-sage-600" />
            <span>AI Agent (GEO) JSON-LD</span>
          </button>

          <button
            onClick={() => setActiveTab("qr")}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-micro transition-colors flex items-center gap-2 ${
              activeTab === "qr"
                ? "bg-surface text-onyx shadow-sm border border-surface-hairline"
                : "text-onyx-muted hover:text-onyx"
            }`}
          >
            <QrCode className="w-3.5 h-3.5 text-sage-600" />
            <span>GS1 QR Verification</span>
          </button>
        </div>

        {activeTab === "geo" && (
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-canvas hover:bg-canvas-subtle border border-surface-hairline text-xs font-bold text-onyx transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-sage-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied to Clipboard" : "Copy Payload"}</span>
          </button>
        )}
      </div>

      {/* Tab 1: Consumer DPP View */}
      {activeTab === "passport" && (
        <div className="space-y-6">
          {/* Header Card */}
          <div className="p-6 rounded-2xl bg-canvas border border-surface-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sage-700 uppercase">
                <span>{product.batch}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>
              <h4 className="text-xl font-extrabold text-onyx mt-0.5">{product.name}</h4>
              <p className="text-xs text-onyx-muted">{product.brand} · Full Batch Compliance Ledger</p>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4" />
              <span>{product.esprStatus}</span>
            </div>
          </div>

          {/* Metrics 3-Col Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-canvas border border-surface-hairline space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-micro text-onyx-dim">Recyclability Index</div>
              <div className="text-xl font-extrabold text-onyx">{product.recyclability}</div>
              <div className="text-[11px] text-sage-600 font-medium">Annex III Monomaterial Verified</div>
            </div>

            <div className="p-5 rounded-2xl bg-canvas border border-surface-hairline space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-micro text-onyx-dim">Carbon Intensity</div>
              <div className="text-xl font-extrabold text-onyx">{product.carbon}</div>
              <div className="text-[11px] text-sage-600 font-medium">Life-Cycle Assessment (LCA) Audited</div>
            </div>

            <div className="p-5 rounded-2xl bg-canvas border border-surface-hairline space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-micro text-onyx-dim">Provenance Trace</div>
              <div className="text-xl font-extrabold text-onyx">{product.origin}</div>
              <div className="text-[11px] text-sage-600 font-medium">Tier-1 & Tier-2 Ingredient Audited</div>
            </div>
          </div>

          {/* Verified Actives Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-micro text-onyx">
                Batch Molecular Actives & INCI Verification
              </span>
              <span className="text-xs font-mono text-sage-600 font-bold">100% Toxicologically Cleared</span>
            </div>

            <div className="rounded-2xl border border-surface-hairline overflow-hidden divide-y divide-surface-hairline text-xs">
              <div className="p-3.5 bg-canvas font-bold text-onyx grid grid-cols-12 gap-4">
                <span className="col-span-5 sm:col-span-4">Active Molecule</span>
                <span className="col-span-4 sm:col-span-4">Grade & Purity</span>
                <span className="col-span-3 sm:col-span-4">Dermatological Function</span>
              </div>
              {product.actives.map((act, idx) => (
                <div key={idx} className="p-3.5 bg-surface grid grid-cols-12 gap-4 items-center">
                  <span className="col-span-5 sm:col-span-4 font-bold text-onyx">{act.name}</span>
                  <span className="col-span-4 sm:col-span-4 font-mono text-sage-700 font-medium">{act.purity}</span>
                  <span className="col-span-3 sm:col-span-4 text-onyx-muted">{act.function}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Agent (GEO) JSON-LD View */}
      {activeTab === "geo" && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-200 text-sage-900 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sage-700" />
              <span>
                <strong>Generative Engine Optimization (GEO):</strong> Structured semantic entity graph crawled by conversational AI agents (Gemini, Claude, GPT-4).
              </span>
            </div>
            <span className="font-mono font-bold text-sage-700">Schema.org Validated</span>
          </div>

          <pre className="p-6 rounded-2xl bg-canvas border border-surface-hairline font-mono text-xs text-onyx leading-relaxed overflow-x-auto max-h-[380px]">
            {product.jsonLd}
          </pre>
        </div>
      )}

      {/* Tab 3: GS1 QR Verification */}
      {activeTab === "qr" && (
        <div className="p-8 rounded-2xl bg-canvas border border-surface-hairline flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          <div className="w-40 h-40 bg-surface border-2 border-dashed border-sage-500/40 rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm relative">
            <QrCode className="w-28 h-28 text-onyx" />
            <span className="text-[9px] font-mono font-bold text-sage-700 mt-1">GS1 DIGITAL LINK</span>
          </div>

          <div className="max-w-md space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-[10px] font-bold uppercase tracking-micro text-sage-700">
              <span>Standard GS1 2D Barcode Resolver</span>
            </div>
            <h4 className="text-lg font-extrabold text-onyx">Scan to verify batch authenticity</h4>
            <p className="text-xs text-onyx-muted leading-relaxed">
              Every packaging unit embeds a dynamic GS1 Digital Link QR code. Consumers scan with a standard smartphone camera to resolve the live passport, while regulatory auditors access cryptographically signed laboratory records.
            </p>
            <div className="p-2.5 rounded-lg bg-surface border border-surface-hairline font-mono text-[11px] text-sage-700 truncate">
              https://dpp.biopass.ai/01/03760123456789/10/{product.batch}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
