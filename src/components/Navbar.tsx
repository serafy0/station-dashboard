"use client";

import { Home, Zap, Activity, Droplets, LayoutDashboard, Calendar, BarChart2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const leftItems = [
    { name: "Transformers", icon: Zap, active: false },
    { name: "Generator", icon: Activity, active: false },
    { name: "Pumps Room", icon: Droplets, active: false }
  ];
  const rightItems = [
    { name: "Hammer", icon: Wrench, active: false },
    { name: "Flow Trend", icon: BarChart2, active: false },
    { name: "Schedules", icon: Calendar, active: false },
    { name: "Dashboard", icon: LayoutDashboard, active: false }
  ];

  return (
    <nav className="relative z-50 w-full flex flex-col items-center shadow-2xl shrink-0">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-b border-[#334155] z-0" />

      <div className="h-16 w-full flex items-center justify-between px-6 relative z-10">
        
        <div className="hidden md:flex items-center gap-3 w-[250px] shrink-0">
          <div className="h-8 w-8 border border-white/10 rounded flex items-center justify-center gap-[2px] bg-white/5 shadow-inner">
             <div className="w-[2px] h-4 bg-white shadow-[0_0_5px_white]" />
             <div className="w-[1px] h-4 bg-white/50" />
             <div className="w-[3px] h-4 bg-white shadow-[0_0_5px_white]" />
          </div>
          <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white tracking-[0.2em] font-serif drop-shadow-md">EMS</span>
              <span className="text-[6px] text-gray-400 uppercase tracking-widest ml-0.5">Engineering Management Systems</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-2 xl:gap-8 h-full relative">
            
            <div className="mr-2 xl:mr-4">
                <NavBtn name="Home" icon={Home} isActive={true} />
            </div>

            <div className="flex gap-4 xl:gap-8 hidden xl:flex">
                {leftItems.map(item => <NavBtn key={item.name} name={item.name} icon={item.icon} isActive={item.active} />)}
            </div>

            <div className="flex flex-col items-center justify-center relative h-full pt-9 w-[240px] shrink-0">
                <span className="text-2xl xl:text-3xl font-bold text-white font-serif tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] z-20 mt-1 whitespace-nowrap">
                    Station 5
                </span>
                
                <div 
                    className="absolute bottom-[-14px] w-[220px] h-[30px] bg-[#1e293b] border-b border-l border-r border-[#334155] z-10 shadow-lg"
                    style={{ 
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" 
                    }}
                />
                
                <div className="absolute bottom-[-1px] w-[200px] h-[2px] bg-[#1e293b] z-10" />
            </div>

            <div className="flex gap-4 xl:gap-8 hidden xl:flex">
                 {rightItems.map(item => <NavBtn key={item.name} name={item.name} icon={item.icon} isActive={item.active} />)}
            </div>
        </div>

        <div className="hidden md:flex justify-end w-[250px] shrink-0">
          <span className="text-xl font-bold text-[#22d3ee] tracking-widest font-sans drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">SIEMENS</span>
        </div>
      </div>
    </nav>
  );
}

interface NavBtnProps {
    name: string;
    icon: any;
    isActive?: boolean;
}

function NavBtn({ name, icon: Icon, isActive = false }: NavBtnProps) {
    return (
        <a href="#" className="group flex flex-col items-center gap-1 cursor-pointer relative top-[2px]">
            <div className={cn(
                "h-7 w-9 rounded-md flex items-center justify-center transition-all duration-300 relative overflow-hidden",
                isActive 
                    ? "bg-gradient-to-br from-[#22d3ee] to-[#0ea5e9] shadow-[0_0_15px_rgba(34,211,238,0.5)] border-t border-white/40 scale-105" 
                    : "hover:bg-white/5"
            )}>
                {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50" />
                )}

                <Icon 
                    size={16} 
                    className={cn(
                        "transition-all duration-300",
                        isActive 
                            ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
                            : "text-slate-400 group-hover:text-[#22d3ee] group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
                    )} 
                />
            </div>

            <span className={cn(
                "text-[9px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap",
                isActive 
                    ? "text-white drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" 
                    : "text-slate-400 group-hover:text-white"
            )}>
                {name}
            </span>
        </a>
    )
}