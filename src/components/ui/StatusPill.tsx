import { cn } from "@/lib/utils";

export function StatusPill({ label, count, isActive }: { label: string; count: number; isActive?: boolean }) {
  return (
    <div className="flex-1 bg-[#0f172a]/80 border border-[#22d3ee]/30 py-1.5 px-2 rounded flex justify-center gap-2 shadow-[inset_0_0_10px_rgba(34,211,238,0.05)]">
      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
        {label} :
      </span>
      <span className={cn(
          "text-[10px] font-bold tabular-nums",
          isActive ? "text-[#22d3ee] drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : "text-red-400"
      )}>
        {count}
      </span>
    </div>
  );
}