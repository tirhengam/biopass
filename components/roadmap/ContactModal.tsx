"use client";

import React, { useState } from "react";
import { X, Mail, CheckCircle2, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "Roadmap Methodology", message: "" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg bg-[#0F0E13] border border-white/10 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-violet-400 font-mono">BioPass Advisory</span>
              <h3 className="text-2xl font-light text-white">Contact Our Team</h3>
              <p className="text-xs text-stone-400">
                Inquiries regarding our beauty roadmap algorithm, dermatology partnerships, or institutional research.
              </p>
            </div>

            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono text-stone-300 mb-1">Your Name</label>
              <input
                id="contact-name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-violet-400"
                placeholder="Eleanor Vance"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono text-stone-300 mb-1">Email Address</label>
              <input
                id="contact-email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-violet-400"
                placeholder="eleanor@domain.com"
              />
            </div>

            <div>
              <label htmlFor="contact-topic" className="block text-xs font-mono text-stone-300 mb-1">Topic</label>
              <select
                id="contact-topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-400"
              >
                <option value="Roadmap Methodology" className="bg-[#0F0E13]">Roadmap Methodology & Science</option>
                <option value="Early Access" className="bg-[#0F0E13]">Early Access & VIP Beta</option>
                <option value="Brand Partnership" className="bg-[#0F0E13]">Cosmetic Brand & Formulator Partnership</option>
                <option value="Press" className="bg-[#0F0E13]">Press & Media</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-stone-300 mb-1">Message</label>
              <textarea
                id="contact-message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-violet-400 resize-none"
                placeholder="How can we help your beauty journey?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-white text-stone-900 font-medium text-sm hover:bg-stone-200 transition-colors shadow-lg mt-2"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-light text-white">Message Received</h3>
            <p className="text-sm text-stone-400 max-w-sm mx-auto">
              Thank you, {formData.name}. Our beauty intelligence team will be in touch within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
