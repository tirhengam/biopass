import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Building2, ShieldCheck, Sparkles, Mail, User, Globe } from 'lucide-react';

export default function EnterpriseDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    skuCount: '1-10',
    primaryGoal: 'dpp_compliance'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#FFFFFF] border border-[#E9E6DF] p-6 sm:p-10 shadow-2xl space-y-6 text-[#191817]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#FBF9F5] hover:bg-[#E9E6DF] text-[#6E6B65] hover:text-[#191817] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#EAF1EC] text-[#2D5A43] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#191817]">Walkthrough Requested</h3>
            <p className="text-xs sm:text-sm text-[#6E6B65] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. Our regulatory and GEO deployment engineering team will review <strong>{formData.brand || 'your brand'}</strong> and reach out within 24 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#191817] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1EC] border border-[#BBD4C4] text-[10px] font-bold text-[#2D5A43] uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Enterprise Onboarding</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#191817] tracking-tight">
                Schedule a Technical DPP & GEO Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6B65]">
                Discover how BioPass generates turnkey compliant passports for EU ESPR and guarantees citations on conversational AI search.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B65]">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#6E6B65] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Dr. Elena Laurent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] text-xs text-[#191817] focus:outline-none focus:border-[#2D5A43]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B65]">Work Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#6E6B65] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="elena@auralabs.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] text-xs text-[#191817] focus:outline-none focus:border-[#2D5A43]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B65]">Brand / Lab Name</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#6E6B65] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Aura Labs"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] text-xs text-[#191817] focus:outline-none focus:border-[#2D5A43]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B65]">SKUs to Passport</label>
                  <select
                    value={formData.skuCount}
                    onChange={(e) => setFormData({ ...formData, skuCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] text-xs text-[#191817] focus:outline-none focus:border-[#2D5A43]"
                  >
                    <option value="1-5">1 - 5 Pilot Formulations</option>
                    <option value="6-25">6 - 25 SKUs (Catalog)</option>
                    <option value="26-100">26 - 100 SKUs (Brand Wide)</option>
                    <option value="100+">100+ Enterprise Multi-Brand</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B65]">Primary Strategic Focus</label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#E9E6DF] text-xs text-[#191817] focus:outline-none focus:border-[#2D5A43]"
                >
                  <option value="dpp_compliance">EU Ecodesign (ESPR 2026/2027) Compliance & GS1 QR</option>
                  <option value="geo_search">Generative Engine Optimization (AI Recommendations on Gemini/Claude)</option>
                  <option value="consumer_trust">Qualified Consumer Matching & Ingredient Transparency</option>
                  <option value="all">Full Stack (DPP + GEO + Qualified Placement)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2D5A43] hover:bg-[#234734] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Enterprise Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
