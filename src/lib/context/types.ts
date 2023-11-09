import type { HTMLAttributes, ReactNode } from 'react';

import type { ExampleUITheme } from '../theme/types';

export interface ThemeContextProps {
  theme: ExampleUITheme;
}

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  value: ThemeContextProps;
  children: ReactNode;
}
