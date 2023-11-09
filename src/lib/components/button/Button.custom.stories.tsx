import type { StoryObj, Meta } from '@storybook/react';

import type { ExampleUITheme } from '../../theme/types';
import { Button } from './Button';
import { ThemeProvider } from '../../context';
import { theme as defaultTheme } from '../../theme';
import { ReactComponent as InfoCircleSvg } from '../../../svg/heroicons/20/solid/information-circle.svg';

const meta = {
  title: 'Components/Button/Customization',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomStyles: Story = {
  render: (args) => <Button {...args}>Custom</Button>,
  args: {
    className: 'text-white bg-purple-500 ring-purple-300',
  },
};

export const CustomTheme: Story = {
  render: (args) => {
    const customTheme: ExampleUITheme = {
      ...defaultTheme,
      button: {
        ...defaultTheme.button,
        variant: {
          ...defaultTheme.button.variant,
          secondary: `
                        text-white bg-pink-500 ring-pink-300
                        hover:bg-secondary-700
                        active:bg-secondary-900
                    `,
        },
      },
    };

    return (
      <ThemeProvider
        value={{
          theme: customTheme,
        }}
      >
        <Button {...args}>Custom</Button>
      </ThemeProvider>
    );
  },
};

export const Icons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <Button {...args} aria-label="Info">
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args}>
          <InfoCircleSvg className="h-5 w-5" />
          Left Icon
        </Button>
        <Button {...args}>
          Right Icon
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args}>
          <InfoCircleSvg className="h-5 w-5" />
          Left and Right Icons
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args} fullWidth>
          <InfoCircleSvg className="h-5 w-5" />
          Left and Right Icons Full Width
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button {...args} variant="outline-secondary" aria-label="Info">
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args} variant="outline-secondary">
          <InfoCircleSvg className="h-5 w-5" />
          Left Icon
        </Button>
        <Button {...args} variant="outline-secondary">
          Right Icon
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args} variant="outline-secondary">
          <InfoCircleSvg className="h-5 w-5" />
          Left and Right Icons
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
        <Button {...args} variant="outline-secondary" fullWidth>
          <InfoCircleSvg className="h-5 w-5" />
          Left and Right Icons Full Width
          <InfoCircleSvg className="h-5 w-5" />
        </Button>
      </div>
    </div>
  ),
};
