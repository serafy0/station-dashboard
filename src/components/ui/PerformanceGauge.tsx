export function PerformanceGauge({ percentage }: { percentage: number }) {
  const containerSize = 110;
  
  const outerSize = 100; 
  const strokeWidth = 5;
  const radius = (outerSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dashOffset = circumference - (percentage / 100) * circumference;

  const innerSize = 80; 

  return (
    <div className="relative flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      
      <div 
        className="absolute rounded-full animate-[spin_3s_linear_infinite] z-0 flex items-center justify-center"
        style={{ width: innerSize, height: innerSize }}
      >
         <div 
            className="w-full h-full rounded-full opacity-25"
            style={{
                background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, #22d3ee 100%)`,
            }}
         />
         <div className="absolute inset-[15%] bg-[#060b19] rounded-full" /> 
      </div>

      <svg className="absolute rotate-[-90deg] z-10" width={outerSize} height={outerSize} viewBox={`0 0 ${outerSize} ${outerSize}`}>
        <circle
          stroke="#1e293b"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={outerSize / 2}
          cy={outerSize / 2}
        />
        
        <circle
          stroke="#22d3ee"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={outerSize / 2}
          cy={outerSize / 2}
          className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-1000 ease-out"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <span className="text-3xl font-bold text-white font-sans drop-shadow-md tracking-tight">
            {percentage}<span className="text-[12px] ml-0.5 text-slate-400 font-normal">%</span>
        </span>
      </div>
    </div>
  );
}
