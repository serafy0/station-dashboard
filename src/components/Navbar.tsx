import { Home, Zap, Activity, Droplets, LayoutDashboard, Calendar, BarChart2, Wrench } from "lucide-react";

export function Navbar() {
  const leftItems = [
    { name: "Transformers", icon: Zap },
    { name: "Generator", icon: Activity },
    { name: "Pumps Room", icon: Droplets }
  ];
  const rightItems = [
    { name: "Hammer", icon: Wrench },
    { name: "Flow Trend", icon: BarChart2 },
    { name: "Schedules", icon: Calendar },
    { name: "Dashboard", icon: LayoutDashboard }
  ];

  return (
    <nav className="relative z-50 w-full flex flex-col items-center shadow-2xl">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-b border-[#334155] z-0" />

      <div className="h-16 w-full flex items-center justify-between px-6 relative z-10">
        
        <div className="hidden md:flex items-center gap-3 w-[280px]">
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

        <div className="flex-1 flex items-center justify-center gap-6 h-full pt-1 relative">
            
            <a href="#" className="group flex flex-col items-center gap-1 cursor-pointer mr-4">
                <div className="h-7 w-9 bg-[#0ea5e9] rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.4)] group-hover:bg-[#38bdf8] transition-colors">
                    <Home size={16} className="text-white" />
                </div>
                <span className="text-[9px] text-white font-bold uppercase tracking-widest group-hover:text-[#22d3ee]">Home</span>
            </a>

            <div className="flex gap-6 hidden xl:flex">
                {leftItems.map(item => <NavBtn key={item.name} {...item} />)}
            </div>

            <div className="flex flex-col items-center justify-center px-8 relative h-full">
                <span className="text-3xl font-bold text-white font-serif tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] z-20 mt-1">
                    Station 5
                </span>
                
                <div 
                    className="absolute bottom-[-14px] w-[220px] h-[30px] bg-[#1e293b] border-b border-l border-r border-[#334155] z-10"
                    style={{ 
                        clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
                        marginBottom: "0px" 
                    }}
                />
                <div className="absolute bottom-[-1px] w-[200px] h-[2px] bg-[#1e293b] z-10" />
            </div>

            <div className="flex gap-6 hidden xl:flex">
                 {rightItems.map(item => <NavBtn key={item.name} {...item} />)}
            </div>
        </div>

        <div className="hidden md:flex justify-end w-[280px]">
          <span className="text-xl font-bold text-[#22d3ee] tracking-widest font-sans drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">SIEMENS</span>
        </div>
      </div>
    </nav>
  );
}

function NavBtn({ name, icon: Icon }: { name: string, icon: any }) {
    return (
        <a href="#" className="group flex flex-col items-center gap-1 cursor-pointer">
            <div className="h-7 flex items-center justify-center">
                <Icon size={18} className="text-slate-400 group-hover:text-[#22d3ee] group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all" />
            </div>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-white transition-colors whitespace-nowrap">
                {name}
            </span>
        </a>
    )
}