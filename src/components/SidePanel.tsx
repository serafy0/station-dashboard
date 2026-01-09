import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SideTechPanelProps {
  title: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export function SideTechPanel({ title, icon: Icon, children, className }: SideTechPanelProps) {
  return (
    <div className={cn("flex flex-col relative group", className)}>
      
      <div className="flex items-center gap-2 px-2 py-1.5 mb-1 relative shrink-0 bg-gradient-to-r from-[#0f172a] to-transparent border-l-2 border-[#0ea5e9]">
        
        {Icon && <Icon className="w-3.5 h-3.5 text-[#0ea5e9]" />}
        
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.15em]">
          {title}
        </span>
        
        <div className="ml-auto flex gap-[3px] opacity-50">
            <div className="w-[2px] h-[6px] bg-[#0ea5e9] skew-x-[-12deg]" />
            <div className="w-[2px] h-[6px] bg-slate-600 skew-x-[-12deg]" />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#0ea5e9]/50 to-transparent" />
      </div>

      <div className="flex-1 relative pl-1">
        {children}
      </div>
    </div>
  );
}