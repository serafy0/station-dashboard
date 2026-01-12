"use client";

import React, { useId } from "react";

interface GaugeProps {
  value: number;
  min?: number;
  max?: number;
  unit?: string;
  ticks?: number[];
  colors?: {
    start: string;
    mid: string;
    end: string;
    text: string;
  };
}

export function Gauge({
  value,
  min = 0,
  max = 100,
  unit = "",
  ticks = [0, 25, 50, 75, 100],
  colors = {
    start: "#0ea5e9", 
    mid: "#22d3ee",   
    end: "#4ade80",  
    text: "#22d3ee"  
  }
}: GaugeProps) {
  const gradientId = useId();
  const filterId = useId();

  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const rotation = -90 + (percentage * 180);

  const digitArray = Math.round(value).toString().padStart(5, "0").split("");

  return (
    <div className="w-full h-full flex flex-col relative pt-1">
      <div className="flex-1 w-full flex items-center justify-center min-h-0">
        <svg viewBox="0 0 200 110" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.start} />
              <stop offset="50%" stopColor={colors.mid} />
              <stop offset="100%" stopColor={colors.end} />
            </linearGradient>
            <filter id={filterId}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
          
          <path 
            d="M 20 100 A 80 80 0 0 1 180 100" 
            fill="none" 
            stroke={`url(#${gradientId})`} 
            strokeWidth="6" 
            strokeLinecap="round" 
            filter={`url(#${filterId})`} 
          />
          
          <path 
            d="M 40 100 A 60 60 0 0 1 160 100" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeOpacity="0.9"
          />

          <g fill="white">
             <circle cx="20" cy="100" r="3" /> 
             <circle cx="43.5" cy="43.5" r="3" />
             <circle cx="100" cy="20" r="3" /> 
             <circle cx="156.5" cy="43.5" r="3" />
             <circle cx="180" cy="100" r="3" />
          </g>

          <g style={{ transformOrigin: "100px 100px", transform: `rotate(${rotation}deg)`, transition: "transform 1s ease-out" }}>
            <line x1="100" y1="100" x2="100" y2="45" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="100" r="6" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
          </g>

          {ticks.length === 5 && (
            <>
              <text x="5" y="105" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">{ticks[0]}</text>
              <text x="35" y="40" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">{ticks[1]}</text>
              <text x="100" y="10" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">{ticks[2]}</text>
              <text x="165" y="40" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">{ticks[3]}</text>
              <text x="195" y="105" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="bold">{ticks[4]}</text>
            </>
          )}
        </svg>
      </div>

      <div className="h-[15%] min-h-[10px] w-full flex items-center justify-center gap-[2px] mb-1 ml-3 ">
        {digitArray.map((d, i) => (
          <div key={i} className="h-full aspect-[2/3] max-h-[24px] bg-[#0b121f] border border-slate-700 rounded-[1px] flex items-center justify-center shadow-inner">
             <span 
               className="font-mono font-bold text-[8px] lg:text-[10px] xl:text-[11px]"
               style={{ color: colors.text }}
             >
                {d}
             </span>
          </div>
        ))}
        <span className="text-[7px] lg:text-[8px] text-slate-500 font-bold self-end mb-0.5 ml-1">{unit}</span>
      </div>
    </div>
  );
}