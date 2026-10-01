import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle } from 'lucide-react';

export function EwgBadge({ rating, size = 'sm' }) {
  const getEwgLevel = (score) => {
    if (score <= 2) {
      return {
        label: 'Low Hazard',
        bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
        scoreColor: 'bg-emerald-500 text-white'
      };
    }
    if (score <= 6) {
      return {
        label: 'Moderate',
        bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
        scoreColor: 'bg-amber-500 text-white'
      };
    }
    return {
      label: 'High Hazard',
      bg: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
      scoreColor: 'bg-rose-500 text-white'
    };
  };

  const { label, bg, scoreColor } = getEwgLevel(rating);

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xl border text-[11px] font-extrabold font-mono ${bg}`}>
      <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-black ${scoreColor}`}>
        {rating}
      </span>
      <span>EWG</span>
    </span>
  );
}

export function ComedogenicBadge({ rating }) {
  const getRatingInfo = (r) => {
    if (r === 0) return { label: '0/5 Pore Safe', bg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' };
    if (r <= 2) return { label: `${r}/5 Low Clog`, bg: 'bg-teal-500/15 border-teal-500/30 text-teal-300' };
    if (r === 3) return { label: `${r}/5 Moderate`, bg: 'bg-amber-500/15 border-amber-500/30 text-amber-300' };
    return { label: `${r}/5 Pore Clogging`, bg: 'bg-rose-500/15 border-rose-500/30 text-rose-300' };
  };

  const { label, bg } = getRatingInfo(rating);

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xl border text-[10px] font-bold ${bg}`}>
      <span>{label}</span>
    </span>
  );
}

export function FungalAcneBadge({ isSafe }) {
  if (isSafe) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl border text-[10px] font-bold bg-[#F94CAF]/15 border-[#F94CAF]/30 text-[#FF85D0]">
        <ShieldCheck className="w-3 h-3 text-[#F94CAF]" />
        <span>Malassezia Safe</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl border text-[10px] font-bold bg-amber-500/15 border-amber-500/30 text-amber-300">
      <AlertTriangle className="w-3 h-3 text-amber-400" />
      <span>Fungal Acne Trigger</span>
    </span>
  );
}
