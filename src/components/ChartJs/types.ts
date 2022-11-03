export type Labels = string[];

export interface ChartProps {
  data: any;
  width?: string | number;
}

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

export interface ChartData {
  labels: Labels,
  datasets: ChartDataset[];
}