import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X, Sparkles } from 'lucide-react';
import { useBioPass } from '../../context/BioPassContext.jsx';

export default function Toast() {
  const { toast } = useBioPass();
  if (!toast) return null;

  const { message, type } = toast;

  let bg = "bg-[#2C221E] border-[#4A3A32] text-white";
  let icon = <Sparkles className="w-4 h-4 text-[#F94CAF]" />;

  if (type === 'success') {
    bg = "bg-white border-[#F94CAF]/40 text-[#2C221E] shadow-magenta";
    icon = <CheckCircle2 className="w-4 h-4 text-[#F94CAF]" />;
  } else if (type === 'warning') {
    bg = "bg-white border-amber-300 text-[#2C221E] shadow-lg";
    icon = <AlertTriangle className="w-4 h-4 text-amber-600" />;
  } else if (type === 'error') {
    bg = "bg-white border-rose-300 text-rose-900 shadow-lg";
    icon = <AlertCircle className="w-4 h-4 text-rose-600" />;
  }

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 animate-bounce-short">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl backdrop-blur-md ${bg}`}>
        {icon}
        <span className="text-xs sm:text-sm font-bold pr-2">{message}</span>
      </div>
    </div>
  );
}
