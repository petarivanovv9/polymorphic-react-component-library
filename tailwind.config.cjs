const svgToDataUri = require('mini-svg-data-uri');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/lib/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        brand: colors.orange,
        primary: colors.indigo,
        secondary: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.blue,
      },
      spacing: {
        4.5: '1.125rem' /* 18px */,
        5.5: '1.375rem' /* 22px */,
        6.5: '1.625rem' /* 26px */,
        7.5: '1.875rem' /* 30px */,
        8.5: '2.125rem' /* 34px */,
        9.5: '2.375rem' /* 38px */,
        10.5: '2.75rem' /* 44px */,
        11.5: '2.875rem' /* 46px */,
        12.5: '3.125rem' /* 50px */,
        13.5: '3.375rem' /* 54px */,
      },
      height: ({ theme }) => ({
        ...theme('spacing'),
      }),
      minHeight: ({ theme }) => ({
        ...theme('spacing'),
      }),
      width: ({ theme }) => ({
        ...theme('spacing'),
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
      backgroundImage: {
        'chevron-down': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>`,
        )}")`,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
