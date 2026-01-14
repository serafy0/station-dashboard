export interface TrendDataSeries {
  label: string;
  unit: string;
  data: number[];
  min?: number;
  max?: number;
  stepSize?: number;
  color?: string;
  decimals?: number; 
}