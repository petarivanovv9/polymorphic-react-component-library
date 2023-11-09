import type { ElementType } from 'react';
import { forwardRef } from 'react';
import cx from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ButtonComponent, ButtonProps, ButtonRef } from './types';
import { useTheme } from '../../context';

export const Button = forwardRef(
  <C extends ElementType = 'button'>(
    {
      as,
      variant = 'secondary',
      size = 'medium',
      fullWidth,
      className,
      type = as ? undefined : 'button',
      ...restProps
    }: ButtonProps<C>,
    forwardedRef: ButtonRef<C>,
  ) => {
    const {
      theme: { button: theme },
    } = useTheme();

    const classes = twMerge(
      cx(theme.base, theme.variant[variant], theme.size[size], {
        [theme.fullWidth]: fullWidth,
      }),
      className,
    );

    const Component = as || 'button';

    return (
      <Component
        ref={forwardedRef}
        className={classes}
        type={type}
        {...restProps}
      />
    );
  },
) as ButtonComponent;
