import { createContext } from 'react';

import type { ThemeContextProps } from './types';
import { theme as defaultTheme } from '../theme';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});

ThemeContext.displayName = 'ExampleUIThemeContext';
