"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  value: number;
  statusText?: string;
  statusType?: "pill" | "text"; 
  color?: string; 
  className?: string;
}

export function ProgressBar({
  label,
  value,
  statusText = "Optimal",
  statusType = "pill",
  color = "#22d3ee",
  className
}: ProgressBarProps) {
  
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("w-full flex items-start gap-2 border-t border-slate-800/50 pt-2 mt-1", className)}>
      
      <div className="flex items-center gap-1.5 shrink-0 h-1.5">
          <div 
            className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" 
            style={{ backgroundColor: color, color: color }}
          />
          <span className="text-[9px] font-bold text-slate-400 leading-none">
            {label}
          </span>
      </div>

      <div className="relative flex-1 mx-1 h-8"> 
        
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden absolute top-0 left-0">
             <div 
                className="h-full rounded-full shadow-[0_0_8px_currentColor]"
                style={{ 
                    width: `${safeValue}%`,
                    background: `linear-gradient(90deg, ${color}dd, ${color})`,
                    color: color 
                }} 
             />
          </div>
          
          <div 
            className="absolute top-2 flex flex-col items-center -translate-x-1/2"
            style={{ left: `${safeValue}%` }}
          >
              <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-slate-400 mb-[1px]" />
              <span className="text-[7px] text-slate-500 font-bold leading-none">
                {value}%
              </span>
          </div>
      </div>

      <div className="shrink-0 h-1.5 flex items-center">
          {statusType === "pill" ? (
            <div 
                className="px-2 py-[1px] rounded-full border bg-opacity-10 text-[8px] font-bold uppercase tracking-wider flex items-center justify-center"
                style={{ 
                    borderColor: `${color}4D`,
                    backgroundColor: `${color}0D`,
                    color: color
                }}
            >
                {statusText}
            </div>
          ) : (
             <span className="text-[9px] font-bold text-white tracking-wide leading-none">
                {statusText}
             </span>
          )}
      </div>
    </div>
  );
}