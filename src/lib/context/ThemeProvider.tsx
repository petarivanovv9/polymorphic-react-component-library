import type { FC } from 'react';

import type { ThemeProviderProps } from './types';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: FC<ThemeProviderProps> = ({ value, children }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);
