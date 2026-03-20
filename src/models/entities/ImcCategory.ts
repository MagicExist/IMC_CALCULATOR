export type ImcCategory =
  | 'Bajo peso'
  | 'Peso normal'
  | 'Sobrepeso'
  | 'Obesidad';

export interface ImcRange {
  min: number;
  max?: number;
  category: ImcCategory;
}

export const IMC_RANGES: ImcRange[] = [
  { min: 0, max: 18.5, category: 'Bajo peso' },
  { min: 18.5, max: 25, category: 'Peso normal' },
  { min: 25, max: 30, category: 'Sobrepeso' },
  { min: 30, category: 'Obesidad' },
];
