"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  statusText?: string;
  color?: string;
  className?: string;
}

export function ProgressBar({
  label,
  value,
  statusText = "Optimal",
  color = "#22d3ee",
  className
}: ProgressBarProps) {
  
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("flex items-center gap-2 border-t border-slate-800/50 pt-1 mt-0.5 w-full", className)}>
      
      <div className="flex items-center gap-1 shrink-0">
          <div 
            className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" 
            style={{ backgroundColor: color, color: color }}
          />
          <span className="text-[8px] lg:text-[9px] font-bold text-slate-400 hidden sm:block">
            {label}
          </span>
          <span className="text-[8px] font-bold text-slate-400 sm:hidden">
            {label.slice(0,4)}.
          </span>
      </div>

      <div className="flex-1 h-1.5 bg-slate-800 rounded-full relative mx-1">
          <div 
            className="absolute left-0 top-0 h-full rounded-full shadow-[0_0_8px_currentColor]"
            style={{ 
                width: `${safeValue}%`,
                background: `linear-gradient(90deg, ${color}dd, ${color})`,
                color: color 
            }} 
          />
          
          <div 
            className="absolute top-2 -translate-x-1/2 flex flex-col items-center transition-all duration-500"
            style={{ left: `${safeValue}%` }}
          >
              <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-slate-500" />
          </div>
      </div>

      <div 
        className="px-2 py-[1px] rounded-full border bg-opacity-10 text-[7px] lg:text-[8px] font-bold uppercase tracking-wider shrink-0"
        style={{ 
            borderColor: `${color}4D`,
            backgroundColor: `${color}0D`,
            color: color 
        }}
      >
          {statusText}
      </div>
    </div>
  );
}