"use client";

import { cn } from "@/lib/utils";


interface StatusCardProps {
  title: string;
  count: number;
  max: number;
  activeColor?: string;
}


export function StatusCard({ title, count, max, activeColor = "#3b82f6" }: StatusCardProps) {
  const size = 100; 
  const strokeWidth = 5;
  const radius = 38; 
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  const percentage = Math.min(Math.max(count / max, 0), 1);
  const dashOffset = circumference - (percentage * circumference);

  const dashCount = 30; 
  const dashLength = circumference / dashCount;
  const dashGap = 2; 

  return (
    <div className="flex-1 bg-gradient-to-b from-[#0f172a] to-[#0b1221] border border-slate-800 rounded-xl flex flex-col items-center justify-start py-3 px-1 relative overflow-hidden shadow-inner">
      
      <span className="text-[10px] xl:text-[11px] text-[#0ea5e9] font-bold tracking-wider mb-2 z-10">
        {title}
      </span>

      <div className="relative flex-1 w-full flex items-center justify-center min-h-0">
        <div className="relative w-full h-full max-w-[90px] max-h-[90px] aspect-square">
          
          <svg className="w-full h-full rotate-90" viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#1e293b" 
              strokeWidth={strokeWidth - 2}
              strokeDasharray={`${dashLength - dashGap} ${dashGap}`} 
            />

            {count > 0 && (
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={activeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out drop-shadow-[0_0_4px_rgba(59,130,246,0.6)]"
              />
            )}
            
            <circle
               cx={center}
               cy={center}
               r={radius - 8}
               fill="none"
               stroke="#334155"
               strokeWidth="1"
               strokeDasharray="2 2"
               opacity="0.5"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <span className={cn(
              "text-xl xl:text-2xl font-bold leading-none font-sans",
              count > 0 ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" : "text-slate-500"
            )}>
              {count}
            </span>
            <span className={cn(
              "text-[9px] font-bold uppercase mt-1 tracking-wide",
               count > 0 ? "text-[#22d3ee]" : "text-slate-600"
            )}>
              ON
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}