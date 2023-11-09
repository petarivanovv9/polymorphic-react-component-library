import type { ReactElement } from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '../lib/context';
import { theme as defaultTheme } from '../lib/theme';

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: ({ children }) => children, ...options });

const customRenderWithThemeProvider = (
  ui: ReactElement,
  { theme = defaultTheme, ...options } = {},
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider
        value={{
          theme,
        }}
      >
        {children}
      </ThemeProvider>
    ),
    ...options,
  });

const waitForFloatingPosition = () => act(async () => {});

// re-export everything
export * from '@testing-library/react';
export { userEvent, waitForFloatingPosition };

// override render method
export {
  customRender as render,
  customRenderWithThemeProvider as renderWithThemeProvider,
};
