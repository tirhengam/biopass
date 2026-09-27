"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, GraduationCap, School, Mail, User, BookOpen } from "lucide-react";

interface SchoolInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchoolInquiryModal({ isOpen, onClose }: SchoolInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", schoolName: "", gradeLevel: "high_school" });

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
            <div className="w-16 h-16 rounded-full bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B132B]">
              Curriculum Request Received
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name || "Educator"}</strong>. Our STEM curriculum specialists will provide sample teacher lesson plans and virtual lab access keys to <strong>{formData.schoolName || "your school"}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#0B132B] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[10px] font-bold text-[#0369A1] uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>STEM EDUCATOR ACCESS</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B132B] tracking-tight">
                Beauty Lab for Schools
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Request pilot curriculum units, virtual experiment rubrics, and interactive class licenses for your students.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Teacher / Coordinator Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Ms. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Institutional Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@lincolnhigh.k12.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">School or Organization Name</label>
                <div className="relative">
                  <School className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Lincoln High School / STEM Club"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Target Grade Level</label>
                <select
                  value={formData.gradeLevel}
                  onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0F172A] focus:outline-none focus:border-[#0284C7]"
                >
                  <option value="middle_school">Middle School (Grades 6–8)</option>
                  <option value="high_school">High School (Grades 9–12)</option>
                  <option value="undergraduate">College / University Introductory Chemistry</option>
                  <option value="outreach">Community STEM / Youth Science Club</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0B132B] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Educator Curriculum Pack</span>
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
