import { themes } from '@storybook/theming';

import { theme } from './theme';

import '../src/index.css';

export const parameters = {
  darkMode: {
    current: 'light',
    light: {
      ...themes.light,
      ...theme.light,
    },
    dark: {
      ...themes.dark,
      ...theme.dark,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Components'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
