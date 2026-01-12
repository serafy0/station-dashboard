import { cn } from "@/lib/utils";


interface StatusTileProps {
  label: string;
  value: string | number;
  subValue?: string;
  icon: React.ReactNode;
  align: "left" | "right";
}

export function StatusTile ({ label, value, subValue, icon, align }: StatusTileProps) {
  const themeColor = "text-[#22d3ee]";

  return (
    <div className={cn(
      "relative w-full flex flex-col justify-center px-4 py-3",
      "bg-[#0b1221] border border-[#22d3ee]/20 rounded-lg shadow-sm",
      align === "left" ? "items-start text-left" : "items-end text-right"
    )}>
      <span className={cn("text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70", themeColor)}>
        {label}
      </span>

      <div className="flex items-center gap-3">
        <div className={themeColor}>
          {icon}
        </div>

        <div className="flex items-baseline gap-1.5">
          <span className={cn("text-xl font-bold", themeColor)}>
            {value}
          </span>
          {subValue && (
            <span className={cn("text-[10px] font-bold uppercase opacity-80", themeColor)}>
              {subValue}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};