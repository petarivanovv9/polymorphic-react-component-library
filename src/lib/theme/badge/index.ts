import type { BadgeThemeProps } from './types';

export const badge: BadgeThemeProps = {
  base: `
        inline-flex align-center items-center align-self-center gap-1
        rounded-full border border-transparent font-semibold
    `,
  variant: {
    primary: 'text-primary-500 bg-primary-50 border-primary-300',
    secondary: 'text-secondary-500 bg-secondary-50 border-secondary-300',
    success: 'text-success-500 bg-success-50 border-success-300',
    danger: 'text-danger-500 bg-danger-50 border-danger-300',
    warning: 'text-warning-500 bg-warning-50 border-warning-300',
    info: 'text-info-500 bg-info-50 border-info-300',
  },
  size: {
    small: 'text-xs min-h-5.5 px-1 py-0.5',
    medium: 'text-sm min-h-7.5 px-2 py-1',
    large: 'text-base min-h-9.5 px-3 py-1.5',
    'extra-large': 'text-lg min-h-11.5 px-4 py-2',
  },
};
