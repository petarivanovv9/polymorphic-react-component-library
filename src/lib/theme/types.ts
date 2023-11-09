import type { BadgeThemeProps } from './badge/types';
import type { ButtonThemeProps } from './button/types';

export interface ExampleUITheme extends Record<string, unknown> {
  badge: BadgeThemeProps;
  button: ButtonThemeProps;
}
