import { describe, expect, it } from 'vitest';

import { Button } from '..';
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
  render(<Button {...defaultProps} {...props} />);

const renderComponentWithThemeProvider = (props = {}, context = {}) =>
  renderWithThemeProvider(<Button {...defaultProps} {...props} />, context);

describe('Button', () => {
  describe('Props', () => {
    it('should match snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should match snapshot when rendering `as` anchor `<a>`', () => {
      const props = {
        as: 'a',
        href: 'https://random.com',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.getByRole('link')).not.toHaveAttribute('type');
    });

    it('should match snapshot when rendering `as` React component', () => {
      const Link = () => <a href="https://random.com">Link</a>;
      const props = {
        as: Link,
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.getByRole('link')).not.toHaveAttribute('type');
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

    it('should match snapshot with outline `variant`', () => {
      const props = {
        variant: 'outline-primary',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with ghost `variant`', () => {
      const props = {
        variant: 'ghost-primary',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with link `variant`', () => {
      const props = {
        variant: 'link-primary',
      };
      const { container } = renderComponent(props);

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with `fullWidth`', () => {
      const props = {
        fullWidth: true,
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

      expect(screen.getByRole('button')).toHaveClass(className);
    });

    it('should be disabled when `disabled={true}`', () => {
      const props = {
        disabled: true,
      };
      renderComponent(props);

      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('should have `role="button"` by default', () => {
      renderComponent();

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should have `role="link"` when rendering `as` an anchor `<a>`', () => {
      const props = {
        as: 'a',
        href: 'https://random.com',
      };
      renderComponent(props);

      expect(screen.getByRole('link')).toBeInTheDocument();
    });
  });

  describe('Theming', () => {
    it('should use `base` classes', () => {
      const classes = 'outline-none';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          base: classes,
        },
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(undefined, context);

      expect(screen.getByRole('button')).toHaveClass(classes);
    });

    it('should use solid `variant` classes', () => {
      const classes = 'bg-pink-500';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          variant: {
            ...defaultTheme.button.variant,
            primary: classes,
          },
        },
      };

      const props = {
        variant: 'primary',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByRole('button')).toHaveClass(classes);
    });

    it('should use outline `variant` classes', () => {
      const classes = 'bg-pink-500';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          variant: {
            ...defaultTheme.button.variant,
            'outline-primary': classes,
          },
        },
      };
      const props = {
        variant: 'outline-primary',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByRole('button')).toHaveClass(classes);
    });

    it('should use ghost `variant` classes', () => {
      const classes = 'bg-pink-500';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          variant: {
            ...defaultTheme.button.variant,
            'ghost-primary': classes,
          },
        },
      };
      const props = {
        variant: 'ghost-primary',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByRole('button')).toHaveClass(classes);
    });

    it('should use link `variant` classes', () => {
      const classes = 'bg-pink-500';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          variant: {
            ...defaultTheme.button.variant,
            'link-primary': classes,
          },
        },
      };
      const props = {
        variant: 'link-primary',
      };
      const context = {
        theme: customTheme,
      };

      renderComponentWithThemeProvider(props, context);

      expect(screen.getByRole('button')).toHaveClass(classes);
    });

    it('should use `size` classes', () => {
      const classes = 'font-extralight';
      const customTheme: ExampleUITheme = {
        ...defaultTheme,
        button: {
          ...defaultTheme.button,
          size: {
            ...defaultTheme.button.size,
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

      expect(screen.getByRole('button')).toHaveClass(classes);
    });
  });
});
