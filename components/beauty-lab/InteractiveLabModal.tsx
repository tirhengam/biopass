"use client";

import React, { useState } from "react";
import { LabItem } from "@/data/beautyLabsData";
import { X, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Play, RotateCcw, Beaker } from "lucide-react";

interface InteractiveLabModalProps {
  lab: LabItem | null;
  isOpen: boolean;
  onClose: () => void;
  onJoinClick?: () => void;
}

export default function InteractiveLabModal({ lab, isOpen, onClose, onJoinClick }: InteractiveLabModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  if (!isOpen || !lab) return null;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setHasAnswered(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasAnswered(false);
  };

  const currentOption = selectedOption !== null ? lab.sampleChallenge.options[selectedOption] : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B132B]/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 space-y-6 text-[#0F172A] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative background gradient */}
        <div className={`absolute top-0 right-0 w-96 h-48 bg-gradient-to-bl ${lab.colors.gradient} opacity-50 blur-2xl pointer-events-none`} />

        {/* Top Header */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm border ${lab.colors.border} ${lab.colors.bg}`}>
              <span>{lab.emoji}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full ${lab.colors.badgeBg} ${lab.colors.badgeText}`}>
                  {lab.tag}
                </span>
                <span className="text-xs text-[#64748B] font-medium">Virtual Simulator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132B] tracking-tight">
                {lab.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Title & Mission */}
        <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5 relative z-10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B132B] uppercase tracking-wider">
            <Play className="w-3.5 h-3.5 text-[#3B82F6] fill-current" />
            <span>Interactive Mission: {lab.gameTitle}</span>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {lab.gameDescription}
          </p>
        </div>

        {/* Question Challenge Sandbox */}
        <div className="space-y-4 relative z-10">
          <div className="text-xs sm:text-sm font-bold text-[#0B132B]">
            {lab.sampleChallenge.question}
          </div>

          <div className="space-y-2.5">
            {lab.sampleChallenge.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnStyle = "bg-[#FFFFFF] hover:bg-[#F8FAFC] border-[#E2E8F0] text-[#1E293B]";
              if (hasAnswered) {
                if (opt.correct) {
                  btnStyle = "bg-[#ECFDF5] border-[#A7F3D0] text-[#065F46] font-semibold";
                } else if (isSelected && !opt.correct) {
                  btnStyle = "bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]";
                } else {
                  btnStyle = "bg-[#F8FAFC] border-[#E2E8F0] text-[#94A3B8] opacity-60";
                }
              } else if (isSelected) {
                btnStyle = "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]";
              }

              return (
                <button
                  key={idx}
                  onClick={() => !hasAnswered && handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-3.5 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                >
                  <span className="leading-relaxed">{opt.text}</span>
                  {hasAnswered && opt.correct && (
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 ml-2" />
                  )}
                  {hasAnswered && isSelected && !opt.correct && (
                    <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback message */}
          {hasAnswered && currentOption && (
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed animate-in fade-in duration-200 ${
              currentOption.correct 
                ? "bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]" 
                : "bg-[#FFF1F2] border-[#FECDD3] text-[#9F1239]"
            }`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {currentOption.correct ? (
                  <>
                    <Sparkles className="w-4 h-4 text-[#16A34A]" />
                    <span>Scientific Insight:</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-[#E11D48]" />
                    <span>Let's rethink:</span>
                  </>
                )}
              </div>
              <div>{currentOption.explanation}</div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10 border-t border-[#E2E8F0]">
          {hasAnswered ? (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Experiment</span>
            </button>
          ) : (
            <span className="text-[11px] text-[#94A3B8]">
              Select an option to test your hypothesis.
            </span>
          )}

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#F8FAFC] text-xs font-bold text-[#475569] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                if (onJoinClick) onJoinClick();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#818CF8] to-[#F472B6] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Unlock Full Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
