import type { StoryObj, Meta } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args}>Default</Badge>,
};

export const SolidVariant: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args} variant="primary">
        Primary
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="success">
        Success
      </Badge>
      <Badge {...args} variant="danger">
        Danger
      </Badge>
      <Badge {...args} variant="warning">
        Warning
      </Badge>
      <Badge {...args} variant="info">
        Info
      </Badge>
    </div>
  ),
  name: 'Solid (Default) Variant',
};

export const Size: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end gap-2">
      <Badge {...args} size="small">
        Small
      </Badge>
      <Badge {...args} size="medium">
        Medium
      </Badge>
      <Badge {...args} size="large">
        Large
      </Badge>
      <Badge {...args} size="extra-large">
        Extra Large
      </Badge>
    </div>
  ),
};
