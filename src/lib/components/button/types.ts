import type { ElementType } from 'react';
import type {
  PolymorphicComponentWithRef,
  PolymorphicRef,
  PolymorphicComponentProps,
} from '../polymorphicTypes';
import type { VariantPrefix, Colors, Sizes } from '../types';

export type ButtonVariants =
  | Colors
  | VariantPrefix<'outline', Colors>
  | VariantPrefix<'ghost', Colors>
  | VariantPrefix<'link', Colors>;

export type ButtonSizes = Sizes;

export interface Props {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  fullWidth?: boolean;
}

export type ButtonComponent<C extends ElementType = 'button'> =
  PolymorphicComponentWithRef<C, Props>;

export type ButtonProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, Props>;

export type ButtonRef<C extends ElementType = 'button'> = PolymorphicRef<C>;
