import React, { useState } from 'react';
import { 
  QrCode, ShieldCheck, CheckCircle2, Copy, Check, FileJson, 
  ExternalLink, Layers, Database, Sparkles, Cpu, RefreshCw, BarChart3 
} from 'lucide-react';

const SAMPLE_PRODUCTS = [
  {
    id: 'sku-1',
    name: 'Biomimetic Lipid Barrier Elixir',
    brand: 'Aura Labs Paris',
    category: 'Skin Formulation (EU CPNP #492019)',
    batch: 'BATCH-2026-X849',
    esprStatus: 'ESPR 2026 / Annex III Compliant',
    recyclability: '94.2% (Grade A Recyclability)',
    carbon: '0.38 kg CO2e (Neutralized at Source)',
    origin: '100% Traceable (Grasse, France)',
    actives: [
      { name: 'Phytoceramide NP', purity: '99.8% Bio-fermented', function: 'Stratum Corneum Lipid Restoration' },
      { name: 'Ectoin', purity: 'Pharma-Grade 99.4%', function: 'Extremolyte Environmental Defense' },
      { name: 'Bifida Ferment Lysate', purity: 'Standardized Postbiotic', function: 'Microbiome Barrier Fortification' },
      { name: 'Squalane (Olive-Derived)', purity: '100% Upcycled Plant Lipid', function: 'Non-Comedogenic Sebum Emollience' },
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
    id: 'sku-2',
    name: 'Biomimetic Follicle Peptide Tonic',
    brand: 'Vance Trichology Switzerland',
    category: 'Hair & Scalp (EU CPNP #839210)',
    batch: 'BATCH-2026-H120',
    esprStatus: 'ESPR 2026 / Annex III Compliant',
    recyclability: '96.5% (Aluminum Monomaterial)',
    carbon: '0.29 kg CO2e (Neutralized at Source)',
    origin: '100% Traceable (Basel, Switzerland)',
    actives: [
      { name: 'Copper Tripeptide-1 (GHK-Cu)', purity: '99.2% HPLC', function: 'Follicular Extracellular Matrix Support' },
      { name: 'Zinc PCA', purity: 'Purified Chelated', function: 'Scalp Sebum Microflora Regulation' },
      { name: 'Hydrolysed Pea Peptide', purity: 'Low MW 2,000Da', function: 'Cortex Moisture Retention & Strength' },
    ],
    jsonLd: `{
  "@context": ["https://schema.org", "https://biopass.ai/schema/dpp-v1"],
  "@type": "Product",
  "name": "Biomimetic Follicle Peptide Tonic",
  "brand": { "@type": "Brand", "name": "Vance Trichology" },
  "gtin13": "7640198765432",
  "dppIdentifier": "urn:epc:id:sgtin:7640198.765432.BATCH-2026-H120",
  "esprCompliance": {
    "standard": "EU-ESPR-2026",
    "verificationHash": "0x4b1fa3d677284addd200126d90697f83b1657ff1fc53b92dc18148a1d65dfc2d",
    "carbonFootprintKgCO2e": 0.29,
    "recyclabilityIndex": 0.965
  },
  "geoKnowledgeGraph": {
    "keyActives": ["Copper Tripeptide-1", "Zinc PCA", "Pea Peptide"],
    "sulfateFree": true,
    "siliconeFree": true
  }
}`,
  },
];

export default function LiveDPPInspector() {
  const [selectedSkuIndex, setSelectedSkuIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('passport'); // 'passport' | 'geo' | 'qr'
  const [copied, setCopied] = useState(false);

  const product = SAMPLE_PRODUCTS[selectedSkuIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(product.jsonLd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-[#FFFFFF] border border-[#E9E6DF] p-6 sm:p-10 shadow-sm space-y-8 text-[#191817]">
      
      {/* Top Header & SKU Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E9E6DF]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A43] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#2D5A43]">
              Interactive Product Passport Explorer
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191817] tracking-tight">
            Live DPP & GEO Engine Simulation
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6B65] mt-1">
            Test how BioPass renders consumer-facing digital passports and structured semantic graphs for conversational AI.
          </p>
        </div>

        {/* SKU Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {SAMPLE_PRODUCTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedSkuIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap border cursor-pointer ${
                selectedSkuIndex === idx
                  ? 'bg-[#191817] text-white border-[#191817] shadow-sm'
                  : 'bg-[#FBF9F5] text-[#6E6B65] border-[#E9E6DF] hover:border-[#191817] hover:text-[#191817]'
              }`}
            >
              {p.brand} ({p.name.split(' ')[0]}...)
            </button>
          ))}
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2">
        <div className="inline-flex p-1 rounded-2xl bg-[#FBF9F5] border border-[#E9E6DF]">
          <button
            onClick={() => setActiveTab('passport')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'passport'
                ? 'bg-[#FFFFFF] text-[#191817] shadow-sm border border-[#E9E6DF]'
                : 'text-[#6E6B65] hover:text-[#191817]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A43]" />
            <span>Consumer DPP View</span>
          </button>

          <button
            onClick={() => setActiveTab('geo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'geo'
                ? 'bg-[#FFFFFF] text-[#191817] shadow-sm border border-[#E9E6DF]'
                : 'text-[#6E6B65] hover:text-[#191817]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#2D5A43]" />
            <span>AI Agent (GEO) JSON-LD</span>
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-[#FFFFFF] text-[#191817] shadow-sm border border-[#E9E6DF]'
                : 'text-[#6E6B65] hover:text-[#191817]'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 text-[#2D5A43]" />
            <span>GS1 Digital Link QR</span>
          </button>
        </div>

        {activeTab === 'geo' && (
          <button
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-lg border border-[#E9E6DF] bg-[#FFFFFF] hover:bg-[#FBF9F5] text-xs font-bold text-[#191817] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#2D5A43]" /> : <Copy className="w-3.5 h-3.5 text-[#6E6B65]" />}
            <span>{copied ? 'Copied Schema' : 'Copy JSON-LD'}</span>
          </button>
        )}
      </div>

      {/* TAB 1: CONSUMER & REGULATORY DPP VIEW */}
      {activeTab === 'passport' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Top Banner Info */}
          <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E9E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D5A43] bg-[#EAF1EC] px-2.5 py-0.5 rounded border border-[#BBD4C4]">
                {product.category}
              </span>
              <h4 className="text-xl font-bold text-[#191817] mt-1.5">{product.name}</h4>
              <p className="text-xs text-[#6E6B65]">Brand: {product.brand} • Lot: {product.batch}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF1EC] border border-[#BBD4C4] text-[11px] font-bold text-[#2D5A43]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{product.esprStatus}</span>
              </span>
            </div>
          </div>

          {/* Key Compliance Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9E6DF] space-y-1">
              <div className="text-[10px] font-mono text-[#6E6B65] uppercase tracking-wider">Recyclability Index</div>
              <div className="text-lg font-extrabold text-[#191817]">{product.recyclability}</div>
              <div className="text-[11px] text-[#2D5A43]">Verified Monomaterial Standard</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9E6DF] space-y-1">
              <div className="text-[10px] font-mono text-[#6E6B65] uppercase tracking-wider">Carbon Footprint</div>
              <div className="text-lg font-extrabold text-[#191817]">{product.carbon}</div>
              <div className="text-[11px] text-[#2D5A43]">Scope 1, 2 & 3 Life-Cycle Verified</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E9E6DF] space-y-1">
              <div className="text-[10px] font-mono text-[#6E6B65] uppercase tracking-wider">Batch Provenance</div>
              <div className="text-lg font-extrabold text-[#191817]">{product.origin}</div>
              <div className="text-[11px] text-[#2D5A43]">Immutable Supply Chain Hash</div>
            </div>
          </div>

          {/* Verified Actives Table */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#191817] flex items-center justify-between">
              <span>Verified Actives & Raw Material Verification</span>
              <span className="text-[10px] font-mono text-[#6E6B65]">Direct INCI Extraction</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.actives.map((act, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] flex flex-col justify-between gap-2">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-[#191817]">{act.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAF1EC] text-[#2D5A43] font-semibold">
                      {act.purity}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#6E6B65]">{act.function}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: AI AGENT (GEO) JSON-LD SCHEMA */}
      {activeTab === 'geo' && (
        <div className="space-y-4 animate-fade-in">
          <div className="p-4 rounded-xl bg-[#EAF1EC] border border-[#BBD4C4] text-xs text-[#2D5A43] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>
                <strong>Generative Engine Optimization (GEO):</strong> Structured semantic knowledge graph crawled by Gemini, Claude & ChatGPT.
              </span>
            </div>
            <span className="font-mono text-[10px] font-bold">Schema.org / JSON-LD</span>
          </div>

          <div className="relative rounded-2xl bg-[#191817] text-[#FAF7F2] p-5 font-mono text-xs overflow-x-auto shadow-inner">
            <pre className="text-emerald-400 leading-relaxed">{product.jsonLd}</pre>
          </div>
        </div>
      )}

      {/* TAB 3: GS1 DIGITAL LINK RESOLVER & QR */}
      {activeTab === 'qr' && (
        <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E9E6DF] flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          <div className="w-44 h-44 rounded-2xl bg-[#FFFFFF] border border-[#E9E6DF] p-3 shadow-md flex flex-col items-center justify-center">
            <QrCode className="w-32 h-32 text-[#191817]" />
            <span className="text-[9px] font-mono font-bold text-[#6E6B65] mt-1">GS1 DIGITAL LINK</span>
          </div>

          <div className="space-y-3 max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EAF1EC] text-[10px] font-bold text-[#2D5A43]">
              <span>Compliant with GS1 Standard ISO/IEC 15459</span>
            </div>
            <h4 className="text-lg font-bold text-[#191817]">
              Unified Physical Packaging & Conversational Web Link
            </h4>
            <p className="text-xs text-[#6E6B65] leading-relaxed">
              When scanned by a smartphone camera, this barcode routes consumers to the official batch passport. When crawled by an AI assistant, it directly returns validated formulation data.
            </p>
            <div className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#E9E6DF] font-mono text-[11px] text-[#191817] break-all">
              https://dpp.biopass.ai/01/03760123456789/10/{product.batch}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
