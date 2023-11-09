import type { StoryObj, Meta } from '@storybook/react';

import type { ExampleUITheme } from '../../theme/types';
import { Badge } from './Badge';
import { ThemeProvider } from '../../context';
import { theme as defaultTheme } from '../../theme';
import { ReactComponent as InfoCircleSvg } from '../../../svg/heroicons/20/solid/information-circle.svg';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge/Customization',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const CustomStyles: Story = {
  render: (args) => <Badge {...args}>Custom</Badge>,
  args: {
    className: 'text-white bg-purple-500',
  },
};

export const CustomTheme: Story = {
  render: (args) => {
    const customTheme: ExampleUITheme = {
      ...defaultTheme,
      badge: {
        ...defaultTheme.badge,
        variant: {
          ...defaultTheme.badge.variant,
          secondary: 'text-white bg-pink-500',
        },
      },
    };

    return (
      <ThemeProvider
        value={{
          theme: customTheme,
        }}
      >
        <Badge {...args}>Custom</Badge>
      </ThemeProvider>
    );
  },
};

export const Icon: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} aria-label="Info">
        <InfoCircleSvg className="h-5 w-5" />
      </Badge>
      <Badge {...args}>
        <InfoCircleSvg className="h-5 w-5" />
        Left Icon
      </Badge>
      <Badge {...args}>
        Right Icon
        <InfoCircleSvg className="h-5 w-5" />
      </Badge>
    </div>
  ),
};
