export interface KeyValues{
  [key: string]: string | KeyValues;
}

export interface Option {
  label: string | number;
  value: string | number;
}

export interface BudgetData {
  bills: Bill[]
}

export interface Bill {
  id: number;
  description: string;
  category: string;
  amount: string;
  date: string;
}

export enum COLORS {
  darkNavyBlue = "#251D3A",
  darkOrange = "#E04D01",
  navyBlue =  "#2A2550",
  orange = "#FF7700",
  orange2 =  "#FC997C",
  purple =  "#A66CFF",
  reddish =  "#FF5151",
  white = '#FFF'
}