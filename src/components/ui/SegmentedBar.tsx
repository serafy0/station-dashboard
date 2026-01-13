import { getGradientColor } from "@/lib/getgradientcolor";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface SegmentedBarProps {
  label: string;
  value: number; 
  displayValue: string;
  fromColor: string; 
  toColor: string;   
}

export function SegmentedBar({ label, value, displayValue, fromColor, toColor }: SegmentedBarProps) {
  const totalSegments = 20;
  const filledSegments = Math.round((value / 100) * totalSegments);

  const segments = useMemo(() => Array.from({ length: totalSegments }), []);

  return (
    <div className="flex items-center gap-3 w-full">
      <span 
        className="text-[10px] font-bold uppercase tracking-wider w-20 shrink-0 text-right transition-colors duration-300"
        style={{ color: toColor }}
      >
        {label}
      </span>

      <div className="flex-1 h-3 flex gap-[2px]">
        {segments.map((_, i) => {
          const isFilled = i < filledSegments;
          
          const factor = i / (totalSegments - 1);
          const segmentColor = isFilled 
            ? getGradientColor(fromColor, toColor, factor) 
            : undefined;

          return (
            <div
              key={i}
              className={cn(
                "flex-1 h-full rounded-[1px] transition-all duration-500",
                !isFilled ? "bg-[#1e293b] opacity-40" : ""
              )}
              style={{
                backgroundColor: segmentColor,
                boxShadow: isFilled ? `0 0 5px ${segmentColor}` : "none",
              }}
            />
          );
        })}
      </div>

      <span 
        className="text-[11px] font-bold font-mono text-right whitespace-nowrap min-w-[45px] shrink-0"
        style={{ color: toColor }}
      >
        {displayValue}
      </span>
    </div>
  );
}