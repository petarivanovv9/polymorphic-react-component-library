import type {
  ButtonVariants,
  ButtonSizes,
} from '../../components/button/types';

export interface ButtonThemeProps {
  base: string;
  variant: Record<ButtonVariants, string>;
  size: Record<ButtonSizes, string>;
  fullWidth: string;
}
