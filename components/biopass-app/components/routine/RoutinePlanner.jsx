import React, { useState } from 'react';
import { 
  Sun, Moon, Plus, Sparkles, RefreshCw, Printer, 
  ShieldCheck, AlertTriangle, Layers, Calendar, ArrowRight, Dna 
} from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';
import { PRODUCTS_DATABASE } from '../../data/productsDatabase.js';
import { analyzeRoutineClashes } from '../../services/clashDetector.js';
import RoutineStepCard from './RoutineStepCard.jsx';
import ClashAlertBanner from './ClashAlertBanner.jsx';
import RoutineTracker from './RoutineTracker.jsx';
import RoutineExportModal from './RoutineExportModal.jsx';

export default function RoutinePlanner({ onSelectProduct }) {
  const { 
    profile, 
    amRoutine, 
    setAmRoutine, 
    pmRoutine, 
    setPmRoutine, 
    removeFromRoutine,
    showToast,
    setSelectedProduct,
    setActiveTab
  } = useBioPass();

  const [activeTime, setActiveTime] = useState('am');
  const [isAddPickerOpen, setIsAddPickerOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const currentRoutine = activeTime === 'am' ? amRoutine : pmRoutine;
  const setRoutine = activeTime === 'am' ? setAmRoutine : setPmRoutine;

  const clashResult = analyzeRoutineClashes(currentRoutine, activeTime);

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const updated = [...currentRoutine];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    setRoutine(updated);
  };

  const handleMoveDown = (index) => {
    if (index === currentRoutine.length - 1) return;
    const updated = [...currentRoutine];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    setRoutine(updated);
  };

  const handleResetToRecommended = () => {
    const starterCleanser = PRODUCTS_DATABASE.find(p => p.id === 'cerave-hydrating-cleanser');
    const starterSerum = profile.concerns.includes('acne')
      ? PRODUCTS_DATABASE.find(p => p.id === 'the-ordinary-niacinamide-zinc')
      : PRODUCTS_DATABASE.find(p => p.id === 'skinceuticals-ce-ferulic');
    const starterSpf = PRODUCTS_DATABASE.find(p => p.id === 'beauty-of-joseon-relief-sun');
    const starterBha = PRODUCTS_DATABASE.find(p => p.id === 'paulas-choice-2-bha-liquid');
    const starterMoisturizer = PRODUCTS_DATABASE.find(p => p.id === 'dr-jart-cicapair-cream');

    if (activeTime === 'am') {
      setAmRoutine([starterCleanser, starterSerum, starterSpf].filter(Boolean));
      showToast("Reset AM routine to optimal dermatological baseline!", "success");
    } else {
      setPmRoutine([starterCleanser, starterBha, starterMoisturizer].filter(Boolean));
      showToast("Reset PM routine to gentle cellular renewal protocol!", "success");
    }
  };

  const handleAddProductFromPicker = (prod) => {
    if (currentRoutine.some(p => p.id === prod.id)) {
      showToast("Product is already in this routine", "warning");
      return;
    }
    setRoutine([...currentRoutine, prod]);
    setIsAddPickerOpen(false);
    showToast(`Added ${prod.name} to ${activeTime.toUpperCase()} routine!`, "success");
  };

  const handleAddSpf = () => {
    const spf = PRODUCTS_DATABASE.find(p => p.category === 'sunscreen');
    if (spf && !amRoutine.some(p => p.id === spf.id)) {
      setAmRoutine([...amRoutine, spf]);
      showToast("Broad-Spectrum SPF added to AM routine!", "success");
    }
  };

  return (
    <div className="w-full space-y-6 text-left">
      
      {/* Daily Routine Tracker Banner */}
      <RoutineTracker />

      {/* Routine Planner Main Console */}
      <div className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 shadow-2xl bg-[#0E161C] space-y-6">
        
        {/* Header & AM/PM Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#F94CAF]/20 text-[#FF85D0] border border-[#F94CAF]/30">
                BioPass Regimen Architect
              </span>
              <span className="text-xs text-slate-400 font-semibold">Layering & Conflict Guard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Personalized {activeTime.toUpperCase()} Skincare Routine
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* AM Tab */}
            <button
              onClick={() => setActiveTime('am')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border cursor-pointer ${
                activeTime === 'am'
                  ? 'bg-amber-500/25 text-amber-300 border-amber-500/50 shadow-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Morning (AM)</span>
            </button>

            {/* PM Tab */}
            <button
              onClick={() => setActiveTime('pm')}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border cursor-pointer ${
                activeTime === 'pm'
                  ? 'bg-[#F94CAF]/25 text-[#FF85D0] border-[#F94CAF]/50 shadow-magenta-sm'
                  : 'bg-[#080D10] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-[#F94CAF]" />
              <span>Evening (PM)</span>
            </button>

            {/* Print/Export */}
            <button
              onClick={() => setIsExportOpen(true)}
              className="p-2.5 rounded-2xl bg-[#080D10] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Print & Export Regimen"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real-Time Clash Alert Status */}
        <ClashAlertBanner 
          clashResult={clashResult} 
          timeOfDay={activeTime} 
          onAddSpf={handleAddSpf} 
        />

        {/* Routine Steps List */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-400 uppercase tracking-wider">
            <span>Ordered Application Steps ({currentRoutine.length})</span>
            <span>Layering Order: Thinnest to Thickest</span>
          </div>

          {currentRoutine.length > 0 ? (
            <div className="space-y-3">
              {currentRoutine.map((product, idx) => (
                <RoutineStepCard
                  key={`${product.id}-${idx}`}
                  product={product}
                  stepIndex={idx}
                  totalSteps={currentRoutine.length}
                  onMoveUp={() => handleMoveUp(idx)}
                  onMoveDown={() => handleMoveDown(idx)}
                  onRemove={() => removeFromRoutine(product.id, activeTime)}
                  onSelect={(p) => {
                    setSelectedProduct(p);
                    onSelectProduct(p);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-3xl bg-[#080D10] border border-white/10 p-8">
              <Calendar className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <h4 className="text-base font-extrabold text-white">Your {activeTime.toUpperCase()} Routine is Empty</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-4">
                Add products from the catalog or reset to the dermatologist recommended sequence.
              </p>
              <button
                onClick={handleResetToRecommended}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] text-white font-extrabold text-xs shadow-magenta cursor-pointer"
              >
                Populate Starter Regimen
              </button>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setIsAddPickerOpen(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#F94CAF] to-[#FF65C5] hover:from-[#E03597] hover:to-[#F94CAF] text-white font-extrabold text-xs shadow-magenta transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product to {activeTime.toUpperCase()} Step</span>
          </button>

          <button
            onClick={handleResetToRecommended}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Auto-Optimized Sequence</span>
          </button>
        </div>

      </div>

      {/* Add Product Modal Picker */}
      {isAddPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-left">
          <div className="w-full max-w-lg bg-[#0E161C] border border-white/15 rounded-3xl shadow-2xl p-6 overflow-hidden max-h-[85vh] flex flex-col">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-base font-extrabold text-white">
                Select Product for {activeTime.toUpperCase()} Routine
              </h3>
              <button onClick={() => setIsAddPickerOpen(false)} className="p-1 text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="my-4 overflow-y-auto space-y-2 pr-1 flex-1">
              {PRODUCTS_DATABASE.map(prod => (
                <div
                  key={prod.id}
                  onClick={() => handleAddProductFromPicker(prod)}
                  className="p-3 rounded-2xl bg-[#080D10] hover:bg-[#121B22] border border-white/10 hover:border-[#F94CAF]/40 transition-all cursor-pointer flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded-xl object-cover" />
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 block font-bold">{prod.brand}</span>
                      <span className="text-xs font-extrabold text-white block truncate">{prod.name}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-xl bg-[#F94CAF]/20 text-[#FF85D0] text-[11px] font-extrabold shrink-0 border border-[#F94CAF]/30 cursor-pointer">
                    + Add
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Export Regimen Modal */}
      <RoutineExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

    </div>
  );
}
