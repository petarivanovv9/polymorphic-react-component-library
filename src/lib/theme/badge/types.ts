import type { BadgeSizes, BadgeVariants } from '../../components/badge/types';

export interface BadgeThemeProps {
  base: string;
  variant: Record<BadgeVariants, string>;
  size: Record<BadgeSizes, string>;
}
