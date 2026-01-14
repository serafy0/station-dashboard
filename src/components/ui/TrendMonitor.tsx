"use client";

import { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
  TooltipItem,
  ChartArea,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { cn } from "@/lib/utils";
import { TrendDataSeries } from "@/interfaces/TrendDataSeries";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface TrendMonitorProps {
    tabs: Record<string, TrendDataSeries>;
    defaultTab: string;
    className?: string;
}

const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea, color: string) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, `${color}00`);
    gradient.addColorStop(1, `${color}33`);
    return gradient;
};

export function TrendMonitor({ tabs, defaultTab, className }: TrendMonitorProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const labels = useMemo(() => {
        const arr = [];
        let time = new Date();
        time.setHours(7, 0, 0, 0);
        for (let i = 0; i < 20; i++) {
            const h = time.getHours().toString().padStart(2, '0');
            const m = time.getMinutes().toString().padStart(2, '0');
            arr.push(`${h}:${m}`);
            time.setMinutes(time.getMinutes() + 10);
        }
        return arr;
    }, []);

    const currentSeries = tabs[activeTab];
    const activeColor = currentSeries.color || "#22d3ee";
    const decimalPlaces = currentSeries.decimals ?? 0;

    const latestRawValue = currentSeries.data[currentSeries.data.length - 1] || 0;
    const formattedLatestValue = latestRawValue.toLocaleString('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
    });

    const chartData = useMemo(() => {
        const data: ChartData<'line'> = {
            labels,
            datasets: [
                {
                    label: currentSeries.label,
                    data: currentSeries.data,
                    borderColor: activeColor,
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    pointHoverBackgroundColor: '#000',
                    pointHoverBorderColor: activeColor,
                    pointHoverBorderWidth: 2,
                    fill: true,
                    backgroundColor: (context: ScriptableContext<"line">) => {
                        const ctx = context.chart.ctx;
                        const area = context.chart.chartArea;
                        if (!area) return undefined;
                        return createGradient(ctx, area, activeColor);
                    },
                },
            ],
        };
        return data;
    }, [activeTab, currentSeries, labels, activeColor]);

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(2, 4, 8, 0.95)',
                titleColor: '#94a3b8',
                bodyColor: activeColor,
                borderColor: `${activeColor}40`,
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: (context: TooltipItem<"line">) => {
                        const val = context.parsed.y !== null 
                            ? context.parsed.y.toLocaleString('en-US', {
                                minimumFractionDigits: decimalPlaces,
                                maximumFractionDigits: decimalPlaces
                              }) 
                            : '0';
                        return `${val} ${currentSeries.unit}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#64748b',
                    font: { size: 9, family: 'monospace' },
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 6
                },
                border: { display: false }
            },
            y: {
                min: currentSeries.min,
                max: currentSeries.max,
                grid: { color: 'rgba(30, 41, 59, 0.5)' },
                ticks: {
                    color: '#64748b',
                    font: { size: 9, family: 'monospace' },
                    stepSize: currentSeries.stepSize,
                    callback: (value) => {
                         const val = typeof value === 'string' ? parseFloat(value) : value;
                         return val >= 1000 ? (val / 1000) + 'K' : val;
                    }
                },
                border: { display: false }
            }
        }
    };

    return (
        <div className={cn("w-full h-full flex flex-col p-4 relative", className)}>
            <div className="flex justify-between items-start mb-2 z-10 min-h-[40px]">
                <div className="flex gap-2">
                    {Object.keys(tabs).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={cn(
                                "px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm",
                                activeTab === key
                                    ? "bg-opacity-10 shadow-[0_0_10px_rgba(0,0,0,0.2)]" 
                                    : "border-slate-800 bg-transparent text-slate-500 hover:text-slate-400"
                            )}
                            style={{
                                borderColor: activeTab === key ? activeColor : undefined,
                                color: activeTab === key ? activeColor : undefined,
                                backgroundColor: activeTab === key ? `${activeColor}15` : undefined
                            }}
                        >
                            {tabs[key].label}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col items-end">
                    <div className="flex items-baseline gap-1.5 mb-1.5">
                        <span className="text-xl font-bold text-white font-sans tabular-nums drop-shadow-md">
                            {formattedLatestValue}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                            {currentSeries.unit}
                        </span>
                    </div>
                    
                    <div className="w-full h-1.5 relative opacity-60">
                        <div className="absolute bottom-0 left-[2px] right-[2px] h-[1px]" style={{ backgroundColor: activeColor }} />
                        <div className="absolute bottom-0 left-0 w-[4px] h-[1px] origin-bottom-left -rotate-45" style={{ backgroundColor: activeColor }} />
                        <div className="absolute bottom-0 right-0 w-[4px] h-[1px] origin-bottom-right rotate-45" style={{ backgroundColor: activeColor }} />
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-0">
                <Line options={options} data={chartData} />
            </div>
        </div>
    );
}