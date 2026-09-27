"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Mail, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate success
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div className="relative w-full max-w-lg bg-noir-card rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-hotpink/20 border border-hotpink flex items-center justify-center text-hotpink">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-hotpink uppercase tracking-wider block">
                DEVELOPER INQUIRY
              </span>
              <h3 className="text-lg font-bold text-white">Contact BioPass Team</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-hotpink/20 border border-hotpink flex items-center justify-center text-hotpink mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
            <p className="text-xs text-white/70 max-w-xs mx-auto leading-relaxed">
              Thank you for reaching out to BioPass. Our development and formulation intelligence team will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white uppercase tracking-wider transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@brand.com or yourname@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-hotpink focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                Message / Question / Feedback
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Inquire about API integrations, formulation data, or share ideas..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-hotpink focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <span className="text-[11px] text-white/40 font-mono">
                Direct route to BioPass core dev
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-hotpink hover:bg-hotpink-vibrant text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,0,127,0.4)] transition-all cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
