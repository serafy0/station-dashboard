"use client";

import { MAINTENANCE_DATA } from "@/lib/store/system-maintenance-data";
import { cn } from "@/lib/utils";

export function SystemMaintenance() {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
      
      

      {/* Table Header */}
      <div className="grid grid-cols-4 gap-2 px-2 py-2 border-b border-[#22d3ee]/20 bg-gradient-to-r from-transparent via-[#1e293b]/50 to-transparent shrink-0">
        <span className="text-[9px] font-bold text-[#22d3ee] uppercase tracking-wider text-left">System</span>
        <span className="text-[9px] font-bold text-[#22d3ee] uppercase tracking-wider text-center">Last Maint.</span>
        <span className="text-[9px] font-bold text-[#22d3ee] uppercase tracking-wider text-center">Status</span>
        <span className="text-[9px] font-bold text-[#22d3ee] uppercase tracking-wider text-right">Upcoming</span>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 pr-1 custom-scrollbar">
        <div className="flex flex-col">
          {MAINTENANCE_DATA.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                "grid grid-cols-4 gap-2 px-2 py-1.5 items-center border-b border-[#1e293b]/50 hover:bg-white/5 transition-colors",
                index % 2 === 0 ? "bg-transparent" : "bg-[#0b1221]/50"
              )}
            >
              <span className="text-[9px] font-bold text-[#22d3ee] truncate text-left">
                {item.system}
              </span>

              <span className="text-[9px] font-medium text-slate-400 text-center font-mono">
                {item.lastMaint}
              </span>

              <div className="flex justify-center">
                <div className={cn(
                  "px-1.5 py-[1px] rounded border text-[7px] font-bold uppercase tracking-wider w-full max-w-[70px] text-center shadow-sm",
                  item.status === "Operational" 
                    ? "border-slate-600/50 text-slate-300 bg-slate-800/30"
                    : item.status === "Critical"
                    ? "border-red-500/50 text-red-400 bg-red-900/20 shadow-[0_0_5px_rgba(248,113,113,0.2)]"
                    : "border-orange-500/50 text-orange-400 bg-orange-900/20"
                )}>
                  {item.status}
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#0f172a] border border-[#1e293b] rounded px-1.5 py-[1px] text-[8px] font-mono text-slate-300 min-w-[40px] text-center">
                  {item.upcoming}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none" />
    </div>
  );
}