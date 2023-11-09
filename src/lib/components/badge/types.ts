import type { ElementType } from 'react';

import { Colors, Sizes } from '../types';
import {
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
  PolymorphicRef,
} from '../polymorphicTypes';

export type BadgeColors = Colors;

export type BadgeVariants = BadgeColors;

export type BadgeSizes = Exclude<Sizes, 'extra-small'>;

export interface Props {
  variant?: BadgeVariants;
  size?: BadgeSizes;
}

export type BadgeComponent<C extends ElementType = 'span'> =
  PolymorphicComponentWithRef<C, Props>;

export type BadgeProps<C extends ElementType = 'span'> =
  PolymorphicComponentProps<C, Props>;

export type BadgeRef<C extends ElementType = 'span'> = PolymorphicRef<C>;
