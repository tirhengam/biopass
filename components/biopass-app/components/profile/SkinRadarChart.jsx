import React from 'react';

export default function SkinRadarChart({ scores, size = 280 }) {
  const dimensions = [
    { key: 'hydrationNeeds', label: 'Hydration', value: scores?.hydrationNeeds || 65 },
    { key: 'barrierResilience', label: 'Barrier', value: scores?.barrierResilience || 70 },
    { key: 'sensitivityIndex', label: 'Sensitivity', value: scores?.sensitivityIndex || 50 },
    { key: 'oilRegulation', label: 'Sebum', value: scores?.oilRegulation || 60 },
    { key: 'exfoliationTolerance', label: 'Tolerance', value: scores?.exfoliationTolerance || 65 },
  ];

  const numAxes = dimensions.length;
  const center = size / 2;
  const radius = (size / 2) - 42;

  const getCoordinates = (index, ratio) => {
    const angle = (Math.PI * 2 / numAxes) * index - Math.PI / 2;
    const r = radius * ratio;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const points = dimensions.map((d, i) => {
    const ratio = Math.max(0.1, Math.min(1.0, d.value / 100));
    const { x, y } = getCoordinates(i, ratio);
    return `${x},${y}`;
  }).join(' ');

  const levels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grid Concentric Polygons */}
        {levels.map((level, lvlIdx) => {
          const gridPoints = dimensions.map((_, i) => {
            const { x, y } = getCoordinates(i, level);
            return `${x},${y}`;
          }).join(' ');
          return (
            <polygon
              key={lvlIdx}
              points={gridPoints}
              fill={lvlIdx === 3 ? 'rgba(17, 26, 32, 0.6)' : 'transparent'}
              stroke="#2A3844"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Axis Lines */}
        {dimensions.map((_, i) => {
          const { x, y } = getCoordinates(i, 1.0);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#2A3844"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          );
        })}

        {/* Shaded Data Polygon (Vibrant Magenta with Soft Gradient) */}
        <polygon
          points={points}
          fill="rgba(249, 76, 175, 0.28)"
          stroke="#F94CAF"
          strokeWidth="2.5"
          className="transition-all duration-700 ease-out"
          style={{ filter: 'drop-shadow(0 0 8px rgba(249, 76, 175, 0.4))' }}
        />

        {/* Data Vertices (Dots) */}
        {dimensions.map((d, i) => {
          const ratio = Math.max(0.1, Math.min(1.0, d.value / 100));
          const { x, y } = getCoordinates(i, ratio);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4.5"
              fill="#F94CAF"
              stroke="#FFFFFF"
              strokeWidth="2"
              className="drop-shadow-md"
            />
          );
        })}

        {/* Axis Labels */}
        {dimensions.map((d, i) => {
          const { x, y } = getCoordinates(i, 1.25);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] font-extrabold fill-slate-300 tracking-wider uppercase"
            >
              {d.label}
              <tspan x={x} dy="11" className="text-[9px] font-bold fill-[#F94CAF]">
                {d.value}%
              </tspan>
            </text>
          );
        })}
      </svg>
    </div>
  );
}
