"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, User, Mail, School } from "lucide-react";

interface JoinLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinLabModal({ isOpen, onClose }: JoinLabModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "student" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B132B]/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 space-y-6 text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B]">
              Welcome to the Lab!
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
              We've reserved your virtual lab bench, <strong>{formData.name || "Explorer"}</strong>. Check your inbox for your lab passport and your first formulation badge!
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#0B132B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Start Exploring
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[10px] font-bold text-[#6D28D9] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STUDENT & CREATOR ACCESS</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B132B] tracking-tight">
                Join the Beauty Lab
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Unlock all 8 virtual labs, track your experiments, and earn cosmetic science badges. 100% educational, zero sales pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Your Name / Nickname</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#6366F1]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="alex@school.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#6366F1]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">I am a...</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#6366F1]"
                >
                  <option value="student">High School / College Student (15-21)</option>
                  <option value="curious">Curious Beauty Science Enthusiast</option>
                  <option value="parent">Parent / Educator</option>
                  <option value="other">Cosmetic Formulation Curious</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] via-[#EC4899] to-[#F97316] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Create Free Lab Account</span>
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
