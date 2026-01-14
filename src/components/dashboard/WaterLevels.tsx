"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { SegmentedBar } from "@/components/ui/SegmentedBar"; 
import { TANK_1_DATA, TANK_2_DATA, TANK_3_DATA, SUMP_LEVEL_DATA } from "@/lib/store/station-level-data";
import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

function useLatestData(series: TrendDataSeries) {
    const latestValue = series.data[series.data.length - 1];
    const max = series.max || 10;
    const percentage = Math.round(Math.min(Math.max((latestValue / max) * 100, 0), 100));
    const displayValue = latestValue.toFixed(series.decimals ?? 1);
    
    return { percentage, displayValue, unit: series.unit, color: series.color || "#22d3ee" };
}

function WaterTank({ percentage }: { percentage: number }) {
  return (
    <div className="h-full w-[70px] bg-[#0b1221] border border-slate-800 rounded-2xl p-1 relative shadow-inner group">
      <div className="relative w-full h-full bg-[#1e293b]/30 rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm">
        <div 
            className="absolute inset-0 opacity-20"
            style={{ 
                backgroundImage: "linear-gradient(#22d3ee 1px, transparent 1px)", 
                backgroundSize: "100% 10px" 
            }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
          style={{ height: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb] via-[#0ea5e9] to-[#22d3ee] opacity-80" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/20 rounded-xl pointer-events-none" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
}

export function WaterLevels() {
    const START_COLOR = "#22d3ee"; 

    const tank1 = useLatestData(TANK_1_DATA);
    const tank2 = useLatestData(TANK_2_DATA);
    const tank3 = useLatestData(TANK_3_DATA);
    const sump = useLatestData(SUMP_LEVEL_DATA);
    const mainTankPercentage = Math.round((tank1.percentage + tank2.percentage + tank3.percentage) / 3);

    return (
        <div className="w-full h-full flex flex-col p-3 gap-1">
            <div className="flex-1 flex gap-4 min-h-0 items-center">
                <div className="shrink-0 h-[90%]">
                    <WaterTank percentage={mainTankPercentage} />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-15">
                    <SegmentedBar 
                        label="Tank 1" 
                        value={tank1.percentage} 
                        displayValue={`${tank1.displayValue} ${tank1.unit}`}
                        fromColor={START_COLOR}
                        toColor={tank1.color} 
                    />
                    <SegmentedBar 
                        label="Tank 2" 
                        value={tank2.percentage} 
                        displayValue={`${tank2.displayValue} ${tank2.unit}`}
                        fromColor={START_COLOR}
                        toColor={tank2.color} 
                    />
                    <SegmentedBar 
                        label="Tank 3" 
                        value={tank3.percentage} 
                        displayValue={`${tank3.displayValue} ${tank3.unit}`}
                        fromColor={START_COLOR}
                        toColor={tank3.color} 
                    />
                </div>
            </div>

            <div className="shrink-0 pt-2 border-t border-slate-800/50">
                <div className="-mt-1">
                    <ProgressBar 
                        label="Sump Level"
                        value={sump.percentage}
                        statusText={`${sump.displayValue} ${sump.unit}`}
                        statusType="text"
                        color={sump.color}
                        className="border-none mt-0 pt-1"
                    />
                </div>
            </div>
        </div>
    );
}