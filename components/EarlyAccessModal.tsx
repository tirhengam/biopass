"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Building2, User } from "lucide-react";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "individual" | "enterprise";
}

export default function EarlyAccessModal({
  isOpen,
  onClose,
  defaultMode = "individual",
}: EarlyAccessModalProps) {
  const [mode, setMode] = useState<"individual" | "enterprise">(defaultMode);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-onyx/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-surface border border-surface-hairline rounded-3xl shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-canvas border border-surface-hairline flex items-center justify-center text-onyx-muted hover:text-onyx"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-sage-50 text-sage-600 border border-sage-200 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-onyx">You're on the BioPass Priority Roster</h3>
              <p className="text-xs text-onyx-muted max-w-sm mx-auto">
                {mode === "enterprise"
                  ? "Our regulatory solutions team will reach out to schedule your personalized DPP & GEO deployment walkthrough."
                  : "We've reserved your access pass. Watch your inbox for your biological diagnostic profile onboarding link."}
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-onyx text-surface text-xs font-bold uppercase tracking-wide"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-[10px] font-bold uppercase tracking-micro text-sage-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Priority Access Enrollment</span>
              </div>
              <h3 className="text-2xl font-extrabold text-onyx tracking-tight">
                {mode === "enterprise" ? "Book Enterprise DPP Demo" : "Get Early Access to BioPass"}
              </h3>
              <p className="text-xs text-onyx-muted">
                Join cosmetic formulators, labs, and individuals experiencing verified formulation intelligence.
              </p>
            </div>

            {/* Mode Toggle inside modal */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-canvas border border-surface-hairline rounded-2xl">
              <button
                type="button"
                onClick={() => setMode("individual")}
                className={`py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors ${
                  mode === "individual"
                    ? "bg-surface text-onyx shadow-sm border border-surface-hairline"
                    : "text-onyx-muted hover:text-onyx"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>For Individuals</span>
              </button>
              <button
                type="button"
                onClick={() => setMode("enterprise")}
                className={`py-2 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors ${
                  mode === "enterprise"
                    ? "bg-surface text-onyx shadow-sm border border-surface-hairline"
                    : "text-onyx-muted hover:text-onyx"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>For Brands / B2B</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-micro text-onyx mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-surface-hairline text-sm text-onyx placeholder:text-onyx-dim focus:outline-none focus:border-sage-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-micro text-onyx mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-surface-hairline text-sm text-onyx placeholder:text-onyx-dim focus:outline-none focus:border-sage-600"
                />
              </div>

              {mode === "enterprise" && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-micro text-onyx mb-1">
                    Brand / Company & Estimated SKUs
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lumina Cosmetics (25 SKUs)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-surface-hairline text-sm text-onyx placeholder:text-onyx-dim focus:outline-none focus:border-sage-600"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-onyx text-surface hover:bg-onyx-soft text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>{mode === "enterprise" ? "Request Enterprise Walkthrough" : "Join Priority Roster"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[10px] text-center text-onyx-dim">
                Strict privacy guarantee · No marketing spam · Clinical data integrity
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
