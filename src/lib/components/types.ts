export type VariantPrefix<T extends string, C extends string> = `${T}-${C}`;

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type Sizes =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large';

export type Alignments = 'start' | 'center' | 'end';
