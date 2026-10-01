"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Calendar, Flame, RefreshCw } from "lucide-react";

interface JourneyBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
}

export const JourneyBuilderModal: React.FC<JourneyBuilderModalProps> = ({
  isOpen,
  onClose,
  initialGoal = "Evening skin tone & morning radiance",
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedGoal, setSelectedGoal] = useState(initialGoal);
  const [selectedPace, setSelectedPace] = useState("Balanced (4-5 targeted steps)");
  const [selectedTolerance, setSelectedTolerance] = useState("Moderate (introduce actives in rotation)");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const goals = [
    { id: "glow", label: "Evening skin tone & morning radiance", icon: "✨", desc: "Vitamin C + Niacinamide targeted rotation" },
    { id: "barrier", label: "Restoring skin barrier & calming redness", icon: "🛡️", desc: "Ceramides, Centella & non-acid recovery" },
    { id: "texture", label: "Smoothing texture & pore refinement", icon: "💎", desc: "Gentle PHA, peptides & barrier pacing" },
    { id: "hydration", label: "Deep hydration & cellular elasticity", icon: "💧", desc: "Multi-weight Hyaluronic & copper peptide" },
  ];

  const paces = [
    { id: "minimal", label: "Minimalist (3 essential steps)", desc: "Cleanser, Single Active, Barrier SPF" },
    { id: "balanced", label: "Balanced (4-5 targeted steps)", desc: "Targeted morning/night rotation with recovery days" },
    { id: "advanced", label: "Comprehensive (Advanced care)", desc: "Milestone-driven multi-ingredient roadmap" },
  ];

  const tolerances = [
    { id: "sensitive", label: "Easily sensitized (Start ultra-gentle)", note: "BioPass will insert extra recovery days" },
    { id: "moderate", label: "Moderate (Introduce actives in rotation)", note: "Balanced 2-day active, 1-day recovery cadence" },
    { id: "resilient", label: "Resilient skin (Ready for active synergy)", note: "Optimized multi-phase roadmap pacing" },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 2 | 3);
    } else {
      setStep(4);
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-2xl bg-[#0F0E13] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#7C3AED]/20 to-transparent blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step < 4 ? (
          <div>
            {/* Header Steps */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-widest text-violet-400 font-medium">Step {step} of 3</span>
              <div className="flex-1 flex gap-1.5 h-1">
                <div className={`h-full flex-1 rounded-full ${step >= 1 ? "bg-violet-500" : "bg-white/10"}`} />
                <div className={`h-full flex-1 rounded-full ${step >= 2 ? "bg-violet-500" : "bg-white/10"}`} />
                <div className={`h-full flex-1 rounded-full ${step >= 3 ? "bg-violet-500" : "bg-white/10"}`} />
              </div>
            </div>

            {/* Step 1: Goal */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
                    What is your primary <span className="font-normal text-violet-300">beauty goal</span>?
                  </h3>
                  <p className="text-sm text-stone-400">
                    BioPass uses this to calibrate your first foundation phase and ingredient rotation.
                  </p>
                </div>

                <div className="space-y-3">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoal(g.label)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                        selectedGoal === g.label
                          ? "bg-violet-950/40 border-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-2xl">{g.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-stone-100 text-sm sm:text-base">{g.label}</div>
                        <div className="text-xs text-stone-400 mt-0.5">{g.desc}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                        selectedGoal === g.label ? "border-violet-400 bg-violet-500 text-white" : "border-white/20"
                      }`}>
                        {selectedGoal === g.label && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Pace */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
                    What routine pace fits your <span className="font-normal text-violet-300">daily lifestyle</span>?
                  </h3>
                  <p className="text-sm text-stone-400">
                    A plan only works if you can stick to it consistently.
                  </p>
                </div>

                <div className="space-y-3">
                  {paces.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPace(p.label)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                        selectedPace === p.label
                          ? "bg-violet-950/40 border-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-stone-100 text-sm sm:text-base">{p.label}</div>
                        <div className="text-xs text-stone-400 mt-1">{p.desc}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                        selectedPace === p.label ? "border-violet-400 bg-violet-500 text-white" : "border-white/20"
                      }`}>
                        {selectedPace === p.label && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Skin Tolerance */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
                    How does your skin react to <span className="font-normal text-violet-300">potent actives</span>?
                  </h3>
                  <p className="text-sm text-stone-400">
                    BioPass never overwhelms skin. Rest days are as important as active days.
                  </p>
                </div>

                <div className="space-y-3">
                  {tolerances.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTolerance(t.label)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                        selectedTolerance === t.label
                          ? "bg-violet-950/40 border-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                          : "bg-white/[0.03] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-stone-100 text-sm sm:text-base">{t.label}</div>
                        <div className="text-xs text-stone-400 mt-1">{t.note}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                        selectedTolerance === t.label ? "border-violet-400 bg-violet-500 text-white" : "border-white/20"
                      }`}>
                        {selectedTolerance === t.label && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => (prev - 1) as 1 | 2)}
                  className="text-xs uppercase tracking-wider text-stone-400 hover:text-white px-4 py-2"
                >
                  Back
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-900 font-medium text-sm hover:bg-stone-200 transition-all shadow-lg"
              >
                {step === 3 ? "Generate My Roadmap" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Step 4: Roadmap Preview */
          <div>
            {!isSubmitted ? (
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Roadmap Calibrated
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-2">
                    Your Personalized <span className="font-normal text-violet-300">Beauty Roadmap</span>
                  </h3>
                  <p className="text-sm text-stone-400">
                    Configured for: <strong className="text-stone-200">{selectedGoal}</strong>
                  </p>
                </div>

                {/* Conceptual Roadmap Preview Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-violet-400 font-mono">Phase 01</span>
                      <h4 className="text-base font-medium text-white">Foundation & Barrier Calibration</h4>
                    </div>
                    <span className="text-xs text-stone-400 bg-white/5 px-2.5 py-1 rounded-full">Weeks 1–2</span>
                  </div>

                  {/* 7-day visual calendar rhythm */}
                  <div>
                    <div className="text-xs text-stone-400 mb-2 flex items-center justify-between">
                      <span>Your Weekly Ingredient Rhythm:</span>
                      <span className="text-[10px] text-stone-400">Rest days highlighted</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1.5 text-center">
                      {[
                        { day: "MON", color: "bg-purple-500", label: "NIA", type: "Niacinamide" },
                        { day: "TUE", color: "bg-amber-500", label: "VIT C", type: "Vitamin C" },
                        { day: "WED", color: "bg-sky-500", label: "PEP", type: "Peptide" },
                        { day: "THU", color: "border-2 border-stone-500 bg-transparent", label: "REST", type: "Recovery" },
                        { day: "FRI", color: "bg-purple-500", label: "NIA", type: "Niacinamide" },
                        { day: "SAT", color: "bg-amber-500", label: "VIT C", type: "Vitamin C" },
                        { day: "SUN", color: "border-2 border-stone-500 bg-transparent", label: "REST", type: "Recovery" },
                      ].map((item, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                          <span className="text-[10px] text-stone-400 font-mono">{item.day}</span>
                          <div className={`w-3.5 h-3.5 rounded-full my-1.5 ${item.color}`} />
                          <span className="text-[9px] font-mono text-stone-300">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-stone-400 block mb-0.5">First Milestone Check-in:</span>
                      <strong className="text-stone-200">Day 14 (Barrier Resilience Review)</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-stone-400 block mb-0.5">Planned Active Synergy:</span>
                      <strong className="text-stone-200">10% Ascorbyl Glucoside + Zinc PCA</strong>
                    </div>
                  </div>
                </div>

                {/* Email Capture to save roadmap */}
                <form onSubmit={handleFinish} className="space-y-3">
                  <label htmlFor="user-email" className="block text-xs font-mono uppercase tracking-wider text-stone-300">
                    Save roadmap & receive your daily schedule
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      id="user-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-violet-400"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all whitespace-nowrap shadow-lg shadow-violet-900/30"
                    >
                      Save My Roadmap
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    By saving, you reserve your personal roadmap. No spam, ever.
                  </p>
                </form>
              </div>
            ) : (
              /* Success confirmation */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-white">Your BioPass Roadmap is Reserved!</h3>
                <p className="text-sm text-stone-400 max-w-md mx-auto">
                  We sent your personalized roadmap summary and Day 1 Foundation routine to <strong className="text-white">{email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium uppercase tracking-wider transition-colors"
                  >
                    Close & Explore Website
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
