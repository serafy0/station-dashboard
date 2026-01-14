import { TrendingUp, TrendingDown, Banknote } from "lucide-react"; 
import { cn } from "@/lib/utils";

export function InvoiceBlock({ label, value, trend }: { label: string; value: string; trend: "up" | "down" }) {
  const isUp = trend === "up";


  return (
    <div className="flex-1 flex flex-col items-center justify-between h-full py-2">
        
        <div className="w-full px-2 mb-1">
            <div className="bg-[#0f172a]/80 border border-[#22d3ee]/30 py-1.5 rounded text-[10px] font-bold text-[#22d3ee] uppercase tracking-widest text-center shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                {label}
            </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-1">
            
            <div className="relative group">
                <div className="absolute inset-0 bg-[#22d3ee] blur-[20px] opacity-10 group-hover:opacity-25 transition-opacity duration-500" />
                <Banknote 
                    size={36} 
                    strokeWidth={1.2} 
                    className="text-cyan-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] opacity-90" 
                />
            </div>

            <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-xl xl:text-2xl font-bold text-white font-sans tracking-tight drop-shadow-md">
                    {value}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">EGP</span>
            </div>

            <div className="flex items-center gap-1">
                {isUp ? (
                    <TrendingUp size={12} className="text-[#4ade80]" />
                ) : (
                    <TrendingDown size={12} className="text-[#f87171]" />
                )}
                <span className={cn(
                    "text-[9px] font-bold tabular-nums",
                    isUp ? "text-[#4ade80]" : "text-[#f87171]"
                )}>
                    {isUp ? "+31%" : "-12%"}
                </span>
            </div>
        </div>
    </div>
  );
}