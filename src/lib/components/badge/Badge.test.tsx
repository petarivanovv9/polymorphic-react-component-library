import { describe, expect, it } from 'vitest';

import { Badge } from '..';
import {
  render,
  renderWithThemeProvider,
  screen,
} from '../../../utils/test-utils';
import { theme as defaultTheme } from '../../theme';
import type { ExampleUITheme } from '../../theme/types';

const defaultProps = {
  children: 'Content',
};

const renderComponent = (props = {}) =>
  render(<Badge {...defaultProps} {...props} />);

const renderComponentWithThemeProvider = (props = {}, context = {}) =>
  renderWithThemeProvider(<Badge {...defaultProps} {...props} />, context);

describe('Badge', () => {
  describe('Props', () => {
    it('should match snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when rendering `as` `<div>`', () => {
      const props = {
        as: 'div',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with `size`', () => {
      const props = {
        size: 'large',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with default (solid) `variant`', () => {
      const props = {
        variant: 'primary',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should extend styles with custom `className`', () => {
      const className = 'bg-red-500';
      const props = {
        className,
      };
      renderComponent(props);

      expect(screen.getByText('Content')).toHaveClass(className);
    });
  });

  describe('Theming', () => {
    it('should use `base` classes', () => {
      const classes = 'none';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        badge: {
          ...defaultTheme.badge,
          base: classes,
        },
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(undefined, context);

      expect(screen.getByText('Content')).toHaveClass(classes);
    });

    it('should use solid `variant` classes', () => {
      const classes = 'bg-pink-500';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        badge: {
          ...defaultTheme.badge,
          variant: {
            ...defaultTheme.badge.variant,
            success: classes,
          },
        },
      };

      const props = {
        variant: 'success',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByText('Content')).toHaveClass(classes);
    });

    it('should use `size` classes', () => {
      const classes = 'font-extralight';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        badge: {
          ...defaultTheme.badge,
          size: {
            ...defaultTheme.badge.size,
            small: classes,
          },
        },
      };
      const props = {
        size: 'small',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByText('Content')).toHaveClass(classes);
    });
  });
});
