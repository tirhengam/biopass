import React from 'react';
import { X, Printer, Download, Sparkles, Dna, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function RoutineExportModal({ isOpen, onClose }) {
  const { profile, amRoutine, pmRoutine } = useBioPass();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-2xl bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col print:m-0 print:p-4 print:border-none print:bg-white print:text-black">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-[#F94CAF]/20 text-[#F94CAF]">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white print:text-black">
                BioPass Skincare Passport & Regimen
              </h3>
              <p className="text-xs text-slate-400 font-semibold print:text-slate-600">
                Personalized for {profile.skinType.toUpperCase()} Skin • {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Body */}
        <div className="my-5 overflow-y-auto space-y-6 pr-1 flex-1 print:overflow-visible">
          
          {/* AM Protocol */}
          <div className="p-5 rounded-2xl bg-[#080D10] border border-white/10 print:bg-slate-50 print:border-slate-300">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm mb-3">
              <Sun className="w-4 h-4" />
              <span>Morning (AM) Protection Protocol</span>
            </div>

            <div className="space-y-2">
              {amRoutine.map((p, idx) => (
                <div key={p.id} className="flex items-center justify-between text-xs py-2 border-b border-white/10 print:border-slate-200 last:border-none">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-slate-500">0{idx + 1}.</span>
                    <span className="font-extrabold text-white print:text-black">{p.name}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-600">({p.brand})</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#F94CAF]">{p.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PM Protocol */}
          <div className="p-5 rounded-2xl bg-[#080D10] border border-white/10 print:bg-slate-50 print:border-slate-300">
            <div className="flex items-center gap-2 text-[#FF85D0] font-extrabold text-sm mb-3">
              <Moon className="w-4 h-4 text-[#F94CAF]" />
              <span>Evening (PM) Cellular Repair Protocol</span>
            </div>

            <div className="space-y-2">
              {pmRoutine.map((p, idx) => (
                <div key={p.id} className="flex items-center justify-between text-xs py-2 border-b border-white/10 print:border-slate-200 last:border-none">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-slate-500">0{idx + 1}.</span>
                    <span className="font-extrabold text-white print:text-black">{p.name}</span>
                    <span className="text-[10px] text-slate-400 print:text-slate-600">({p.brand})</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#F94CAF]">{p.category}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
