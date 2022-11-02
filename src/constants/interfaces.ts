export interface KeyValues{
  [key: string]: string | KeyValues;
}

export interface Option {
  label: string | number;
  value: string | number;
}