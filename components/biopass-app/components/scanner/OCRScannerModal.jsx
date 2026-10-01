import React, { useState } from 'react';
import { Camera, X, Scan, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function OCRScannerModal({ isOpen, onClose, onScanComplete }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedSample, setSelectedSample] = useState(0);

  const sampleScans = [
    {
      title: "Centella Calming Gel Pack",
      text: "Water, Centella Asiatica Extract, Glycerin, Niacinamide, Madecassoside, Sodium Hyaluronate, Panthenol, Allantoin, Carbomer, 1,2-Hexanediol",
      brand: "Skin Recovery Lab"
    },
    {
      title: "Heavy Fragranced Night Butter",
      text: "Water, Caprylic/Capric Triglyceride, Isopropyl Myristate, Cocos Nucifera (Coconut) Oil, Fragrance / Parfum, Limonene, Linalool, Cetearyl Alcohol",
      brand: "Glow Essentials"
    },
    {
      title: "Clarifying Salicylic & Zinc Elixir",
      text: "Water, Salicylic Acid, Zinc PCA, Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Propanediol, Sodium Hydroxide",
      brand: "Derm Solution"
    }
  ];

  if (!isOpen) return null;

  const handleStartScan = () => {
    setScanning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setScanning(false);
            const sample = sampleScans[selectedSample];
            onScanComplete({
              id: `ocr-${Date.now()}`,
              name: sample.title,
              brand: sample.brand,
              category: "treatment",
              step: "serum",
              price: "$28.00",
              size: "1.7 fl oz",
              image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              description: "Extracted via BioPass AI Optical Label Scanner.",
              ph: "5.5",
              suitableTime: ["am", "pm"],
              targetSkinTypes: ["all_types"],
              tags: ["AI Scanned", "Label OCR"],
              inciList: sample.text.split(", ")
            });
            onClose();
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-lg bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-[#F94CAF]/20 text-[#F94CAF]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">AI Skincare Label OCR Scanner</h3>
              <p className="text-[11px] text-slate-400 font-semibold">Position bottle ingredient label inside target frame</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewfinder simulation */}
        <div className="relative mt-5 aspect-video w-full rounded-2xl bg-[#080D10] border-2 border-dashed border-[#F94CAF]/60 overflow-hidden flex items-center justify-center text-white">
          
          {/* Animated Laser Bar */}
          {scanning && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F94CAF] to-transparent shadow-magenta animate-bounce" />
          )}

          {/* Sample Bottle Preview */}
          <div className="text-center p-4 space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F94CAF]">
              <Scan className={`w-6 h-6 ${scanning ? 'animate-pulse text-[#FF85D0]' : ''}`} />
            </div>
            <span className="text-xs font-bold text-white block">
              {scanning ? `Optical Character Recognition... ${progress}%` : "Position packaging text inside target frame"}
            </span>
            <span className="text-[10px] text-slate-400 block font-mono">
              [Simulated Live Feed: 1080p BioSensor Active]
            </span>
          </div>

          {/* Target corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#F94CAF]"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#F94CAF]"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#F94CAF]"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#F94CAF]"></div>
        </div>

        {/* Quick Sample Selector */}
        <div className="mt-4 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
            Select Test Skincare Packaging:
          </span>
          <div className="grid grid-cols-3 gap-2">
            {sampleScans.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedSample(idx)}
                className={`p-2.5 rounded-xl text-left text-[11px] font-bold border transition-all cursor-pointer ${
                  selectedSample === idx
                    ? 'bg-[#F94CAF]/20 border-[#F94CAF] text-[#FF85D0]'
                    : 'bg-[#080D10] border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <span className="block truncate">{s.title}</span>
                <span className="text-[9px] opacity-70 block truncate text-slate-400">{s.brand}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleStartScan}
            disabled={scanning}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs sm:text-sm shadow-magenta transition-all disabled:opacity-50 cursor-pointer"
          >
            {scanning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>{scanning ? 'Extracting INCI...' : 'Simulate Scan & Parse'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
