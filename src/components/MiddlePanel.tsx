import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GlassPanelProps {
  title: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export function GlassPanel({ title, icon: Icon, children, className }: GlassPanelProps) {
  return (
    <div className={cn(
      "flex flex-col bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-lg",
      "relative overflow-hidden",
      className
    )}>
      
      <div className="flex items-center justify-between px-4 py-2 shrink-0 relative">
         
         <span className="text-sm font-medium text-slate-200 tracking-wide font-sans">
            {title}
         </span>

         {Icon && <Icon size={14} className="text-slate-500" />}

         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee]/50 to-transparent" />
      </div>

      <div className="flex-1 relative p-2">
        {children}
      </div>
    </div>
  );
}