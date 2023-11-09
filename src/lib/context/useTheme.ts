import { useContext } from 'react';

import type { ThemeContextProps } from './types';
import { ThemeContext } from './ThemeContext';

export const useTheme = (): ThemeContextProps => useContext(ThemeContext);
