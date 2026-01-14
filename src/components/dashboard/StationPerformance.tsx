"use client";

import { STATION_PERFORMANCE_DATA } from "@/lib/store/station-performance-data";
import { PerformanceGauge } from "../ui/PerformanceGauge";
import { StatusPill } from "../ui/StatusPill";




export function StationPerformance() {
  const data = STATION_PERFORMANCE_DATA;

  return (
    <div className="w-full h-full flex flex-col relative py-1">
        
        <div className="flex items-center gap-3 px-1 mb-1">
            <StatusPill label="Pumps On" count={data.pumpsOn} isActive={true} />
            
            <div className="w-[1px] h-6 bg-[#1e293b] opacity-50" />
            
            <StatusPill label="Pumps Off" count={data.pumpsOff} isActive={false} />
        </div>

        <div className="flex-1 flex items-center justify-center min-h-0">
            <PerformanceGauge percentage={data.efficiency} />
        </div>

     
    </div>
  );
}