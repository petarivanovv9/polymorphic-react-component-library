import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import cx from 'clsx';

import type { BadgeComponent, BadgeProps, BadgeRef } from './types';
import { useTheme } from '../../context';

export const Badge = forwardRef(
  <C extends ElementType = 'span'>(
    {
      as,
      variant = 'secondary',
      size = 'medium',
      className,
      ...restProps
    }: BadgeProps<C>,
    forwardedRef: BadgeRef<C>,
  ) => {
    const {
      theme: { badge: theme },
    } = useTheme();

    const classes = twMerge(
      cx(theme.base, theme.variant[variant], theme.size[size]),
      className,
    );

    const Component = as || 'span';

    return <Component ref={forwardedRef} className={classes} {...restProps} />;
  },
) as BadgeComponent;
