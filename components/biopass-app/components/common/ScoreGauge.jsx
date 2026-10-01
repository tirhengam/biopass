import React from 'react';

export default function ScoreGauge({ score, size = 120, strokeWidth = 10, showLabel = true }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const clampedScore = Math.max(0, Math.min(100, score || 0));
  const strokeDashoffset = circumference - (clampedScore / 100) * circumference;

  const getScoreData = (val) => {
    if (val >= 90) {
      return {
        color: '#F94CAF',
        secondary: '#FF85D0',
        textClass: 'text-[#F94CAF]',
        label: 'Exceptional',
        badgeBg: 'bg-[#F94CAF]/20 text-[#F94CAF] border-[#F94CAF]/40'
      };
    }
    if (val >= 75) {
      return {
        color: '#FF65C5',
        secondary: '#FFA3E5',
        textClass: 'text-[#FF65C5]',
        label: 'High Match',
        badgeBg: 'bg-[#FF65C5]/20 text-[#FF65C5] border-[#FF65C5]/40'
      };
    }
    if (val >= 55) {
      return {
        color: '#F59E0B',
        secondary: '#FCD34D',
        textClass: 'text-amber-400',
        label: 'Moderate',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
      };
    }
    return {
      color: '#F43F5E',
      secondary: '#FB7185',
      textClass: 'text-rose-400',
      label: 'Caution / Low',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
    };
  };

  const { color, secondary, textClass, label, badgeBg } = getScoreData(clampedScore);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id={`gauge-grad-${clampedScore}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={secondary} />
            </linearGradient>
          </defs>

          {/* Background Track Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#16222B"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* Progress Indicator Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#gauge-grad-${clampedScore})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0px 0px 6px ${color}66)`
            }}
          />
        </svg>

        {/* Center Text Score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
          <div className="flex items-baseline justify-center">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {clampedScore}
            </span>
            <span className="text-xs font-bold text-[#F94CAF] ml-0.5">%</span>
          </div>
          <span className="text-[9px] uppercase tracking-widest font-extrabold text-slate-400">
            Match
          </span>
        </div>
      </div>

      {showLabel && (
        <span className={`mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border uppercase tracking-wider ${badgeBg}`}>
          {label}
        </span>
      )}
    </div>
  );
}
