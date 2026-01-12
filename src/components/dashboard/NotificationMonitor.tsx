"use client";

import { useState } from "react";
import { Bell, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertData {
  id: number;
  type: "warning" | "critical" | "info";
  title: string;
  message: string;
  timestamp: string;
  suggestedAction: string; 
  isRead: boolean;
}

const MOCK_ALERTS: AlertData[] = [
  {
    id: 1,
    type: "warning",
    title: "Low Fuel Level",
    message: "Fuel level is low at 0 L (threshold: 5000 L)",
    timestamp: "4:46:35 PM",
    suggestedAction: "Switch to backup Pump immediately.",
    isRead: false,
  },
  {
    id: 2,
    type: "critical",
    title: "Pump A Overheat",
    message: "Core temperature exceeded 85°C operating limit.",
    timestamp: "4:42:10 PM",
    suggestedAction: "Initiate emergency cooling sequence.",
    isRead: false,
  },
  {
    id: 3,
    type: "info",
    title: "Generator Standby",
    message: "Generator 2 is now in standby mode.",
    timestamp: "3:15:00 PM",
    suggestedAction: "Verify auto-start parameters.",
    isRead: false,
  },
];

export function NotificationMonitor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAlerts = 15; 

  const currentAlert = MOCK_ALERTS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % MOCK_ALERTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + MOCK_ALERTS.length) % MOCK_ALERTS.length);
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case "critical": return "bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]";
      case "warning": return "bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.8)]";
      default: return "bg-blue-500";
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-3 text-slate-300">
      
      <div className="flex items-center gap-6 mb-3 px-1">
        
        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2">
             <Bell size={14} className="text-red-500 fill-red-500/20 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
             <div className="h-5 w-5 rounded-full bg-[#1e293b] flex items-center justify-center border border-slate-700">
                <span className="text-[10px] font-bold text-white">{totalAlerts}</span>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Alerts</span>
          </div>

          <div className="flex items-center gap-2 opacity-60">
             <Clock size={14} />
             <span className="text-[10px] font-bold text-slate-400">History ({totalAlerts})</span>
          </div>

        </div>

        <div className="flex items-center gap-1">
          <button 
            onClick={handlePrev}
            className="w-5 h-5 bg-[#0b1221] border border-slate-700 rounded flex items-center justify-center hover:bg-slate-800 hover:border-[#22d3ee] transition-colors group"
          >
            <ChevronLeft size={12} className="text-slate-400 group-hover:text-white" />
          </button>
          <button 
            onClick={handleNext}
            className="w-5 h-5 bg-[#0b1221] border border-slate-700 rounded flex items-center justify-center hover:bg-slate-800 hover:border-[#22d3ee] transition-colors group"
          >
             <ChevronRight size={12} className="text-slate-400 group-hover:text-white" />
          </button>
        </div>

      </div>

      <div className="flex-1 bg-[#0b1221] border border-[#22d3ee]/20 rounded-lg p-3 flex flex-col justify-between shadow-inner relative overflow-hidden group">
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee]/20 to-transparent opacity-50" />
        
        <div className="flex items-start justify-between mb-2">
           <div className="flex items-center gap-2">
              <div className={cn("w-1.5 h-1.5 rounded-full", getStatusColor(currentAlert.type))} />
              <span className="text-xs font-bold text-white tracking-wide">
                {currentAlert.title}
              </span>
           </div>
           <span className="text-[10px] font-mono text-slate-500">
             {currentAlert.timestamp}
           </span>
        </div>

        <div className="mb-3 pl-3.5">
           <p className="text-[10px] leading-relaxed text-slate-400">
             {currentAlert.message}
           </p>
        </div>

        <div className="mt-auto bg-[#020408] border border-slate-800 rounded px-3 py-2 flex items-center justify-between gap-2">
            <span className="text-[9px] font-bold text-slate-500 uppercase whitespace-nowrap">
            Suggested Action :
            </span>
            <span className="text-[9px] font-bold text-[#22d3ee] truncate shadow-[0_0_10px_rgba(34,211,238,0.1)]">
            {currentAlert.suggestedAction}
            </span>
        </div>

      </div>
    </div>
  );
}