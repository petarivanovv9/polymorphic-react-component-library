import tailwindFormsPlugin from '@tailwindcss/forms';

import { colors, fontFamily } from '../lib/tokens';
import { spacing } from './spacing';
import { icons } from './icons';

const preset = {
  darkMode: 'class',
  fontFamily,
  theme: {
    extend: {
      colors: {
        // Modify the default colors
        gray: colors.secondary,
        red: colors.danger,
        orange: colors.brand,
        yellow: colors.warning,
        green: colors.success,
        blue: colors.info,
        indigo: colors.primary,

        // Add custom colors
        ...colors,
      },
      spacing: {
        ...spacing,
      },
      height: ({ theme }: any) => ({
        ...theme('spacing'),
      }),
      minHeight: ({ theme }: any) => ({
        ...theme('spacing'),
      }),
      width: ({ theme }: any) => ({
        ...theme('spacing'),
      }),
      minWidth: ({ theme }: any) => ({
        ...theme('spacing'),
      }),
      backgroundImage: {
        ...icons,
      },
    },
  },
  plugins: [
    tailwindFormsPlugin({
      strategy: 'class',
    }),
  ],
};

export default preset;
