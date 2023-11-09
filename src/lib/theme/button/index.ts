import type { ButtonThemeProps } from './types';

export const button: ButtonThemeProps = {
  base: `
        appearance-none cursor-pointer 
        inline-flex align-center items-center align-self-center gap-2
        transition duration-200 ease
        border border-transparent rounded-md
        hover:shadow-md
        focus:outline-none focus:ring-2
        disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none
    `,
  variant: {
    // Solid Variants
    primary: `
            text-white bg-primary-500 ring-primary-300
            hover:bg-primary-700
            active:bg-primary-900
            disabled:hover:bg-primary-500 
        `,
    secondary: `
            text-white bg-secondary-500 ring-secondary-300
            hover:bg-secondary-700
            active:bg-secondary-900
            disabled:hover:bg-secondary-500
        `,
    success: `
            text-white bg-success-500 ring-success-300
            hover:bg-success-700
            active:bg-success-900
            disabled:hover:bg-success-500
        `,
    danger: `
            text-white bg-danger-500 ring-danger-300
            hover:bg-danger-700
            active:bg-danger-900
            disabled:hover:bg-danger-500
        `,
    warning: `
            text-white bg-warning-500 ring-warning-300
            hover:bg-warning-700
            active:bg-warning-900
            disabled:hover:bg-warning-500
        `,
    info: `
            text-white bg-info-500 ring-info-300 
            hover:bg-info-700
            active:bg-info-900
            disabled:hover:bg-info-500
        `,
    // Outline Variants
    'outline-primary': `
            text-primary-500 bg-white border-primary-500 ring-primary-300
            hover:text-primary-700 hover:bg-primary-50 hover:border-primary-700
            active:border-primary-800 active:bg-primary-100
            disabled:hover:text-primary-500 disabled:hover:bg-white disabled:hover:border-primary-500
        `,
    'outline-secondary': `
            text-secondary-500 bg-white border-secondary-500 ring-secondary-300
            hover:text-secondary-700 hover:bg-secondary-50 hover:border-secondary-700
            active:border-secondary-800 active:bg-secondary-100
            disabled:hover:text-secondary-500 disabled:hover:bg-white disabled:hover:border-secondary-500
        `,
    'outline-success': `
            text-success-500 bg-white border-success-500 ring-success-300
            hover:text-success-700 hover:bg-success-50 hover:border-success-700
            active:border-success-800 active:bg-success-100
            disabled:hover:text-success-500 disabled:hover:bg-white disabled:hover:border-success-500
        `,
    'outline-danger': `
            text-danger-500 bg-white border-danger-500 ring-danger-300
            hover:text-danger-700 hover:bg-danger-50 hover:border-danger-700
            active:border-danger-800 active:bg-danger-100
            disabled:hover:text-danger-500 disabled:hover:bg-white disabled:hover:border-danger-500
        `,
    'outline-warning': `
            text-warning-500 bg-white border-warning-500 ring-warning-300
            hover:text-warning-700 hover:bg-warning-50 hover:border-warning-700
            active:border-warning-800 active:bg-warning-100
            disabled:hover:text-warning-500 disabled:hover:bg-white disabled:hover:border-warning-500
        `,
    'outline-info': `
            text-info-500 bg-white border-info-500 ring-info-300
            hover:text-info-700 hover:bg-info-50 hover:border-info-700
            active:border-info-800 hover:bg-info-100
            disabled:hover:text-info-500 disabled:hover:bg-white disabled:hover:border-info-500
        `,
    // Ghost Variants
    'ghost-primary': `
            text-primary-500 bg-white border-transparent ring-primary-300
            hover:text-primary-700 hover:bg-primary-50 hover:border-primary-700
            active:border-primary-800 active:bg-primary-100
            disabled:hover:text-primary-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    'ghost-secondary': `
            text-secondary-500 bg-white border-transparent ring-secondary-300
            hover:text-secondary-700 hover:bg-secondary-50 hover:border-secondary-700
            active:border-secondary-800 active:bg-secondary-100
            disabled:hover:text-secondary-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    'ghost-success': `
            text-success-500 bg-white border-transparent ring-success-300
            hover:text-success-700 hover:bg-success-50 hover:border-success-700
            active:border-success-800 active:bg-success-100
            disabled:hover:text-success-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    'ghost-danger': `
            text-danger-500 bg-white border-transparent ring-danger-300
            hover:text-danger-700 hover:bg-danger-50 hover:border-danger-700
            active:border-danger-800 active:bg-danger-100
            disabled:hover:text-danger-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    'ghost-warning': `
            text-warning-500 bg-white border-transparent ring-warning-300
            hover:text-warning-700 hover:bg-warning-50 hover:border-warning-700
            active:border-warning-800 active:bg-warning-100
            disabled:hover:text-warning-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    'ghost-info': `
            text-info-500 bg-white border-transparent ring-info-300
            hover:text-info-700 hover:bg-info-50 hover:border-info-700
            active:border-info-800 hover:bg-info-100
            disabled:hover:text-info-500 disabled:hover:bg-white disabled:hover:border-transparent
        `,
    // Link Variants
    'link-primary': `
            text-primary-500 bg-transparent border-transparent ring-primary-300
            hover:text-primary-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-primary-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
    'link-secondary': `
            text-secondary-500 bg-transparent border-transparent ring-secondary-300
            hover:text-secondary-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-secondary-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
    'link-success': `
            text-success-500 bg-transparent border-transparent ring-success-300
            hover:text-success-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-success-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
    'link-danger': `
            text-danger-500 bg-transparent border-transparent ring-danger-300
            hover:text-danger-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-danger-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
    'link-warning': `
            text-warning-500 bg-transparent border-transparent ring-warning-300
            hover:text-warning-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-warning-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
    'link-info': `
            text-info-500 bg-transparent border-transparent ring-info-300
            hover:text-info-700 hover:transparent hover:underline hover:shadow-none
            disabled:hover:text-info-500 disabled:hover:bg-transparent disabled:hover:border-transparent disabled:hover:no-underline
        `,
  },
  size: {
    'extra-small': 'text-xs px-1 py-0.5 min-h-5.5',
    small: 'text-sm px-2 py-1 min-h-7.5',
    medium: 'text-base px-3 py-1.5 min-h-9.5',
    large: 'text-lg px-4 py-2 min-h-11.5',
    'extra-large': 'text-xl px-5 py-3 min-h-13.5',
  },
  fullWidth: `w-full justify-center`,
};
